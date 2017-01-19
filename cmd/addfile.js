var fs = require("fs");

function addfile(filename){
	fs.open(filename,"wx",function(err,fd){
		if(err){
			return console.error(err);
		}
		console.log("文件创建成功");
		fs.close(fd,function(err){
			if(err){
				return console.error(err);
			}
		});
	});
}

function main(argv){
	addfile(argv[0]);
}

main(process.argv.slice(2));

//创建文件