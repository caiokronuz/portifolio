import type { NextPage } from 'next'
import { useState } from 'react'

import { MenuModal } from '../components/MenuModal'
import { NavigationBar } from '../components/NavigationBar'

const Home: NextPage = () => {

  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);

  function handleMenuModal(){
    setIsMenuModalOpen(!isMenuModalOpen)
  }


  return (
    <div>
      <NavigationBar handleMenuModal={handleMenuModal} isMenuModalOpen={isMenuModalOpen}/>
      <div>
        {isMenuModalOpen && <MenuModal handleMenuModal={handleMenuModal}/>}


        <h1>Página em construção...</h1>
      </div>
    </div>
  )
}

export default Home
