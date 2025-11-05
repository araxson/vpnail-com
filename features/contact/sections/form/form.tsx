'use client'

import { useState, useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { toast } from 'sonner'
import { Loader2, AlertCircle } from 'lucide-react'
import { formData } from './form.data'
import { formConfig } from '@/lib/config/form.config'

// Validation utilities
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const validatePhone = (phone: string): boolean => {
  // Accept various phone formats but must have 10 digits
  const phoneDigits = phone.replace(/\D/g, '')
  return phoneDigits.length === 0 || phoneDigits.length === 10
}

const formatPhoneNumber = (value: string): string => {
  // Remove all non-digit characters
  const phoneNumber = value.replace(/\D/g, '')

  // Format as (XXX) XXX-XXXX
  if (phoneNumber.length <= 3) {
    return phoneNumber
  } else if (phoneNumber.length <= 6) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`
  } else {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`
  }
}

const validateName = (name: string): boolean => {
  return name.trim().length >= 2 && name.trim().length <= 100
}

export function FormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    // Honeypot field for spam protection
    website: ''
  })
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [lastSubmissionTime, setLastSubmissionTime] = useState(0)
  const honeypotRef = useRef<HTMLInputElement>(null)

  // Rate limiting check
  const checkRateLimit = (): boolean => {
    const now = Date.now()
    const timeSinceLastSubmission = now - lastSubmissionTime
    const minInterval = 30000 // 30 seconds between submissions

    if (timeSinceLastSubmission < minInterval) {
      const remainingTime = Math.ceil((minInterval - timeSinceLastSubmission) / 1000)
      toast.error('Please wait before submitting again', {
        description: `You can submit another message in ${remainingTime} seconds.`
      })
      return false
    }
    return true
  }

  // Validate individual fields
  const validateField = (fieldName: string, value: string): string => {
    switch (fieldName) {
      case 'name':
        if (!value.trim()) return 'Name is required'
        if (!validateName(value)) return 'Name must be between 2 and 100 characters'
        return ''
      case 'email':
        if (!value.trim()) return 'Email is required'
        if (!validateEmail(value)) return 'Please enter a valid email address'
        return ''
      case 'phone':
        if (value && !validatePhone(value)) return 'Please enter a valid 10-digit phone number'
        return ''
      case 'message':
        if (!value.trim()) return 'Message is required'
        if (value.trim().length < 10) return 'Message must be at least 10 characters'
        if (value.trim().length > 1000) return 'Message must be less than 1000 characters'
        return ''
      default:
        return ''
    }
  }

  // Handle field changes with validation
  const handleFieldChange = (fieldName: string, value: string) => {
    // Special handling for phone number formatting
    if (fieldName === 'phone') {
      const formatted = formatPhoneNumber(value)
      setFormState({ ...formState, [fieldName]: formatted })
    } else {
      setFormState({ ...formState, [fieldName]: value })
    }

    // Clear error when user starts typing
    if (errors[fieldName as keyof typeof errors]) {
      setErrors({ ...errors, [fieldName]: '' })
    }
  }

  // Validate all fields
  const validateForm = (): boolean => {
    const newErrors = {
      name: validateField('name', formState.name),
      email: validateField('email', formState.email),
      phone: validateField('phone', formState.phone),
      message: validateField('message', formState.message)
    }

    setErrors(newErrors)
    return !Object.values(newErrors).some(error => error !== '')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Check honeypot (anti-spam)
    if (formState.website) {
      console.warn('Bot submission detected')
      // Silently fail for bots
      toast.success("Message sent successfully!", {
        description: "We'll get back to you as soon as possible.",
      })
      return
    }

    // Rate limiting
    if (!checkRateLimit()) {
      return
    }

    // Validate form
    if (!validateForm()) {
      toast.error('Please fix the errors in the form', {
        description: 'Check the fields marked with errors and try again.'
      })
      return
    }

    if (!formConfig.hasWeb3formsAccessKey) {
      toast.error('Contact form temporarily unavailable', {
        description: 'Please email us at calgaryvpark@gmail.com while we finish configuring the form.'
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Clean phone number for validation and optional submission
      const cleanPhone = formState.phone.replace(/\D/g, '')

      const submissionPayload: Record<string, string> = {
        access_key: formConfig.web3formsAccessKey,
        name: formState.name.trim(),
        email: formState.email.trim(),
        message: formState.message.trim(),
        subject: `New Contact Form Submission from ${formState.name.trim()}`,
        from_name: 'Victoria Park Nails & Spa Website',
      }

      if (cleanPhone) {
        submissionPayload.phone = cleanPhone
      }

      if (formState.service) {
        submissionPayload.service = formState.service
      }

      if (typeof window !== 'undefined') {
        submissionPayload.page_url = window.location.href
      }

      // Submit to Web3Forms using JSON per latest documentation
      const response = await fetch(formConfig.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(submissionPayload),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        // Update last submission time
        setLastSubmissionTime(Date.now())

        // Push to dataLayer for GTM
        try {
          const w = window as Window & { dataLayer?: Record<string, unknown>[] }
          w.dataLayer = w.dataLayer || []
          w.dataLayer.push({
            event: 'generate_lead',
            form_id: 'contact_form',
            form_name: 'Contact Form',
            page_path: window.location.pathname,
            page_title: document.title,
            service: formState.service || 'Not specified',
          })
        } catch {}

        toast.success("Message sent successfully!", {
          description: "We'll get back to you within 24 hours.",
        })

        // Reset form
        setFormState({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
          website: ''
        })
        setErrors({
          name: '',
          email: '',
          phone: '',
          message: ''
        })
      } else {
        throw new Error(result.message || 'Form submission failed')
      }

    } catch (error) {
      console.error('Form submission error:', error)

      // Track error in GTM
      try {
        const w = window as Window & { dataLayer?: Record<string, unknown>[] }
        w.dataLayer = w.dataLayer || []
        w.dataLayer.push({
          event: 'form_submit_error',
          form_id: 'contact_form',
          form_name: 'Contact Form',
          page_path: window.location.pathname,
          page_title: document.title,
          error: (error as Error)?.message || 'unknown_error',
        })
      } catch {}

      // Determine error type and provide appropriate message
      if (error instanceof TypeError && error.message.toLowerCase().includes('failed to fetch')) {
        // Show user-friendly error with alternative contact methods
        const subject = encodeURIComponent(`Contact Form Inquiry from ${formState.name.trim()}`)
        const body = encodeURIComponent(
          `Name: ${formState.name}\n` +
          `Email: ${formState.email}\n` +
          `Phone: ${formState.phone || 'Not provided'}\n` +
          `Service: ${formState.service || 'Not specified'}\n\n` +
          `Message:\n${formState.message}`
        )

        toast.error("Form Temporarily Unavailable", {
          description: "We're experiencing technical issues with our contact form. Please use one of the alternative methods below:",
          duration: 15000,
        })

        // Show alternative contact modal/toast with actions
        setTimeout(() => {
          toast.info("Alternative Contact Methods", {
            description: (
              <div className="space-y-2">
                <p>You can reach us through:</p>
                <div className="space-y-1">
                  <a
                    href={`mailto:calgaryvpark@gmail.com?subject=${subject}&body=${body}`}
                    className="block text-blue-600 hover:underline"
                  >
                    📧 Email: calgaryvpark@gmail.com
                  </a>
                  <a
                    href="tel:+14037193600"
                    className="block text-blue-600 hover:underline"
                  >
                    📱 Call: (403) 719-3600
                  </a>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Click email to open with your form data pre-filled
                </p>
              </div>
            ),
            duration: 30000,
            action: {
              label: "Copy Email",
              onClick: () => {
                navigator.clipboard.writeText('calgaryvpark@gmail.com')
                toast.success('Email copied to clipboard!')
              }
            }
          })
        }, 500)
      } else if (error instanceof TypeError) {
        toast.error("Network error", {
          description: "Please check your internet connection and try again.",
          action: {
            label: "Retry",
            onClick: () => handleSubmit(e)
          }
        })
      } else {
        const errorMessage = (error as Error)?.message || 'Unknown error'
        toast.error("Error sending message", {
          description: `${errorMessage}. Please try again or email us directly at calgaryvpark@gmail.com.`,
        })
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card id="contact-form" className="flex flex-col">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          {/* Accessibility: Form instructions */}
          <div className="sr-only" aria-live="polite">
            Fields marked with an asterisk (*) are required.
          </div>

          {/* Name Field */}
          <div className="space-y-2">
            <Label htmlFor="name">
              {formData.fields.name.label}
              {formData.fields.name.required && <span className="text-destructive ml-1" aria-label="required">*</span>}
            </Label>
            <Input
              id="name"
              name="name"
              value={formState.name}
              onChange={(e) => handleFieldChange('name', e.target.value)}
              placeholder={formData.fields.name.placeholder}
              required={formData.fields.name.required}
              disabled={isSubmitting}
              aria-required={formData.fields.name.required}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : undefined}
              maxLength={100}
            />
            {errors.name && (
              <p id="name-error" className="text-sm text-destructive flex items-center gap-1" role="alert">
                <AlertCircle className="h-3 w-3" />
                {errors.name}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email">
              {formData.fields.email.label}
              {formData.fields.email.required && <span className="text-destructive ml-1" aria-label="required">*</span>}
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formState.email}
              onChange={(e) => handleFieldChange('email', e.target.value)}
              placeholder={formData.fields.email.placeholder}
              required={formData.fields.email.required}
              disabled={isSubmitting}
              aria-required={formData.fields.email.required}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
              autoComplete="email"
            />
            {errors.email && (
              <p id="email-error" className="text-sm text-destructive flex items-center gap-1" role="alert">
                <AlertCircle className="h-3 w-3" />
                {errors.email}
              </p>
            )}
          </div>

          {/* Phone Field */}
          <div className="space-y-2">
            <Label htmlFor="phone">{formData.fields.phone.label}</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formState.phone}
              onChange={(e) => handleFieldChange('phone', e.target.value)}
              placeholder="(403) 555-0123"
              disabled={isSubmitting}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? 'phone-error' : 'phone-hint'}
              autoComplete="tel"
              maxLength={14} // (XXX) XXX-XXXX format
            />
            {!errors.phone && (
              <p id="phone-hint" className="text-xs text-muted-foreground">
                Optional. Format: (403) 555-0123
              </p>
            )}
            {errors.phone && (
              <p id="phone-error" className="text-sm text-destructive flex items-center gap-1" role="alert">
                <AlertCircle className="h-3 w-3" />
                {errors.phone}
              </p>
            )}
          </div>

          {/* Service Field */}
          <div className="space-y-2">
            <Label htmlFor="service">{formData.fields.service.label}</Label>
            <Select
              value={formState.service}
              onValueChange={(value) => setFormState({ ...formState, service: value })}
              disabled={isSubmitting}
            >
              <SelectTrigger id="service" aria-describedby="service-hint">
                <SelectValue placeholder={formData.fields.service.placeholder} />
              </SelectTrigger>
              <SelectContent>
                {formData.fields.service.options.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p id="service-hint" className="text-xs text-muted-foreground">
              Optional. Select the service you&apos;re interested in
            </p>
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <Label htmlFor="message">
              {formData.fields.message.label}
              {formData.fields.message.required && <span className="text-destructive ml-1" aria-label="required">*</span>}
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={(e) => handleFieldChange('message', e.target.value)}
              placeholder={formData.fields.message.placeholder}
              rows={5}
              required={formData.fields.message.required}
              disabled={isSubmitting}
              aria-required={formData.fields.message.required}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : 'message-hint'}
              maxLength={1000}
            />
            <div className="flex justify-between">
              <div className="flex-1">
                {!errors.message && (
                  <p id="message-hint" className="text-xs text-muted-foreground">
                    {formState.message.length}/1000 characters
                  </p>
                )}
                {errors.message && (
                  <p id="message-error" className="text-sm text-destructive flex items-center gap-1" role="alert">
                    <AlertCircle className="h-3 w-3" />
                    {errors.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Honeypot field (hidden from users, visible to bots) */}
          <div className="hidden" aria-hidden="true">
            <Label htmlFor="website">Website</Label>
            <Input
              ref={honeypotRef}
              id="website"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={formState.website}
              onChange={(e) => setFormState({ ...formState, website: e.target.value })}
            />
          </div>

          {/* Required fields notice */}
          <p className="text-xs text-muted-foreground">
            * Required fields
          </p>

          {/* Submit Button */}
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
                <span>Sending Message...</span>
              </>
            ) : (
              formData.submitButton
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
