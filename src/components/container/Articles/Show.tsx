import { Action } from 'typescript-fsa'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { State } from '../../../store'
import { fetchId, fetchArticleActions } from '../../../actions/contentful'
import { Article } from '../../presentational/Article'
import { contentfulApi } from '../../../api/contentful'

export interface DispatchProps {
  fetchIdAction: (id: string) => Action<any>
  fetchEntry: (id: string) => void
}

function mapDispatchToProps(dispatch: Dispatch<Action<any>>) {
  return {
    fetchIdAction: (id: string) => dispatch(fetchId({ id })),
    fetchEntry: (id: string) => {
      dispatch(fetchArticleActions.start({}))
      contentfulApi.entry(id)
        .then((response: any) => {
          dispatch(fetchArticleActions.done(response))
        })
        .catch((error: any) => {
          dispatch(fetchArticleActions.failed(error.message))
        })
    }
  }
}

function mapStateToProps(state: State) {
  return { ...state }
}

export default connect(mapStateToProps, mapDispatchToProps)(Article)
