import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFrog, faListUl, faListOl, faPenAlt, faGlobeAmericas, faBookOpen, faComment, faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import * as serviceWorker from './serviceWorker'
import { ArticleListProvider } from './contexts/ArticleListContext'
import { ArticleProvider } from './contexts/ArticleContext'
import App from './components/App/App'
import './index.css'

library.add(
  faFrog, // logo
  faListUl, // style: listicle
  faListOl, // style: howto
  faGlobeAmericas, // style: news
  faPenAlt, // style: interview
  faBookOpen, // style: story
  faComment,
  faQuoteLeft,
)

ReactDOM.render(
  <BrowserRouter>
    <ArticleListProvider>
      <ArticleProvider>
        <App />
      </ArticleProvider>
    </ArticleListProvider>
  </BrowserRouter>,
  document.getElementById('root')
)

serviceWorker.unregister()
