import React, { useState, useEffect } from "react"
import Papa from 'papaparse'; // for csv parsing

/*
    Make sure members.csv has the following as the first line (might have to reorder based on the data):
    timestamp,name,year,major,yearsOnTeam,hometown,highschool,hobbies,interestingFact,picture,role
*/

function Members() {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        // Fetch and parse member data from members.csv file.
        fetch('members.csv')
            .then((response) => response.text())
            .then((csvText) => {
                Papa.parse(csvText, {
                    header: true,
                    skipEmptyLines: true,
                    complete: (results) => {
                        console.log("results: ");
                        console.log(results);
                        setMembers(results.data);
                    },
                });
            });
    }, []);

    const MemberCard = ({ imagePath, name, role, text }) => {
        return (<div className="team">
            <div className="team-member-text-img">
                <img src={imagePath} alt={name} preload="none" />
            </div>
            <div className="team-member-text">
                <h1 className="hero-title name">{name}</h1>
                {
                    role === undefined ?
                        <h6>&nbsp;</h6> :
                        <h3 className={`role ${role === "Webmaster" ? 'text-rainbow-animation' : ''}`}>{role}</h3>
                }

                {text}
            </div>
        </div>)
    }

    const MemberText = ({ year, major, onTeam, hometown, highschool, hobbies, fact, link = null }) => {
        return (<>
            <p>Year - {year}</p>
            <p>Major - {major}</p>
            <p>Year(s) on Team - {onTeam}</p>
            <p>Hometown - {hometown}</p>
            <p>Highschool - {highschool}</p>
            <p>Hobbies - {hobbies}</p>
            {link && (
                <p>Interesting Fact - &nbsp;
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        {fact}
                    </a>
                </p>
            )}
            {!link && (
                <p>Interesting Fact - {fact}</p>
            )}

        </>)
    }

    return (
        <>
            <title>Our Team</title>
            <meta name="description" content="Learn more about our team!" />
            <link rel="icon" type="image/x-icon" href="/Images/favicon.ico" />
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="W3Schools.css" />
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <link rel="stylesheet" href="style.css" />
            <title>Purdue Rube Goldberg Club</title>
            <header style={{ position: "relative" }}>
                <div className="w3-top" id="home">
                    <div
                        className="w3-bar w3-large heeder-large-screen"
                        style={{ backgroundColor: "var(--navBar)", fontFamily: '"text"' }}>
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

            <div className="mainTeam">
                {members.map((member, index) => (
                    <MemberCard
                        key={index}
                        imagePath={"/MemberImages/" + member.picture}
                        name={member.name}
                        role={member.role}
                        text={
                            <MemberText
                                year={member.year}
                                major={member.major}
                                onTeam={member.yearsOnTeam}
                                hometown={member.hometown}
                                highschool={member.highschool}
                                hobbies={member.hobbies}
                                fact={member.interestingFact}
                                link={(member.name === "Andrew Thompson") ? "https://andrewtho5942.xyz/Robotics" : null}
                            />
                        }
                    />
                ))}
            </div>
        </>
    );
}

export default Members;