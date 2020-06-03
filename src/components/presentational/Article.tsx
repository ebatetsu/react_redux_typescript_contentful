import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { State } from '../../store'
import { dateConvert } from '../../mixin'
import { DispatchProps } from '../container/Articles/Show'
import { Highlight } from '../atom/Highlight'
import ReactMarkdown from 'react-markdown/with-html'

type ArticleProp = State & DispatchProps

export const Article: React.FC<ArticleProp> = (props: ArticleProp) => {
  const { id } = useParams()

  useEffect(() => {
    props.fetchIdAction(id)
    props.fetchEntry(id)
  }, [])

  return (
    <>
      { props.article.errorMessage &&
        <p>{ props.article.errorMessage }</p>
      }

      { props.article.item &&
        <div className='l-article'>
          <h1 className='l-article__title'>
            { props.article.item.fields.title }
          </h1>
          <p className='l-article__date'>
            { dateConvert(props.article.item.sys.createdAt) }
          </p>
          <ul className='l-article__slug'>
            { props.article.item.fields.slug.map((slug: string, index: number) => (
              <li key={ index }>{ slug }</li>
            )) }
          </ul>
          <div className='l-article__detail'>
            <ReactMarkdown
              source={ props.article.item.fields.body }
              renderers={{ code: Highlight }}
            />
          </div>
        </div>
      }
    </>
  )
}
