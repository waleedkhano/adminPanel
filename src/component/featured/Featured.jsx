import "./feature.scss";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


const Featured = () => {
    return(
        <>
        <div className="feature">
        <div className="top">
            <h1 className="title">Total Revenue</h1>
            <MoreVertIcon fontSize="small"/>
        </div>
        <div className="bottom">
            <div className="featureChart">
                <CircularProgressbar value={70} text="70%" strokeWidth={5} />
            </div>
            <p className="title">total sales made today</p>
            <p className="amount">$325</p>
            <p className="desc">
                Previous transactions processing. last payments may not be included.
            </p>
            <div className="summary">
                <div className="item">
                    <div className="itemTitle">Target</div>
                    <div className="itemResult negative">
                        <KeyboardArrowDownIcon fontSize="small" />
                        <div className="resultAmount">$11.4k</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Week</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpIcon fontSize="small" />
                        <div className="resultAmount">$38.4k</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Month</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpIcon fontSize="small" />
                        <div className="resultAmount">$112.4k</div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Featured;