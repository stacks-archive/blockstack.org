import React from 'react'
import { featuredPress } from './featured'
import { pressData } from './data'
import styled from 'styled-components'
const PressContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
`
const PressLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  width: 33%;
  padding: 20px;
  flex-grow: 0;
  flex-shrink: 0;
  flex-direction: column;
  margin-bottom: 30px;
  margin-top: 30px;
  img {
    display: block;
    width: 150px;
    max-height: 50px;
    margin-bottom: 20px;
  }
`
const meta = {
  path: '/press',
  title: 'Press',
  notRichText: true
}

const featured = featuredPress.map((item) => ({
  ...item,
  image: {
    ...item.image,
    alt: item.title
  },
  children: (
    <>
      <h4>{item.title}</h4>
    </>
  )
}))
class PressPage extends React.PureComponent {
  static async getInitialProps(ctx) {
    return {
      meta
    }
  }

  render() {
    return (
      <>
        <PressContainer>
          {featured.map((item) => (
            <PressLogo>
              <img src={item.image.src} alt={item.image.alt} />
              <p className={'rich-text'}>
                <a href={item.link}>{item.title}</a>
              </p>
            </PressLogo>
          ))}
        </PressContainer>
        <div>
          <h5
            style={{
              paddingBottom: '40px'
            }}
          >
            Additional Press
          </h5>
          {pressData.map((item, i) => (
            <div key={i}>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <p>{item.title}</p>
                <h6>
                  {item.publication} - {item.date}
                </h6>
              </a>
              <br />
            </div>
          ))}
        </div>
      </>
    )
  }
}

export default PressPage
