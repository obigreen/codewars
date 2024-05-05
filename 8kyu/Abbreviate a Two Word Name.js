// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//
//     The output should be two capital letters with a dot separating them.
//
//     It should look like this:


// мое решение
function abbrevName(name) {
    let words = name.split(" ");
    return (
        words[0].charAt(0).toUpperCase() + "." + words[1].charAt(0).toUpperCase()
    )
}

console.log(abbrevName("john doe"));

// интересные решения для изучения
// function abbrevName(name){
//     return name.split(' ').map(i => i[0].toUpperCase()).join('.')
// }


// function abbrevName(name){
//
//     var nameArray = name.split(" ");
//     return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
// }

// function abbrevName(name){
//     return name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.');
// }

