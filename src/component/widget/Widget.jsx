import "./widget.scss";
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import DvrIcon from '@mui/icons-material/Dvr';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';



const Widget = ({type}) => {
    let data;
    //temporary 
    const amount = 23590;
    const diff = 89;
    switch (type) {
        case "user":
            data={
                title:"USERS",
                isMoney: false,
                link: "See all user",
                icon:<PersonOutlinedIcon className="icon"/>,
            }
            break;
        case "order":
            data={
                title:"ORDERS",
                isMoney: false,
                link: "View all orders",
                icon:<DvrIcon className="icon"/>,
            }
            break;
        case "earning":
            data={
                title:"EARNINGS",
                isMoney: true,
                link: "view net earnings",
                icon:<MonetizationOnIcon className="icon"/>,
            }
            break;
        case "balance":
            data={
                title:"BALANCE",
                isMoney: true,
                link: "See details",
                icon:<AccountBalanceIcon className="icon"/>,
            }
            break;
    
        default:
            break;
    }



    return (
        <>
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "$"}{amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpOutlinedIcon />
                    {diff}%
                </div>
                {data.icon}
            </div>
        </div>
        </>
    )
}

export default Widget;