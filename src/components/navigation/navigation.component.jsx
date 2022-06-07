import { Outlet } from 'react-router-dom';
import { useContext } from 'react';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import { UserContext } from '../../context/user.context';
import { CartContext } from '../../context/cart.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import {NavigationContainer, LogoContainer, NavLinks, NavLink, LogoNameContainer, LogoName} from './navigation.styles.jsx';

const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)


  
  return (
    <>
      <NavigationContainer>
        <LogoNameContainer>
          <LogoContainer to='/'>
           <CrwnLogo />
          </LogoContainer>
          <LogoName to='/'>Sports Kingdom</LogoName>
        </LogoNameContainer>
        <NavLinks>
          <NavLink to='/'>
            HOME
          </NavLink>
          <NavLink to='/shop'>
            SHOP
          </NavLink>
          {
              currentUser ? (
                  <NavLink as="span" onClick={signOutUser}>SIGN OUT</NavLink>
              ) : (
                  <NavLink to='/sign-in'>
                    SIGN IN
                  </NavLink>
              )
          }
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;