let tr=''
const addData = (i)=>{
  tr+= i;
  document.getElementById("no").value=tr;
}

function getAns(){
  let data = document.getElementById("no").value;
  let ans = eval(data);
  document.getElementById("no").value = ans;
  tr='';
}
function clrData(){
  document.getElementById("no").value = 0;
  tr='';
}

function remData(){
  let deta = document.getElementById("no").value;
   newDeta = deta.toString().slice(0,-1);
   tr=newDeta;
  document.getElementById("no").value = tr;

}remData()

