import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight } from "lucide-react"

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "Maximizing Your Airbnb Revenue in Lisbon: 2024 Guide",
      excerpt: "Learn the latest strategies to optimize your short-term rental income in Lisbon's competitive market.",
      image: "/placeholder.svg?height=300&width=500",
      author: "Maria Santos",
      date: "2024-01-15",
      category: "Revenue Optimization",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "New Regulations for Short-Term Rentals in Portugal",
      excerpt: "Stay compliant with the latest legal requirements for operating short-term rentals in Portugal.",
      image: "/placeholder.svg?height=300&width=500",
      author: "João Silva",
      date: "2024-01-10",
      category: "Legal & Compliance",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "Creating the Perfect Guest Experience in Lisbon",
      excerpt: "Tips and tricks to ensure your guests have an unforgettable stay in Portugal's capital.",
      image: "/placeholder.svg?height=300&width=500",
      author: "Ana Costa",
      date: "2024-01-05",
      category: "Guest Experience",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "Seasonal Trends in Lisbon's Short-Term Rental Market",
      excerpt: "Understanding demand patterns to optimize your pricing and availability throughout the year.",
      image: "/placeholder.svg?height=300&width=500",
      author: "Pedro Oliveira",
      date: "2024-01-01",
      category: "Market Analysis",
      readTime: "8 min read",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Blog</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Insights, tips, and updates from Lisbon's premier short-term rental management experts
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-4 left-4 bg-blue-600">{post.category}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl leading-tight hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
