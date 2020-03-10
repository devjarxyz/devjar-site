import { useRef, useState, RefObject } from "react";
import { ShowcaseItemData } from './../../../models';
import {createPortal} from 'react-dom';
interface pageProps {
    item: ShowcaseItemData;
    wrapper: RefObject<HTMLDivElement>;
}

function ShowcaseItem(props: pageProps) {
    const showcaseRef = useRef<HTMLDivElement>(null);
    const [showcaseItemState, setShowcaseItemState] = useState(false);
   
    function onMouseOver() {
        showcaseRef.current!.children.item(1)!.children.item(0)!.classList.add('hover');
        showcaseRef.current!.children.item(1)!.classList.add('transparent');
        
    }
    function onMouseLeave() {
        showcaseRef.current!.children.item(1)!.children.item(0)!.classList.remove('hover');
        showcaseRef.current!.children.item(1)!.classList.remove('transparent');
    }
    return (
        <>
            <div className="showcase__image-wrapper" ref={showcaseRef} onMouseOver={() => onMouseOver()} onMouseLeave={() => onMouseLeave()} onClick={() => setShowcaseItemState(true)}>
                <img src={props.item.thumb} className="showcase__image-wrapper__image"/>
                <div className="showcase__image-wrapper__overlay" >
                    <span className="fa fa-plus" />
                </div>
            </div>
           {showcaseItemState && 
            createPortal(<div className="showcase__portal__wrapper" onClick={() => setShowcaseItemState(false)}>
                <div className="showcase__portal__image-wrapper">
                    <img src={props.item.url}/>
                    <div className="showcase__portal__image-text">{props.item.name}  <span style={{marginLeft: 'auto'}} className="close">Close</span></div>
                </div>
            </div>, props.wrapper.current!)}
        </>
    );
}

export default ShowcaseItem;