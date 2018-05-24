import React, { Component } from 'react';
import './App.css';
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
  flex: 1;
  color: white;
  border: 3px dotted #5F719F;
  box-sizing: content-box;
`;

const WrapperFactsBox = styled(WrapperContentBox)`
  border: 3px dotted #489851;
`

const HeadlineWorkshops = styled.h2`
  margin-top: 0;
  font-weight: normal;
  background-color: #5F719F;
`;

const HeadlineFacts = styled(HeadlineWorkshops)`
  background-color: #489851;
`;

const WorkshopBox = styled.div`
  padding: 0 1em 2em 1em;
  color: #333;
  text-align: initial;
`;

const Workshop = ({
  nameTutor,
  title,
  description,
  price,
  workshops,
  maxParticipants,
}) => {
  return (
    <div>{nameTutor}</div>
  )
}

class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">ReactVienna Crew Workshops @ Styria</h1>
        </header>
        <MainWrapper>
          <WrapperContentBox>
            <HeadlineWorkshops>workshops</HeadlineWorkshops>
            <WorkshopBox>
              {
                Object.keys(workshops).map( workshopKey => <Workshop {...workshops[workshopKey]}/> )
              }
            </WorkshopBox>
          </WrapperContentBox>
          <WrapperFactsBox>
            <HeadlineFacts>venue, date and time</HeadlineFacts>
          </WrapperFactsBox>
        </MainWrapper> 
      </div>  
    );
  }
}

export default App;
