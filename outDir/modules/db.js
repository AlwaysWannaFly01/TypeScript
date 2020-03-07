"use strict";
// let dbUrl = 'xxx';
// function getData(): any[] {
//     console.log('获取数据库的数据222333');
//     return [
//         { title: '1' },
//         { title: '2' },
//     ]
// }
// let save = () => {
//     console.log('保存数据成功');
// }
// export {
//     dbUrl,
//     getData,
//     save
// }
Object.defineProperty(exports, "__esModule", { value: true });
//  定义一个操作mysql数据库的类
// ⚠️：要实现泛型接口，这个类也应该是一个泛型类
var MysqlDb = /** @class */ (function () {
    function MysqlDb() {
    }
    MysqlDb.prototype.add = function (info) {
        console.log(info, 'MysqlDb');
        return true;
    };
    MysqlDb.prototype.update = function (info, id) {
        console.log("\u4FEE\u6539id\u4E3A" + id + "\u7684\u6587\u7AE0\u6210\u529F");
        return true;
    };
    MysqlDb.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MysqlDb.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    return MysqlDb;
}());
exports.MysqlDb = MysqlDb;
//  定义一个操作mysql数据库的类
var MssqlDb = /** @class */ (function () {
    function MssqlDb() {
    }
    // constructor(params) {
    //     console.log('数据库建立连接');
    // }
    MssqlDb.prototype.add = function (info) {
        console.log(info, 'MssqlDb');
        return true;
    };
    MssqlDb.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MssqlDb.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MssqlDb.prototype.get = function (id) {
        var list = [{ title: 'title', desc: 'desc' }];
        return list;
    };
    return MssqlDb;
}());
exports.MssqlDb = MssqlDb;
