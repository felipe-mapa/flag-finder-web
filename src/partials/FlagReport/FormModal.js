import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input, Alert, Spinner } from 'reactstrap';

class FormModal extends Component {
    state = {
        messageDisplay: '',
        submitMessage: 'Submit'
    }

    submitHandler = (e) => {
        e.preventDefault()

        this.setState({ submitMessage: <Spinner size="sm" color="primary" /> });

        const templateId = 'template_id';

        this.sendFeedback(templateId, {
            message_html: this.props.message,
            from_name: this.props.name,
            page: window.location.href
        })

        const willSubmit = this.props.submitted
    }

    sendFeedback = (templateId, variables) => {
        window.emailjs.send(
            'smtp_server', 'template_bduDm44R',
            variables
        ).then(res => {
            this.setState({
                messageDisplay: (
                    <Alert color="success">
                        Message sent successfully!
                    </Alert>
                ),
                submitMessage: 'Submit'
            });            
        })
            .catch(err => {
                this.setState({
                    messageDisplay: (
                        <Alert color="danger">
                            Sorry, we couldn't send your message!
                        </Alert>
                    ),
                    submitMessage: 'Submit'
                });
            })
    }

    render() {
        return (
            <Form className="Form" onSubmit={this.submitHandler} encType="multipart/form-data">
                {this.state.messageDisplay.length !== '' ? this.state.messageDisplay : null}
                <FormGroup>
                    <Label>Name:</Label>
                    <Input value={this.props.name} type="name" name="name" id="name" placeholder="Your name" onChange={this.props.changed}></Input>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText">Feedback:</Label>
                    <Input value={this.props.message} type="textarea" name="message" id="exampleText" placeholder="Your feedback" onChange={this.props.changed} required/>
                </FormGroup>
                <Button outline color="primary" value="Submit" type="Submit">{this.state.submitMessage}</Button>
            </Form>
        );
    }
}

export default FormModal;