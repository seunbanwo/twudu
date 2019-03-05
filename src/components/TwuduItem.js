import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TwuduItem extends Component {
  getstyle = () => {
      return {
          background: 'F4F4F4',
          padding: '10px',
          borderBottom: '1px #ccc dotted',
          textDecoration: this.props.twudu.completed ? 'line-through' : 'none'
      }
  }

  render() {
    const { id, title } = this.props.twudu;
    return (
      <div style={ this.getstyle()}>
        <p>
            <input type='checkbox' onChange={this.props.markComplete.bind(this, id)} /> {''}
            { title }
            <button onClick={this.props.delTwudu.bind(this, id)} style={btnStyle}>x</button>
        </p>
      </div>
    )
  }
}

// PropTypes
TwuduItem.propTypes = {
    twudu: PropTypes.object.isRequired
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default TwuduItem;