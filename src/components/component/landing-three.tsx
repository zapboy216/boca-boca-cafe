import React from 'react'
import  Image  from 'next/image'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useTranslations } from 'next-intl'

export function LandingThree() {
  const t = useTranslations('Land')
  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="#" className="text-white font-bold text-2xl" prefetch={false}>
            Boca Boca Cafe
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#" className="text-white hover:text-gray-300" prefetch={false}>
            {t('nav_one')}
            </Link>
            <Link href="#" className="text-white hover:text-gray-300" prefetch={false}>
              Gallery
            </Link>
            <Link href="#" className="text-white hover:text-gray-300" prefetch={false}>
              About
            </Link>
            <Link href="#" className="text-white hover:text-gray-300" prefetch={false}>
              Contact
            </Link>
          </nav>
          <Button className="md:hidden">Menu</Button>
        </div>
      </header>
      <section className="relative h-screen">
        <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
          <source src="https://storage.googleapis.com/dinan/videos/AdobeStock_302844273_Video_4K_Preview.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black opacity-70" />
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <h1 className="text-5xl font-bold text-white mb-4">Welcome to Boca Boca Cafe</h1>
            <p className="text-xl text-white mb-8">
              Indulge in the flavors of our vibrant cafe, where every bite tells a story.
            </p>
            <Button>Explore the Menu</Button>
          </div>
        </div>
      </section>
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <Image src="/placeholder.svg" width={400} height={300} alt="Boca Boca Cafe" className="rounded-lg" />
            <Image src="/placeholder.svg" width={400} height={300} alt="Boca Boca Cafe" className="rounded-lg" />
            <Image src="/placeholder.svg" width={400} height={300} alt="Boca Boca Cafe" className="rounded-lg" />
            <Image src="/placeholder.svg" width={400} height={300} alt="Boca Boca Cafe" className="rounded-lg" />
            <Image src="/placeholder.svg" width={400} height={300} alt="Boca Boca Cafe" className="rounded-lg" />
            <Image src="/placeholder.svg" width={400} height={300} alt="Boca Boca Cafe" className="rounded-lg" />
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Coupons</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <Card className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-bold mb-4">10% Off</h3>
              <p className="text-gray-600 mb-6">Present this coupon to receive 10% off your entire order.</p>
              <Button>Redeem Now</Button>
            </Card>
            <Card className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-bold mb-4">Free Dessert</h3>
              <p className="text-gray-600 mb-6">Enjoy a free dessert with the purchase of any entree.</p>
              <Button>Redeem Now</Button>
            </Card>
            <Card className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-bold mb-4">Buy One, Get One</h3>
              <p className="text-gray-600 mb-6">Buy one entree, get the second one for free.</p>
              <Button>Redeem Now</Button>
            </Card>
          </div>
        </div>
      </section>
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">About Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-6">
                Boca Boca Cafe is a vibrant and welcoming cafe that has been serving the community for over a decade.
                Our passion for creating delicious, high-quality food and providing exceptional customer service is at
                the heart of everything we do.
              </p>
              <p className="text-gray-600 mb-6">
                Our menu features a wide variety of dishes, from classic breakfast items to innovative lunch and dinner
                options. We use only the freshest, locally-sourced ingredients to ensure that every bite is bursting
                with flavor.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Staff</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <Image
                    src="/placeholder.svg"
                    width={200}
                    height={200}
                    alt="Staff Member"
                    className="rounded-full mb-4"
                  />
                  <h4 className="text-xl font-bold mb-2">John Doe</h4>
                  <p className="text-gray-600">Head Chef</p>
                </div>
                <div>
                  <Image
                    src="/placeholder.svg"
                    width={200}
                    height={200}
                    alt="Staff Member"
                    className="rounded-full mb-4"
                  />
                  <h4 className="text-xl font-bold mb-2">Jane Smith</h4>
                  <p className="text-gray-600">General Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <form className="bg-white rounded-lg shadow-md p-6">
                <div className="mb-4">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" type="text" placeholder="Enter your name" />
                </div>
                <div className="mb-4">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="mb-4">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" rows={5} placeholder="Enter your message" />
                </div>
                <Button>Submit</Button>
              </form>
            </div>
            <div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-2xl font-bold mb-4">Location</h3>
                <p className="text-gray-600 mb-6">123 Main Street, Anytown USA 12345</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <Link href="#" className="text-2xl font-bold mb-4" prefetch={false}>
                Boca Boca Cafe
              </Link>
              <p className="text-gray-400 mb-4">Serving the community with delicious food and exceptional service.</p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white" prefetch={false}>
                 facebook
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white" prefetch={false}>
                 twitter
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white" prefetch={false}>
                  instagram
                </Link>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white" prefetch={false}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white" prefetch={false}>
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white" prefetch={false}>
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white" prefetch={false}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Hours</h4>
              <ul className="space-y-2">
                <li>Monday - Friday: 7am - 9pm</li>
                <li>Saturday: 8am - 10pm</li>
                <li>Sunday: 9am - 8pm</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>123 Main Street, Anytown USA 12345</li>
                <li>Phone: (123) 456-7890</li>
                <li>Email: info@bocabocacafe.com</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">&copy; 2024 Boca Boca Cafe. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}


