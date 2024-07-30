// extends关键字实现继承
class Point {}
// ColorPoint类继承了Point的所有属性和方法
class ColorPoint extends Point{
    constructor (x, y, color) {
        // 调用父类的constructor(x, y)
        // 子类必须在自己的constructor方法中调用super方法，否则新建实例时会报错
        // 在子类的构造函数中，只有调用super后才可以使用this关键字，否则会报错
        // 因为子类实例的构建基于父类实例
        super(x, y)
        this.color = color
    }
    toString () {
        // super.toString()调用父类的toString
        return this.color + ' ' + super.toString()
    }
}

let cp = new ColorPoint(25, 8, 'green')
// cp既是ColorPoint的实例又是Point的实例
console.log(cp instanceof ColorPoint)
console.log(cp instanceof Point)

// 父类的静态方法会被子类继承
class Control {
    static show () {
        console.log('父类的静态方法')
    }
}
class Dot extends Control {

}
Dot.show()
// Object.getPrototypeOf方法用来从子类上获取父类
// 可以判断一个类是否继承了另一个类
console.log(Object.getPrototypeOf(Dot) === Control)

// super关键字
// 既可以当函数使用也可以当对象使用
// 当做函数调用时，代表父类的构造函数
// ES6规定，子类的构造函数必须执行一次super函数
class Animal {
    constructor () {
        // new.target：当前正在执行的函数
        console.log(new.target.name)
    }
}
class Bird extends Animal {
    constructor (name) {
        // super虽然代表了父类Animal的构造函数
        // 但是返回的是子类Bird的实例，即super内部的this指向Bird
        // 作为函数时，super只能用在子类的构造函数中，用在其他地方会报错
        super()
        this.name = name
    }
}
// 如果在Bird的构造函数中没有调用super，下面一句代码会报错
new Bird('polly')
new Animal()

// super作为对象使用
class A {
    constructor () {
        this.p = 10
    }
    test () {
        return 100
    }
    calcLayout () {
        console.log(this.p)
    }
}
A.prototype.x = 20
class B extends A {
    constructor () {
        super()
        // 使用super调用A原型上的方法test
        console.log(super.test())
        // 无法调用父类实例上的属性p
        console.log(super.p)
        // 可以调用父类原型上的属性
        console.log(super.x)
        this.p = 50
    }
    // 在子类的普通方法中，通过super调用父类的方法时
    // 方法内部的this指向当前的子类实例
    print () {
        super.calcLayout()
    }
}
let b = new B()
b.print()
