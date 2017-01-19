var fs = require("fs");

function readfile(filename,callback){
	var err;
	var data = new Buffer(256);
	fs.open(filename,"r",function(err,fd){
		if(err){
			return console.error(err);
		}
		
		fs.read(fd,data,0,data.length,0,function(err,bytesRead,buffer){
			if(err){
				return console.error(err);
			}
			
			fs.close(fd,function(err){
				if(err){
					return console.error(err);
				}
				if(bytesRead > 0){
					callback(err,data.slice(0,bytesRead));
				}
			});
		});
	});
}

exports.readfile = readfile;