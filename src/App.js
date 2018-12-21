import React, { PureComponent } from 'react';
import './App.css';

import { Card } from './components'

const cardContents = [
  {
    title: 'Card1',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    image: {
      thumb: 'http://www.youandthemat.com/wp-content/uploads/nature-2-26-17.jpg',
      full: 'http://www.youandthemat.com/wp-content/uploads/nature-2-26-17.jpg'
    }
  },
  {
    title: 'Card2',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    image: {
      thumb: 'http://www.youandthemat.com/wp-content/uploads/nature-2-26-17.jpg',
      full: 'http://www.youandthemat.com/wp-content/uploads/nature-2-26-17.jpg'
    }
  },
  {
    title: 'Card3',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    image: {
      thumb: 'http://www.youandthemat.com/wp-content/uploads/nature-2-26-17.jpg',
      full: 'http://www.youandthemat.com/wp-content/uploads/nature-2-26-17.jpg'
    }
  },
  {
    title: 'Card4',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    image: {
      thumb: 'http://www.youandthemat.com/wp-content/uploads/nature-2-26-17.jpg',
      full: 'http://www.youandthemat.com/wp-content/uploads/nature-2-26-17.jpg'
    }
  }
]

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <div className="container">
          {
            cardContents.map((card, i) => <Card key={i} i={i} {...card} />)
          }
        </div>
      </div>
    );
  }
}

export default App;
