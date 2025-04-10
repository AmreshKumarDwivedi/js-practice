
for (let index = 0; index <= 10; index++) {
    const element = index;
    console.log(element)
    
}

for(let i =0;i<10;i++){
console.log(`outer numb ${i}`)
    for(let j=0;j<10;j++){
        console.log(`inner numb ${i} and ${j}`)
    }
}


for (let index = 0; index <= 10; index++) {
    const element = index;
   
    console.log(element)
    if(index == 5){
        break
    }
    
}

for (let index = 0; index <= 10; index++) {
    const element = index;
   
  
    if(index == 5){
        continue
    }
    console.log(element)
    
}