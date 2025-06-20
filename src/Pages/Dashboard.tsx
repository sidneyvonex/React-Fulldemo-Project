import Container from "../Components/Container"
import { Layout } from "../Components/Dashboard-Design/Layout"
import { Footer } from "../Components/Footer"
import { Navbar } from "../Components/Navbar"

export const Dashboard = () => {
  return (
    <div className="h-screen">
      <Container className="bg-gradient-to-br from-blue-100 via-white to-pink-100 flex flex-col gap-6">
        <Navbar/>
        <Layout/>
        <Footer/>
        </Container>
    </div>
  )
}
