
let box = document.querySelector('.box')
let btn = document.querySelector('#btn')
let box2 = document.querySelector('.box2')
let rates = document.querySelectorAll('.rate')

let x=null;


btn.onclick = function(){
    if(x != null){
    box.classList.add('hide')
    box2.classList.remove('hide')
    box2.innerHTML += `
    <p class="text1">You selected ${x} out of 5</p>
    <h2 class="thank-you">Thank you!</h2>
    <p class="text2">
    We appreciate you taking the time to give a rating. If you ever need more support, 
    don’t hesitate to get in touch! 
    </p>
    `
}}

rates.forEach(rate => {
    rate.addEventListener('click',function(){
        rates.forEach(item =>{
            item.classList.remove('color')
        })

        this.classList.add('color')
        x=rate.innerHTML
    })
})

