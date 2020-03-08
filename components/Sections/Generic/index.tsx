import CloseButton from "../../CloseButton";
import React, { useRef, useEffect } from "react";
import { isEmpty } from 'lodash';

interface pageProps {
    isActive: boolean;
    header: string;
    paragraphs: string[];
    close: () => void;
    name: string;
    
}


function Generic(props: pageProps){
    const modalRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        
        if(props.isActive && !isEmpty(modalRef)) {

            modalRef!.current!.classList.add('active')
            setTimeout(() => {
                
                modalRef!.current!.style.display = 'block';
               
            }, 325);
           
        } else {
           if(!isEmpty(modalRef)){
            modalRef!.current!.classList.remove('active')
            setTimeout(() => {
               
                modalRef!.current!.style.display = 'none';
            }, 325);
           }
           
        }
         
      

        return () => {
           
          };
    }, [props.isActive]);
    return(
        <article id={props.name} ref={modalRef} >
            <h2 className="major">{props.header}</h2>
            <span className="image main"><img src="static/images/pic01.jpg" alt="" /></span>
            {props.paragraphs.map((paragraph: string) => {
                return <React.Fragment key={paragraph}>
                        <p>{paragraph}</p>
                </React.Fragment>;
            })}
           
            <CloseButton close={props.close} />
        </article>

    );
}

export default Generic;