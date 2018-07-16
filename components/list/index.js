import React from 'react'
import { StyledList } from './styled'

const ListItem = ({ image, link, children, ...rest }) => (
  <StyledList.Item {...rest}>
    <StyledList.Image>
      <img src={image.src} alt={image.alt} />
    </StyledList.Image>
    <div>{children}</div>
  </StyledList.Item>
)

const List = ({ items, ...rest }) => (
  <StyledList {...rest}>
    {items.map((item, i) => <ListItem {...item} key={i} />)}
  </StyledList>
)

export { List, ListItem }
