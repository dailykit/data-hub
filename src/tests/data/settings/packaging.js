import {
    Packaging
} from '../../../models/settings/index';
import dummy from 'mongoose-dummy';

const fake_packaging_data = () => dummy(Packaging);

export default fake_packaging_data