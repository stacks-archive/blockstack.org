import React from 'react'
import { StyledList } from './styled'
import {Image} from '@components/image'

const ListItem = ({ image, link, children, ...rest }) => (
  <StyledList.Item {...rest}>
    <StyledList.Image>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Image src={image.src} alt={image.alt} />
      </a>
    </StyledList.Image>
    <StyledList.Content>{children}</StyledList.Content>
  </StyledList.Item>
)

const List = ({ items, ...rest }) => (
  <StyledList {...rest}>
    {items.map((item, i) => <ListItem {...item} key={i} />)}
  </StyledList>
)

export { List, ListItem }
