import {
    Product
} from '../../../models/shop/index';
import dummy from 'mongoose-dummy';

const fake_product_data = () => dummy(Product);

export default fake_product_data