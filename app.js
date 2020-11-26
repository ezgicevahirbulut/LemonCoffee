var allProducts = new Object();
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

function getProducts() {
    app.get('/posts', function(req, res) {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:80');
        let res = fetch(`https://fakestoreapi.com/products`)
        .then(res => res.json())
        .then(json => allProducts = json)
        .then(renderProducts(allProducts))
    })
        
    return allProducts;
}

function renderProducts($acunabi) {
    let testproducts =  $acunabi;
    let html = ' ';
    for (const products in testproducts) {
        let htmlSegment = `
        
            <div class="carousel-cell">
                <img src="${products.image}">
                <h2>${products.title}</h2>
                <h4> ${products.price}</h4>
                <p> ${products.categories}</p>
            </div>
        
        `;
        console.log(products);
        html += htmlSegment;
    }
    
    document.querySelector('#testcarousel').innerHTML = html;
    return 0;
}

getProducts();