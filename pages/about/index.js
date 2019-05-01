import React, { useCallback } from 'react'
import { Section, Text, Title } from '@components/v2/section'
import { Box, Flex } from 'blockstack-ui'
import { Sections } from '@components/v2/sections'
import { useSpring, animated as a } from 'react-spring'
import { Image } from '@components/v2/image'
import { useInView } from 'react-intersection-observer'
import { PersonsList } from '@components/v2/advisors'
import { Team } from '@components/v2/team'
import { useHover } from 'use-events'
import { transition } from '@common/theme'
import ArrowTopRightIcon from 'mdi-react/ArrowTopRightIcon'
import { Investors } from '@components/v2/investors'
import { NIL, AppCo } from '@components/v2/vectors'
import CheckIcon from 'mdi-react/CheckIcon'

const ecosystemPartners = [
  {
    name: 'New Internet Labs',
    desc: 'Building a Blockstack browser',
    url: 'https://newinternetlabs.com',
    logo: NIL,
    color: '#642EF5'
  },
  {
    name: 'Signature Fund',
    desc: 'Venture capital for decentralized apps',
    url: 'https://signature.vc',
    logo: NIL,
    color: '#0014D9'
  },
  {
    name: 'App.co',
    desc: 'Real-time funding for decentralized apps',
    url: 'https://app.co',
    logo: AppCo,
    color: '#211F6D'
  }
]

const EcosystemPartner = ({ item, ...rest }) => {
  const [hovered, bind] = useHover()
  const Logo = item.logo
  return (
    <Box
      transition={transition}
      transform={`translate3d(0,${hovered ? -8 : 0}px,0)`}
      willChange="transform"
      cursor={hovered ? 'pointer' : 'unset'}
      is="a"
      href={item.url}
      target="_blank"
      style={{
        textDecoration: 'none'
      }}
      pb={4}
      {...rest}
      {...bind}
    >
      <Flex
        boxShadow={
          hovered
            ? '0px 16px 24px rgba(0, 0, 0, 0.04), 0px 1px 2px rgba(0, 0, 0, 0.08)'
            : '0px 2px 12px rgba(0, 0, 0, 0.04), 0px 1px 2px rgba(0, 0, 0, 0.08)'
        }
        borderRadius="8px"
        height={192}
        width={1}
        bg={item.color}
        alignItems="center"
        justifyContent="center"
      >
        <Box
          willChange="transform"
          transition={transition}
          transform={`scale(${hovered ? 1.1 : 1})`}
        >
          <Logo />
        </Box>
      </Flex>

      <Title is="h4" display="flex" alignItems="center" pt={3}>
        {item.name}

        <Box pl={2} opacity={hovered ? 1 : 0.5}>
          <ArrowTopRightIcon
            size="16px"
            style={{
              display: 'block'
            }}
          />
        </Box>
      </Title>

      <Box pt={1}>
        <Text fontSize={2}>{item.desc}</Text>
      </Box>
    </Box>
  )
}
const EcosystemPartners = ({ items, ...rest }) => {
  return (
    <Flex
      py={8}
      flexWrap="wrap"
      flexDirection={['column', 'column', 'row']}
      justifyContent="space-between"
      {...rest}
    >
      {items.map((item, key) => (
        <EcosystemPartner
          item={item}
          key={key}
          width={[1, 1, 'calc(33.3333% - 24px)']}
        />
      ))}
    </Flex>
  )
}

const advisors = [
  {
    photo: 'https://blockstack-www.imgix.net/muneeb-ali.jpg',
    name: 'Muneeb Ali',
    title: 'CEO and Co-founder',
    bio:
      'Muneeb Ali is the co-founder of Blockstack and serves as the CEO of Blockstack PBC. He received his PhD in distributed systems from Princeton University and gives guest lectures on cloud computing there.'
  },
  {
    photo: 'https://blockstack-www.imgix.net/albert-wenger.jpg',
    name: 'Albert Wenger',
    title: 'Managing Partner, USV',
    bio:
      'Albert Wenger is a managing partner at Union Square Ventures (USV), where he has led a variety of investments including USV’s investments in Etsy (IPO), MongoDB (IPO), Twilio (IPO), Behance (acquired by Adobe), and Firebase (acquired by Google). '
  },
  {
    photo: 'https://blockstack-www.imgix.net/jp-singh-headshot.jpg',
    name: 'JP Singh',
    title: 'Professor, Princeton',
    bio:
      'JP Singh has been a computer science faculty member at Princeton University since 1995. He received his PhD from from Stanford University and is a leading authority on scalable infrastructure and applications. '
  },
  {
    photo: 'https://blockstack-www.imgix.net/michael-freedman.jpg',
    name: 'Michael Freedman',
    title: 'Advisor, Technical',
    bio:
      'Michael Freedman is a distributed systems Professor at Princeton. He was awarded the Presidential Early Career Award (PECASE) and the Sloan Fellowship. '
  },
  {
    photo: 'https://blockstack-www.imgix.net/dave-morin.png',
    name: 'Dave Morin',
    title: 'Advisor, Product',
    bio:
      'Dave is the former Co-Founder & CEO of Path and founder of Slow Ventures. Dave was involved with the early days of Facebook where he co-created the Facebook Platform as well as Facebook Connect.'
  }
]
const Gradient = ({ hovered, ...rest }) => (
  <Box
    opacity={hovered ? 0.5 : 0.35}
    transition={transition}
    backgroundImage="linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)"
    {...rest}
  />
)

const HeroCard = ({ logo, title, url, bgPhoto, color = 'white', ...rest }) => {
  const [isHovering, bind] = useHover()
  const hovered = url && isHovering
  return (
    <Box
      flexShrink={0}
      {...bind}
      transition={transition}
      transform={`translate3d(0,${hovered ? -10 : 0}px, 0)`}
      style={{
        willChange: 'transform'
      }}
      position="relative"
      cursor={hovered ? 'pointer' : 'unset'}
      boxShadow={
        hovered
          ? '0px 16px 24px rgba(0, 0, 0, 0.04), 0px 1px 2px rgba(0, 0, 0, 0.08)'
          : '0px 2px 12px rgba(0, 0, 0, 0.04), 0px 1px 2px rgba(0, 0, 0, 0.08)'
      }
      {...rest}
    >
      {title && (
        <>
          <Gradient
            position="absolute"
            left={0}
            right={0}
            width="100%"
            height={'60%'}
            bottom={0}
            zIndex={5}
            hovered={hovered}
          />
          <Box
            position="absolute"
            left={0}
            right={0}
            width="100%"
            height="100%"
            bottom={0}
            zIndex={5}
            transition={transition}
            bg={'ink'}
            opacity={hovered ? 0.1 : 0}
          />
        </>
      )}
      {logo && (
        <Box p={5} zIndex={9} position="absolute" left={0} top={0}>
          <Box is="img" width="50%" src={logo} />
        </Box>
      )}
      {bgPhoto && (
        <Image
          src={bgPhoto}
          imgix={{
            w: rest.width,
            h: rest.height,
            fit: 'crop',
            crop: 'faces'
          }}
        />
      )}
      {title && (
        <Box p={5} zIndex={9} position="absolute" left={0} bottom={0}>
          <Title color={color} is="h4">
            {title}
          </Title>
        </Box>
      )}
    </Box>
  )
}
const HeroGrid = ({ ...rest }) => {
  return (
    <Flex ml="30%" {...rest}>
      <HeroCard
        logo="https://blockstack-www.imgix.net/logos/tedx-logo.png"
        bgPhoto="https://blockstack-www.imgix.net/photos/muneeb-video-still.png"
        title="Welcome to the Decentralized Internet"
        url="#"
        color="white"
        mr={5}
        width={400}
        height={480}
      />
      <Box flexShrink={0} width={488} mr={5}>
        <HeroCard
          logo="https://blockstack-www.imgix.net/logos/nyt-logo.png"
          bgPhoto="https://blockstack-www.imgix.net/photos/nyt-blockstack-team-photo.png"
          title="Tech Thinks It Has a Fix for the Problems It Created: Blockchain"
          url="#"
          color="white"
          width={488}
          height={296}
          mb={5}
        />
        <HeroCard width={488} height={336} bg="sky" />
      </Box>
      <Box flexShrink={0} mr={5}>
        <Flex mb={5}>
          <HeroCard
            logo="https://blockstack-www.imgix.net/logos/wired-logo.png"
            title="The decentralized internet is here, with some glitches"
            bgPhoto="https://blockstack-www.imgix.net/wired-bg.png"
            url="#"
            width={380}
            height={400}
            mr={5}
          />
          <HeroCard width={536} height={400} bg="sky" />
        </Flex>
        <Flex>
          <HeroCard
            bgPhoto="https://blockstack-www.imgix.net/dave-morin.png"
            title="Dave Morin Joins Blockstack PBC as an Advisor to Shape the Future of Decentralized Apps"
            url="#"
            width={532}
            height={400}
            bg="sky"
            mr={5}
          />
          <HeroCard
            bgPhoto="https://blockstack-www.imgix.net/photos/blockstack-team-summer-retreat-2018.jpg"
            width={364}
            height={232}
            bg="sky"
            flexGrow={1}
          />
        </Flex>
      </Box>
      <HeroCard width={400} height={300} bg="blue" />
    </Flex>
  )
}

const Hero = ({ ...rest }) => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 5, tension: 350, friction: 120 }
  }))
  const trans1 = (x, y) => `translate3d(${y / -15}%,0,0)`

  const [ref, inView, entry] = useInView({
    threshold: 0
  })

  const handleScroll = useCallback(
    (e) => {
      if (inView && typeof window !== 'undefined') {
        set({ xy: [window.scrollX, window.scrollY] })
      }
    },
    [inView]
  )

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [inView])

  return (
    <>
      <Box position="fixed" bg="ink" color="white" />
      <Section
        flexDirection="column"
        textAlign="center"
        minHeight={`calc(70vh - 112px)`}
        variant="white"
        width={1}
        alignItems="center"
        justifyContent="center"
      >
        <Section.Pane width={1} justifyContent="center" alignItems="center">
          <Section.Title maxWidth="80%">
            Blockstack is leading the&nbsp;way to a blockchain computing era
          </Section.Title>
        </Section.Pane>
      </Section>
      <div ref={ref}>
        <Box
          style={{
            overflowY: 'visible',
            overflowX: 'hidden'
          }}
          pt={5}
        >
          <Box is={a.div} style={{ transform: props.xy.interpolate(trans1) }}>
            <HeroGrid />
          </Box>
        </Box>
      </div>
    </>
  )
}

const sections = [
  {
    variant: 'white',

    panes: [
      {
        justifyContent: 'flex-start',
        title: {
          is: 'h2',
          children: (
            <>
              Blockstack is pioneering&nbsp;the next evolution of&nbsp;computing
            </>
          )
        }
      },
      {
        panes: [
          {
            text: {
              children: `Blockstack is a decentralized computing platform that puts users in control of their data and identity. Apps built on Blockstack make data breaches and trust violations an antiquated notion.`
            }
          },
          {
            text: {
              children: `Over 65 independent developer teams have built apps on our platform. Open-source software is at the heart of everything we do; we’re active on Slack, GitHub, Twitter, and the Blockstack Forum.  `
            }
          }
        ]
      }
    ]
  },
  {
    variant: 'white',
    children: (
      <Image
        src="https://blockstack-www.imgix.net/team-photos-1.png"
        imgix={{
          w: 1600
        }}
      />
    )
  },
  {
    variant: 'white',
    panes: [
      [
        {
          alignItems: 'flex-start',
          text: {
            children: `Blockstack PBC, a public benefit corporation at the heart of the Blockstack ecosystem, has raised $55M+ in capital to develop the core protocols and developer tools for the platform. We’re headquartered in New York City, with a globally distributed team that includes computer scientists from Princeton, Stanford, MIT and other top universities. `
          }
        },
        {
          text: {
            children: `After four years of research and development, we’ve deployed the initial version of our full-stack computing platform that can scale blockchain-based apps to millions of users today.`
          }
        }
      ],
      {
        justifyContent: 'flex-start',
        title: {
          is: 'h4',
          children: `Highlights`
        },
        list: {
          icon: CheckIcon,
          pt: 5,
          items: [
            'Founded in 2013 at Princeton',
            '$50M in funding',
            '4 years of research & development',
            '7,000+ active developers',
            '65 apps launched on Blockstack'
          ]
        }
      }
    ]
  },
  {
    variant: 'white',
    children: (
      <Image
        src="https://blockstack-www.imgix.net/team-photos-2.png"
        imgix={{
          w: 1600
        }}
      />
    )
  },
  {
    variant: 'white',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    panes: [
      {
        title: {
          is: 'h2',
          children: 'Our team'
        },
        text: {
          children:
            'Want to collaborate with the brightest minds in the industry? Join our team and build the future of blockchain computing.'
        },
        actions: [
          {
            type: 'link',
            label: 'Careers',
            href: '#'
          }
        ]
      },
      {
        width: 1,
        children: <Team />
      },
      {
        width: 1,
        flexDirection: ['column', 'column', 'row'],
        justifyContent: 'space-between',
        panes: [
          {
            width: [1, 1, 'calc(33.33333% - 24px)'],
            title: {
              is: 'h4',
              pb: 3,
              children: 'Scientists and PHDs for a solid foundation'
            },
            text: {
              children:
                'Five distributed system PhDs. Two advisors with Presidential Career Awards. Over 13K research citations. Research published at USENIX ATC, DCCL. '
            }
          },
          {
            width: [1, 1, 'calc(33.33333% - 24px)'],
            title: {
              is: 'h4',
              pb: 3,
              children: 'Product designers, engineers, and growth experts'
            },
            text: {
              children:
                'Distributed systems and server virtualization, building and testing smart contracts, cryptocurrency mining, developer education and community building.'
            }
          },
          {
            width: [1, 1, 'calc(33.33333% - 24px)'],
            title: {
              is: 'h4',
              pb: 3,
              children: 'Legal and finance experts for a compliant token'
            },
            text: {
              children:
                'Experience structuring compliant token sales, auditing financials and structuring funds to allow large endowments to participate.'
            }
          }
        ]
      }
    ]
  },
  {
    variant: 'white',
    panes: [
      {
        width: 1,
        title: {
          children: 'Blockstack PBC board and advisors'
        }
      },
      {
        width: 1,
        children: <PersonsList items={advisors} />
      }
    ]
  },
  {
    variant: 'white',
    panes: [
      {
        title: {
          is: 'h2',
          children: (
            <>Supported by the&nbsp;pioneers&nbsp; of decentralized computing</>
          )
        }
      },
      {
        text: {
          children:
            'We’ve raised $50M from industry leading advisors and investors'
        },
        actions: [
          {
            type: 'link',
            label: 'Invest',
            href: 'https://angel.co/blockstack',
            target: '_blank'
          }
        ]
      },
      {
        width: 1,
        children: <Investors />
      }
    ]
  },
  {
    variant: 'white',
    panes: [
      {
        width: 1,
        title: {
          children: 'Ecosystem partners'
        }
      },
      {
        width: 1,
        children: <EcosystemPartners items={ecosystemPartners} />
      }
    ]
  }
]

class AboutPage extends React.Component {
  static async getInitialProps(ctx) {
    return {
      meta: {
        title: 'About',
        path: '/about'
      }
    }
  }
  render() {
    return (
      <>
        <Hero />
        <Sections sections={sections} />
      </>
    )
  }
}

export default AboutPage
