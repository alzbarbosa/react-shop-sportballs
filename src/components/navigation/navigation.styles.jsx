import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavigationContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

    @media screen and (max-width: 800px) {
    height: 80px;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }
`

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 10px 25px;

`

export const NavLinks = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width: 800px) {
    width: 100%;
    justify-content: center;
    margin-left: 15px;
  }
`

export const NavLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
  
`
export const LogoNameContainer = styled.div`
    display: flex;

      @media screen and (max-width: 800px) {
        margin: 0 auto;
  }
    
  }
`
export const LogoName = styled.h2`
    padding-left: .25em;
    color: silver;
`

