var mfs = require("./mfs");

//mfs.readFile("test1.txt",function(err,data){
//	if(err){
//		return console.error(err);
//	}
//	console.log(data instanceof Buffer);
//	console.log(data.length);
//	console.log(data.toString());
//});

//mfs.writeFile("test1.txt",new Buffer("zhangzhen"),function(err){
//	if(err){
//		return console.error("flag:"+err);
//	}
//	console.log("err:"+err);
//	console.log("写入成功");
//});

//mfs.appendFile("test1.txt","www.runoob.com",function(err){
//	if(err){
//		return console.error(err);
//	}
//});

var mfsSync = require("./mfsSync");
//var data = mfsSync.readFileSync("test1.txt");
//console.log(data.toString());

//mfsSync.writeFileSync("test1.txt","zhang");

//mfsSync.appendFileSync("test1.txt","www.example.com");

//var mevent = require("./mevent");
//var mev = new mevent.eventEmitter();
//
//mev.on("some",function(){
//	console.log("触发事件");
//});
//setTimeout("mev.emit('some')",2000);

var Stream = require("./writeStream");
var write = new Stream.writeStream("test1.txt");
write.write("writeStream ");
write.on("finish",function(){
	console.log("写入完毕");
});

write.on("error",function(err){
	console.log("flag: "+err);
});





















