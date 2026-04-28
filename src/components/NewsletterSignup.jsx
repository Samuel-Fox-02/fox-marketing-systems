import { useEffect } from 'react'

const NewsletterSignup = () => {
  useEffect(() => {
    // Load Klaviyo tracking script once
    const scriptId = 'klaviyo-script'
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script')
      script.id = scriptId
      script.type = 'text/javascript'
      script.async = true
      script.src =
        'https://static.klaviyo.com/onsite/js/TQDY7Q/klaviyo.js?company_id=TQDY7Q'
      document.head.appendChild(script)
    }
  }, [])

  return (
    <div className="newsletter-signup">
      {/* Klaviyo embedded form placeholder */}
      <div className="klaviyo-form-SZeJQr"></div>
    </div>
  )
}

export default NewsletterSignup
