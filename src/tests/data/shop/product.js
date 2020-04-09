import {
    Product
} from '../../../models/shop/index';
import dummy from 'mongoose-dummy';

const fake_product_data = (field, data) => {

    if (field == null && data == null) {
        return dummy(Product);
    } else {
        return dummy(Product, {
            [field]: data
        });
    }
}

export default fake_product_data