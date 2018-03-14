import { Component } from 'react'
import { Link } from 'react-router'

import Image from '../components/Image'

class VideosPresentation extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="bg-white sectionWrap section-spacing container-fluid">
        <div className="container">
          <section>
            <h2 className="h-primary text-center">Videos</h2>
            <div className="post-content m-t-3">
              <div
                className="col-sm-12 col-md-8 col-centered m-b-100"
                style={{ textAlign: 'center' }}
              >
                <Link to="https://youtu.be/IfONVXL6tnk" target="_blank">
                  <Image
                    className="img-video-presentation"
                    src="/images/visuals/summit-placeholder-design.png"
                    retinaSupport={false}
                  />
                  <h4
                    className="font-weight-bold center"
                    style={{ marginTop: '10px', marginBottom: '10px' }}
                  >
                    The Next Wave of Computing
                  </h4>
                </Link>
                <p className="font-weight-bold">
                  Muneeb Ali,{' '}
                  <span className="font-weight-normal font-italic">
                    Blockstack Co-founder
                  </span>
                </p>
              </div>

              <div
                className="col-sm-12 col-md-8 col-centered m-b-100"
                style={{ textAlign: 'center' }}
              >
                <Link to="https://youtu.be/YzlyEuRfXxo" target="_blank">
                  <Image
                    className="img-video-presentation"
                    src="/images/visuals/summit-placeholder-design.png"
                    retinaSupport={false}
                  />
                  <h4
                    className="font-weight-bold center"
                    style={{ marginTop: '10px', marginBottom: '10px' }}
                  >
                    A New Blockstack Internet
                  </h4>
                </Link>
                <p className="font-weight-bold">
                  Ryan Shea,{' '}
                  <span className="font-weight-normal font-italic">
                    Blockstack Co-founder
                  </span>
                </p>
              </div>

              <div
                className="col-sm-12 col-md-8 col-centered m-b-100"
                style={{ textAlign: 'center' }}
              >
                <Link to="https://youtu.be/m3pwRj68zQ0" target="_blank">
                  <Image
                    className="img-video-presentation"
                    src="/images/visuals/summit-placeholder-design.png"
                    retinaSupport={false}
                  />
                  <h4
                    className="font-weight-bold center"
                    style={{ marginTop: '10px', marginBottom: '10px' }}
                  >
                    Blockstack App Ecosystem
                  </h4>
                </Link>
                <p className="font-weight-bold">
                  Patrick Stanley,{' '}
                  <span className="font-weight-normal font-italic">
                    Blockstack Growth Partner
                  </span>
                </p>
              </div>

              <div
                className="col-sm-12 col-md-8 col-centered m-b-100"
                style={{ textAlign: 'center' }}
              >
                <Link to="https://youtu.be/M3Nn8nfXuB0" target="_blank">
                  <Image
                    className="img-video-presentation"
                    src="/images/visuals/summit-placeholder-design.png"
                    retinaSupport={false}
                  />
                  <h4
                    className="font-weight-bold center"
                    style={{ marginTop: '10px', marginBottom: '10px' }}
                  >
                    Life After Google
                  </h4>
                </Link>
                <p className="font-weight-bold">
                  George Gilder,{' '}
                  <span className="font-weight-normal font-italic">
                    Author & Information Theorist
                  </span>
                </p>
              </div>

              <div
                className="col-sm-12 col-md-8 col-centered m-b-100"
                style={{ textAlign: 'center' }}
              >
                <Link to="https://youtu.be/sV3VezgIGrI" target="_blank">
                  <Image
                    className="img-video-presentation"
                    src="/images/visuals/summit-placeholder-design.png"
                    retinaSupport={false}
                  />
                  <h4
                    className="font-weight-bold center"
                    style={{ marginTop: '10px', marginBottom: '10px' }}
                  >
                    Building Decentralized Consumer Applications: Casa
                  </h4>
                </Link>
                <p className="font-weight-bold">
                  Jeremy Welch,{' '}
                  <span className="font-weight-normal font-italic">
                    Casa / Bedkin Founder
                  </span>
                </p>
              </div>

              <div
                className="col-sm-12 col-md-8 col-centered m-b-100"
                style={{ textAlign: 'center' }}
              >
                <Link to="https://youtu.be/kvfnZ9mOAKg" target="_blank">
                  <Image
                    className="img-video-presentation"
                    src="/images/visuals/summit-placeholder-design.png"
                    retinaSupport={false}
                  />
                  <h4
                    className="font-weight-bold center"
                    style={{ marginTop: '10px', marginBottom: '10px' }}
                  >
                    A Conversation with Bram Cohen & Muneeb Ali
                  </h4>
                </Link>
                <p className="font-weight-bold">
                  Bram Cohen,{' '}
                  <span className="font-weight-normal font-italic">
                    BitTorrent Creator <br />
                  </span>
                  Muneeb Ali,{' '}
                  <span className="font-weight-normal font-italic">
                    Blockstack Co-founder
                  </span>
                </p>
              </div>

              <div
                className="col-sm-12 col-md-8 col-centered m-b-100"
                style={{ textAlign: 'center' }}
              >
                <Link to="https://youtu.be/IrSn3zx2GbM" target="_blank">
                  <Image
                    className="img-video-presentation"
                    src="/images/visuals/summit-placeholder-design.png"
                    retinaSupport={false}
                  />
                  <h4
                    className="font-weight-bold center"
                    style={{ marginTop: '10px', marginBottom: '10px' }}
                  >
                    A Conversation with Naval Ravikant & Ryan Shea
                  </h4>
                </Link>
                <p className="font-weight-bold">
                  Naval Ravikant,{' '}
                  <span className="font-weight-normal font-italic">
                    AngelList Founder<br />
                  </span>
                  Ryan Shea,{' '}
                  <span className="font-weight-normal font-italic">
                    Blockstack Co-founder
                  </span>
                </p>
              </div>

              <div
                className="col-sm-12 col-md-8 col-centered m-b-100"
                style={{ textAlign: 'center' }}
              >
                <Link to="https://youtu.be/LgQT874KHuw" target="_blank">
                  <Image
                    className="img-video-presentation"
                    src="/images/visuals/summit-placeholder-design.png"
                    retinaSupport={false}
                  />
                  <h4
                    className="font-weight-bold center"
                    style={{ marginTop: '10px', marginBottom: '10px' }}
                  >
                    Decentralization & the Knowledge Age
                  </h4>
                </Link>
                <p className="font-weight-bold">
                  Albert Wenger,{' '}
                  <span className="font-weight-normal font-italic">
                    Union Square Ventures General Partner
                  </span>
                </p>
              </div>

              <div
                className="col-sm-12 col-md-8 col-centered m-b-100"
                style={{ textAlign: 'center' }}
              >
                <Link to="https://youtu.be/4UXT5YVJwB4" target="_blank">
                  <Image
                    className="img-video-presentation"
                    src="/images/visuals/summit-placeholder-design.png"
                    retinaSupport={false}
                  />
                  <h4
                    className="font-weight-bold center"
                    style={{ marginTop: '10px', marginBottom: '10px' }}
                  >
                    Quantifying Decentralization
                  </h4>
                </Link>
                <p className="font-weight-bold">
                  Balaji Srinivasan,{' '}
                  <span className="font-weight-normal font-italic">
                    Andreessen Horowitz Board Partner and 21 CEO
                  </span>
                </p>
              </div>

              <div
                className="col-sm-12 col-md-8 col-centered m-b-100"
                style={{ textAlign: 'center' }}
              >
                <Link to="https://youtu.be/3PcR4HWJnkY" target="_blank">
                  <Image
                    className="img-video-presentation"
                    src="/images/visuals/summit-placeholder-design.png"
                    retinaSupport={false}
                  />
                  <h4
                    className="font-weight-bold center"
                    style={{ marginTop: '10px', marginBottom: '10px' }}
                  >
                    The Importance of Layer Two
                  </h4>
                </Link>
                <p className="font-weight-bold">
                  Elizabeth Stark,{' '}
                  <span className="font-weight-normal font-italic">
                    Lightning Labs Co-founder
                  </span>
                </p>
              </div>

              <div
                className="col-sm-12 col-md-8 col-centered m-b-100"
                style={{ textAlign: 'center' }}
              >
                <Link to="https://youtu.be/tXmnBi4m5x4" target="_blank">
                  <Image
                    className="img-video-presentation"
                    src="/images/visuals/summit-placeholder-design.png"
                    retinaSupport={false}
                  />
                  <h4
                    className="font-weight-bold center"
                    style={{ marginTop: '10px', marginBottom: '10px' }}
                  >
                    Storage Panel
                  </h4>
                </Link>
                <p className="font-weight-bold">
                  Muneeb Ali,{' '}
                  <span className="font-weight-normal font-italic">
                    Blockstack Co-founder<br />
                  </span>
                  Juan Benet,{' '}
                  <span className="font-weight-normal font-italic">
                    Filecoin, IPFS Founder<br />
                  </span>
                  Galen Wolfe-Pauly,{' '}
                  <span className="font-weight-normal font-italic">
                    Urbit Founder<br />
                  </span>
                  Moderated by Dan Elitzer,{' '}
                  <span className="font-weight-normal font-italic">
                    IDEO coLAB Blockchain & Digital Identity Lead
                  </span>
                </p>
              </div>

              <div
                className="col-sm-12 col-md-8 col-centered m-b-100"
                style={{ textAlign: 'center' }}
              >
                <Link to="https://youtu.be/PjE1O8K-h0I" target="_blank">
                  <Image
                    className="img-video-presentation"
                    src="/images/visuals/summit-placeholder-design.png"
                    retinaSupport={false}
                  />
                  <h4
                    className="font-weight-bold center"
                    style={{ marginTop: '10px', marginBottom: '10px' }}
                  >
                    Identity Panel
                  </h4>
                </Link>
                <p className="font-weight-bold">
                  Daniel Buchner,{' '}
                  <span className="font-weight-normal font-italic">
                    Microsoft Head of Decentralized Identity<br />
                  </span>
                  Drummond Reed,{' '}
                  <span className="font-weight-normal font-italic">
                    Evernym Chief Trust Officer<br />
                  </span>
                  Melanie Shapiro,{' '}
                  <span className="font-weight-normal font-italic">
                    Tokenzie CEO<br />
                  </span>
                  Ryan Shea,{' '}
                  <span className="font-weight-normal font-italic">
                    Blockstack Co-founder<br />
                  </span>
                  Moderated by Dan Elitzer,{' '}
                  <span className="font-weight-normal font-italic">
                    IDEO coLAB Blockchain & Digital Identity Lead
                  </span>
                </p>
              </div>

              <div
                className="col-sm-12 col-md-8 col-centered m-b-100"
                style={{ textAlign: 'center' }}
              >
                <Link to="https://youtu.be/OnHRnlrO6bQ" target="_blank">
                  <Image
                    className="img-video-presentation"
                    src="/images/visuals/summit-placeholder-design.png"
                    retinaSupport={false}
                  />
                  <h4
                    className="font-weight-bold center"
                    style={{ marginTop: '10px', marginBottom: '10px' }}
                  >
                    Payments Panel
                  </h4>
                </Link>
                <p className="font-weight-bold">
                  Ryan X Charles,{' '}
                  <span className="font-weight-normal font-italic">
                    Yours Network CEO<br />
                  </span>
                  Elizabeth Stark,{' '}
                  <span className="font-weight-normal font-italic">
                    Lightning Labs Co-founder<br />
                  </span>
                  Balaji Srinivasan,{' '}
                  <span className="font-weight-normal font-italic">
                    Andreessen Horowitz Board Partner and 21 CEO<br />
                  </span>
                  Moderated by Tuur Demeester,{' '}
                  <span className="font-weight-normal font-italic">
                    Adamant Research, Economic & Investor, Editor in Chief
                  </span>
                </p>
              </div>

              <div
                className="col-sm-12 col-md-8 col-centered m-b-100"
                style={{ textAlign: 'center' }}
              >
                <Link to="https://youtu.be/o1mkxci6vvo" target="_blank">
                  <Image
                    className="img-video-presentation"
                    src="/images/visuals/summit-placeholder-design.png"
                    retinaSupport={false}
                  />
                  <h4
                    className="font-weight-bold center"
                    style={{ marginTop: '10px', marginBottom: '10px' }}
                  >
                    Investment Panel
                  </h4>
                </Link>
                <p className="font-weight-bold">
                  Meltem Demirors,{' '}
                  <span className="font-weight-normal font-italic">
                    Digital Currency Group Director<br />
                  </span>
                  Naval Ravikant,{' '}
                  <span className="font-weight-normal font-italic">
                    AngelList Founder<br />
                  </span>
                  Garry Tan,{' '}
                  <span className="font-weight-normal font-italic">
                    Initialized Capital Managing Partner<br />
                  </span>
                  Moderated by Brian Lio,{' '}
                  <span className="font-weight-normal font-italic">
                    Smith + Crown CEO
                  </span>
                </p>
              </div>

              <div
                className="col-sm-12 col-md-8 col-centered m-b-100"
                style={{ textAlign: 'center' }}
              >
                <Link to="https://youtu.be/_ai0fXJUoo8" target="_blank">
                  <Image
                    className="img-video-presentation"
                    src="/images/visuals/summit-placeholder-design.png"
                    retinaSupport={false}
                  />
                  <h4
                    className="font-weight-bold center"
                    style={{ marginTop: '10px', marginBottom: '10px' }}
                  >
                    OpenBazaar 2.0 and Blockstack
                  </h4>
                </Link>
                <p className="font-weight-bold">
                  Brian Hoffman,{' '}
                  <span className="font-weight-normal font-italic">
                    OpenBazaar Founder
                  </span>
                </p>
              </div>

              <div
                className="col-sm-12 col-md-8 col-centered m-b-100"
                style={{ textAlign: 'center' }}
              >
                <Link to="https://youtu.be/SWl2HBNyK48" target="_blank">
                  <Image
                    className="img-video-presentation"
                    src="/images/visuals/summit-placeholder-design.png"
                    retinaSupport={false}
                  />
                  <h4
                    className="font-weight-bold center"
                    style={{ marginTop: '10px', marginBottom: '10px' }}
                  >
                    Creating the Decentralized Connectivity Layer
                  </h4>
                </Link>
                <p className="font-weight-bold">
                  Daniela Perdomo,{' '}
                  <span className="font-weight-normal font-italic">
                    goTenna CEO and Co-founder
                  </span>
                </p>
              </div>

              <div
                className="col-sm-12 col-md-8 col-centered m-b-100"
                style={{ textAlign: 'center' }}
              >
                <Link to="https://youtu.be/JY5EMjHe4-Y" target="_blank">
                  <Image
                    className="img-video-presentation"
                    src="/images/visuals/summit-placeholder-design.png"
                    retinaSupport={false}
                  />
                  <h4
                    className="font-weight-bold center"
                    style={{ marginTop: '10px', marginBottom: '10px' }}
                  >
                    Q&A with Muneeb Ali & Ryan Shea
                  </h4>
                </Link>
                <p className="font-weight-bold">
                  Blockstack Co-founders <br />
                  Moderated by Alice Lloyd George,{' '}
                  <span className="font-weight-normal font-italic">
                    RRE Ventures Principal
                  </span>
                </p>
              </div>

              <div
                className="col-sm-12 col-md-8 col-centered m-b-100"
                style={{ textAlign: 'center' }}
              >
                <Link to="https://youtu.be/6OWxGqbknFQ" target="_blank">
                  <Image
                    className="img-video-presentation"
                    src="/images/visuals/summit-placeholder-design.png"
                    retinaSupport={false}
                  />
                  <h4
                    className="font-weight-bold center"
                    style={{ marginTop: '10px', marginBottom: '10px' }}
                  >
                    Governance
                  </h4>
                </Link>
                <p className="font-weight-bold">
                  Arthur Breitman,{' '}
                  <span className="font-weight-normal font-italic">
                    Tezos Co-founder
                  </span>
                </p>
              </div>

              <div
                className="col-sm-12 col-md-8 col-centered m-b-100"
                style={{ textAlign: 'center' }}
              >
                <Link to="https://youtu.be/EtYJ748LA1M" target="_blank">
                  <Image
                    className="img-video-presentation"
                    src="/images/visuals/summit-placeholder-design.png"
                    retinaSupport={false}
                  />
                  <h4
                    className="font-weight-bold center"
                    style={{ marginTop: '10px', marginBottom: '10px' }}
                  >
                    Yours: Improving Content Quality with P2P Micropayments
                  </h4>
                </Link>
                <p className="font-weight-bold">
                  Ryan X Charles,{' '}
                  <span className="font-weight-normal font-italic">
                    Yours Network CEO
                  </span>
                </p>
              </div>

              <div
                className="col-sm-12 col-md-8 col-centered m-b-100"
                style={{ textAlign: 'center' }}
              >
                <Link to="https://youtu.be/7Bnitb-HAko" target="_blank">
                  <Image
                    className="img-video-presentation"
                    src="/images/visuals/summit-placeholder-design.png"
                    retinaSupport={false}
                  />
                  <h4
                    className="font-weight-bold center"
                    style={{ marginTop: '10px', marginBottom: '10px' }}
                  >
                    How Blockchain will Revolutionize Supply Chain & Insurance
                  </h4>
                </Link>
                <p className="font-weight-bold">
                  Leanne Kemp,{' '}
                  <span className="font-weight-normal font-italic">
                    Everledger Founder
                  </span>
                </p>
              </div>

              <div
                className="col-sm-12 col-md-8 col-centered m-b-100"
                style={{ textAlign: 'center' }}
              >
                <Link to="https://youtu.be/UtOzC-zoA3g" target="_blank">
                  <Image
                    className="img-video-presentation"
                    src="/images/visuals/summit-placeholder-design.png"
                    retinaSupport={false}
                  />
                  <h4
                    className="font-weight-bold center"
                    style={{ marginTop: '10px', marginBottom: '10px' }}
                  >
                    UX Talk - Design Thinking
                  </h4>
                </Link>
                <p className="font-weight-bold">
                  Tyler Schmidt,{' '}
                  <span className="font-weight-normal font-italic">
                    UX Design Consultant
                  </span>
                </p>
              </div>

              <div
                className="col-sm-12 col-md-8 col-centered m-b-100"
                style={{ textAlign: 'center' }}
              >
                <Link to="https://youtu.be/JlQ-L_t53V8" target="_blank">
                  <Image
                    className="img-video-presentation"
                    src="/images/visuals/summit-placeholder-design.png"
                    retinaSupport={false}
                  />
                  <h4
                    className="font-weight-bold center"
                    style={{ marginTop: '10px', marginBottom: '10px' }}
                  >
                    Economics of Distributed Systems
                  </h4>
                </Link>
                <p className="font-weight-bold">
                  Zavain Dar,{' '}
                  <span className="font-weight-normal font-italic">
                    Lux Capital Partner
                  </span>
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
