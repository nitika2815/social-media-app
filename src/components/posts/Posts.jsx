import Post from '../post/Post'
import './posts.scss'

const Posts = () => {
  const posts=[
    {
      id:1,
      name:"Riya",
      userId:1,
      img:"https://images.unsplash.com/photo-1628563694622-5a76957fd09c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
      profilePic:"#",
      desc:"Handling events - onClick, onChange, onSubmit events and event handling pattern State management with useState - Managing component state, updating state, and state best practices"
    },
    {
      id:2,
      name:"Riya",
      userId:1,
      img:"https://images.unsplash.com/photo-1628563694622-5a76957fd09c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
      profilePic:"#",
      desc:"Handling events - onClick, onChange, onSubmit events and event handling pattern State management with useState - Managing component state, updating state, and state best practices"
    },
    {
      id:3,
      name:"Riya",
      userId:1,
      img:"https://images.unsplash.com/photo-1628563694622-5a76957fd09c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
      profilePic:"#",
      desc:"Handling events - onClick, onChange, onSubmit events and event handling pattern State management with useState - Managing component state, updating state, and state best practices"
    },
    {
      id:4,
      name:"Riya",
      userId:2,
      img:"https://images.unsplash.com/photo-1628563694622-5a76957fd09c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
      profilePic:"#",
      desc:"Handling events - onClick, onChange, onSubmit events and event handling pattern State management with useState - Managing component state, updating state, and state best practices"
    },
    {
      id:5,
      name:"Riya",
      userId:1,
      img:"https://images.unsplash.com/photo-1628563694622-5a76957fd09c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
      profilePic:"#",
      desc:"Handling events - onClick, onChange, onSubmit events and event handling pattern State management with useState - Managing component state, updating state, and state best practices"
    },
    {
      id:5,
      name:"Riya",
      userId:1,
      img:"https://images.unsplash.com/photo-1628563694622-5a76957fd09c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
      profilePic:"#",
      desc:"Handling events - onClick, onChange, onSubmit events and event handling pattern State management with useState - Managing component state, updating state, and state best practices"
    },
    {
      id:6,
      name:"Riya",
      userId:2,
      img:"https://images.unsplash.com/photo-1628563694622-5a76957fd09c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
      profilePic:"#",
      desc:"Handling events - onClick, onChange, onSubmit events and event handling pattern State management with useState - Managing component state, updating state, and state best practices"
    },
  ]
  return (
    <div className='posts'>
      {posts.map(post=>(
        <Post post={post} key={post.id}/>
      ))}
    </div>
  )
}

export default Posts