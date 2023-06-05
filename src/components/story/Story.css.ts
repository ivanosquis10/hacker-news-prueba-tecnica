import { style } from '@vanilla-extract/css'

export const storyArticle = style({
  color: 'white',
  padding: '2px 5px',
  backgroundColor: '#171717',
  borderRadius: '3px'
})

export const storyHeader = style({
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  fontSize: '16px'

})

export const storyLink = style({
  textDecoration: 'none',
  color: 'white',
  ':hover': {
    color: '#f97316'
  },
  fontWeight: 'bold',
  letterSpacing: '.025em'
})

export const storyLinkDomain = style({
  textDecoration: 'none',
  color: '#a1a1aa',
  ':hover': {
    color: 'gray'
  }
})

export const storyFooter = style({
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  fontSize: '12px',
  color: '#888',
  lineHeight: '24px'

})

export const smallLinks = style({
  color: '#a1a1aa',
  textDecoration: 'none',
  ':hover': {
    color: 'gray'
  }
})
