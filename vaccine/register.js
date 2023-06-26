let id=document.getElementById("ID")
let nameE=document.getElementById("name")
let age=document.getElementById("age")
let vaccine=document.getElementById("vaccine")
let priority=document.getElementById("priority")
let register=document.getElementById("register")
let lsdata=JSON.parse(localStorage.getItem("registerf"))||[]



register.addEventListener("submit",(e)=>{
    e.preventDefault()
  
   
    let opt=Math.floor(Math.random()*(9999-1000)+1000)
    
    if(duplicate()){
          alert("This user id is already used") 
    }
    else{
        let obj={
            id:id.value,
            name:nameE.value,
            age:age.value,
            vaccine:vaccine.value,
            priority:priority.value,
            otp:opt
    
        }
        
        lsdata.push(obj)
        console.log(lsdata)
        localStorage.setItem("registerf",JSON.stringify(lsdata))
    }
  

})
function duplicate(){
    for(let i=0; i<lsdata.length; i++){
        if(id.value==lsdata[i].id || (age.value<18 &&age.value>40)){
            return true
        }
    }
}



