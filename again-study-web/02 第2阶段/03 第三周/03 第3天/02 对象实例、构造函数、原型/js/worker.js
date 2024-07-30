function Worker(name, isMale, birthDate){
	Student.call(this, name, isMale, birthDate)
}

Worker.prototype = Object.create(Student.prototype)
Worker.prototype.constructor = Worker

Worker.prototype.work = function(task, hours){
	console.log(this.name + task + hours + '个小时')
}

//完全重写了原型链中的一个方法
//Worker.prototype.play = function(game, hours){
//	console.log(this.name + '找一个老板看不到的地方')
//	console.log(this.name + '玩' + game + hours + '小时')
//}


Worker.prototype.play = function(game, hours){
	console.log(this.name + '找一个老板看不到的地方------调用原型链上的play方法前')
	Child.prototype.play.call(this, game, hours)
//	可以调用原型链中的任意一个方法
	console.log('假装刚才是去上厕所-------调用原型链上的play方法后')
}
