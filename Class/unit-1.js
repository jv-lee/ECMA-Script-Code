class Car{
	//构造函数 固定使用constructor函数名指定
	constructor(wheel,color,length,width){
		this.wheel = wheel;
		this.color = color;
		this.length = length;
		this.width = width;

		this.speed = 0;
	}

	//加速方法
	speeUp(){
		this.speed += 1;
	}

}

let car = new Car(4,'#f00',40,20);
console.log(car);

// -属性-
// 轮子
// 颜色
// 长
// 宽

// -方法-
// 加速
// 刹车
// 鸣喇叭