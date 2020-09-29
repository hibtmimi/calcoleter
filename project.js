// add number 
  function insert(num){
   var myString = document.form.textview.value;
   var lastChar = myString[myString.length - 1];
   if (myString.length < 30) {
    if (!isNaN(lastChar) || lastChar == null || !isNaN(num)) {
     document.form.textview.value = myString + num;
    }else if(num != lastChar){
     document.form.textview.value = myString.replace(lastChar, num);
    }
   }
  }
  // sum the numbers 
  function equal(){
   var sum = document.form.textview.value;
   if (sum) {
    document.form.textview.value = eval(sum);
   }
  }
  // delete the numbers 
  function clean(){
   document.form.textview.value = '';
  }
  
  // delete last number 
  function back(){
   var exp = document.form.textview.value;
   document.form.textview.value = exp.substring(0,exp.length - 1);
  }
