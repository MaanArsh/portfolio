import Navbar from "./components/navbar";
import Homemenu from "./components/homemenu";
import About from "./components/about";
import Skills from "./components/skills";
import Hobbies from "./components/hobbies"
import CarrerGoals from "./components/carrergoals"
import WorkExperience from "./components/workexp"
import Project from "./components/project"
import Contact from "./components/contact"


export default function Home() {
  return (
    <main className="w-screen h-fit">
      <nav id="intro">
        <Navbar />
      </nav>

      <section className="text-white">
        <Homemenu />
      </section>

      <section>
        <About />
      </section>

      <section>
        <Skills />
      </section>

      <section>
        <Hobbies />
      </section>

      <section>
        <CarrerGoals />
      </section>

      <section>
        <Project />
      </section>

      <section>
        <WorkExperience />
      </section>

      <section>
        <Contact />
      </section>
    </main>
  );
}
