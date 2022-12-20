import FileBrowser, { Icons } from 'react-keyed-file-browser'
import Moment from 'moment'

import ff from '../../src'
const mount = document.querySelectorAll('div.demo-mount-grouped-thumbnails')


function FileExplorer(props) {
  const {path}=props;
  return (
    <FileBrowser
    files={[ {
        key: 'photos/mohit/cat in a hat.png',
        modified: +Moment().subtract(1, 'hours'),
        size: 1.5 * 1024 * 1024,
      },
      {
        key: 'videos/mohit/',
        modified: +Moment().subtract(3, 'days'),
        size: 545 * 1024,
      },
      {
        key: 'elephant.png',
        modified: +Moment().subtract(3, 'days'),
        size: 52 * 1024,
      },
      {
        key: 'dog.png',
        modified: +Moment().subtract(1, 'hours'),
        size: 1.5 * 1024 * 1024,
      },
      {
        key: 'turtle.png',
        modified: +Moment().subtract(3, 'months'),
        size: 545 * 1024,
      },
      {
        key: 'gecko.png',
        modified: +Moment().subtract(2, 'days'),
        size: 52 * 1024,
      },
      {
        key: 'centipede.png',
        modified: +Moment().subtract(0.5, 'hours'),
        size: 1.5 * 1024 * 1024,
      },
      {
        key: 'possum.png',
        modified: +Moment().subtract(32, 'days'),
        size: 545 * 1024,
      }]}
    icons={Icons.FontAwesome(4)}
  />
  );
}

export default FileExplorer;
