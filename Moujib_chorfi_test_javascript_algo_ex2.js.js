function F21(A) {
    
    var values = [];
  
    
    for (var i = 0; i < A.length; i++) {
     
      var row = A[i].split(' ').map(Number);
  
     
      for (var j = 0; j < row.length; j++) {
        var n = row[j];
  
        if (n < 1 || n > 9) {
          console.log("The number " + n + " is not between 1 and 9.");
          document.getElementById('console').innerHTML += "<p>The number " + n + " is not between 1 and 9.</p>";
          return false;
        }
  
        
        if (values.includes(n)) {
          console.log("The number " + n + " appears more than once.");
          document.getElementById('console').innerHTML += "<p>The number " + n + " appears more than once.</p>";
          return false;
        }
  
        
        values.push(n);
      }
    }
  
    
    console.log("All numbers are good.");
    document.getElementById('console').innerHTML += "<p>All numbers are good.</p>";
    return true;
  }
  
  var array_number = new Array(9);
  array_number[0]= "4 2 7 3 5 1 9 8 6";
  array_number[1]= "9 8 3 7 6 2 5 1 4";
  array_number[2]= "1 5 6 8 9 4 7 2 3";
  array_number[3]= "2 3 9 1 8 5 4 6 7";
  array_number[4]= "7 4 1 6 3 9 2 5 8";
  array_number[5]= "5 6 8 2 4 7 1 3 9";
  array_number[6]= "8 7 2 9 1 3 6 4 5";
  array_number[7]= "3 9 5 4 2 6 8 7 1";
  array_number[8]= "6 1 4 5 7 8 3 9 2";
  
  console.log(F21(array_number));
  document.getElementById('console').innerHTML += "<p>" + F21(array_number) + "</p>";
  