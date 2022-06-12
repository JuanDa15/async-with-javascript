const doSomethingAsync = () => {
  return new Promise( (resolve, reject) => {
    (false) 
      ? setTimeout(()=>{ resolve('asyncronoXD') }, 2000) 
      : reject(new Error('error'));
       
  })
}

const test = async () => {
  const answer = await doSomethingAsync();

  console.log(answer);
}

const anotherTest = async() => {
  try {
    const answer = await doSomethingAsync();
    console.log(answer)
  } catch (error){
    console.error(error)
  }
}
anotherTest();