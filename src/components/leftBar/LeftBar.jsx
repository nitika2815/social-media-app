import "./leftBar.scss";
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Marketplace from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Galary from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import Fund from "../../assets/13.png";

const LeftBar = () => {
  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src="https://images.unsplash.com/photo-1628563694622-5a76957fd09c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
              alt=" profile"
            />
            <span>John</span>
          </div>
          <div className="items">
            <img src={Friends} alt="" />
            <span>Friends</span>
          </div>
          <div className="items">
            <img src={Groups} alt="" />
            <span>Group</span>
          </div>
          <div className="items">
            <img src={Marketplace} alt="" />
            <span>Marketplace</span>
          </div>
          <div className="items">
            <img src={Watch} alt="" />
            <span>Watch</span>
          </div>
          <div className="items">
            <img src={Memories} alt="" />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="items">
            <img src={Events} alt="" />
            <span>Events</span>
          </div>
          <div className="items">
            <img src={Gaming} alt="" />
            <span>Gaming</span>
          </div>
          <div className="items">
            <img src={Galary} alt="" />
            <span>Galary</span>
          </div>
          <div className="items">
            <img src={Videos} alt="" />
            <span>Videos</span>
          </div>
          <div className="items">
            <img src={Messages} alt="" />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="items">
            <img src={Fund} alt="" />
            <span>Fund</span>
          </div>
          <div className="items">
            <img src={Tutorials} alt="" />
            <span>Tutorials</span>
          </div>
          <div className="items">
            <img src={Courses} alt="" />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
