export namespace A {
    interface Animal {
        name: string
        eat(str): void;
    }
    export class Dog implements Animal {
        name: string
        constructor(name: string) {
            this.name = name
        }
        eat() {
            console.log(this.name + '吃骨头');
        }
    }
    export class Cat implements Animal {
        name: string
        constructor(name: string) {
            this.name = name
        }
        eat(food: string): void {
            console.log(this.name + '吃' + food);
        };
    }
}

export namespace B {
    interface Animal {
        name: string
        eat(str): void;
    }
    export class Dog implements Animal {
        name: string
        constructor(name: string) {
            this.name = name
        }
        eat() {
            console.log(this.name + '吃骨头');
        }
    }
    export class Cat implements Animal {
        name: string
        constructor(name: string) {
            this.name = name
        }
        eat(food: string): void {
            console.log(this.name + '吃' + food);
        };
    }
}