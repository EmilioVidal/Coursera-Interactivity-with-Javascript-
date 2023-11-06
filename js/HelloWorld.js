function showProperties(element, color, textC)
{
    var docGet = document.getElementById("message")
    docGet.style.background = color;
    docGet.style.color = textC;
    docGet.innerHTML = element.alt;
    docGet.style.backgroundImage = "url('" + element.src + "')";
}

function resetProperties() {
    var docGet = document.getElementById("message")
    docGet.style.background = ''; 
    docGet.style.color = '';
    docGet.innerHTML = 'pasa el mouse por una foto';
}


var supes = ["cap", " batman", " red hood", " nightwing"]
function loadSupers()
{
    document.getElementById("supes").innerHTML = supes;
}

function mySupes()
{
    var superH = prompt("Cual es otro de tu sups favoritos?");
    while(superH.length == 0)
        {
            superH = prompt("Cual es otro de tu sups favoritos?");   
        }
    var superH = " " + superH;
    supes.push(superH);
    document.getElementById("supes").innerHTML = supes;
}

function check()
{
    var email1 = document.getElementById("email_addr");
    var email2 = document.getElementById("email_rep");

    if (email1.value != email2.value) {
        alert("Los correos no son identicos");
        return false;
    }
    else{
        alert("Los correos son identicos");
        return false;
    }
}

function checkF()
{
    var email1 = document.getElementById("email_addr");
    var email2 = document.getElementById("email_rep");

    if (email1.value != email2.value) {
        alert("Los correos no son identicos");
        return false;
    }
    else{
        return true;
    }
}

function gender()
{
    if (document.getElementById("men").checked){
        alert("HOMBRE");
    }else if(document.getElementById("woman").checked)
    {
        alert("MUJER");
    }
}

function diferente()
{
    if (document.getElementById("otro").checked) {
        document.getElementById("otroS").style.display="inline";
        document.getElementById("otroSuper").setAttribute('required',true);
    }else{
        document.getElementById("otroSuper").removeAttribute('required');
        document.getElementById("otroS").style.display="none";
    }
}

function billingFunction()
{
  var shipN = document.getElementById("shippingName");
  var shipZ = document.getElementById("shippingZip");
  if (document.getElementById("same").checked)
    {
      document.getElementById("billingName").value = shipN.value;
      document.getElementById("billingZip").value = shipZ.value;
    }else{

        document.getElementById("billingName").value = "";
        document.getElementById("billingZip").value = "";
    }
}