var child_process = require("child_process");

function edit(filename){
	child_process.exec("notepad "+filename);
}

function main(argv){
	edit(argv[0]);
}

main(process.argv.slice(2));
