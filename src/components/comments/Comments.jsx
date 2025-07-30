import { useContext } from "react";
import "./comments.scss";
import {AuthContext} from '../../context/AuthContext'
const Comments = () => {
  const {currentUser}=useContext(AuthContext)
  const comments = [
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet consectetur ufwuhfw dwjd hwjh hwj dbhj kqjqkjw wjdnjdew ",
      name: "John Doe",
      userId: 1,
      profilePicture:
        "https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet consectetur ufwuhfw dwjd hwjh hwj dbhj kqjqkjw wjdnjdew ",
      name: "Jane Doe",
      userId: 2,
      profilePicture:
        "https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    },
  ];
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="Write your comment...." />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
