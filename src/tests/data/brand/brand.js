import {
    Brand
} from '../../../models/brand/index';
import dummy from 'mongoose-dummy';

const fake_brand_data = () => dummy(Brand);

export default fake_brand_data