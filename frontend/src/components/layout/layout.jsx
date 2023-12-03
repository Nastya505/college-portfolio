import { Menu} from '@mantine/core';
import {Link, Outlet} from "react-router-dom";
import Footer from '../footer/footer';

import icon from "../../images/icon-menu.svg"

function Layout() {
    return (
      <div className='container' style={{minHeight: "100vh"}}>

        <Menu withArrow className="icon-menu"  position="left-start">
          <Menu.Target>
            <a><img src={icon} alt="" /></a>
          </Menu.Target>
    
          <Menu.Dropdown>
            <Link to="/" className='text-decor'><Menu.Item>главная</Menu.Item></Link>
            <Link to="/students" className='text-decor'><Menu.Item>студенты</Menu.Item></Link>
          </Menu.Dropdown>
        </Menu>
     

      <Outlet />

     
        <Footer/>
      </div>
    );
}

export default Layout;