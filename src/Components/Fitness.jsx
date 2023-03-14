import React, {useContext} from 'react'
import './Fitness.css'
import Card from './Card'
import { store } from './Details'
const Fitness = () => {
  const [data] = useContext(store)
  console.log(data)
  return (
    <>
 <h1 className='fit-heading'>Fitness</h1>
    <div className='underline'></div>
    <div className='fit-display'>
<div className='fit-dis-1'>
{
            data.filter((article) => { return article.category === "Fitness" }).map((n) => (
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
<div className='fit-dis-2'>
<h1 className='fit-toppost'>Top Posts</h1>
    <div className='underline'></div>
    {
            data.filter((article) => { return article.category === "Fitness" }).map((n) => (
              <Card
                  key={n.id}
                  articleid={n.id}
                  imgUrl={n.img}
                  title={n.title.slice(0,15)}
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

export default Fitness