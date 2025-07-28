import { Link } from "react-router-dom"
import "./register.scss"

const Register = () => {
  return (
    <div className="register">
      <div className="card">
      <div className="left">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <Link to="/login" >
            <button>Login</button>
            </Link>
          </form>
        </div>
        <div className="right">
          <h1>Hello World</h1>
          <p>If your app is still blank or blinking, double check,All API routes in the backend return valid JSON and CORS is allowed.No API calls are being blocked in the browser console.You restarted the Vite dev server after .env changes.Let me know if you'd like help debugging those too.
          </p>
          <span>Which should match the backend route.</span>
          <button>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Register