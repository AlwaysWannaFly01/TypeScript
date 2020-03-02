{
    // 接口 
    // 传过来的参数必须包含接口定义是属性和方法
    interface Named {
        // 属性
        name: string
        // 方法
        // 没有方法体， 具体的对象中实现方法体
        print(name: string): void
    }

    const sayname = (o: Named) => {
        // console.log(o.name);
        o.print(o.name)
    }

    class Person {
        name: string
        age: number
        print(name: string): void {
            console.log(name);
        }
    }
    const p = new Person()
    p.name = 'aa'

    // sayname(p)
}

{
    // 定义类型别名
    // type Name = [string, number]
    // let myName: Name = ['sdf', 9]

    type Name = string

    type User = {
        name: string
        age: number
    }
    interface IUser {
        name: string
        age: number
    }
    const user: User = {
        name: 'fg',
        age: 33
    }
}

{
    // 类实现接口
    interface Person {
        name: string
        greet(): void
    }

    class Employee implements Person {
        public name: string
        greet(): void {
            console.log('employee');
        }
    }
    let em = new Employee()
    em.greet()

    class Customer implements Person {
        public name: string
        public email: string
        greet(): void {
            console.log('customer');

        }
    }

    let cu = new Customer()

    cu.greet()
}