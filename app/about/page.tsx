import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, History, Target } from "lucide-react"

export default function AboutPage() {
  const teamMembers = [
    {
      id: 1,
      name: "Elena Kataris",
      role: "Artistic Director",
      bio: "With over 20 years of experience in theatre, Elena founded KATARISI FAMILY to create a space for artistic expression and community engagement.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 2,
      name: "Michael Thornton",
      role: "Technical Director",
      bio: "Michael brings his expertise in lighting, sound, and set design to create immersive theatrical experiences for our audiences.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 3,
      name: "Sophia Chen",
      role: "Education Coordinator",
      bio: "Sophia leads our workshops and youth programs, sharing her passion for theatre with the next generation of performers.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 4,
      name: "James Wilson",
      role: "Production Manager",
      bio: "James ensures that every production runs smoothly, from rehearsals to closing night, with his meticulous attention to detail.",
      image: "/placeholder.svg?height=400&width=400",
    },
  ]

  const achievements = [
    {
      title: "Best Ensemble Performance",
      year: "2024",
      description: "Regional Theatre Awards for 'The Cherry Orchard'",
    },
    {
      title: "Outstanding Direction",
      year: "2023",
      description: "City Arts Foundation for 'A Streetcar Named Desire'",
    },
    {
      title: "Community Impact Award",
      year: "2022",
      description: "For our youth outreach program in underserved communities",
    },
    {
      title: "Technical Excellence",
      year: "2021",
      description: "National Theatre Association for innovative set design",
    },
  ]

  const news = [
    {
      id: 1,
      title: "KATARISI FAMILY Receives Arts Grant",
      date: "March 1, 2025",
      content:
        "We're thrilled to announce that we've received a substantial grant from the National Arts Foundation to support our upcoming season and community outreach programs.",
    },
    {
      id: 2,
      title: "New Partnership with Local Schools",
      date: "February 15, 2025",
      content:
        "KATARISI FAMILY is partnering with local schools to bring theatre education to classrooms, offering workshops and performances for students of all ages.",
    },
    {
      id: 3,
      title: "Renovation Project Completed",
      date: "January 30, 2025",
      content:
        "After months of work, we're excited to unveil our newly renovated performance space, featuring improved seating, lighting, and accessibility features.",
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-black text-white">
        <div className="absolute inset-0 opacity-30">
          <Image src="/placeholder.svg?height=800&width=1920" alt="Theatre background" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 slide-in-left">About KATARISI FAMILY</h1>
            <p className="text-xl mb-8 text-gray-300 slide-in-right">
              A professional theatre club dedicated to artistic excellence, community engagement, and the transformative
              power of storytelling through performance.
            </p>
          </div>
        </div>
      </section>

      {/* History & Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <History className="h-8 w-8 text-primary mr-3" />
                <h2 className="font-display text-3xl font-bold">Our History</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                Founded in 2010 by Elena Kataris, our theatre club began as a small group of passionate performers
                dedicated to bringing thought-provoking theatre to our community.
              </p>
              <p className="text-muted-foreground mb-4">
                Over the years, we've grown into a vibrant artistic community, producing a diverse range of productions
                from classic plays to contemporary works and original pieces.
              </p>
              <p className="text-muted-foreground">
                Today, KATARISI FAMILY is recognized as a leading theatre company, known for our artistic integrity,
                innovative productions, and commitment to nurturing new talent.
              </p>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="KATARISI FAMILY history"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-20">
            <div className="order-2 md:order-1 relative h-80 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="KATARISI FAMILY mission"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-primary mr-3" />
                <h2 className="font-display text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                At KATARISI FAMILY, our mission is to create transformative theatrical experiences that inspire,
                challenge, and connect our community.
              </p>
              <p className="text-muted-foreground mb-4">We are committed to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Producing high-quality, thought-provoking theatre</li>
                <li>Providing educational opportunities for artists of all ages</li>
                <li>Fostering diversity and inclusion in all aspects of our work</li>
                <li>Building community through shared artistic experiences</li>
              </ul>
              <p className="text-muted-foreground">
                We believe in the power of theatre to transform lives and create meaningful connections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-primary mr-3" />
              <h2 className="font-display text-3xl font-bold">Our Team</h2>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet the dedicated professionals who bring our productions to life and nurture our artistic community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-64 w-full">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardContent className="pt-6">
                  <h3 className="font-display text-xl font-bold">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Award className="h-8 w-8 text-primary mr-3" />
              <h2 className="font-display text-3xl font-bold">Our Achievements</h2>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Recognitions and awards that celebrate our commitment to theatrical excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-secondary p-6 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-display text-xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-primary font-medium mb-2">{achievement.year}</p>
                <p className="text-muted-foreground">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Announcements */}
      <section id="news" className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-4">News & Announcements</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Stay updated with the latest happenings at KATARISI FAMILY Theatre Club.
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {news.map((item) => (
              <div key={item.id} className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors">
                <h3 className="font-display text-xl font-bold mb-2 text-primary">{item.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{item.date}</p>
                <p className="text-gray-300">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold mb-6">Join Our Theatre Family</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Become part of our vibrant community of artists and theatre enthusiasts. Whether you're interested in
            performing, directing, designing, or supporting our work, there's a place for you at KATARISI FAMILY.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/applications">
              <Button size="lg" variant="secondary" className="text-primary font-semibold">
                Apply Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

