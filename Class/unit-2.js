// 函数表达式
// const a = function(){

// }

//函数声明
// function a(){

// }

// 类表达式
const Person = class P{
	constructor(){
		console.log(P === Person);
		console.log('生成了一个类');
	}
};

new Person();

//自执行的类
const Person2 = new class P{
	constructor(){
		console.log(P === Person);
		console.log('生成了一个类');
	}
}();

var bool = true;
if( "1" == "1"){
	console.log('1');
}