import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "lucide-react"

interface EventCardProps {
  event: {
    id: number
    title: string
    date: string
    image: string
    description: string
  }
}

const EventCard = ({ event }: EventCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      {/*<div className="relative h-48 w-full">
        <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
      </div> */}
      <CardHeader>
        <CardTitle className="font-display">{event.title}</CardTitle>
        <CardDescription className="flex items-center">
          <Calendar className="h-4 w-4 mr-2" />
          {event.date}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{event.description}</p>
      </CardContent>
      <CardFooter>
        <Link href={`/events/${event.id}`} className="w-full">
          <Button variant="outline" className="w-full">
            Learn More
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

export default EventCard

