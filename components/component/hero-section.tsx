import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="w-full pt-12 md:pt-24 lg:pt-32 bg-white">
      <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <Image
          src="/placeholder.svg"
          width={800}
          height={450}
          alt="Hero"
          className="aspect-video overflow-hidden rounded-xl object-cover"
        />
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Musta <span className="text-orange-500"> hr</span>
          </h1>
          <p className="text-muted-foreground md:text-xl">
            Best developer, experienced with next js, node js and more.
          </p>
          <div className="space-x-4">
            <Link
              href="#"
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Get Started
            </Link>
            <Link
              href="#"
              className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
