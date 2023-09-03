import React from "react";

import "./Timeline.css";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Timeline() {
  return (
    <div className="timeline">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "var(--btn-bg)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  var(--btn-bg)" }}
          //   date="2011 - present"
          dateClassName={"dateClassName"}
          //   style={{ color: "black" }}
          iconStyle={{ background: "var(--btn-bg)", color: "#fff" }}
          //   icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">OnCampus </h3>
          <h4 className="vertical-timeline-element-subtitle">BIT, Durg</h4>
          <p className="subText">
            Through the On-Campus Program, students at different colleges and
            universities can run their own Hult Prize events. This round
            consists mostly of formulating and presenting your idea to a council
            of judges, giving a presentation that explains your work plan.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          //   date="2010 - 2011"
          dateClassName={"dateClassName"}
          iconStyle={{ background: "rgb(221, 221, 221)", color: "#fff" }}
          //   icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Regionals</h3>
          {/* <h4 className="vertical-timeline-element-subtitle">
            "To be notified"
          </h4> */}
          <p className="subText">
            17 countries constituting India, Japan, China, Belgium, and the UK,
            host the National Level Hult Prize Competition. Out of the 100,000
            students that compete originally, only 5,000 buckle a seat at the
            2-day regional summits. The next accelerator round only brings in
            the top 50 startup ideas.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: "7px solid  var(--btn-bg)" }}
          contentStyle={{ background: "var(--btn-bg)", color: "#fff" }}
          //   date="2008 - 2010"
          iconStyle={{
            background: "var(--btn-bg)",
            color: "#fff",
          }}
          dateClassName={"dateClassName"}
          //   icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Accelators</h3>
          {/* <h4 className="vertical-timeline-element-subtitle">
            Los Angeles, CA
          </h4> */}
          <p className="subText">
            The best startups from each Regional Summit amass a position in the
            world's largest impact accelerator in Boston, Massachusetts, and
            Hult's castle in the United Kingdom. This six-week-long accelerator
            program aims at educating, identifying, and training the teams to
            compete in the competition and the real world.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          //   date="2010 - 2011"
          dateClassName={"dateClassName"}
          iconStyle={{ background: "rgb(221, 221, 221)", color: "#fff" }}
          //   icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Global Finals</h3>
          {/* <h4 className="vertical-timeline-element-subtitle">
            "To be notified"
          </h4> */}
          <p className="subText">
            17 countries constituting India, Japan, China, Belgium, and the UK,
            host the National Level Hult Prize Competition. Out of the 100,000
            students that compete originally, only 5,000 buckle a seat at the
            2-day regional summits. The next accelerator round only brings in
            the top 50 startup ideas.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "var(--btn-bg)", color: "#fff" }}
          //   icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
