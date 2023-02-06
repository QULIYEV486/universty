document.getElementById('Dogs-btn').addEventListener('click', () => {
    document.getElementById("Dogs").innerHTML = ``
    // inputData = document.getElementById('Dogs-input').value
    fetch(`https://dog.ceo/api/breeds/image/random`)
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data);
                document.getElementById("Dogs").innerHTML += 
                `
                <img src=${data.message}>
                `
        })

})