import Hero from "../../components/hero/Hero"
import MainLayout from "../../layouts/MainLayout"

const Home = () => {
  return (
      <MainLayout>
      <main className='appmain'>
      <Hero/>
      </main>
      </MainLayout>

  )
}

export default Home