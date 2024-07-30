// ES5中生成实例对象的传统方法是通过构造函数
// function Point(x, y) {
//     this.x = x
//     this.y = y
// }
// Point.prototype.toString = function () {
//     return '(' + this.x + ', ' + this.y + ')'
// }
// var p = new Point(100, 200)
// console.log(p)

// ES6引入了Class的概念，它可看做一个语法糖，绝大部分功能ES5都可以做到
// 使用Class定义一个类
class Point {
    // 构造方法，对应ES5的构造函数
    constructor (x, y){
        // this代表实例对象
        this.x = x
        this.y = y
    }
    toString () {
        return '(' + this.x + ', ' + this.y + ')'
    }
    // 定义类方法时，不需要使用function关键字，方法之间不需要用逗号分隔
    print(){
        console.log('x = ' + this.x)
    }
}
console.log(Point)
// 数据类型为函数
console.log(typeof Point)
// 类本身指向构造函数
console.log(Point === Point.prototype.constructor)

// 构造函数的prototype属性，在ES6的类上面继续存在
// 类的所有方法都定义在类的prototype属性上面
class B {}
let b = new B()
// 调用类的实例方法，就是调用类原型上的方法
console.log(b.constructor == B.prototype.constructor)

// 为类添加的新方法可以添加在prototype上面
// Object.assign可以一次性添加多个方法
Object.assign(B.prototype, {
    print () {console.log('新增的方法')},
    toString () {},
    toValue(){}
})
console.dir(B)
// prototype对象的constructor属性指向类本身，与ES5的行为是一致的
console.log(B.prototype.constructor === B)

// 类的属性名从表达式获得
let methodName = 'getArea'

class Square {
    constructor () {}
    // 方法名getArea从表达式获得
    [methodName] () {

    }
}
console.dir(Square)

// constructor方法
// constructor是类的默认方法，通过new创建对象实例时，自动调用该方法
// 一个类必须有constructor方法，如果没有被显示定义，会自动添加一个空的constructor方法
// class A {}
class A {constructor () {}}
// 上面两种定义形式是等价的
// constructor默认返回实例对象(即this)
// 也可以指定返回另外一个对象
class Foo {
    constructor () {
        // 指定返回另一个对象
        return Object.create(null)
    }
}

// 类的实例对象
// 必须使用new创建类的实例，这是类和构造函数的区别，否则语法会报错
// 构造函数可以不使用new，这样就是一般函数了

// 与ES5一样，实例都是定义在原型上(即定义在class上)
// 除非显式的定义在其本身上(即this上)
class P {
    constructor (x, y) {
        this.x = x
        this.y = y
    }
    toString () {
        return '(' + this.x + ', ' + this.y + ')'
    }
}
var p1 = new P(3, 5)
// (3, 5)
p1.toString()

console.log(p1.hasOwnProperty('x'))
// toString属性在P的prototype上，所以输出false
console.log(p1.hasOwnProperty('toString'))
// 输出为true，证明在原型对象上
console.log(P.prototype.hasOwnProperty('toString'))

// 所有的实例共享一个原型对象，这一点与ES5保持一致
var p2 = new P(5, 3)
// true
// __proto__是实例属性
console.log(p1.__proto__ === p2.__proto__)
// 在p1的原型上添加一个方法
p1.__proto__.printName = function () {console.log('ES6')}
// p1、p2都可以调用
p1.printName()
p2.printName()
// 新创建的p3实例也可以调用printName
var p3 = new P (100, 150)
p3.printName()

// 使用表达式定义一个类
const MyClass = class Zhiyou {
    getClassName () {
        console.log(Zhiyou.name)
    }
}
// 采用上面的形式定义一个类时，类名为MyClass
let inst = new MyClass()
inst.getClassName()
// 无法在类的外部使用Zhiyou
// console.log(Zhiyou.name)

// 采用表达式声明类时，可以写出立即执行的类
// person是一个立即执行的类的实例
let person = new class {
    constructor (name) {
        this.name = name
    }
    printName () {
        console.log(this.name)
    }
}('张三')
person.printName()

// this指向
// 默认指向类的实例，单独使用时可能会报错
class Logger {
    printMyName (name = 'zhangsan') {
        // this 指向Logger类的实例
        this.print(`Hello, ${name}`)
    }
    print (n) {
        console.log(n)
    }
}
const logger = new Logger()
const {printMyName} = logger
// 单独使用时this会指向该方法运行时所在的环境，而不是Logger的实例
// 所以报错this未定义
// TypeError: this is undefined
// printMyName()

// 解决方法一：在构造函数中绑定this
// constructor () {this.printMyName = this.printMyName.bind(this)}
// 解决方法二：使用箭头函数
// constructor () {
//     this.printMyName = (name = 'zhangsan') => {
//         this.print(`Hello, ${name}`)
//     }
// }


// Class的静态方法
// 所有在类中定义的方法都会被实例继承
// 用static声明的方法不会被实例继承，直接通过类调用，这样的方法称为静态方法
class Animal {
    static classMethod () {
        return 'hello es6'
    }
    static baz () {
        // 静态方法中如果包含this关键字，这个this指的是类而不是实例
        this.classMethod()
    }
    // 静态方法、非静态方法可以重名
    baz () {
        console.log('hello animal')
    }
}

// hello
console.log(Animal.classMethod())

let abc = new Animal()
// TypeError: a.classMethod is not a function
// console.log(a.classMethod())

// 静态方法中如果包含this关键字，这个this指的是类而不是实例
Animal.baz()
abc.baz()

// 父类的静态方法可以被子类继承
class Bird extends Animal {
    static customMethod () {
        // 静态方法从super上调用
        return super.classMethod() + ', JavaScript'
    }
}

console.log(Bird.classMethod())
console.log(Bird.customMethod())

// 类的静态属性
class Control {}
// 直接添加在Control上的属性称为静态属性
// ES6规定，类的内部只有静态方法没有静态属性
// 所以在类外面定义静态属性
Control.radius = 5
console.log(Control.radius)

// 类的实例属性
class People {
    constructor (color) {
        this.color = color
        console.log(this.color)
    }
}
new People('yellow')

