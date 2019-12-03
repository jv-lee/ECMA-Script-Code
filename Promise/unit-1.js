//比较传统的回调方式与promise

//----------------------回调-------------------------------
function f(cb){
	setTimeout(function(){
		cb && cb();
	},1000);
}

//回调地狱
f(function(){
	console.log('回调函数 - 1');

	f(function(){
		console.log('回调函数 - 2');

		f(function(){
			console.log('回调函数 - 3');

		});
	});
});


//----------------------Promise-------------------------------
function promise(){
	return new Promise(resolve =>{
		setTimeout(function(){
			resolve();
		},1000);
	});
}

promise()
		//当前任务
		.then(function(){
			console.log(1);
			return f();
		})
		.then(function(){
			console.log(2);
		})
		.then(function(){
			console.log(3);
			return f();
		})
		.then(function(){
			console.log(4);
		})
		.then(function(){
			console.log(5);
			return f();
		})
		.then(function(){
			console.log(6);
		});

