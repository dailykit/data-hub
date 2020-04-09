import {
    Allergen
} from '../../../models/settings/index';
import dummy from 'mongoose-dummy';

const fake_allergen_data = (field, data) => {

    if (field == null && data == null) {
        return dummy(Allergen);
    } else {
        return dummy(Allergen, {
            [field]: data
        });
    }
}

export default fake_allergen_data