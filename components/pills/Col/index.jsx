import React from 'react'

module.exports = React.createClass({
  render() {
    return <div className="column">
      {this.props.children}
    </div>
  }
})
