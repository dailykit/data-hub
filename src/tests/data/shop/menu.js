import {
    Menu
} from '../../../models/shop/index';
import dummy from 'mongoose-dummy';

const fake_menu_data = (field, data) => {
    if (field == null && data == null) {
        return dummy(Menu);
    } else {
        return dummy(Menu, {
            [field]: data
        });
    }
}

export default fake_menu_data