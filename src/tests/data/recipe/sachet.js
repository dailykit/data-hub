import {
    Sachet
} from '../../../models/recipe/index';
import dummy from 'mongoose-dummy';

const fake_sachet_data = (field, data) => {

    if (field == null && data == null) {
        return dummy(Sachet);
    } else {
        return dummy(Sachet, {
            [field]: data
        })
    }
}

export default fake_sachet_data;