import {
  createStore,
  combineReducers,
} from 'redux'

import {
  ArticleId,
  ArticlesState,
  ArticleState,
  articleIdReducer,
  articlesReducer,
  articleReducer,
} from './states/contentful'

export type State = {
  articleId: ArticleId
  articles: ArticlesState
  article: ArticleState
}

const store = createStore(
  combineReducers<State>({
    articleId: articleIdReducer,
    articles: articlesReducer,
    article: articleReducer,
  })
)

export default store
