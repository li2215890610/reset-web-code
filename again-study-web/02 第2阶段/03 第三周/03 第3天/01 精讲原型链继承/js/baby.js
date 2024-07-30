function Baby(name, isMale, birthDate){
	this.name = name
	this.isMale = isMale
	this.birthDate = birthDate
	
	Object.freeze(this)
}

Baby.prototype.eat = function(food){
	console.log(this.name + '喜欢吃' + food)
}

Baby.prototype.sleep = function(hours){
	console.log(this.name + '睡了' + hours + '个小时')
}

Baby.prototype.getAge = function(){
	return new Date().getFullYear() - this.birthDate.getFullYear()
}

Object.defineProperty(Baby.prototype, 'age', {
	enumerable: true,
	configurable: false,
	get: function(){
		return new Date().getFullYear() - this.birthDate.getFullYear()
	}
})