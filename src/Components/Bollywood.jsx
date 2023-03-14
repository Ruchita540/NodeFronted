import React, { useContext } from 'react'
import Card from './Card'
import './Bollywood.css'
import { store } from './Details'

const Bollywood = () => {
  const [data] = useContext(store)
  console.log(data)
  return (
    <>
      <h1 className='bolly-heading'>Movies</h1>
      <div className='underline'></div>
      <div className='bolly-display'>
        <div className='bolly-dis-1'>
          {
            data.filter((article) => { return article.category === "Bollywood" }).map((n) => (
              <Card
                  key={n.id}
                  articleid={n.id}
                  imgUrl={n.img}
                  title={n.title}
                  description={n.description.slice(0, 150)}
                  author={n.author}
              />
          ))
          }
        </div>
        <div className='bolly-dis-2'>
          <h1 className='bolly-toppost'>Top Posts</h1>
          <div className='underline'></div>
         {
          data.filter((article) => { return article.category === "Bollywood" }).map((n) => (
            <Card
                key={n.id}
                articleid={n.id}
                imgUrl={n.img}
                title={n.title.slice(0,20)}
                description={n.description.slice(0, 100)}
                author={n.author}
            />
        ))
         }

          <div className='advertisement'>AdverTisement</div>
        </div>

      </div>
    </>
  )
}

export default Bollywood