var clothing=document.getElementById('clothing');
var Access=document.getElementById('Accessories');

function createCard(data){

    var card=document.createElement('div');
    card.className="cards";
    var thumbnails=document.createElement('img');
    thumbnails.className="thumbnails";
    thumbnails.src=data.preview;
    thumbnails.alt="images";

    var product=document.createElement('div');
    product.className="product";
    var heading=document.createElement('h4');
    heading.className="headings";
    heading.innerHTML=data.name;
    var brand=document.createElement('h5');
    brand.className="brand";
    brand.innerHTML=data.brand;

    var price=document.createElement('p');
    price.className="price";
    price.innerHTML=data.price;

product.appendChild(heading);
product.appendChild(brand);
product.appendChild(price);
    card.appendChild(thumbnails);
    card.appendChild(product);


    card.addEventListener('click',function(){

    window.location="./productde.html?id="+data.id;

    });
    
    return card;

}

var result;


var xhttp=new XMLHttpRequest();
xhttp.open("GET","https://5d76bf96515d1a0014085cf9.mockapi.io/product",true);
xhttp.onreadystatechange=function(){
    if(xhttp.readyState===4){
        result=JSON.parse(this.responseText);
        console.log(result);
      for(var i=0;i<result.length;i++){
          if(result[i].isAccessory===false){
          clothing.appendChild(createCard(result[i]));
          }
          else{
              Access.appendChild(createCard(result[i]));
          }
      }

    }


}
xhttp.send();

