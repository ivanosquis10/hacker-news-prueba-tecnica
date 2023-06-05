import { style } from '@vanilla-extract/css'

export const header = style({
  display: 'flex',
  borderBottom: '1px solid white',
  gap: '16px',
  alignItems: 'center',
  padding: '10px 30px'
})

export const links = style({
  fontSize: '18px',
  margin: 0,
  textDecoration: 'none',
  fontWeight: 'bold',
  color: 'white'
})
