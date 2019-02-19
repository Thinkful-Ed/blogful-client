import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NiceDate, Hyph } from '../Utils/Utils'
import StyleIcon from '../StyleIcon/StyleIcon'
import './ArticleListItem.css'

export default class ArticleListItem extends Component {
  render() {
    const { article } = this.props
    return (
      <Link to={`/article/${article.id}`} className='ArticleListItem'>
        <header className='ArticleListItem__header'>
          <h2 className='ArticleListItem__heading'>
            {article.title}
          </h2>
          <ArticleDate article={article} />
        </header>
        <footer className='ArticleListItem__footer'>
          <ArticleStyle article={article} />
          {article.author.id && <>
            <Hyph />
            <ArticleAuthor article={article} />
          </>}
          <ArticleCommentCount article={article} />
        </footer>
      </Link>
    )
  }
}

function ArticleStyle({ article }) {
  return (
    <span className='ArticleListItem__style'>
      <StyleIcon style={article.style} />
      {' '}
      {article.style}
    </span>
  )
}

function ArticleDate({ article }) {
  return (
    <span className='ArticleListItem__date'>
      <NiceDate
        date={article.date_created}
      />
    </span>
  )
}

function ArticleAuthor({ article }) {
  return (
    <span className='ArticleListItem__author'>
      {article.author.full_name}
    </span>
  )
}

function ArticleCommentCount({ article }) {
  return (
    <span
      className='ArticleListItem__comment-count fa-layers fa-fw'
    >
      <FontAwesomeIcon size='lg' icon='comment' />
      <span
        className='fa-layers-text fa-inverse'>
        {article.number_of_comments}
      </span>
    </span>
  )
}
