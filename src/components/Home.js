import './App.css';
import './W3Schools.css';
import { useState, useEffect } from "react";
import Papa from 'papaparse'; // for csv parsing
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const CustomTooltip = ({ active, payload, byWeek }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        backgroundColor: '#fff',
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '10px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
      }}>
        <p style={{ color: '#000' }}>{`${byWeek ? 'Week of: ' : 'Date:'} ${payload[0].payload.date}`}</p>
        <p style={{ color: '#cc9102' }}>{`Hours: ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

function App() {
  //using "useState" to store and set the hoursString and embed it in the website.
  const [hoursString, setHoursString] = useState("");
  const [dayHours, setDayHours] = useState([])
  const [members, setMembers] = useState([]);
  const [byWeek, setByWeek] = useState(false)


  //useEffect hook will only run a single time when the website is initally rendered,
  //due to the empty [] dependency array at the end.
  useEffect(() => {
    // const generateDate = (dateString) => {
    //   const [month, day] = dateString.split('/').map(Number); // Convert to numbers
    //   return new Date(new Date().getFullYear(), month - 1, day); // Month is zero-based
    // }

    const generateDateRange = (startDate, endDate, byWeek = false) => {
      const dateArray = [];

      // let currentDate = generateDate(startDate);
      // let lastDate = generateDate(endDate);
      let currentDate = startDate
      let lastDate = endDate

      let dayDelta = byWeek ? 7 : 1;

      while (currentDate <= lastDate) {
        const month = String(currentDate.getMonth() + 1); // getMonth() is zero-based
        const day = String(currentDate.getDate());
        dateArray.push(`${month}/${day}`);
        currentDate.setDate(currentDate.getDate() + dayDelta);
      }
      return dateArray;
    };


    const calcYear = (date) => {
      let today = new Date();
      let isSpring = ((today.getMonth() + 1) < 8)

      let month = parseInt(date.slice(0, date.indexOf('/')));

      if (isSpring) {
        if (month >= 8) {
          return (parseInt(today.getFullYear()) - 1)
        } else {
          return (parseInt(today.getFullYear()))
        }
      } else {
        if (month >= 8) {
          return (parseInt(today.getFullYear()))
        } else {
          return (parseInt(today.getFullYear()) + 1)
        }
      }
    }

    function roundToNearestSunday(date) {
      const dayOfWeek = date.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
      const daysToSunday = dayOfWeek < 4 ? -dayOfWeek : 7 - dayOfWeek;

      const roundedDate = new Date(date);
      roundedDate.setDate(date.getDate() + daysToSunday);

      return roundedDate;
    }


    //update the hoursString
    const url = "https://script.google.com/macros/s/AKfycbxmxv5xBwQbyV30R-db_NcGsGFKgCKUVRE0lMMIPOgPLep6GczGD2O2GYvuuHNPa2-u1w/exec"
    fetch(url).then(response => response.json()).then(data_obj => {
      console.log(data_obj)
      let data = data_obj.hours
      setByWeek(data_obj.byWeek)

      let totalHours = 0;
      for (let value of Object.values(data)) {
        totalHours += parseFloat(value);
      }
      totalHours = totalHours.toFixed(2);

      var txt = document.createElement("span");
      let hours = parseInt(totalHours);
      let min = parseInt((totalHours - hours) * 60);

      // format the hours string
      var output = hours;
      if (hours === 1) output += " hour";
      else output += " hours";
      output += " and " + min;
      if (min === 1) output += " minute";
      else output += " minutes";

      txt.innerHTML = totalHours;
      console.log("Fetched hours from spreadsheet: " + output);
      setHoursString(output);


      // process the bar graph data
      let formattedData = Object.keys(data).map(day => ({
        date: day,
        hours: parseFloat(data[day]),
        dateObj: new Date(`${calcYear(day)}/${day}`)
      }));

      // round the dates to the nearest sunday if byWeek is true
      if (data_obj.byWeek) {
        formattedData = formattedData.map(obj => {
          const roundedDate = roundToNearestSunday(obj.dateObj);
          return {
            date: `${roundedDate.getMonth() + 1}/${roundedDate.getDate()}`,
            hours: obj.hours,
            dateObj: roundedDate
          }
        });
      }
      console.log('received hours data:')
      console.log(formattedData)


      // sort the dates chronologically
      let sortedDates = formattedData.sort((a, b) => {
        return a.dateObj - b.dateObj;
      });

      let filledDailyCnt = null;


      // fill in the data
      const startDate = sortedDates.length > 0 ? sortedDates[0].dateObj : null;
      const endDate = sortedDates.length > 0 ? sortedDates[sortedDates.length - 1].dateObj : null;
      const dataMap = new Map(sortedDates.map(day => [day.date, day.hours]));

      // if (data_obj.byWeek) {
      //   filledDailyCnt = formattedData
      // } else {
      if (startDate && endDate) {
        console.log(startDate)
        console.log(endDate)
        const allDates = generateDateRange(startDate, endDate, data_obj.byWeek);

        // Fill in missing dates with 0
        console.log('alldates:')
        console.log(allDates)

        console.log('datamap:')
        console.log(dataMap)

        filledDailyCnt = allDates.map(date =>
        ({
          date: date,
          hours: dataMap.get(date) || 0
        }));
      }
      // }

      console.log("filledDailyCnt: ")
      console.log(filledDailyCnt)
      setDayHours(filledDailyCnt)
    })

    //parse and store the member data
    fetch('members.csv')
      .then((response) => response.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            //console.log("results: ");
            //console.log(results);
            setMembers(results.data);
          },
        });
      });
  }, []);

  // This defines a "BRGT event" react component that is rendered later in the jsx return function.
  // The line below ignores annoying linter errors when the BRGTevent is commented out
  // eslint-disable-next-line
  const BRGTevent = () => {
    return (
      <>
        <div className="announcement" id="join" />
        <h2 className="title">SAVE THE DATE!</h2>
        <div className="announcement">
          <div className="announcement-list">
            <h4>
              This year the national competition is being held in the Purdue Armory
              on <b>Saturday, April 6th</b> and doors open at 8:00am. Our team will
              compete at 2:00pm and you can watch either in person or you can watch
              us on the livesteam, just click{" "}
              <a href="https://www.youtube.com/watch?v=z3H576_HlKI">here</a>. The
              event is free to attend and there is free parking across the street in
              the parking garage
              <br />
              <br />
              <b>Locations:</b>
              <br />
              Purdue Armory:{" "}
              <a href="https://maps.app.goo.gl/vyWh4iJWkKtNz38a6">
                812 3rd Street, West Lafayette, IN 47907
              </a>
              <br />
              Parking: (University Street Parking Garage){" "}
              <a href="https://maps.app.goo.gl/jcQFZrf813EDguKK7">
                201 N. University St, West Lafayette, IN 47907
              </a>
              <br />
              <br />
              More information found{" "}
              <a href="https://www.rubegoldberg.org/rube-goldberg-contests/the-rube-goldberg-machine-contest/">
                here
              </a>{" "}
              at the official Rube Goldberg website
            </h4>
          </div>
        </div>

        {/* Google maps window: Go to here to create a different one: https://www.embed-map.com/ */}
        <center>
          <div
            style={{
              textDecoration: "none",
              overflow: "hidden",
              maxWidth: "100%",
              width: 500,
              height: 250,
              borderRadius: 10,
              marginTop: 15
            }}
          >
            <div
              id="google-maps-canvas"
              style={{ height: "100%", width: "100%", maxWidth: "100%" }}
            >
              <iframe
                style={{ height: "100%", width: "100%", border: 0 }}
                frameBorder={0}
                title="Location of the event"
                src="https://www.google.com/maps/embed/v1/place?q=Purdue+Armory,+812+3rd+Street,+West+Lafayette,+Indiana,+USA&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&maptype=roadmap&zoom=15"
              ></iframe>
            </div>
            <a
              className="code-for-google-map"
              rel="nofollow"
              href="https://kbj9qpmy.com/hrn"
              id="grab-maps-authorization"
            >
              Hosting Right Now
            </a>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n        #google-maps-canvas img {\n          max-width: none !important;\n          background: none !important;\n          font-size: inherit;\n          font-weight: inherit;\n        }\n      "
              }}
            />
          </div>
        </center>
      </>
    )
  };

  // Used to toggle the menu on small screens when clicking on the menu button
  function toggleMenu() {
    var x = document.getElementById("navDemo");
    if (x) {
      if (x.className.indexOf("w3-show") === -1) {
        x.className += " w3-show";
      } else {
        x.className = x.className.replace(" w3-show", "");
      }
    } else {
      console.log("toggleMenu(): Could not find 'navDemo' element");
    }
  }

  return (
    <>
      <header style={{ position: "relative" }}>
        {/*Top Navbars*/}
        <div className="w3-top; header" id="home">
          <div
            className="w3-bar  w3-card w3-left-align w3-large heeder-large-screen"
            style={{ backgroundColor: "var(--navBar)", fontFamily: '"text"' }}
          >
            <button
              className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-black w3-large"
              style={{ color: "var(--navBarText)", border: "none", background: "none", cursor: "pointer" }}
              onClick={toggleMenu}
              title="Toggle Navigation Menu"
            >
              <i className="fa fa-bars" />
            </button>
            <div>
              {/*Large screen navbar*/}
              <a
                href="#about"
                className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-black"
                style={{ color: "var(--navBarText)" }}
              >
                About
              </a>
              <a
                href="#machine"
                className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-black"
                style={{ color: "var(--navBarText)" }}
              >
                Our Machine
              </a>
              <a
                href="#about us"
                className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-black"
                style={{ color: "var(--navBarText)" }}
              >
                About Us
              </a>
              <a
                href="#history"
                className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-black"
                style={{ color: "var(--navBarText)" }}
              >
                History
              </a>
              <a
                href="#outreach"
                className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-black"
                style={{ color: "var(--navBarText)" }}
              >
                Outreach
              </a>
              {/*<a href="#sponsor" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-black" style="color:var(--navBarText)">Sponsors</a>*/}
              <a
                href="#support"
                className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-black"
                style={{ color: "var(--navBarText)" }}
              >
                Support Us
              </a>
              <a
                href="#contact"
                className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-black"
                style={{ color: "var(--navBarText)" }}
              >
                Contact
              </a>
            </div>
          </div>
          {/* Navbar on small screens */}
          <div
            id="navDemo"
            className="w3-bar-block w3-show w3-hide-large w3-hide-medium w3-large"
            style={{ color: "var(--navBarText)", fontFamily: '"text"' }}
          >
            <a
              href="#about"
              className="w3-bar-item w3-button w3-padding-large"
              onClick={toggleMenu()}
              style={{ color: "var(--navBarText)" }}
            >
              About
            </a>
            <a
              href="#machine"
              className="w3-bar-item w3-button w3-padding-large"
              onClick={toggleMenu()}
              style={{ color: "var(--navBarText)" }}
            >
              Our Machine
            </a>
            <a
              href="#about us"
              className="w3-bar-item w3-button w3-padding-large"
              onClick={toggleMenu()}
              style={{ color: "var(--navBarText)" }}
            >
              About Us
            </a>
            <a
              href="#history"
              className="w3-bar-item w3-button w3-padding-large"
              onClick={toggleMenu()}
              style={{ color: "var(--navBarText)" }}
            >
              History
            </a>
            <a
              href="#outreach"
              className="w3-bar-item w3-button w3-padding-large"
              onClick={toggleMenu()}
              style={{ color: "var(--navBarText)" }}
            >
              Outreach
            </a>
            {/*<a href="#sponsor" class="w3-bar-item w3-button w3-padding-large" onClick="toggleMenu()" style="color:var(--navBarText)">Sponsors</a>*/}
            <a
              href="#support"
              className="w3-bar-item w3-button w3-padding-large"
              onClick={toggleMenu()}
              style={{ color: "var(--navBarText)" }}
            >
              Support Us
            </a>
            <a
              href="#contact"
              className="w3-bar-item w3-button w3-padding-large"
              onClick={toggleMenu()}
              style={{ color: "var(--navBarText)" }}
            >
              Contact
            </a>
          </div>
        </div>
      </header>
      <section>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <div className="hero" id="about">
          <div className="hero-description">
            <div className="hero-text">
              {/*Background Image for Title*/}
              <img
                id="background-video"
                src="Background.webp"
                alt="Team"
                preload="none"
              />
              {/*Title*/}
              <h1 className="hero-title">Boilermaker Rube Goldberg Team</h1>
              {/*Description under title*/}
              <p>
                Were you wondering about the Boilermaker Rube Goldberg Team? Well
                you've come to the right place! While Purdue has had multiple Rube
                Goldberg Teams, our team is proud to be the longest lasting and to
                have won the national competition many times throughout its
                existence, the most recent of which was just this last year. We've
                also appeared on Jimmy Kimmel Live back in 2014 and still hold the
                World Record for the longest Rube Goldberg machine set in 2012! If
                you want to learn more about us, stick around and Boiler up!
              </p>
              <span className="w3-text-white social" style={{ marginTop: '50px' }}>
                {/*Social tags*/}
                <p>
                  <br />
                  Follow us on Social media:
                </p>
                <div className="w3-margin-top">
                  {/* Facebook logo */}
                  <a href="https://www.facebook.com/boilermaker.chainreaction">
                    <i className="fa fa-facebook-official w3-hover-opacity icons" />
                  </a>
                  {/* Instagram Logo*/}
                  <a href="https://www.instagram.com/boilermaker.rubegoldberg?igsh=MzRlODBiNWFlZA==">
                    <i className="fa fa-instagram w3-hover-opacity icons" />
                  </a>
                  {/* X/Twitter Logo*/}
                  <a href="https://twitter.com/BoilermakerCRT">
                    <i className="fa fa-twitter w3-hover-opacity icons" />
                  </a>
                </div>
              </span>
            </div>
          </div>
        </div>
      </section>
      <main style={{ paddingBottom: 40 }}>

        {/* Remove this comment to render a BRGT event.
         <BRGTevent/> */}

        {/*DELETE LINE BELOW LINE TO ADD AN ANNOUNCEMENT*/}
        {/*
  <div class="announcement">
    <div class="announcement-list">
    <h4>Callouts to learn more about our team will be held on Friday, August 23 and Thursday, August 29th from 7:00-8:00pm 
      in WTHR 172. For more information about our team and how to apply, 
      click below!</h4>
    <h4 style={{marginTop: "0"}}><center><a href="callout">Join Now!</a></center></h4>
    </div>
  </div>
  */}
        {/*DELETE LINE ABOVE LINE TO ADD AN ANNOUNCEMENT*/}
        <div className="machine" id="machine" />
        <h2 className="title">Our Machine!</h2>
        <div className="boxed">
          <div className="boxed-list">
            <h4 style={{ display: "inline" }}>
              The 2024-25 machine will have the theme of&nbsp;
              <i>The Wild West</i>. We have put a total
              of {hoursString} into our machine so far this year!
              To see more about the machine, check out our socials.
              Below is a plot of our hours on the machine over time.
            </h4>
            <br /> <br />
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={dayHours}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" label={{ value: byWeek ? "Week of" : "Day", position: 'insideBottom', offset: 0 }} />
                <YAxis label={{ value: 'Hours', angle: -90, position: 'insideLeft' }} />
                <Tooltip content={<CustomTooltip byWeek={byWeek} />} />
                <Bar dataKey="hours" fill="#ffc02a" />
              </BarChart>
            </ResponsiveContainer>

          </div>
        </div>
        <div className="boxed" id="about us" />
        <h2 className="title">Meet the Team</h2>
        <div className="boxed-list">
          <p></p>
          <center>Click on one of us to meet the whole team</center>
          <p />

          {/*Every image links to members page*/}
          {members[0] && (
            <div className="sponsor people-list">
              <div className="sponsor-list people">
                <a href="members">
                  <img src={"/MemberImages/" + members[0].picture} alt="President" />
                </a>
              </div>
              <div className="sponsor-list people">
                <a href="members">
                  <img src={"/MemberImages/" + members[1].picture} alt="Captain" />
                </a>
              </div>
              <div className="sponsor-list people">
                <a href="members">
                  <img src={"/MemberImages/" + members[2].picture} alt="Treasurer" />
                </a>
              </div>
              <div className="sponsor-list people">
                <a href="members">
                  <img src={"/MemberImages/" + members[3].picture} alt="Vice President" />
                </a>
              </div>
              <div className="sponsor-list people">
                <a href="members">
                  <img src={"/MemberImages/" + members[4].picture} alt="First Mate" />
                </a>
              </div>
            </div>
          )}

        </div>
        <div className="boxed" id="history" />
        <h2 className="title">History</h2>
        <div className="boxed">
          <div className="boxed-list">
            <div className="game-image">
              <img src="/TeamPhoto2024.webp" alt="Team" preload="none" />
            </div>
            <div className="store-text-description">
              <span>
                <i>
                  The 2022-2023 Team (shown above) was composed of a variety of
                  talented and dedicated individuals who put in over three thousand
                  hours to build an incredible machine.
                </i>
              </span>
              <h4>
                In the spring of 1998, the PSPE Rube Goldberg Team was founded by a
                freshman engineer named Shawn Jordan with the idea of creating a
                Rube Goldberg team for Purdue University. With the backing of then
                president, Karen Davis, the first team began the first of many
                machines. With almost no budget, the first machines created by the
                team were mostly constructed from low cost materials such as
                cardboard, duct tape, and various give-a-away items from different
                events around campus. Due to the low durability of these materials,
                creating a reliable machine was a challenge, but due to their
                dedication and creativity, the early groups still designed and built
                many various machines to bring to competition. Since the club's
                founding, this same competition has taken many different forms,
                until it moved back to its home on Purdue's Campus in 2019 taking
                the official name of the Purdue National Chain Reaction Competition
                . In reflection of this move the team changed its name to match. A
                few years later in 2022, the team split off from PSPE and became its
                own self-funded student organization, the Boilermaker Rube Goldberg
                Team.
                {/*Links to history page*/}
                <center>
                  <a href="history">
                    <button
                      className="w3-btn w3-margin-top w3-round buttonOnBackground"
                      style={{
                        backgroundColor: "var(--btnBackground)",
                        color: "var(--text)"
                      }}
                    >
                      Click here to see our previous machines!
                    </button>
                  </a>
                </center>
              </h4>
            </div>
          </div>
        </div>
        <div className="boxed" id="outreach" />
        <h2 className="title">Outreach</h2>
        <div className="boxed">
          <div className="boxed-list">
            <div className="store-text-description">
              <h4>
                Interested in having our team talk to you and your group? We enjoy
                finding opportunities to do outreach with elementary schools, clubs,
                scout troops, or other organizations who want to learn more about
                the world of Rube Goldberg and what we do! We would love to talk to
                you and your friends about Rube Goldberg, our team, what we do, and
                anything STEM. Reach out to us using the email below!
              </h4>
              {/*Links to Outreach Page*/}
              <center>
                <a href="outreach">
                  <button
                    className="w3-btn w3-margin-top w3-round buttonOnBackground"
                    style={{
                      backgroundColor: "var(--btnBackground)",
                      color: "var(--text)"
                    }}
                  >
                    To learn more, click here!
                  </button>
                </a>
              </center>
            </div>
          </div>
        </div>
        {/* Sponsor section, currently commented out because no sponsors D:  */}
        {/*
<div class="sponsor" id="sponsor"></div>
<h2 class="title">Sponsors</h2>
<div class="sponsor">f
  <div class="sponsor-list sponsor-item" style="width:310px; height:125px;">
      Image of sponsor that links to their website
      <a href="https://zyynlabs.com/" target="_blank"><img src="Images/zyynlabs.png" alt="ZyynLabs" style="width:300px; height:92px;"/></a>
    </div>
  </div>
*/}
        <div className="event-hero" style={{ position: "relative" }} id="support">
          <div className="event-text">
            <h1 className="event-title">Support Us!</h1>
            <h4>
              Want to support us and help us build our next great contraption? Check
              out our Donate page and see how you or your business can help turn our
              ideas into reality. We couldn't do any of this without our donors'
              help!
            </h4>
            {/*Links To Donate Page*/}
            <a href="donate">
              <button
                className="w3-btn w3-margin-top w3-round buttonOnBackground"
                style={{
                  backgroundColor: "var(--btnBackground)",
                  color: "var(--text)"
                }}
              >
                Donate
              </button>
            </a>
          </div>
        </div>
        <h2 className="title">Reach out to us</h2>
        <div className="boxed">
          <div className="boxed-list">
            <div className="boxed-text-description">
              <h4>
                Have questions or interested in working with us? Check out our
                social media linked up top or contact us with the information below!
                We'd love to hear from you!
              </h4>
            </div>
          </div>
        </div>
        <div
          className="contact"
          id="contact"
          style={{ paddingBottom: "10px !important" }}
        >
          <div className="contact-list">
            {/*Team Email*/}
            <h5>
              <span>
                <i className="fa fa-envelope w3-xlarge w3-text-light-grey" />
              </span>
              <a href="mailto:boilerrubegoldberg@gmail.com">
                boilerrubegoldberg@gmail.com
              </a>
            </h5>
          </div>
        </div>
      </main>
    </>

  );
}

export default App;
