const icons = ['😆', '😂', '😍', '😇', '😎'];
const str = '😊😆😂😍😇😎';

console.log('Array', icons); //Array [ '😆', '😂', '😍', '😇', '😎' ]

const arraySplit = str.split('');
console.log('.split', arraySplit); //.split [  '\ud83d', '\ude0a', '\ud83d', '\ude06', '\ud83d', '\ude02', '\ud83d', '\ude0d', '\ud83d', '\ude07', '\ud83d', '\ude0e' ]

const arrayIconFrom = Array.from(str);
console.log('.from', arrayIconFrom); //.from [ '😊', '😆', '😂', '😍', '😇', '😎' ]

const returnFill = Array(5).fill('😍');
console.log('.fill', returnFill); //.fill [ '😍', '😍', '😍', '😍', '😍' ]

const arrayIconFill = [...icons];
const returnFillArray = arrayIconFill.fill('❤', 1, 3);
console.log('.fill', arrayIconFill, '=>', returnFillArray); //.fill [ '😆', '❤', '❤', '😇', '😎' ] => [ '😆', '❤', '❤', '😇', '😎' ]

const arrayIconPush = [...icons];
const returnPush = arrayIconPush.push('❤');
console.log('.push', arrayIconPush, '=>', returnPush); //.push [ '😆', '😂', '😍', '😇', '😎', '❤' ] => 6

const arrayIconUnshift = [...icons];
const returnUnshift = arrayIconUnshift.unshift('❤');
console.log('.unshift', arrayIconUnshift, '=>', returnUnshift); //.unshift [ '❤', '😆', '😂', '😍', '😇', '😎' ] => 6

const arrayIconPop = [...icons];
const returnPop = arrayIconPop.pop();
console.log('.pop', arrayIconPop, '=>', returnPop); //.pop [ '😊', '😆', '😂', '😍', '😇' ] => 😎

const arrayIconShift = [...icons];
const returnShift = arrayIconShift.shift();
console.log('.shift', arrayIconShift, '=>', returnShift); //.shift [ '😆', '😂', '😍', '😇', '😎' ] => 😊

const arrayIconAt = [...icons];
const returnAt = arrayIconAt.at(2);
console.log('.at', arrayIconAt, '=>', returnAt); //.at [ '😊', '😆', '😂', '😍', '😇', '😎' ] => 😂

const arrayIconSlice = [...icons];
const returnSlice = arrayIconSlice.slice(2, 4);
console.log('.slice', arrayIconSlice, '=>', returnSlice); //.slice [ '😊', '😆', '😂', '😍', '😇', '😎' ] => [ '😂', '😍' ]

const arrayIconSplice = [...icons];
const returnSplice = arrayIconSplice.splice(1, 2);
console.log('.splice', arrayIconSplice, '=>', returnSplice);

const arrayIconSplice2 = [...icons];
const returnSplice2 = arrayIconSplice2.splice(1, 2, '😆');
console.log('.splice', arrayIconSplice2, '=>', returnSplice2); //.splice [ '😊', '😆', '😂', '😍', '😇', '😎' ] => [ '😂', '😍' ]

const arrayIconSplice3 = [...icons];
const returnSplice3 = arrayIconSplice3.splice(1, 2, '❤', '👍', '👌', '👋');
console.log('.splice', arrayIconSplice3, '=>', returnSplice3); //.splice [ '😊', '😆', '😂', '😍', '😇', '😎' ] => [ '😂' ]


const arrayIconReverse = [...icons];
const returnReverse = arrayIconReverse.reverse();
console.log('.reverse', arrayIconReverse, '=>', returnReverse); //.reverse [ '😎', '😇', '😍', '😂', '😆', '😊' ] => [ '😎', '😇', '😍', '😂', '😆', '😊' ]

const arrayIconSort = [...icons];
const returnSort = arrayIconSort.sort();
console.log('.sort', arrayIconSort, '=>', returnSort); //.sort [ '😊', '😆', '😂', '😍', '😇', '😎' ] => [ '😇', '😊', '😂', '😆', '😍', '😎' ]

    console.log("\n"); //new line


const arrayIconJoin = [...icons];
const returnJoin = arrayIconJoin.join(' ');
console.log('join', arrayIconJoin, '=>', returnJoin); //.join [ '😊', '😆', '😂', '😍', '😇', '😎' ] => 😊 😆 😂 😍 😇 😎

const arrayIconConcat = [...icons];
const returnConcat = arrayIconConcat.concat('😎');
console.log('.concat', arrayIconConcat, '=>', returnConcat); //.concat [ '😊', '😆', '😂', '😍', '😇', '😎' ] => [ '😊', '😆', '😂', '😍', '😇', '😎', '😎' ]

const arrayIconIncludes = [...icons];
const returnIncludes = arrayIconIncludes.includes('😍');
console.log('.includes', arrayIconIncludes, '=>', returnIncludes); //.includes [ '😊', '😆', '😂', '😍', '😇', '😎' ] => true

const arrayIconIndexOf = [...icons];
const returnIndexOf = arrayIconIndexOf.indexOf('😍');
console.log('.indexOf', arrayIconIndexOf, '=>', returnIndexOf); //.indexOf [ '😊', '😆', '😂', '😍', '😇', '😎' ] => 3

const arrayIconMap = [...icons];
const returnMap = arrayIconMap.map((icon, index) => `${icon} ${index}`);
console.log('.map', arrayIconMap, '=>', returnMap); //.map [ '😊', '😆', '😂', '😍', '😇', '😎' ] => [ '😊 0', '😆 1', '😂 2', '😍 3', '😇 4', '😎 5' ]

const arrayIconFilter = [...icons];
const returnFilter = arrayIconFilter.filter(icon => icon === '😍');
console.log('.filter', arrayIconFilter, '=>', returnFilter); //.filter [ '😊', '😆', '😂', '😍', '😇', '😎' ] => [ '😍' ]

const arrayIconReduce = [...icons];
const returnReduce = arrayIconReduce.reduce((acc, icon) => acc + icon, '');
console.log('.reduce', arrayIconReduce, '=>', returnReduce); //.reduce [ '😊', '😆', '😂', '😍', '😇', '😎' ] => 😊😆😂😍😇😎

const arrayIconEvery = [...icons];
const returnEvery = arrayIconEvery.every(icon => icon === '😍');
console.log('.every', arrayIconEvery, '=>', returnEvery); //.every [ '😊', '😆', '😂', '😍', '😇', '😎' ] => false

const arrayIconSome = [...icons];
const returnSome = arrayIconSome.some(icon => icon === '😍');
console.log('.some', arrayIconSome, '=>', returnSome); //.some [ '😊', '😆', '😂', '😍', '😇', '😎' ] => true

    console.log("\n"); //new line

const arrayIconFind = [...icons];
const returnFind = arrayIconFind.find(icon => icon === '😍');
console.log('.find', arrayIconFind, '=>', returnFind); //.find [ '😊', '😆', '😂', '😍', '😇', '😎' ] => 😍

const arrayIconFindIndex = [...icons];
const returnFindIndex = arrayIconFindIndex.findIndex(icon => icon === '😍');
console.log('.findIndex', arrayIconFindIndex, '=>', returnFindIndex); //.findIndex [ '😊', '😆', '😂', '😍', '😇', '😎' ] => 3

    console.log("\n"); //new line

const arrayIconFlat = [['😆', '😆', '😆'], ['😎', '😎', '😎'], ['😊', '😆']];
const returnFlat = arrayIconFlat.flat();
console.log('.flat', arrayIconFlat, '=>', returnFlat); //.flat [ [ '😆', '😆', '😆' ], [ '😎', '😎', '😎' ], [ '😊', '😆' ] ] => [ '😆', '😆', '😆', '😎', '😎', '😎', '😊', '😆' ]

    console.log("\n"); //new line

const arrayIconFlatMap = [['😆', '😆', '😆'], ['😎', '😎', '😎'], ['😊', '😆']];
const returnFlatMap = arrayIconFlatMap.flatMap(icon => icon);
console.log('.flatMap', arrayIconFlatMap, '=>', returnFlatMap); //.flatMap [ [ '😆', '😆', '😆' ], [ '😎', '😎', '😎' ], [ '😊', '😆' ] ] => [ '😆', '😆', '😆', '😎', '😎', '😎', '😊', '😆' ]

    console.log("\n"); //new line

const arrayIconReduceRight = [...icons];
const returnReduceRight = arrayIconReduceRight.reduceRight((acc, icon) => acc + icon, '');
console.log('.reduceRight', arrayIconReduceRight, '=>', returnReduceRight); //.reduceRight [ '😊', '😆', '😂', '😍', '😇', '😎' ] => 😎😇😍😂😆😊

const arrayIconCopyWithin = [...icons];
const returnCopyWithin = arrayIconCopyWithin.copyWithin(0, 2, 4);
console.log('.copyWithin', arrayIconCopyWithin, '=>', returnCopyWithin); //.copyWithin [ '😊', '😆', '😂', '😍', '😇', '😎' ] => [ '😍', '😆', '😂', '😍', '😇', '😎' ]

// object methods
    console.log("\n"); //new line

const arrayIconEntries = [...icons];
const returnEntries = arrayIconEntries.entries();
console.log('.entries', arrayIconEntries, '=>', JSON.stringify(returnEntries)); //.entries [ '😊', '😆', '😂', '😍', '😇', '😎' ] => {"0":["😊",0],"1":["😆",1],"2":["😂",2],"3":["😍",3],"4":["😇",4],"5":["😎",5]}

for (const [index, icon] of arrayIconEntries.entries()) {
    console.log('for() .entries', index, icon);
}

const arrayIconKeys = [...icons];
const returnKeys = arrayIconKeys.keys();
console.log('.keys', arrayIconKeys, '=>', JSON.stringify(returnKeys)); //.keys [ '😊', '😆', '😂', '😍', '😇', '😎' ] => {"0":0,"1":1,"2":2,"3":3,"4":4,"5":5}

for (const index of arrayIconKeys.keys()) {
    console.log('for() .keys', index);
}

const arrayIconValues = [...icons];
const returnValues = arrayIconValues.values();
console.log('.values', arrayIconValues, '=>', JSON.stringify(returnValues)); //.values [ '😊', '😆', '😂', '😍', '😇', '😎' ] => {"0":"😊","1":"😆","2":"😂","3":"😍","4":"😇","5":"😎"}

for (const icon of arrayIconValues) {
    console.log('for() .values', icon);
}

        console.log("\n"); //new line
