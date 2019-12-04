// Promise.all方法可以把多个promise实例 包装成一个新的promise实例
// Promise.all([promise1,promise2]) : Promise
{
    //模拟需要多个请求的数据 才能进行下一步操作的情况

    function getData1() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('第一条数据加载成功...');
                resolve('data1');
            }, 1000);
        });
    }

    function getData2() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('第二条数据加载成功...');
                resolve('data2');
            }, 1000);
        });
    }

    function getData3() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('第三条数据加载成功...');
                resolve('data3');
            }, 1000);
        });
    }

    function getData4() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('第四条数据加载成功...');
                reject('data4 error');
            }, 500);
        });
    }

    let promises = Promise.all([getData1(), getData2(), getData3(), getData4()]);

    promises
        .then(arr => {
            console.log(arr);
        }, e => {
            console.log(e);
        });
}

// Promise.rece([1,2,3]) : Promise
{
    function getCache() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('加载缓存数据');
                resolve('缓存数据');
            }, 1000);
        });
    }

    function getDisk() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('加载磁盘数据');
                resolve('磁盘数据');
            }, 2000);
        });
    }

    function getNetwork() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('加载网络数据');
                resolve('网络数据');
            }, 500);
        });
    }

    let dataPromises = Promise.race([getCache(), getDisk(), getNetwork()]);
    dataPromises
        .then(data => {
        	console.log(data);
        }, e => {
            console.log(e);
        });
}