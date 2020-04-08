import {
    Allergen
} from '../../../models/settings/index';
import dummy from 'mongoose-dummy';

const fake_allergen_data = () => dummy(Allergen);

export default fake_allergen_data