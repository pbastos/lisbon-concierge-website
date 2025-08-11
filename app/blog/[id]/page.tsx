import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Clock, ArrowLeft } from "lucide-react"

export default function BlogPost({ params }: { params: { id: string } }) {
  // This would typically fetch the post data based on the ID
  const post = {
    id: params.id,
    title: "Maximizing Your Airbnb Revenue in Lisbon: 2024 Guide",
    content: `
      <p>Lisbon's short-term rental market continues to evolve, presenting both opportunities and challenges for property owners. In this comprehensive guide, we'll explore the latest strategies to maximize your rental income while maintaining high guest satisfaction.</p>
      
      <h2>Understanding the Current Market</h2>
      <p>The Lisbon rental market has seen significant changes in recent years. With new regulations and increased competition, it's more important than ever to have a strategic approach to your rental business.</p>
      
      <h2>Pricing Strategies That Work</h2>
      <p>Dynamic pricing is no longer optional—it's essential. Our data shows that properties using dynamic pricing strategies see an average revenue increase of 25-40% compared to static pricing models.</p>
      
      <h2>Guest Experience Excellence</h2>
      <p>In today's competitive market, exceptional guest experience is what sets successful properties apart. From seamless check-in processes to personalized local recommendations, every touchpoint matters.</p>
      
      <h2>Conclusion</h2>
      <p>Success in Lisbon's short-term rental market requires a combination of strategic pricing, exceptional service, and local expertise. By implementing these strategies, you can maximize your property's potential while providing guests with unforgettable experiences.</p>
    `,
    image: "/placeholder.svg?height=400&width=800",
    author: "Maria Santos",
    date: "2024-01-15",
    category: "Revenue Optimization",
    readTime: "5 min read",
  }

  return (
    <div className="min-h-screen bg-white">
      <article className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back button */}
          <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>

          {/* Article header */}
          <header className="mb-8">
            <Badge className="mb-4 bg-blue-600">{post.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">{post.title}</h1>
            <div className="flex items-center space-x-6 text-slate-600 mb-8">
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                {new Date(post.date).toLocaleDateString()}
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                {post.readTime}
              </div>
            </div>
          </header>

          {/* Featured image */}
          <div className="mb-8">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              width={800}
              height={400}
              className="w-full h-64 md:h-96 object-cover rounded-lg"
            />
          </div>

          {/* Article content */}
          <div
            className="prose prose-lg max-w-none prose-headings:text-slate-900 prose-p:text-slate-700 prose-p:leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Call to action */}
          <div className="mt-12 p-8 bg-blue-50 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to maximize your property's potential?</h3>
            <p className="text-slate-600 mb-6">Let our experts help you implement these strategies and more.</p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Contact Us Today
            </Button>
          </div>
        </div>
      </article>
    </div>
  )
}
