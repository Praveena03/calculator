function displyavalue(num){
    let inputbox=document.getElementById("rslt")
    inputbox.value+=num
}
//displyvalue=(num)=>rslt.value+=num
function evaluateExpression(){
    let cur_value=rslt.value;
    let result=eval(cur_value)
    rslt.value=result;
}

//evaluateExpression()=>reslt.value=eval(rslt.value)

function clearBox(){
    rslt.value="";
}

//clearBox()=>rslt.value;

//function removeElement(){
//    rslt.value=rslt.slice(0,-1)
//}
// >