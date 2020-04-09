import {
    Station
} from '../../../models/settings/index';
import dummy from 'mongoose-dummy';

const fake_station_data = (field, data) => {

    if (field == null && data == null) {
        return dummy(Station);
    } else {
        return dummy(Station, {
            [field]: data
        });
    }
}

export default fake_station_data