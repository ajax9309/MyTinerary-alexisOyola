
import Footer from '../components/footer/Footer'
import NavbarMain from '../components/navbar/NavbarMain'
import '../layouts/mainlayout.css'

const MainLayout = ({children}) => {
  return (
    <div className="mainlayout">
      <header className="container layout-main-header">
        <NavbarMain/>
      </header>
      {children}
      <Footer/>
    </div>
  )
}

export default MainLayout
