import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition'

const errorMessage = (props) => {
  return (
    <CSSTransition
      in={props.isVisible}
      timeout={{
        enter: 300,
        exit: 500
      }}
      classNames="errorMessage__fade-slide"
    >
      <div className="errorMessage">
        {props.message}
      </div>
    </CSSTransition>
  );
}

export default errorMessage;