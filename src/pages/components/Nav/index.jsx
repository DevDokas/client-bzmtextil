// React & Etc
import React, { useState } from 'react';

// Components
import { Container, Bars } from './styles';
import {
  SideMenu,
  CloseSideMenu,
  MenuList,
  MenuItem,
  LinkPage,
} from './styles/menuStyle';

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);

  function handleShowMenu() {
    if (showMenu === false) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  }

  return (
    <Container>
      {showMenu ? (
        <div>
          <SideMenu>
            <Bars size={30} onClick={handleShowMenu} color="black" />
            <MenuList>
              <MenuItem>
                <LinkPage to="/">Inicio</LinkPage>
              </MenuItem>
              <MenuItem>
                <LinkPage to="/about">Sobre</LinkPage>
              </MenuItem>
              <MenuItem>
                <LinkPage to="/store">Loja</LinkPage>
              </MenuItem>
              <MenuItem>
                <LinkPage to="/sac">SAC</LinkPage>
              </MenuItem>
            </MenuList>
          </SideMenu>
        </div>
      ) : (
        <div>
          <Bars size={30} onClick={handleShowMenu} color="black" />
          <CloseSideMenu>
            <Bars size={30} onClick={handleShowMenu} color="black" />
            <MenuList>
              <MenuItem>
                <LinkPage to="/">Inicio</LinkPage>
              </MenuItem>
              <MenuItem>
                <LinkPage to="/about">Sobre</LinkPage>
              </MenuItem>
              <MenuItem>
                <LinkPage to="/store">Loja</LinkPage>
              </MenuItem>
              <MenuItem>
                <LinkPage to="/sac">SAC</LinkPage>
              </MenuItem>
            </MenuList>
          </CloseSideMenu>
        </div>
        // <Bars size={30} onClick={handleShowMenu} className="open" />
      )}
    </Container>
  );
}
