'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { toast } from 'sonner'
import { Loader2 } from 'lucide-react'
import { formData } from './form.data'
import { formConfig } from '@/lib/config/form.config'

export function FormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Prepare form data for Web3Forms
      const formPayload = {
        access_key: formConfig.web3formsAccessKey,
        name: formState.name,
        email: formState.email,
        phone: formState.phone || 'Not provided',
        service: formState.service || 'Not specified',
        message: formState.message,
        subject: `New Contact Form Submission from ${formState.name}`,
        // Include recipient email to ensure proper delivery
        to: formConfig.recipientEmail,
      }

      // Submit to Web3Forms
      const response = await fetch(formConfig.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formPayload),
      })

      const result = await response.json()

      if (response.ok && result.success) {
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
          description: "We'll get back to you as soon as possible.",
        })

        // Reset form
        setFormState({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        })
      } else {
        throw new Error(result.message || 'Form submission failed')
      }

    } catch (error) {
      console.error('Form submission error:', error)
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
      toast.error("Error sending message", {
        description: "Please try again or email us directly at info@Victoria Park Nails and Spahealth.ca",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="flex flex-col">
      <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">
                  {formData.fields.name.label}
                  {formData.fields.name.required && <span className="text-destructive ml-1">*</span>}
                </Label>
                <Input
                  id="name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder={formData.fields.name.placeholder}
                  required={formData.fields.name.required}
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">
                  {formData.fields.email.label}
                  {formData.fields.email.required && <span className="text-destructive ml-1">*</span>}
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder={formData.fields.email.placeholder}
                  required={formData.fields.email.required}
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">{formData.fields.phone.label}</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formState.phone}
                  onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                  placeholder={formData.fields.phone.placeholder}
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="service">{formData.fields.service.label}</Label>
                <Select
                  value={formState.service}
                  onValueChange={(value) => setFormState({ ...formState, service: value })}
                  disabled={isSubmitting}
                >
                  <SelectTrigger id="service">
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
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">
                  {formData.fields.message.label}
                  {formData.fields.message.required && <span className="text-destructive ml-1">*</span>}
                </Label>
                <Textarea
                  id="message"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder={formData.fields.message.placeholder}
                  rows={5}
                  required={formData.fields.message.required}
                  disabled={isSubmitting}
                />
              </div>

              <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending Message...
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
