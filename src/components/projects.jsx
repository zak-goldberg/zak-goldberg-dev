import { Card } from "flowbite-react";
import {
  NodeIcon,
  ExpressIcon,
  PsqlIcon,
  MochaIcon,
  ReactIcon,
  ReactRouterIcon,
  TailwindIcon,
  MongoIcon
} from "./si-icons";
import { Puzzle } from "lucide-react";

const Projects = () => {
  return (
    <>
      <div className="container mx-auto px-4 pt-20 flex flex-col gap-2 md:grid md:grid-cols-3">
        <Card>
          <h3 className="text-xl font-bold">Personal Budget Web Service</h3>
          <p>
            End-to-end webservice with APIs for CRUD operations on budget
            envelopes and expenses. Includes automated tests for all API routes.
          </p>
          <a
            href="https://github.com/zak-goldberg/personal-budget-2"
            className="hover:text-black underline"
          >
            Link to repo
          </a>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex gap-2">
              <NodeIcon />
              <span>Node.JS</span>
            </div>
            <div className="flex gap-2">
              <ExpressIcon />
              <span>Express.JS</span>
            </div>
            <div className="flex gap-2">
              <PsqlIcon />
              <span>PostgreSQL</span>
            </div>
            <div className="flex gap-2">
              <MochaIcon />
              <span>Mocha & Chai</span>
            </div>
          </div>
        </Card>
        <Card>
          <h3 className="text-xl font-bold">zak-goldberg.dev</h3>
          <p>
            Personal website written using React.JS and built with Vite. Used
            React Router for page routing and client side loading.
          </p>
          <a
            href="https://github.com/zak-goldberg/zak-goldberg-dev/"
            className="hover:text-black underline"
          >
            Link to repo
          </a>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex gap-2">
              <ReactIcon />
              <span>React.JS</span>
            </div>
            <div className="flex gap-2">
              <ReactRouterIcon />
              <span>React Router</span>
            </div>
            <div className="flex gap-2">
              <TailwindIcon />
              <span>Tailwind CSS</span>
            </div>
            <div className="flex gap-2">
              <Puzzle />
              <span>Flowbite React</span>
            </div>
          </div>
        </Card>
        <Card>
          <h3 className="text-xl font-bold">Listening To Page</h3>
          <p>
            Chron job to fetch my Spotify listening data, storing it in a
            database, and serving it via an API to this app.
          </p>
          <a>Link to repo TBD</a>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex gap-2">
              <NodeIcon />
              <span>Node.JS</span>
            </div>
            <div className="flex gap-2">
              <ExpressIcon />
              <span>Express.JS</span>
            </div>
            <div className="flex gap-2">
              <MongoIcon />
              <span>MongoDB</span>
            </div>
            <div className="flex gap-2">
              <MochaIcon />
              <span>Mocha & Chai</span>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Projects;
