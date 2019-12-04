//静态属性与静态方法

//1.不会被类实例所拥有的属性与方法 只是类自身拥有
//2.只能通过类调用

// static 关键字

class Car {
	constructor(){
		this.speed = 0;

		//静态属性 作为计数
		Car.totalCar += 1;
	}

	speedUp(){
		this.speed += 1;
	}

	//和类中的静态方法重名 不受影响
	repair(car){
		if (car) {
			console.log('车辆自动检测',car);
		}
	}
	//静态方法只能通过Car.repair()调用
	static repair(car){
		if (car.speed) {
			car.speed = 0;
		}
		console.log('我是修车的...');
		console.log('我现在要修的车是：',car);
	}
}

let car = new Car();
//静态属性
console.log(Car.totalCar);
console.log(car.speed);
car.speedUp();
console.log(car.speed);
car.repair(car);
Car.repair(car);
