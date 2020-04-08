import {
    MenuCollection
} from '../../../models/shop/index';
import dummy from 'mongoose-dummy';

const fake_menuCollection_data = () => dummy(MenuCollection);

export default fake_menuCollection_data