var fs = require("fs");

exports.readFile = readFile;
exports.writeFile = writeFile;
exports.appendFile = appendFile;

var buffer = new Buffer(40);
var fileSize = 0;					//文件大小
var filePosition = 0;				//文件指针
function readFile(filename,callback){
	var arr = [];
	fs.stat(filename,function(err,stats){    	//获取文件大小
		if(err){
			return callback(err);
		}
		fileSize = stats.size;
	});
	fs.open(filename,"r",function(err,fd){
		if(err){
			return callback(err); 
		}
		var count = fileSize;		//剩余字节未读
		while(count % 40 >= 0){
			if(count < 40){
				buffer = new Buffer(count);
			}else{
				buffer = new Buffer(40);
			}
			fs.read(fd,buffer,0,buffer.length,filePosition,function(err,bytes){
				if(err){
					return callback(err);
				}
				if(bytes > 0){
					arr.push(buffer);
				}
			});
			count = count - 40;
			filePosition += 40;
		}
		fs.close(fd,function(err){
			callback(err,Buffer.concat(arr));
		});
	});
}

function writeFile(filename,data,callback){
	fs.open(filename,"w",function(err,fd){
		if(err){
			return callback(err);
		}
		fs.write(fd,data,0,data.length,0,function(err,written,buffer){
			if(err){
				return callback(err);
			}
			fs.close(fd,function(err){
				callback(err);
			});
		});
	});
}


function appendFile(filename,data,callback){
	fs.open(filename,"a",function(err,fd){
		if(err){
			return callback(err);
		}
		fs.write(fd,data,0,data.length,function(err,written,buffer){
			if(err){
				return callback(err);
			}
			fs.close(fd,function(err){
				callback(err);
			});
		});
	});
}
























