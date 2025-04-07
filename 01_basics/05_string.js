const name = "Amresh";
const totalMoney = 50;
console.log(`${name} has ${totalMoney} rupees` );
const newname = new String('Dalveer'); //new mrthod to define string
const newname1 = newname.substring('0,4');
const newname2 = newname.slice('-3,-1');
console.table([newname1,newname2]);
const newTrim = "  Amresh  "
console.log(newTrim.trim());
const newUrl = 'www.amresh%20dubey.com';
console.log(newUrl.replace('%20','-'))
