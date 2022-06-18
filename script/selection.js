
function Selection_algo(){

    document.getElementById("time_worst").innerText=("O(N^2)");
    document.getElementById("time_average").innerText=("O(N^2)");
    document.getElementById("time_best").innerText=("O(N^2)");

    document.getElementById("space_worst").innerText=("O(N^2)");

    c_delay=0;

    var minindex,temp;

    for(var i=0; i<arrsize-1; i++){
        
        box_update(divs[i],div_size[i],"red");

        minindex=i;

        for(var j=i+1; j<arrsize; j++){
            
            box_update(divs[j],div_size[j],"black");

            if(div_size[j] < div_size[minindex]){

                if(minindex!=i){
                    box_update(divs[minindex],div_size[minindex],"blue");
                }
                minindex=j;
                box_update(divs[minindex],div_size[minindex],"red");
            }

            else{
                box_update(divs[j],div_size[j],"blue");
            }

        }
        if(minindex!=i){
         temp=div_size[i];
         div_size[i] = div_size[minindex];
         div_size[minindex] = temp;

         box_update(divs[minindex],div_size[minindex],"red");
         box_update(divs[i],div_size[i],"red");
         box_update(divs[minindex],div_size[minindex],"blue");
        }
        box_update(divs[i],div_size[i],"green");
    }
    box_update(divs[i],div_size[i],"green");

    butt_enabled();
}