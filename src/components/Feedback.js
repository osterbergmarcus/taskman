import React                  from 'react'

const Feedback = ({ message, username }) => {
    return (
      <div className="row">
        <div className="col s4">
          <blockquote>
            <p>{username}</p>
            <p>{message}</p>
          </blockquote>
        </div>
      </div>
    )
}

export default Feedback