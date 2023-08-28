import { useEffect } from 'react'
import Footer from '../components/footer/Footer'
import NavbarMain from '../components/navbar/NavbarMain'
import '../layouts/mainlayout.css'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

const MainLayout = () => {
  const nav = useNavigate()
  const loc = useLocation()

  useEffect(()=>{
    if (loc.pathname==="/")nav("/home")
  },[])

  return (
    <div className="mainlayout">
      <header className="appheader">
        <NavbarMain/>
        
      </header>
      <main className='appmain'>
      <Outlet/>
      </main>
      <footer>
      <Footer/>
      </footer>
    </div>
  )
}

export default MainLayout
