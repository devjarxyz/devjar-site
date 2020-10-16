import Head from 'next/head';
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
 

  const [head] = useState( <Head>
    <title>Devjar</title>
    <link rel="icon" href="/favicon.ico" />
    <link href="/static/assets/css/main.css" rel="stylesheet" />
    <script dangerouslySetInnerHTML={{ __html: `<!-- Google Tag Manager -->
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-WWKRLL9');</script>
        <!-- End Google Tag Manager -->`}} />

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
  const wrapperRef = useRef<HTMLDivElement>(null);

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
      {head && head}
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
          <li><a onMouseOver={() => setHover('hover')} onMouseLeave={() => setHover('')} onClick={() => activateModal('intro')} >Intro</a></li>
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
