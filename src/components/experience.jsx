import { Card, Timeline } from "flowbite-react";

const Experience = () => {
  return (
    <>
      <div className="container mx-auto px-4 pt-20">
        <Card className="flex-1">
          <h3 className="text-2xl font-bold">Work Experience</h3>
          <Timeline>
            <Timeline.Item>
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Time>May 2024</Timeline.Time>
                <Timeline.Title>Software Development Manager</Timeline.Title>
                <h5 className="font-light">AWS - Bellevue, WA</h5>
                <Timeline.Body>
                  I managed a team of 12 software engineers and owned 6 backend
                  microservices. I was responsible for people management,
                  technical and product strategy development, roadmap planning,
                  sprint planning, and system operations. I delivered consistent
                  feedback, planned career growth, and managed underperformance
                  as a people manager. I supported the delivery of multiple
                  complex development initiatives including new feature
                  releases, non-functional improvements (e.g. latency &
                  availability), and stack regionalization.
                </Timeline.Body>
              </Timeline.Content>
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Time>Dec 2021</Timeline.Time>
                <Timeline.Title>Sr. Technical Program Manager</Timeline.Title>
                <h5 className="font-light">AWS - Bellevue, WA</h5>
                <Timeline.Body>
                  I led multiple large software projects within AWS
                  Infrastructure. These included a project to synchronize
                  hundreds of thousands of data center assets across multiple
                  systems, and to provide suppliers a mechanism to post data for
                  new assets as part of the build process. I also led a project
                  to develop the front end and mechanisms for authentication,
                  identity management, and authorization for a portal used by
                  500k+ Amazon vendors and temporary workers to register for
                  COVID testing.
                </Timeline.Body>
              </Timeline.Content>
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Time>Jul 2020</Timeline.Time>
                <Timeline.Title>Technical Program Manager</Timeline.Title>
                <h5 className="font-light">AWS - Seattle, WA</h5>
                <Timeline.Body>
                  I led a team of 6 software engineers to develop the software I
                  proposed in the Build Coordination PR-FAQ through all phases
                  of the
                  <a
                    href="https://en.wikipedia.org/wiki/Systems_development_life_cycle"
                    target="_blank"
                    className="mx-1 hover:text-black underline"
                  >
                    SDLC
                  </a>
                  (planning, execution, testing, and release). This software is
                  now used as the single source of truth for data center builds
                  and testing across AWS' global data center network.
                </Timeline.Body>
              </Timeline.Content>
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Time>Jul 2019</Timeline.Time>
                <Timeline.Title>Technical Program Manager</Timeline.Title>
                <h5 className="font-light">AWS - Seattle, WA</h5>
                <Timeline.Body>
                  I managed relationships with internal software development
                  teams and external software vendors on behalf of the
                  Construction divison of AWS Infrastructure. I wrote a vision
                  document for software to coordinate power, space, and cooling
                  builds within new data centers ("Build Coordination PR-FAQ")
                  and secured funding for the project. I also led an effort to
                  license external software to manage data center construction
                  projects and to coordinate with subcontractors.
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Time>Mar 2018</Timeline.Time>
                <Timeline.Title>Program Manager</Timeline.Title>
                <h5 className="font-light">AWS - Seattle, WA</h5>
                <Timeline.Body>
                  I managed power, space, and cooling availability for server
                  racks incoming to AWS' data centers.
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Time>Jun 2016</Timeline.Time>
                <Timeline.Title>Program Manager</Timeline.Title>
                <h5 className="font-light">Amazon.com - Seattle, WA</h5>
                <Timeline.Body>
                  I managed vendor relationships, in-stock, and promotions for
                  arts & crafts items and vacuums sold by Amazon.com.
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Time>Jun 2014</Timeline.Time>
              </Timeline.Content>
            </Timeline.Item>
          </Timeline>
        </Card>
      </div>
    </>
  );
};

export default Experience;
