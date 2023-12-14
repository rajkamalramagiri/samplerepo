import React, { Component } from 'react';
import './App.css'

class ListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        selectedItemIndex: null, // No item initially selected
        items :['Item 1', 'Item 2', 'Item 3']
        
    };
  }

  handleKeyDown = (e) => {
    const { selectedItemIndex,items } = this.state;
    // const { items, onSelectItem } = this.props;

    if (e.key === 'ArrowDown' && selectedItemIndex < items.length - 1) {
      this.setState({ selectedItemIndex: selectedItemIndex + 1 });
    } else if (e.key === 'ArrowUp' && selectedItemIndex > 0) {
      this.setState({ selectedItemIndex: selectedItemIndex - 1 });
    }
    // else if (e.key === 'Enter') {
    //   onSelectItem(selectedItemIndex);
    // }
  };

  handleMouseEnter = (index) => {
    this.setState({ selectedItemIndex: index });
  };

  handleMouseLeave = () => {
    this.setState({ selectedItemIndex: null });
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    const { items } = this.state;
    const { selectedItemIndex } = this.state;

    return (
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            className={index === selectedItemIndex ? 'active' : ''}
            onClick={() => this.props.onSelectItem(index)}
            onMouseEnter={() => this.handleMouseEnter(index)}
            onMouseLeave={this.handleMouseLeave}
          >
            {item}
          </li>
        ))}
      </ul>
    );
  }
}

export default ListComponent;
