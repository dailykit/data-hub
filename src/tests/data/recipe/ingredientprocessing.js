import {
    IngredientProcessing
} from '../../../models/recipe/index';
import dummy from 'mongoose-dummy';

const fake_ingredientprocessing_data = (field, data) => {

    if (field == null && data == null) {
        return dummy(IngredientProcessing);
    } else {
        return dummy(IngredientProcessing, {
            [field]: data
        });
    }
}

export default fake_ingredientprocessing_data