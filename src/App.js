import React from 'react';
import Main from './components/Main.component';
import Navbar from './components/Navbar.component'
import Footer from './components/Footer.component';
import styled from 'styled-components';
import { gsap } from 'gsap';

function App() {
  let navRef = React.useRef(null);
  let mainRef = React.useRef(null);
  let footerRef = React.useRef(null);
  React.useEffect(() => {
    const navChildren = Object.values(navRef.children[1].children);
    const Logo = navRef.firstElementChild;
    console.log(mainRef.firstElementChild.children[1].src)
    gsap.timeline().set(navRef,{
      delay: 0.2,
      css:{
        visibility: 'visible'
      }
    })
    .from(
      [Logo,...navChildren],{
        y: 10,
        opacity: 0,
        duration: 1.5,
        ease: 'power4',
        stagger:{
          amount: 1,
          from: 'start'
        }
      }
    )
    .to(mainRef,{
      css:{
        visibility: 'visible',
        opacity: 1
      }
    },"-=2")
    .to(mainRef.firstElementChild.children[0],{
      height: '0%',
      ease: 'power4.inOut',
      duration: 2
    },'-=2')
    .from(mainRef.firstElementChild.children[1],{
      scale: 2,
      ease: 'power2',
      duration: 2,
      y: 30
    },"-=1")
    .from(footerRef.children[0].children,{
      x: -100,
      y: '30rem',
      duration: 3,
      ease: 'power4.inOut'
    },'-=2.5')
  })
  return (
    <MiniApp>
        <Navbar ref={el => navRef = el} />
        <Main ref={el => mainRef = el}/>
        <Footer ref={el => footerRef =el}/>
    </MiniApp>
  );
}

export default App;

const MiniApp = styled.div`
display: grid;
grid-template-rows: max-content 1fr max-content;
min-height: 100vh;
width: 1440px;
align-items: center;
`
