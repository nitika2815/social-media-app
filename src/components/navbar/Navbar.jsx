import './navbar.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';
import { AuthContext } from '../../context/AuthContext';


const Navbar = () => {

  const {toggle,darkMode}=useContext(DarkModeContext)
  const {currentUser}=useContext(AuthContext)
console.log(currentUser);
  return (
    <div className='navbar'>
      <div className='left'>
        <Link to="#" style={{textDecoration:"none"}}>
        <span>lamasocial</span>
        </Link>
        <HomeOutlinedIcon/>
        {!darkMode ? <DarkModeOutlinedIcon onClick={toggle} style={{cursor:"pointer"}}/>:< WbSunnyOutlinedIcon onClick={toggle} style={{cursor:"pointer"}}/>}
        <GridViewOutlinedIcon/>
        <div className="search">
          <SearchOutlinedIcon/>
          <input type="text" placeholder='Serach......' />
        </div>
      </div>
      <div className='right'>
        <PersonOutlinedIcon/>
        <MailOutlinedIcon/>
        <NotificationsOutlinedIcon/>
        <div className="user">
          <img src={currentUser.profilePic} alt='image' />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar