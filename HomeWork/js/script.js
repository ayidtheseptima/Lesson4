//1
// function checkAge(age) {
// 	if (age > 18) {
// 		return true;
// 	} else {
// 		return confirm("Батьки дозволили?");
// 	}
// }

// function checkAge(age) {
// 	return age > 18 ? true : confirm("Батьки дозволили?");
// }

//2
// function min(a, b) {
// 	return Math.min(a, b);
// }
//3
// Перепишіть з використанням стрілкових функцій
// Замініть Функціональні Вирази на стрілкові функції у коді нижче:
// function ask(question, yes, no) {
// if (confirm(question)) yes();
// else no();
// }
// ask(
// "Ви згодні?"
// ,
// function() { alert("Ви погодились."); },
// function() { alert("Ви скасували виконання."); }
// );

// const ask = (question, yes, no) => {
// 	if (confirm(question)) yes();
// 	else no();
// };

// ask(
// 	"Ви згодні?",
// 	() => alert("Ви погодились."),
// 	() => alert("Ви скасували виконання.")
// );
