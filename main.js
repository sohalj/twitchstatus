
 /* console.log("in display")
 var l = document.createElement("li");
 var p = document.createElement("p");
 p.setAttribute("style", "float:left");
 var i = document.createElement("img");
 setAttribute(i, { 'class': 'logo img-responsive', src: r.logo});
 p.appendChild(i);
 var p2 = document.createElement("p");
 p2.setAttribute("style", "float:right");
 var i2 = document.createElement("i");
 //setAttribute(i2, { 'class': 'fa fa-exclamation'});
 setAttribute(i2, { 'class': 'fa fa-check'});
 console.log(i2)
 p2.appendChild(i2);
 l.appendChild(p);
 l.appendChild(p2);
 var h = document.createElement("a");
 h.setAttribute("href", r.url);
 h.setAttribute("target", "_blank");
 var t = document.createTextNode(r.display_name);
 h.appendChild(t);
 l.appendChild(h);
 console.log("fasdf")
 console.log(h)
 var s = document.createElement("p");
 var status = document.createTextNode(r.status);
 s.appendChild(status)
 l.appendChild(s);

 console.log(l)

 var a = document.getElementById("list");
 a.appendChild(l);

*/


///display used with channel calls















function setAttribute(elem, attr){
  Object.keys(attr).forEach(key => elem.setAttribute(key, attr[key]));
}







function display(r){


  console.log("in display")
 var l = document.createElement("li");
 var p = document.createElement("p");
 p.setAttribute("style", "float:left");
 var i = document.createElement("img");
 setAttribute(i, { 'class': 'logo img-responsive', src: r.stream.channel.logo});
 p.appendChild(i);
 var p2 = document.createElement("p");
 p2.setAttribute("style", "float:right");
 var i2 = document.createElement("i");
 //setAttribute(i2, { 'class': 'fa fa-exclamation'});
 setAttribute(i2, { 'class': 'fa fa-check'});
 console.log(i2)
 p2.appendChild(i2);
 l.appendChild(p);
 l.appendChild(p2);
 var h = document.createElement("a");
 h.setAttribute("href", r.stream.channel.url);
 h.setAttribute("target", "_blank");
 var t = document.createTextNode(r.stream.channel.display_name);
 h.appendChild(t);
 l.appendChild(h);
 console.log("fasdf")
 console.log(h)
 var s = document.createElement("p");
 var status = document.createTextNode(r.stream.channel.status);
 s.appendChild(status)
 l.appendChild(s);

 console.log(l)

 var a = document.getElementById("list");
 a.appendChild(l);
}










function search(){
    //var a = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

  //for(i=0; i<a.length; i++){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function (){
      if(this.readyState == 4 && this.status == 200){
        var r = JSON.parse(this.responseText);
        console.log(r);
        
        //console.log(r.stream.channel.display_name);
        //console.log(r.stream.channel.url);
        display(r);
      }
    };  
    xhr.open("GET", "https://wind-bow.glitch.me/twitch-api/streams/" + "MedryBW" , true);
    xhr.send();
  //}  
}






$(document).ready(function(){
  search();

});