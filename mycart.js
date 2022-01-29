var item_name_list=["RCB REPLICA JERSE","RCB FAN JERSEY","TEE-FOREST NIGHT","RCB FANWARE TEE","RCB FILP FLOPS","RCB ELEVATED POLO","MI REPLICA","MI DROP CUT","MI POLO NEW","MI CAP","MI POLO","MI MASK","CSK REPLICA","CSK T-SHIRT","CSK BAGPACK","CSK AUTOGRAPH COSTER","CSK MOBILE CASE","CSK MASK"];
var item_price_list=["1799","1299","1490","1199","799","1799","1799","1499","1290","1199","799","1799","1799","1499","1290","1199","799","1799"];
var item_name="";
var price_label="";
var price=0;
function addtocart(clicked)
{
	var a=item_name_list[clicked];
	var temp_price=item_price_list[clicked];
	price+=Number(item_price_list[clicked]);
	item_name+=a + "<br/>";
	price_label+= temp_price + "<br/>";
	document.getElementById("ocon1").innerHTML = item_name;
	document.getElementById("price").innerHTML = price_label;
	document.getElementById("totalprice").innerHTML = price;
	alert(item_name_list[clicked] + " added");
}
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
// function orderplaced()
// {
// 	const item=document.getElementById('ocon1').value;
// 	alert(item);
// 	sessionStorage.setItem("item",item);
// }
function validateForm()
{
	var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	var omail=document.getElementById("email");
	if(omail.value.match(mailformat))
	{
		var cardno = /^(?:3[47][0-9]{13})$/;
		var cardno2 = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
		var cardno3 = /^(?:5[1-5][0-9]{14})$/;
		var ccnumber=document.getElementById("ccno")
		if(ccnumber.value.match(cardno) || ccnumber.value.match(cardno2) || ccnumber.value.match(cardno3))
	        {
	      		var pnformat = /^\d{10}$/; 
			    var ph=document.getElementById("phonet");
			    if(ph.value.match(pnformat))   
			    {  
				    if(price != 0)
				    {	
				    	var pinformat = /(^\d{6}$)/;
				    	var pin=document.getElementById("pincode");
				    	if(pin.value.match(pinformat))
				    	{
							var dt=document.getElementById("edate").value;
							if(new Date(dt).getTime() > Date.now()) 
							{
								return true;
							}
							else
							{
								alert("your card is expired");
								return false;
							}
				    	}
				    	else
				    	{
				    		alert("Invalid pincode");
				    		return false;
				    	}
				    } 
				    else
				    {	
				        alert("cart is empty"); 
				        return false; 
				    } 
				}
				else
				{
					alert("Your Mobile Number Is Not Valid."); 
        			return false; 
				}
			}
		else
		{
			alert("Not a valid Creditcard number!");
       		return false;
		} 
	}
	else
	{
		alert("You have entered an invalid email address!");
		return false;
	} 
} 