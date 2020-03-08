import CloseButton from "../../CloseButton";


interface pageProps {
    isActive: boolean;
    header: string;
   
    close: any;
    name: string;
}

const Contact = (props: pageProps) => {
    return (
        <article id={props.name} className={props.isActive ? 'active' : ''} style={props.isActive ? {display: 'block'} : {display: 'none'}}>
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
            <li><a href="https://www.linkedin.com/in/vladimir-strukelj-00016b61/" className="icon fa-linkedin" target="_blank"><span className="label">Twitter</span></a></li>
            <li><a href="https://www.facebook.com/vladdewilson" className="icon fa-facebook" target="_blank"><span className="label">Facebook</span></a></li>
            <li><a href="https://www.instagram.com/vladstrukelj" className="icon fa-instagram" target="_blank"><span className="label">Instagram</span></a></li>
            <li><a href="https://github.com/devjarxyz" className="icon fa-github" target="_blank"><span className="label">GitHub</span></a></li>
            </ul>
            <CloseButton close={props.close} />
      </article>
    );
}

export default Contact;