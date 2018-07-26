import React, { Component } from 'react'
import Link from 'next/link'
import Card from '@components/card'
import Arrow from '@components/outline-arrow'
import { BigTriangle } from '@components/svgs'
import CodeBlock from '@components/code-block'
import styled from 'styled-components'

const FloatingTriangle = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  svg {
    display: block;
  }
`
import './TopArea.scss'

const UserCode = `if (blockstack.isUserSignedIn()) {
  const { profile } = blockstack.loadUserData()
}`

const AuthCode = `function signIn() {
  blockstack.redirectToSignIn()
}`

const StorageCode = `function uploadFile(file) {
  blockstack.putFile(file, { encrypt: true })
}`

function uploadFile(file) {
  blockstack.putFile(file, { encrypt: true })
}

const TopArea = (props) => {
  return (
    <section className="blue-bg top-section top-area">
      <div className="intro-text align-center">
        <div className="container">
          <h1 id="SiteTitle">
            The easiest way to start building decentralized blockchain apps
          </h1>
        </div>
      </div>
      <div className="triangle-bg py-4">
        <div className="container">
          <div>
            <div className="grid-flex v-spaced break-xlg">
              <div className="col-4">
                <Link prefetch href="/tutorials/hello-blockstack">
                  <a className="g-card code-card dark align-left link">
                    <div className="p-2">
                      <CodeBlock
                        className="sm minimal dark"
                        language="javascript"
                      >
                        {UserCode}
                      </CodeBlock>
                    </div>
                    <Card className="card">
                      <div className="p-2">
                        <div className="grid-flex tight-gutter no-break pb-2">
                          <div className="col grow">
                            <h4 className="main-color underline-hover">
                              Hello World
                            </h4>
                          </div>
                          <div className="col no-grow">
                            <div className="bs-outline-arrow">
                              <Arrow />
                            </div>
                          </div>
                        </div>
                        <p className="sm">
                          Build a single-page JavaScript application that runs
                          completely client-side without any servers.
                        </p>
                      </div>
                    </Card>
                  </a>
                </Link>
              </div>
              <div className="col-4">
                <Link prefetch href="/tutorials/todo-list">
                  <a className="g-card code-card dark align-left link">
                    <div className="p-2">
                      <CodeBlock className="sm minimal dark">
                        {AuthCode}
                      </CodeBlock>
                    </div>
                    <Card className="card">
                      <div className="p-2">
                        <div className="grid-flex tight-gutter no-break pb-2">
                          <div className="col grow">
                            <h4 className="main-color underline-hover">
                              Authentication
                            </h4>
                          </div>
                          <div className="col no-grow">
                            <div className="bs-outline-arrow">
                              <Arrow />
                            </div>
                          </div>
                        </div>
                        <p className="sm">
                          Build a basic Todo application and learn about
                          Authentication and Gaia storage.
                        </p>
                      </div>
                    </Card>
                  </a>
                </Link>
              </div>
              <div className="col-4">
                <Link href="/tutorials/multi-player-storage">
                  <a className="g-card code-card dark align-left link">
                    <div className="p-2">
                      <CodeBlock className="sm minimal dark">
                        {StorageCode}
                      </CodeBlock>
                    </div>
                    <Card className="card">
                      <div className="p-2">
                        <div className="grid-flex tight-gutter no-break pb-2">
                          <div className="col grow">
                            <h4 className="main-color underline-hover">
                              Storage
                            </h4>
                          </div>
                          <div className="col no-grow">
                            <div className="bs-outline-arrow">
                              <Arrow />
                            </div>
                          </div>
                        </div>
                        <p className="sm">
                          Build a decentralized blogging app using multi-player
                          Gaia storage.
                        </p>
                      </div>
                    </Card>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container align-center pt-3 mt-2 bs-pb-card">
          <nav className="line-nav pb-4">
            <ul className="pb-3">
              <li>
                <a href={props.links.tutorials} target="blank">
                  All tutorials
                </a>
              </li>
              <li>
                <a href={props.links.documentation} target="blank">
                  Documentation
                </a>
              </li>
              <li>
                <a href={props.links.github} target="blank">
                  Github
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <FloatingTriangle>
          <BigTriangle />
        </FloatingTriangle>
      </div>
    </section>
  )
}

export default TopArea
