import React from 'react';

class Card extends React.Component {

  render() {
    let name = this.props.name;

    return <div>Hello {name}</div>;
  }
}

export default Card;

