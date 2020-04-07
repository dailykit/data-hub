import dummy from 'mongoose-dummy';

const fake_brand_data = () => {

    import {
        Brand
    } from '../brand/index';
    return dummy(Brand);
}

const fake_inventory_data = () => {

    // The dummy does not support the data type Decimal128
}

const fake_recipe_data = () => {

    import {
        Recipe,
        Ingredient,
        IngredientProcessing,
        Sachet
    } from '../recipe/index';

    return {
        recipe: dummy(Recipe),
        ingredient: dummy(Ingredient),
        ingredientProcessing: dummy(IngredientProcessing),
        sachet: dummy(Sachet)
    }
}

const fake_settings_data = () => {

    import {
        ProcessingName,
        Allergen,
        Station,
        Unit,
        Packaging,
        LabelTemplate
    } from '../settings/index';

    return {
        processingName: dummy(ProcessingName),
        allergen: dummy(Allergen),
        station: dummy(Station),
        unit: dummy(Unit),
        packaging: dummy(Packaging),
        labelTemplate: dummy(LabelTemplate)
    }
}

const fake_shop_data = () => {

    import {
        MenuCollection,
        Product,
        Menu
    } from '../shop/index';

    return {
        menuCollection: dummy(MenuCollection),
        product: dummy(Product),
        menu: dummy(Menu)
    }
}

module.exports = {
    fake_brand_data,
    fake_inventory_data,
    fake_recipe_data,
    fake_settings_data,
    fake_shop_data
}