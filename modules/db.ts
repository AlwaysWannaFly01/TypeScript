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


interface DBI<T> {
    add(info: T): boolean;
    update(info: T, id: number): boolean;
    delete(id: number): boolean;
    get(id: number): any[];
}

//  定义一个操作mysql数据库的类
// ⚠️：要实现泛型接口，这个类也应该是一个泛型类
export class MysqlDb<T> implements DBI<T>{
    add(info: T): boolean {
        console.log(info,'MysqlDb');
        return true
    }
    update(info: T, id: number): boolean {
        console.log(`修改id为${id}的文章成功`);
        return true
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    get(id: number): any[] {
        throw new Error("Method not implemented.");
    }
}

//  定义一个操作mysql数据库的类
export class MssqlDb<T> implements DBI<T>{
    // constructor(params) {
    //     console.log('数据库建立连接');
    // }
    add(info: T): boolean {
        console.log(info, 'MssqlDb');
        return true
    }
    update(info: T, id: number): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    get(id: number): any[] {
        var list = [{ title: 'title', desc: 'desc' }]
        return list
    }
}