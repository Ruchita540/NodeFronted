import React, { useContext} from 'react'
import './Food.css'
import Card from './Card'
import { store } from './Details'

const Food = () => {
  const [data] = useContext(store)
  console.log(data)
  return (
    <>
 <h1 className='food-heading'>Food</h1>
    <div className='underline'></div>
    <div className='food-display'>
<div className='food-dis-1'>
{
            data.filter((article) => { return article.category === "Food" }).map((n) => (
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
<div className='food-dis-2'>
<h1 className='food-toppost'>Top Posts</h1>
    <div className='underline'></div>
    {
            data.filter((article) => { return article.category === "Food" }).map((n) => (
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

export default Food