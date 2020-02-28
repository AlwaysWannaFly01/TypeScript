{
    let arr: number[] = [1, 2, 3]
    console.log(arr);

    let myArr: Array<string> = ['q', 'w']
    myArr.push('0')
    console.log(myArr);
    console.log('~~~~~~~~~~____~~~~~~~~~~~');
}

{
    //tuple 元组，里面的元素可以多个类型，个数是固定的
    let my_tuple: [string, number] = ['aaa', 99]
    console.log(my_tuple[0]);

    // let  aa:[string, number] 
    // aa =[22,'33']
    // console.log(aa);
    console.log('~~~~~~~~~~____~~~~~~~~~~~');
}

{
    const add = (a: number, b: number) => {
        return a + b
    }
    console.log(add(1, 2));

    //指定函数返回值的类型
    const add2 = (a: number, b: number): string => {
        return a.toString() + b.toString()
    }
    console.log(add2(10, 20).substr(0, 3));

    //默认值
    const add3 = (a: number, b = 20): void => {
        console.log(a + b);
    }
    add3(10)
    add3(10, 40)

    const add4 = (a: number, b?: number): void => {
        if (!b) {
            console.log(a);

        } else {
            console.log(a + b);
        }
    }

    add4(10, 20)
    add4(10)

    const add5 = (a: number, ...num: number[]): number => {
        return num.reduce((total: number, num): number => {
            return total + num
        }, a)
    }
    let sum = add5(10, 20, 30, 40, 50)
    console.log(sum);
    console.log('~~~~~~~~~~____~~~~~~~~~~~');
}

{
    //任意类型
    let a: any
    a = 10;
    a = 'sss'

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

    const isNumber = (value: any): value is number => {
        return typeof value === 'number'
    }
    const isString = (value: any): value is string => {
        return typeof value === 'string'
    }
    const log = (value: any) => {
        if (isNumber(value)) {
            return 1
        }
        if (isString(value)) {
            return 2
        }
        throw new Error(`ss`)
    }
    console.log(log(true));
    
}