"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("../modules/db");
var ArticleCateClass = /** @class */ (function () {
    function ArticleCateClass(params) {
        this.title = params.title;
        this.desc = params.desc;
        this.status = params.status;
    }
    return ArticleCateClass;
}());
exports.ArticleCateClass = ArticleCateClass;
var ArticleModel = new db_1.MysqlDb();
exports.ArticleModel = ArticleModel;
