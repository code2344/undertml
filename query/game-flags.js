try {
// START OF DOCUMENT CODE
// Not all flags are or will be supported.

// Blank Flag (no function)
var flagArray = q('flag[]');
var flag = q('flag');
var flg = q('flg');

// Flag 'var' Values
var flag5 = q('flag[5]'); // (1 - 100)
var flag5alt = q('flag5');
var fun = q('fun');
var flag6 = q('flag[6]');
var flag6alt = q('flag6');
var hardmode = q('hardmode');

// Blank Flag Script (no function)
if (flg === '' || flag === '' || flagArray === '') {
  
}

// Flag[5] or 'fun' Scripts
if (fun === '66' || flag5 === '66' || flag5alt === '66') {
  
}
else if (fun === '2' || fun === '3' || fun === '4' || fun === '5' || fun === '6' || fun === '7' ||
         flag5 === '2' || flag5 === '3' || flag5 === '4' || flag5 === '5' || flag5 === '6' || flag5 === '7' ||
         flag5alt === '2' || flag5alt === '3' || flag5alt === '4' || flag5alt === '5' || flag5alt === '6' || flag5alt === '7') {
  ring('wrongnumber');
}
else if (fun === '40' || fun === '41' || fun === '42' || fun === '43' || fun === '44' || fun === '45' ||
         flag5 === '40' || flag5 === '41' || flag5 === '42' || flag5 === '43' || flag5 === '44' || flag5 === '45' ||
         flag5alt === '40' || flag5alt === '41' || flag5alt === '42' || flag5alt === '43' || flag5alt === '44' || flag5alt === '45') {
  ring('sans-fridge');
}
else if (fun === '46' || fun === '47' || fun === '48' || fun === '49' || fun === '50' ||
         flag5 === '46' || flag5 === '47' || flag5 === '48' || flag5 === '49' || flag5 === '50' ||
         flag5alt === '46' || flag5alt === '47' || flag5alt === '48' || flag5alt === '49' || flag5alt === '50') {
  ring('pizza');
}

// Flag Scripts
// Not all flag variables are or will be used.

// END OF DOCUMENT CODE
}
// debug
catch(err) {
  var p = document.createElement("p");
  p.innerHTML = 'query/game-flags.js'+err.message;
  document.getElementById("bugboxprint").appendChild(p);
}
