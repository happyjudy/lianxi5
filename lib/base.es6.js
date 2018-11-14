class Base {
    constructor(){
        this.listener = {}
    }
    on(action, cb){
        this.listener[action] = cb.bind(this);
    }
    trigger(action, message){
        this.listener[action](message);
    }
}

module.exports = Base