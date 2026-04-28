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

    // 1. Create profile and subscribe to list
    const profileRes = await fetch('https://a.klaviyo.com/api/profiles/', {
      method: 'POST',
      headers: {
        Authorization: `Klaviyo-API-Key ${privateKey}`,
        accept: 'application/vnd.api+json',
        'content-type': 'application/vnd.api+json',
        revision: '2025-01-15',
      },
      body: JSON.stringify({
        data: {
          type: 'profile',
          attributes: {
            email: email,
            subscriptions: {
              email: {
                marketing: {
                  consent: 'SUBSCRIBED',
                  method: 'single_opt_in',
                  method_detail: 'website-footer',
                },
              },
            },
          },
          relationships: {
            lists: {
              data: [{ type: 'list', id: listId }],
            },
          },
        },
      }),
    })

    const profileData = await profileRes.json()

    if (!profileRes.ok) {
      // Return Klaviyo error for debugging
      return res.status(profileRes.status).json({ error: profileData })
    }

    // 2. Get the newly created profile ID
    const profileId = profileData?.data?.id
    if (!profileId) {
      return res
        .status(500)
        .json({ error: 'Profile created but ID not returned' })
    }

    // 3. Add the tag as a relationship
    const tagRes = await fetch(
      `https://a.klaviyo.com/api/profiles/${profileId}/relationships/tags/`,
      {
        method: 'POST',
        headers: {
          Authorization: `Klaviyo-API-Key ${privateKey}`,
          accept: 'application/vnd.api+json',
          'content-type': 'application/vnd.api+json',
          revision: '2025-01-15',
        },
        body: JSON.stringify({
          data: [
            {
              type: 'tag',
              id: 'website-footer-signup', // Klaviyo auto‑creates the tag if it doesn't exist
            },
          ],
        }),
      }
    )

    if (tagRes.status === 201 || tagRes.status === 200) {
      // Tag added successfully
      return res.status(200).json({ success: true })
    }

    // Tag failed but profile is subscribed – still return success (you can log the error)
    const tagError = await tagRes.text()
    console.error('Tag addition failed:', tagError)
    return res
      .status(200)
      .json({ success: true, tagWarning: 'Tag could not be added' })
  } catch {
    return res.status(500).json({ error: 'Internal server error' })
  }
}