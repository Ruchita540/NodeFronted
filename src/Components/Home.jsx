import React, { useContext } from 'react'
import './Home.css'
import './Bollywood.css'
import './Hollywood.css'
import ImageCard from './ImageCard'
import CardHome from './CardHome'
import Card from './Card'
import { store } from './Details'

const Home = () => {
  const [data] = useContext(store)
  console.log(data)
  return (
    <>
    <h1>Home Page</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra finibus tellus, vitae finibus enim. Vivamus tempor aliquet efficitur. Pellentesque id urna vitae lorem pellentesque molestie in ut dolor. Donec eu odio orci. Mauris nec quam neque. Maecenas a velit imperdiet nibh lacinia ornare. Nullam ullamcorper fringilla mi. Curabitur porta felis non nisi pellentesque, non sagittis risus lacinia. Integer in metus suscipit, ullamcorper nunc sit amet, mollis metus. Sed dapibus augue varius, lobortis metus a, sodales purus. Donec varius ac ipsum sit amet iaculis.</p>
      <div className='Home'>

        <div className='home-image'>
          <div className='home-dis-1'>
            <ImageCard src='https://i.ytimg.com/vi/Op7fpqi6V3w/maxresdefault.jpg' />
          </div>
          <div className='home-dis-2'>
            <div className='in-div-dis'>
              <ImageCard src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHzcMPbQ0fhHTylOOMy_j_wuRkqDcFNYGCpw&usqp=CAU' />

            </div>
            <div className='in-div-dis2'>
              <ImageCard src='https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900' />

            </div>
          </div>
        </div>

        <h1 style={{ marginTop: "40px" }}>The Latest</h1>
        <hr style={{ width: "200px", thickness: "20px" }} />
        <div className="home__left left1">
          {data
            .filter((article) => {
              return article.category === "bollywood";
            })
            .map((n) => (
              <CardHome
                key={n.id}
                articleid={n.id}
                imgUrl={n.img}
                title={n.title}
                description={n.description.slice(0, 200)}
                author={n.author}
              />
            ))}
        </div>
        <div className="home__left left1">
          {data
            .filter((article) => {
              return article.category === "technology";
            })
            .map((n) => (
              <CardHome
                key={n.id}
                articleid={n.id}
                imgUrl={n.img}
                title={n.title}
                description={n.description.slice(0, 200)}
                author={n.author}
              />
            ))}
        </div>
        <div className="home__left left1">
          {data
            .filter((article) => {
              return article.category === "food";
            })
            .map((n) => (
              <CardHome
                key={n.id}
                articleid={n.id}
                imgUrl={n.img}
                title={n.title}
                description={n.description.slice(0, 200)}
                author={n.author}
              />
            ))}
        </div>
        <h1 style={{ marginTop: "40px", display: "inline-block" }}>
          Latest Articles
        </h1>

        <h1 className="Top">Top Posts</h1>
        <hr style={{ width: "200px", thickness: "20px" }} />

        <div className="rightbar2">
          {data
            .filter((article) => {
              return article.category === "mix";
            })
            .map((n) => (
              <Card
                key={n.id}
                articleid={n.id}
                imgUrl={n.img}
                title={n.title}
                description={n.description.slice(0, 200)}
                author={n.author}
              />
            ))}
        </div>
        <div className="sidebar2">
          {data
            .filter((article) => {
              return article.category === "mix";
            })
            .map((n) => (
              <Card
                key={n.id}
                articleid={n.id}
                imgUrl={n.img}
                description={n.description.slice(0, 200)}
                title={n.title.slice(0, 25)}
                author={n.author}
              />
            ))}

          <div className="advertisement">
            <p>Advertisement</p>
          </div>
        </div>
        <h1 style={{ marginTop: "40px", display: "inline-block" }}>
          Latest Stories
        </h1>
        <hr />

        <div className="home__left">
          {data
            .filter((article) => {
              return article.category === "footer1";
            })
            .map((n) => (
              <CardHome
                key={n.id}
                articleid={n.id}
                imgUrl={n.img}
                title={n.title}
                description={n.description.slice(0, 200)}
                author={n.author}
              />
            ))}
        </div>

        <div className="home__left">
          {data
            .filter((article) => {
              return article.category === "footer2";
            })
            .map((n) => (
              <CardHome
                key={n.id}
                articleid={n.id}
                imgUrl={n.img}
                title={n.title}
                description={n.description.slice(0, 200)}
                author={n.author}
              />
            ))}
        </div>

        <div className="home__left">
          {data
            .filter((article) => {
              return article.category === "footer3";
            })
            .map((n) => (
              <CardHome
                key={n.id}
                articleid={n.id}
                imgUrl={n.img}
                title={n.title}
                description={n.description.slice(0, 200)}
                author={n.author}
              />
            ))}
        </div>
      </div>



    </>
  )
}

export default Home