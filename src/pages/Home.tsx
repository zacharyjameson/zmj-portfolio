import React, {useEffect} from 'react'
import { HomeBase } from "../components/Home"

export interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = () => {
  useEffect(() => {
    console.log("Home Page")
  })

  return (
    <div className='home'>
      <HomeBase />
    </div>
  )
}

export default Home
