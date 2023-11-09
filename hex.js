const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F",]

function getHexColor(){
    let color = "#"
    for(let i = 0; i < 6; i++){
        const randomIndex = Math.floor(Math.random()*hex.length)
        color +=hex[randomIndex]

    }
    return color
}
console.log(getHexColor())
const btn = document.querySelector('#btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function(){
    let randomHex = getHexColor()
    document.body.style.backgroundColor = randomHex
    color.textContent = randomHex
})
