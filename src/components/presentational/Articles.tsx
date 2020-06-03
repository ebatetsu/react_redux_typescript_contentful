import React, { useEffect } from 'react'
import { State } from '../../store'
import { dateConvert } from '../../mixin'
import { DispatchProps } from '../container/App'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import {
  GridList,
  GridListTile,
  GridListTileBar,
} from '@material-ui/core'

type ArticlesProps = State & DispatchProps

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {},
  }),
)

export const Articles: React.FC<ArticlesProps> = (props: ArticlesProps) => {
  const classes = useStyles()

  useEffect(() => {
    props.fetchEntries()
  }, [])

  return (
    <>
      { props.articles.errorMessage &&
        <p>{ props.articles.errorMessage }</p>
      }
      <div className={ classes.root }>
        <GridList
          cellHeight={ 180 }
          className={ classes.gridList }
        >
          { props.articles.items.map((article: any) => (
            <GridListTile
              key={ article.sys.createdAt }
              component="a"
              href={ '/articles/' + article.sys.id }
            >
              <img
                src={ article.fields.thumbnail.fields.file.url }
                alt={ article.fields.title }
              />
              <GridListTileBar
                title={ article.fields.title }
                subtitle={ <span>{ dateConvert(article.sys.createdAt) }</span> }
              />
            </GridListTile>
          )) }
        </GridList>
      </div>
    </>
  )
}
