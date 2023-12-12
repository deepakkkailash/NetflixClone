let search = document.getElementById("search");
let searchinp = document.getElementById("Hidden_Search")
let notifsdisplay = document.getElementById("notif_List");
let notifs = document.getElementById("notifs");
notifs.addEventListener("click",()=>{
    notifs.style.display = "none"
    notifsdisplay.style.display = "block";
})

document.addEventListener("click",(event)=>{
    if(event.target===notifs)
        null
    else
        notifsdisplay.style.display = "none";
        notifs.style.display = "block";
})
search.addEventListener("click",()=>{
    search.style.display = "none";
    searchinp.style.display = "block";

})



document.addEventListener("click",(event)=>{
    if(event.target===search){
       pass
    }
    else{
        searchinp.style.display = "none";
        search.style.display = "block";
    }
})


