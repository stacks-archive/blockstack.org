import React from 'react'
import { Controlled as CodeMirror } from 'react-codemirror2'
import { CodeMirrorStyled, CodeWapper } from '@components/code/styles'

const returnLanguage = (lang) => {
  switch (lang) {
    case 'bash':
      return 'shell'
    case 'json':
      return 'javascript'
    default:
      return lang
  }
}

class Codeblock extends React.PureComponent {
  instance = null
  state = {
    mounted: false
  }

  componentDidMount() {
    if (!this.state.mounted) {
      this.setState({
        mounted: true
      })
    }
    require('codemirror')
    require('codemirror/mode/jsx/jsx')
  }

  render() {
    if (!this.props.children && !this.props.value) {
      return null
    }
    const content = this.props.value || this.props.children
    const { language } = this.props
    const noLineNumbers = this.props.hideNumbers || language === 'bash'

    return (
      <CodeWapper bg="ink" py={4} px={2} borderRadius={'8px'}>
        {this.state.mounted ? (
          <CodeMirror
            editorDidMount={(editor) => {
              this.instance = editor
            }}
            value={content.trimRight()}
            className={noLineNumbers ? 'no-line-numbers' : null}
            options={{
              mode: returnLanguage(language),
              theme: 'material',
              lineNumbers: !noLineNumbers,
              readOnly: 'nocursor'
            }}
          />
        ) : (
          <CodeMirrorStyled lineHeight="2" lineNumbers={!noLineNumbers}>
            {content.trimRight()}
          </CodeMirrorStyled>
        )}
      </CodeWapper>
    )
  }
}

export { Codeblock }

export default Codeblock
