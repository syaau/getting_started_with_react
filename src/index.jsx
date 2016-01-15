
import React from 'react';
import { render } from 'react-dom';

import Card from './components/Card.jsx';
import Table from './components/Table.jsx';

//render( <Card name="John Doe 3" />, document.body);

const data = [
 { name: 'John', description: 'John is a boy'},
 { name: 'Sita', description: 'Sita is a girl'}
];

render(<Table records={data} />, document.body);