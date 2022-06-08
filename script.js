function find_element_func(){
    var elem = document.getElementById("find_element");
    if (elem.style.background === "blue"){
        elem.style.background = "greenyellow";
        elem.style.color = "black"
    }else {
        elem.style.background = "blue";
        elem.style.color = "white"
    }
}

function query_select_func(){
    var elem = document.querySelectorAll("p.query_element");
    if (elem[0].style.background === "blue"){
        elem[0].style.background = "greenyellow";
        elem[0].style.color = "black"
    }else {
        elem[0].style.background = "blue";
        elem[0].style.color = "white"
    }
}

function add_image(){
    var elem = document.getElementById("image");
    elem.hidden = false;
}

function shrink_image(){
    var elem = document.getElementById("image");
        elem.style.height = "300px";
        elem.style.width = "525px";
}

function enlarge_image(){
    var elem = document.getElementById("image");
        elem.style.height = "500px";
        elem.style.width = "875px";
}

function delete_image(){
    var elem = document.getElementById("image");
    elem.hidden = true;
}