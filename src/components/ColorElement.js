import React from 'react';
import '../styles/color_element.scss';

function ColorElement(props) {
  function saveColor() {
    const color = props.palletElement;
    props.setColor(color);
  }
  return (
    <div className='color-element' onClick={saveColor} style={{backgroundColor: props.palletElement}}>
    </div>
  );
}

export default ColorElement;