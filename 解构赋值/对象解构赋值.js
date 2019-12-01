(function() {

    //对象的解构赋值
    function test1() {
        const obj = {
            saber: '阿尔托利亚',
            archer: '卫宫'
        };

        //对象是无序的， 是根据属性名匹配 所以archer1无法匹配 archer
        const { saber, archer1 } = obj;
    }

    //---------------------------------------------------------------------------

    //对象情况复杂的解构赋值
    function test2() {
        const player = {
            nickname: '未雨绸缪',
            master: '东海龙王',
            skill: [{
                skillName: '龙吟',
                mp: '100',
                time: 6000
            }, {
                skillName: '龙卷雨击',
                mp: '400',
                time: 3000
            }, {
                skillName: '龙腾',
                mp: '900',
                time: 60000
            }]
        };

        const { nickname } = player;
        const { master } = player;
        // const {skill} = player; 
        //获取对象中数组的第一个item，获取数组中第二个item的skillName ， 获取数组中第三个item的skillName（指定变量名和变量值名)
        const { skill: [skill1, { skillName }, { skillName: sklName }] } = player;

        // console.log(skill);
        console.log(skill1);
        console.log(skillName);
    }

    //---------------------------------------------------------------------------

    //结合扩展运算符
    function test3() {
        const obj = {
            saber: '阿尔托利亚',
            archer: '卫宫',
            lancer: '瑟旦达'
        };

        //会将剩下多有的属性放入一个oth对象中 使用... 匹配所有没有匹配到的
        const { saer, ...oth } = obj;

        //对象合并
        const obj1 = {
            archer: '卫宫',
            lancer: '瑟旦达'
        };
        const obj2 = {
            saber: '阿尔托利亚',
            ...obj1
        };
    }

    //如何对已经声明了的变量进行对象的解构赋值
    function test4() {
        let age;
        const obj = {
            name: '小明',
            age: 22
        };

        //赋值 不推荐
        ({ age } = obj);
    }

    //---------------------------------------------------------------------------

    //默认值
    function test5() {
        let girlfriend = {
            name: '小红',
            age: 22,
        };

        let { name, age = 24, hobby = ['学习'] } = girlfriend;
    }

    //---------------------------------------------------------------------------

    //提取对象属性 直接提取name hobby数组 及 hobby数组中的第一个元素
    function test6() {
        const { name, hobby: [hobbyItem], hobby } = {
            name: '小红',
            hobby: ['学习']
        };
    }

    //---------------------------------------------------------------------------

    //使用对象传入乱序的函数参数
    function test7() {
        function AJAX({
            url,
            data,
            type = 'get'
        }) {
            console.log(type);
        }

        AJAX({
            url: '/getInfo',
            data: {
                code: 1
            }
        });
    }

    //---------------------------------------------------------------------------

    //获取多个 函数返回值
    function test8() {
        function getUserInfo(uid) {
            //...ajax
            return {
                status: true,
                data: {
                    name: '小红'
                },
                msg: '请求成功'
            };
        }

        const { status, data, msg: message } = getUserInfo(123);
    }

    //---------------------------------------------------------------------------

})();