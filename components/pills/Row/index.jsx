import React from 'react'

module.exports = React.createClass({
  render() {
    return <div className="row">
      {this.props.children}
    </div>
  }
})
