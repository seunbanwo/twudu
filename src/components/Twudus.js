import React, { Component } from 'react';
import TwuduItem from './TwuduItem';
import PropTypes from 'prop-types';

class Twudus extends Component {

    render() {
        console.log(this.props.twudus)
        return this.props.twudus.map((twudu) => (
            <TwuduItem key={twudu.id} twudu={twudu} markComplete={this.props.markComplete} delTwudu={this.props.delTwudu}/>
        ));
    }
}

// PropTypes
Twudus.propTypes = {
    twudus: PropTypes.array.isRequired
}

export default Twudus;