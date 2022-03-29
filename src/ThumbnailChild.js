import React, { Component } from 'react'

 class ThumbnailChild extends Component {
  render() {
      return (
        <div> 
                <img src={this.props.image} height='100' width='100' />
                <span>{this.props.name}</span>
                <p>{this.props.age}' Years</p>
            </div>
    )
  }
}

export default ThumbnailChild