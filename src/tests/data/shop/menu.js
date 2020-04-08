import {
    Menu
} from '../../../models/shop/index';
import dummy from 'mongoose-dummy';

const fake_menu_data = () => dummy(Menu);

export default fake_menu_data