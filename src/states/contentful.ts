import { reducerWithInitialState } from 'typescript-fsa-reducers'
import {
  fetchId,
  fetchArticlesActions,
  fetchArticleActions
} from '../actions/contentful'

export interface ArticleId {
  id: string
}

export interface ArticlesState {
  items: any,
  errorMessage: any
}

export interface ArticleState {
  item: any,
  errorMessage: any
}

const initialState: ArticleId = {
  id: '',
}

const articlesState: ArticlesState = {
  items: [],
  errorMessage: null
}

const articleState: ArticleState = {
  item: null,
  errorMessage: null
}

export const articleIdReducer = reducerWithInitialState(initialState)
  .case(fetchId, (state, payload) => {
    return {
      ...state,
      id: payload.id,
    }
  })

export const articlesReducer = reducerWithInitialState(articlesState)
  .case(fetchArticlesActions.start, (state, payload) => {
    return { ...state }
  })
  .case(fetchArticlesActions.done, (state, payload) => {
    return {
      ...state,
      items: payload
    }
  })
  .case(fetchArticlesActions.failed, (state, payload) => {
    return {
      ...state,
      errorMessage: payload
    }
  })

export const articleReducer = reducerWithInitialState(articleState)
  .case(fetchArticleActions.start, (state, payload) => {
    return { ...state }
  })
  .case(fetchArticleActions.done, (state, payload) => {
    return {
      ...state,
      item: payload
    }
  })
  .case(fetchArticleActions.failed, (state, payload) => {
    return {
      ...state,
      errorMessage: payload
    }
  })
