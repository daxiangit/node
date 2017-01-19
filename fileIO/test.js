var read = require("./readfile.js");
var write = require("./writefile.js");
var append = require("./appendfile.js");

//read.readfile("test.txt",function(err,data){
//	if(err){
//		return console.error(err);
//	}
//	console.log(data.toString());
//});

//write.writefile("test.txt","www.runoob.com",function(err){
//	if(err){
//		return console.error(err);
//	}
//})

append.appendfile("test.txt","张振是大好人",(err) => {
	if(err){
		return console.error(err);
	}
	console.log("追加成功");
})
