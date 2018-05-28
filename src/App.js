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

const WorkshopsBox = styled(ContentBox)`

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
  font-size: 1.3em;
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
  return (
    <section>
      <h3 style={{ fontSize: "1.3em", fontWeight: 700 }}>{title}</h3>
      <p>by <TutorImage src={image} /><TutorLink href={twitter} target="_blank">{nameTutor}</TutorLink></p>
      <p>{description}</p>
      <br />
      <p>
        The topics covered include:
        <ul>
          { shortNotes.map( note => <li>{note}</li> ) } 
        </ul>
      </p>
      <ContentInfoBox>Price: {price} € excluding 20% VAT - Maximum {maxParticipants} persons.</ContentInfoBox>
      <CTAButton>Book a place</CTAButton>
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
              <WorkshopsBox>
                {
                  Object.keys(workshops)
                    .map( workshopKey => <Workshop {...workshops[workshopKey]}/> )
                }
              </WorkshopsBox>
            </WrapperContentBox>
            <WrapperFactsBox>
              <HeadlineFacts>venue / date / time</HeadlineFacts>
            </WrapperFactsBox>
          </MainWrapper> 
        </ContentContainer>
      </MainContainerWithColoredBackground>  
    );
  }
}

export default App;
