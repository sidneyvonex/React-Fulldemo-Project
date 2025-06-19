import { Layout } from "../Components/Dashboard-Design/Layout"
import { Footer } from "../Components/Footer"
import { Navbar } from "../Components/Navbar"

export const Dashboard = () => {
  return (
    <div className="h-screen">
        <Navbar/>
        <Layout/>
        <Footer/>
    </div>
  )
}
