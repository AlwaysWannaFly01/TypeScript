{
    var arr = [1, 2, 3];
    console.log(arr);
    var myArr = ['q', 'w'];
    myArr.push('0');
    console.log(myArr);
    console.log('~~~~~~~~~~____~~~~~~~~~~~');
}
{
    //tuple 元组，里面的元素可以多个类型，个数是固定的
    var my_tuple = ['aaa', 99];
    console.log(my_tuple[0]);
    // let  aa:[string, number] 
    // aa =[22,'33']
    // console.log(aa);
    console.log('~~~~~~~~~~____~~~~~~~~~~~');
}
{
    var add = function (a, b) {
        return a + b;
    };
    console.log(add(1, 2));
    //指定函数返回值的类型
    var add2 = function (a, b) {
        return a.toString() + b.toString();
    };
    console.log(add2(10, 20).substr(0, 3));
    //默认值
    var add3 = function (a, b) {
        if (b === void 0) { b = 20; }
        console.log(a + b);
    };
    add3(10);
    add3(10, 40);
    var add4 = function (a, b) {
        if (!b) {
            console.log(a);
        }
        else {
            console.log(a + b);
        }
    };
    add4(10, 20);
    add4(10);
    var add5 = function (a) {
        var num = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            num[_i - 1] = arguments[_i];
        }
        return num.reduce(function (total, num) {
            return total + num;
        }, a);
    };
    var sum = add5(10, 20, 30, 40, 50);
    console.log(sum);
    console.log('~~~~~~~~~~____~~~~~~~~~~~');
}
{
    //任意类型
    var a = void 0;
    a = 10;
    a = 'sss';
    // const log = (value: any) => {
    //     if (typeof value === 'number') {
    //         return 1
    //     }
    //     if (typeof value === 'string') {
    //         return 2
    //     }
    //     throw new Error(`ss`)
    // }
    // console.log(log(1));
    // let b: any[]
    // b = [1, 2]
    // b = ['2', 2, [4, '55']]
    var isNumber_1 = function (value) {
        return typeof value === 'number';
    };
    var isString_1 = function (value) {
        return typeof value === 'string';
    };
    var log = function (value) {
        if (isNumber_1(value)) {
            return 1;
        }
        if (isString_1(value)) {
            return 2;
        }
        throw new Error("ss");
    };
    // console.log(log(true));
}
{
    var Movie = /** @class */ (function () {
        function Movie(name, play) {
            if (play === void 0) { play = 20; }
            this.name = name;
            this.play = play;
        }
        Movie.prototype.increment = function (param) {
            this.play += param;
        };
        return Movie;
    }());
    var p = new Movie('ddd');
    p.increment(2);
    console.log(p);
    console.log('~~~~~~~~~~____~~~~~~~~~~~');
}
{
    // 枚举类型
    // 值是数字序号，从0开始
    // 可读性强
    var DaysOfTheWeek = void 0;
    (function (DaysOfTheWeek) {
        // SUN = 100, MON, TUE, WED, THU, FRI, STA
        DaysOfTheWeek[DaysOfTheWeek["sun"] = 10] = "sun";
        DaysOfTheWeek[DaysOfTheWeek["mon"] = 11] = "mon";
        DaysOfTheWeek[DaysOfTheWeek["tue"] = 12] = "tue";
    })(DaysOfTheWeek || (DaysOfTheWeek = {}));
    var day = void 0;
    day = DaysOfTheWeek.sun;
    console.log(day);
}
