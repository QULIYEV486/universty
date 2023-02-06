document.getElementById('jokes-btn').addEventListener('click', () => {
    document.getElementById("jokes").innerHTML = ``
    // inputData = document.getElementById('jokes-input').value
    fetch(`https://official-joke-api.appspot.com/random_joke`)
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data);
                document.getElementById("jokes").innerHTML += 
                `
                
                <div class="col-md-4">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${jokes.punchline}</h5>
                            <p class="card-text">${jokes.setup }</p>
                        </div>
                    </div>
                </div>
                
                `
        })

})