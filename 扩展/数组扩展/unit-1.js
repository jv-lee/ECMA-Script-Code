//结合扩展运算符使用
{
	function foo(a,b,c){
		console.log(a);
		console.log(b);
		console.log(c);
	}
	//扩展运算符 展开数组作为参数
	foo(...[1,3,2]);

	const user = ['小明',14,['吃饭','打游戏'],'我没有女朋友'];

	function say(name,age,hobby,desc){
		console.log(`我叫${name},我今年${age}岁，我喜欢${hobby.join('和')},${desc}`);
	}

	//基本使用
	say(user[0],user[1],user[2],user[3]);
	//使用扩展运算符
	say(...user);
	//apply方法 可以传入this指向
	say.apply(null,user);
}

{
	const arr1 = [1,2,3,4];
	const arr2 = [4,2,2,1];
	const arr3 = [2.2,'123',false];

	//数组分解合并
	const arr4 = [...arr1,...arr2,...arr3];
}

{
	//生成器函数 最终返回一个返回值数组
	function *g (){
		console.log(1);
		yield 'hi~';
		console.log(2);
		yield 'imooc~';
	}

	// const arr = [...g()];
	//迭代执行， 每次执行完一个yield 停止函数运行
	const gg = g();

	gg.next();

	setTimeout(function(){
		gg.next();
	},1000);
}

//去重
{
	let set = new Set([1,2,3,4,2]);
	console.log([...set]);
}

//数组新方法
{
	//from
	const obj = {
		0:1,
		1:'22',
		2:false,
		length:2
	};

	console.log(Array.from(obj));
	//设置数组返回值参数操作， 每一项 * 2
	console.log(Array.from(obj,item => item * 2));


	//of
	console.log(Array.of(1,2,'123',false));

	//Array#fill 填充空的数组,覆盖所有数据
	let arr = new Array(10).fill(0); 

	//includes 判断数组中是否存在某个值
	var arr1 = [1,2,3,4,5,66];
	console.log(arr1.includes(1));
	console.log(arr1.includes(55));

	//keys
	var arr2 = [1,2,5,666];
	for(let k of arr2.keys()){
		console.log(k);
	}
	//values
	for(let v of arr2.values()){
		console.log(v);
	}
	//entries
	for(let [k,v] of arr2.entries()){
		console.log(k,v)
	}


	// find 根据条件（回调） 按顺序遍历数组 当回调返回true时 就返回当前遍历到的值
	const res = [1,7,6,3].find((value,index,arr)=>{
		console.log('value',value);
		console.log('index',index);
		console.log('arr',arr);

		return value % 2 === 0;
	});
	console.log(`res return -> ${res}`);

	// findIndex 根据条件（回调） 按顺序遍历数组 当回调返回true时就返回当前遍历到的下标 
	const res2 = [1,7,6,3,NaN].findIndex((value,index,arr)=> Number.isNaN(value));
	console.log(`res return -> ${res2}`);

}