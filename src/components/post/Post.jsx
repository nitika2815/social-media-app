import "./post.scss"
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { Link } from "react-router-dom";
import { useState } from "react";
import Comments from "../comments/Comments";

const Post = ({post}) => {
  const [liked,setLiked]=useState(false);
  const [commentOpen,setCommentOpen]=useState(false)

  const handleLike=()=>{
    setLiked(!liked);
  }
  console.log(post);
  return (
    <div className="post">
      <div className="container">
      <div className="user">
        <div className="userInfo">
          <img src={post.img} alt="" />
          <div className="details">
            <Link to={`/profile/${post.userId}`} style={{textDecoration:"none", color:"inherit"}} >
              <span className="name">{post.name}</span>
            </Link>
            <span className="date">1 mint ago</span>
          </div>
        </div>
        <MoreHorizOutlinedIcon/>
      </div>
      <div className="content">
        <p>{post.desc}</p>
        <img src={post.img} alt="" />
      </div>
      <div className="info">
       <div className="item">
          {liked?<FavoriteOutlinedIcon onClick={handleLike} />:<FavoriteBorderOutlinedIcon onClick={handleLike}/>}
          12 Likes
       </div>
       <div className="item"onClick={()=>setCommentOpen(!commentOpen)}>
          <TextsmsOutlinedIcon/>
          12 Comments
       </div>
        <div className="item">
           <ShareOutlinedIcon/>
            Share
        </div>
      </div>
      {commentOpen && <Comments/>}
    </div>
  </div>
  )
}

export default Post