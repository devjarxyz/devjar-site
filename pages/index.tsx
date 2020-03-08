import Head from 'next/head';
// import styled from 'styled-components';

import { useState, useRef, useEffect } from 'react';
import _, { isEmpty } from 'lodash';
import Generic from '../components/Sections/Generic';
import { introParas, workParas, aboutParas } from '../services/texts/static';
import Contact from '../components/Sections/Contact';


{/* <script src="/static/assets/js/jquery.min.js"></script>
			<script src="/static/assets/js/skel.min.js"></script>
			<script src="/static/assets/js/util.js"></script>
			<script src="/static/assets/js/main.js"></script> */}

function Home () {
  const initState = {intro: false, work: false, about: false, contact: false };
  const [modal, setModal] = useState({...initState});
 

  const [head] = useState( <Head>
    <title>Devjar</title>
    <link rel="icon" href="/favicon.ico" />
    <link href="/static/assets/css/main.css" rel="stylesheet" />

  </Head>);

  const close = () => {
    document.body.classList.remove('is-article-visible');
    setModal(initState);
  };
  const activateModal = (name: string) => {
    setModal({...initState, [name]: true});
    document.body.classList.add('is-article-visible');
  }

  const modalRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
      
      if(modal.about || modal.contact || modal.intro || modal.work) {
        if(!isEmpty(modalRef)  && !isEmpty(mainRef)){
          
          setTimeout(() => {
            modalRef!.current!.style.display = 'none';
            mainRef!.current!.style.display = 'flex';
            footerRef!.current!.style.display = 'none';
            
        }, 325);
        }
       
         
      } else {
          if(!isEmpty(modalRef)  && !isEmpty(mainRef)){
            setTimeout(() => {
              modalRef!.current!.style.display = 'flex';
              footerRef!.current!.style.display = 'block';
              mainRef!.current!.style.display = 'none';
          }, 325);
          }
        
      }
       
    

      return () => {
         
        };
  }, [modal.about, modal.contact, modal.intro, modal.work]);

 
  return(
    <div id="wrapper">
      {head && head}
    <header id="header" ref={modalRef} >
      <div className="logo">
        <img src="/static/images/logoNoBg.png"/>
      </div>
      <div className="content">
        <div className="inner">
          <h1>Devjar.xyz</h1>
          <p>Web and App solutions <br />
          with ready built designs to chose from.</p>
        </div>
      </div>
      <nav>
        <ul>
          <li><a onClick={() => activateModal('intro')} >Intro</a></li>
          <li><a onClick={() => activateModal('work')}>Work</a></li>
          <li><a onClick={() => activateModal('about')}>About</a></li>
          <li><a onClick={() => activateModal('contact')}>Contact</a></li>
          
        </ul>
      </nav>
    </header>
    <div id="main" ref={mainRef} >
      <Generic name="intro" isActive={modal.intro} header="Intro" paragraphs={_.map(introParas, p => p['en'])} close={close}/>
      <Generic name="work" isActive={modal.work} header="Work" paragraphs={_.map(workParas, p => p['en'])} close={close}/>
      <Generic name="about" isActive={modal.about} header="Work" paragraphs={_.map(aboutParas, p => p['en'])} close={close}/>
      <Contact name="contact" isActive={modal.contact} header="Contact" close={close} />
    </div>

    <footer id="footer" ref={footerRef}>
      <p className="copyright">&copy; devjar.xyz.</p>
    </footer>

  
  </div>
  );
}



export default Home
