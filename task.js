function rangeSequence(start, num, step = 1){
  return Array.from({ length: (num - start) / step + 1 },function(_,index){
    return start + (index * step);
  })
}

function isDivisible(number){
  return rangeSequence(1,number).map(el => {
    let i = el;
    if (i % 5 === 0){
      return "oh"
    }
    
    if (i % 3 === 0){
      return "gi"
    }
    if (i % 2 === 0){
      return "yu"
    } 
    return i;
  })
}
isDivisible(10);
