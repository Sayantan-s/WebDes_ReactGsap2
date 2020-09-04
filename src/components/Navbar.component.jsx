import React from 'react'
import styled from 'styled-components'
import { navitems } from '../api/api'
const Navbar = (props,ref) => {
    return (
       <Nav ref={ref}>
          <h1>Minimalism</h1>
          <div>
              {
                  navitems.map(item => {
                      return <div key={item}>{item}</div>
                  })
              }
          </div>
       </Nav>
    )
}

export default  React.forwardRef(Navbar)
const Nav = styled.nav`
display : flex;
justify-content:space-between;
margin : 2rem 3rem;
font-family: var(--header); 
visibility: hidden;
h1{
    margin : 0;
    padding: 0;
    font-size: 1.5rem;
    font-weight: 600;
    }
div{
       display : flex;
       grid-gap : 2rem;
       list-style: none;
       margin : 0;
       align-items:center;
       font-size: 1.5rem;
       font-weight: 600;
       cursor: pointer;
   } 
`