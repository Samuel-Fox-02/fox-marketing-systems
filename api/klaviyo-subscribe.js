/* cSpell:disable */
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  const { email } = req.body
  if (!email) {
    return res.status(400).json({ error: 'Email is required' })
  }

  try {
    // eslint-disable-next-line no-undef
    const listId = process.env.KLAVIYO_LIST_ID
    // eslint-disable-next-line no-undef
    const privateKey = process.env.KLAVIYO_PRIVATE_KEY

    const response = await fetch(
      'https://a.klaviyo.com/api/profile-subscription-bulk-create-jobs',
      {
        method: 'POST',
        headers: {
          Authorization: `Klaviyo-API-Key ${privateKey}`,
          accept: 'application/vnd.api+json',
          'content-type': 'application/vnd.api+json',
          revision: '2025-07-15',
        },
        body: JSON.stringify({
          data: {
            type: 'profile-subscription-bulk-create-job',
            attributes: {
              profiles: {
                data: [
                  {
                    type: 'profile',
                    attributes: {
                      email: email,
                      subscriptions: {
                        email: {
                          marketing: {
                            consent: 'SUBSCRIBED',
                          },
                        },
                      },
                    },
                  },
                ],
              },
            },
            relationships: {
              list: {
                data: {
                  type: 'list',
                  id: listId,
                },
              },
            },
          },
        }),
      }
    )

    if (response.ok) {
      return res.status(200).json({ success: true })
    }

    const errorBody = await response.text()
    console.error('Klaviyo error response:', errorBody)
    return res
      .status(response.status)
      .json({ error: 'Klaviyo subscription failed' })
  } catch (err) {
    console.error('Serverless function error:', err)
    return res.status(500).json({ error: 'Internal server error' })
  }
}