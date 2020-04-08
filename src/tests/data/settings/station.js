import {
    Station
} from '../../../models/settings/index';
import dummy from 'mongoose-dummy';

const fake_station_data = () => dummy(Station);

export default fake_station_data