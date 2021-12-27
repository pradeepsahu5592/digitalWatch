function clock(){
    let getHR = document.getElementById("hr");
    let getMT = document.getElementById("mt");
    let getSC = document.getElementById("sd")
    let am = document.getElementById("ampm");
    let xtr=document.getElementById("extra");
    const t=new Date();

    let h=t.getHours();
    let m=t.getMinutes();
    let s=t.getSeconds();
    var am1='AM';
    var tt=09;

    if(h>12)
    {
        h=h-12;
        am1="PM";
        
    }
    if(h==12){
            am1="PM";
        }
    if(h==0){
        h="12";
    }       

    
    h=(h<10)?'0'+h:h;
    m=(m<10)?'0'+m:m;
    s=(s<10)?'0'+s:s;

    getHR.innerHTML=h;
    getMT.innerHTML=m;
    getSC.innerHTML=s;
    am.innerHTML=am1;
    xtr.innerHTML=tt;

}
var interval=setInterval(clock);