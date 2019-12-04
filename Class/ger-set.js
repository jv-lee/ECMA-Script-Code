// getter setter
// 类似于给属性提供钩子
// 在获取属性值和设置属性值的时候做一些额外的事情

//es5 getter/setter
//1.在对象字面量中书写get/set方法
{
    const obj = {
        _name: ' ',

        get name() {
            return this._name;
        },
        set name(val) {
            this._name = val;
        }
    };

    obj.name;
}

//2.Object.defineProperty
var obj = {
	_name:''
};

Object.defineProperty(obj,'name',{
	get:function	(){
		console.log('正在访问name');
		return this._name;
	},
	set:function(val){
		console.log('正在修改name');
		this._name = val;
	}
});

obj.name = 10;
console.log(obj.name);

//ES6中使用get set方法
class Person{
	constructor(){
		this._name = '';
	}

	get name(){
		console.log('正在访问name');
		return `我的名字是${this._name}`;
	}

	set name(val){
		console.log('正在修改name');
		this._name = val;
	}
}

let person = new Person();

person.name = '鸽子王';

console.log(person);