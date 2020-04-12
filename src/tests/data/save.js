import * as models from '../../models/index';
import {
    fake_data
} from './dummy';

const saveToDB = async () => {

    let result = fake_data(2);

    //data for models - settings.
    await models.ProcessingName.insertMany(result.processingNames);
    await models.Allergen.insertMany(result.allergens);
    await models.Station.insertMany(result.stations);
    await models.Unit.insertMany(result.units);
    await models.Packaging.insertMany(result.packagings);
    await models.LabelTemplate.insertMany(result.labelTemplates);

    //data for models - recipe
    await models.Sachet.insertMany(result.sachets);
    await models.IngredientProcessing.insertMany(result.ingredientProcessings);
    await models.Ingredient.insertMany(result.ingredients);
    await models.Recipe.insertMany(result.recipes);

    //data for models - brand
    await models.Brand.insertMany(result.brands);

    //data for models - shop
    await models.Product.insertMany(result.products);
    await models.MenuCollection.insertMany(result.collections);
    await models.Menu.insertMany(result.menus);
}

export {
    saveToDB
}