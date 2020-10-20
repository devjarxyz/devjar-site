import { useState, useRef, useEffect } from 'react';
import _, { isEmpty } from 'lodash';
import Generic from '../components/Sections/Generic';
import { introParas, workParas, showcaseParas, pixelarityData } from '../services/texts/static';
import Contact from '../components/Sections/Contact';
import Showcase from './../components/Sections/Showcase/index';

function Home () {
  const initState = {intro: false, work: false, showcase: false, contact: false };
  const [modal, setModal] = useState({...initState});
  const [hover, setHover] = useState("");

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
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    
    const isProduction = process.env.NODE_ENV === 'production';
    if(isProduction)
      (window as any).dataLayer.push({'event': 'gtm.load', 'mainlocation': 'loaded'})

   }, [])

  useEffect(() => {
   
      if(modal.showcase || modal.contact || modal.intro || modal.work) {
        if(!isEmpty(modalRef.current) && !isEmpty(mainRef.current) && !isEmpty(mainRef.current)){
          
          setTimeout(() => {
            modalRef.current!.style.display = 'none';
            mainRef.current!.style.display = 'flex';
            footerRef.current!.style.display = 'none';
            
        }, 325);
        }
       
         
      } else {
          if(!isEmpty(modalRef.current) && !isEmpty(mainRef.current) && !isEmpty(mainRef.current)){
            setTimeout(() => {
              modalRef.current!.style.display = 'flex';
              footerRef.current!.style.display = 'block';
              mainRef.current!.style.display = 'none';
          }, 325);
          }
        
      }
      

      return () => {
        // document.body.classList.remove('is-article-visible');
        //      modalRef.current!.style.display = 'flex';
        //       footerRef.current!.style.display = 'block';
        //       mainRef.current!.style.display = 'none';
        };
  }, [modal.showcase, modal.contact, modal.intro, modal.work]);
  
 
  return(
    <>
    <div id="wrapper" ref={wrapperRef}>
      
    <header id="header" ref={modalRef} className={hover} >
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
          <li><a onMouseOver={() => setHover('hover')} onMouseLeave={() => setHover('')} onClick={() => { 
            const isProduction = process.env.NODE_ENV === 'production';
            if(isProduction) {
              console.log('tagging prod');
              (window as any).dataLayer.push({ 'event': 'subpage_change'});
            }

              activateModal('intro'); 
            }} >Intro</a></li>
          <li><a onMouseOver={() => setHover('hover')} onMouseLeave={() => setHover('')} onClick={() => activateModal('work')}>Work</a></li>
          <li><a onMouseOver={() => setHover('hover')} onMouseLeave={() => setHover('')} onClick={() => activateModal('showcase')}>Showcase</a></li>
          <li><a onMouseOver={() => setHover('hover')} onMouseLeave={() => setHover('')} onClick={() => activateModal('contact')}>Contact</a></li>
          
        </ul>
      </nav>
    </header>
    <div id="main" ref={mainRef} >
      {modal.intro && <Generic name="intro" isActive={modal.intro} header="Intro" paragraphs={_.map(introParas, p => p['en'])} img={"static/images/vladbw1-flat.jpg"} close={close}/>}
      {modal.work &&  <Generic name="work" isActive={modal.work} header="Work" paragraphs={_.map(workParas, p => p['en'])} close={close}/>}
      {modal.showcase && <Showcase wrapper={wrapperRef} name="showcase" isActive={modal.showcase} showcaseItems={_.map(pixelarityData, data => {return { url: data.img, name: data['en'], thumb: data.thumb}})} header="ShowCase" paragraphs={_.map(showcaseParas, p => p['en'])} close={close}/>}
      {modal.contact && <Contact name="contact" isActive={modal.contact} header="Contact" close={close} />}
    </div>

    <footer id="footer" ref={footerRef}>
      <p className="copyright">&copy; devjar.xyz.</p>
    </footer>

  
  </div>
  <div id="bg"></div>
  </>
  );
}



export default Home
