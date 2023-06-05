import ContentLoader from 'react-content-loader'

export const CommentLoader = () => {
  return (
    <ContentLoader
      speed={1}
      width={400}
      height={90}
      viewBox='0 0 400 90'
      backgroundColor='#404040'
      foregroundColor='#18181b'
    >
      <rect x='9' y='4' rx='0' ry='0' width='320' height='22' />
      <rect x='18' y='14' rx='0' ry='0' width='303' height='6' />
      <rect x='11' y='33' rx='0' ry='0' width='108' height='13' />
      <rect x='129' y='33' rx='0' ry='0' width='60' height='13' />
      <rect x='196' y='33' rx='0' ry='0' width='60' height='13' />
    </ContentLoader>
  )
}
