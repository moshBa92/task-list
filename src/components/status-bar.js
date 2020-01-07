import React from 'react'
import { connect } from 'react-redux'

export class StatusBar extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const tasks = this.props.tasks
        const completedTasks = (tasks.filter(task => task.completed)).length
        const uncompletedTasks = (tasks.filter(task => !task.completed)).length

        return (
            <div>
                <p className="status-bar-completed">You have done {completedTasks} tasks </p>
                <p className="status-bar-uncompleted">  You have {uncompletedTasks} tasks you have not completed</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { tasks: state.tasks }
}
export default connect(mapStateToProps)(StatusBar)