



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



 console.log("in display")
 var l = document.createElement("li");
 var p = document.createElement("p");
 p.setAttribute("style", "float:left");
 var i = document.createElement("img");
 setAttribute(i, { 'class': 'logo img-responsive', src: logo});
 p.appendChild(i);
 var p2 = document.createElement("p");
 p2.setAttribute("style", "float:right");
 var i2 = document.createElement("i");
 setAttribute(i2, { 'class': symbol});
 console.log(i2)
 p2.appendChild(i2);
 l.appendChild(p);
 l.appendChild(p2);
 var h = document.createElement("a");
 h.setAttribute("href", url);
 h.setAttribute("target", "_blank");
 var t = document.createTextNode(name);
 h.appendChild(t);
 l.appendChild(h);
 console.log("fasdf")
 console.log(h)
 var s = document.createElement("p");
 var status = document.createTextNode(status);
 s.appendChild(status)
 l.appendChild(s);

 console.log(l)

 var a = document.getElementById("list");
 a.appendChild(l);
}










function search(type, name){
    var r = null;
    console.log(type + "value of type");
    console.log(name + " value of name")
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function (){
      if(this.readyState == 4 && this.status == 200){
        r = JSON.parse(this.responseText);
        console.log(r);
        
      }
    };  
    xhr.open("GET", "https://wind-bow.glitch.me/twitch-api/" + type + "/" + name, false);
    //xhr.open("GET", "https://wind-bow.glitch.me/twitch-api/streams/" + "MedryBW" , true);
    xhr.send();
    return r;
}






$(document).ready(function(){
  var a = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
  console.log("before search");
  for(i=0; i<a.length;i++){
    var s = 'streams';
    var c = 'channels';
    var name = 'MedryBW';
    var v = search(s, a[i]);
    console.log("after search");
    console.log(v);
    if(v.stream != null){
      display(v.stream.channel.logo, 1, v.stream.channel.url, v.stream.channel.display_name, v.stream.channel.status,);
      console.log(v);
      console.log("cannel not stream call search again with channels")
    }
    else{
      v = search(c, a[i]);
      display(v.logo, 0, v.url, v.display_name, "");
      console.log(v);
      console.log("channel worked")
    }
  }
});