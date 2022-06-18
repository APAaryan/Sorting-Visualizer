//variables
var in_arr_speed=document.getElementById('arr_speed');
var in_arr_size=document.getElementById('arr_size');
var in_gen_arr=document.getElementById('gen_arr');
var arrsize=in_arr_size.value;

//
var butt_algos=document.querySelectorAll('.nav_right button');
var div_size=[];
var divs=[];
var margin_size;
var container=document.getElementById("info2");
container.style="flex-direction:row";

//Array Generation and Updation
in_arr_size.addEventListener('input',update_arr_size);
in_gen_arr.addEventListener('click',generate);

function generate(){
    container.innerHTML="";
    for(var i=0 ; i<arrsize;i++){
        div_size[i] = Math.floor( Math.random() * 0.8 * ( in_arr_size.max - in_arr_size.min ) ) + 10;
        divs[i]=document.createElement("div");
        container.appendChild(divs[i]);
        margin_size=0.1;
        divs[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/arrsize-(2*margin_size)) + "%; height:" + (div_size[i]) + "%;";
    }
}

function update_arr_size(){
    arrsize=in_arr_size.value;
    generate();
}

window.onload=update_arr_size();

//Run Algorithm

for(var i=0; i<butt_algos.length;i++){
    butt_algos[i].addEventListener('click',runalgo);
}

function runalgo(){
    disable_buttons();

    this.classList.add("butt_selected");
    switch(this.innerHTML){
        case "Bubble" : Bubble_algo();
                        break;
        case "Insertion" : Insertion_algo();
                        break;  
        case "Selection" : Selection_algo();
                        break;
        case "Merge" : Merge_algo();
                        break;
        case "Quick" : Quick_algo();
                        break;          
    }
}

function disable_buttons(){
    for( var i=0; i<butt_algos.length; i++){
        butt_algos[i].classList=[];
        butt_algos[i].classList.add("butt_locked");

        butt_algos[i].disabled=true;
        in_arr_size.disabled=true;
        in_arr_speed.disabled=true;
        in_gen_arr.disabled=true;
    }

}  