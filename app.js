document.querySelector('#getAll').addEventListener('click',getAll);

function getAll(){
    var url = "https://fakestoreapi.com/products";
    var xhr = new XMLHttpRequest();

    xhr.open('GET',url,true);
    xhr.onload = function(){

        if(this.status === 200){
            var posts = JSON.parse(this.responseText);

            var html="";

            posts.forEach(post => {

            html += `
          <div class="contanier">
            <div class="row">
            <div class="col-sm-3">
            <ul id="autoWdidth" class="cs-hidden">
                  
                <div class="card" style="width: 18rem;">
                <img src=${post.image} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${post.title}</h5>
                    <p class="card-text">${post.price}</p>
                    <p class="card-text">${post.category}</p>
                    <a href="#" class="btn btn-primary">ADD TO Cart!</a>
                </div>
               
            </ul>
        </div>
        </div>
        </div>
            `;

        });
            document.querySelector('#results').innerHTML = html;


        }

    }
    xhr.send();

}

