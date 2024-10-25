import { Navbar, Card, Timeline } from "flowbite-react";
import { Laptop } from "lucide-react";

function App() {
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4">
        <Navbar fluid rounded border className="bg-gray-800">
          <Navbar.Brand href="/">
            <Laptop className="text-white mr-3 h-6 sm:h-9" alt="logo icon"/>
            <span className="self-center whitespace-nowrap text-xl font-semibold text-white">Zak Goldberg</span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Link href="#Experience" className= "text-white">Experience</Navbar.Link>
            <Navbar.Link href="#Contact" className= "text-white">Contact</Navbar.Link>
            <Navbar.Link href="#Resume" className= "text-white">Resume</Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
        </div>
      </div>
      <section className="container mx-auto pt-20 pb-5 px-4">
        <div className = "flex flex-col justify-between max-h-72 space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          <Card className="flex-1 w-full md:w-1/2 max-w-md">
            <div className="h-full flex flex-col justify-center">
              <h4 className="text-5xl font-bold mb-2">Welcome 👋🏼</h4>
              <h4 className="text-4xl">My Name is <span className="font-semibold">Zak</span></h4>
            </div>
          </Card>
          <Card className="flex-1 w-full md:w-1/2 max-w-lg p-0">
            <img className="h-auto w-auto object-none" src="/zjg_headshot.jpg" />
          </Card>
        </div>
      </section>
      <section className="container mx-auto py-5 max-h-72 px-4">
        <div className = "flex flex-col justify-between space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          <Card className="flex-1 w-full md:w-1/2 max-w-md">
          <p>I am an SF Bay Area based software professional with 9+ years of experience working at Amazon and AWS. I am focused on backend development with the Express, Node, and PostgreSQL stack and am excited to learn new languages and technologies.</p>
          </Card>
          <Card>
            <Timeline>
              <Timeline.Item>
                <Timeline.Point />
                <Timeline.Content>
                  <Timeline.Time>February 2022</Timeline.Time>
                  <Timeline.Title>Software Development Manager - AWS</Timeline.Title>
                  <Timeline.Body>Managed a team of 12 SDEs</Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
            </Timeline>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default App
