

function Quick_algo(){

    document.getElementById("time_worst").innerText=("O(N^2)");
    document.getElementById("time_average").innerText=("O(N logN)");
    document.getElementById("time_best").innerText=("O(N logN)");

    document.getElementById("space_worst").innerText=("O(N logN)");

    c_delay=0;

    quicksort(0,arrsize-1);

    butt_enabled();

}

function quicksort( low,high){
    if(low < high){
         var pivot=partition(low,high);
         quicksort(low,pivot-1);
         quicksort(pivot+1,high);
    }
}

function partition(start,end){

   var i=start+1;
   var pivot=div_size[start];
   box_update(divs[start],div_size[start],"red");

   for(var j=start+1; j<=end; j++){

    if(div_size[j] < pivot){

        box_update(divs[j],div_size[j],"red");

        box_update(divs[i],div_size[i],"black");
        box_update(divs[j],div_size[j],"black");

        var temp=div_size[i];
        div_size[i]=div_size[j];
        div_size[j]=temp;

        box_update(divs[i],div_size[i],"black");
        box_update(divs[j],div_size[j],"black");

        box_update(divs[i],div_size[i],"blue");
        box_update(divs[j],div_size[j],"blue");

        i=i+1;
    }
   }

   box_update(divs[start],div_size[start],"black");
   box_update(divs[i-1],div_size[i-1],"black");
   
   var temp=div_size[start];
   div_size[start]=div_size[i-1];
   div_size[i-1]=temp;

   box_update(divs[start],div_size[start],"black");
   box_update(divs[i-1],div_size[i-1],"black");

   for(var t=start; t<=i; t++){
    box_update(divs[t],div_size[t],"green");
   }

   return i-1;
}