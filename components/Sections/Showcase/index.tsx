import CloseButton from "../../CloseButton";
import React, { useRef, useEffect } from "react";
import { isEmpty, chunk } from 'lodash';

interface pageProps {
    isActive: boolean;
    header: string;
    paragraphs: string[];
    close: () => void;
    name: string;
    showcaseItems: ShowcaseItem[];
    
}

interface ShowcaseItem{
    url: string;
    name: string;
}


function Showcase(props: pageProps){
    const modalRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        
        if(props.isActive && !isEmpty(modalRef.current)) {

            modalRef!.current!.classList.add('active')
            setTimeout(() => {
                
                modalRef!.current!.style.display = 'block';
               
            }, 325);
           
        } else {
           if(!isEmpty(modalRef.current)){
            modalRef!.current!.classList.remove('active')
            setTimeout(() => {
               
                modalRef!.current!.style.display = 'none';
            }, 325);
           }
           
        }

        return () => {
           
          };
    }, [props.isActive]);
    
    const newArray = chunk(props.showcaseItems, 3);
 
    function  uuidv4(){
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    return(
        <article id={props.name} ref={modalRef} >
            <h2 className="major">{props.header}</h2>
           
            {props.paragraphs.map((paragraph: string) => {
                return(
                    <p key={paragraph}>{paragraph}</p>
                );
            })}
            
            {newArray.map((items: ShowcaseItem[]) => {
                return (
                    <div key={uuidv4()} style={{display: 'flex', justifyContent: 'center'}}>
                        {
                            items.map((item: ShowcaseItem) => {
                                return <div key={uuidv4()} style={{maxWidth: '30%', position: 'relative', padding: '0 4px'}} >
                                    <img src={item.url} style={{maxWidth: '100%', height: 'auto'}} />
                                    <div style={{position: 'absolute', top: '60%', left: 0, right: 0, backgroundColor: 'rgba(0,0,0,0.5)'}}>
                                        <span >{item.name}</span>
                                    </div>
                                    
                                </div>
                            })
                        }
                    </div>
                )
                
            })}
          
            
            <CloseButton close={props.close} />
        </article>

    );
}

export default Showcase;