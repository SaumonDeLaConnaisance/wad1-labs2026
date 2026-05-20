'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';
import appStore from './app-store.js';

const object = {
    store: new JsonStore('./models/object.json', { employee: {} }),
    collection: 'employee',
    array: 'employee',

    getAppInfo() {
        return this.store.findAll(this.collection);
    },

}

export default object;