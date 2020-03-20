import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag } from '@fortawesome/free-solid-svg-icons'

import FlagReport from './FlagReport'

class ReportButton extends Component {
    state = {
        active: false,
        name: '',
        message: ''
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    submitHandler = () => {
        this.setState({ name: '', message: '' });
    }

    setActive = () => {
        this.setState(state => ({ active: !state.active }));
    }

    render() {
        return (
            <div>
                <button className="ReportButton" title="Flag an error" onClick={this.setActive}>
                    <span><FontAwesomeIcon icon={faFlag} /></span>
                </button>
                {this.state.active ?
                    <FlagReport
                        changeHandler={this.changeHandler.bind(this)}
                        submitHandler={this.submitHandler.bind(this)}
                        name={this.state.name}
                        message={this.state.message}
                        actived={this.state.active}
                        clicked={this.setActive.bind(this)} />
                    : null}
            </div>
        )
    }

}

export default ReportButton;