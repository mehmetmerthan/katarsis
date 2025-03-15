import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Users, Bell, ArrowRight, Target, Lightbulb } from "lucide-react"
import HeroSection from "@/components/hero-section"
import EventCard from "@/components/event-card"

export default function Home() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Hamlet: Reimagined",
      date: "April 15-20, 2025",
      image: "/placeholder.svg?height=300&width=500",
      description: "A modern take on Shakespeare's classic tragedy, exploring themes of betrayal and revenge.",
    },
    {
      id: 2,
      title: "The Glass Menagerie",
      date: "May 5-10, 2025",
      image: "/placeholder.svg?height=300&width=500",
      description: "Tennessee Williams' poignant memory play about family, dreams, and disillusionment.",
    },
    {
      id: 3,
      title: "Improv Night: Unscripted",
      date: "Every Friday, 8PM",
      image: "/placeholder.svg?height=300&width=500",
      description: "Join our talented ensemble for a night of spontaneous comedy and storytelling.",
    },
  ]

  const announcements = [
    {
      id: 1,
      title: "Summer Workshop Registration Open",
      date: "March 10, 2025",
      content: "Register now for our intensive summer acting workshops led by industry professionals.",
    },
    {
      id: 2,
      title: "Auditions: Fall Season",
      date: "March 25, 2025",
      content: "We're casting for our fall productions. All experience levels welcome to audition.",
    },
    {
      id: 3,
      title: "New Youth Program Launched",
      date: "March 5, 2025",
      content:
        "Introducing our new youth theatre program for ages 8-16. Develop skills in acting, voice, and movement.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      {/* Quick Links Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Event Calendar */}
            <Card className="slide-in-left">
              <CardHeader className="flex flex-row items-center space-x-4">
                <Calendar className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Event Calendar</CardTitle>
                  <CardDescription>Upcoming performances and workshops</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Discover our exciting lineup of productions, workshops, and special events.</p>
              </CardContent>
              <CardFooter>
                <Link href="/events" className="w-full">
                  <Button variant="outline" className="w-full group">
                    View Calendar
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Join Opportunities */}
            <Card className="fade-in">
              <CardHeader className="flex flex-row items-center space-x-4">
                <Users className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Join Our Community</CardTitle>
                  <CardDescription>Become part of our theatre family</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Explore opportunities to join as an actor, director, designer, or volunteer.</p>
              </CardContent>
              <CardFooter>
                <Link href="/applications" className="w-full">
                  <Button variant="outline" className="w-full group">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Announcements */}
            <Card className="slide-in-right">
              <CardHeader className="flex flex-row items-center space-x-4">
                <Bell className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Announcements</CardTitle>
                  <CardDescription>Latest news and updates</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Stay informed about our latest news, achievements, and opportunities.</p>
              </CardContent>
              <CardFooter>
                <Link href="/about#news" className="w-full">
                  <Button variant="outline" className="w-full group">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Our Purpose</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover what drives us and where we're headed as a theatre community
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Mission */}
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow fade-in">
              <div className="flex items-center mb-6">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our theater club offers its members the opportunity to both learn and experience art in a fun and
                entertaining way by allowing them to discover themselves in a fun and creative environment.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                By combining the power and fun aspects of theater with quality education, we aim to give our
                participants self-confidence and develop their artistic talents.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our aim is to create enjoyable moments filled with art while strengthening the community spirit with fun
                activities.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow slide-in-right">
              <div className="flex items-center mb-6">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our theater club aims to prepare its participants for both the stage and daily life with a more
                creative, confident and positive perspective with quality education programs and fun activities.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our club aims to make art an accessible and enjoyable experience for everyone by creating a strong
                community where people of all ages can learn while having fun through theater.
              </p>
              {/*
              <div className="relative h-32 mt-8 overflow-hidden rounded-lg">
                <Image src="/placeholder.svg?height=200&width=500" alt="Theatre vision" fill className="object-cover" />
              </div> */}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/about">
              <Button className="group">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join us for our upcoming productions and experience the magic of live theatre
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/events">
              <Button size="lg" className="group">
                View All Events
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Announcements */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Latest Announcements</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Stay updated with the latest news and announcements from KATARISI FAMILY
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {announcements.map((announcement) => (
              <div key={announcement.id} className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors">
                <h3 className="font-display text-xl font-bold mb-2 text-primary">{announcement.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{announcement.date}</p>
                <p className="text-gray-300">{announcement.content}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/about#news">
              <Button
                variant="outline"
                size="lg"
                className="group border-white text-white hover:bg-white hover:text-black bg-transparent"
              >
                View All Announcements
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Join Our Theatre Community</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Whether you're an aspiring actor, experienced director, or passionate theatre enthusiast, there's a place
            for you in the KATARISI FAMILY.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/applications">
              <Button size="lg" variant="secondary" className="text-primary font-semibold">
                Apply Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent font-semibold"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

