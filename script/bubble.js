

function Bubble_algo(){
  document.getElementById("time_worst").innerText="O(N^2)";
  document.getElementById("time_average").innerText="O(N^2)";
  document.getElementById("time_best").innerText="O(N)";

  document.getElementById("space_worst").innerText="O(1)";

  c_delay=0;

  var temp,issorted=0;
  for(var i=0;i<arrsize-1;i++)
  {

    for(var j=0;j<arrsize-i-1;j++)
    {
        box_update(divs[j],div_size[j],"red");

       if( div_size[j] > div_size[j+1]){

        box_update(divs[j],div_size[j],"black");
        box_update(divs[j+1],div_size[j+1],"black");

        temp=div_size[j];
        div_size[j]=div_size[j+1];
        div_size[j+1]=temp;

        box_update(divs[j],div_size[j],"red");
        box_update(divs[j+1],div_size[j+1],"red");
       }
       box_update(divs[j],div_size[j],"blue");
    }
    box_update(divs[j],div_size[j],"green");
    
  }
  box_update(divs[0],div_size[0],"green");
  butt_enabled();
}