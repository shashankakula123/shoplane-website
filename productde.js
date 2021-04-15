var first=document.getElementById('first');
var second=document.getElementById('second');





var proimage=document.createElement('img');
proimage.className="proimage";

proimage.alt="pro";
first.appendChild(proimage);




var protitle=document.createElement('h1');

protitle.className="protitle";
var probrand=document.createElement('h1');
probrand.className="probrand";



var proprice=document.createElement('h4');
proprice.className="proprice";

var prodesc=document.createElement('h4');
prodesc.className="prodesc";


var propara=document.createElement('p');
propara.className="propara";



var preh=document.createElement('h4');
preh.id="preh";
preh.innerHTML="Product Preview";


var mini=document.createElement('div');
mini.id="mini";


var prothumb1=document.createElement('img');
prothumb1.className="thumbs";

prothumb1.alt="some";

var prothumb2=document.createElement('img');
prothumb2.className="thumbs";

prothumb2.alt="some";

var prothumb3=document.createElement('img');
prothumb3.className="thumbs";

prothumb3.alt="some";

var prothumb4=document.createElement('img');
prothumb4.className="thumbs";

prothumb4.alt="some";

var prothumb5=document.createElement('img');
prothumb5.className="thumbs";

prothumb5.alt="some";


prothumb1.addEventListener('click',function(){
  prothumb1.className="active-image";
prothumb2.className="thumbs";
prothumb3.className="thumbs";
prothumb4.className="thumbs";
prothumb5.className="thumbs";
});

prothumb2.addEventListener('click',function(){
  prothumb2.className="active-image";
prothumb1.className="thumbs";
prothumb3.className="thumbs";
prothumb4.className="thumbs";
prothumb5.className="thumbs";
});

prothumb3.addEventListener('click',function(){
  prothumb3.className="active-image";
prothumb2.className="thumbs";
prothumb1.className="thumbs";
prothumb4.className="thumbs";
prothumb5.className="thumbs";
});

prothumb4.addEventListener('click',function(){
  prothumb4.className="active-image";
prothumb2.className="thumbs";
prothumb3.className="thumbs";
prothumb1.className="thumbs";
prothumb5.className="thumbs";
});

prothumb5.addEventListener('click',function(){
  prothumb5.className="active-image";
prothumb2.className="thumbs";
prothumb3.className="thumbs";
prothumb4.className="thumbs";
prothumb1.className="thumbs";
});

var count=null;
var cartCount=document.getElementById('cart-count');
cartCount.innerHTML="0";
var btn=document.createElement('button');
btn.id="btn";
btn.innerHTML="Add to cart";





mini.appendChild(prothumb1);
mini.appendChild(prothumb2);
mini.appendChild(prothumb3);
mini.appendChild(prothumb4);
mini.appendChild(prothumb5);


second.appendChild(protitle);
second.appendChild(probrand);
second.appendChild(proprice);
second.appendChild(prodesc);
second.appendChild(propara);
second.appendChild(preh);
second.appendChild(mini);
second.appendChild(btn);

var dataTobe;

function createDetails(data){

    proimage.src=data.preview;

    protitle.innerHTML=data.name;
    probrand.innerHTML=data.brand;
    proprice.innerHTML="RS "+data.price;
    propara.innerHTML=data.description;

    prothumb1.src=data.photos[0];

    prothumb2.src=data.photos[1];
    prothumb3.src=data.photos[2];
    prothumb4.src=data.photos[3];
    prothumb5.src=data.photos[4];

    btn.onclick=function(){
      dataTobe=[0,0,0,0,0,0,0,0,0,0];
      var s=data.id-1
      dataTobe[s]++;
      count++;
      cartCount.innerHTML=count;
      
    
    
    
    };
    var cart=document.getElementById('cart');
cart.onclick=function(){
  window.location="./checkoutpage.html?"+dataTobe;
}


}


var arr;
var i= window.location.href.split('=')[1];

var xhtt=new XMLHttpRequest();
xhtt.open("GET","https://5d76bf96515d1a0014085cf9.mockapi.io/product/"+i,true);
xhtt.onreadystatechange=function(){
    if(xhtt.readyState===4){
      arr=JSON.parse(this.responseText);
      console.log(arr);
     
        
      
    }

    createDetails(arr);
}
xhtt.send();