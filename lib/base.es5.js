function Base() {
    this.events = {};
    
}
Base.extend = function (proto, static) {
    function F(){
        Base.apply(this);
    }
    F.prototype = new this;
    F.prototype.on = function(event, cb){
        (this.events[event] = this.events[event] || []).push(cb);
    }
    F.prototype.trigger = function(event, ...args){
        this.events[event].forEach(cb => {
            typeof cb == 'function' && cb.apply(this, args);
        })
    }

    for(var key in proto){
        F.prototype[key] = proto[key];
    }
    for(var _key in static){
        F[_key] = static[_key];
    }
    
    F.extend = this.extend;

    return F;
}



module.exports = Base