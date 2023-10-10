//for double button yaha 2 button banaaye hai 

// var istatus = document.querySelector("h5")

// var addFriend = document.querySelector("#add")

// var removeFriend = document.querySelector("#remove")

// addFriend.addEventListener("click",function(){
//     istatus.innerHTML = "Friends"
//     istatus.style.color = "green"
// })
// removeFriend.addEventListener("click",function(){
//     istatus.innerHTML = "stranger"
//     istatus.style.color ="red"
// })
// for single button yaha ek hi button add friend aur remove friend banaane ke liye use kiye hai

var istatus = document.querySelector("h5")
var btn = document.querySelector("#add")
var check = 0

btn.addEventListener("click",function(){
    if(check == 0){
        istatus.innerHTML = "Friends"
        istatus.style.color = "green"
        btn.innerHTML = "Remove friend"
        check = 1
    }
    else{
        istatus.innerHTML = "stranger"
        istatus.style.color = "red"
        btn.innerHTML = "Add friend"
        check = 0
    }
})