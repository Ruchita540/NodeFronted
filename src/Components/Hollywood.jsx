import React, { useContext} from 'react'
import Card from './Card'
import { store } from './Details'

const Hollywood = () => {
  const [data] = useContext(store)
  console.log(data)
  return (
    <>
 <h1 className='holly-heading'>Hollywood</h1>
    <div className='underline'></div>
    <div className='holly-display'>
<div className='holly-dis-1'>
{
            data.filter((article) => { return article.category === "Hollywood" }).map((n) => (
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
<div className='holly-dis-2'>
<h1 className='holly-toppost'>Top Posts</h1>
    <div className='underline'></div>
    {
            data.filter((article) => { return article.category === "Hollywood" }).map((n) => (
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

export default Hollywood
