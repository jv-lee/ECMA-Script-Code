//函数参数的默认值
{
	function add(a,b = 999){
	console.log(a,b);
	}

	add(1);

	function Person({name,age = 10} = {name:'jv.leo'}){
		console.log(name,age);
	}
	Person();
	Person({name:'jv.lee'});
}

//剩余参数 转数组
{
	function arg(...args){
		// let args = Array.prototype.slice.call(arguments);
		// let args = [...arguments];
		// let [...args] = arguments;
		console.log(args);
	}

	arg(1,2,3,4,5,'abb');

	function op(type,...nums){
		console.log(type);
		console.log(nums);
		//计算总和
		if (type === 'sum') {
			//a为上一次return的值， b为当前遍历到的值 0为第一次a的初始值
			let count = nums.reduce(function(a,b){
				return a + b;
			},0);
			console.log(count);
		}
	}

	op('sum',1,2,3,4,5,6,7,8);
}


//箭头函数 (箭头函数没有arguments参数\没有this环境,只有所处环境的this)
{
	const add = (a,b) => a + b;
	console.log(add(1,2));

	const addTo = (a,b) => {
		a += 1;
		return a + b;
	};
	console.log(addTo(1,2));

	//void无返回值 , 删除并返回数组中最后一个值
	const pop = arr => void arr.pop();
	console.log(pop([1,2,3]));

	//通过扩展运算符 添加arguments参数
	const log = (...args) => {
		console.log(args);
	}
	log(1,2,3);

	const xiaoming = {
		name:'xiaoming',
		age:null,
		getAge:function(){
			//ajax
			setTimeout(()=>{
				//此处this获取到的就是xiaoming 
				this.age = 14;
				console.log(this);
			},1000);
		}
	};
	xiaoming.getAge();
}