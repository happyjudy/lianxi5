function Base() {
    this.listener = {}
}
Base.extend = function (methods, props) {
    function F(){
        Base.apply(this);
    }
    
    F.prototype = new this;
    F.prototype.constructor = F;
    //原型属性
    for(var key in methods){
        F.prototype[key] = methods[key];
    }
    //实例属性
    for(var _key in props){
        F[_key] = props[_key];
    }

    F.extend = this.extend;

    return F;
}

Base.prototype.on = function(action, cb){
    this.listener[action] = cb.bind(this);
}
Base.prototype.trigger = function(action, message){
    this.listener[action](message);
}

module.exports = Base