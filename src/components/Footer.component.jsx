import React from 'react'
import styled from 'styled-components'

const Footer = (props,ref) => {
    return (
       <Foo>
          <h2 className="footer" ref={ref}>
              <div className="footer-content" >
                  <div className="footer-content--inner">
                    Minimalism
                  </div>
              </div>
          </h2>
       </Foo>
    )
}

export default React.forwardRef(Footer)

const Foo = styled.footer`
text-transform: uppercase;
justify-self:center;
overflow: none;
margin:0;
.footer{
    margin: 0;
    padding: 0;
    font-size: 17vmax;
    font-family: var(--header);
    &-content{
        overflow: hidden;
        margin: 0;
        z-index: -1;
        position: relative;
    } 
}
`