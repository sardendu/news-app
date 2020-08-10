import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import { FaCommentAlt, FaThumbsUp, FaRegEye } from 'react-icons/fa'
import Card from './Card'
const StyledRoot = styled.div`
  padding: 50px 12px;
`
const StyledContainer = styled.div`
  max-width: 550px;
  width: 100%;
  margin: auto;
`
const Parent = () => {
  // var cards=[{title: 'test 1', description: 'description 1'}, {title: 'test 2', description: 'description 2'}]
  const [data, setData] = useState([]);
  useEffect(() => {
      const latestNewsNY = 'https://sardendu-news-feed-backend.glitch.me/latestNewsNY';
      fetch(latestNewsNY)
      .then(response => response.json()) // parse the JSON from the server
      .then(news => {
          var result = news.results
          setData(result);
      }).catch(err => setData([]))
    
    }, []);
  const date = new Date().toLocaleDateString()
  const buttons = [
    {
      label: '0 Comments',
    },
    {
      label: '242 Likes',
    },
    {
      label: '187288 Views',
    },
  ]

  
  return (
    <div>
          {data.map(obj =>
                     <div><Card title={obj.title} date={new Date(obj.updated_date).toLocaleDateString()} description={obj.abstract} actions={buttons} link={obj.short_url}/><br/></div>
          )}
    </div>
  )

}
export default Parent