var fs = require("fs");

function dir(){
	fs.readdir(".",function(err,files){
		if(err){
			return console.error(err);
		}
		files.forEach(function(file){
			console.log(file);
		});
	});
}

function main(){
	dir();
}

main();