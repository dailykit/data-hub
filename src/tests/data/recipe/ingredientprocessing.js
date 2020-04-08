import {
    IngredientProcessing
} from '../../../models/recipe/index';
import dummy from 'mongoose-dummy';

const fake_ingredientprocessing_data = () => dummy(IngredientProcessing);

export default fake_ingredientprocessing_data