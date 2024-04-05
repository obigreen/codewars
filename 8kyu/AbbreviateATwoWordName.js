// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//
//     The output should be two capital letters with a dot separating them.
//
//     It should look like this:
//
// Sam Harris => S.H
//
// patrick feeney => P.F

function abbrevName(name) {
    let nameParts = name.split(' ');
    return nameParts[0][0].toUpperCase() + '.' + nameParts[1][0].toUpperCase();
}

// const abbrevName = name => name.match(/\b\w/g).join('.').toUpperCase()

// вот этот самый классный
// return name.split(' ').map(i => i[0].toUpperCase()).join('.')

console.log(abbrevName('Сэм Харрис'));

