(function(window, document) {
    let Msg = function(options) {
        this._init(options);
    };

    Msg.prototype._init = function({ content = '', parentId = '' }) {
        this.content = content;
        this.parentNode = document.getElementById(parentId);
        this.parentId = parentId;
        this._createElement();
        this._show(this._elem);
    };

    Msg.prototype._createElement = function() {
        let alertWarpNode = document.createElement('div');
        alertWarpNode.className = 'alert-warp';

        alertWarpNode.innerHTML = '\
                <div class="alert-container">\
                    <div class="title-wrap">\
                        <div class="title-text">确认删除</div>\
                        <div class="title-close">x</div>\
                    </div>\
                    <div class="content-wrap">\
                        <div class="content-icon">误</div>\
                        <div class="content-text">是否删除</div>\
                    </div>\
                    <div class="btn-wrap">\
                        <div class="btn-cancel">取消</div>\
                        <div class="btn-confirm">确定</div>\
                    </div>\
            </div>';

        this._elem = alertWarpNode;
    };

    Msg.prototype._show = function(elem) {
        this.parentNode.appendChild(elem);
        elem.style.transform = 'scale(1,1)';
    };

    window.$Msg = Msg;
})(window, document);