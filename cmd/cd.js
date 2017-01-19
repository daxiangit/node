var path = require("path");

function cd(dirname){
	console.log(path.join(path.join(__dirname,dirname)));
}

function main(argv){
	cd(argv[0]);
}

main(process.argv.slice(2));
