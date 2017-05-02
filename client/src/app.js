import React from 'react';
import ReactDOM from 'react-dom';
import SongsContainer from './containers/SongsContainer'

window.onload = function(){
  ReactDOM.render(
    <SongsContainer />,
    document.getElementById('app')
  );
};
