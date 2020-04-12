import dummy from 'mongoose-dummy';
import * as models from '../../models/index';
//Section to generate collective data for all the models.


/*
    Model - refers to the model for which the documents are to be generated.
    noOfDocs - refers to the number of documents to be generated.
    forceFields - refers to the fields for which custom values are to be provided.
*/
const generate_fake_data = (Model, noOfDocs, forceFields) => {

    let result = [];

    for (let i = 0; i < noOfDocs; i++) {
        result.push(dummy(Model, {
            force: forceFields
        }));
    }

    return result;
}

// function to generate a random number.
// The random number refers to an index position for the array of documents.
const random = (noOfDocs) => {

    let num = Math.round((Math.random() * noOfDocs) - 1);
    if (num < 0)
        return 0;
    else
        return num;
}

//main function to generate fake data for all the models
const fake_data = (noOfDocs) => {

    let processingNames = generate_fake_data(models.ProcessingName, noOfDocs, {}),
        allergens = generate_fake_data(models.Allergen, noOfDocs, {}),
        stations = generate_fake_data(models.Station, noOfDocs, {}),
        units = generate_fake_data(models.Unit, noOfDocs, {}),
        packagings = generate_fake_data(models.Packaging, noOfDocs, {}),
        labelTemplates = generate_fake_data(models.LabelTemplate, noOfDocs, {});

    let sachets = generate_fake_data(models.Sachet, noOfDocs, {
        unit: units[random(noOfDocs)]._id,
        station: stations[random(noOfDocs)]._id,
        packaging: packagings[random(noOfDocs)]._id,
        labelTemplate: labelTemplates[random(noOfDocs)]._id,
    });

    let ingredientProcessings = generate_fake_data(models.IngredientProcessing, noOfDocs, {
        name: processingNames[random(noOfDocs)]._id,
        sachets: [sachets[random(noOfDocs)]._id, sachets[random(noOfDocs)]._id],
        recipes: []
    });

    let ingredients = generate_fake_data(models.Ingredient, noOfDocs, {
        processings: [ingredientProcessings[random(noOfDocs)]._id, ingredientProcessings[random(noOfDocs)]._id],
        sachets: [sachets[random(noOfDocs)]._id, sachets[random(noOfDocs)]._id]
    });

    let recipes = generate_fake_data(models.Recipe, noOfDocs, {
        allergens: [allergens[random(noOfDocs)]._id, allergens[random(noOfDocs)]._id],
        ingredient: ingredients[random(noOfDocs)]._id,
        processing: ingredientProcessings[random(noOfDocs)]._id,
        sachet: sachets[random(noOfDocs)]._id
    });

    let brands = generate_fake_data(models.Brand, noOfDocs, {});

    let products = generate_fake_data(models.Product, noOfDocs, {
        defaultRecipe: recipes[random(noOfDocs)]._id,
        recipe: recipes[random(noOfDocs)]._id
    });

    let collections = generate_fake_data(models.MenuCollection, noOfDocs, {
        products: [products[random(noOfDocs)]._id, products[random(noOfDocs)]._id]
    });

    let menus = generate_fake_data(models.Menu, noOfDocs, {
        menuCollection: collections[random(noOfDocs)]._id
    });

    return {
        processingNames,
        allergens,
        stations,
        units,
        packagings,
        labelTemplates,
        sachets,
        ingredientProcessings,
        ingredients,
        recipes,
        brands,
        products,
        products,
        collections,
        menus
    }
}

export {
    fake_data
}