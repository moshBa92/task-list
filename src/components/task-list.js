import React from 'react';
import TaskItem from './task-item';
import shortid from 'shortid';
import { connect } from 'react-redux';

export class TasklList extends React.Component {
  

    render() {
        return (<ul>
            {
               this.props.tasks.map(task => { return <TaskItem existsTask={task} key={shortid.generate()}></TaskItem> })
            }
        </ul>
        )
    }
}

const mapStateToProps = (state) => { return { tasks: state.tasks } };
export default connect(mapStateToProps)(TasklList);

