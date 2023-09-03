import React, { useState } from "react";
import logo from "../../img/logo.png";
import "./Register.css";
import AlertComponent from "./alertComponent/AlertComponent";

function Register() {
  const pass = "Kl8ZBZUY8F2TE4z5";

  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [contactNumber, setcontactNumber] = useState("");
  const [branch, setbranch] = useState("");
  const [domain, setdomain] = useState("");
  const [semester, setsemester] = useState("");
  const [que1, setque1] = useState("");
  const [que2, setque2] = useState("");
  const [que3, setque3] = useState("");
  const [que4, setque4] = useState("");
  const [taskLink, settaskLink] = useState("");

  const [succMsg, setSuccMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    var userData = {
      fname,
      lname,
      email,
      contactNumber,
      branch,
      domain,
      semester,
      que1,
      que2,
      que3,
      que4,
      taskLink,
    };
    if (validate(userData)) {
      if (errors.empty) {
        setErrMsg(errors.empty);
        // errors = {};
      }
      if (errors.email) {
        setErrMsg(errors.email);
        // errors = {};
      }

      if (errors.noError) {
        try {
          const response = await fetch("http://127.0.0.1:5000/registrations", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          });

          const resPonse = await response.json();
          // console.log(resPonse);
          if (resPonse.status === 200) {
            setfname("");
            setlname("");
            setbranch("");
            setsemester("");
            setdomain("");
            setcontactNumber("");
            setque1("");
            setque2("");
            setque3("");
            setque4("");
            settaskLink("");
            setSuccMsg("Form submitted Successfully...");
          } else if (resPonse.status === 500) {
            setErrMsg("Error : " + resPonse.msg);
          } else if (resPonse.status === 400) {
            setErrMsg("Error : " + resPonse.msg);
          }
        } catch (err) {
          setErrMsg("some error has occured" + err);
        }
      }
    }
    // console.log(userData);
    else {
    }
  };

  const handleClose = () => {
    setErrMsg("");
    setSuccMsg("");
  };

  var errors = {};

  const validate = (values) => {
    if (
      !values.fname ||
      !values.lname ||
      !values.email ||
      !values.contactNumber ||
      !values.branch ||
      !values.semester ||
      !values.domain ||
      !values.que1 ||
      !values.que2 ||
      !values.que3 ||
      !values.que4 ||
      !values.taskLink
    ) {
      errors.empty = "Fields * marked cannot be empty...";
      // alert("'*' fields cannot be empty...");
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid Email";
      // setErrMsg("Invalid Email...");
    } else if (
      /"^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"/gim.test(
        values.contactNumber
      )
    ) {
      // errMsg("Invalid Contact Number...");
      alert("Invalid number");
    } else {
      errors.noError = true;
    }
    return errors;
  };

  return (
    <div className="register">
      {succMsg && (
        <AlertComponent succMsg={succMsg} handleClose={handleClose} />
      )}
      {errMsg && <AlertComponent errMsg={errMsg} handleClose={handleClose} />}
      {/* <div className="regHeader">
        <div className="regLeft">
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
          <a href="#register">
            <p>Register NOW!</p>
          </a>
        </div>
        <div className="regRight">
          <img src={logo} alt="" />
        </div>
      </div> */}
      <div id="register" className="regSection">
        <span className="header">
          Become an <span className="headerPink">Associate</span>
        </span>
        <p className="subHeader">
          <span className="colorPink">|</span> Points to Remember
        </p>
        <ul>
          <li className="subText">
            Fill the details with appropriate answers.
          </li>
          <li className="subText">
            Fields marked as <span className="colorPink">*</span> are mandatory.
          </li>
          <li className="subText">
            Go through the tasks carefully and paste an appropriate link of
            google docs with .
          </li>
          <li className="subText">
            Know more about Hult Prize.{" "}
            <a href="" className="colorPink">
              About Us
            </a>
          </li>
          <li className="subText">
            Want some resources.{" "}
            <a href="" className="colorPink">
              Resources
            </a>
          </li>
          <li className="subText">
            Still find any difficulty.{" "}
            <a href="" className="colorPink">
              Contact Us
            </a>
          </li>
        </ul>
        <form
          action=""
          style={{ width: "70%", margin: "0 auto" }}
          onSubmit={handleOnSubmit}
        >
          <div className="form-details">
            <span style={{}}>
              <strong>Personal Info</strong>
            </span>

            <div className="dFlexSE">
              <input
                type="text"
                placeholder="First Name*"
                value={fname}
                onChange={(e) => setfname(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last Name*"
                value={lname}
                onChange={(e) => setlname(e.target.value)}
              />
            </div>
            <div className="dFlexSE">
              <input
                type="text"
                placeholder="Email*"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
              <input
                type="number"
                placeholder="Contact Number*"
                value={contactNumber}
                onChange={(e) => setcontactNumber(e.target.value)}
              />
            </div>
            <div className="dFlexSE">
              <select
                type="text"
                placeholder="Branch*"
                value={branch}
                onChange={(e) => setbranch(e.target.value)}
              >
                <option value="none">Select Branch</option>
                <option value="cse">Civil</option>
                <option value="cse">CSE</option>
                <option value="csai">CSAI</option>
                <option value="csds">CSDS</option>
                <option value="csds">EE</option>
                <option value="csds">EEE</option>
                <option value="csds">ETC</option>
              </select>
              <select
                type="text"
                placeholder="Semeser*"
                value={semester}
                onChange={(e) => setsemester(e.target.value)}
              >
                <option value="none">Select Semester</option>
                <option value="3">3</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className="dFlexSE">
              <select
                name=""
                id=""
                value={domain}
                onChange={(e) => setdomain(e.target.value)}
              >
                <option value="none">Select Domain</option>
                <option value="camera">Camera</option>
                <option value="content">Content</option>
                <option value="event">Event Management</option>
                <option value="graphics">Graphics</option>
                <option value="pr">Public Relations</option>
                <option value="sponsorship">Sponsorship</option>
                <option value="marketing">Marketing</option>
                <option value="videoDesigning">Video Designing</option>
              </select>
            </div>
          </div>
          <div className="form-details">
            <span>
              <strong>Questions</strong>
            </span>
            <div className="questions">
              <div className="questions-inner">
                <label htmlFor="">What do you understand by Hult Prize?*</label>
                <textarea
                  type="text"
                  placeholder="Enter your answer here..."
                  value={que1}
                  onChange={(e) => setque1(e.target.value)}
                />
              </div>
              <div className="questions-inner">
                <label htmlFor="">
                  Any prior experience for the Selected Domain?*
                </label>
                <textarea
                  type="text"
                  placeholder="Enter your answer here..."
                  value={que2}
                  onChange={(e) => setque2(e.target.value)}
                />
              </div>
              <div className="questions-inner">
                <label htmlFor="">What do you understand by Hult Prize?*</label>
                <textarea
                  type="text"
                  placeholder="Enter your answer here..."
                  value={que3}
                  onChange={(e) => setque3(e.target.value)}
                />
              </div>
              <div className="questions-inner">
                <label htmlFor="">What do you understand by Hult Prize?*</label>
                <textarea
                  type="text"
                  placeholder="Enter your answer here..."
                  value={que4}
                  onChange={(e) => setque4(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="form-details">
            <span>
              <strong>Task </strong>
            </span>
            <div className="task-inner">
              <span>
                {/* <strong>Graphics Executive -</strong>
                <br /> Design a poster/instagram post for recruitment of
                Associates and Volunteers for Hult Prize BITD. <br /> <br />
                <strong>Content Executive -</strong> <br />
                1. Write an email to a known personality for inviting her/him as
                a Judge for the semifinals of Hult Prize BITD On-Campus Round.{" "}
                <br />
                2. Propose Instagram post captions that depict the comeback of
                Hult Prize BITD. <br /> <br />
                <strong>Sponsorship Executive -</strong>
                <br />
                1. List any 3 start-ups/companies that can be invited as
                sponsors for the event and also mention the reason why you chose
                them. <br />
                2. Explain the approach you utilise when presenting your
                sponsorship pitch. <br /> <br />
                <strong>Public Relations -</strong>
                <br />
                1. Mention names, socials and contacts of commendable speakers
                and suggest a judge for the Hult Prize On-Campus Finals. <br />
                2. Outline the tactics you intend to employ when engaging with a
                speaker or judge. <br /> <br />
                <strong>Marketing Executive -</strong>
                <br />
                1. Propose a marketing strategy for promoting Hult Prize all
                over the BIT Durg Campus. <br />
                2. Suggest ideas for Team Revelation. <br /> <br />
                <strong>Video Designing and Camera Executive -</strong>
                <br />
                Design an instagram reel for the introduction for Hult Prize
                BITD. <br /> <br />
                <strong>Event Management Executive -</strong>
                <br />
                1. Propose a strategy for conducting an online session for Hult
                Prize BITD with famous personalities as speakers. <br />
                2. Describe in brief how you will smoothly conduct Hult Prize
                On-Campus Finals, with different teams coming in to pitch their
                ideas. <br /> */}
                Here we are with some of the Task Lists, kindly do it for your
                SELECTED DOMAIN(s) in the google docs and paste your link in the
                below input box with access to 'Anyone with the Link' as
                'Viewer/Editor'
                <br />
                <br />
                <a className="colorPink" href="">
                  Task Lists
                </a>
              </span>

              <input
                style={{ marginTop: "1rem" }}
                type="text"
                name=""
                id=""
                placeholder="Paste your Link here..."
                value={taskLink}
                onChange={(e) => settaskLink(e.target.value)}
              />
            </div>
          </div>
          <button onClick={handleOnSubmit}>SUBMIT</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
