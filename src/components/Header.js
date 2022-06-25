import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />      
      <NavMenu>
        <a>
          <img src="/images/home-icon.svg"/>
          <span>home</span>
        </a>
        <a>
          <img src="/images/search-icon.svg"/>
          <span>search</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg"/>
          <span>Watchlist</span>
        </a>
        <a>
          <img src="/images/original-icon.svg"/>
          <span>originals</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg"/>
          <span>movies</span>
        </a>
        <a>
          <img src="/images/series-icon.svg"/>
          <span>series</span>
        </a>
        </NavMenu>
        <UserImg src="/images/account.jpg"/>
    </Nav>
  )
}

const Nav = styled.nav `
  height: 70px;
  background-color: #090b13;
  display: flex;
  // justify-content: space-between;
  align-items: center;
  padding: 0 36px;

`

const Logo = styled.img`
  width: 80px;

`

const NavMenu = styled.div `
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    
    img {
      height: 20px;
    }
    
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      text-transform: uppercase;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        right: 0;
        left: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }      

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }

`
const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%; 
  cursor: pointer;

`


export default Header