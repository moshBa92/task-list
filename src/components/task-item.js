import React from 'react'
import { connect } from 'react-redux'
import { updateTask, completeTask, removeTask } from '../actions/actions'

export class TaskItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isTasksUpdateInProgress: false,
            InputForUpdatingTask: ""
        }
    }

    existsTask = this.props.existsTask

    handleUpdaetTaskInput = (e) => {
        let input = e.target.value
        this.setState(() => ({
            InputForUpdatingTask: input
        }))
    }

    handleUpdateTask = (e) => {
        e.preventDefault()
        this.props.updateTask(this.existsTask.id, this.state.InputForUpdatingTask)
    }

    changeToUpdateInputTag = () => {
        this.setState(() => ({
            isTasksUpdateInProgress: true
        }))
    }

    handleRemoveTask = () => {
        this.props.removeTask(this.existsTask.id)
    }

    handleCompleteTask = () => {
        this.props.completeTask(this.existsTask.id)
    }

    render() {
        const isTaskCopleted = this.props.existsTask.completed

        return (
            <div className="max-width">
                {isTaskCopleted ?
                    <li className="completed ow">{this.existsTask.title}</li>
                    :
                    <li className="ow">{this.existsTask.title}</li>
                }
                {!isTaskCopleted &&
                    (this.state.isTasksUpdateInProgress ?

                        <div>
                            <input onChange={this.handleUpdaetTaskInput} type="text" placeholder={this.existsTask.title} ></input>
                            <br></br>
                            <button className="update" disabled={isTaskCopleted} onClick={this.handleUpdateTask} type="submit">Confirm Update</button>
                        </div>
                        :
                        <button className="update" disabled={isTaskCopleted} onClick={this.changeToUpdateInputTag}>Update Task</button>)
                }
                {!isTaskCopleted &&
                    <button className="completed" disabled={isTaskCopleted} onClick={this.handleCompleteTask}>Task completed</button>
                }
                <button className="remove" onClick={this.handleRemoveTask}>Remove task</button>
                <hr></hr>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateTask: (id, newTitle) => { dispatch(updateTask(id, newTitle)) },
        completeTask: (id) => { dispatch(completeTask(id)) },
        removeTask: (id) => dispatch(removeTask(id)),
    }
}
export default connect(null, mapDispatchToProps)(TaskItem);
