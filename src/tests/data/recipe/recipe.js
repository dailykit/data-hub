import {
    Recipe
} from '../../../models/recipe/index';
import dummy from 'mongoose-dummy';

const fake_recipe_data = () => dummy(Recipe);

export default fake_recipe_data