
    // Input - get input and convert that string to an integer
let x = parseInt(document.getElementById('speed').innerHTML);
let y = parseInt(document.getElementById('temp').innerHTML);

let windChil_factor = (35.74 + (0.6125 * y)) - (35.75 *(Math.pow( x, 0.16))) + 0.4275 *y*(Math.pow(x,0.16))

// Output - round to one decimal and output string with HTML to innerHTML of a div
document.getElementById('output').innerHTML = "<strong>" + windChil_factor.toFixed(1) + '78&#8457;' +"</strong>";