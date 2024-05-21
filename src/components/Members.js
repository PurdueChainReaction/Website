import React from "react"

function Members() {
    const MemberCard = ({ imagePath, name, role, text }) => {
        return (<div className="team">
            <div className="team-member-text-img">
                <img src={imagePath} alt={role ? role : "No role"} preload="none" />
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
    const MemberText = ({ year, major, onTeam, hometown, highschool, hobbies, fact }) => {
        return (<>
            <p>Year - {year}</p>
            <p>Major - {major}</p>
            <p>Year(s) on Team - {onTeam}</p>
            <p>Hometown - {hometown}</p>
            <p>Highschool - {highschool}</p>
            <p>Hobbies - {hobbies}</p>
            <p>Interesting Fact - {fact}</p>
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

            <div className="mainTeam">
                {/* Tim Giannini */}
                <MemberCard
                    imagePath="MemberImages/president.webp"
                    name="Tim Giannini"
                    role="President"
                    text={<MemberText
                        year="Senior"
                        major="Robotics Engineering Technology and Mechatronics Engineering Technology"
                        onTeam="Four"
                        hometown="Munster, IN"
                        highschool="Munster High School"
                        hobbies="Choir, Playing sports, Podcasting, and Weightlifting"
                        fact="My sister and I are 4th generation Purdue students"
                    />}
                />

                {/* Colby Lee */}
                <MemberCard
                    imagePath="MemberImages/captain.webp"
                    name="Colby Lee"
                    role="Captain"
                    text={<MemberText
                        year="Senior"
                        major="Mechanical Engineering"
                        onTeam="Four"
                        hometown="Hanover, MA"
                        highschool="Hanover High School"
                        hobbies="Cooking, Music Production, and making Rube Goldberg Machines"
                        fact="I exist in the Star Wars Cannon Universe"
                    />}
                />

                {/* Noah Dapp */}
                <MemberCard
                    imagePath="MemberImages/vice.webp"
                    name="Noah Dapp"
                    role="Vice President"
                    text={<MemberText
                        year="Junior"
                        major="Energy Engineering Technology"
                        onTeam="Two"
                        hometown="Garrett, IN"
                        highschool="Garrett High School"
                        hobbies="Golf, Dnd, Video games"
                        fact="I install solar panels in the summer"
                    />}
                />

                {/* Creigh Dircksen */}
                <MemberCard
                    imagePath="MemberImages/first.webp"
                    name="Creigh Dircksen"
                    role="First Mate"
                    text={<MemberText
                        year="Junior"
                        major="Electrical Engineering Technology"
                        onTeam="Three"
                        hometown="Garrett, IN"
                        highschool="Garrett High School"
                        hobbies="Soccer, DnD, and Rube"
                        fact="I can't do a backflip"
                    />}
                />

                {/* Merle Yin */}
                <a
                    href="https://www.youtube.com/watch?v=xvFZjo5PgG0&pp=ygUQcmljayByb2xsIG5vIGFkcw%3D%3D"
                    style={{ textDecoration: "none" }}
                >
                    <MemberCard
                        imagePath="MemberImages/treasurer.webp"
                        name="Merle Yin"
                        role="Treasurer"
                        text={<MemberText
                            year="Sophomore"
                            major="Industrial Design and AIP"
                            onTeam="Two"
                            hometown="Wouldn't you like to know"
                            highschool=" Mennonite Collegiate Institute"
                            hobbies="Screaming, Crying, Throwing up"
                            fact="I'm actually just 3 mice in a trench coat"
                        />}
                    />
                </a>

                {/* Nick Durnil */}
                <MemberCard
                    imagePath="MemberImages/webmaster.webp"
                    name="Nick Durnil"
                    role="Webmaster"
                    text={<MemberText
                        year="Junior"
                        major="Computer Engineering"
                        onTeam="Two"
                        hometown="Carmel, IN"
                        highschool="Carmel High School"
                        hobbies="Bouldering, Camping, Making electronics, Coding pointless gadgets"
                        fact="People usually don't hear me approach them"
                    />}
                />

                {/* Carmen Woodall */}
                <MemberCard
                    imagePath="MemberImages/5.webp"
                    name="Carmen Woodall"
                    role="Webmaster"
                    text={<MemberText
                        year="Sophomore"
                        major="Cybersecurity and Infrastructure Network Engineering"
                        onTeam="Two"
                        hometown="Nevada, IA"
                        highschool="Western Boone Junior Senior High School"
                        hobbies="Fishing, DND, Reading, Writing, Being sleep deprived"
                        fact="I’ve gone deep sea fishing"
                    />}
                />

                {/* W. Rhodes Lacy */}
                <MemberCard
                    imagePath="MemberImages/1.webp"
                    name="W. Rhodes Lacy"
                    /* Leave role undefined if there is none */
                    text={<MemberText
                        year="Super Senior"
                        major="AAE"
                        onTeam="Let's call it four"
                        hometown="Indianapolis, IN"
                        highschool="???"
                        hobbies="D&D, sending out job applications"
                        fact="I broke five bones in a pillow fight"
                    />}
                />

                {/* Freddie Zahn */}
                <MemberCard
                    imagePath="MemberImages/2.webp"
                    name="Freddie Zahn"
                    /* Leave role undefined if there is none */
                    text={<MemberText
                        year="Super Senior"
                        major="Industrial Engineering"
                        onTeam="Four"
                        hometown="Cincinnati, OH"
                        highschool="Indian Hill High School"
                        hobbies="Cooking, Running, Traveling in really long car rides"
                        fact="I moved to China and lived there for 4 years"
                    />}
                />

                {/* Raymond Kwok */}
                <MemberCard
                    imagePath="MemberImages/3.webp"
                    name="Raymond Kwok"
                    /* Leave role undefined if there is none */
                    text={<MemberText
                        year="Senior"
                        major="Mechanical Engineering"
                        onTeam="Three"
                        hometown="Queens, New York"
                        highschool="Forest Hills High School"
                        hobbies="PC Gaming, Reading japanese manga, Watching esports, Playing 8 ball pool"
                        fact={<>&nbsp;
                            <a href="https://www.youtube.com/watch?v=eOpJOVAt5Y4&list=FLbVIofoo9MYqp0pI34OkE_g&index=24">
                                This
                            </a>
                            &nbsp;is what happens 99% of the time in my head throughout the day </>}
                    />}
                />

                {/* Loral Sarver */}
                <MemberCard
                    imagePath="MemberImages/4.webp"
                    name="Loral Sarver"
                    /* Leave role undefined if there is none */
                    text={<MemberText
                        year="Senior"
                        major="Visual Art Education"
                        onTeam="Two"
                        hometown="Valparaiso, IN"
                        highschool="Valparaiso High School"
                        hobbies="Drawing, Karaoke, Watching movies"
                        fact="I have 10 siblings"
                    />}
                />

                {/* Zachary Wilson */}
                <MemberCard
                    imagePath="MemberImages/6.webp"
                    name="Zachary Wilson"
                    /* Leave role undefined if there is none */
                    text={<MemberText
                        year="Junior"
                        major="Robotics Engineering Technology"
                        onTeam="One"
                        hometown="Geneva, Il"
                        highschool="Geneva High School"
                        hobbies="3D Printing/Design, PC gaming, Camping, Writing Poetry"
                        fact="I am a high level beat saber player"
                    />}
                />

                {/* Lauren Britten */}
                <MemberCard
                    imagePath="MemberImages/7.webp"
                    name="Lauren Britten"
                    /* Leave role undefined if there is none */
                    text={<MemberText
                        year="Freshman"
                        major="First Year Engineering"
                        onTeam="One"
                        hometown="Woodbury, MN"
                        highschool="Math and Science Academy"
                        hobbies="Reading, Writing, Listening to music"
                        fact="???"
                    />}
                />

                {/* Ryan Capstick */}
                <MemberCard
                    imagePath="MemberImages/8.webp"
                    name="Ryan Capstick"
                    /* Leave role undefined if there is none */
                    text={<MemberText
                        year="Sophomore"
                        major="Mechanical Engineering"
                        onTeam="One"
                        hometown="Lincolnshire, IL"
                        highschool="Stevenson High School"
                        hobbies="Volleyball, Rock Climbing, Cooking"
                        fact="I had emergency plastic surgery in 5th grade"
                    />}
                />

                {/* Olivia Yin-Dolvig */}
                <MemberCard
                    imagePath="MemberImages/9.webp"
                    name="Olivia Yin-Dolvig"
                    /* Leave role undefined if there is none */
                    text={<MemberText
                        year="Freshman"
                        major="First-Year Engineering (thinking Mechanical Engineering)"
                        onTeam="One"
                        hometown="Beaverton, OR"
                        highschool="Westview High School"
                        hobbies="Mountain biking, Model making, Miniature painting"
                        fact="I once spent three hours shuffling cards to learn how to bridge shuffle"
                    />}
                />

                {/* Tyler Kenchanh */}
                <MemberCard
                    imagePath="MemberImages/10.webp"
                    name="Tyler Kenchanh"
                    /* Leave role undefined if there is none */
                    text={<MemberText
                        year="Junior"
                        major="Industrial Engineering Technology"
                        onTeam="One"
                        hometown="Fort Wayne, IN"
                        highschool="Carroll High School"
                        hobbies="Balisong (Butterfly Knife) collecting, Modifying, and Flipping, Cooking, Learning, Origami, Cars"
                        fact="I am left-handed"
                    />}
                />

                {/* Andrew Thompson */}
                <MemberCard
                    imagePath="MemberImages/11.webp"
                    name="Andrew Thompson"
                    role="Webmaster"
                    text={<MemberText
                        year="Sophomore"
                        major="Computer Science"
                        onTeam="One"
                        hometown="Naperville, IL"
                        highschool="Neuqua Valley High School"
                        hobbies="3D printing, Reading, Badminton, Robotics"
                        fact="I own nine different JRR Tolkien books"
                    />}
                />

                {/* Margaret Prokopy */}
                <MemberCard
                    imagePath="MemberImages/12.webp"
                    name="Margaret Prokopy"
                    /* Leave role undefined if there is none */
                    text={<MemberText
                        year="Sophomore"
                        major="Biomedical Engineering"
                        onTeam="Two"
                        hometown="West Lafayette, IN"
                        highschool="West Lafayette Jr./Sr. High School"
                        hobbies="Violin, Digital art, Reading sci-fi/fantasy, Chess"
                        fact="I love sushi"
                    />}
                />
                {/* Drew Gaston */}
                <MemberCard
                    imagePath="MemberImages/13.webp"
                    name="Drew Gaston"
                    /* Leave role undefined if there is none */
                    text={<MemberText
                        year="Senior"
                        major="Nuclear Engineering"
                        onTeam="Three"
                        hometown="Kansas City, MO"
                        highschool="Staley High School"
                        hobbies="Rubik's Cubing/ Solving Puzzles, Crocheting, Baking"
                        fact="I never pick up cards because I already Drew"
                    />}
                />
            </div>
        </>

    );
}

export default Members;