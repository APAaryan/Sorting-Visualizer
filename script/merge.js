
function Merge_algo(){

    document.getElementById("time_worst").innerText=("O(N log N)");
    document.getElementById("time_average").innerText=("O(N log N)");
    document.getElementById("time_best").innerText=("O(N log N)");

    document.getElementById("space_worst").innerText=("O(N)");

    c_delay=0;

    mergesort(0,arrsize-1);
    butt_enabled();
}

function mergesort(low,high){

    if(low<high){
        var mid=Math.floor((low+high)/2);
        box_update(divs[mid],div_size[mid],"red");
        mergesort(low,mid);
        mergesort(mid+1,high);
        merge(low,mid,high);
    }
}

function merge(start,mid,end){

    var p=start,q=mid+1;
    var arr=[],k=0;
    
    for(var i=start; i<=end; i++){

        if(p>mid)
        {
            arr[k++]=div_size[q++];
            box_update(divs[q-1],div_size[q-1],"black");
        }
        else if(q>end)
        {
            arr[k++]=div_size[p++];
            box_update(divs[p-1],div_size[p-1],"black");
        }
        else if(div_size[p]<div_size[q])
        {
            arr[k++]=div_size[p++];
            box_update(divs[p-1],div_size[p-1],"black");
        }
        else
        {
            arr[k++]=div_size[q++];
            box_update(divs[q-1],div_size[q-1],"black");
        }
    }

    for(var t=0; t<k; t++){
        div_size[start++]=arr[t];
        box_update(divs[start-1],div_size[start-1],"green");
    }
}