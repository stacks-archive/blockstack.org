import styled from 'styled-components'

const Item = styled.div`
  display: flex;
  flex-wrap: wrap;
  & + & {
    margin-top: 80px;
  }
`

const Image = styled.div`
  width: 300px;
  flex-shrink: 0;
  @media (max-width: 600px) {
    width: 100%;
    min-width: 100%;
  }
`

const StyledList = styled.div``

StyledList.Item = Item
StyledList.Image = Image

export { StyledList }
