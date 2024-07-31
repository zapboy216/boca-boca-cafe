import React from 'react'
import  Image  from 'next/image'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function LandingTwo() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header className="fixed top-0 z-50 w-full bg-transparent">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="#" className="flex items-center" prefetch={false}>
            Icon
            <span className="ml-2 text-lg font-bold text-white">Boca Boca Cafe</span>
          </Link>
          <nav className="hidden space-x-4 md:flex">
            <Link href="#" className="text-white hover:underline" prefetch={false}>
              Home
            </Link>
            <Link href="#" className="text-white hover:underline" prefetch={false}>
              Gallery
            </Link>
            <Link href="#" className="text-white hover:underline" prefetch={false}>
              About
            </Link>
            <Link href="#" className="text-white hover:underline" prefetch={false}>
              Contact
            </Link>
          </nav>
          <Button className="hidden md:inline-flex">Order Now</Button>
        </div>
      </header>
      <section className="relative flex h-[100dvh] items-center justify-center">
        <video autoPlay loop muted className="absolute z-0 h-full w-full object-cover">
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute z-10 h-full w-full bg-black/50" />
        <div className="relative z-20 max-w-3xl text-center text-white">
          <h1 className="text-4xl font-bold md:text-6xl">Discover the Taste of Boca Boca Cafe</h1>
          <p className="mt-4 text-lg md:text-xl">
            Indulge in our delectable menu, crafted with the finest ingredients and served with passion.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <Button>Order Now</Button>
            <Button variant="secondary">Learn More</Button>
          </div>
        </div>
      </section>
      <section id="gallery" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-center text-3xl font-bold md:text-4xl">Explore Our Gallery</h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground md:text-lg">
            Discover the vibrant atmosphere and mouthwatering dishes that make Boca Boca Cafe a local favorite.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Image
              src="/placeholder.svg"
              width={400}
              height={300}
              alt="Gallery Image 1"
              className="h-full w-full rounded-lg object-cover"
            />
            <Image
              src="/placeholder.svg"
              width={400}
              height={300}
              alt="Gallery Image 2"
              className="h-full w-full rounded-lg object-cover"
            />
            <Image
              src="/placeholder.svg"
              width={400}
              height={300}
              alt="Gallery Image 3"
              className="h-full w-full rounded-lg object-cover"
            />
            <Image
              src="/placeholder.svg"
              width={400}
              height={300}
              alt="Gallery Image 4"
              className="h-full w-full rounded-lg object-cover"
            />
            <Image
              src="/placeholder.svg"
              width={400}
              height={300}
              alt="Gallery Image 5"
              className="h-full w-full rounded-lg object-cover"
            />
            <Image
              src="/placeholder.svg"
              width={400}
              height={300}
              alt="Gallery Image 6"
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </section>
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center text-white">
            <h2 className="text-3xl font-bold md:text-4xl">Enjoy Our Exclusive Coupons</h2>
            <p className="mt-4 text-lg md:text-xl">
              Take advantage of our limited-time offers and save on your next visit to Boca Boca Cafe.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <Button variant="secondary">Get Coupon</Button>
              <Button variant="secondary">Download App</Button>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">About Boca Boca Cafe</h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                Boca Boca Cafe is a beloved local institution, serving up delectable dishes and creating a warm,
                inviting atmosphere for our community. Our passion for quality ingredients and exceptional service is at
                the heart of everything we do.
              </p>
              <p className="mt-4 text-muted-foreground md:text-lg">
                Our talented team of chefs and baristas work tirelessly to deliver an unparalleled dining experience,
                from our signature coffee blends to our mouthwatering menu items. We take pride in supporting local
                suppliers and using sustainable practices whenever possible.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">Meet Our Talented Team</h2>
              <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="rounded-lg bg-muted p-4 shadow-sm">
                  <Image
                    src="/placeholder.svg"
                    width={200}
                    height={200}
                    alt="Team Member 1"
                    className="mx-auto h-24 w-24 rounded-full object-cover"
                  />
                  <h3 className="mt-4 text-center text-lg font-bold">John Doe</h3>
                  <p className="text-center text-muted-foreground">Head Chef</p>
                </div>
                <div className="rounded-lg bg-muted p-4 shadow-sm">
                  <Image
                    src="/placeholder.svg"
                    width={200}
                    height={200}
                    alt="Team Member 2"
                    className="mx-auto h-24 w-24 rounded-full object-cover"
                  />
                  <h3 className="mt-4 text-center text-lg font-bold">Jane Smith</h3>
                  <p className="text-center text-muted-foreground">Barista Manager</p>
                </div>
                <div className="rounded-lg bg-muted p-4 shadow-sm">
                  <Image
                    src="/placeholder.svg"
                    width={200}
                    height={200}
                    alt="Team Member 3"
                    className="mx-auto h-24 w-24 rounded-full object-cover"
                  />
                  <h3 className="mt-4 text-center text-lg font-bold">Michael Johnson</h3>
                  <p className="text-center text-muted-foreground">Operations Manager</p>
                </div>
                <div className="rounded-lg bg-muted p-4 shadow-sm">
                  <Image
                    src="/placeholder.svg"
                    width={200}
                    height={200}
                    alt="Team Member 4"
                    className="mx-auto h-24 w-24 rounded-full object-cover"
                  />
                  <h3 className="mt-4 text-center text-lg font-bold">Sarah Lee</h3>
                  <p className="text-center text-muted-foreground">Customer Service Lead</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="bg-muted py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">Get in Touch</h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                Have a question or want to learn more about Boca Boca Cafe? Fill out the form below and our team will be
                in touch.
              </p>
              <form className="mt-8 space-y-4">
                <Input type="text" placeholder="Name" className="w-full" />
                <Input type="email" placeholder="Email" className="w-full" />
                <Textarea placeholder="Message" className="w-full" />
                <Button type="submit">Submit</Button>
              </form>
            </div>
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">Visit Us</h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                Find us at the heart of downtown Boca Raton, where weve been serving the community for over a decade.
              </p>
              <div className="mt-8">
                <div />
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-primary py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <Link href="#" className="flex items-center" prefetch={false}>
                Icon
                <span className="ml-2 text-lg font-bold text-white">Boca Boca Cafe</span>
              </Link>
              <p className="mt-4 text-white">
                Discover the taste of Boca Boca Cafe, where quality and community come together.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Quick Links</h3>
              <nav className="mt-4 space-y-2">
                <Link href="#" className="text-white hover:underline" prefetch={false}>
                  Home
                </Link>
                <Link href="#" className="text-white hover:underline" prefetch={false}>
                  Gallery
                </Link>
                <Link href="#" className="text-white hover:underline" prefetch={false}>
                  About
                </Link>
                <Link href="#" className="text-white hover:underline" prefetch={false}>
                  Contact
                </Link>
              </nav>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Menu</h3>
              <nav className="mt-4 space-y-2">
                <Link href="#" className="text-white hover:underline" prefetch={false}>
                  Coffee
                </Link>
                <Link href="#" className="text-white hover:underline" prefetch={false}>
                  Food
                </Link>
                <Link href="#" className="text-white hover:underline" prefetch={false}>
                  Drinks
                </Link>
                <Link href="#" className="text-white hover:underline" prefetch={false}>
                  Desserts
                </Link>
              </nav>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Follow Us</h3>
              <nav className="mt-4 space-y-2">
                <Link href="#" className="text-white hover:underline" prefetch={false}>
                  Facebook
                </Link>
                <Link href="#" className="text-white hover:underline" prefetch={false}>
                  Instagram
                </Link>
                <Link href="#" className="text-white hover:underline" prefetch={false}>
                  Twitter
                </Link>
                <Link href="#" className="text-white hover:underline" prefetch={false}>
                  LinkedIn
                </Link>
              </nav>
            </div>
          </div>
          <div className="mt-8 text-center text-white">&copy; 2024 Boca Boca Cafe. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}


