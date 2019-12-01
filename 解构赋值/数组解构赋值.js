(function() {

    //数组的解构赋值

    function test1() {
        const aar = [1, 2, 3, 4];
        let [a, b, c, d] = arr;
    }


    //------------------------------------------------------------

    //更复杂的匹配规则

    function test2() {
        const arr = ['a', 'b', ['c', 'd', ['e', 'f', 'g']]];

        // const [a, b] = arr;
        // const [, b] = arr;

        const [, , [, , [, , g]]] = arr;
        console.log(g);
    }

    //------------------------------------------------------------

    //扩展运算符

    function test3() {
        const arr1 = [1, 2, 3];
        const arr2 = ['a', 'b'];
        const arr3 = ['zz', 1];
        //将数组数据全部合并成一个数组
        const arr4 = [...arr1, ...arr2, ...arr3];
        console.log(arr4);

        const arr = [1, 2, 3, 4, 5, 6, 7];
        //将第三位往后全部合并为一个数组 进入c
        const [a, b, ...c] = arr;
        console.log(c);
    }

    //------------------------------------------------------------

    //默认值

    function test3() {
        const arr = [1, undefined, undefined];
        //匹配不到则返回一个undefined 则会赋值操作， 因为是const 必须接受赋值操作 ,比配到undefined 使用= 给予默认值
        const [a, b = 2, c, d = 'aaa'] = arr;
    }

    //------------------------------------------------------------

    //交换变量
    function test4() {
        let a = 20;
        let b = 20;

        let temp;
        temp = a;
        a = b;
        b = temp;

        //解构赋值交换更便捷
        [a, b] = [b, a];
    }

    //------------------------------------------------------------

    //接收多个 函数返回值

    function test5() {
        function getUserInfo(id) {
            // .. ajax

            return [
                true,
                {
                    name: '小明',
                    gender: '女',
                    id: id
                },
                '请求成功'
            ];
        }

        const [status, data, msg] = getUserInfo(123);

        console.log(status);
        console.log(data);
        console.log(msg);
    }

    //------------------------------------------------------------

})();