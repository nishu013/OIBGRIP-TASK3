let celsius=document.getElementById("cel");
let fahrenheit=document.getElementById("fah");

function cel(){
    let output = (parseFloat(celsius.value)*9/5)+32;
    fahrenheit.value=parseFloat(output.toFixed(2));
}

function far()
{
    let output=(parseFloat(fahrenheit.value)-32)*5/9;
    celsius.value=parseFloat(output.toFixed(2));
    console.log(output);
}