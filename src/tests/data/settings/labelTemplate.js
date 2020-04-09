import {
    LabelTemplate
} from '../../../models/settings/index';
import dummy from 'mongoose-dummy';

const fake_labelTemplate_data = (field, data) => {

    if (field == null && data == null) {
        return dummy(LabelTemplate);
    } else {
        return dummy(LabelTemplate, {
            [field]: data
        });
    }
}

export default fake_labelTemplate_data