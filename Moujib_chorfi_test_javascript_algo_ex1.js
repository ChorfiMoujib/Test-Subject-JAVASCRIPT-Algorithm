var to_verify = new Array(9);
for (var i = 0; i < 9; i++) {
  to_verify[i] = new Array(9);
}

function F11() {
    for (var i = 0; i < 9; i++) {
      var row = array_number[i].split(" ");
      for (var j = 0; j < 9; j++) {
        to_verify[i][j] = parseInt(row[j]);
      }
    }
  }
  
  function F12() {
    var html = "<table>";
    for (var i = 0; i < 9; i++) {
      html += "<tr>";
      for (var j = 0; j < 9; j++) {
        html += "<td>" + to_verify[i][j] + "</td>";
      }
      html += "</tr>";
    }
    html += "</table>";
    document.getElementById("output").innerHTML = html;
  }
    