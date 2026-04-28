export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  const { email } = req.body
  if (!email) {
    return res.status(400).json({ error: 'Email is required' })
  }

  try {
    const listId = process.env.KLAVIYO_LIST_ID
    const privateKey = process.env.KLAVIYO_PRIVATE_KEY

    const response = await fetch(
      `https://a.klaviyo.com/api/v2/list/${listId}/subscribe`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': privateKey,
        },
        body: JSON.stringify({
          profiles: [{ email }],
        }),
      }
    )

    const data = await response.json()
    if (response.ok) {
      return res.status(200).json({ success: true })
    } else {
      return res.status(response.status).json({ error: data })
    }
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' })
  }
}
