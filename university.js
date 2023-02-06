document.getElementById('university-btn').addEventListener('click', () => {
    document.getElementById("university").innerHTML = ``
    inputData = document.getElementById('university-input').value
    fetch(`http://universities.hipolabs.com/search?country=${inputData}`)
        .then((resp) => resp.json())
        .then((data) => {
            for (let university of data) {
                console.log(university);
                document.getElementById("university").innerHTML += 
                `
                <div class="col-md-4">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${university.country}</h5>
                            <p class="card-text">${university.name}</p>
                        </div>
                    </div>
                </div>
                `
            }
        })

})                                                                            