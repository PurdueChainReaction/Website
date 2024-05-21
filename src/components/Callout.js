import React from "react"

function Callout() {
    return (
        <>
  <title>Join Us</title>
  <meta
    name="description"
    content="Are you interested in joining our team? Learn more here!"
  />
  <link rel="icon" type="image/x-icon" href="/Images/favicon.ico" />
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="W3Schools.css" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <link rel="stylesheet" href="style.css" />
  <title>Purdue Rube Goldberg Club</title>
  <header style={{ position: "relative" }}>
    <div className="w3-top" id="home">
      <div
        className="w3-bar w3-large heeder-large-screen"
        style={{ backgroundColor: "var(--navBar)", fontFamily: '"text"' }}
      >
        <div>
          <a
            href="./"
            className="w3-bar-item w3-button w3-padding-large w3-hover-black"
          >
            Back To Main Page
          </a>
        </div>
      </div>
    </div>
  </header>
  <main style={{ paddingBottom: 40 }}>
    <h2 className="title">Want to Join Our Team?</h2>
    <div className="announcement">
      <div className="announcement-list">
        <h4>
          Heard of us, been to our competition, or seen us around campus and
          want to learn more about us? The Boilermaker Rube Goldberg Team is an
          enriching club that will allow you to express creative ideas in an
          encouraging environment. By joining us, you will get the opportunity
          to work beside a fun and friendly group of passionate and creative
          individuals to create a fun and incredibly rewarding masterpiece while
          making lasting friendships along the way.
        </h4>
      </div>
    </div>
    <div className="boxed">
      <h2 className="title" style={{ textAlign: "left", marginTop: "0%" }}>
        Why Join?
      </h2>
      <div className="boxed-list">
        <h4>
          The Boilermaker Rube Goldberg Team is a rewarding, yet challenging
          club that will allow you to express your own creativity and
          resourcefulness with a group of like-minded individuals. It's a great
          way to make friends or just to have a place to hang out and work with
          some friendly faces. Our group encourages anyone from any year and any
          major to join, we're always happy to welcome new creative minds. We
          continue to work to provide an enjoyable and productive space to
          collaborate with other people and create our next incredible machine.
        </h4>
      </div>
    </div>
    <div className="boxed">
      <div className="boxed-list" style={{ marginTop: 50 }}>
        <h2 className="title" style={{ textAlign: "left", marginTop: "0%" }}>
          Requirements For the Club:
        </h2>
        <h4>
          Due to our September - April build schedule and how much time it takes
          to create a quality machine like the standard we hold ourselves to, we
          do have weekly hour requirements throughout the year. For the first
          month of our build year, 6 hours per week is required which bumps up
          to 8 hours per week until the national competition at the beginning of
          April.
          <br />
          <br />
          We also have at least two all-nighters that we hold throughout the
          year where the team gets together in the evening in our workshop and
          we all spend 10 hours straight listening to music, working on steps,
          and overall having a great time. It may sound daunting, but to us,
          those are some of the most fun nights of the year!
          <br />
          <br />
          This club thrives on creativity, passion, and enjoyment of all things
          Rube Goldberg, but we also expect a certain level of dedication. It
          takes a whole team to make these machines, so each member’s
          contributions are crucial. We understand that all of our members are
          full-time students first, so we always work with our members to be
          flexible on hours during rough parts of the semester. All we ask is
          that our members communicate with us when they need to focus on their
          studies and that they make up for lost hours in the following weeks.
          <br />
          <br />
          Overall, our biggest requirement is that you have a passion for
          creation and an eye for the complex! Being a part of our team takes
          time but to all of us it is well worth our while with all of the
          memories and friends we’ve made along the way!
        </h4>
      </div>
    </div>
    <div className="boxed">
      <div className="boxed-list" style={{ marginTop: 50 }}>
        <h2 className="title" style={{ textAlign: "left", marginTop: "0%" }}>
          Hear More from Us:
        </h2>
        <h4>
          Want to find out more by hearing from us face-to-face? Come to one of
          our call-out meetings on August 31st or September 1st from 7:00-8:00
          pm at ME1130 (location may be subject to change). You might also see
          us out around campus, like at the Be-Involved Fair Saturday, August
          19th from 12pm-3pm or in front of WALC, feel free to come over and
          chat, we're always happy to answer questions!
        </h4>
      </div>
    </div>
    <h2 className="title">
      Ready to join? Fill out this year's application form below!
    </h2>
    <div className="announcement">
      <div className="announcement-list">
        <h4>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSceVoLJ012egpAA4KxzHfx6WiTrWKXYMM4V0GVjEzmJzcnZPw/viewform?usp=sf_link">
            JOIN NOW!
          </a>
        </h4>
      </div>
    </div>
    <h2 className="title">Have Any Questions?</h2>
    <div className="boxed">
      <div className="boxed-list">
        <div className="boxed-text-description">
          <h4>
            <span style={{ fontSize: "large" }}>
              Please contact us at{" "}
              <i className="fa fa-envelope w3-xlarge w3-text-light-grey" />
            </span>
            <a
              href="mailto:boilerchainreaction@gmail.com"
              style={{ fontSize: "large" }}
            >
              boilermakerchainreaction@gmail.com
            </a>
          </h4>
        </div>
      </div>
    </div>
  </main>
</>

    );
}

export default Callout;