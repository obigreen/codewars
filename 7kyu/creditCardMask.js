//Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
//
// Your task is to write a function maskify, which changes all but the last four characters into '#'.

//Examples (input --> output):

//"4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""
//
// // "What was the name of your first pet?"
// "Skippy" --> "##ippy"
// "Nananananananananananananananana Batman!" --> "####################################man!"

let sestString = "123456789987654321"

// return masked string
function maskify(cc) {
   return cc.slice(0, -4).replace(/./g, "#") + cc.slice(-4)
}

console.log(maskify(sestString))



// еще примеры

// function maskify(cc) {
//     return cc.replace(/.(?=....)/g, '#');
// }

// function maskify(cc) {
//     return cc.replace(/.(?=.{4})/g, "#");
// }








//==========================================

//Вот две заданные тобой функции maskify и различие в их работе:


// Первая функция maskify принимает строку и возвращает сначала маскированные символы, замененные на "#", а потом добавляет последние 4 символа строки в оригинальном виде:
// javascript
// function maskify(cc) {
//    return cc.slice(0, -4).replace(/./g, "#") + cc.slice(-4);
// }
// Данная функция работает в следующем порядке:
// cc.slice(0, -4) берёт всю строку, кроме последних четырёх символов.
// .replace(/./g, "#") заменяет каждый символ в этой подстроке на "#".
// + cc.slice(-4) конкатенирует (добавляет) к маскированной строке последние четыре символа исходной строки.


// Вторая функция maskify ведет себя немного иначе:
// javascript
// function maskify(cc) {
//    return cc.slice(0, -4).replace(/./g, "#").slice(-4);
// }
// Здесь последовательность действий такая:
// cc.slice(0, -4) снова берёт всю строку, кроме последних четырёх символов.
// .replace(/./g, "#") так же заменяет каждый символ на "#".
// Но .slice(-4) затем берёт последние четыре символа уже измененной маскированной строки, где все символы уже заменены на "#". Это означает, что ты получаешь только "#" вместо последних четырех символов исходной строки - всего 4 маскированных символа.
// Принципиальная разница между двумя методами заключается в том, что в первом случае + cc.slice(-4) объединяет маскированную часть строки с немаскированными последними четырьмя символами исходной строки, тогда как во втором случае .slice(-4) применяется после маскирования, и поэтому возвращает только часть уже маскированной строки.