function validateForm() {
    let x = document.forms["myForm"]["name"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  
  const submitBtn = document.getElementById('submit_btn')
  function addFields(e){
    e.preventDefault()
    var number = document.getElementById("member").value;
    var wrapper = document.getElementsByClassName("wrapper");
    //xeta baslayir
    while (wrapper.hasChildNodes()) {
        tr.removeChild(document.lastChild);
    }
    //xeta bitir
    for (i=0;i<number;i++){
       tr.appendChild(document.createTextNode("Member " + (i+1)));
        var input = document.createElement("input");
        input.type = "text";
        input.name = "member" + i;
        tr.appendChild(input);
        tr.appendChild(document.createElement("br"));
    }
  
  }
  submitBtn.onclick=addFields
   
}
