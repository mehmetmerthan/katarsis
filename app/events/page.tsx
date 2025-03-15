import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, MapPin, Ticket } from "lucide-react"

export default function EventsPage() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Hamlet: Reimagined",
      date: "April 15-20, 2025",
      time: "7:30 PM",
      location: "Main Stage",
      image: "/placeholder.svg?height=400&width=600",
      description: "A modern take on Shakespeare's classic tragedy, exploring themes of betrayal and revenge.",
      ticketPrice: "$25-45",
      category: "play",
    },
    {
      id: 2,
      title: "The Glass Menagerie",
      date: "May 5-10, 2025",
      time: "7:00 PM",
      location: "Studio Theatre",
      image: "/placeholder.svg?height=400&width=600",
      description: "Tennessee Williams' poignant memory play about family, dreams, and disillusionment.",
      ticketPrice: "$20-35",
      category: "play",
    },
    {
      id: 3,
      title: "Improv Night: Unscripted",
      date: "Every Friday",
      time: "8:00 PM",
      location: "Black Box Theatre",
      image: "/placeholder.svg?height=400&width=600",
      description: "Join our talented ensemble for a night of spontaneous comedy and storytelling.",
      ticketPrice: "$15",
      category: "special",
    },
    {
      id: 4,
      title: "Acting Workshop: Character Development",
      date: "April 8, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Workshop Studio",
      image: "/placeholder.svg?height=400&width=600",
      description: "An intensive workshop focused on character development techniques for actors of all levels.",
      ticketPrice: "$75",
      category: "workshop",
    },
    {
      id: 5,
      title: "Children's Theatre: The Wizard of Oz",
      date: "June 1-5, 2025",
      time: "2:00 PM",
      location: "Main Stage",
      image: "/placeholder.svg?height=400&width=600",
      description: "A magical production for the whole family, featuring young performers from our youth program.",
      ticketPrice: "$15-30",
      category: "play",
    },
    {
      id: 6,
      title: "Playwriting Workshop",
      date: "May 15, 2025",
      time: "6:00 PM - 9:00 PM",
      location: "Workshop Studio",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Learn the fundamentals of dramatic writing in this hands-on workshop led by professional playwrights.",
      ticketPrice: "$50",
      category: "workshop",
    },
    {
      id: 7,
      title: "Open Mic Night: Poetry & Performance",
      date: "Last Thursday of every month",
      time: "7:00 PM",
      location: "Café Stage",
      image: "/placeholder.svg?height=400&width=600",
      description: "Share your original poetry, monologues, or songs in our supportive community space.",
      ticketPrice: "$5 suggested donation",
      category: "special",
    },
    {
      id: 8,
      title: "Voice & Movement Workshop",
      date: "April 22, 2025",
      time: "1:00 PM - 5:00 PM",
      location: "Movement Studio",
      image: "/placeholder.svg?height=400&width=600",
      description: "Explore the connection between voice and physical expression in this dynamic workshop.",
      ticketPrice: "$60",
      category: "workshop",
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-black text-white">
        <div className="absolute inset-0 opacity-30">
          <Image src="/placeholder.svg?height=800&width=1920" alt="Theatre events" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 slide-in-left">Events & Performances</h1>
            <p className="text-xl mb-8 text-gray-300 slide-in-right">
              Discover our upcoming productions, workshops, and special events. Join us for unforgettable theatrical
              experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Events Calendar */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse our calendar of upcoming productions, workshops, and special events.
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">All Events</TabsTrigger>
                <TabsTrigger value="play">Productions</TabsTrigger>
                <TabsTrigger value="workshop">Workshops</TabsTrigger>
                <TabsTrigger value="special">Special Events</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {upcomingEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="play" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {upcomingEvents
                  .filter((event) => event.category === "play")
                  .map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="workshop" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {upcomingEvents
                  .filter((event) => event.category === "workshop")
                  .map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="special" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {upcomingEvents
                  .filter((event) => event.category === "special")
                  .map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Season Subscription */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold mb-6">Season Subscription</h2>
              <p className="mb-4 text-lg">Become a season subscriber and enjoy exclusive benefits:</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="mr-2 text-xl">•</span>
                  <span>Priority seating for all main stage productions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-xl">•</span>
                  <span>20% discount on regular ticket prices</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-xl">•</span>
                  <span>Invitations to exclusive events and meet-the-artist receptions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-xl">•</span>
                  <span>Flexible ticket exchange options</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-xl">•</span>
                  <span>10% discount on workshops and classes</span>
                </li>
              </ul>
              <Button size="lg" variant="secondary" className="text-primary font-semibold">
                Subscribe Now
              </Button>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Season subscription"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Group Bookings */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold mb-4">Group Bookings</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Planning to attend with a group? We offer special rates for groups of 10 or more. Perfect for schools,
            community organizations, corporate outings, and special celebrations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg">Book for a Group</Button>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Contact for Details
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

interface EventCardProps {
  event: {
    id: number
    title: string
    date: string
    time: string
    location: string
    image: string
    description: string
    ticketPrice: string
    category: string
  }
}

function EventCard({ event }: EventCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col">
      <div className="relative h-48 w-full">
        <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
      </div>
      <CardHeader>
        <CardTitle className="font-display">{event.title}</CardTitle>
        <CardDescription className="flex items-center">
          <Calendar className="h-4 w-4 mr-2" />
          {event.date}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-3 mb-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="h-4 w-4 mr-2" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 mr-2" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Ticket className="h-4 w-4 mr-2" />
            <span>{event.ticketPrice}</span>
          </div>
        </div>
        <p className="text-muted-foreground">{event.description}</p>
      </CardContent>
      <CardFooter>
        <Link href={`/events/${event.id}`} className="w-full">
          <Button variant="outline" className="w-full">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

