import React from "react"

function History() {
    const HistoryYear = ({ year, ytLink, finalStep, theme, steps, result, extra}) => {
        return (
            <>

                <div className="boxed" id={year}>
                    <div className="boxed-list">
                        <div className="store-text-description">
                            <h2 className="title">{year}</h2>
                            <iframe
                                id="iframeVideo"
                                width="100%"
                                height="100%"
                                src={ytLink}
                                title="YouTube video player"
                                frameBorder={0}
                                allow="web-share; fullscreen"
                                
                            />
                            <h4>
                                Final Step: {finalStep}
                                <br />
                                Theme: {theme}
                                <br />
                                Step Count: {steps}
                                <br />
                                Result: {result}
                                {extra ? 
                                (<> 
                                <br /> {extra}
                                </>)
                                 : ""}
                            </h4>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            <title>History</title>
            <meta
                name="description"
                content="Learn more about our history and how we came to be!"
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
                <div className="w3-top; header" id="home">
                    <div
                        className="w3-bar w3-large heeder-large-screen"
                        style={{ backgroundColor: "var(--navBar)", fontFamily: '"text"' }}
                    >
                        <a
                            href="./"
                            className="w3-bar-item w3-button w3-padding-large w3-hover-black"
                        >
                            Back To Main Page
                        </a>
                    </div>
                </div>
            </header>
            <main style={{ paddingBottom: 40 }}>
                <div className="boxed-list">
                    <div className="game-image">
                        <h2 className="title">About Our Team</h2>
                        <h4 className="store-text-description">
                            Our team has a rich history dating back to 1998, where a group of
                            multi-disciplinary students from the Purdue Society of Professional
                            Engineers (PSPE) first created this organization and have since
                            created a legacy and high standard of designing, constructing, and
                            competing with machines in the annual national competition, now known
                            as the 2024 Rube Goldberg Machine Contest. For over 25 years this team
                            has been able to offer fantastic opportunities for students to bond
                            over their love for all things creative and out of the box while at
                            the same time learning more about tool-working and how to implement
                            many concepts in mechanics, physics, chemistry and more.
                            <br />
                            <br />
                            Over the years we have grown and established ourselves as a top
                            competitor in the national competition and beyond, placing 1st in the
                            last 4 competitions post-pandemic in 2022 through 2025, and finishing
                            top-2 for each of the last 8 competitions dating back to 2014. On top
                            of our success at competition, our organization has some very
                            prestigious accomplishments including breaking the Guinness Book of
                            World Records record for “Largest Rube Goldberg machine in
                            competition” back in 2012 with a 300 step machine, as well as
                            appearing on ABC’s Jimmy Kimmel Live in 2005, 2006 and 2015. On top of
                            that, one of our machine’s was featured in an episode of Modern
                            Marvels on The History Channel.
                            <br />
                            <br />
                            The national competition has bounced around, recently moving back to
                            Purdue in 2019, and just this year has been taken over by co-host of
                            the show “Contraption Masters”, current “World’s Leading Authority” in
                            everything Rube Goldberg, and former alumni of this organization, Zach
                            Umperovitch. This new look competition is sponsored by Purdue’s
                            College of Engineering and is once again in partnership with the Rube
                            Goldberg Institute! We are so excited to see how this next iteration
                            of the annual national competition will be like and how it can
                            continue to expand and grow the world of Rube Goldberg machines! Our
                            continued goal is to build another incredible, complex and exciting
                            machine to compete in the competition with as well as expand our
                            outreach more into the educational community to share our passion for
                            what we do.
                        </h4>
                    </div>
                </div>
                <h2 className="title">Past Machines</h2>
                <HistoryYear year="2025"
                    ytLink="https://www.youtube.com/embed/_sDxm73mzxo?si=bWdDnTkNe3JaY-Dl"
                    finalStep="Feed a Pet"
                    theme="The Wild West"
                    steps="120"
                    result="Won 1st Place at National Competition. Awarded people's choice, best last step, artistry, and most hilarious awards."
                />
                <HistoryYear year="2024"
                    ytLink="https://www.youtube.com/embed/WSJG7OMH7gg?si=8oKiLTl5O_y_NuyE"
                    finalStep="Put Toothpaste on a Toothbrush"
                    theme="Fantasy"
                    steps="120"
                    result="Won 1st Place at National Competition. Awarded best last step and people's choice awards."
                />
                <HistoryYear year="2023"
                    ytLink="https://www.youtube.com/embed/wfsr3f1g97g?si=mHWlWkydRnojqQc_"
                    finalStep="Score A Goal"
                    theme="Heist In Las Vegas"
                    steps="78"
                    result="1st Place"
                />
                <HistoryYear year="2022"
                    ytLink="https://www.youtube.com/embed/CwjA4Nj_2Tk?si=GYPtoE_Ouxk7Gaua"
                    finalStep="Put Sunglasses on a Head"
                    theme="Vikings and Dragons"
                    steps="60"
                    result="1st Place"
                />
                <HistoryYear year="2021"
                    ytLink="https://www.youtube.com/embed/jNLT9JI2rDg?si=QQFYhGdcl1QQFnQI"
                    finalStep="Wrap a Present"
                    theme="Willy Wonka"
                    steps="42"
                    result="N/A"
                />
                <HistoryYear year="2020"
                    ytLink="https://www.youtube.com/embed/9lRsIp55-II?si=HEa7YRA-dfSQo80R"
                    finalStep="Ring a Doorbell"
                    theme="Oregon Trail"
                    steps="???"
                    result="N/A"
                />
                <HistoryYear year="2019"
                    ytLink="https://www.youtube.com/embed/X76Hj1dHzrc"
                    finalStep="Put Toothpaste on a Tooth Brush"
                    theme="Spaceship Disaster"
                    steps="75"
                    result="1st Place"
                />

                <div className="boxed" id="OlderMachines">
                    <HistoryYear year="2018"
                        ytLink="https://www.youtube.com/embed/zPVH2admAuw"
                        finalStep="Pour A Bowl of Cereal"
                        theme="A Fantastical Adventure"
                        steps="75"
                        result="1st Place"
                    />
                    <HistoryYear year="2017"
                        ytLink="https://www.youtube.com/embed/kPTZ2sEKHWo"
                        finalStep="Apply a Baind-Aid"
                        theme="Apply a Baind-Aid to a Broken Heart"
                        steps="72"
                        result="2nd Place in National Competition"
                    />
                    <HistoryYear year="2016"
                        ytLink="https://www.youtube.com/embed/BtDGDTUDO-8"
                        finalStep="Open an Umbrella"
                        theme="A walk Down Main Street"
                        steps="74"
                        result="2nd Place in National Competition"
                    />
                    <HistoryYear year="2015"
                        ytLink="https://www.youtube.com/embed/MwJ1D4gD4Nw"
                        finalStep="Erase a Chalkboard"
                        theme="A Day in the life of Rube"
                        steps="73"
                        result="1st Place in Regional and National Competition"
                    />
                    <HistoryYear year="2014"
                        ytLink="https://www.youtube.com/embed/AmY-EBSvUcY"
                        finalStep="Zip a Zipper"
                        theme="A Simple Way to Get Ready for Work"
                        steps="78"
                        result="1st Place in Regional and National Competition. Won the
                        People's Choice at the Regional Competition. Won Legacy Award at
                        National Competition."
                        extra="This machine went on Jimmy Kimmel Live!"
                    />
                    <HistoryYear year="2012"
                        ytLink="https://www.youtube.com/embed/9Z9z33FKle0"
                        finalStep="Inflate and Pop a Balloon"
                        theme="Rube's Revisited"
                        steps="300"
                        result=" Won 1st place at the Regional Competition. Won the People's
                        Choice at the Regional Competition. Took 2nd Place at the National
                        Competition."
                    />
                    <HistoryYear year="2011"
                        ytLink="https://www.youtube.com/embed/RuwUn-_p7m8"
                        finalStep="Water a Plant"
                        theme="The Time Machine"
                        steps="244"
                        result="Won 1st place at the Regional Competition. Won the People's
                        Choice at the Regional Competition. Did not Place at the National
                        Competition."
                    />
                    <HistoryYear year="2010"
                        ytLink="https://www.youtube.com/embed/oTruGNgTios"
                        finalStep="Dispense an appropriate amount of hand sanitizer into one's hand."
                        theme="Rube's Workshop"
                        steps="176"
                        result="Won 1st place at the Regional Competition. Won the People's
                        Choice at the Regional Competition. Did not Place at the National
                        Competition."
                    />
                    <HistoryYear year="2009"
                        ytLink="https://www.youtube.com/embed/ru0NLrPsQeg"
                        finalStep="To replace an incandescent light bulb with a more energy efficient light emitting design."
                        theme="Blackout Vegas"
                        steps="101"
                        result="Won 3rd place at the Regional Competition."
                    />
                    <HistoryYear year="2008"
                        ytLink="https://www.youtube.com/embed/jN2yGpNpc38"
                        finalStep="To assemble a hamburger consisting of no less than one precooked meat patty, two vegetables 
                        and two condiments, sandwiched between two bun halves."
                        theme="Around the World in 156 Steps"
                        steps="156"
                        result="Won 1st place at the Regional Competition. Won the People's
                        Choice Award at the Regional competition. Won 1st place at the
                        National Competition"
                    />
                    <HistoryYear year="2006"
                        ytLink="https://www.youtube.com/embed/aZlj-br_uCQ"
                        finalStep="To cut or shred into strips five sheets of 8½ by 11
                        paper and place the shredded paper in a recycle bin."
                        theme="The Rube Machine Ate My Homework"
                        steps="215"
                        result="Won 1st place at the Regional and National competition. Won
                        the People's Choice Award at the Regional and National competition."
                    />
                    <HistoryYear year="2005"
                        ytLink="https://www.youtube.com/embed/3QwadEI9GwA"
                        finalStep="To remove and replace two batteries in a flashlight,
                        then turn it on"
                        theme="Blackout on Planet Rube"
                        steps="125"
                        result="Won 1st place at the Regional competition. Won the People's
                        Choice Award at the Regional competition. Won 1st place at the
                        National competition. Won the People's Choice Award at the National
                        competition."
                    />
                </div>
            </main>
        </>
    );
}

export default History;