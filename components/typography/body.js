import React from 'react'
import Shevy from 'shevyjs'
import styled, { css } from 'styled-components'

const shevy = new Shevy()

const { h5: large, body } = shevy

const P = styled.p``

const Body = styled.div``

const Strong = styled.strong``

const Em = styled.em``
const Ul = styled.ul``
const Ol = styled.ol``

const Li = styled.li``

const Pre = styled.pre``

Body.p = P
Body.strong = Strong
Body.em = Em
Body.ul = Ul
Body.ol = Ol
Body.li = Li
Body.oli = Li
Body.pre = Pre

export default Body
