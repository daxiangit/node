var fs = require("fs");

function rename(oldFileName,newFileName){
	fs.rename(oldFileName,newFileName,function(err){
		if(err){
			return console.error(err);
		}
		console.log("重命名成功");
	});
}

function main(argv){
	rename(argv[0],argv[1]);
}

main(process.argv.slice(2));
