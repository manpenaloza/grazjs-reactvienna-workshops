import React, { Component } from 'react';
import styled from 'styled-components';
import { workshops } from "./content";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media(min-width: 768px) {
    flex-direction: row;
  }
`;

const WrapperContentBox = styled.div`
  flex: 1.5;
  color: white;
`;

const WrapperFactsBox = styled(WrapperContentBox)`
  flex: 1;
  background: #1D1F21;
`

const Headline = styled.h2`
  margin-top: 0;
  font-weight: normal;
  background-color: #5F719F;
  padding: 1.5rem;
  letter-spacing: .5vw;
`;

const HeadlineFacts = styled(Headline)`
  background-color: #489851;
`;

const ContentBox = styled.div`
  padding: 1.5rem;
  text-align: initial;
`;

const MainContainerWithColoredBackground = styled.div`
  background: linear-gradient( to bottom, #489851 0%, #5F719F 100% ); 
  height: 100vh;
  padding: 1.7vw;
  box-sizing: border-box;
`;

const ContentContainer = styled.div`
  background: #1e2029;
  height: 100%;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  font-family: Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  letter-spacing: 1.6px;
  overflow: auto;
`;

const HeadlineContainer = styled.div`
  border: 5px solid #2e313a;
  font-size: 1.7vw;
  padding: 1vw;
  color: #fff;
  text-align: center;
`;

const TutorLink = styled.a`
  color: #5F719F;
  font-size: 1.3em;

  &:hover{
    transform: translateY(-4px);
    box-shadow: 0px 6px 15px -5px #000;
  }
`
const CTAButton = styled.a`
  display: inline-block;
  margin-top: 1vw;
  min-width: 12rem;
  cursor: pointer;
  font-size: 1.1em;
  background: linear-gradient(90deg,#5F719F,#489851);
  padding: 15px 18px;
  border-radius: 5px;
  text-decoration: none;
  border: none;
  color: #1D2029;
  font-weight: 800;
  text-align: center;
  transition: all .2s ease-in;

  &:hover{
    transform: translateY(-2px);
    box-shadow: 0px 6px 15px -5px #000;
  }
`;

const TutorImage = styled.img`
  display: inline-block;
  margin-right: .6em;
  vertical-align: bottom;
  border-radius: 100%;
  border-style: none;
  width: 32px;
  height: 32px;
`;

const ContentInfoBox = styled.p`
  font-weight: 700;
  background-color: #2e313a;
  padding: 6px;
`;

const Workshop = ({
  nameTutor,
  twitter,
  image,
  title,
  description,
  price,
  workshops,
  shortNotes,
  maxParticipants,
}) => {
  
  const VAT = nameTutor == "Juho Vepsäläinen" ? "24" : "20";

  return (
    <section>
      <h3 style={{ fontSize: "1.3em", fontWeight: 700 }}>{title}</h3>
      <p>by <TutorImage src={image} /><TutorLink href={twitter} target="_blank">{nameTutor}</TutorLink></p>
      <p dangerouslySetInnerHTML={{
        __html: description.replace(/(?:\r\n|\r|\n)/g, '<br/><br/>')
      }} />
      <p>
        The topics covered include:
        <ul>
          { shortNotes.map( note => <li>{note}</li> ) } 
        </ul>
      </p>
      <ContentInfoBox>Price: {price} € excluding {VAT}% VAT - Maximum {maxParticipants} persons.</ContentInfoBox>
      {
        workshops.map( ({ date, time: { start, end } }) => {
          return ( <ContentInfoBox>{date} - {start} to {end}</ContentInfoBox>)
        })
      }
      <CTAButton href="https://docs.google.com/forms/d/e/1FAIpQLSfnRIbylLrOyz2ohSjs8I_KbF2R-cG-2FoVhliWmb7tcavzsA/viewform?usp=sf_link" target="_blank">Book a place</CTAButton>
      <hr style={{ borderColor: "#1D1F21", marginBottom: "5vw", marginTop: "3vw" }}/>
    </section>
  )
}

class App extends Component {
  render() {

    return (
      <MainContainerWithColoredBackground>
        <ContentContainer>
          <HeadlineContainer>
            <h1>ReactVienna Crew Workshops @ Styria</h1>
          </HeadlineContainer>
          <MainWrapper>
            <WrapperContentBox>
              <Headline>workshops</Headline>
              <ContentBox>
                {
                  Object.keys(workshops)
                    .map( workshopKey => <Workshop {...workshops[workshopKey]}/> )
                }
              </ContentBox>
            </WrapperContentBox>
            <WrapperFactsBox>
              <HeadlineFacts>venue</HeadlineFacts>
              <ContentBox>
                <p>All workshops will take place in beautiful southern Styria at <strong>Weingut Pichler Schober</strong>.</p>
                <p>
                  address:<br/>
                  Mitteregg 26,<br/>
                  8505 Mitteregg<br/>
                  <br/>
                  ~ 30min from Graz<br/>
                  ~ 40min from Maribor
                </p>
                <div style={{
                  heigth: 0,
                  overflow: "hidden",
                  paddingBottom: "56%",
                  position: "relative",
                }}>
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10924.382219901187!2d15.4505889!3d46.8024236!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfb85964153d16202!2sWeingut+Pichler-Schober!5e0!3m2!1sde!2sat!4v1527513972272"
                    frameborder="0"
                    style={{ 
                      border: "0",
                      height: "100%",
                      left: 0,
                      position: "absolute",
                      top: 0,
                      width: "100%",
                    }}
                    allowfullscreen={true}
                  ></iframe>
                </div>
                <p>In case you are looking for travel possibilities or offer a lift for somebody, you can use the <a style={{ color: "#5F719F"}} href="https://www.meetup.com/de-DE/grazjs/events/249491912/" target="_blank">discussion panel</a> of our <a style={{ color: "#5F719F"}} target="_blank" href="https://www.meetup.com/de-DE/grazjs/events/249491912/">meetup</a> (which will take place on 6th June in the evening).</p>
              </ContentBox>
            </WrapperFactsBox>
          </MainWrapper> 
        </ContentContainer>
      </MainContainerWithColoredBackground>  
    );
  }
}

export default App;
