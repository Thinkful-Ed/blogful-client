import React, { Component } from 'react'
import ArticleContext from '../../contexts/ArticleContext'
import ArticleApiService from '../../services/article-api-service'
import { Button, Textarea } from '../Utils/Utils'
import './CommentForm.css'

export default class CommentForm extends Component {
  static contextType = ArticleContext

  handleSubmit = ev => {
    ev.preventDefault()
    const { article } = this.context
    const { text } = ev.target
    ArticleApiService.postComment(article.id, text.value)
      .then(this.context.addComment)
      .then(() => {
        text.value = ''
      })
      .catch(this.context.setError)
  }

  render() {
    return (
      <form
        className='CommentForm'
        onSubmit={this.handleSubmit}
      >
        <div className='text'>
          <Textarea
            required
            aria-label='Type a comment...'
            name='text'
            id='text'
            cols='30'
            rows='3'
            placeholder='Type a comment..'>
          </Textarea>
        </div>
        <Button type='submit'>
          Post comment
        </Button>
      </form>
    )
  }
}
