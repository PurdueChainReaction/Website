import React from "react"

function Outreach() {
  return (
    <>
      <title>Outreach</title>
      <link rel="icon" type="image/x-icon" href="/Images/favicon.ico" />
      <meta
        name="description"
        content="Were you wondering about the Boilermaker Rube Goldberg Team? Well you've come to the right place!"
      />
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
      <title>Outreach</title>
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
        <div className="boxed-list">
          <div className="game-image">
            <h2 className="title" style={{ color: "var(--highlightedText)" }}>
              Welcome to Outreach!
            </h2>
            <h2 className="title">What is Outreach?</h2>
            <h4 className="store-text-description">
              Outreach is a program that allows us as a team to give presentations
              and showcase what we do to different organizations such as schools,
              clubs, and community events. We love talking to differnt groups about
              our machines, Rube Goldburg and even STEM! Outreach allows some of our
              membersto travel to your even or video call in, whichever method is
              perferred, and show off what we do as a group. In the past we have
              even brought our machine with us!
            </h4>
          </div>
          <div className="game-image">
            <h2 className="title">How to Book</h2>
            <h4 className="store-text-description">
              Setting up meeting is very easy! Just contact us via email listed
              below! We would be happy to set up a date and time for your meeting.
              As a team, we are always excited to volunteer our time and travel with
              or without the machine whenever possible. If in person will not work
              or you are located too far from our headquaters in West Lafayette, no
              problem! We are more than willing to work with you to set up a virtual
              meeting whenever necessary. Once you book a time and date, availible
              memebers will attend your event and show case what we do as a club.
              Machine visits, however, due to our building and competition period
              are limited to August in the Fall and April and May in the spring.
            </h4>
          </div>
          <div className="game-image">
            <h2 className="title">Requirements</h2>
            <h4 className="store-text-description">
              While our team is always happy to attend varying events, we reserve
              the right to ask for a video call or refuse an event if needed. We are
              all full-time students working hard for our degrees and work with
              limited funding. As as result we will not travel with the machine for
              longer than a few hours drive from Purdue, except under special
              circumstances. Such circumstances will be given at the team's
              disgression. We also request that the inviting party help pay for
              travel costs. This charge will only include gas and rent for the truck
              if the machine is requested.
            </h4>
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
              <a href="mailto: boilerchainreaction@gmail.com">
                boilermakerchainreaction@gmail.com
              </a>
            </h5>
          </div>
        </div>
      </main>
    </>

  );
}

export default Outreach;