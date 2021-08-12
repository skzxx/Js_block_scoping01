{
  //block
  let y = 10
}

{
  //blocking with some command
  let y = 10
  const x = 20
  console.log(y, x)
}

{
  //nested blocking
  let y = 7
  {
    let y = 5
    console.log(y) //ref to the declared variables in the blocking body.
  }
  console.log(y) //same as reason in top.
}