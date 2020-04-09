import {
    Unit
} from '../../../models/settings/index';
import dummy from 'mongoose-dummy';

const fake_unit_data = (field, data) => {

    if (field == null && data == null) {
        return dummy(Unit);
    } else {
        return dummy(Unit, {
            [field]: data
        });
    }
}

export default fake_unit_data