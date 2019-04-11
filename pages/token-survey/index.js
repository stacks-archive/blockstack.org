import React from 'react'
const meta = {
  path: '/token-survey',
  title: 'Blockstack Token Sale Survey',
  description: ''
}
class SurveyPage extends React.PureComponent {
  static async getInitialProps(ctx) {
    return {
      meta
    }
  }

  componentDidMount() {
    const script = document.createElement('script')
    script.src = 'https://paperform.co/__embed'
    document.body.appendChild(script)
  }

  render() {
    return (
      <>
        <div data-paperform-id="sazbcnez" />
      </>
    )
  }
}

export default SurveyPage
