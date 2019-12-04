// Promise.resolve() 和 Promise.reject()
// 常用来生成已经被决议为失败或者
{
// Promise.resolve
// ------------------------------------------
// 传递一个普通的值
let p1 = new Promise(resolve =>{
	resolve('成功!');
});
let p2 = Promise.resolve('成功！');

//  传递一个promise实例
let promise = new Promise(resolve=>{
	resolve('耶！');
})
//直接返回传递进去的promise
let p = Promise.resolve(promise);
p.then(data => void console.log(data));

}

// 把同步任务转为异步任务
function createAsyncTask(syncTask){
	return Promise.resolve(syncTask).then(syncTask => synctask());
}

createAsyncTask(()=>{
	console.log('我变成了异步任务~');
	return 1 + 1;
})
.then(res => {
	console.log(res);
});

console.log('我是同步任务~')