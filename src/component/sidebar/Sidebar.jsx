import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import PsychologyRoundedIcon from '@mui/icons-material/PsychologyRounded';import GroupIcon from '@mui/icons-material/Group';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import DvrIcon from '@mui/icons-material/Dvr';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import AndroidRoundedIcon from '@mui/icons-material/AndroidRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";


const Sidebar = () => {

  const { dispatch } = useContext(DarkModeContext)

    return (
      <>
      <div className="sidebar">
        <div className="top">
          <Link to="/" style={{ textDecoration:"none" }}>
          <div className="logo">BookingApp</div>
          </Link>
        </div>
        <hr />
        <div className="center">
          <ul>
            <p className="title">MAIN</p>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
            <p className="title">LIST</p>
            <Link to="/users" style={{ textDecoration:"none" }}>
            <li>
              <GroupIcon className="icon" />
              <span>Users</span>
            </li>
            </Link>
            <Link to="/products" style={{ textDecoration:"none" }}>
            <li>
              <ProductionQuantityLimitsIcon className="icon" />
              <span>Products</span>
            </li>
            </Link>
            <li>
              <DvrIcon className="icon" />
              <span>Orders</span>
            </li>
            <li>
              <DeliveryDiningIcon className="icon" />
              <span>Delivery</span>
            </li>
            <p className="title">USEFUL</p>

            <li>
              <QueryStatsIcon className="icon" />
              <span>Stats</span>
            </li>
            <li>
              <CircleNotificationsIcon className="icon" />
              <span>Notification</span>
            </li>
            <p className="title">SERVICE</p>

            <li>
              <AndroidRoundedIcon className="icon" />
              <span>System Health</span>
            </li>
            <li>
              <PsychologyRoundedIcon className="icon" />
              <span>Logs</span>
            </li>
            <p className="title">USER</p>

            <li>
              <AccountCircleRoundedIcon className="icon" />
              <span>Profile</span>
            </li>
            
            <li>
              <LogoutIcon className="icon" />
              <span>Logout</span>
            </li>
            
          </ul>
        </div>
        <div className="bottom">
          <div className="colorOption" onClick={()=>dispatch({type:"LIGHT"})}></div>
          <div className="colorOption" onClick={()=>dispatch({type:"DARK"})}></div>
        </div>
      </div>
      </>
    );
  }
  
  export default Sidebar;
  