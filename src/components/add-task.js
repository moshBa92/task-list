import React from 'react';
import ReactDOM from 'react-dom'
import { connect } from 'react-redux';
import { addTask } from '../actions/actions'

export class AddTask extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ""
        }
    }

    handleChange = (e) => {
        let newTitle = e.target.value;

        this.setState(() => ({
            title: newTitle
        }))
    }


    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.state.title;
        title !== "" ? this.props.addNewTask(title) : console.log('please enter some task')
        document.getElementById("addTaskForm").reset();
        this.setState(() => ({
            title: ""
        }))
    }

    render() {
        return <div>
            <h2 className="add-task-h2">Add task</h2>
            <form id="addTaskForm" onSubmit={this.handleSubmit}>
                <input type="text" name="title" id="title"
                    onChange={this.handleChange}></input>
                <button type="submit" value="Add Task">Add</button>
            </form>
        </div>
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addNewTask: (title) => dispatch(addTask(title))
    }
}
export default connect(null, mapDispatchToProps)(AddTask)