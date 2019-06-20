import React, { useState, useEffect, useRef, useContext } from 'react'
import { Box, Flex } from 'blockstack-ui'
import { transition } from '@common/theme'
import ReactPlayer from 'react-player'
import CloseIcon from 'mdi-react/CloseIcon'
import { useLockBodyScroll } from 'react-use'
import { useClickOutside } from 'use-events'
export const ModalContext = React.createContext()

const useModalHooks = () => {
  const { open, handleClose, ...rest } = useContext(ModalContext)
  const ref = useRef(null)
  const [isActive] = useClickOutside([ref], () => null)
  useEffect(() => {
    if (isActive && open) {
      handleClose()
    }
  }, [isActive])

  return { ref, open, handleClose, ...rest }
}

export const ModalContextProvider = ({ children }) => {
  const [state, setState] = useState({
    src: null,
    open: false
  })
  const handleClose = () =>
    setState({
      src: null,
      open: false
    })
  const handleOpen = (src) =>
    setState({
      src,
      open: true
    })

  return (
    <ModalContext.Provider value={{ ...state, handleClose, handleOpen }}>
      {children}
    </ModalContext.Provider>
  )
}

const Modal = ({ ...rest }) => {
  const { src, open, ref, handleClose } = useModalHooks()
  useLockBodyScroll(open)
  return (
    <Flex
      flexDirection="column"
      position="fixed"
      alignItems="center"
      justifyContent="center"
      width="100%"
      height="100vh"
      top={0}
      left={0}
      bg="rgba(0,0,0,0.8)"
      zIndex={99999999999}
      p={[5, 5, 8]}
      opacity={open ? 1 : 0}
      transition={transition}
      style={{
        pointerEvents: open ? 'unset' : 'none'
      }}
      {...rest}
    >
      <Box width={1} maxWidth="1176px" mx="auto">
        <Flex pb={2} justifyContent="flex-end">
          <Box onClick={handleClose}>
            <CloseIcon size={32} color="white" />
          </Box>
        </Flex>
        <Box width={1} position="relative">
          <div ref={ref}>
            <Box width={1} height={'0px'} pb="56.25%" />
            <Box position="absolute" top={0} size="100%">
              {src ? (
                <ReactPlayer
                  controls
                  width="100%"
                  height="100%"
                  playsinline
                  url={src}
                  playing={open}
                />
              ) : null}
            </Box>
          </div>
        </Box>
      </Box>
    </Flex>
  )
}

export { Modal }
