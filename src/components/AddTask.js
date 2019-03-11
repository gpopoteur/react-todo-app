import React, { Component } from 'react';

class AddTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ''
        }
    }
    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    } 
    onSubmit(e) {
        e.preventDefault();

        if (!this.state.content) {
            alert('Make sure to write in the text input to add a task!');
            return;
        }

        this.props.addTask({
            content: this.state.content, 
            completed: false,
            id: new Date().getTime()
        });

        // Clear input
        this.setState({content: ''});
    }
    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <div className="input-group mb-3">
                    <input onChange={this.handleChange.bind(this)} id="content" type="text" className="form-control" placeholder="What's next in your list? ..." value={this.state.content} />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="submit">Add task</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default AddTask;