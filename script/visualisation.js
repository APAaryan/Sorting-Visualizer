
var speed=1000;
var delay_time=10000/(Math.floor(arrsize/10)*speed);
var c_delay=0;
in_arr_speed.addEventListener("input",vis_speed);

function vis_speed(){
    var temp_speed=in_arr_speed.value;
    switch(parseInt(temp_speed)){
        case 1: speed=100;
                break;
        case 2: speed=500;
                break;
        case 3: speed=1000;
                break;
        case 4: speed=5000;
                break;
        case 5: speed=10000;
                break;
    }
    delay_time=10000/(Math.floor(arrsize/10)*speed);
}

function box_update(cont,height,color){
     window.setTimeout(function(){
        cont.style=" margin:0% " + margin_size + "%; width:" + (100/arrsize-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
     },c_delay+=delay_time);
}

function butt_enabled(){
    window.setTimeout(function(){
        for(var i=0; i<butt_algos.length;i++){
            butt_algos[i].classList=[];
            butt_algos[i].classList.add("butt_unselected");

            butt_algos[i].disabled=false;
            in_arr_size.disabled=false;
            in_arr_speed.disabled=false;
            in_gen_arr.disabled=false;
        }
    },c_delay+=delay_time);
}