const Review = () => {
  return (
    <section id="review">
      <div className="review-container">
        <div className="classes-info">
          <h1>REVIEW CLIENT</h1>
          <hr />
          <p>
            Lorem ipsum is not simply random text. It has roots in a piece of
            classical at Hampden-Sydney College.
          </p>
        </div>
        <div className="testimonials">
          <div className="testimonial">
            <div className="pic-and-profile">
              <div className="pic">
                <img src="./img/client1.jpg" alt="Client 1" />
              </div>
              <div className="testimonial-profile">
                <h3 className="title">Diet Expert</h3>
                <span className="post">CFO</span>
              </div>
            </div>
            <div className="description">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                impedit et. Eius culpa dolorem, omnis perferendis eaque id nemo?
                Quaerat totam voluptatibus enim numquam molestias sint aliquam,
                necessitatibus ratione perspiciatis?
              </p>
            </div>
          </div>
          <div className="testimonial">
            <div className="pic-and-profile">
              <div className="pic">
                <img src="./img/client2.jpg" alt="Client 2" />
              </div>
              <div className="testimonial-profile">
                <h3 className="title">Cardio Trainer</h3>
                <span className="post">CEO</span>
              </div>
            </div>
            <div className="description">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                impedit et. Eius culpa dolorem, omnis perferendis eaque id nemo?
                Quaerat totam voluptatibus enim numquam molestias sint aliquam,
                necessitatibus ratione perspiciatis?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
