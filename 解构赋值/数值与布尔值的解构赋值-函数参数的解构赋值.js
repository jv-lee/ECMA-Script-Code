//数值与布尔值的解构赋值
const {valueOf} = 1;

//函数参数的解构赋值
function swap([x,y]){
	return [y,x];
}

let arr = [1.2];
arr = swap(arr);

function Computer({
	cpu,
	memory,
	software = ['ie6'],
	OS = 'window 3.5'
}){
	console.log(cpu);
	console.log(memory);
	console.log(software);
	console.log(OS);
}

new Computer({
	memory:'128G',
	cpu:'80286',
	OS:'windows 10'
});