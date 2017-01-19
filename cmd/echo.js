var fs = require("fs");

function echo(filename,data){

	fs.open(filename,"a",function(err,fd){
		if(err){
			return console.error(err);
		}
		fs.write(fd,data+"\n",0,(data+"\n").length,function(err,written,buffer){
			if(err){
				return console.error(err);
			}
			console.log("bytes: "+written);
			console.log("写入的数据:\n"+buffer.toString());
		});
	});
}

function main(argv){
	echo(argv[0],argv[1]);
}

main(process.argv.slice(2));
