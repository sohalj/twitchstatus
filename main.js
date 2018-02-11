
function display(r){


  console.log("in display")
 var l = document.createElement("li");
 var i = document.createElement("img");
 i.setAttribute("class", "img-responsive");
 i.setAttribute("src", r.logo);
 l.appendChild(i);
 var h = document.createElement("h5");
 var t = document.createTextNode(r.display_name)
 h.appendChild(t);
 console.log("fasdf")
 console.log(h)
 l.appendChild(h);

 console.log(l)

 var a = document.getElementById("list");
 a.appendChild(l);
 


}













function search(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function (){
      if(this.readyState == 4 && this.status == 200){
        var r = JSON.parse(this.responseText);
        console.log(r);
        
        console.log(r.display_name);
        display(r);
      }
    };  
    xhr.open("GET", "https://wind-bow.glitch.me/twitch-api/channels/freecodecamp" , true);
    xhr.send();
}


$(document).ready(function(){
  search();
});