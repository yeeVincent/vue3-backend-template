const { isMatch } = require('../utils');
const galleryListV1ConversationGalleryListGet = require('../data/galleryListV1ConversationGalleryListGet.json');

module.exports = (req, res, next) => {
  if (
    req.method === 'GET' &&
    isMatch('/v1/conversation/gallery_list/')(req.path)
  ) {
    res.status(200).send(galleryListV1ConversationGalleryListGet);
    return;
  }

  next();
};
