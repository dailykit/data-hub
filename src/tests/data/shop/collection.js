import {
    MenuCollection
} from '../../../models/shop/index';
import dummy from 'mongoose-dummy';

const fake_menuCollection_data = (field, data) => {

    if (field == null && data == null) {
        return dummy(MenuCollection);
    } else {
        return dummy(MenuCollection, {
            [field]: data
        });
    }
}

export default fake_menuCollection_data