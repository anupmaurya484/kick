const express = require('express');
const router = express.Router();
const crawl_main = require('./marketwatch_main');
const crawl_latest_article = require('./crawl_latest_article');

module.exports = {
    getMainArticle: crawl_main.getMainArticle,
    latestArticle: crawl_latest_article.getLists
};

