//consts
const colors = ["green", "red", "rgba(133,122,200)","#f15025"]
const btn = document.querySelector('#btn')
const color = document.querySelector('.color')

function getRandom(){
    return Math.floor(Math.random()*colors.length)

}
btn.addEventListener('click', function(){
    const randomNumber = getRandom()
    //it selects the background color of the body
    document.body.style.backgroundColor = colors[randomNumber]
    
    color.textContent= colors[randomNumber]
})



