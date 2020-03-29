require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const { ApolloServer } = require('apollo-server-express')

const schema = require('./schema')
const models = require('./models')

const app = express()

const isProd = process.env.NODE_ENV === 'production' || false

mongoose
   .connect(process.env.DB_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
   })
   .then(() => {
      console.log('🚀 Database: Connected')
   })
   .catch(err => {
      console.error(err)
   })

const server = new ApolloServer({
   schema,
   context: {
      models
   },
   debug: !isProd,
   playground: !isProd,
   introspection: !isProd
})

server.applyMiddleware({ app })

app.listen({ port: process.env.PORT || 4000 }, () =>
   console.log(
      `🚀 Server: Running on :${process.env.PORT || 4000}${server.graphqlPath}`
   )
)
