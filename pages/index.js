import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Roman | Piano Teacher</title>
        <meta name="description" content="I’m Professional Piano Player, Piano Teacher, Concertmaster." />
        <link rel="icon" href="/assets/RS.png" />
      </Head>
    <Main />
    <About />
    <Skills />
    <Projects />
    <Contact />
    </div>
  )
}
