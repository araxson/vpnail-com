/**
 * Form Configuration
 * Web3Forms settings for contact form
 *
 * Setup:
 * 1. Get your free access key from https://web3forms.com
 * 2. Replace 'YOUR_WEB3FORMS_ACCESS_KEY_HERE' with your actual key
 * 3. Add your email below (already set from site config)
 */

export const formConfig = {
  // Get your access key from: https://web3forms.com
  web3formsAccessKey: 'd5d8ccdd-752f-463b-9766-38fdd2e5e0f7',

  // Your email where form submissions will be sent
  recipientEmail: 'calgaryvpark@gmail.com',

  // Web3Forms endpoint
  endpoint: 'https://api.web3forms.com/submit',

  // Optional: Success redirect (leave empty to show success message)
  successRedirect: '',
} as const
