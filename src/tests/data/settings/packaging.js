import {
    Packaging
} from '../../../models/settings/index';
import dummy from 'mongoose-dummy';

const fake_packaging_data = (field, data) => {

    if (field == null && data == null) {
        return dummy(Packaging);
    } else {
        return dummy(Packaging, {
            [field]: data
        });
    }
}

export default fake_packaging_data