//形变类
class Transform {
    constructor(selector) {
        this.elem = document.querySelector(selector);

        //动画队列
        this._queue = [];
        this._transform = {
            rotate: '',
            translate: '',
            scale: ''
        };
        this.defaultTime = Transform.config.defaultTime;
        this.elem.style.transition = `all ${.3}s`;
    }

    //位移
    translate(value, time) {
        return this._addAnimator('translate', value, time);
    }

    //缩放
    scale(value, time) {
        return this._addAnimator('scale', value, time);
    }

    //旋转
    rotate(value, time) {
        return this._addAnimator('rotate', value, time);
    }

    //向动画队列添加动画项
    _addAnimator(type, value, time = this.defaultTime) {
        this._queue.push({ type, value, time });
        return this;
    }

    //动画队列添加完成 可以开始动 , 从队列中把动画拿出来执行
    done() {
        if (!this._queue.length) return;
        //先进先出
        setTimeout(() => {
            const info = this._queue.shift(); //数组拿出第一个数据 并且删除
            this.elem.style.transition = `all ${info.time / 1000}s`;
            this.elem.style.transform = this._getTransform(info);

            setTimeout(() => {
                this.done();
            }, info.time);
        }, 0);
    }

    _getTransform({ time, value, type }) {
        //引用修改 对象直接发生改变
        const _tsf = this._transform;
        switch (type) {
            case 'translate':
                _tsf.translate = `translate(${value})`;
                break;
            case 'scale':
                _tsf.scale = `scale(${value})`;
                break;
            case 'rotate':
                _tsf.rotate = `rotate(${value}deg)`;
                break;
            default:
                break;
        }
        return `${_tsf.translate} ${_tsf.scale} ${_tsf.rotate}`;
    }

}

Transform.config = {
    defaultTime: 300
};


//继承一个新的扩展
class MultiTransform extends Transform {

	//多动画同时执行
    multi(value, time) {
        return this._addAnimator('multi', value, time);
    }

    //停止等待时间
    sleep(time) {
        return this._addAnimator('sleep', '', time);
    }

    _getTransform({ time, value, type }) {
        const _tsf = this._transform;
        switch (type) {
            case 'translate':
                _tsf.translate = `translate(${value})`;
                break;
            case 'scale':
                _tsf.scale = `scale(${value})`;
                break;
            case 'rotate':
                _tsf.rotate = `rotate(${value}deg)`;
                break;
            case 'multi':
                value.forEach(item => {
                    this._getTransform(item);
                });
                break;
            case 'sleep':
                break;
            default:
                break;
        }
        return `${_tsf.translate} ${_tsf.scale} ${_tsf.rotate}`;
    }
}