import {
    Unit
} from '../../../models/settings/index';
import dummy from 'mongoose-dummy';

const fake_unit_data = () => dummy(Unit);

export default fake_unit_data