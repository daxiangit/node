var fs = require("fs");

function delfile(filename){
	fs.unlink(filename,function(err){
		if(err){
			return console.error(err);
		}
		console.log("文件成功删除");
	})
}

function main(argv){
	delfile(argv[0]);
}

main(process.argv.slice(2));
