var fs = require("fs");

function rmdir(dirname){
	fs.rmdir(dirname,function(err){
		if(err){
			return console.error(err);
		}
		console.log("目录删除成功");
	});
}

function main(argv){
	rmdir(argv[0]);
}

main(process.argv.slice(2));
