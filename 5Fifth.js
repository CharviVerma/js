  function delay(callback){
    setTimeout(callback, 2000);
  }

  function mycallback(){
    console.log("callback after 2 seconds");
  }

  delay(mycallback);