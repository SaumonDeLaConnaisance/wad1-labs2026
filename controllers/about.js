'use strict';

import logger from "../utils/logger.js";
import appStore from "../models/app-store.js";
import object from "../models/object.js";

const about = {
  createView(request, response) {
    logger.info("About page loading!");

    const viewData = {
      title: "About the Playlist app",
      object: object.getAppInfo()
    };

    response.render('about', viewData);
  },
};

export default about;