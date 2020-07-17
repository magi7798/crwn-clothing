import React from 'react';

import MenuItem from '../menu-item/MenuItem';
import sections from './DirectoryData';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: sections
    }
  }

  render() {
    return (
      <div className='directory-menu'>
        {
          this.state.sections.map(({ title, imageUrl, id, size }) => (
            <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
          )) 
        }        
      </div>
    )
  }
}

export default Directory;