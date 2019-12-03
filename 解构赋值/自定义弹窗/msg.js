(function(window, document) {
    let Msg = function(options) {
        this._init(options);
    };

    Msg.prototype._init = function({ title = '',content = '', parentId = '' ,cancel = null , confirm = null,
                                contentStyle = {}}) {
        this.title = title;
        this.content = content;
        this.cancel = cancel;
        this.confirm = confirm;
        this.contentStyle = contentStyle;
        this.parentNode = document.getElementById(parentId);

        this._createElement();
        this._bind();
        this._show();
    };

    Msg.prototype._createElement = function() {
        let alertWarpNode = document.createElement('div');
        alertWarpNode.className = 'alert-warp';

        alertWarpNode.innerHTML = `
            <div class="alert-container" id="alert">
                <div class="title-wrap">
                    <div class="title-text">${this.title}</div>
                    <div class="title-close">x</div>
                </div>
                <div class="content-wrap">
                    <div class="content-icon">误</div>
                    <div class="content-text">${this.content}</div>
                </div>
                <div class="btn-wrap">
                    <div class="btn-cancel">取消</div>
                    <div class="btn-confirm">确定</div>
                 </div>
            </div>
            `;

        let contentWarpNode = alertWarpNode.querySelector('.alert-warp .alert-container .content-wrap');

        let contentStyle = this.contentStyle;

        for(let i in contentStyle){
            if(contentStyle.hasOwnProperty(i)){
                contentWarpNode.style[i] = contentStyle[i];
            }
        }

        let alert = alertWarpNode.querySelector('.alert-warp .alert-container');

        this._elem = alertWarpNode;
        this._alert = alert;
    };

    //绑定点击事件
    Msg.prototype._bind = function(){
        const hideMsg = ()=>{
            let scale = 'scale(0,0)';
            this._elem.style.transform = scale;
            this._alert.style.transform = scale;
        }

        const cancel = (e)=>{
            this.cancel && this.cancel.call(this,e);
            hideMsg();
        }

        const confirm = (e)=>{
            this.confirm && this.confirm.call(this,e);
            hideMsg();
        }

        this._elem.querySelector('.title-wrap .title-close').addEventListener('click',cancel);
        this._elem.querySelector('.btn-wrap .btn-cancel').addEventListener('click',cancel);
        this._elem.querySelector('.btn-wrap .btn-confirm').addEventListener('click',confirm);
    }

    //显示弹窗方法
    Msg.prototype._show = function() {
        this.parentNode.appendChild(this._elem);

        //使用箭头函数获取父级作用于的 this引用
        setTimeout(()=>{
            let scale = 'scale(1,1)';
            this._elem.style.transform = scale;
            this._alert.style.transform = scale;
        });
    };

    window.$Msg = Msg;
})(window, document);