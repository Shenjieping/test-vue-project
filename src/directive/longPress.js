/**
* @file longpress.js
* @author v_shenjieping@baidu.com
* @date 2018-10-12 14:57:37
*/

function vueTouch(el, binding, type) {
    var _this = this;
    this.obj = el;
    this.binding = binding;
    this.touchType = type;
    this.vueMoves = true;
    this.vueLeave = true;
    this.longTouch = true;

    this.vueCallBack = typeof (binding.value) == 'object' ? binding.value.fn : binding.value;

    this.obj.addEventListener('touchstart', function (e) {
        _this.start(e);
    }, false);

    this.obj.addEventListener('touchend', function (e) {
        _this.end(e);
    }, false);
};
vueTouch.prototype = {
    start(e) {
        e.preventDefault();
        this.vueMoves = true;
        this.vueLeave = true;
        this.longTouch = true;
        this.time = setTimeout(function () {
            if (this.vueLeave && this.vueMoves) {
                this.touchType == 'longtap' && this.vueCallBack(this.binding.value, e);
                this.longTouch = false;
            };
        }.bind(this), 500);
    },
    end(e) {
        clearTimeout(this.time);
    }
};

export default {
    bind: function (el, binding) {
        new vueTouch(el, binding, 'longtap');
    }
}