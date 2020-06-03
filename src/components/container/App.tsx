import { Action } from 'typescript-fsa'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { State } from '../../store'
import { fetchArticlesActions } from '../../actions/contentful'
import { Articles } from '../presentational/Articles'
import { contentfulApi } from '../../api/contentful'

export interface DispatchProps {
  fetchEntries: () => void
}

function mapDispatchToProps(dispatch: Dispatch<Action<any>>) {
  return {
    fetchEntries: () => {
      dispatch(fetchArticlesActions.start({}))
      contentfulApi.entries()
        .then((response: any) => {
          dispatch(fetchArticlesActions.done(response.items))
        })
        .catch((error: any) => {
          dispatch(fetchArticlesActions.failed(error.message))
        })
    }
  }
}

function mapStateToProps(state: State) {
  return { ...state }
}

export default connect(mapStateToProps, mapDispatchToProps)(Articles)
