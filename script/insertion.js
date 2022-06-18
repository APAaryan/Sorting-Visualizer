

function Insertion_algo(){

    document.getElementById("time_worst").innerText="O(N^2)";
    document.getElementById("time_average").innerText="O(N^2)";
    document.getElementById("time_best").innerText="O(N)";
    
    document.getElementById("space_worst").innerText="O(1)";

    c_delay=0;

    var key,j;

    for(var i=0; i<arrsize; i++){
        
        box_update(divs[i],div_size[i],"red");

        key=div_size[i];
        j=i-1;
        
        while(j>=0 && div_size[j]>key){

            box_update(divs[j],div_size[j],"black");
            box_update(divs[j+1],div_size[j+1],"black");

            div_size[j+1]=div_size[j];

            box_update(divs[j],div_size[j],"red");
            box_update(divs[j+1],div_size[j+1],"red");

            box_update(divs[j],div_size[j],"blue");
            if(j==i-1){
                box_update(divs[j+1],div_size[j+1],"yellow");
            }
            else{
                box_update(divs[j+1],div_size[j+1],"blue");
            }
            j--;
        }

        div_size[j+1]=key;

        for(var temp=0; temp<i; temp++){
            box_update(divs[temp],div_size[temp],"green");
        }
    }
    
    box_update(divs[i-1],div_size[i-1],"green");
    butt_enabled();
}