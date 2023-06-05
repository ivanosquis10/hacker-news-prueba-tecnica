import { style } from '@vanilla-extract/css'

export const container = style({
  width: '95%',
  margin: '0 auto',
  padding: '5px 5px'
})

export const buttonLoad = style({
  padding: '5px 15px',
  border: 'none',
  borderRadius: '5px',
  color: '#212121',
  zIndex: '1',
  background: '#f5f5f4',
  position: 'relative',
  fontWeight: '1000',
  fontSize: '15px',
  transition: 'all 250ms',
  overflow: 'hidden',
  cursor: 'pointer',
  textDecoration: 'none'
})
