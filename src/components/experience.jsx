import { Card, Timeline } from "flowbite-react";

const Experience = () => {
  return (
    <>
      <div className="pt-20 px-4">
        <Card className="flex-1 container mx-auto">
          <h3 className="text-2xl font-bold">Work Experience</h3>
          <Timeline>
            <Timeline.Item>
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Time>May 2024</Timeline.Time>
                <Timeline.Title>
                  Software Development Manager - AWS
                </Timeline.Title>
                <Timeline.Body>
                  Managed a team of up to 12 SDEs building backend
                  microservices.
                </Timeline.Body>
              </Timeline.Content>
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Time>Dec 2021</Timeline.Time>
                <Timeline.Title>
                  Sr. Technical Program Manager - AWS
                </Timeline.Title>
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
    </>
  );
};

export default Experience;
