const text=document.getElementById('to-do-text');
const todoul=document.getElementById('todo-ul');



function addtext(){
    if(text.value.trim() ===""){
        alert("Enter Some Text")
    }
    else{
        console.log(text.value.trim());
        
        const litag= document.createElement('li');
        const spantext= document.createElement('span');
        const textnode= document.createTextNode(text.value.trim());
        spantext.appendChild(textnode);
        spantext.addEventListener('click',(e)=>{
            
            e.target.classList.toggle('done');
        })
        const spanclose= document.createElement('span');
        spanclose.classList.add("close");
        
        spanclose.innerHTML="Remove";
        spanclose.addEventListener('click',(e) => {
            console.log(e.target.parentElement);
            const li = e.target.parentElement;
            li.parentElement.removeChild(li)


        })
        litag.appendChild(spantext);
        litag.appendChild(spanclose);
        todoul.appendChild(litag);
        text.value=''
    }
}