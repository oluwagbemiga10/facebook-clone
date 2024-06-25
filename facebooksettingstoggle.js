let settingsMenu = document.querySelector(".settings-down")
let darkBtn = document.getElementById("dark-button")

function settingsMenuToggle(){
    settingsMenu.classList.toggle("settings-maxheight")
}
function darkButtonOn(){
    darkBtn.classList.toggle("dark-button-on")
    document.body.classList.toggle("dark-theme")

    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme", "dark")
    }else{
        localStorage.setItem("theme", "light")
    }
}

if(localStorage.getItem("theme") == "light"){
    darkBtn.classList.remove("dark-button-on")
    document.body.classList.remove("dark-theme")
}else if(localStorage.getItem("theme") == "dark"){
    darkBtn.classList.add("dark-button-on")
    document.body.classList.add("dark-theme")
}else{
    localStorage.setItem("theme", "light")
}