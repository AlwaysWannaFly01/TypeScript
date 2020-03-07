import { MysqlDb } from '../modules/db';
class ArticleCateClass {
    title: string | undefined;
    desc: string | undefined;
    status: number | undefined;
    constructor(params: {
        title: string | undefined,
        desc: string | undefined,
        status?: number | undefined,
    }) {
        this.title = params.title
        this.desc = params.desc
        this.status = params.status
    }
}

let ArticleModel = new MysqlDb<ArticleCateClass>()

export {
    ArticleCateClass,
    ArticleModel
}