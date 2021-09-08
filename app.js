const row = document.querySelector(".row")
const em1 = document.querySelector(".em1")
const em2 = document.querySelector(".em2")

em1.onclick = () =>{

    // j'ajoute la classe active à em

    row.classList.toggle("active")
    
   
}
em2.onclick = () =>{

    // j'ajoute la classe active à em

    row.classList.toggle("active")
    
   
}

setInterval(() =>{

    let date  = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let secondes = date.getSeconds()
    
    secondes = secondes < 10 ? "0"+secondes : secondes
    minutes = minutes < 10 ? "0"+minutes : minutes



   document.querySelector(".heure").textContent = hours
   document.querySelector(".minute").textContent = minutes
   document.querySelector(".secondes").textContent = secondes




},1000)