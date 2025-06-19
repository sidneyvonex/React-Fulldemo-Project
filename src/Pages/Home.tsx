
import { Navbar } from '../Components/Navbar'
import { Footer } from '../Components/Footer'
import Hero from '../Components/Home/Hero'
import  Companies  from '../Components/Home/Companies'
import Container from '../Components/Container'
import Benefits from '../Components/Home/Benefits'
import { benefitOne, benefitTwo } from '../Utils/data'


export const Home = () => {
  return (
    <>
    <Container className="bg-gradient-to-br from-blue-100 via-white to-pink-100 flex flex-col gap-6">
        <Navbar/>
        <Hero/>
        <Companies/>
        <Benefits imgPos='right' data={benefitOne}/>
        <Benefits  imgPos='left' data={benefitTwo}/>
        <Footer/>
    </Container>
    </>
  )
}
