// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
// Task
// Given a year, return the century it is in.

// Note: this kata uses strict construction as shown in the description and the examples, you can read more about it here


// Первое столетие охватывает от 1 года до 100 года включительно, второе столетие — от 101 года до 200 года включительно и т. д.
// Задача
// Учитывая год, верните столетие, в котором он находится.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
// 2742 --> 28

//Примечание: в этом ката используется строгая конструкция, как показано в описании и примерах. Подробнее об этом можно прочитать здесь.



function century(year) {
   let thisCentury = year / 100;
   return (
       Math.ceil(thisCentury)
   )
}

// Более короткий вариант
// const century = year => Math.ceil(year/100)






