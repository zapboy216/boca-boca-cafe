import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function Landing() {
  return (
    <div className="flex flex-col min-h-screen font-poppins">
      <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="#" className="text-white font-bold text-2xl" prefetch={false}>
            Boca Boca Cafe
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#home" className="text-white hover:text-gray-300" prefetch={false}>
              Home
            </Link>
            <Link href="#gallery" className="text-white hover:text-gray-300" prefetch={false}>
              Gallery
            </Link>
            <Link href="#coupons" className="text-white hover:text-gray-300" prefetch={false}>
              Coupons
            </Link>
            <Link href="#about" className="text-white hover:text-gray-300" prefetch={false}>
              About
            </Link>
            <Link href="#contact" className="text-white hover:text-gray-300" prefetch={false}>
              Contact
            </Link>
          </nav>
          <Button variant="outline" className="md:hidden">
            Menu
          </Button>
        </div>
      </header>

      <section id="home" className="h-screen relative">
        <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
          <source src="https://storage.googleapis.com/dinan/videos/AdobeStock_302844273_Video_4K_Preview.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black opacity-70" />
        <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center text-center text-white animate__animated animate__fadeIn">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Boca Boca Cafe</h1>
          <p className="text-lg md:text-xl mb-8">Indulge in our delicious coffee, pastries, and more.</p>
          <Button>Visit Us</Button>
        </div>
      </section>

      <main className="flex min-h-screen flex-col items-center justify-between p-0">
        <section id="gallery" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center animate__animated animate__fadeIn">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <Image
                src="/placeholder.svg"
                alt="Cafe Image 1"
                width={400}
                height={300}
                className="rounded-lg object-cover"
              />
              <Image
                src="/placeholder.svg"
                alt="Cafe Image 2"
                width={400}
                height={300}
                className="rounded-lg object-cover"
              />
              <Image
                src="/placeholder.svg"
                alt="Cafe Image 3"
                width={400}
                height={300}
                className="rounded-lg object-cover"
              />
              <Image
                src="/placeholder.svg"
                alt="Cafe Image 4"
                width={400}
                height={300}
                className="rounded-lg object-cover"
              />
              <Image
                src="/placeholder.svg"
                alt="Cafe Image 5"
                width={400}
                height={300}
                className="rounded-lg object-cover"
              />
              <Image
                src="/placeholder.svg"
                alt="Cafe Image 6"
                width={400}
                height={300}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </section>

        <section id="coupons" className="mt-10 py-16 bg-primary text-white rounded-lg animate__animated animate__fadeIn">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Get a Coupon</h2>
                <p className="mb-8">Sign up for our newsletter and receive a coupon for 10% off your next visit.</p>
                <form className="flex flex-col md:flex-row gap-4">
                  <Input type="email" placeholder="Enter your email" className="flex-1" />
                  <Button variant="secondary">Get Coupon</Button>
                </form>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Loyalty Program</h2>
                <p className="mb-8">Join our loyalty program and earn points for free drinks and pastries.</p>
                <Button variant="secondary">Join Now</Button>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-16 animate__animated animate__fadeIn">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <Image
                  src="/placeholder.svg"
                  alt="Cafe Staff"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Our Story</h3>
                <p className="mb-4">
                  Boca Boca Cafe was founded in 2015 with the goal of providing our community with a cozy and welcoming
                  space to enjoy delicious coffee, pastries, and more. Our passion for great food and exceptional
                  service has made us a local favorite.
                </p>
                <h3 className="text-2xl font-bold mb-4">Our Team</h3>
                <p className="mb-4">
                  Our team of baristas and chefs are dedicated to creating an unforgettable experience for every
                  customer who walks through our doors. We take pride in our attention to detail and commitment to using
                  only the freshest, highest-quality ingredients.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 bg-gray-100 rounded-lg animate__animated animate__fadeIn">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" type="text" placeholder="Enter your name" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" rows={5} placeholder="Enter your message" />
                  </div>
                  <Button>Submit</Button>
                </form>
              </div>
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3588.7701163699!2d-80.09097568455013!3d26.3585481833453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8d1d7c6b1f9c3%3A0x1d0d3d0d0d0d0d0d!2sBoca%20Boca%20Cafe!5e0!3m2!1sen!2sus!4v1684806000000!5m2!1sen!2sus"
                  width="100%"
                  height="400"
                  className="rounded-lg"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-20 bg-primary text-white py-12 rounded-lg">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <Image src="/placeholder.svg" alt="Boca Boca Cafe Logo" width={150} height={50} />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="#home" className="hover:text-gray-300" prefetch={false}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="#gallery" className="hover:text-gray-300" prefetch={false}>
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link href="#coupons" className="hover:text-gray-300" prefetch={false}>
                      Coupons
                    </Link>
                  </li>
                  <li>
                    <Link href="#about" className="hover:text-gray-300" prefetch={false}>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="#contact" className="hover:text-gray-300" prefetch={false}>
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4">Hours</h4>
                <p>Monday - Friday: 7am - 7pm</p>
                <p>Saturday - Sunday: 8am - 6pm</p>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4">Contact</h4>
                <p>123 Main Street, Boca Raton, FL 33431</p>
                <p>Phone: (555) 555-5555</p>
                <p>Email: info@bocabocacafe.com</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-sm">&copy; 2024 Boca Boca Cafe. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
