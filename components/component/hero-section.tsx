import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="pt-20 md:pt-4 overflow-hidden max-h-full">
      <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16 items-center">
        <div className="lg:order-2 space-y-4">
          <h1 className="text-6xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-9xl">
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
          </div>
        </div>
        <Image
          src="/image.png"
          width={1600}  // Increase width for a larger image
          height={900}  // Increase height for a larger image
          alt="Hero"
          className="w-full object-center rounded-xl object-cover lg:order-1"
        />
      </div>
    </section>
  )
}
