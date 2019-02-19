import React, { Component } from 'react'

const ArticleListContext = React.createContext({
  articleList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setArticleList: () => {},
})
export default ArticleListContext

export class ArticleListProvider extends Component {
  state = {
    articleList: [],
    error: null,
  };

  setArticleList = articleList => {
    this.setState({ articleList })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const value = {
      articleList: this.state.articleList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setArticleList: this.setArticleList,
    }
    return (
      <ArticleListContext.Provider value={value}>
        {this.props.children}
      </ArticleListContext.Provider>
    )
  }
}
