var fs = require("fs");

function writefile(filename,data,callback){
	var err;
	fs.open(filename,"w",function(err,fd){
		if(err){
			return console.error(err);
		}
		
		fs.write(fd,data,0,data.length,0,function(err,written,buffer){
			if(err){
				return console.error(err);
			}
			console.log("开始调试");
			console.log(typeof written);
			console.log(buffer);
			fs.close(fd,function(err){
				if(err){
					return console.error(err);
				}
				callback(err);
				
			});
		});
	});
}

exports.writefile = writefile;