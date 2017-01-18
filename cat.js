var fs = require("fs");
var buf = new Buffer(1024);

function cat(filename){
	fs.readFile(filename,function(err,data){
		if(err){
			return console.error(err);
		}
		console.log(data.toString());
	});
}

//function readFile(filename){
//	fs.open(filename,"r+",function(err,fd){
//		if(err){
//			return console.error(err);
//		}
//		
//		fs.read(fd,buf,0,buf.length,0,function(err,bytes){
//			if(err){
//				return console.error(err);
//			}
//
//			if(bytes > 0){
//				return buf.slice(0,bytes).toString();
//			}
//			
//			fs.close(fd,function(err){
//				if(err){
//					return console.error(err);
//				}
//			});
//		});
//	});
//}

function main(argv){
	cat(argv[0]);
}

main(process.argv.slice(2));
