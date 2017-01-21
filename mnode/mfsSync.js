var fs = require("fs");

exports.readFileSync = readFileSync;
exports.writeFileSync = writeFileSync;
exports.appendFileSync = appendFileSync;

function readFileSync(filename){
	var buf = new Buffer(256);
	buf.fill(0);
	var fd = fs.openSync(filename,"r");
	var bytes = fs.readSync(fd,buf,0,buf.length,0);
	fs.closeSync(fd);
	return buf;
}

function writeFileSync(filename,data){
	var fd = fs.openSync(filename,"w");
	fs.writeSync(fd,data,0,data.length,0);
	fs.closeSync(fd);
}

function appendFileSync(filename,data){
	var fd = fs.openSync(filename,"a");
	fs.writeSync(fd,data,0,data.length);
	fs.closeSync(fd);
}
