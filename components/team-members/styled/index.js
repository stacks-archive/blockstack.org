import styled, { css } from 'styled-components'

const StyledTeamMembers = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
`

const Avatar = styled.div`
  max-width: 100px;
  width: 100%;
  display: block;
  overflow: hidden;
  border-radius: 100%;
  img,
  picture {
    //max-width: 100px;
    //display: block;
    //overflow: hidden;
    //border-radius: 100%;
  }
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
  @media (max-width: 600px) {
    padding: 20px 0 60px;
    min-width: 100%;
    p {
      max-width: 100%;
    }
  }
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
