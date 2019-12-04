//多态 
//在同一个接口 在不同情况下做不一样的事情
//相同的接口 不同的表现
//提高类的扩充性与灵活性

// 接口本身只是一组定义 实现都是在类里面
// 需要子类去实现的方法

class Human {
	say(){
		console.log('我是人');
	}
}


class Man extends Human{
	say(){
		super.say();
		console.log('我是小哥哥');
	}
}

class Woman extends Human{
	say(){
		super.say();
		console.log('我是小姐姐');
	}
}

new Man().say();
new Woman().say();

//多态 抽象实现示范
{
	const ModelMap = {
		'红眼僵尸':1,
		'南瓜精':2,
		'独眼蝙蝠':3,
		'绿眼僵尸':4
	};

	class Monster{
		constructor(name,level,model){
			this.name = name;
			this.level = level;
			this.model = model;
		}

		attack(){
			throw Error('必须由子类来实现 `attack` （攻击）方法');
		}
	}

	class RedEyeZombie extends Monster{
		constructor(){
			super('红眼僵尸',10,ModelMap['红眼僵尸']);
		}
	}

	class GreenEyzZombie extends Moster{
		constructor(){
			super('绿眼僵尸',10,ModelMap['绿眼僵尸']);
		}

		attack(){
			console.log('绿眼僵尸发动了攻击');
		}
	}

	const gez = new GreenEyzZombie();
	gez.attack();

	const rez = new RedEyeZombie();
	rez.attack();
}

