import { Card, Timeline, Footer } from "flowbite-react";
import MyNavbar from "./components/navbar";
import MyFooter from "./components/footer"

function App() {
  return (
    <div>
      <MyNavbar />
      <section id="welcome-panel" className="container mx-auto pt-20 pb-2 px-4">
        <div className = "flex flex-col items-center md:flex md:flex-row md:justify-evenly border rounded ">
            <div className="flex flex-row md:flex md:flex-col md:justify-evenly">
              <h4 className="text-2xl lg:text-7xl md:text-5xl px-2 py-2 font-bold text-white">Welcome 👋🏼</h4>
              <h4 className="text-xl lg:text-6xl md:text-4xl md:mx-auto px-2 py-2 text-white">I'm Zak Goldberg</h4>
            </div>
            <div className="w-1/2 sm:py-4">
              <img className="w-3/4 h-auto py-2 mx-auto md:w-1/2 md:h-auto md:py-5 md:mx-auto" src="/zak_addie.jpg" />
            </div>
        </div>
      </section>
      <section id="Links" className="container mx-auto px-4 py-2">
        <div className = "py-2 flex justify-evenly border rounded text-white">
          <a className="block w-12 h-12 hover:opacity-80 transition-opacity" href="https://github.com/zak-goldberg/" target="_blank" rel="noopener noreferrer">
            <svg className= "w-full h-full fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </a>
          <a className="block w-12 h-12 hover:opacity-80 transition-opacity" href="https://www.linkedin.com/in/zak-goldberg/" target="_blank" rel="noopener noreferrer">
            <svg className= "w-full h-full fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a className="block w-12 h-12 hover:opacity-80 transition-opacity" href="https://www.strava.com/athletes/94927605" target="_blank" rel="noopener noreferrer">
            <svg className= "w-full h-full fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Strava</title>
              <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169"/>
            </svg>
          </a>
          <a className="block w-12 h-12 hover:opacity-80 transition-opacity" href="/" rel="noopener noreferrer">
            <svg className= "w-full h-full fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Spotify</title>
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
          </a>
        </div>
      </section>
      <section id="about-me-cards" className="container mx-auto py-2 px-4">
        <div className = "flex flex-col gap-4 md:flex md:flex-row">
          <Card className="flex-1">
            <h3 className="text-2xl font-bold">Who am I?</h3>
            <p>I am an SF Bay Area based software professional with 9+ years of experience working at Amazon and AWS. I am focused on backend development with the Express, Node, and PostgreSQL stack and am excited to learn new languages and technologies. This page was built using React, Tailwind CSS, and Flowbite React. Click on the links in the navigation bar for more details on my experience or to contact me.</p>
            <p>Outside of work I love spending time with my wife, daughter, and family. I love being outside running, cycling, and xc skiing. I also love to read and follow the Virginia Cavaliers, Orlando Magic, and the Golden State Warriors.</p>
          </Card>
          <Card className="flex-1">
            <h3 className="text-2xl font-bold">Work Summary</h3>
            <Timeline>
              <Timeline.Item>
                <Timeline.Point />
                <Timeline.Content>
                  <Timeline.Time>May 2024</Timeline.Time>
                  <Timeline.Title>Software Development Manager - AWS</Timeline.Title>
                  <Timeline.Body>Managed a team of up to 12 SDEs building backend microservices.</Timeline.Body>
                </Timeline.Content>
                <Timeline.Point />
                <Timeline.Content>
                  <Timeline.Time>Dec 2021</Timeline.Time>
                  <Timeline.Title>Sr. Technical Program Manager - AWS</Timeline.Title>
                  <Timeline.Body>Managed large software projects</Timeline.Body>
                </Timeline.Content>
                <Timeline.Point />
                <Timeline.Content>
                  <Timeline.Time>Jul 2020</Timeline.Time>
                  <Timeline.Title>Technical Program Manager - AWS</Timeline.Title>
                  <Timeline.Body>Managed large software projects</Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
            </Timeline>
          </Card>
        </div>
      </section>
      <MyFooter />
    </div>
  )
}

export default App
