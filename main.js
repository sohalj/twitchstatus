
function setAttribute(elem, attr){
  Object.keys(attr).forEach(key => elem.setAttribute(key, attr[key]));
}


function display(logo, stream, url, name, status){
  var symbol = null;
  if (stream == 0){
    symbol = 'fa fa-exclamation';
  }
  else{
    symbol = 'fa fa-check';
  }

  /* console.log("in display")
   var l = document.createElement("li");
   l.innerHTML += "list itme";

    var a = document.getElementById("list");
   console.log(a);
   a.appendChild(l);*/


  var l = document.createElement("li");
  if(stream == 0){
  	l.setAttribute("class", "off")
  }
  else{
  	l.setAttribute("class", "on")
  }




   var p = document.createElement("p");
   p.setAttribute("style", "float:left");
   var i = document.createElement("img");
   setAttribute(i, { 'class': 'logo img-responsive', src: logo});
   p.appendChild(i);
   var p2 = document.createElement("p");
   p2.setAttribute("style", "float:right");
   var i2 = document.createElement("i");
   setAttribute(i2, { 'class': symbol});
   //console.
   p2.appendChild(i2);
   l.appendChild(p);
   l.appendChild(p2);
   var h = document.createElement("a");
   setAttribute(h, {href: url, target: '_blank'});
   var t = document.createTextNode(name);
   h.appendChild(t);
   l.appendChild(h);
   //console.log("fasdf")
   //console.log(h)
   var s = document.createElement("p");
   s.setAttribute('class', 'status');
   var status = document.createTextNode(status);
   s.appendChild(status)
   l.appendChild(s);

   //console.log("value of l");
   //console.log(l)

   var a = document.getElementById("list");
   console.log(a);
   a.appendChild(l);
}




function search(a){
  $('#list').empty();
  var size = a.length
  var type = 'streams';
  var stream = true;
  var name = null;
  
  for(i=0; i<size; i++){
    name = a[i];
    //console.log("value of name   " + a[i]);
    var xhr = new XMLHttpRequest();
    console.log("value of i     " + i);
    xhr.onreadystatechange = function (){
      if(this.readyState == 4 && this.status == 200){
        var r = JSON.parse(this.responseText);               
        if(r.stream != null){  
      //    console.log("WE HAVE A STREAMER");
        //  console.log(r);
          //console.log("stream display being called");
          display(r.stream.channel.logo, 1, r.stream.channel.url, r.stream.channel.display_name, r.stream.channel.status);
        }
        else if (r.stream == null){
          var link = r._links.channel.slice(38, r._links.channel.length); ///have to use slice since non-streaming channels only return links that would work with a API key
          var xhr = new XMLHttpRequest();
          xhr.open("GET", "https://wind-bow.glitch.me/twitch-api/channels/" + link, true); /// all these calls occur after all orginal calls have taken place thats why have to use link
        //  console.log(" BEFORE sending API  inside ELSE call");
          xhr.send();
          xhr.onreadystatechange = function (){
            if(this.readyState == 4 && this.status == 200){
              var r = JSON.parse(this.responseText);
              console.log(r);
              display(r.logo, 0, r.url, r.display_name, "");
            }
            else{
              //exception handler
            }
          }   

        }
      else{
                  //exceptionhandler
      }

    }
    else{
          ////exception handler  
    }
    };  
      xhr.open("GET", "https://wind-bow.glitch.me/twitch-api/" + type + "/" + name, true);
      xhr.send();
  }

}














$(document).ready(function(){
  var a = ["ESL_SC2", "noobs2ninjas", "freecodecamp", "cretetion", "storbeck", "habathcx", "OgamingSC2", "RobotCaleb"];
  //var a = [ "noobs2ninjas", "freecodecamp", "cretetion", "storbeck", "habathcx", "RobotCaleb"];
 // var a = ["noobs2ninjas", "MedryBW", "ESL_SC2"];
  //var a = ["noobs2ninjas"];

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