// 继承

//继承可以让子类获得父类的方法 属性
//可以扩充 增加新方法 属性等

// 父类（基类） - 被继承的类
// 子类 - 继承后的类

class Human {
	constructor(name,age,sex,hobby){
		this.name = name;
		this.age = age;
		this.sex = sex;
		this.hobby = hobby;
	}

	desc(){
		const {name,age,sex,hobby} = this;
		console.log(`我叫${name},性别${sex},爱好${hobby},今年${age}岁`);
	}

	eat(){
		console.log('吧唧吧唧');
	}

}

class WebDeveloper extends Human{
	constructor(name,age,sex,hobby,skill,salary){
		super(name,age,sex,hobby);//子类必须调用父类 构造方法  super
		this.skill = skill;
		this.salary = salary;
	}

	say(){
		console.log(this.skill.join(','));
	}
}

let developer = new WebDeveloper('jv.lee',25,'男','LOL',['Node.js','vue','react','es6'],18000);
console.log(developer);
developer.desc();
developer.eat();
developer.say();



