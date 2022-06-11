//////////////////////////////////////////// - Start Calculator - ////////////////////////////////////////////////////////////
// let p = +prompt('Birinchi son')
// let  f = +prompt('Ikkinchi son')
// let w = prompt('Amallar kiriting: + - * /')

                                                                                                                    //   in IF, ELSE \\

// if(w =='-'){
//     function Minus(a, b) {
//         let d = a - b;
//         alert(d);
//         console.log(d);
        
//     }
//     Minus(p, f)
// }

// else if(w =='+'){
//     function Plus(a, b) {
//         let d = a + b;
//         alert(d);
//         console.log(d);
        
//     }
//     Plus(p, f)
// }

// else if(w =='*'){
//     function Multiplication(a, b) {
//         let d = a * b;
//         alert(d);
//         console.log(d);
        
//     }
//     Multiplication(p, f)
// }

// else if(w =='/'){
//     function Divison(a, b) {
//         let d = a / b;
//         alert(d);
//         console.log(d);
        
//   }
//      Divison(p, f)
// }
//  else{
//     alert('Iltimos amal kiriting')
// }

                                                                                                            //  in SWITCH \\

// switch (w) {
//     case '+':
//         function Plus(a, b) {
//                     let d = a + b;
//                     alert(d);
//                     console.log(d);
                    
//                 }
//                 Plus(p, f)
//                  break;

//          case '-':
//         function Minus(a, b) {
//                     let d = a - b;
//                     alert(d);
//                     console.log(d);
                    
//                 }
//                 Minus(p, f)
            
//             break;
//         case '*':
//             function Multiplication(a, b) {
//                         let d = a * b;
//                         alert(d);
//                         console.log(d);
                        
//                     }
//                     Multiplication(p, f)
//                 break;
//         case '/':
//         function Divison(a, b) {
//                     let d = a / b;
//                     alert(d);
//                     console.log(d);
                    
//                 }
//                 Divison(p, f)
//             break;
//     default:
//         alert('Iltimos amal kiriting');
//         break;
// }

//////////////////////////////////////////// - End Calculator - ////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////// - Yoshga qarab javob - /////////////////////////////////////////////////////////

// let start_age = +prompt('Yoshingizni kiriting')

// if (start_age <= -1){
//     alert( 'Xato raqam' )
// }
// else if ( start_age <= 5) {
//     alert('Saytimizga kirishga yoshingiz to`g`ri kelmaydi. Saytimizdan chiqishingizni so`raymiz!')
// }
// else if ( start_age <= 10) {
//     alert('Bratishka saytimizga xush kelibsan')
// }
// else if( start_age <= 14) {
//     alert('Ukam saytimizga xush kelibsan')
// }
// else if( start_age == 15) {
//     alert( 'Do`stim saytimizga xush kelibsiz' )
// }
// else if ( start_age <= 29) {
//     alert('Oka saytimizga xush kelibsiz')
// }
// else if ( start_age <= 65) {
//     alert('Amaki saytimizga xush kelibsiz')
// }
// else if ( start_age <= 79) {
//     alert('Bobojon saytimizga xush kelibsiz')
// }
// else if ( start_age <= 99) {
//     alert('Otaxon saytga xush kelibsiz')
// }
// else if ( start_age <= 10000n ) {
//     alert('Saytimizga kirishga yoshingiz to`g`ri kelmaydi. Saytimizdan chiqishingizni so`raymiz!')
// }
// else {
//          alert('Xato ma`lumot kiritdingiz !!! Tekshirib qayta urining !!!')
// }

///////////////////////////////////////////////// - o'zimiz haqimizda ma'lumot - //////////////////////////////////

// let obj = {
//     name: 'Umidxon' ,
//     surname: 'Polatxonov' , 
//     age: 15 ,
//     height: '1.75m', 
//     isMarried: false ,
//     future: 'Front-End Developer',
// }
// console.log(obj);

/////////////////////////////////// - obj uyga vazifa - ////////////////////////////////

// let your_data = alert( 'O`zingiz haqida ma`lumot beryapsiz! Davom etish uchun OK tugmasini bosing ' )
// let a = prompt( 'Ismingizni kiriting' )
// let b = +prompt( 'Yoshingizni kiriting' )
// let c = prompt( 'Familiyangizni kiriting' )
// let d = prompt( 'Mashinangiz bormi?' )
// let e = prompt( 'Mashina haydolasizmi?' )
// let f = prompt( 'Kelajakda kim bo`lmoqchisiz?' )
// let g = prompt( 'Bosh vaqtlaringizda nima bilan shug`ullanasiz?' )
// let h = prompt( 'Nimalarga qiziqasiz?' )
// let i = prompt( 'Ishlaysizmi yoki o`qiysizmi?' )
// let j = prompt( 'Uylanganmisiz?' )
// let save = alert( 'Rahmat. Ma`lumotlaringiz saqlandi' )

// let obj = {
//     your_name : a,
//     your_age : b,
//     your_surname : c,
//     isCar : d,
//     driveCar : e,
//     inTheFuture : f,
//     hobby : g,
//     interest : h,
//     work : i,
//     married : j
// }

// console.log(obj);

////////////////////////////////////////////////////////////////// - Juft yoki toq son aniqlovchi - ///////////////////////////////////////////////////////////////////////////////////////////

// let w = +prompt( 'Son kiriting: ' );
// let x = w; w <= 10000n; 
// if (w % 2 == 0) {
//     alert( 'Bu juft son', w );
//     console.log( 'Bu juft son >>>', w );
// }
// else if (w % 2 == 1) {
//     alert( 'Bu toq son', w  );
//     console.log( 'Bu toq son >>>', w );
// }
// else{
//     alert( 'Xato son yoki son emas !!!' );
//     console.log( 'Son kiritmadingiz!!! Qayta urining!!!' );
// }

// -------------------------------------------------------------------------------  yil hisoblovchi ---------------------------------------------------------------- //

confirm( 'Yil kiriting kiritgan yilingiz ichida necha oy, necha hafta, necha kun bor ekanligini hisoblab beradi : ) ' )
let input = +prompt( 'Yil kiriting: ' );
let month = input * 12;
let week = input * 52;
let day = input * 365;
let hours = input * 8760;
let a = ' yilda ';
let b = ' oy ';
let c = ' hafta ';
let d = ' kun va ';
let e = ' soat bor.'
let all = input + a + month + b + week + c + day +d + hours + e;
if (input) {
    document.write(`<h4>${all}</h4>`);
}
else {
    alert('Something went wrong :( Try again')
    document.write( `<h3>${'Error. Try again!'}</h3>` )
}

// ---------------------------------------------------------------------- juft yoki toq son hisoblovchi ---------------------------------------------------------------- //

// let a = +prompt('Son kiriting: ')

// for ( let i = 0; i <= a; i++)
// if ( i % 2 == 0 ) {
//     document.write( `<h1>${i}${ ' << Bu juft son'}</h1>` )
//     console.log(i);
// }
// else if ( i % 2 == 1 ) {
//     document.write(`<h1>${i}${ ' << Bu toq son'}</h1>` )
//     console.log(i);
// }
// else {
//     alert('Incorrect information entered!!!')
// }

// ------------------------------------------------------------ fetch uyga vazifa ----------------------------------------------- //

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => response.json())
// .then((data) => {
//     data.forEach(element => {
//         document.write(`<br>${element.id}</br>`)
//         document.write(`<br>${element.name}</br>`)
//         document.write(`<br>${element.email}</br>`)    
// })

// }); 

