import {
    Brand
} from '../../../models/brand/index';
import dummy from 'mongoose-dummy';

/*
    1. When all the data is to be generated randomly pass null for 'field' and 'data'.
    2. Field may be either 'ignore' or 'force'. The former takes an array of values that represent the keys to be ignored.
       The latter takes an object. The key in the object represent the fields for which the specific values have to be set. 
*/

const fake_brand_data = (field, data) => {

    if (field == null && data == null) {
        return dummy(Brand);
    } else {
        return dummy(Brand, {
            [field]: data
        })
    }
}

export default fake_brand_data