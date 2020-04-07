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

    return Math.round((Math.random() * noOfDocs) - 1);
}

//main function to generate fake data
const fake_data = (noOfDocs) => {

    let processingName = generate_fake_data(models.ProcessingName, noOfDocs, {}),
        allergen = generate_fake_data(models.Allergen, noOfDocs, {}),
        station = generate_fake_data(models.Station, noOfDocs, {}),
        unit = generate_fake_data(models.Unit, noOfDocs, {}),
        packaging = generate_fake_data(models.Packaging, noOfDocs, {}),
        labelTemplate = generate_fake_data(models.LabelTemplate, noOfDocs, {});


    let sachets = generate_fake_data(models.Sachet, noOfDocs, {
        unit: unit[random(noOfDocs)]._id.toHexString(),
        station: station[random(noOfDocs)]._id.toHexString(),
        packaging: packaging[random(noOfDocs)]._id.toHexString(),
        labelTemplate: labelTemplate[random(noOfDocs)]._id.toHexString(),
    });
}

module.exports = {
    fake_data
}