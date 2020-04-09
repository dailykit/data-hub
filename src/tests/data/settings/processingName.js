import {
    ProcessingName
} from '../../../models/settings/index';
import dummy from 'mongoose-dummy';

const fake_processingName_data = (field, data) => {

    if (field == null && data == null) {
        return dummy(ProcessingName);
    } else {
        return dummy(ProcessingName, {
            [field]: data
        });
    }
}

export default fake_processingName_data