import { Cards } from "../components/Cards"
import { Container } from "../components/Container"
import { DiscoverOurWork } from "../components/DiscoverOurWork"
import { Hero } from "../components/Hero"
import { MenuExpanded } from "../components/MenuExpanded"



export default function Home() {
  return (
    <div>
      <Container>
        
        <div className="bg-black">
          <Hero />
          <div className="grid gap-20 mt-20">
            <Cards />
            <Cards />
          </div>
          <DiscoverOurWork />
        </div>
      </Container>
    </div>
  )
}
