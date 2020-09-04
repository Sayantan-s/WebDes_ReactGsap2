import React from 'react'
import styled from 'styled-components'
import { IMAGELINKS } from '../api/api'
const Main = (props,ref) => {
    return (
        <Middle ref={ref}>
           <div className="img-container" ref={ref}>
               <div className="img-container--hider" displayimg = "../assets/img/12.png" />
                <img 
                src={IMAGELINKS.IMG2}
                alt="potrait2"
                />
                <img 
                src={IMAGELINKS.IMG1} 
                alt="Potrait" 
                />
           </div>
        </Middle>
    )
}
export default React.forwardRef(Main)

const Middle = styled.main`
    justify-self: center;
    align-self: center;
    margin: 0 auto;
    visibility: hidden;
    opacity: 0;
    .img-container{
        width: 30rem;
        height: 600px;
        position: relative;
        overflow: hidden;
        top: 2rem;
        cursor: pointer;
        &:hover img:last-child{
            opacity: 1
        }
        &--hider{
            background: #fff;
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            z-index: 100;
        }
        img{
            position: absolute;
            width: 100%;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            &:last-child{
                opacity: 0;
                transition: 0.3s ease-out all;
            }
        }
    }

`
