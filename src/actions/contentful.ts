import actionCreatorFactory, { ActionCreator, Success, Failure } from 'typescript-fsa'
import { ArticleId } from '../states/contentful'

const actionCreator = actionCreatorFactory()

export interface ContentfulActions {
  start: ActionCreator<{}>
  done: ActionCreator<Success<{}, {}>>
  failed: ActionCreator<Failure<{}, {}>>
}

export const fetchId = actionCreator<ArticleId>('FETCH_ID')
const fetchArticles = actionCreator.async<{}, {}, {}>('FETCH_ARTICLES')
const fetchArticle = actionCreator.async<{}, {}, {}>('FETCH_ARTICLE')

export const fetchArticlesActions: ContentfulActions = {
  start: fetchArticles.started,
  done: fetchArticles.done,
  failed: fetchArticles.failed
}

export const fetchArticleActions: ContentfulActions = {
  start: fetchArticle.started,
  done: fetchArticle.done,
  failed: fetchArticle.failed
}
