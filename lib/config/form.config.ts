/**
 * Form Configuration
 * Web3Forms settings for contact form
 *
 * Setup Instructions:
 * 1. Go to https://web3forms.com
 * 2. Enter your email: calgaryvpark@gmail.com
 * 3. Click "Create Access Key"
 * 4. Copy the new access key and replace it below
 * 5. Verify your email when Web3Forms sends you a confirmation
 *
 * Note: The recipient email is configured in the Web3Forms dashboard,
 * not in this config file. It's kept here for reference only.
 */

const fallbackPublicAccessKey = 'd5d8ccdd-752f-463b-9766-38fdd2e5e0f7'
const envAccessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim() ?? ''
const resolvedAccessKey = envAccessKey || fallbackPublicAccessKey

// Warn during development if we are relying on the public fallback key
if (process.env.NODE_ENV !== 'production' && !envAccessKey) {
  console.warn(
    '[contact-form] Using the public Web3Forms access key from config. ' +
      'Set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in .env.local to override this default.'
  )
}

export const formConfig = {
  web3formsAccessKey: resolvedAccessKey,
  hasWeb3formsAccessKey: resolvedAccessKey.length > 0,
  isFallbackAccessKey: !envAccessKey,

  // For reference only - actual recipient is configured in Web3Forms dashboard
  recipientEmail: 'calgaryvpark@gmail.com',

  // Web3Forms API endpoint (do not change)
  endpoint: 'https://api.web3forms.com/submit',
} as const
