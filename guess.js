var c=0;
var n=Math.floor(Math.random()*100+1);
check=()=>
{
 var nm=parseInt(document.getElementById("num").value);
 if(nm>n)
 {
    document.getElementById("result").textContent=("Try It with a smaller Value");
    c++;
 }
 else if(nm<n)
 {
    document.getElementById("result").textContent=("Try it with a Larger value");
    c++;
 }
 else if(nm==n)
 {
    document.getElementById("result").textContent=("Congratulations!!! You guessed it correctly in just "+c+" attempts");
 }
}