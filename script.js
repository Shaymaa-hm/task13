document.addEventListener("DOMContentLoaded", function () {
  const productsContainer = document.getElementById('products-container');

  fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => {
      if (Array.isArray(data.products)) {
        console.log(data.products);
        let productCounter = 0;
        let currentRow;

        data.products.forEach(product => {
          if (productCounter % 4 === 0) {
            currentRow = document.createElement('div');
            currentRow.className = 'row';
            productsContainer.appendChild(currentRow);
          }

          const productElement = document.createElement('div');
          productElement.className = 'product';

          const productImg = document.createElement('img');
          productImg.className = 'image';
          productImg.src = product.thumbnail;

          const productName = document.createElement('h2');
          productName.textContent = product.title;

          const productDescription = document.createElement('p');
          productDescription.textContent = `${product.description}`;

          const prices = document.createElement('div');
          prices.className = 'prices';

          const productPriceNew = document.createElement('p');
          productPriceNew.className = 'new-price';
          productPriceNew.textContent = `$${product.price-(product.price * product.discountPercentage / 100)}`;

          const productPrice = document.createElement('p');
          productPrice.className = 'old-price';
          productPrice.textContent = `$${product.price}`;

          prices.appendChild(productPriceNew);
          prices.appendChild(productPrice);


          const buttonIcon = document.createElement('img');
          buttonIcon.src = 'Bag_alt.png'; 
          buttonIcon.className = 'button-icon1';
          
          

          const productButton = document.createElement('button');
          productButton.className = 'blue-button';
          productButton.textContent += "Add to cart";
          productButton.appendChild(buttonIcon);
          
          

          

          const buttonIcon2 = document.createElement('img');
          buttonIcon2.src = 'Vector 15.png';
          buttonIcon2.className = 'button-icon';

          const productButton2 = document.createElement('button');
          productButton2.className = 'white-button';
          productButton2.textContent = "";
          productButton2.appendChild(buttonIcon2);


          productElement.appendChild(productImg);
          productElement.appendChild(productName);
          productElement.appendChild(productDescription);
          productElement.appendChild(prices);
          productElement.appendChild(productButton);
          productElement.appendChild(productButton2);


          currentRow.appendChild(productElement);

          productCounter++;
        });
      } else {
        console.error('Data.products is not an array:', data.products);
      }
    })
    .catch(error => console.error(error));
});
