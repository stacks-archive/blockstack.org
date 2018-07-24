import React from 'react'
import { featuredPress } from './featured'
import { pressData } from './data'
import { Image } from '@components/image'
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
  margin-bottom: 80px;
  margin-top: 30px;
  height: 150px;
  img {
    display: block;
    width: 150px;
    mix-blend-mode: multiply !important;
    margin-bottom: 20px;
  }
`

const PressLogoImg = styled.div`
  height: 150px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
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

const AdditionalPress = () => (
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
)
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
          {featured.map((item, i) => (
            <PressLogo key={i}>
              {item.image.src && (
                <PressLogoImg>
                  <Image src={item.image.src} alt={item.image.alt} noBlur />
                </PressLogoImg>
              )}
              <p className={'rich-text'}>
                <a href={item.link}>{item.title}</a>
              </p>
            </PressLogo>
          ))}
        </PressContainer>
      </>
    )
  }
}

export default PressPage
