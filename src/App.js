import './App.css';
import './styles/main.css'
import React from 'react';
import AddTask from './components/add-task'
import StatusBar from './components/status-bar'
import TaskLIst from './components/task-list'
import store from './store'
import { addTask } from './actions/actions.js'
import Header from './components/header';
import Footer from './components/footer';

store.dispatch(addTask('Do my homework'));
store.dispatch(addTask('Do my Projects'));
store.dispatch(addTask('Clean my spot'));

const state = (store.getState());
console.log(state)


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="body">
          <div className="main-contant">
            <Header></Header>
            <AddTask ></AddTask>
            <StatusBar></StatusBar>
            <TaskLIst ></TaskLIst>
          </div>
          <Footer></Footer>
        </div>
      </div>
    );
  }
}

export default App;


// <div className="App">
// <AddTask sendNewTask={this.ListenerForNewTask}></AddTask>
// <StatusBar complited={this.state.taskList.filter(task => task.complited)}
//   notcomplited={this.state.taskList.filter(task => !task.complited)}></StatusBar>
// {this.TaskLIststate.newTask
//   ?
//   <TaskLIst newTask={this.state.newTask} taskList={this.state.taskList} ></TaskLIst>
//   :
//   <TaskLIst taskList={this.state.taskList}></TaskLIst>
// }
// </div >