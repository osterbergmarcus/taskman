import React, { Component } from 'react'
import TaskItem             from './TaskItem'

class TaskList extends Component {
  render() {
    return (
      <div>
      <ul className="high-priority">
      {this.props.tasks.map(task => {
        if(task.priority === 'High') {
          return (<TaskItem key={task.id} task={task} removeTask={this.props.removeTask}/>)
        }
      })}   
      </ul>
      <ul className="low-priority">
      {this.props.tasks.map(task => {
        if(task.priority === 'Low') {
          return (<TaskItem key={task.id} task={task} removeTask={this.props.removeTask}/>)
        }
      })}   
      </ul>
      </div>
     )
  }
}

export default TaskList