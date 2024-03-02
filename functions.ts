function addNum(x: number, y: number): number {
	return x + y;
}

var x = addNum(10, 20);
console.log(x);

function anotherAddNum(a: string, b: number) {
	return a + b;
}

var y: string = anotherAddNum("adam", 24);
console.log(y);

function printHello(): void {
	console.log("Hello TypeScript!");
}

printHello();

function printFrag(e1: string, e2: string): string {
	return e1 + " " + e2;
}

var result: string = printFrag("Hello", "again");
console.log(result);
