import React, { useState, useEffect } from 'react';
import CSSTransition from 'react-transition-group/CSSTransition'

import FormModal from '../FormModal/FormModal'

const FlagReport = props => {
    const [visibility, setVisibility] = useState("FlagReport FlagReport__hidden")
    const [showContainer, setShowContainer] = useState(false)

    useEffect(() => {
        if (props.actived) {
            setVisibility("FlagReport")
            setShowContainer(true)
        } else {
            setVisibility("FlagReport FlagReport__hidden")
        }
    })

    const popModal = (
        <div className={visibility}>
            <div className="FlagReport__backdrop" onClick={props.clicked}></div>
                <CSSTransition
                    in={showContainer}
                    timeout={500}
                    classNames="FlagReport__container--animation"
                    mountOnEnter
                    onEnter={() => setShowContainer(true)}
                    onExit={() => setShowContainer(false)}
                >
                    <div className="FlagReport__container">
                        <h1 className="FlagReport__header">Flag an error</h1>
                        <p>Please leave any feedback, suggestion of flag, characteritic or even other kind of flag you'd like to find here.</p>
                        <FormModal name={props.name} message={props.message} changed={props.changeHandler} submitted={props.submitHandler}/>
                    </div>
                </CSSTransition>
        </div>
    )

    return popModal;
}

export default FlagReport;