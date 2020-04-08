import {
    Sachet
} from '../../../models/recipe/index';
import dummy from 'mongoose-dummy';

const fake_sachet_data = () => dummy(Sachet);

export default fake_sachet_data;