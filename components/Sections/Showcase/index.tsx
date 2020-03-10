import CloseButton from "../../CloseButton";
import React, { useRef, useEffect, RefObject } from "react";
import { isEmpty, chunk } from 'lodash';
import { ShowcaseItemData } from "../../models";
import { uuidv4 } from "../../../services/utils";
import ShowcaseItem from './ShowcaseItem/index';

interface pageProps {
    isActive: boolean;
    header: string;
    paragraphs: string[];
    close: () => void;
    name: string;
    showcaseItems: ShowcaseItemData[];
    wrapper: RefObject<HTMLDivElement>;
    
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
 
    return(
        <article id={props.name} ref={modalRef} >
            <h2 className="major">{props.header}</h2>
           
            {props.paragraphs.map((paragraph: string) => {
                return(
                    <p key={paragraph}>{paragraph}</p>
                );
            })}
            
            {newArray.map((items: ShowcaseItemData[]) => {
                return (
                    <div key={uuidv4()} style={{display: 'flex', justifyContent: 'center'}}>
                        {
                            items.map((item: ShowcaseItemData) => {
                                return <React.Fragment key={uuidv4()} ><ShowcaseItem wrapper={props.wrapper} item={item}/></React.Fragment> 
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