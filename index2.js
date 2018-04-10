function myFunction(){
    var f = document.createElement("IFRAME");
    var i = document.getElementsByTagName("input")[0].value;
    f.setAttribute("src","http://"+i+"/");
    document.body.appendChild(f);
}
