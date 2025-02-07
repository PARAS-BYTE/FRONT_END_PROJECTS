let left = document.getElementsByClassName("fo")[0];
let right = document.getElementsByClassName("fo")[1];
let swiper = document.getElementsByClassName("swiper")[0];
let movies= document.getElementsByClassName("movies")[0];
left.style.backgroundColor ="orange"

let i=0;
let k;
function call(){
    k =movies.clientWidth + 20;
   let set = setInterval(() => {
        if(i<=100){
            left.style.backgroundColor ="orange"
            
        }
        swiper.style.transform =`translateX(-${i}px)`
        left.style.backgroundColor ="white"
        i +=k;
        
        if(i>(k*5)){
            right.style.backgroundColor ="orange"
        }else{
            right.style.backgroundColor ="white"
        }
        console.log(i)
        if(i>k*5){
            i=0;
        }
        if(i>=10 &&i<=k){
        left.style.backgroundColor  ="orange"
        }
    }, 4000);
}
call()
right.addEventListener("click",()=>{
    // console.log("i am here")
    k =movies.clientWidth + 20;
    if(i< k*5 || i==0){
        i +=k;
        right.style.backgroundColor ="white"
        swiper.style.transform =`translateX(-${i}px)`
        left.style.backgroundColor ="white"
        
    }
    if(i>=k*5){
        right.style.backgroundColor ="orange"

    }
})
let j=0;
left.addEventListener("click",()=>{
    if(i>0){
        i -= k;
        swiper.style.transform = `translateX(-${i}px)`
        left.style.backgroundColor ="white"
        right.style.backgroundColor="white"
    }
    if(i <= 0){
        left.style.backgroundColor ="orange"
    }
})



