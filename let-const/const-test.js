//声明常量

// const a = 1;
// var b = 2;
// let c;

//----------------------------------------------------

//常量声明后不能被修改

// const NAME = '小明';
// NAME = '小红';

//----------------------------------------------------

//常量应用类型的时候 可以修改该引用类型

// const xiaoming = {
// 	age:14,
// 	name:'小明'
// };
// console.log(xiaoming);
// xiaoming.age = 22;
// console.log(xiaoming);

// const ARR = [];
// ARR.push(1);
// console.log(ARR);

//----------------------------------------------------

//Q1:怎么防止常量为引用类型的时候能被修改的情况

// const xiaoming = {
// 	age:14,
// 	name:'小明'
// };
// //冻结对象后无法被修改属性及函数
// Object.freeze(xiaoming);
// console.log(xiaoming);
// xiaoming.age = 22;
// console.log(xiaoming);

//----------------------------------------------------

//Q2:es6之前怎么声明常量

//1.假装是常量
// var BASE_COLOR = '#ff0000';

//Object.defineProperty();
// var CST = {};
// Object.defineProperty(CST,'BASE_NAME',{
// 	value:'小明',
// 	writeable:false
// });
// console.log(CST);
// CST.BASE_NAME = '小王';
// console.log(CST);

//封装设置常量方法
Object.defineProperty(Object,'freezePolyfill',{
	value:function(obj){
		var i;
		for(i in obj){
			//当前属性是否是自身的属性，过滤原型上的属性
			if (obj.hasOwnProperty(i)) {
				//设置属性无法修改
				Object.defineProperty(obj,i,{
					writeable:false
				});
			}
		}
		//设置属性不可添加属性及函数
		Object.seal(obj);
	}
});

const xiaoming = {
	age:14,
	name:'_小明_'
};
Object.freezePolyfill(xiaoming);

xiaoming.age = 22;
xiaoming.sex = 0;
console.log(xiaoming);