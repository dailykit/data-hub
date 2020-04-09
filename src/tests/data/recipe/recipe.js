import {
    Recipe
} from '../../../models/recipe/index';
import dummy from 'mongoose-dummy';

const fake_recipe_data = (field, data) => {

    if (field == null && data == null) {
        return dummy(Recipe);
    } else {
        return dummy(Recipe, {
            [field]: data
        })
    }
}

export default fake_recipe_data