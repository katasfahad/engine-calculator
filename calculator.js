document.addEventListener('DOMContentLoaded', function() {
let calculate = document.querySelector('#calculate');
calculate.addEventListener('click',
function equate(){
let bore = parseInt(document.querySelector('#bore').value);
let stroke = parseInt(document.querySelector('#stroke').value);
let number = document.querySelector('#number').value;
let calculate = document.querySelector('#calculate');
let result = document.querySelector('#res');
let equation;
// equation =  ((bore * bore) * stroke  * 0.7854) / 1000


switch (number) {
    case 'one':
        equation =  ((bore * bore) * stroke  * 0.7854  * 1) / 1000
        break;
    case 'two':
        equation =  ((bore * bore) * stroke  * 0.7854 * 2) / 1000
        break;
    case 'three':
        equation =  ((bore * bore) * stroke  * 0.7854 * 3) / 1000
        break;
    case 'four':
        equation =  ((bore * bore) * stroke  * 0.7854 * 4) / 1000
        break;
        case 'five':
        equation =  ((bore * bore) * stroke  * 0.7854 * 5) / 1000
        break;
        case 'six':
        equation =  ((bore * bore) * stroke  * 0.7854 * 6) / 1000
        break;
        case 'seven':
        equation =  ((bore * bore) * stroke  * 0.7854 * 7) / 1000
        break;
        case 'eight':
        equation =  ((bore * bore) * stroke  * 0.7854 * 8) / 1000
        break;
        case 'nine':
        equation =  ((bore * bore) * stroke  * 0.7854 * 9) / 1000
        break;
        case 'ten':
        equation =  ((bore * bore) * stroke  * 0.7854 * 10) / 1000
        break;
        case 'eleven':
        equation =  ((bore * bore) * stroke  * 0.7854 * 11) / 1000
        break;
        case 'twelve':
        equation =  ((bore * bore) * stroke  * 0.7854 * 12) / 1000
        break;
        case 'thirteen':
        equation =  ((bore * bore) * stroke  * 0.7854 * 13) / 1000
        break;
        case 'fourteen':
        equation =  ((bore * bore) * stroke  * 0.7854 * 14) / 1000
        break;
        case 'fiften':
        equation =  ((bore * bore) * stroke  * 0.7854 * 15) / 1000
        break;
        case 'sixteen':
        equation =  ((bore * bore) * stroke  * 0.7854 * 16) / 1000
        break;
    
    default:
        
        break;
}

result.innerHTML = equation.toFixed(3) + " Cubic Centimeters (CC)"
});
});
