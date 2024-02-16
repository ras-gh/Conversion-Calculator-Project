//Conversion calculator by R.A.Smith

//Define some functions
function tokm() {
    //convert the contents of the first text box from
    //miles to Km and output the result to the second text box
    input1=document.getElementById("input1");
    input2=document.getElementById("input2");
    var val=parseFloat(input1.value);
    
    var final =String((val*8/5).toFixed(2));
    if (isNaN(final)) {
        final="";
    }
    input2.value=final;
}
function toM() {
    //convert the contents of the first text box from
    //Km to miles and output the result to the second text box
    input1=document.getElementById("input1");
    input2=document.getElementById("input2");
    var val=parseFloat(input1.value);
    val=val.toFixed(2);
    var final =String((val*5/8).toFixed(2));
   
    input2.value=final;
}

function tocm() {
    //convert the contents of the first text box from
    //inches to cm and output the result to the second text box
    input1=document.getElementById("input1");
    val=parseFloat(input1.value);
    if (isNaN(val)) {
        val="";
    }    
    document.getElementById("input2").value =String((val*2.55).toFixed(2));
}

function toIn() {
    //convert the contents of the first text box from
    //cm to inches and output the result to the second text box
    input1=document.getElementById("input1");
    val=parseFloat(input1.value);
   
 
    document.getElementById("input2").value =String((val/2.55).toFixed(2));
}

//convert from pints to litres
function tolitre() {
    input1=document.getElementById("input1");
    val=parseFloat(input1.value);
    val=val.toFixed(2);
    if (isNaN(val)) {
        val="";
    }  

    document.getElementById("input2").value =String((val*0.568261).toFixed(2));
}
function topints() {
    input1=document.getElementById("input1");
    val=parseFloat(input1.value);
    
   
    document.getElementById("input2").value =String((val/0.568261).toFixed(2));
}
function tofahr() {
    input1=document.getElementById("input1");
    val=parseFloat(input1.value);
    val=val-32;
    val=val*5/9;
    if (isNaN(val)) {
        val="";
    }
   console.log(val);
    document.getElementById("input2").value =String((val).toFixed(2));
}
function tocels() {
    input1=document.getElementById("input1");
    val=parseFloat(input1.value);
    if (isNaN(val)) {
        val="";
    }
   
    document.getElementById("input2").value =String(((val*9/5)+32).toFixed(2));
}


function tokilo() {
    //convert the contents of the first text box from
    //pounds to kilos and output the result to the second text box
    input1=document.getElementById("input1");
    val=parseFloat(input1.value);
    
    
    document.getElementById("input2").value =String((val/2.20462442).toFixed(2));
}
function topound() {
    //convert the contents of the first text box from
    //inches to cm and output the result to the second text box
    input1=document.getElementById("input1");
    val=parseFloat(input1.value);
    
    document.getElementById("input2").value =String((val*2.20462442).toFixed(2));
}




function reset() {
    
    document.getElementById("input1").value="";
    document.getElementById("input2").value="";
    document.getElementById("selection").value="";
    
    
}
// *****************************************************
// Check for a change to the dropdown selection
window.addEventListener("click", () => {
            selectElement = 
                  document.querySelector('#selection');
            output = selectElement.value;
        if (output=="mkm") {
            //set the correct labels for each box
            document.getElementById("from").innerText="MILES";
            document.getElementById("to").innerText="KM";

        }

        if (output=="kmm") {
            //set the correct labels for each box
            document.getElementById("from").innerText="KM";
            document.getElementById("to").innerText="MILES";

        }


        if (output=="icm") {
//set the correct labels for each box
            document.getElementById("from").innerText="INCHES";
            document.getElementById("to").innerText="CM";
        
        }

        if (output=="cmi") {
            //set the correct labels for each box
                        document.getElementById("from").innerText="CM";
                        document.getElementById("to").innerText="INCHES";
                    
                    }
            



        if (output=="pli") {
            //set the correct labels for each box
                        document.getElementById("from").innerText="PINTS";
                        document.getElementById("to").innerText="LITRES";
                    
                    }

       
        if (output=="lip") {
        //set the correct labels for each box
                        document.getElementById("from").innerText=("LITRES");
                        document.getElementById("to").innerText=("PINTS");
                                                
          }                   
        if (output=="cfa") {
                            //set the correct labels for each box
                            document.getElementById("from").innerText=("°C");
                            document.getElementById("to").innerText=("°F");
                                                    
         }     
         if (output=="fac") {
            //set the correct labels for each box
            document.getElementById("from").innerText=("°F");
            document.getElementById("to").innerText=("°C");
                                    
        }  
        if (output=="pki") {
            //set the correct labels for each box
            document.getElementById("from").innerText=("POUNDS");
            document.getElementById("to").innerText=("KILOS");
                                    
        }  
        if (output=="kpo") {
            //set the correct labels for each box
            document.getElementById("from").innerText=("KILOS");
            document.getElementById("to").innerText=("POUNDS");
                                    
        }  



        })

//****************************************************** 
//Handle the event when the user clicks in the box and
//there is no value inside it
        // window.addEventListener("click", () => {
        //     selectElement = 
        //           document.querySelector('#input1');
        //     str=input1.value;
            
        //     if(str =="") {
        //         document.getElementById("input2").value="";
        //     }
        // })
//*****************************************************
        //Check if key pressed is a valid input
        //If a non-numeric character is pressed then
        //do not allow the character to appear in the input 
        //box, unless the user pressed the backspace
        //to delete contents of the box
function calculate() {
            selectElement = 
            document.querySelector('#selection');
      output = selectElement.value;
  if (output=="mkm") { 
    //call the function to convert miles to Km          
        tokm();
        }
          
    if (output=="icm") { 
    //call the function to convert inches to cm
                tocm();
            }

    if (output=="pli") { 
    //call the function to convert pints to litres
                    tolitre();
            }
     if (output=="kmm") { 
                //call the function to convert miles to Km          
                    toM();
                    }
                      
    if (output=="cmi") { 
                //call the function to convert inches to cm
                            toIn();
                        }
            
    if (output=="lip") { 
                //call the function to convert pints to litres
                                topints();
                        }


    if (output=="fac") { 
            //call the function to convert fahrenheit to celsius
                tofahr();
     }                    

     if (output=="cfa") { 
        //call the function to convert celsius to fahrenheit 
            tocels();
 }                  
 if (output=="pki") { 
    //call the function to convert celsius to fahrenheit 
        tokilo();
}          

if (output=="kpo") { 
    //call the function to convert celsius to fahrenheit 
        topound();
}                  

 }
        



   