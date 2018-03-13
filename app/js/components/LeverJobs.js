import { Component } from 'react';
import axios from 'axios';
import JobListing from './JobListing';

class LeverJobs extends Component {
  constructor(props) {
    super(props);
    this.sortJobs = this.sortJobs.bind(this);
    this.state = { jobs: [] };
  }

  componentDidMount() {
    axios
      .get('https://api.lever.co/v0/postings/blockstack?mode=json')
      .then((res) => {
        const jobs = this.sortJobs(res.data);
        this.setState({ jobs });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  sortJobs(jobs) {
    return jobs.sort((a, b) => {
      const teamA = a.categories.team;
      const teamB = b.categories.team;
      if (teamA < teamB) {
        return -1;
      }
      if (teamA > teamB) {
        return 1;
      }
      return 0;
    });
  }

  render() {
    return (
      <div className="jobs-sidebar">
        <p className="mb-5">
          <strong>Open Positions</strong>
        </p>
        {this.state.jobs.map(({ text, categories = {}, hostedUrl }) => (
          <JobListing
            key={hostedUrl}
            title={text}
            location={categories.location}
            team={categories.team}
            url={hostedUrl}
          />
        ))}
      </div>
    );
  }
}

export default LeverJobs;
