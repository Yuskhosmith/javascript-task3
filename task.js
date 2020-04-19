function myFunction(param) {
    for(var i = 1; i<=param; i++) {
      if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
        output.push("yu-gi-oh")
      } else if (i % 2 === 0 && i % 5 === 0) {
        output.push("yu-oh")
      } else if (i % 2 === 0 && i % 3) {
        output.push("yu-gi")
      } else output.push(i)
    }
    return output;
  }
