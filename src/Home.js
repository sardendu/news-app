import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Parent from './components/Parent';
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 5em;
  margin-left: 6em;
  margin-right: 6em;
`;
export const Home = (props) => {
  const [data, setData] = useState(123);
  useEffect(() => {
      /* 
      const API_KEY = '263ca21518db420e9e62552f3c034dcb'
      var url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=263ca21518db420e9e62552f3c034dcb';
      This news api giving error {"status":"error","code":"corsNotAllowed","message":"Requests from the browser are not allowed on the Developer plan, except from localhost."}

      */
      // const latestNewsNY = 'https://sardendu-news-feed-backend.glitch.me/latestNewsNY';
      // fetch(latestNewsNY)
      // .then(response => response.json()) // parse the JSON from the server
      // .then(news => {
      //     var result = news.results
      //     setData(JSON.stringify(result));
      // }).catch(err => setData('Server error ' + err))
    
    });
  return (
  <GridWrapper>
      <Parent/>
  </GridWrapper>
)
}
