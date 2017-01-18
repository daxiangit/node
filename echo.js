var fs = require("fs");

function echo(filename,data){
	fs.writeFile(filename,data,function(err){
		if(err){
			return console.error(err);
		}
	});
}

function main(argv){
	echo(argv[0],argv[1]);
}

main(process.argv.slice(2));
