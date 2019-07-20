import React from 'react'
import { Box, Flex } from 'blockstack-ui'
import useIsInViewport from 'use-is-in-viewport'
import { useVisibility } from '@common/hooks'
import { useHover } from 'use-events'

const Video = ({
  playing,
  src,
  poster,
  hideOverlay,
  ratio = ['65%', '80%', '75%', '75%', `61.25%`],
  videoWidth = ['120%', '160%', '140%', '150%', '110%'],
  noHover,
  ...rest
}) => {
  const [inView, targetRef] = useIsInViewport({
    modTop: '0px',
    modRight: '0px',
    modBottom: '-200px',
    modLeft: '0px'
  })
  const [isHovering, bind] = useHover()
  const isTabInView = useVisibility()
  const ref = React.useRef()
  const hovered = !noHover && isHovering
  React.useEffect(() => {
    if (inView && isTabInView && !playing) {
      ref.current.play()
    } else {
      ref.current.pause()
    }
  }, [inView, isTabInView, playing])

  return (
    <Box {...rest}>
      <div ref={targetRef}>
        <Flex
          alignItems="center"
          justifyContent="center"
          position="relative"
          cursor={hovered && !playing ? 'pointer' : 'unset'}
          overflow="hidden"
          {...bind}
        >
          <Box
            width={1}
            height={'0px'}
            pb={ratio}
            top={0}
            left={0}
            zIndex={98}
            bg="white"
            backgroundImage={`url(${poster})`}
            backgroundSize="cover"
            backgroundPosition="center center"
          />
          <Box position="absolute" width={videoWidth}>
            <video
              ref={ref}
              style={{
                left: '50%',
                top: '50%',
                position: 'absolute',
                transform: 'translateX(-50%) translateY(-50%)',
                zIndex: 99,
                width: '100%',
                display: 'block'
              }}
              className="lazyload"
              data-src={src}
              autoPlay
              muted
              loop
              playsInline
            />
          </Box>
          {!hideOverlay && (
            <Box
              position="absolute"
              left={0}
              top={0}
              zIndex={100}
              size="100%"
              display="block"
              bg="ink"
              opacity={0.3}
            />
          )}
        </Flex>
      </div>
    </Box>
  )
}
export { Video }
