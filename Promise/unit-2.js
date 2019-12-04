// then(resolve,reject)
// then方法中的第二个回调 失败时候做的事情
function f(val) {
    return new Promise((resolve, reject) => {
        if (val) {
            resolve({ name: '小明' });
        } else {
            reject('404');
        }
    });
}

f(true)
    .then(data => {
        console.log(`成功 -> ${data.name}`);
    }, e => {
        console.log(`失败 -> ${e}`);
    });

//---------------------------------------------------
// catch
// 使用实例的then方法 可以捕获错误
f(true)
    .then(data => {
        console.log(data);
        return f(false);
    })
    .then(() => {
        console.log('我永远不会被输出');
        //处理异常
    }, e => console.log(`处理异常 ${e}`))
    //异常没有被处理才会进入该方法
    .catch(e => {
        console.log(e);
        return f(false);
    })
    //最终被执行
    .finally(()=>{
    	console.log('finally');
    });



//---------------------------------------------------
// finally
// 不论成功还是失败 finally中的内容一定会执行