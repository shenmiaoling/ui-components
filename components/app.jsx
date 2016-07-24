import React from 'react'

module.exports = React.createClass({
  getInitialState() {
    return {
      token: localStorage.getItem('token')
    }
  },
  render() {
    return <div className="app">
      {
        React.Children.map(this.props.children, (e) => {
          return React.cloneElement(e, {
            token: this.state.token
          })
        })
      }
    </div>
  }
})
