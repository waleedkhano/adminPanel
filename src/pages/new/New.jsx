import "./new.scss"
import Sidebar from "../../component/sidebar/Sidebar"
import Navbar from "../../component/navbar/Navbar";
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useState } from "react";


const New = ({ inputs, title }) => {

  const [file, setFile] =useState("");

  return (
    <>
      <div className="new">
        <Sidebar />
        <div className="newContainer">
          <Navbar />
          <div className="top">
            <h1>{title}</h1>
          </div>
          <div className="bottom">
            <div className="left">
              <img src={
                file? URL.createObjectURL(file) 
              : "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"
            }
              alt="" />
            </div>
            <div className="right">
              <form>

              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

                {inputs.map((input) => (

                  <div className="formInput"  key={input.id}>
                    <label >{input.label}</label>
                    <input type={input.type} placeholder={input.placeholder} />
                  </div>

                ))}

                <button>Add</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default New;
