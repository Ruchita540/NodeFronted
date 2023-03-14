import React, { useContext } from 'react'
import Card from './Card'
import './Technology.css'
import { store } from './Details'


const Technology = () => {
  const [data] = useContext(store)
  console.log(data)
  return (
    <>
    <h1 className='tech-heading'>Technology</h1>
    <div className='underline'></div>
    <div className='tech-display'>
<div className='tech-dis-1'>
{
            data.filter((article) => { return article.category === "Technology" }).map((n) => (
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
<div className='tech-dis-2'>
<h1 className='tech-toppost'>Top Posts</h1>
    <div className='underline'></div>
    {
            data.filter((article) => { return article.category === "Technology" }).map((n) => (
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
<div className='advertisement'>AdverTisement</div>
</div>
      
</div>
    </>
  )
}

export default Technology