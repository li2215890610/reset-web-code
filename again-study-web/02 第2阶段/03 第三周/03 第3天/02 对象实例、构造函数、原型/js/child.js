function Child(name, isMale, birthDate){
//	this.name = name
//	this.isMale = isMale
//	this.birthDate = birthDate
//	
//	Object.freeze(this)
	
//	能不能调用Baby的构造函数？
//	Baby(name, isMale, birthDate)
//	没有this参与，当前对象不会收到name、isMale等值，而且会报错
//	Baby.call(this, name, isMale, birthDate)
	Baby.apply(this, [name, isMale, birthDate])
//	第一个参数决定被调用函数Baby内部this
//	其它参数是被调用函数的参数
//	具体见图
}

//Child.prototype = new Baby()
//我们只是想使用baby对象中的方法，并不是真的需要一个baby对象！
//而且new Baby()需要传递参数，但我们并没有参数可传

//Child.prototype = Baby.prototype
//会导致Baby和Child的原型成为同一个原型
//那么当下面为Child的原型添加新方法的时候，新方法也会出现在baby中!!


/*************************************************/
function TempConstructor(){}
//空构造函数
TempConstructor.prototype = Baby.prototype

var tempObject = new TempConstructor()
//创建一个空白对象
//这个空白对象里面什么都没有，但它的原型和Baby原型是同一个原型

Child.prototype = tempObject
//Child的原型等于刚创建的空白对象

//创建了一个原型链
//原型链：对象的原型是一个对象
//这个对象也有原型
//这个原型也是一个对象
//这个对象也有原型
//这个原型也是一个对象
//....
//就构成了原型链
//直到对象的原型为null为止
//
//当在一个对象上调用方法及属性时，会沿着原型链一直找，直到找到一个
//或最终找完整个原型链仍然没有找到为止
/**************************************************/

Child.prototype.constructor = Child
//为Child的原型添一个constructor，指定Child构造函数
//添加之后可以方便地通过对象获取它的构造函数

Child.prototype.play = function(game, hours){
	console.log(this.name + '玩' + game + hours + '小时')
}
