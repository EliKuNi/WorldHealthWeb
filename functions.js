
/* By Elizabeth Kuleshova 
     Creation date: 2/12/2021 */

var example = ['HTA', 'Health Tourism Assessment'];

textSequence(0);
    function textSequence(i) {
 
    if (example.length > i) { setTimeout(function() {
    document.getElementById("sequence").innerHTML = example[i];
    textSequence(++i); }, 1200);

// 1 second (in milliseconds)
}

else if (example.length == i) { // Loop

textSequence(1);

}}

//toggle
function fun() {
    var dark = document.body;
        dark.classList.toggle('LightMod');
}

//search your condition
function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
