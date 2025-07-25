"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react"
import { toast } from "@/hooks/use-toast"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Here you would typically send the data to your backend
      console.log("Form submitted:", formData)

      setIsSubmitted(true)
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      })

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setIsSubmitted(false), 3000)
    }
  }

  const handleEmailClick = (email: string) => {
    window.location.href = `mailto:${email}?subject=Research Inquiry&body=Dear Team,%0D%0A%0D%0AI am writing to inquire about...`
  }

  const handlePhoneClick = (phone: string) => {
    window.location.href = `tel:${phone}`
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get in touch with us for research collaborations, inquiries, or any questions
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>

              <div className="space-y-6 mb-8">
                {/* Veena Venudharan Contact */}
                <div className="p-4 rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-1">Veena Venudharan</h3>
                  <p className="text-gray-700 mb-1">Assistant Professor</p>
                  <p className="text-gray-700 mb-1">Department of Civil Engineering & ESSENCE</p>
                  <p className="text-gray-700 mb-1">Indian Institute of Technology Palakkad</p>
                  <p className="text-gray-700 mb-1">Palakkad, Kerala - 678 557</p>
                  <p
                    className="text-blue-600 cursor-pointer hover:underline"
                    onClick={() => handleEmailClick("veena@iitpkd.ac.in")}
                  >
                    Email - veena@iitpkd.ac.in
                  </p>
                </div>

                {/* Pavement Engineering Lab Contact */}
                <div className="p-4 rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-1">Pavement Engineering Lab</h3>
                  <p className="text-gray-700 mb-1">Indian Institute Technology Palakkad</p>
                  <p className="text-gray-700 mb-1">Palakkad, Kerala - 678 557</p>
                  <p
                    className="text-blue-600 cursor-pointer hover:underline"
                    onClick={() => handleEmailClick("pavementlabiitpkd@outlook.com")}
                  >
                    Email - pavementlabiitpkd@outlook.com
                  </p>
                </div>

              </div>

              {/* Embedded Google Map */}
              <div className="rounded-lg overflow-hidden border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0848205950188!2d76.72635367508903!3d10.804815489345648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba869e43f0f473f%3A0x1a53e6dc39a95498!2sIndian%20Institute%20Of%20Technology%E2%80%93Palakkad%20(IIT%E2%80%93Palakkad)!5e0!3m2!1sen!2sin!4v1751198400503!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  style={{ border: 0, width: "100%", height: "450px" }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
            </div>

            {/* Enhanced Contact Form */}
            <div>
              <Card className="shadow-xl border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                        <Input
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="Enter your first name"
                          required
                          className="hover:border-blue-300 focus:border-blue-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                        <Input
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Enter your last name"
                          required
                          className="hover:border-blue-300 focus:border-blue-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        required
                        className="hover:border-blue-300 focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Enter subject"
                        required
                        className="hover:border-blue-300 focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Enter your message"
                        rows={6}
                        required
                        className="hover:border-blue-300 focus:border-blue-500 transition-colors resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full transition-all duration-300 transform hover:scale-105 ${
                        isSubmitted ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : isSubmitted ? (
                        <>
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Message Sent!
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
