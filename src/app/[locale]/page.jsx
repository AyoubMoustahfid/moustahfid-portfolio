import Header from "./ui/sections/Header"
import AboutUs from "./ui/sections/AboutUs"
import Sevices from "./ui/sections/Sevices"
import RecentWork from "./ui/sections/RecentWork"
import Testimonials from "./ui/sections/Testimonials"
import Experience from "./ui/sections/Experience"
import Blogs from "./ui/sections/Blogs"


export default function Home() {
  return (
    <main>
      <Header/>
      <AboutUs/>
      <Sevices/>
      <RecentWork/>
      <Testimonials />
      <Experience/>
      <Blogs/>
    </main>
  )
}
