import styled from 'styled-components'

const Item = styled.div`
  display: flex;
  align-items: center;
 
  & + & {
    margin-top: 80px;
  }
  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`
const Content = styled.div`
  flex-shrink: 1;
  flex-grow: 1;
`
const Image = styled.div`
  width: 300px;
  flex-shrink: 0;
  margin-right: 20px;
  a {
    display: block;
    border: none;
  }
  img {
    display: block;
    width: 300px;
  }
  @media (max-width: 600px) {
    width: calc(100% + 40px);
    min-width: calc(100% + 40px);
    transform: translateX(-20px);
    margin-bottom: 20px;
    margin-right: 0;
    img {
      width: 100%;
    }
  }
`

const StyledList = styled.div``

StyledList.Item = Item
StyledList.Image = Image
StyledList.Content = Content

export { StyledList }
