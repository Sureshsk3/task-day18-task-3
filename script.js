const electronics = async () => {
  try {
    const items = await fetch(`https://dummyjson.com/products`);
    const data = await items.json();
    const main = document.querySelector(".body-con");
    console.log(data.products);

    data.products.map((e) => {
      main.innerHTML += `
            <div class="card m-3" style="width: 18rem;">
                <img src=${e.images[0]} class="card-img-top" alt="..." height="250px">
                <div class="card-body">
                    <h5 class="card-title">${e.title}</h5>
                    <p class="card-text">${e.description}</p>
                </div>
                
                <div class="card-body " >
                    <button class="btn btn-success order-btn">Order</button>
                </div>
            </div>
            `;
    });
  } catch (error) {
    throw error;
  }
};
electronics();
