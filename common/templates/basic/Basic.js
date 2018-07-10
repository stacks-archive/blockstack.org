import React from 'react'

import './Basic.scss'

const TopArea = ({ title, description, buttonText, buttonLink }) => (
  <section className="blue-bg top-section top-area">
    <div className="container pb-margin align-center">
      <h1 className="h4">{title}</h1>
      {description ? (
        <div>
          <div className="h4 py-2">---</div>
          <h2 className="h4">{description}</h2>
        </div>
      ) : (
        false
      )}
      {buttonText && buttonLink ? (
        <a href={buttonLink} className="button white mt-3">
          {buttonText}
        </a>
      ) : (
        false
      )}
    </div>
  </section>
)

const Basic = (Component, meta) => {
  return class extends React.PureComponent {
    render() {
      return (
        <div className="md-basic-template">
          <TopArea {...meta} />
          <section>
            <div className="container py-margin">
              <div className="md-content rich-text align-center">
                <Component />
              </div>
            </div>
          </section>
        </div>
      )
    }
  }
}

export default Basic
