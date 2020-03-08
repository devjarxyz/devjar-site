import Head from 'next/head';
// import styled from 'styled-components';
import { useState } from 'react';



{/* <script src="/static/assets/js/jquery.min.js"></script>
			<script src="/static/assets/js/skel.min.js"></script>
			<script src="/static/assets/js/util.js"></script>
			<script src="/static/assets/js/main.js"></script> */}

function Home () {
  const initState = {intro: false, work: false, about: false, contact: false };
  const [modal, setModal] = useState({...initState});


  const close = () => {
    //meh
    setModal(initState);
  }

  const CloseButton = (): React.ReactElement => {
    return (
      <div className="close" onClick={close}>Close</div>
    );
  }
  return(
    <div id="wrapper">
    <Head>
      <title>Devjar</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="/static/assets/css/main.css" rel="stylesheet" />
      {/* <script src="/static/assets/js/jquery.min.js"></script>
    <script src="/static/assets/js/skel.min.js"></script>
    <script src="/static/assets/js/util.js"></script>
    <script src="/static/assets/js/main.js"></script> */}

    </Head>
    <header id="header" style={modal.about || modal.contact || modal.intro || modal.work ? {display: 'none'} : {display: 'flex'}}>
      <div className="logo">
        <img src="/static/images/logoNoBg.png"/>
      </div>
      <div className="content">
        <div className="inner">
          <h1>Devjar.xyz</h1>
          <p>Web and App solutions<br />
          with ready built designs to chose from.</p>
        </div>
      </div>
      <nav>
        <ul>
          <li><a onClick={() => setModal({...initState, intro: true})} >Intro</a></li>
          <li><a onClick={() => setModal({...initState, work: true})}>Work</a></li>
          <li><a onClick={() => setModal({...initState, about: true})}>About</a></li>
          <li><a onClick={() => setModal({...initState, contact: true})}>Contact</a></li>
          
        </ul>
      </nav>
    </header>
    <div id="main" style={!modal.about && !modal.contact && !modal.intro && !modal.work ? {display: 'none'} : {display: 'flex'}}>

      <article id="intro" className={modal.intro ? 'active' : ''} style={modal.intro ? {display: 'block'} : {display: 'none'}}>
        <h2 className="major">Intro</h2>
        <span className="image main"><img src="static/images/pic01.jpg" alt="" /></span>
        <p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. By the way, check out my <a href="#work">awesome work</a>.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed vehicula.</p>
        <CloseButton />
      </article>

      <article id="work" className={modal.work ? 'active' : ''} style={modal.work ? {display: 'block'} : {display: 'none'}}>
        <h2 className="major">Work</h2>
        <span className="image main"><img src="static/images/pic02.jpg" alt="" /></span>
        <p>Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.</p>
        <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus.</p>
        <CloseButton />
      </article>

      <article id="about" className={modal.about ? 'active' : ''} style={modal.about ? {display: 'block'} : {display: 'none'}}>
        <h2 className="major">About</h2>
        <span className="image main"><img src="static/images/pic03.jpg" alt="" /></span>
        <p>Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.</p>
        <CloseButton />
      </article>

      <article id="contact" className={modal.contact ? 'active' : ''} style={modal.contact ? {display: 'block'} : {display: 'none'}}>
        <h2 className="major">Contact</h2>
        <form method="post" action="#">
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows={4}></textarea>
          </div>
          <ul className="actions">
            <li><input type="submit" value="Send Message" className="special" /></li>
            <li><input type="reset" value="Reset" /></li>
          </ul>
        </form>
        <ul className="icons">
          <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
          <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
          <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
          <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
        </ul>
        <CloseButton />
      </article>

    </div>

    <footer id="footer" style={modal.about || modal.contact || modal.intro || modal.work ? {display: 'none'} : {display: 'block'}}>
      <p className="copyright">&copy; devjar.xyz.</p>
    </footer>

  
  </div>
  );
}



export default Home
