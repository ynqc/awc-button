var child_process = require('child_process');
var fs = require('fs');
const chalk = require('chalk');

let libs = fs.readdirSync('./components');

const dependencyOrder = [
	'awc-button',
	'awc-icon'
];

const excludeLibs = [
	'.DS_Store'
];
libs = libs.filter((l) => excludeLibs.indexOf(l) == -1);
let copyLibs = [];
for (let lib of libs) {
	copyLibs.push(lib);
}
// sort libs based on dependency order
libs.sort((a, b) => {
	let orderA = dependencyOrder.indexOf(a);
	let orderB = dependencyOrder.indexOf(b);
	if (orderA == -1 && orderB == -1) {
		return copyLibs.indexOf(a) - copyLibs.indexOf(b);
	}
	orderA = (orderA == -1 ? orderB + 1 : orderA);
	orderB = (orderB == -1 ? orderA + 1 : orderB);
	return orderA - orderB;
})
console.log("----------Libs Build Order----------");
console.log(libs);
console.log("------------------------------------");

for (let lib of libs) {
	let opts = {
		cwd: `${process.cwd()}/components/${lib}`,
		stdio: 'inherit'
	};
	child_process.execSync(`npm run build`, opts);
	updateLibDisplayName(lib);
	printStatus();
}

// below 2 functions are purely for display purpose
function updateLibDisplayName(lib) {
	let index = copyLibs.indexOf(lib);
	let completedDisplayName = `Done: ${lib}`;
	copyLibs[index] = completedDisplayName;
}

function printStatus() {
	console.log("------------Build Status------------");
	for (let lib of copyLibs) {
		if (lib.indexOf('Done') != -1) {
			console.log(chalk.green(lib));
		}
		else {
			console.log(lib);
		}
	}
	console.log("------------------------------------");
}