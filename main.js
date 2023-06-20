const timer = document.getElementById('timer');
const start=document.getElementById("start");
let startTime;

//startボタンを押した時にイベントが起動
start.addEventListener('click', () => {
 startTime = Date.now();
 console.log(startTime);
 console.log(new Date(startTime))
 countUp();
});

//coutUp()関数の中身
function countUp() {
 const d=new Date(Date.now()-startTime);
 const m=String(d.getMinutes()).padStart(2,"0");
 const s=String(d.getSeconds()).padStart(2,"0");
 const ms =String(d.getMilliseconds()).padStart(3,"0");
 timer.textContent = `${m}:${s},${ms}`;

 setTimeout(() => {
   countUp();
 }, 10);
}

