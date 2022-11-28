// XMLHTTPREQUEST object
// fetch()
// axios

// CRUD (create-read-update-delete)

// GET
// POST
// PUT
// DELETE


let btn = document.querySelector('#btn');

// btn.onclick = function() {
//    let xhr = new XMLHttpRequest();
   
//    xhr.onreadystatechange = function() {
//     if(this.status === 200 && this.readyState === 4) {
//         console.log(this.responseText);
//        document.getElementById('p133').innerHTML = this.responseText
//     }
//     else if(this.status === 404) {
//        document.getElementById('text').innerHTML = 'Oops 404 Not Found...!'
//     }
//    }

//    xhr.open('GET','/product.html');
//    xhr.send();
// }


function Search() {
    let value = document.querySelector('#form input').value;
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
        let count = 0
       let html = '';
       data.forEach(pr => {
        let exist_prod = pr.title.toLowerCase().includes(value.toLowerCase());
        if(exist_prod) {
            count++;
            let pr_title = pr.title.length > 40 ? pr.title.slice(0,40) + "..." : pr.title;
            let pr_name = pr.description.length > 40 ? pr.description.slice(0,40) + "..." : pr.description
        html += `
        <div class="col-lg-4 box">
            <div id=${pr.price > 100 ? "exp" : 'cheap'} class="card">
                <img src=${pr.image} class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${pr_title}</h5>
                <p class="card-text">${pr_name}</p>
                <p class="card-text">Rating: ${pr.rating.rate > 3 ? 'High' : 'Low'}</p>
                <span class="card-text bg-success text-white ">${pr.price} AZN</span>
                </div>
            </div>
        </div> 
        `
        }
       })
       if(count === 0) {
        document.querySelector('.page_404').classList.remove('d-none')
       }
       else{
        document.querySelector('.page_404').classList.add('d-none')
       }

       document.getElementById('list').innerHTML = html
    })
    .catch(error => console.log(error))
}

function GetUsers() {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
       let html = '';
       data.forEach(pr => {
        let pr_title = pr.title.length > 20 ? pr.title.slice(0,20) + "..." : pr.title;
        let pr_name = pr.description.length > 40 ? pr.description.slice(0,40) + "..." : pr.description
        html += `
        <div class="col-lg-4 box">
            <div id=${pr.price > 100 ? "exp" : 'cheap'} class="card">
                <img src=${pr.image} class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${pr_title}</h5>
                <p class="card-text">${pr_name}</p>
                <p class="card-text">Rating: ${pr.rating.rate > 3 ? 'High' : 'Low'}</p>
                <span class="card-text bg-success text-white ">${pr.price} AZN</span>
                </div>
            </div>
        </div> 
        `
       })
       document.getElementById('list').innerHTML = html
    })
    .catch(error => console.log(error))
}

GetUsers();