import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';

class Carousel extends Component {
  state = {
    items: [
     
    ]
  }
 
  render () {
    const { items } = this.state;
    return (
      <Carousel itemsToShow={4}>
        {items.map(item => <div key={item.id}>{item.title}</div>)}
      </Carousel>
    )
  }
}

export default Carousel;