const shopPrice = [100,200,300];
const full_price = shopPrice.reduce((acc,cval)=>acc+cval,0)
console.log(full_price)