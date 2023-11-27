import { Menu} from '@mantine/core';
import icon from "../../images/icon-menu.svg"

function BurgerMenu() {
    return (
      <Menu>
        <Menu.Target>
          <a><img src={icon} alt="" /></a>
        </Menu.Target>
  
        <Menu.Dropdown>
          <Menu.Item onClick={() => console.log('Search clicked')}>Search</Menu.Item>
          <Menu.Item onClick={() => console.log('Search clicked')}>Search</Menu.Item>
          <Menu.Item onClick={() => console.log('Search clicked')}>Search</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    );
}

export default BurgerMenu;