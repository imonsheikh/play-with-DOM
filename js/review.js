// console.log("review");
document.getElementById('submit-btn').addEventListener('click', function(){
    const inputValue = document.getElementById('text-area').value
    console.log(inputValue);
    
    const container = document.getElementById('review')
    const p = document.createElement('p')
    p.innerText = inputValue

    container.appendChild(p)

    // inputValue.value = ''(wrong)
    document.getElementById('text-area').value = ''
    
})
