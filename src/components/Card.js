import React from 'react'
import styled from 'styled-components'

const ActionButton = styled.button`
  margin: 0 5px;
  padding: 8px 14px;
  background: rgba(155, 155, 155, 0.2);
  color: #fff;
  cursor: pointer;
  border: 1px solid #fff;
  outline: 0;
  font-weight: 300;
  :hover {
    opacity: 0.8;
  }
`

const Title = styled.h2`
  color: #fff;
  font-weight: 300;
  font-weight: bold;
`

const Date = styled.div`
  color: #ccc;
  font-weight: 300;
  margin: 6px 0;
`

const Description = styled.p`
  color: #fff;
  font-weight: 300;
  font-style: oblique;
`
const Card = ({ title, date, description, actions, link }) => (
  <div style={{ color: '#fff',   background: '#17a2b8' }}>
    <Title>{title}</Title>
    <Date>{date}</Date>
    <Description>{description}</Description>
    {actions.map(({ label }) => (
      <ActionButton>{label}</ActionButton>
    ))}
    <ActionButton><a href={link} target='_blank' style={{color:'white'}}>More Detail..</a></ActionButton>
  </div>
)
export default Card