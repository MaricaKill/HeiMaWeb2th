var canvasWidth = 877; 	// 声明画布的宽
var canvasHeight = 672; // 声明画布的高
var canvas = document.getElementById('myCanvas');	// 获取画布
var context = canvas.getContext('2d'); 						// 获取画布的上下文
canvas.width = canvasWidth
canvas.height = canvasHeight
var image = new Image(); 													// 声明图片
var radius = 50; 																	// 声明半径
image.src = 'images/pic.png'; 										// 获取图片路径
image.onload = function (e) {
	initCanvas(); 																	// 调用初始画布方法
}
// 创建初始画布方法
function initCanvas() {
	// 定义Region对象
	Region = {
		x: Math.random() * (canvas.width - 2 * radius) + radius,
		y: Math.random() * (canvas.height - 2 * radius) + radius,
		r: radius
	}
	draw(Region); // 绘制图片
}
// 绘制圆形
function setRegion(Region) {
	// 开始路径
	context.beginPath()
	// 绘制圆形
	context.arc(Region.x, Region.y, Region.r, 0, Math.PI * 2, false)
	// 用clip()方法剪切圆形区域
	context.clip()
}

function draw() {
	// 用于每次清除上一次绘制的圆形，保证只显示一个圆形区域
	context.clearRect(0, 0, canvas.width, canvas.height)
	// 保存画布的绘制状态
	context.save()
	setRegion(Region)
	context.drawImage(image, 0, 0)
	// 恢复canvas之前保存的状态
	context.restore()
}
// 实现单击按钮图片显示效果
function reset() {
	initCanvas()
}
function show() {
	Region.r = 2 * Math.max(canvas.width, canvas.height)
	draw(image, Region)
}