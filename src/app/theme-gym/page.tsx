import Hero from './components/Hero'
import About from './components/About'
import Programs from './components/Programs'
import Trainers from './components/Trainers'

export default function GymThemePage() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <About />
      <Programs />
      <Trainers />
    </div>
  )
}
