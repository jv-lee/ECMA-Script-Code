(function() {
    //字符串的解构赋值
    function test1() {
        const str = 'I am the bone of my sword'; //我是剑骨头

        const [a, b, c, ...oth] = str;
        const [...spStr1] = str;
        const spStr2 = str.split('');
        const spStr3 = [...str];
    }

    //------------------------------------------------------------

    //提取属性
    function test2() {
        const str = 'I am the bone of my sword'; //我是剑骨头
        //获取字符串的length属性，split方法
        const { length, split } = str;
    }

    //------------------------------------------------------------
})();