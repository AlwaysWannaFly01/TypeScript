// 1.tsc --init
// 2.修改tsconfig文件，输出目录
// 3. 运行任务-监视tsconfig.json

{
    // 类型校验

    //数字类型
    var num: number = 123;
    num = 456

    //字符串类型
    var str: string = 'sf'

    // 布尔类型
    let b2: boolean = false

    //数组类型
    // var arr = [1, 2] // es5
    // 1.第一种定义数组的方式
    var arr: number[] = [22, 33, 44]
    // 2.第二种
    var newArr: Array<number> = [2, 3, 4]
    // console.log(newArr);

    // 元祖类型（tuple）属于数组的一种
    let arr2: [number, string] = [3, '99']

    // 枚举
    // 如果标识符没有赋值，它的值就是下标
    // 后一项默认增1
    enum Flag { success = -1, error = 0 }
    let s: Flag = Flag.error;
    console.log(s);

    enum Err { 'undefined' = -1, null = -2, success }
    let e: Err = Err.success
    console.log(e);

    // 任意类型
    let pp: any = 213
    pp = 'ss'

    // var oBox: any = document.getElementById('box')
    // console.log(oBox);

    // oBox.style.color = 'red';

    // null和undefined 其它类型（never）的子类型
    var nu: number;
    // console.log(nu);

    var nm: number | undefined;
    console.log(nm);

    var ss: null;
    ss = null

    var sc: number | undefined | null


    // void类型，TypeScript的void表示没有任何类型，一般用于定义方法的时候没有返回值
    // 没有返回任何类型
    let fn = (): void => {
        console.log(213);
    }
    fn()
    // 返回number类型
    let fn2 = (): number => {
        return 9
    }
    fn2()

    // never类型
    // 是其他类型的子类型，代表从不会出现的值
    // 意味着声明never的变量只能被never类型所赋值 
    var aa: undefined;
    aa = undefined;

    var bb: null;
    bb = null;

    var ll: never;
    // ll = (() => {
    //     throw new Error('错误')
    // })()
}

{
    // 函数声明法，严格模式下，块内不允许函数声明
    // function run(): string {
    //     return '123'
    // }

    // 表达式
    var run2 = function (): string {
        return 'as'
    }

    // 没有返回值的方法
    var run3 = function (): void {
        console.log(123);
    }
    run3()

    // 方法可选参数
    // 可选参数必须配置到参数的最后面
    // function getInfo(name: string, age?: number) {
    //     if (age) return `${name} --- ${age}`
    //     return `${name} --- 年龄保密`
    // }
    // alert(getInfo('aa', 88))

    // 默认参数
    // function getInfo(name: string, age: number = 2) {
    //     if (age) return `${name} --- ${age}`
    //     return `${name} --- 年龄保密`
    // }
    // alert(getInfo('aa'))

    // 剩余参数
    // function sum(a: number, b: number, c: number, d: number) {
    //     return a + b + c + d
    // }
    // alert(sum(1,2,3,4))

    // 三点运算符，接受传过来的值
    let sum = (a: number, ...result: number[]) => {
        let sum = a;
        for (let i = 0; i < result.length; i++) {
            sum += result[i]
        }
        return sum
    }
    // alert(sum(1, 2, 3, 4))

    // es5中出现同名方法，下面的会替换上面的方法
    // function css(config) {

    // }
    // function css(config, value) {

    // }

    // ts函数重载
    // function getInfo(name: string): string {
    //     return 'string'
    // }
    // function getInfo(age: number): string {
    //     return 99
    // }
    // function getInfo(str: any): any {
    //     if (typeof str === 'string') {
    //         return `我叫${str}`
    //     } else if (typeof str === 'number') {
    //         return `我的年龄${str}`
    //     } else {
    //         return 'dd'
    //     }
    // }
    // alert(getInfo(88))

    // 箭头函数 es6
    // this指向上下文
    // setTimeout(() => {

    // }, 900);
}

{
    // es5中定义类
    // function Person(name) {
    //     this.name = name
    //     this.run = function () {
    //         console.log(this.name);
    //     }
    // }
    // var person = new Person('awy')
    // person.run()

    //1:ts中定义类
    // class Person {
    //     name: string; //属性，前面省略类public关键词
    //     constructor(n: string) {// 构造函数 实例化类的时候触发的方法
    //         this.name = n
    //     }
    //     run(): void {
    //         console.log(this.name);
    //     }
    //     getName(): string {
    //         return this.name
    //     }
    //     setName(param): void {
    //         this.name = param
    //     }
    // }
    // let p1 = new Person('历史')
    // p1.run()
    // console.log(p1.getName());
    // p1.setName('🥄')
    // console.log(p1.getName());


    //2:ts中实现继承 extends super
    // class Person {
    //     name: string
    //     constructor(name: string) {
    //         this.name = name
    //     }
    //     run(): string {
    //         return `${this.name}在运动`
    //     }
    // }
    // let p2 = new Person('是')
    // console.log(p2.run());

    // class Web extends Person {
    //     constructor(name: string) {
    //         super(name) // 初始化父类的构造函数
    //     }
    //     work() {
    //         console.log(`${this.name}在工作`);
    //     }
    //     run(): string {
    //         return `${this.name}在运动--子类`
    //     }
    // }

    // let w = new Web('嗷嗷')
    // console.log(w.run());
    // w.work()


    // 3.类里面的修饰符
    // public:公有 ，在类里面，子类，类外面都可以访问
    // class Person {
    //     public name: string
    //     constructor(name: string) {
    //         this.name = name
    //     }
    //     run(): string {
    //         return `${this.name}在运动`
    //     }
    // }

    // class Web extends Person {
    //     constructor(name: string) {
    //         super(name) // 初始化父类的构造函数
    //     }
    //     work() {
    //         console.log(`${this.name}在工作`);
    //     }
    //     run(): string {
    //         return `${this.name}在运动--子类`
    //     }
    // }

    // let w = new Web('打开')
    // w.work()

    // let p = new Person('哈哈哈')
    // console.log(p.name);

    // protected:保护类型 ，在类里面，子类里面可以访问，类外部无法访问

    // class Person {
    //     protected name: string
    //     constructor(name: string) {
    //         this.name = name
    //     }
    //     run(): string {
    //         return `${this.name}在运动`
    //     }
    // }

    // class Web extends Person {
    //     constructor(name: string) {
    //         super(name) // 初始化父类的构造函数
    //     }
    //     work() {
    //         console.log(`${this.name}在工作`);
    //     }
    // }

    // let w = new Web('解放军')
    // w.work()

    // // 类外部都没发访问保护类型的属性
    // let p = new Person('类外部')
    // console.log(p.name); // 浏览器能执行，但是在ts中是错误的写法，编译错误


    // private:私有，在类里面可以访问，子类，类外部都 无法访问
    // class Person {
    //     private name: string
    //     constructor(name: string) {
    //         this.name = name
    //     }
    //     run(): string {
    //         return `${this.name}在运动`
    //     }
    // }

    // class Web extends Person {
    //     constructor(name: string) {
    //         super(name) // 初始化父类的构造函数
    //     }
    //     work() {
    //         console.log(`${this.name}在工作`);
    //     }
    // }

    // let w = new Web('解放军')
    // w.work()// 子类无法访问

    // let p = new Person('东方')
    // console.log(p.name);// 类外部无法访问
    // console.log(p.run());// 类里面可以访问
}

{
    // 静态属性，静态方法
    // class Person {
    //     public name: string
    //     public age: number = 90
    //     static sex: string = '男'
    //     constructor(parameters) {
    //         this.name = parameters
    //     }
    //     run() { // 实例方法
    //         console.log(`${this.name}在运动`);

    //     }
    //     work() {
    //         console.log(`${this}在工作`);
    //     }
    //     static print() { // 静态方法
    //         // console.log(`打印${this.age}岁`);// 静态方法不能直接调用类里面的属性
    //         console.log(`打印${Person.sex}性别`);
    //     }
    // }
    // // let p = new Person('张三')
    // // p.run()
    // Person.print() // 执行静态方法


    // 多态： 父类定义一个方法不去实现，让继承它的子类去实现，每一个子类有不同的表现
    // 属于继承的一种表现
    // class Animal {
    //     public name: string
    //     constructor(parameters: string) {
    //         this.name = parameters
    //     }
    //     eat() { // 具体吃什么不知道，由继承它的子类去实现，每一个子类的表现不一样
    //         console.log(`吃的方法`);
    //     }
    // }

    // class Dog extends Animal {
    //     constructor(name: string) {
    //         super(name)
    //     }
    //     eat() {
    //         return this.name + '吃粮食'
    //     }
    // }
    // class Cat extends Animal {
    //     constructor(name: string) {
    //         super(name)
    //     }
    //     eat() {
    //         return this.name + '吃老鼠'
    //     }
    // }

    // 抽象类
    //typescript中的抽象类：它是提供其他类继承的基类，不能直接被实例化。

    //用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。

    // abstract抽象方法只能放在抽象类里面

    // 抽象类和抽象方法用来定义标准 。   

    //标准：Animal 这个类要求它的子类必须包含eat方法

    abstract class Animal {
        public name: string
        constructor(name: string) {
            this.name = name
        }
        abstract eat(): any // 不包含具体实现
    }

    // var a = new Animal() // 无法创建抽象类的实例

    class Dog extends Animal {
        constructor(name: string) {
            super(name)
        }
        eat() {
            console.log(this.name + '吃粮食');
        }
    }
    let d = new Dog('ss')
    d.eat()

    // class Cat extends Animal {
    //     constructor(name: string) {
    //         super(name)
    //     }
    // eat() {
    //     console.log(this.name + '吃老鼠');
    // }
    // }
    // var c = new Cat('hh') // 非抽象类“Cat”不会实现继承自“Animal”类的抽象成员“eat”。
    // c.eat()
}

{
    // 接口
    // 1.属性接口
    // function printLabel(): void {
    //     console.log('printLabel');

    // }
    // printLabel()

    // ts中定义方法传入参数
    // function printLabel(label: string): void {
    //     console.log('printLabel');

    // }
    // printLabel('hhh')

    // ts中自定义方法传入参数对json进行约束
    // function printLabel(labelInfo: { label: string }): void {
    //     console.log('printLabel');
    // }
    // printLabel({ label: '张三' })

    // 对批量方法传入参数进行约束

    // 接口
    // interface FullName {
    //     firstName: string;
    //     secondName: string
    // }

    // function printName(name: FullName) {
    //     console.log(name.firstName + '-' + name.secondName);
    // }
    // function printInfo(info: FullName) {
    //     // 传入对参数必须和接口中保持一致
    //     console.log(info.firstName + info.secondName + info.age);
    // }
    // // 传入对象必须 包含firstName 和 secondName
    // var obj = {
    //     age: 99,
    //     firstName: '张',
    //     secondName: '三'
    // }
    // printName(obj)

    // var info = {
    //     age: 99,
    //     firstName: '李',
    //     secondName: '三'
    // }
    // printInfo(info)

    //  接口，可选属性
    // interface FullName {
    //     firstName: string
    //     secondName?: string // 可传可不传
    // }
    // function getName(name: FullName) {
    //     console.log(name);

    // }
    // // 参数对顺序可不一致
    // var obj = {
    //     secondName: 'secondName',
    //     firstName: 'firstName'
    // }
    // getName(obj)


    // interface Config {
    //     type: string;
    //     url: string;
    //     data?: string;
    //     dataType: string
    // }
    // // 原生js封装ajax
    // function ajax(config: Config) {
    //     var xhr = new XMLHttpRequest()
    //     xhr.open(
    //         config.type, config.url, true
    //     )
    //     xhr.send(config.data)
    //     xhr.onreadystatechange = function () {
    //         if (xhr.readyState === 4 && xhr.status === 200) {
    //             console.log('成功');
    //             if (config.dataType === 'json') {
    //                 console.log(JSON.parse(xhr.responseText));
    //             } else {
    //                 console.log(xhr.responseText);
    //             }

    //         }
    //     }
    // }
    // ajax({
    //     type: 'get',
    //     data: 'name=zhangsan',
    //     url: 'http://a.itying.com/api/productList',
    //     dataType: 'json'
    // })
}

{
    // 函数类型接口：对方法传入对参数以及返回值进行约束
    // 加密对函数类型接口
    interface encrypt {
        (key: string, value: string): string;
    }
    var md5: encrypt = function (key: string, value: string): string {
        return key + value
    }
    console.log(md5('name', 'zhangsan'));

    var sh: encrypt = function (key: string, value: string): string {
        return key + '---' + value
    }

    // ts定义数组
    var arr: number[] = [22, 34]
    var arr2: Array<string> = ['s', 's']

    // 可索引接口，数组的约束(不常用)
    interface UserArr {
        [index: number]: string
    }
    var arr3: UserArr = ['aaa', 'ddd']
    console.log(arr3);

    // 可索引接口，对象的约束(不常用)
    interface UserObj {
        [index: string]: string
    }
    var arr4: UserObj = { name: '张三', 3: '44' }
    console.log(arr4);

    // 类类型接口：对类的约束 和抽象类有点相似
    interface Animal {
        name: string
        eat(str): void;
    }
    class Dog implements Animal {
        name: string
        constructor(name: string) {
            this.name = name
        }
        eat() {
            console.log(this.name + '吃骨头');
        }
    }
    var d = new Dog('小黑')
    d.eat()

    class Cat implements Animal {
        name: string
        constructor(name: string) {
            this.name = name
        }
        eat(food: string): void {
            console.log(this.name + '吃' + food);
        };
    }
    var c = new Cat('小花')
    c.eat('🐟')
}

{
    // 接口扩展, 接口可以继承接口
    // interface Animal {
    //     eat(param: number): void;
    // }
    // interface Person extends Animal {
    //     work(param: string): void;
    // }
    // class Web implements Person {
    //     public name: string;
    //     constructor(name: string) {
    //         this.name = name
    //     }
    //     eat(param: number) {
    //         console.log(this.name + param)
    //     }
    //     work(param: string) {
    //         console.log(this.name + param)
    //     }
    // }
    // let w = new Web('正在')
    // w.eat(9)
    // w.work('写代码')
}

{
    interface Animal {
        eat(param: number): void;
    }
    interface Person extends Animal {
        work(param: string): void;
    }
    class Programmner {
        public name: string
        constructor(name: string) {
            this.name = name
        }
        coding(code: string) {
            console.log(this.name + code);
        }
    }
    class Web extends Programmner implements Person {
        public name: string;
        constructor(name: string) {
            super(name)
        }
        eat(param: number) {
            console.log(this.name + param)
        }
        work(param: string) {
            console.log(this.name + param)
        }
    }
    let w = new Web('张三')
    // w.eat(9)
    w.work('写代码')
    w.coding('写ts代码')
}

{
    // 泛型：可以支持不特定的数据类型  要求:传入的类型和返回的类型一样
    // T表示泛型，具体什么类型是调用这个方法时决定的
    let getData = <T>(value: T): T => {
        return value
    }
    getData<number>(123)
    // getData<number>('123') // 错误写法
    getData<string>('aa')

    // 类的泛型
    class MinClass<T>{
        public list: T[] = []
        add(value: T): void {
            this.list.push(value);
        }
        min(): T {
            var min = this.list[0]
            for (let i = 0; i < this.list.length; i++) {
                if (min > this.list[i]) {
                    min = this.list[i]
                }
            }
            return min;
        }
    }
    var m = new MinClass<number>();// 实例化类并且定义类类的T代表的类型是number
    m.add(6)
    m.add(3)
    m.add(7)
    m.add(4)
    m.add(5)
    console.log(m.min());

    var m2 = new MinClass<string>();// 实例化类并且定义类类的T代表的类型是string
    m2.add('c')
    m2.add('b')
    m2.add('f')
    m2.add('a')
    m2.add('e')
    console.log(m2.min());

    // 接口的泛型
    interface ConfigFn {
        <T>(value: T): T;
    }

    let setData: ConfigFn = function <T>(value: T): T {
        return value
    }

    console.log(setData<string>('name'));

    interface ConfigFn2<T> {
        (value: T): T;
    }
    let Mydata: ConfigFn2<string> = function <T>(value: T): T {
        return value
    }
    console.log(Mydata('30'));
}

{
    // 把类作为参数约束数据传入的类型
    // class User {
    //     username: string | undefined;
    //     password: string | undefined;
    // }

    // class MysqlDb {
    //     add(user: User): boolean {
    //         console.log(user);
    //         return true;
    //     }
    // }
    // let u = new User()
    // u.username = '张三'
    // u.password = '123456'

    // let db = new MysqlDb()
    // db.add(u)

    // class ArticleCate {
    //     title: string | undefined;
    //     desc: string | undefined;
    //     status: number | undefined;
    // }

    // class MysqlDb {
    //     add(info: ArticleCate): boolean {
    //         console.log(info);
    //         return true;
    //     }
    // }
    // let a = new ArticleCate()
    // a.title = 'title'
    // a.desc = 'desc'
    // a.status = 1

    // let db = new MysqlDb()
    // db.add(a)


    //操作数据库的泛型类
    class MysqlDb<T>{
        add(info: T): boolean {
            console.log(info);
            return true;
        }
        updated(info: T, id: number): boolean {
            console.log(info);
            console.log(id);
            return true
        }
    }
    class User {
        username: string | undefined;
        password: string | undefined;
    }

    let u = new User()
    u.username = '张三'
    u.password = '123456'
    let db = new MysqlDb<User>()
    db.add(u)

    // 定义一个ArticleCate类和数据库进行映射
    class ArticleCate {
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

    // 增加数据
    // let a = new ArticleCate({
    //     title: '分类',
    //     desc: '描述',
    //     // status: 0
    // })

    // // 类当作参数的泛型类
    // let db2 = new MysqlDb<ArticleCate>()
    // db2.add(a)

    // 修改数据
    let a = new ArticleCate({
        title: '分类2',
        desc: '描述2',
        status: 0,
    })

    let db2 = new MysqlDb<ArticleCate>()
    db2.updated(a, 9)
    console.log('类当作参数的泛型类')
}

{
    /*

    功能：定义一个操作数据库的库  支持 Mysql Mssql  MongoDb

    要求1：Mysql MsSql  MongoDb功能一样  都有 add  update  delete  get方法    

    注意：约束统一的规范、以及代码重用

    解决方案：需要约束规范所以要定义接口 ，需要代码重用所以用到泛型

    1、接口：在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范

    2、泛型 通俗理解：泛型就是解决 类 接口 方法的复用性、
    
    */

    // interface DBI<T> {
    //     add(info: T): boolean;
    //     update(info: T, id: number): boolean;
    //     delete(id: number): boolean;
    //     get(id: number): any[];
    // }

    // //  定义一个操作mysql数据库的类
    // // ⚠️：要实现泛型接口，这个类也应该是一个泛型类
    // class MysqlDb<T> implements DBI<T>{
    //     add(info: T): boolean {
    //         console.log(info);
    //         return true
    //     }
    //     update(info: T, id: number): boolean {
    //         throw new Error("Method not implemented.");
    //     }
    //     delete(id: number): boolean {
    //         throw new Error("Method not implemented.");
    //     }
    //     get(id: number): any[] {
    //         throw new Error("Method not implemented.");
    //     }
    // }

    // //  定义一个操作mysql数据库的类
    // class MssqlDb<T> implements DBI<T>{
    //     // constructor(params) {
    //     //     console.log('数据库建立连接');
    //     // }
    //     add(info: T): boolean {
    //         console.log(info, 'MssqlDb');
    //         return true
    //     }
    //     update(info: T, id: number): boolean {
    //         throw new Error("Method not implemented.");
    //     }
    //     delete(id: number): boolean {
    //         throw new Error("Method not implemented.");
    //     }
    //     get(id: number): any[] {
    //         var list = [{ title: 'title', desc: 'desc' }]
    //         return list
    //     }
    // }

    // // 操作用户表 定义一个user类和数据表做映射
    // // class User {
    // //     username: string | undefined;
    // //     password: string | undefined;
    // // }

    // // let u = new User()
    // // u.username = '张三'
    // // u.password = '123456'

    // // let Mysql1 = new MysqlDb<User>()
    // // Mysql1.add(u)


    // class User {
    //     username: string | undefined;
    //     password: string | undefined;
    // }

    // let u = new User()
    // u.username = '历史'
    // u.password = '333'

    // let Mysql2 = new MssqlDb<User>()
    // Mysql2.add(u)

    // // 获取user表🆔=4的数据
    // let data = Mysql2.get(4)
    // console.log(data)
}

// Ts的模块化
// import { getData, save, dbUrl } from './modules/db';
// {
//     getData()
//     save()
//     console.log(dbUrl);
// }
// import { MysqlDb, MssqlDb } from './modules/db';
// {
//     console.log('~~~模块化封装数据库～～～');
//     class User {
//         username: string | undefined;
//         password: string | undefined;
//     }

//     let u = new User()
//     u.username = '问我'
//     u.password = '123456'

//     let Mysql1 = new MysqlDb<User>()
//     Mysql1.add(u)

// }

/* 模块化封装db库 */
import { UserClass, UserModel } from './model/user';
import { ArticleCateClass, ArticleModel } from './model/articles';
{
    // 增加数据
    let u = new UserClass()
    u.username = '复工'
    u.password = '888'
    UserModel.add(u)

    // 获取user表数据
    let res = UserModel.get(0)
    console.log(res);

    let obj = {
        title: '标题',
        desc: '描述',
        // status: 0
    }
    let a = new ArticleCateClass(obj)
    ArticleModel.add(a)
    ArticleModel.update(a, 8)
    ArticleModel.update(a, 99)
}