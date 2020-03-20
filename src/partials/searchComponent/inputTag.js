import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import ErrorMessage from './errorMessage'

const inputTag = (props) => {
  return (
    <form className="inputTag" onSubmit={props.submitted}>
      <ErrorMessage
        isVisible={!props.isTextValid}
        message={props.message}
      />
      <div className="inputTag__box">
        <input
          className={props.isLoaded ? "inputTag__input" : "inputTag__input inputTag__input--locked"} 
          placeholder={props.isLoaded ? "Eg. Blue, stripes, star, Asia, New Zealand" : "Loading..."} 
          type="text"
          onChange={props.changed}
          value={props.value}
          disabled={props.isLoaded ? false : true}
        />
        <button 
          className={props.isLoaded ? "inputTag__icon" : "inputTag__icon inputTag__icon--locked"} 
          >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </form>
  );
}

export default inputTag;