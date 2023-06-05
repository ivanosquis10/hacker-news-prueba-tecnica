import ContentLoader from 'react-content-loader'

export const SkeletonLoader = () => (
  <ContentLoader
    speed={1}
    width={400}
    height={90}
    viewBox='0 0 400 90'
    backgroundColor='#404040'
    foregroundColor='#18181b'
  >
    <circle cx='10' cy='18' r='11' />
    <rect x='24' y='6' rx='5' ry='5' width='220' height='20' />
    <rect x='252' y='6' rx='5' ry='5' width='121' height='20' />
    <rect x='24' y='33' rx='5' ry='5' width='88' height='20' />
    <rect x='116' y='33' rx='5' ry='5' width='88' height='20' />
    <rect x='212' y='34' rx='5' ry='5' width='163' height='20' />
  </ContentLoader>
)
