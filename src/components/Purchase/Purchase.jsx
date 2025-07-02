const Purchase = () => {
  return (
    <section id="purchase">
      <div className="purchase-container">
        <div className="classes-info">
          <h1>PURCHASE FROM US</h1>
          <hr />
          <p>
            Lorem ipsum is not simply random text. It has roots in a piece of
            classical at Hampden-Sydney College.
          </p>
        </div>
        <div className="products">
          <div className="product-card">
            <img src="./img/purchase1.jpg" alt="Kettlebell 5kg" />
            <div className="product-info">
              <h3>Kettlebell / 5kg</h3>
              <p className="price">
                <span className="old-price">$89.99</span>
                <span className="new-price">/ $59.99</span>
              </p>
              <button className="add-to-cart">
                <i className="fas fa-shopping-cart"></i> Add To Cart
              </button>
            </div>
          </div>
          <div className="product-card">
            <img src="./img/purchase2.jpg" alt="Treadmill" />
            <div className="product-info">
              <h3>Treadmill</h3>
              <p className="price">
                <span className="old-price">$89.99</span>
                <span className="new-price">/ $59.99</span>
              </p>
              <button className="add-to-cart">
                <i className="fas fa-shopping-cart"></i> Add To Cart
              </button>
            </div>
          </div>
          <div className="product-card">
            <img src="./img/purchase3.jpg" alt="Adjustable Dumbbell" />
            <div className="product-info">
              <h3>Adjustable Dumbbell</h3>
              <p className="price">
                <span className="old-price">$89.99</span>
                <span className="new-price">/ $59.99</span>
              </p>
              <button className="add-to-cart">
                <i className="fas fa-shopping-cart"></i> Add To Cart
              </button>
            </div>
          </div>
          <div className="product-card">
            <img src="./img/purchase4.jpg" alt="Kettlebell 3kg" />
            <div className="product-info">
              <h3>Kettlebell / 3kg</h3>
              <p className="price">
                <span className="old-price">$89.99</span>
                <span className="new-price">/ $59.99</span>
              </p>
              <button className="add-to-cart">
                <i className="fas fa-shopping-cart"></i> Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Purchase;
