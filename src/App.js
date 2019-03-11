import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [{
        id: 1,
        content: 'Work on ToDo\'s React app.',
        completed: true
      }, {
        id: 2,
        content: 'Create GitHub repo.',
        completed: true
      }, {
        id: 3,
        content: 'Push code to repo.',
        completed: false
      }, {
        id: 4,
        content: 'Send to review.',
        completed: false
      }]
    }
  }
  addTask(task) {
    const tasks = [...this.state.tasks, task];
    this.setState({tasks});
  }
  deleteTask({id}) {
    const tasks = this.state.tasks.filter((t) => t.id !== id);
    this.setState({tasks});
  }
  toggleTaskDone({id}) {
    const taskIdx = this.state.tasks.findIndex((t) => t.id === id);
    const tasks = [...this.state.tasks];
    
    const task = tasks[taskIdx];
    task.completed = !task.completed;
    tasks[taskIdx] = task;

    this.setState({tasks});
  }
  render() {
    return (
      <div className="App">
        <div className="container mt-2">
          <div className="row">
            <div className="col-md-12">
              <Todos 
                tasks={this.state.tasks}
                addTask={this.addTask.bind(this)}
                deleteTask={this.deleteTask.bind(this)}
                toggleTaskDone={this.toggleTaskDone.bind(this)}
              ></Todos>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
