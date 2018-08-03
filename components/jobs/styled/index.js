import styled from 'styled-components'
import { colors } from '@common'

const StyledJobs = styled.div``

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;  
`

const Job = styled.div`
  padding: 40px 0px 40px 0;
  flex-grow: 1;
  width: 33%;
  max-width: 33%;
  min-width: 260px;
 
  h6 {
    padding-bottom: 10px !important;
    color: ${colors.text} !important;
  }
`
const Title = styled.h4`
  margin: 0 !important;
  padding: 0 0 10px 0;
`

StyledJobs.Job = Job
StyledJobs.Wrapper = Wrapper
StyledJobs.Title = Title
export { StyledJobs }
