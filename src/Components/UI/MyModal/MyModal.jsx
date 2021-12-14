import React from 'react';
import s from './MyModal.module.css'



const MyModal = ({children, visible, setVisible}) => {

    const rootClasses = [s.myModal]

    if (visible) {
        rootClasses.push(s.active)
    }

    return (
        <div>
            <div className={rootClasses.join(' ') } onClick={()=> setVisible(false)} >
                <div className={s.myModalContent} onClick={(event => event.stopPropagation())} >
                    {children}
                </div>

            </div>
        </div>
    );
};


export default MyModal;
