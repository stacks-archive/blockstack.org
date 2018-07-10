import styled, { css } from 'styled-components'

const StyledTeamMembers = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
`

const Avatar = styled.img`
  max-width: 100px;
  display: block;
  overflow: hidden;
  border-radius: 100%;
`

const StyledTeamMember = styled.div`
  flex-grow: 1;
  width: 33%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-width: 380px;
  padding: 20px 40px 100px;
  h3,
  h5,
  h6 {
    margin: 0;
    padding: 10px 0;
  }
  p {
    text-align: left;
  }
`

StyledTeamMember.Avatar = Avatar

export { StyledTeamMember, StyledTeamMembers }
