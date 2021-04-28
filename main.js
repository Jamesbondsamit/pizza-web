menu_list_array=["Chicken tandori pizza","Veg supreme pizza","Paneer tikka pizza","Deluxe veggie pizza"]
function getmenu(){
    var htmldata;
    htmldata="<o1 class='menulist'>"
    menu_list_array.sort();
    for(var i=0;i<menu_list_array.length;i++){
        htmldata=htmldata+<li>+menu_list_array[i]+</li>
    }
    htmldata=htmldata+"</o1>"
    document.getElementById("display_menu").innerHTML=htmldata;
}
function additem[]{
    var htmldata;
    var item=document.getElementById("add_item").nodeValue;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata="<section class="cards">"
    for(var i=0;i<menu_list_array.length;i++){
        htmldata=htmldata+'<div class="cards"' + "<img src="image/pizzaImg.png" " + menu_list_array[i] + '</div>'
    }
htmldata=htmldata"</section>"
document.getElementById("diplay_addmenu").innerHTML=htmldata
}
}
 