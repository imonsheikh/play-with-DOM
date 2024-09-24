// console.log("testing");

let sum = 0
function clickMe(){
    // console.log('clicked');
    const h2 = document.getElementById('count')
    // console.log(h2);
    sum += 1
    h2.innerText = sum
    
    
}

document.getElementById('minus-btn').addEventListener('click', function(){
    sum--
document.getElementById('count').innerText = sum

})