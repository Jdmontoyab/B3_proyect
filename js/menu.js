let productos = document.getElementById('productos');

for (let i = 1; i < 10; i++) {
    let template = `<li>
                    <img class="img-prod" src="../assets/page-1-admin1.png" alt="">
                    <div id="info-prod">
                        <h2 class="name-prod">Producto ${i}</h2>
                        <h3 class="price">$ 530</h3>
                    </div>
                    <div class="add"></div> 
                </li>`;
    productos.insertAdjacentHTML('beforeend', template);
}