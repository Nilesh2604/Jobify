import Wrapper from "../assets/wrappers/SmallSidebar.js"
import Logo from "./logo.js"
import {FaTimes} from 'react-icons/fa'
import { useAppContext } from "../context/appContext.js"
import Navlinks from "./Navlinks.js"

const SmallSidebar = () => {
    const{showSidebar,toggleSidebar}=useAppContext()
  return (
   <Wrapper>
    <div className={showSidebar?"sidebar-container show-sidebar":"show-sidebar"}>
        <div className="content">
            <button 
            className="close-btn" 
            type="button" 
            onClick={toggleSidebar}>
            <FaTimes/>
            </button>
            <header>
                <Logo/>
            </header>
            <Navlinks toggleSidebar={toggleSidebar}/>
        </div>
    </div>
   </Wrapper>
   
  )
}

export default SmallSidebar
