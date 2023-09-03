import React from "react";

import aboutImg from "../../img/aboutImg.png";

import "./About.css";
import Timeline from "./timeline/Timeline";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="about">
      <div className="dFlexFdC">
        <div style={{ marginTop: "3rem" }} className="dFlexSE">
          <div className="aboutLeft">
            <p className="subHeader">
              <span className="headerPink">Hult Prize</span>
            </p>
            <p className="subText">
              Hult Prize is a global, social, entrepreneurship movement which
              challenges University Level Students to give ideas for solving the
              pressing issues of society as per the Annual Theme and awarding 1
              Million US Dollars as a funding to the winning team for the
              selected idea.
            </p>
          </div>
          <div className="aboutRight">
            <img src={aboutImg} alt="" />
          </div>
        </div>
        <hr />
        <p style={{ marginTop: "5rem" }} className="subHeader">
          Stages of <span className="headerPink">Hult Prize</span>
        </p>
        <div className="dFlexSE">
          <div style={{ width: "80vw" }} className="timeline">
            {/* <img src={aboutImg} alt="" /> */}
            <Timeline />
          </div>
          {/* <div className="aboutLeft">
            <p className="subHeader">
              Stages of <span className="headerPink">Hult Prize</span>
            </p>
            <p className="subText">
              <strong>
                <span className="colorPink">| &nbsp;</span>The On-Campus Program
              </strong>
              <p>
                Through the On-Campus Program, students at different colleges
                and universities can run their own Hult Prize events. This round
                consists mostly of formulating and presenting your idea to a
                council of judges, giving a presentation that explains your work
                plan.
              </p>
              <strong>
                <span className="colorPink">| &nbsp;</span>Regionals
              </strong>
              <p>
                17 countries constituting India, Japan, China, Belgium, and the
                UK, host the National Level Hult Prize Competition. Out of the
                100,000 students that compete originally, only 5,000 buckle a
                seat at the 2-day regional summits. The next accelerator round
                only brings in the top 50 startup ideas.
              </p>
              <strong>
                <span className="colorPink">| &nbsp;</span>Accelerator
              </strong>
              <p>
                The best startups from each Regional Summit amass a position in
                the world's largest impact accelerator in Boston, Massachusetts,
                and Hult's castle in the United Kingdom. This six-week-long
                accelerator program aims at educating, identifying, and training
                the teams to compete in the competition and the real world.
              </p>
              <strong>
                <span className="colorPink">| &nbsp;</span>Global Finals
              </strong>
              <p>
                The United Nations hosts the Global Finals in New York. Selected
                teams from the Hult Accelerator program have the opportunity to
                present their ideas to a jury composed of UN representatives,
                previous Hult Prize winners, politicians, and CEOs of
                non-governmental organizations working in areas pertaining to
                the year's theme.
              </p>
            </p>
          </div> */}
        </div>
        <div style={{ marginTop: "5rem" }} className="dFlexSE">
          <div className="aboutLeft">
            <p className="subHeader">
              2024 Theme{" "}
              <span className="headerPink">
                {" "}
                <br />
                Jo bhii naam hai theme ka
              </span>
            </p>
            <p className="subText">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
              eos autem nihil ducimus odio ullam dignissimos et fugiat
              perferendis, aspernatur laborum illo dicta hic ipsum fugit rerum
              asperiores molestiae, quos explicabo expedita porro earum
              incidunt, quibusdam laudantium. Non dolor reiciendis corporis
              soluta iusto ad perspiciatis ipsam, impedit totam itaque unde.
            </p>
          </div>
          <div className="aboutRight">
            <img src={aboutImg} alt="" />
          </div>
        </div>
        <div style={{ marginTop: "5rem" }} className="dFlexSE">
          <div className="aboutRight">
            <img src={aboutImg} alt="" />
          </div>
          <div className="aboutLeft">
            <p className="subHeader">
              Hult Prize OnCampus{" "}
              <span className="headerPink">
                <br />
                Bhilai Institute of Technology, Durg
              </span>
            </p>
            <p className="subText">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
              eos autem nihil ducimus odio ullam dignissimos et fugiat
              perferendis, aspernatur laborum illo dicta hic ipsum fugit rerum
              asperiores molestiae, quos explicabo expedita porro earum
              incidunt, quibusdam laudantium. Non dolor reiciendis corporis
              soluta iusto ad perspiciatis ipsam, impedit totam itaque unde.
            </p>
          </div>
        </div>
        <div style={{ marginTop: "5rem" }} className="dFlexSE">
          <div className="aboutLeft">
            <p className="subHeader">
              Be a Part of &nbsp;
              <span className="headerPink">Organizing Team</span>
            </p>
            <p className="subText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
              repudiandae quas. Vel nemo recusandae architecto eius quae tenetur
              ullam iure deserunt doloribus eligendi repellat dolorem amet
              consectetur similique non cupiditate dolor, dolore repellendus
              itaque delectus ab maiores. Optio, necessitatibus nostrum!
            </p>
            <Link
              to="/register"
              target="_blank"
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "bold",
              }}
            >
              <p style={{ textAlign: "left", textDecoration: "none" }}>
                Register NOW!
              </p>
            </Link>
          </div>
          <div
            className="aboutRight"
            style={{ width: "10vw", overflow: "hidden", alignItems: "center" }}
          >
            <img src={aboutImg} alt="" width={10} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
