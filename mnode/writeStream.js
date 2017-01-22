var mevent = require("./mevent");
var mfs = require("./mfs");
//var mev = new mevent.eventEmitter();
exports.writeStream = writeStream;

function writeStream(filename){
	this.filename = filename;				//文件名
	this.data;								//要写入的数据
	var mev = new mevent.eventEmitter();							//事件
	this.err;								//错误信息
	var call;
	var finish = "false";
	var errorinfo = "false";
	this.write = function(data,encoding){
		console.log("开始写入文件");
		this.data = new Buffer(data);
		mfs.writeFile(this.filename,this.data,function(err){
			if(err){
				this.err = err;
				mev.emit("error");
				console.log("触发error: "+err);
				return ;
			}
			console.log("触发finish:");
			mev.emit("finish");	
		});
	}
	this.on = function(eventName,callback){
		var time = setInterval(function(){
			if(eventName === "finish"){
				if(finish === "true"){
					callback();
				}
				
//				clearInterval(time);
			}else if(eventName === "error"){
				if(errorinfo === "true"){
					callback(this.err);
				}
			}
				clearInterval(time);
		},1000);
	}
	mev.on("finish",function(){
		finish = "true";
	});
	mev.on("error",function(){
		console.log("触发error");
		errorinfo = "true";
	});
}
