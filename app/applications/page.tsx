"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle2 } from "lucide-react"

export default function ApplicationsPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "",
    experience: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormSubmitted(true)
    // In a real application, you would send this data to your server
  }

  const openRoles = [
    {
      title: "Actors",
      description: "We're casting for our upcoming productions and always looking for talented performers.",
      requirements: "Audition required. Please prepare a 2-minute monologue.",
    },
    {
      title: "Directors",
      description: "Experienced directors interested in leading productions or assistant directing.",
      requirements: "Please submit your directing resume and a brief statement of your directorial approach.",
    },
    {
      title: "Technical Crew",
      description: "Lighting, sound, set design, and stage management positions available.",
      requirements: "Experience with theatrical technical elements preferred but not required for all positions.",
    },
    {
      title: "Volunteers",
      description: "Front-of-house, marketing, and administrative support volunteers needed.",
      requirements: "No specific experience required, just enthusiasm and reliability.",
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-black text-white">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Theatre applications"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 slide-in-left">Join Our Theatre Family</h1>
            <p className="text-xl mb-8 text-gray-300 slide-in-right">
              Apply to become part of our vibrant community of artists, technicians, and theatre enthusiasts.
            </p>
          </div>
        </div>
      </section>

      {/* Application Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-4">Application Options</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore the various ways you can get involved with KATARISI FAMILY Theatre Club.
            </p>
          </div>

          <Tabs defaultValue="apply" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="apply">Apply Now</TabsTrigger>
                <TabsTrigger value="roles">Open Roles</TabsTrigger>
                <TabsTrigger value="process">Application Process</TabsTrigger>
                <TabsTrigger value="faq">FAQs</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="apply" className="mt-0">
              <div className="max-w-3xl mx-auto">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-display text-2xl">Application Form</CardTitle>
                    <CardDescription>
                      Fill out the form below to apply for a role with KATARISI FAMILY Theatre Club.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {formSubmitted ? (
                      <div className="text-center py-8">
                        <div className="flex justify-center mb-4">
                          <CheckCircle2 className="h-16 w-16 text-green-500" />
                        </div>
                        <h3 className="font-display text-2xl font-bold mb-2">Application Submitted!</h3>
                        <p className="text-muted-foreground mb-6">
                          Thank you for your interest in joining KATARISI FAMILY. We'll review your application and get
                          back to you within 5-7 business days.
                        </p>
                        <Button onClick={() => setFormSubmitted(false)}>Submit Another Application</Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">First Name</Label>
                            <Input
                              id="firstName"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input
                              id="lastName"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
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
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="role">Role You're Applying For</Label>
                          <Select
                            onValueChange={(value) => handleSelectChange("role", value)}
                            defaultValue={formData.role}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select a role" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="actor">Actor</SelectItem>
                              <SelectItem value="director">Director</SelectItem>
                              <SelectItem value="technical">Technical Crew</SelectItem>
                              <SelectItem value="volunteer">Volunteer</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="experience">Experience Level</Label>
                          <RadioGroup
                            defaultValue={formData.experience}
                            onValueChange={(value) => handleSelectChange("experience", value)}
                          >
                            <div className="flex flex-col space-y-2">
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="beginner" id="beginner" />
                                <Label htmlFor="beginner">Beginner (0-2 years)</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="intermediate" id="intermediate" />
                                <Label htmlFor="intermediate">Intermediate (3-5 years)</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="advanced" id="advanced" />
                                <Label htmlFor="advanced">Advanced (6+ years)</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="professional" id="professional" />
                                <Label htmlFor="professional">Professional</Label>
                              </div>
                            </div>
                          </RadioGroup>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">Tell Us About Yourself</Label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Share your theatre experience, interests, and why you want to join KATARISI FAMILY."
                            className="min-h-32"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="resume">Upload Resume/CV (Optional)</Label>
                          <Input id="resume" type="file" />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="portfolio">Upload Portfolio/Headshot (Optional)</Label>
                          <Input id="portfolio" type="file" />
                        </div>

                        <Button type="submit" className="w-full">
                          Submit Application
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="roles" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {openRoles.map((role, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="font-display text-xl">{role.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">{role.description}</p>
                      <p className="text-sm text-muted-foreground mb-4">
                        <strong>Requirements:</strong> {role.requirements}
                      </p>
                      <Button
                        variant="outline"
                        onClick={() => {
                          document.querySelector('[data-value="apply"]')?.click()
                        }}
                      >
                        Apply for this Role
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="process" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle className="font-display text-2xl">Our Application Process</CardTitle>
                  <CardDescription>
                    Learn about our application and selection process for joining KATARISI FAMILY.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex items-center justify-center bg-primary text-white rounded-full w-12 h-12 font-bold text-xl flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold mb-2">Submit Application</h3>
                        <p className="text-muted-foreground">
                          Fill out our online application form with your personal information, experience, and the role
                          you're interested in. You can also upload your resume/CV and portfolio materials.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex items-center justify-center bg-primary text-white rounded-full w-12 h-12 font-bold text-xl flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold mb-2">Application Review</h3>
                        <p className="text-muted-foreground">
                          Our artistic team will review your application and materials. This typically takes 5-7
                          business days, depending on the volume of applications.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex items-center justify-center bg-primary text-white rounded-full w-12 h-12 font-bold text-xl flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold mb-2">Interview/Audition</h3>
                        <p className="text-muted-foreground">
                          If your application matches our current needs, we'll invite you for an interview or audition.
                          For actors, this will involve performing prepared pieces and possibly cold readings.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex items-center justify-center bg-primary text-white rounded-full w-12 h-12 font-bold text-xl flex-shrink-0">
                        4
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold mb-2">Decision & Onboarding</h3>
                        <p className="text-muted-foreground">
                          We'll notify you of our decision within two weeks of your interview/audition. If selected,
                          you'll receive information about next steps, including orientation and onboarding.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="faq" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle className="font-display text-2xl">Frequently Asked Questions</CardTitle>
                  <CardDescription>Find answers to common questions about applying to KATARISI FAMILY.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Do I need previous theatre experience to apply?</AccordionTrigger>
                      <AccordionContent>
                        It depends on the role. For some positions, like professional acting roles or technical
                        positions, experience is preferred. However, we also have opportunities for beginners and
                        volunteers with no prior experience. We value enthusiasm and commitment just as much as
                        experience.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>How often do you hold auditions?</AccordionTrigger>
                      <AccordionContent>
                        We typically hold general auditions twice a year, in January and August. However, we also
                        conduct specific auditions for individual productions throughout the year. Follow our social
                        media or join our mailing list to stay informed about upcoming audition opportunities.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Is there an age requirement to participate?</AccordionTrigger>
                      <AccordionContent>
                        For our main company, participants must be 18 or older. However, we have a dedicated youth
                        program for ages 8-17, with productions and workshops specifically designed for young
                        performers. Some of our productions may also call for child actors for specific roles.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>Do you offer paid positions?</AccordionTrigger>
                      <AccordionContent>
                        Yes, we offer both paid and volunteer positions. Professional actors, directors, and technical
                        staff for our main stage productions receive compensation. We also have volunteer opportunities
                        for those looking to gain experience or contribute to our community.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                      <AccordionTrigger>What should I prepare for an audition?</AccordionTrigger>
                      <AccordionContent>
                        For general auditions, prepare two contrasting monologues (one classical, one contemporary)
                        totaling no more than 3 minutes. For musical productions, also prepare 16-32 bars of a song that
                        showcases your vocal range. Specific auditions may have different requirements, which will be
                        detailed in the audition notice.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                      <AccordionTrigger>How much time commitment is required?</AccordionTrigger>
                      <AccordionContent>
                        Time commitments vary by role and production. Main stage productions typically rehearse 3-4
                        evenings per week for 6-8 weeks, with more intensive rehearsals during tech week. Volunteer
                        positions can be more flexible, with commitments ranging from a few hours per week to specific
                        event days.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-4">Member Testimonials</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Hear from current members of the KATARISI FAMILY Theatre Club.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg">
              <p className="italic mb-4 text-gray-300">
                "Joining KATARISI FAMILY was one of the best decisions I've made. The supportive community and
                professional guidance have helped me grow tremendously as an actor."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image src="/placeholder.svg?height=48&width=48" alt="Member" width={48} height={48} />
                </div>
                <div>
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-sm text-gray-400">Member since 2022</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <p className="italic mb-4 text-gray-300">
                "As a technical director, I've found KATARISI FAMILY to be a place where creativity and innovation are
                truly valued. The collaborative spirit here is unmatched."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image src="/placeholder.svg?height=48&width=48" alt="Member" width={48} height={48} />
                </div>
                <div>
                  <p className="font-semibold">David Chen</p>
                  <p className="text-sm text-gray-400">Member since 2021</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <p className="italic mb-4 text-gray-300">
                "I started as a volunteer with no theatre experience, and now I'm directing my first production.
                KATARISI FAMILY believes in nurturing talent and providing opportunities for growth."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image src="/placeholder.svg?height=48&width=48" alt="Member" width={48} height={48} />
                </div>
                <div>
                  <p className="font-semibold">Maya Rodriguez</p>
                  <p className="text-sm text-gray-400">Member since 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold mb-6">Ready to Join Our Theatre Family?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Take the first step toward becoming part of our vibrant community of artists and theatre enthusiasts.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="text-primary font-semibold"
            onClick={() => {
              document.querySelector('[data-value="apply"]')?.click()
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
          >
            Apply Now
          </Button>
        </div>
      </section>
    </div>
  )
}

