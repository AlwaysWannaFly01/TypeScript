// 1.tsc --init
// 2.修改tsconfig文件，输出目录
// 3. 运行任务-监视tsconfig.json
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
{
    // 类型校验
    //数字类型
    var num = 123;
    num = 456;
    //字符串类型
    var str = 'sf';
    // 布尔类型
    var b2 = false;
    //数组类型
    // var arr = [1, 2] // es5
    // 1.第一种定义数组的方式
    var arr = [22, 33, 44];
    // 2.第二种
    var newArr = [2, 3, 4];
    // console.log(newArr);
    // 元祖类型（tuple）属于数组的一种
    var arr2 = [3, '99'];
    // 枚举
    // 如果标识符没有赋值，它的值就是下标
    // 后一项默认增1
    var Flag = void 0;
    (function (Flag) {
        Flag[Flag["success"] = -1] = "success";
        Flag[Flag["error"] = 0] = "error";
    })(Flag || (Flag = {}));
    var s = Flag.error;
    console.log(s);
    var Err = void 0;
    (function (Err) {
        Err[Err["undefined"] = -1] = "undefined";
        Err[Err["null"] = -2] = "null";
        Err[Err["success"] = -1] = "success";
    })(Err || (Err = {}));
    var e = Err.success;
    console.log(e);
    // 任意类型
    var pp = 213;
    pp = 'ss';
    var oBox = document.getElementById('box');
    console.log(oBox);
    oBox.style.color = 'red';
    // null和undefined 其它类型（never）的子类型
    var nu;
    // console.log(nu);
    var nm;
    console.log(nm);
    var ss;
    ss = null;
    var sc;
    // void类型，TypeScript的void表示没有任何类型，一般用于定义方法的时候没有返回值
    // 没有返回任何类型
    function fn() {
        console.log(213);
    }
    fn();
    // 返回number类型
    function fn2() {
        return 9;
    }
    fn2();
    // never类型
    // 是其他类型的子类型，代表从不会出现的值
    // 意味着声明never的变量只能被never类型所赋值 
    var aa;
    aa = undefined;
    var bb;
    bb = null;
    var ll;
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
    var run2 = function () {
        return 'as';
    };
    // 没有返回值的方法
    var run3 = function () {
        console.log(123);
    };
    run3();
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
    function sum(a) {
        var result = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            result[_i - 1] = arguments[_i];
        }
        var sum = a;
        for (var i = 0; i < result.length; i++) {
            sum += result[i];
        }
        return sum;
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
    var Person = /** @class */ (function () {
        function Person(name) {
            this.name = name;
        }
        Person.prototype.run = function () {
            return this.name + "\u5728\u8FD0\u52A8";
        };
        return Person;
    }());
    var Web = /** @class */ (function (_super) {
        __extends(Web, _super);
        function Web(name) {
            return _super.call(this, name) || this; // 初始化父类的构造函数
        }
        Web.prototype.work = function () {
            console.log(this.name + "\u5728\u5DE5\u4F5C");
        };
        return Web;
    }(Person));
    // let w = new Web('解放军')
    // w.work()// 子类无法访问
    // let p = new Person('东方')
    // console.log(p.name);// 类外部无法访问
    // console.log(p.run());// 类里面可以访问
}
