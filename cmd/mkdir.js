var fs = require("fs");

function mkdir(dirname){
	fs.mkdir(dirname,function(err){
		if(err){
			return console.error(err);
		}
		console.log("目录创建成功");
	});
}

function main(argv){
	mkdir(argv[0]);
}

main(process.argv.slice(2));
