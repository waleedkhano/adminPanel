import "./navbar.scss"
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MarkChatUnreadOutlinedIcon from '@mui/icons-material/MarkChatUnreadOutlined';
import ClearAllOutlinedIcon from '@mui/icons-material/ClearAllOutlined';
import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined';
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Navbar = () => {

  const { dispatch } = useContext(DarkModeContext)


    return (
      <>
      <div className="navbar">
        <div className="navbarContainer">
          <div className="search">
            <input type="text" placeholder="Search" />
            <SearchRoundedIcon />
          </div>
          <div className="items">
            <div className="item">
              <LanguageRoundedIcon className="icon" />
              Englist
            </div>
            <div className="item">
              <DarkModeOutlinedIcon className="icon" onClick={()=>dispatch({type:"TOGGLE"})} />
              
            </div>
            <div className="item">
              <FullscreenOutlinedIcon className="icon" />
            </div>
            <div className="item">
              <NotificationsNoneOutlinedIcon className="icon" />
              <div className="counter">1</div>
            </div>
            <div className="item">
              <MarkChatUnreadOutlinedIcon className="icon" />
              <div className="counter">5</div>
            </div>
            <div className="item">
              <ClearAllOutlinedIcon className="icon" />
            </div>
            <div className="item">
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80" 
              alt="avator" 
              className="avator"
              />
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
  
  export default Navbar;
  