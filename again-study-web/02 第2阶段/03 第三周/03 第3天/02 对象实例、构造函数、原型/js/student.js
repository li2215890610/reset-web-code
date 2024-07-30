function Student(name, isMale, birthDate){
	Child.call(this, name, isMale, birthDate)
}

Student.prototype = Object.create(Child.prototype)
//Object.create()可以通过你提供的原型创建一个新对象，
//这个新对象的原型就是create()的第一个参数
Student.prototype.constructor = Student

Student.prototype.study = function(course, hours){
	console.log(this.name + '学习' + course + hours + '个小时')
}
