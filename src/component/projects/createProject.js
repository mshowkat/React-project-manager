import React, { Component } from 'react'

class CreateProject extends Component {
    state = {
        title: '',
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
    }
    render() {
        return (
            <div className='container '>
                <form onSubmit={this.handleSubmit} className="white card-panel hoverable">
                    <h5 className="grey-text text-darken-3">Create a new project:</h5>
                    <div className="input-field ">
                        <label htmlFor="title">Title</label>
                        <input type="text" id='title' onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Project content</label>
                        <textarea id='content' className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div>
                        <button className="btn btn-large cyan hoverable">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateProject