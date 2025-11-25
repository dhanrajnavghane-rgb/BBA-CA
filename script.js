var count = 0;
var r = 0;

function add(val){
  if(val=='1'){

    var name = document.getElementById("name1").value;
    var price = parseInt(document.getElementById("price1").value);
    var img = document.getElementById("pic1").src;
    count = count+1;
    document.getElementById("c").innerHTML=count;
  
    document.getElementById("t").innerHTML = r;
    document.getElementById("cartval").innerHTML+="<div style='background:white; width:400px;height:130px;'><img style='width:50px;' src="+img+"><br>Name:"+name+" <br>Price: "+price+"</div>";
    
  
  
  }
if(val=='2'){

    var name = document.getElementById("name2").value;
    var price = parseInt(document.getElementById("price2").value);
    var img = document.getElementById("pic2").src;
    count = count+1;
    document.getElementById("c").innerHTML=count;

    document.getElementById("t").innerHTML = r;
    document.getElementById("cartval").innerHTML+="<div style='background:white; width:400px;height:130px;'><img style='width:50px;' src="+img+"><br>Name:"+name+" <br>Price: "+price+"</div>";
    


}
if(val=='3'){

  var name = document.getElementById("name3").value;
  var price = parseInt(document.getElementById("price3").value);
  var img = document.getElementById("pic3").src;
  count = count+1;
  document.getElementById("c").innerHTML=count;

  document.getElementById("t").innerHTML = r;
  document.getElementById("cartval").innerHTML+="<div style='background:white; width:400px;height:130px;'><img style='width:50px;' src="+img+"><br>Name:"+name+" <br>Price: "+price+"</div>";
  


}
if(val=='4'){

  var name = document.getElementById("name4").value;
  var price = parseInt(document.getElementById("price4").value);
  var img = document.getElementById("pic4").src;
  count = count+1;
  document.getElementById("c").innerHTML=count;

  document.getElementById("t").innerHTML = r;
  document.getElementById("cartval").innerHTML+="<div style='background:white; width:400px;height:130px;'><img style='width:50px;' src="+img+"><br>Name:"+name+" <br>Price: "+price+"</div>";
  


}
if(val=='5'){

  var name = document.getElementById("name5").value;
  var price = parseInt(document.getElementById("price5").value);
  var img = document.getElementById("pic5").src;
  count = count+1;
  document.getElementById("c").innerHTML=count;

  document.getElementById("t").innerHTML = r;
  document.getElementById("cartval").innerHTML+="<div style='background:white; width:400px;height:130px;'><img style='width:50px;' src="+img+"><br>Name:"+name+" <br>Price: "+price+"</div>";
  


} 
if(val=='6'){

  var name = document.getElementById("name6").value;
  var price = parseInt(document.getElementById("price6").value);
  var img = document.getElementById("pic6").src;
  count = count+1;
  document.getElementById("c").innerHTML=count;

  document.getElementById("t").innerHTML = r;
  document.getElementById("cartval").innerHTML+="<div style='background:white; width:400px;height:130px;'><img style='width:50px;' src="+img+"><br>Name:"+name+" <br>Price: "+price+"</div>";
  


}
if(val=='7'){

  var name = document.getElementById("name7").value;
  var price = parseInt(document.getElementById("price7").value);
  var img = document.getElementById("pic7").src;
  count = count+1;
  document.getElementById("c").innerHTML=count;

  document.getElementById("t").innerHTML = r;
  document.getElementById("cartval").innerHTML+="<div style='background:white; width:400px;height:130px;'><img style='width:50px;' src="+img+"><br>Name:"+name+" <br>Price: "+price+"</div>";
  



}
if(val=='8'){

  var name = document.getElementById("name8").value;
  var price = parseInt(document.getElementById("price8").value);
  var img = document.getElementById("pic8").src;
  count = count+1;
  document.getElementById("c").innerHTML=count;

  document.getElementById("t").innerHTML = r;
  document.getElementById("cartval").innerHTML+="<div style='background:white; width:400px;height:130px;'><img style='width:50px;' src="+img+"><br>Name:"+name+" <br>Price: "+price+"</div>";
  


}

 r = r+price;
 document.getElementById("t").innerHTML=r;

}