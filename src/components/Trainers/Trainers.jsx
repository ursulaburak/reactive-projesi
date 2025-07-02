const Trainers = () => {
  return (
    <section id="trainers">
      <div className="trainers-container">
        <div className="classes-info">
          <h1>OUR BEST TRAINERS</h1>
          <hr />
          <p>
            Lorem Ipsum is not simply random text. It has roots in a piece of
            classical at Hampden-Sydney Collage.
          </p>
        </div>
        <div className="trainer-container">
          <div className="our-trainer">
            <img src="./img/trainer1.jpg" alt="" />
            <div className="trainer-content">
              <h3 className="title">Amy Acker</h3>
              <span className="post">Fitness Trainer</span>
            </div>
          </div>

          <div className="our-trainer">
            <img src="./img/trainer2.jpg" alt="" />
            <div className="trainer-content">
              <h3 className="title">James Caviezel</h3>
              <span className="post">Diet Expert</span>
            </div>
          </div>

          <div className="our-trainer">
            <img src="./img/trainer3.jpg" alt="" />
            <div className="trainer-content">
              <h3 className="title">Sarah Shahi</h3>
              <span className="post">Lead Trainer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trainers;