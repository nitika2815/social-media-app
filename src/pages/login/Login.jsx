import { Link } from "react-router-dom"
import "./login.scss"

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World</h1>
          <p>If your app is still blank or blinking, double check,All API routes in the backend return valid JSON and CORS is allowed.No API calls are being blocked in the browser console.You restarted the Vite dev server after .env changes.Let me know if you'd like help debugging those too.
          </p>
          <span>Don't you have an account</span>
          <Link to="/register" >
          <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login