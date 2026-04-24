import { Helmet } from 'react-helmet-async'

const SEO = ({ title, description, path }) => {
  const siteName = 'Fox Marketing Systems'
  const url = `https://foxmarketingsystems.com${path || ''}`

  return (
    <Helmet>
      <title>
        {title} | {siteName}
      </title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={`${title} | ${siteName}`} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
    </Helmet>
  )
}

export default SEO
