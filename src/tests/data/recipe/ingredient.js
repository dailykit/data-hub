import {
    Ingredient
} from '../../../models/recipe/index';

const fake_ingredient_data = (field, data) => {

    if (field == null && data == null) {
        return dummy(Ingredient);
    } else {
        return dummy(Ingredient, {
            [field]: data
        });
    }
}

export default fake_ingredient_data