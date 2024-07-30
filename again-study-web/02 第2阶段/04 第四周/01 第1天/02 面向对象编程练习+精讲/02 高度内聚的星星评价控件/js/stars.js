//ele表示要显示星星的标签元素（筛选器）
function Stars(name, count, size){
	this.count = count || 5
	this.size = size || 30
	this.name = name
	this.box = document.querySelector('[data-star=' + name + ']')
	console.log(this.box)
	this.show()
// 	随后加入的方法：
//	在构造函数中直接调用show方法
//	使用Stars对象的开发者就不需要调用show方法了
}

Stars.prototype.show = function(){
	for(var i = 0; i < this.count; i++){
		var star = document.createElement('img')
		star.src = 'img/star-yellow.png'
		star.style.width = this.size + 'px'
		star.style.marginRight = this.size * 0.5 + 'px'
		star.dataset.score = i + 1
		star.dataset.index = i
		star.onclick = this.onStarClick.bind(this)
		this.box.appendChild(star)
	}
	
	var score = document.createElement('span')
	score.style.display = 'inline-block'
	score.style.height = this.size + 'px'
	score.style.lineHeight = this.size * 1.1 + 'px'
	score.style.verticalAlign = 'top'
	score.style.fontSize = this.size * 0.6 + 'px'
	score.style.color = '#666'
	
	this.box.appendChild(score)
	
	var input = document.createElement('input')
	input.value = 0
	input.name = this.name + '-score'
	input.type = 'hidden'
//	type=hidden的文本框在页面上默认就是隐藏的
//	它可在页面保存数据，这些数据会随表单一起提交到服务端
	this.box.appendChild(input)
}

Stars.prototype.onStarClick = function(ev){
	var stars = this.box.querySelectorAll('img')
//	标签元素也有querySelector等方法，比直接在document上使用它些方法更精确
//	它可限制只在指定的标签内部查找元素
	var score = ev.currentTarget.dataset.score
	
//	将已经变成红色星星全部变成黄色
	for(var i = 0; i < stars.length; i++){
		if(stars[i].src.endsWith('red.png')){
			stars[i].src = 'img/star-yellow.png'
		}
	}
	
//	将被点击星星以及它左侧的星星变成红色
	for(var i = 0; i < score; i++){
		stars[i].src = 'img/star-red.png'
	}
	
	var scoreSpan = this.box.querySelector('span')
	scoreSpan.innerText = score + '分'
	
	var input = this.box.querySelector('input')
	input.value = score
}

// 扫描页面上的所有data-star标记过的标签，添加星星评价功能
Array.prototype.slice.call(document.querySelectorAll('[data-star]')).forEach(function(star){
	console.log(star)
	new Stars(star.dataset.star)
})










