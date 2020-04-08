import {
    ProcessingName
} from '../../../models/settings/index';
import dummy from 'mongoose-dummy';

const fake_processingName_data = () => dummy(ProcessingName);

export default fake_processingName_data