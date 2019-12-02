//简洁表示法
{
	//ES5
	{
		const getUserInfo = (id = 1) => {
			//AJAX ...

			const name = 'xiaoming';
			const age = 10;

			return {
				name:name,
				age:age,
				say:function(){
					console.log(this.name+this.age);
				}
			};
		};
		const xiaoming = getUserInfo();
	}

	//ES6
	{
		const getUserInfo = (id = 1) => {
			//AJAX ...

			const name = 'xiaoming';
			const age = 10;

			return{
				name,
				age,
				say(){
					console.log(this.name,this.age);
				}
			}
			const xiaoming = getUserInfo();
		}
	} 
}

//属性名表达式
{
	const obj = {
		a:1 ,
		$abc:2,
		'FSKFJH234234$@#$@#DG':3
	};

	const key = 'age';

	const xiaoming = {
		name:'xiaoming',
		[key]:14
	}
}

//扩展运算符
{
	//复制对象 浅拷贝 拷贝对象中的子对象被复制过来的是内存地址，修改数值会影响原有子的对象数值，属性值不被影响
	const obj1 = {
		a:1,
		b:2,
		d:{
			aa:1,
			bb:2
		}
	};

	const obj2 = {
		c:3,
		a:9
	};

	const cObj1 = {...obj1};
	console.log(obj1);

	//相同属性 保留后面的属性值
	const newObj = {
		...obj1,
		...obj2
	};
	console.log(newObj);
}

//对象的新方法
{
	{
		const obj = {
			a:1,
			b:2,
			c:3,
			d:4
		};

		//Object.keys
		console.log(Object.keys(obj));
		//Object.values
		console.log(Object.values(obj));
		//Object.entries
		console.log(Object.entries(obj));

		for(let key of Object.keys(obj)){
			console.log(key);
		}

		for(let [k,v] of Object.entries(obj)){
			console.log(k,v);
		}
	}


	//setPrototypeOf 修改对象原型方法 \ getPrototypeOf 读取对象的原型
	{
		const obj1 = {
			a:1
		}
		const obj2 ={
			b:2
		}
		//创建对象，属性作为原型属性 ，不作为普通属性
		const newObj = Object.create(obj1);
		console.log(newObj.__proto__);
		Object.setPrototypeOf(newObj,obj2);
		console.log(newObj.__proto__);

		console.log(Object.getPrototypeOf(newObj));
	}

	//super
	{
		const obj = {name:'xiaoming'};

		const cObj = {
			say(){
				console.log(`My name is ${super.name}`);
			}
		};

		Object.setPrototypeOf(cObj,obj); 
		cObj.say();
	}
}