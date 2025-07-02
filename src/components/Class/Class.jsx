import { useState } from "react";

const Class = () => {
  const [activeTab, setActiveTab] = useState("yoga");

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <section id="class">
      <div className="container">
        <div className="classes-info">
          <h1>OUR CLASSES</h1>
          <hr />
          <p>
            Lorem Ipsum is not simply random text. It has roots in a piece of
            classical at Hampden-Sydney Collage.
          </p>
          <div className="tabs">
            <button
              className={`tab ${activeTab === 'yoga' ? 'active' : ''}`}
              onClick={() => openTab('yoga')}
            >
              Yoga
            </button>
            <button
              className={`tab ${activeTab === 'group' ? 'active' : ''}`}
              onClick={() => openTab('group')}
            >
              Group
            </button>
            <button
              className={`tab ${activeTab === 'solo' ? 'active' : ''}`}
              onClick={() => openTab('solo')}
            >
              Solo
            </button>
            <button
              className={`tab ${activeTab === 'stretching' ? 'active' : ''}`}
              onClick={() => openTab('stretching')}
            >
              Stretching
            </button>
          </div>
        </div>

        <div id="yoga" className={`tab-content ${activeTab === 'yoga' ? 'active' : ''}`}>
          <div className="text-content">
            <h2>Why are your Yoga?</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              deleniti eligendi! Et excepturi consequuntur perferendis dolor
              tenetur sunt quam repellat dolorum accusamus veritatis blanditiis
              facere reprehenderit, temporibus vel amet voluptate!
            </p>
            <div className="content-time">
              <h2>When comes Yoga Your Time</h2>
              <p>Saturday-Sunday: 8:00am - 10:00am</p>
              <p>Monday-Tuesday: 10:00am - 12:00pm</p>
              <p>Wednesday-Friday: 3:00pm - 6:00pm</p>
            </div>
          </div>
          <img src="./img/yoga.jpg" alt="yoga" />
        </div>

        <div id="group" className={`tab-content ${activeTab === 'group' ? 'active' : ''}`}>
          <div className="text-content">
            <h2>Group Classes</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              deleniti eligendi! Et excepturi consequuntur perferendis dolor
              tenetur sunt quam repellat dolorum accusamus veritatis blanditiis
              facere reprehenderit, temporibus vel amet voluptate!
            </p>
            <div className="content-time">
              <h2>When comes Group Your Time.</h2>
              <p>Monday-Tuesday: 8:00am - 10:00pm</p>
              <p>Wednesday-Friday: 5:00pm - 7:00pm</p>
              <p>Saturday-Sunday: 2:00am - 4:00am</p>
            </div>
          </div>
          <img src="./img/group.webp" alt="group" />
        </div>

        <div id="solo" className={`tab-content ${activeTab === 'solo' ? 'active' : ''}`}>
          <div className="text-content">
            <h2>Solo Classes</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              deleniti eligendi! Et excepturi consequuntur perferendis dolor
              tenetur sunt quam repellat dolorum accusamus veritatis blanditiis
              facere reprehenderit, temporibus vel amet voluptate!
            </p>
            <div className="content-time">
              <h2>When comes Solo Your Time</h2>
              <p>Monday-Wednesday: 5:00am - 7:00pm</p>
              <p>Wednesday-Friday: 9:00pm - 10:00pm</p>
              <p>Saturday-Sunday: 10:00am - 12:00am</p>
            </div>
          </div>
          <img src="./img/solo.jpg" alt="solo" />
        </div>

        <div id="stretching" className={`tab-content ${activeTab === 'stretching' ? 'active' : ''}`}>
          <div className="text-content">
            <h2>Stretching</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              deleniti eligendi! Et excepturi consequuntur perferendis dolor
              tenetur sunt quam repellat dolorum accusamus veritatis blanditiis
              facere reprehenderit, temporibus vel amet voluptate!
            </p>
            <div className="content-time">
              <h2>When comes Stretching Your Time</h2>
              <p>Monday-Wednesday: 1:00am - 12:00pm</p>
              <p>Wednesday-Friday: 5:00pm - 10:00pm</p>
              <p>Saturday-Sunday: 5:00am - 12:00am</p>
            </div>
          </div>
          <img src="./img/stret.webp" alt="stret" />
        </div>
      </div>
    </section>
  );
};

export default Class;
