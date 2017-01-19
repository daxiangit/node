var fs = require("fs");

function appendfile(filename,data,callback){
	var err;
	fs.open(filename,"a",function(err,fd){
		if(err){
			return console.error(err);
		}
		
		data = "\n" + data;
		
		fs.write(fd,data,0,data.length,0,function(err,written,buffer){
			if(err){
				return console.error(err);
			}
			
			fs.close(fd,function(err){
				if(err){
					return console.error(err);
				}
				
			});
		});
	});
	callback(err);
}

exports.appendfile = appendfile;