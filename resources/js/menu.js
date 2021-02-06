let hold = document.getElementById('menu');
let block = document.getElementById('block');
let start = true;
let right = 100;
var handle1;
var handle2;
hold.style.float = 'right';
hold.addEventListener('click',menu);
function menu(){ 
    if(start){
        clearInterval(handle2);
        start = false;
        hold.style.transition = '.5s';
        hold.style.transform = 'rotate(-90deg)';
        handle1 = setInterval(forward,1);

    }else{
        clearInterval(handle1);
        start = true;
        hold.style.transition = '.5s';
        hold.style.transform = 'rotate(0deg)';
        handle2 = setInterval(reverse,1);
    }
}
function forward(){
    block.style.right = right.toString()+"vw";
    if(right <= 0){ 
        right = 0 ;
        clearInterval(handle1);
    }else{
        right--;
    }
    console.log(right);
}

function reverse(){
    block.style.right = right.toString()+"vw";
    if(right >= 100){ 
        right = 100 ;
        clearInterval(handle2);
    }else{
        console.log(right);
        right++;
    }
}