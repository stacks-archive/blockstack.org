import { Component, PropTypes } from 'react'
import { Link }                 from 'react-router'

import Image               from '../components/Image'

class VideosPresentation extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="sectionContainerLight section-spacing container-fluid">
        <div className="container">
          <section>
            <h2 className="h-primary text-center">
              Videos
            </h2>
            <div className="post-content m-t-3">
                <div className="col-sm-12 col-md-8 col-centered m-b-3" style={{ textAlign: 'center' }} >
                  <Image className="img-video-presentation"
                      src="/images/visuals/summit-placeholder.png"
                      retinaSupport={false} />
                  <h4 className="center" style={{ marginTop: '10px', marginBottom: '10px' }} >
                    The Next Wave of Computing
                  </h4>
                  <p>
                    Muneeb Ali, Blockstack Co-founder
                  </p>
                </div>
                <div className="col-sm-12 col-md-8 col-centered m-b-3" style={{ textAlign: 'center' }} >
                  <Image className="img-video-presentation"
                      src="/images/visuals/summit-placeholder.png"
                      retinaSupport={false} />
                  <h4 className="center" style={{ marginTop: '10px', marginBottom: '10px' }} >
                    The Next Wave of Computing
                  </h4>
                  <p>
                    Muneeb Ali, Blockstack Co-founder
                  </p>
                </div>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default VideosPresentation