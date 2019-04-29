'use strict'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import '../assets/css/icons.css'
import PropTypes from 'prop-types'

function Glyph(props) {
  const { color, size, content, addStyle, onClick } = props

  const handleClick = e => {
    e.preventDefault()
    onClick(e)
  }

  const buildStyle = () => {
    return css`
      color: ${color};
      font-size: ${size};
      &::before {
       content: "${content}";
      }
      ${addStyle}
    `
  }

  return <i className="icon" css={buildStyle()} onClick={handleClick} />
}

Glyph.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  addStyle: PropTypes.string,
  onClick: PropTypes.func
}

export default Glyph
