const { isMatch } = require('../utils');
const exchangeCoinGoodsV1CoinGoodsExchangePost = require('../data/exchangeCoinGoodsV1CoinGoodsExchangePost.json');

module.exports = (req, res, next) => {
  if (req.method === 'POST' && isMatch('/v1/coin_goods/exchange/')(req.path)) {
    res.status(200).send(exchangeCoinGoodsV1CoinGoodsExchangePost);
    return;
  }

  next();
};
