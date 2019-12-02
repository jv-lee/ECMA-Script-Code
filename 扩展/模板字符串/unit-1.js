//模板字符串

const xiaoming = {
	name:'小明',
	age:14,
	say1:function(){
		console.log('我叫'+this.name,',我今年'+this.age+'岁！');
	},
	say2:function(){
		console.log(`我叫${this.name},我今年${this.age}岁！`);
	}
}

xiaoming.say1();
xiaoming.say2();


const getImmocCourseList = function(){
	//ajax
	return{
		status:true,
		msg:'获取成功',
		data:[{
			id:1,
			title:'Vue 入门',
			data:'xxxx-01-09'
		},{
			id:2,
			title:'ES6 入门',
			data:'xxxx-01-11'
		}]
	} 
};

const {data:listData,status,msg} = getImmocCourseList();

function foo(val){
	return val.replace('xxxx','xoxo');
}

if (status) {
	let arr = [];
	listData.forEach(function({data,title}){
		// arr.push(
		// 	'<li>\
		// 		<span> '+title+'</span>\
		// 		<span> '+data+'</span>\
		// 	</li>'
		// 	)
			arr.push(
				`
				<li>
				<span>${`课程名：${title}`}</span>
				<span>${foo(data).toUpperCase()}</span>
				</li>
				`
			)
	});
	let ul = document.createElement('ul');
	//join 清空 ， 数组 ","
	ul.innerHTML = arr.join(''); 
	document.body.appendChild(ul);
}else{
	alert(msg);
}

//部分新方法

// padStart padEnd
{
	let str = 'i';
	let str1 = str.padStart(5,'mooc');
	console.log(str1);

	let str2 = str.padEnd(5,'mooc');
	console.log(str2);
}

//repeat 重复字符串 
{
	console.log('i'.repeat(10));
}

//startsWith endsWith 是否以任意字符结尾，开始
{
	const str = 'A promise is a promsie';
	console.log(str.startsWith('A'));
	console.log(str.endsWith('A'))
}

// includes
{
	const str = 'A promise is a promsie';
	if (str.indexOf('promise') !== -1) {
		console.log('存在1');
	}

	if (str.includes('promise')) {
		console.log('存在2');
	}
}

//字符串遍历
{
	let str = 'PROMISE';
	//字符串转数组
	var str1 = Array.prototype.slice.call(str);
	var str2 = str.split('');
	const str3 = [...str];
	const [...str4] = str;

	str4.forEach(function(value){
		console.log(value);
	});

	for(let word of str){
		console.log(word);
	}

	
}

// \u1f436 unicode码 emoji
// Unicode是一项标准 包括字符集、编码方案等
// 他是为了解决传统的字符编码方案的局限而产生的，为每种语言中字符设定了统一
// 并且唯一的二进制编码，以满足跨语言进行文本转换、处理的要求


let a = 2 ** 10;
console.log(a);