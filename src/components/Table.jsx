import React from 'react';

class Row extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      upper: false,
      name: props.record.name,
      description: props.record.description
    }
  }

  toggle = () => {
    this.setState({
      upper: !this.state.upper
    });
  };

  render() {
    let {name, description} = this.state;
    return <tr><td onClick={this.toggle}>{this.state.upper ? name.toUpperCase() : name.toLowerCase()}</td><td>{description}</td></tr>;
  }
}

Row.propTypes = {
  record: React.PropTypes.any.isRequired
}

class Table extends React.Component {

  renderRow(row, i) {
    return <Row key={i} record={row} />;
  }

  render() {
    return (
      <table>
        <thead>
        <tr><th>Name</th><th>Description</th></tr>
        </thead>
        <tbody>
        {this.props.records.map(this.renderRow.bind(this))}
        </tbody>
      </table>
      );
  }
}

Table.propTypes = {
  records: React.PropTypes.array.isRequired
};

export default Table;