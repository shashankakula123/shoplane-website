// <!-- <p id="item-count">Total  Items:</p>
// <div id="check-card">

//         <img src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg"  alt="sa">


  

//      <div id="check-desc">
//                <h4>
//                 Men Navy Blue Solid Sweatshirt</h4>

//                 <p>x2</p>

//                 <p><span>Amount: Rs </span><span>5198</span></p>

//           </div>
// </div> -->

var carCount=document.getElementById('cart-count');

var checkl=document.getElementById('check-l');

var itemCount=document.createElement('p');
itemCount.id="item-count";

itemCount.innerHTML="Total Items:+";


function createCards(d){

var checkCard=document.createElement('div');
checkCard.id="check-card";

var checkImage=document.createElement('img');
checkImage.src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg";
checkImage.alt="something";

checkCard.appendChild(checkImage);


var checkDesc=document.createElement('div');
checkDesc.id="check-desc";

var haah=document.createElement('h4');
haah.innerHTML=d.name;

var papa=document.createElement('p');
papa.innerHTML="United Colors of Benetton";

var papa2=document.createElement('p');


var pspa=document.createElement('span');
pspa.innerHTML="Amount: Rs ";

var pspa2=document.createElement('span');
pspa2.innerHTML="2599";
papa2.appendChild(pspa);
papa2.appendChild(pspa2);


checkDesc.appendChild(haah);

checkDesc.appendChild(papa);

checkDesc.appendChild(papa2);


checkCard.appendChild(checkDesc);
return checkCard;


}

var r;

window.onload=function(){


   var acr=window.location.search.split(',');
  acr[0]= acr[0].substring(1);

console.log(acr[0]);
   for(var k=0;k<acr.length;k++){
      if(acr[k]>=1){

        var h=k+1;
         var xhttpp=new XMLHttpRequest();
    xhttpp.open("GET","https://5d76bf96515d1a0014085cf9.mockapi.io/order/"+h,"true");
    xhttpp.onreadystatechange=function(){
     
       if(xhttpp.readyState===4){
    r=JSON.parse(this.responseText);
    console.log(r);
    checkl.appendChild(createCards(r));

       }
    }
    xhttpp.send();


      }
   }

    

    

    

    

};

// checkl.appendChild(checkCard);


var checkr=document.getElementById('check-r');

// <!-- <div>
// <h3 class="section-heading">Total Amount</h3>
// <p>Amount: Rs<span id="total-amount">13197</span></p> 
// <button id="btn-place-order">Place Order</button>
// </div>

// </div> -->

var amountSec=document.createElement('div');
 var amountHeading=document.createElement('h1');
amountHeading.className="section-heading";
amountHeading.innerHTML="Total Amount";

var amountPara=document.createElement('p');


var pspa3=document.createElement('span');
pspa3.innerHTML="Amount: Rs";

var pspa4=document.createElement('span');
pspa4.innerHTML="13197";
pspa4.id="total-amount";

amountPara.appendChild(pspa3);
amountPara.appendChild(pspa4);

var placeBtn=document.createElement('button');
placeBtn.id="btn-place-order";
placeBtn.innerHTML="Place Order";

placeBtn.addEventListener('click',function(){
   window.location.href="./order.html";
});

amountSec.appendChild(amountHeading);
amountSec.appendChild(amountPara);
amountSec.appendChild(placeBtn);


checkr.appendChild(amountSec);
