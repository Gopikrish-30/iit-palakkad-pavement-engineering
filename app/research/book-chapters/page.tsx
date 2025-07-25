import { BookChaptersGrid } from "@/components/book-chapters-grid"

export default function BookChaptersPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Book Chapters</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Contributions to academic books and comprehensive reference materials
          </p>
        </div>
      </section>

      {/* Book Chapters Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <BookChaptersGrid />
        </div>
      </section>
    </div>
  )
}
