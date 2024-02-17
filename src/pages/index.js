import React, {useState} from "react";
import "./styles/style.css"
import SideBar from "./sidebar";
import MainBar from "./mainbar";
const HomePage = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleOpen= (e) => {
        e.preventDefault();
        e.stopPropagation();
        const note = document.querySelector('.Sidebar');
        note.style.display = 'block';
        setIsOpen(true)
    }

    const handleClose = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const note = document.querySelector('.Sidebar');
        note.style.display = 'none';
        setIsOpen(false)
    }

    return (
        <>
           <div className="Home">
               <div className="menu-section"> 
                   <div className="menu-box">

                       {isOpen ?
                           (<button className="btn btn-md btn-menu" onClick={handleClose}><i className="fas fa-times"></i></button>)
                           :
                           (<button className="btn btn-md btn-menu" onClick={handleOpen}> <i className="fas fa-bars"></i></button>)
                       }

                   </div>
               </div>
               <div className="Bg">
                   <div className="row">
                       <div className="col-xl-3 side-home">
                           <SideBar />
                       </div>
                       <div className="col-xl-9 main-home">
                           <MainBar />
                       </div>
                   </div>
               </div>

           </div>
        </>
    )
}
export default HomePage