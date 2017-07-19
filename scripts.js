// scripts.js


var a,
    b,
    value,
	wynik_dodatni,
	
	a=1;
	b=0;

value = (a * a) + (2 * a * b) - (b * b);

console.log(value);
if (value < 0) {
    console.log('Wynik_ujemny');} 
	else if (value > 0) {
	console.log('Wynik dodatni')}
	else {
	console.log('Wynik równy zero');
};

