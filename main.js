
function setAttribute(elem, attr){
  Object.keys(attr).forEach(key => elem.setAttribute(key, attr[key]));
}


/*
Pre: Get all the paramters needed to create list element
Post: Create list element and the elements that make up the list. 
      Add the list element to the unordered list.
*/
function display(logo, stream, url, name, status){
  var symbol = null;
  var l = document.createElement("li");
  if(stream == 0){
    setAttribute(l, {class: "off"});
    symbol = "fa fa-exclamation";
  }
  else{
    setAttribute(l, {class: "on"});
    symbol = "fa fa-check";
  }
 
  var i = document.createElement("img");
  setAttribute(i, {class: "img-responsive", src: logo, style: "float:left"});
  var i2 = document.createElement("i");
  setAttribute(i2, {class: symbol, style: "float:right"});
  l.appendChild(i);
  l.appendChild(i2);
  var h = document.createElement("a");
  setAttribute(h, {href: url, target: "_blank"});
  var t = document.createTextNode(name);
  h.appendChild(t);
  l.appendChild(h);
  var s = document.createElement("p");
  setAttribute(s, {class: "status"});
  var status = document.createTextNode(status);
  s.appendChild(status)
  l.appendChild(s);
  var a = document.getElementById("list");
  a.appendChild(l);
}


/*
Pre: Take array parameter that contains the names of different twitch channels
Post: Make the API calls get the data and call display function
*/

function search(a){
  var size = a.length
  var name = null;
  
  for(i=0; i<size; i++){
    name = a[i];
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function (){
      if(this.readyState == 4 && this.status == 200){
        var r = JSON.parse(this.responseText);               
        if(r.stream != null){  
          display(r.stream.channel.logo, 1, r.stream.channel.url, r.stream.channel.display_name, r.stream.channel.status);
        }
        else if (r.stream == null){
          var link = r._links.channel.slice(38, r._links.channel.length); ///have to use slice since non-streaming channels only return links that would work with a API key
          var xhr = new XMLHttpRequest();
          xhr.open("GET", "https://wind-bow.glitch.me/twitch-api/channels/" + link, true); /// all these calls occur after all orginal calls have taken place thats why have to use link
          xhr.send();
          xhr.onreadystatechange = function (){
            if(this.readyState == 4 && this.status == 200){
              var r = JSON.parse(this.responseText);
              console.log(r);
              display(r.logo, 0, r.url, r.display_name, "");
            }
            else{
              console.log("Error", xmlhttp.statusText)
            }
          }   
        }              
      }
      else{
        console.log("Error", xmlhttp.statusText)  
      }
    };
      xhr.open("GET", "https://wind-bow.glitch.me/twitch-api/streams/" + name, true);  
      xhr.send();
  }
}


$(document).ready(function(){
  var a = ["ESL_SC2", "MedryBW", "noobs2ninjas", "freecodecamp", "cretetion"];
  search(a);
  $('#online').click(function(){
  	$('.off').hide();
  	$('.on').show();
  });
  $('#offline').click(function(){
  	$('.on').hide();
  	$('.off').show();
  });
  $('#all').click(function(){
  	$('.on').show();
  	$('.off').show();
  });
});