"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock, CheckCircle2 } from "lucide-react"

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormSubmitted(true)
    // In a real application, you would send this data to your server
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-black text-white">
        <div className="absolute inset-0 opacity-30">
          <Image src="/placeholder.svg?height=800&width=1920" alt="Theatre contact" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 slide-in-left">Contact Us</h1>
            <p className="text-xl mb-8 text-gray-300 slide-in-right">
              Get in touch with the KATARSIS FAMILY Theatre Club. We'd love to hear from you!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="font-display text-3xl font-bold mb-8">Get In Touch</h2>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold mb-2">Our Location</h3>
                    <p className="text-muted-foreground">
                      123 Theatre Street
                      <br />
                      Arts District
                      <br />
                      City, Country
                      <br />
                      Postal Code
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold mb-2">Email Us</h3>
                    <p className="text-muted-foreground">info@katarisifamily.com</p>
                    <p className="text-muted-foreground">bookings@katarisifamily.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold mb-2">Call Us</h3>
                    <p className="text-muted-foreground">Main Office: +1 (555) 123-4567</p>
                    <p className="text-muted-foreground">Box Office: +1 (555) 765-4321</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold mb-2">Hours</h3>
                    <p className="text-muted-foreground">
                      <strong>Office Hours:</strong>
                      <br />
                      Monday - Friday: 9:00 AM - 5:00 PM
                    </p>
                    <p className="text-muted-foreground mt-2">
                      <strong>Box Office Hours:</strong>
                      <br />
                      Tuesday - Saturday: 12:00 PM - 6:00 PM
                      <br />
                      Performance Days: Until 30 minutes after curtain
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-12 rounded-lg overflow-hidden h-80 relative">
                <Image src="/placeholder.svg?height=600&width=800" alt="Map location" fill className="object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="bg-background/80 backdrop-blur-sm p-4 rounded-md">
                    Interactive map would be displayed here
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="font-display text-2xl">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {formSubmitted ? (
                    <div className="text-center py-8">
                      <div className="flex justify-center mb-4">
                        <CheckCircle2 className="h-16 w-16 text-green-500" />
                      </div>
                      <h3 className="font-display text-2xl font-bold mb-2">Message Sent!</h3>
                      <p className="text-muted-foreground mb-6">
                        Thank you for contacting KATARISI FAMILY. We'll respond to your message within 1-2 business
                        days.
                      </p>
                      <Button onClick={() => setFormSubmitted(false)}>Send Another Message</Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name</Label>
                        <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          className="min-h-32"
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full">
                        Send Message
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>

              {/* Additional Contact Info */}
              <div className="mt-8 bg-secondary p-6 rounded-lg">
                <h3 className="font-display text-xl font-bold mb-4">Additional Contacts</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold">For Media Inquiries:</p>
                    <p className="text-muted-foreground">media@katarisifamily.com</p>
                  </div>
                  <div>
                    <p className="font-semibold">For Educational Programs:</p>
                    <p className="text-muted-foreground">education@katarisifamily.com</p>
                  </div>
                  <div>
                    <p className="font-semibold">For Donations & Sponsorships:</p>
                    <p className="text-muted-foreground">development@katarisifamily.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find quick answers to common questions about visiting and contacting us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-background p-6 rounded-lg">
              <h3 className="font-display text-xl font-bold mb-3">Where can I park?</h3>
              <p className="text-muted-foreground">
                We have a dedicated parking lot behind our building with free parking for patrons. Additional street
                parking is available, and there's a public parking garage two blocks away.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg">
              <h3 className="font-display text-xl font-bold mb-3">Is the theatre accessible?</h3>
              <p className="text-muted-foreground">
                Yes, our facility is fully accessible with ramp access, elevator service to all levels, and accessible
                seating options. Please contact us in advance for specific accommodation needs.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg">
              <h3 className="font-display text-xl font-bold mb-3">How can I purchase tickets?</h3>
              <p className="text-muted-foreground">
                Tickets can be purchased online through our website, by phone during box office hours, or in person at
                our box office. We recommend booking in advance as performances often sell out.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg">
              <h3 className="font-display text-xl font-bold mb-3">Do you offer group discounts?</h3>
              <p className="text-muted-foreground">
                Yes, we offer special rates for groups of 10 or more. Please contact our box office for details and to
                arrange group bookings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold mb-6">Stay Connected</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Subscribe to our newsletter to receive updates about upcoming productions, events, and special offers.
          </p>
          <div className="max-w-md mx-auto">
            <form className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                required
              />
              <Button variant="secondary" className="text-primary font-semibold whitespace-nowrap">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

