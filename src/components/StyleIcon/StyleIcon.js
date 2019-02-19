import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const styleIconMap = {
  'Listicle': <FontAwesomeIcon className='blue' icon='list-ul' />,
  'How-to': <FontAwesomeIcon className='red' icon='list-ol' />,
  'News': <FontAwesomeIcon className='orange' icon='globe-americas' />,
  'Interview': <FontAwesomeIcon className='yellow' icon='pen-alt' />,
  'Story': <FontAwesomeIcon className='green' icon='book-open' />,
  'default': null
}

export default function StyleIcon({ style='default' }) {
  return styleIconMap[style]
}
