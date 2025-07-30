import "./profile.scss"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Posts from "../../components/posts/Posts"

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/31559069/pexels-photo-31559069.jpeg?_gl=1*t2v5oy*_ga*ODI1ODk5MzIwLjE3NDc4OTczNzc.*_ga_8JE65Q40S6*czE3NTM4NjQ3NDkkbzUkZzEkdDE3NTM4NjQ3NzMkajM2JGwwJGgw"
          alt="cover-pic"
          className="cover"
        />
        <img
          src="https://images.pexels.com/photos/16132020/pexels-photo-16132020.jpeg?_gl=1*1yidzc2*_ga*ODI1ODk5MzIwLjE3NDc4OTczNzc.*_ga_8JE65Q40S6*czE3NTM4NzA3MzkkbzYkZzEkdDE3NTM4NzA4MzckajU0JGwwJGgw"
          alt="profile-pic"
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="https://www.facebook.com/">
              <FacebookIcon />
            </a>
            <a href="https://www.instagram.com/">
              <InstagramIcon />
            </a>
            <a href="https://x.com/">
              <TwitterIcon />
            </a>
            <a href="https://in.linkedin.com/">
              <LinkedInIcon />
            </a>
            <a href="https://www.pinterest.com/">
              <PinterestIcon />
            </a>
          </div>
          <div className="center">
            <img src="" alt="" />
            <span>Jane Doe</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>USA</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>Language</span>
              </div>
            </div>
            <button>follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
        <Posts/>
      </div>
    </div>
  );
};

export default Profile