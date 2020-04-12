import {forEach} from 'lodash';
import './style.scss';
import image from './google.png';

const arr = [0, 1, 7];

const div = document.getElementById('root');
forEach(arr, (item) => {
  const p = document.createElement('p');
  p.textContent = item;
  div.appendChild(p);
});

const img = new Image();
img.src = image;

div.appendChild(img);
