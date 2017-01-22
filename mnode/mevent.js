
exports.eventEmitter = eventEmitter;

function eventEmitter(){
	this.obj = {};
	this.on = function(event,callback){			//对事件绑定监听器
		if(!this.obj[event]){
			this.obj[event] = [];
			this.obj[event].push(callback);
		}
	}
	
	this.emit = function(event){
		this.obj[event][0]();
	}
}
