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