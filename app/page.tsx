"use client"

import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef } from "react"
import { Star, Heart, ShoppingBag, Users, Award, Sparkles } from "lucide-react"

export default function ArtisanMarketplace() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 overflow-hidden"
    >
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-orange-100"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"
          >
            Artisan Marketplace
          </motion.div>
          <div className="hidden md:flex items-center space-x-8">
            {["Discover", "Creators", "Community", "About"].map((item, index) => (
              <motion.a
                key={item}
                href="#"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                whileHover={{ y: -2, color: "#ea580c" }}
                className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
              >
                {item}
              </motion.a>
            ))}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow"
          >
            Join Now
          </motion.button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      >
        {/* Enhanced Background with Multiple Layers */}
        <div className="absolute inset-0">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-100 to-red-100"></div>

          {/* Texture overlay */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23f97316' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>

          {/* Paper texture */}
          <div className="absolute inset-0 opacity-30 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>

        {/* Animated Background Elements */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-20 w-24 h-24 bg-gradient-to-br from-orange-300/30 to-red-300/30 rounded-full blur-sm"
        />

        <motion.div
          animate={{
            y: [0, 25, 0],
            rotate: [0, -8, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-32 right-16 w-32 h-32 bg-gradient-to-br from-pink-300/20 to-orange-300/20 rounded-full blur-md"
        />

        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-br from-yellow-300/25 to-orange-300/25 rounded-full blur-sm"
        />

        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Enhanced Hero Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-orange-200 rounded-full px-6 py-3 mb-8 shadow-lg"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Sparkles className="w-5 h-5 text-orange-500" />
              </motion.div>
              <span className="text-orange-700 font-semibold">Handcrafted Excellence Since 2020</span>
            </motion.div>

            {/* Enhanced Main Heading */}
            <motion.h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight font-playfair">
              <motion.span
                initial={{ opacity: 0, x: -100, rotateX: -90 }}
                animate={{ opacity: 1, x: 0, rotateX: 0 }}
                transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
                className="block bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent drop-shadow-sm"
              >
                Handcrafted
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 100, rotateX: 90 }}
                animate={{ opacity: 1, x: 0, rotateX: 0 }}
                transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                className="block text-gray-800 drop-shadow-sm"
              >
                with Love
              </motion.span>
            </motion.h1>

            {/* Enhanced Subtitle with Typewriter Effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mb-10"
            >
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-xl md:text-2xl lg:text-3xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-crimson mb-4"
              >
                Discover unique, handmade treasures from talented artisans around the world.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="text-lg md:text-xl text-orange-600 font-semibold font-crimson italic"
              >
                Every piece tells a story, every purchase supports a dream.
              </motion.p>
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(249, 115, 22, 0.4)",
                  y: -5,
                }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white px-10 py-5 rounded-full text-lg font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-3 relative overflow-hidden"
              >
                <motion.div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <ShoppingBag className="w-6 h-6 relative z-10" />
                <span className="relative z-10">Explore Collection</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  className="relative z-10"
                >
                  →
                </motion.div>
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(249, 115, 22, 0.1)",
                  borderColor: "#ea580c",
                  y: -5,
                }}
                whileTap={{ scale: 0.95 }}
                className="group border-2 border-orange-500 text-orange-600 px-10 py-5 rounded-full text-lg font-bold hover:bg-orange-50 transition-all duration-300 flex items-center gap-3 backdrop-blur-sm bg-white/50"
              >
                <Users className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span>Meet Artisans</span>
              </motion.button>
            </motion.div>

            {/* Enhanced Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-8 md:gap-12"
            >
              {[
                { number: "500+", label: "Artisans", icon: "👨‍🎨" },
                { number: "10K+", label: "Products", icon: "🎨" },
                { number: "50K+", label: "Happy Customers", icon: "❤️" },
                { number: "25+", label: "Countries", icon: "🌍" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.6 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-orange-100"
                >
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="text-2xl md:text-3xl font-bold text-orange-600 font-playfair">{stat.number}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Floating Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-10 w-16 h-16 bg-gradient-to-br from-orange-400 to-red-400 rounded-full opacity-20 blur-sm"
        />

        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/4 right-10 w-12 h-12 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full opacity-20 blur-sm"
        />

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="flex flex-col items-center text-orange-600"
          >
            <span className="text-sm font-medium mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-orange-400 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="w-1 h-3 bg-orange-400 rounded-full mt-2"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Featured Products Grid */}
      <FeaturedProducts />

      {/* Creator Stories */}
      <CreatorStories />

      {/* Community Section */}
      <CommunitySection />

      {/* Footer */}
      <Footer />
    </div>
  )
}

function FeaturedProducts() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const products = [
    {
      id: 1,
      name: "Ceramic Vase",
      creator: "Maya Chen",
      price: "R1,650",
      rating: 4.9,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 2,
      name: "Woven Basket",
      creator: "James Wilson",
      price: "R835",
      rating: 4.8,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 3,
      name: "Leather Journal",
      creator: "Sofia Rodriguez",
      price: "R1,245",
      rating: 4.9,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 4,
      name: "Glass Pendant",
      creator: "Alex Thompson",
      price: "R2,320",
      rating: 5.0,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 5,
      name: "Wooden Bowl",
      creator: "Emma Davis",
      price: "R1,450",
      rating: 4.7,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 6,
      name: "Silk Scarf",
      creator: "Liam Johnson",
      price: "R1,765",
      rating: 4.8,
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <section ref={ref} className="py-20 px-6 bg-gradient-to-b from-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent font-playfair">
            Featured Creations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-crimson">
            Discover extraordinary pieces crafted by our most talented artisans
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center pb-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-orange-600 px-6 py-2 rounded-full font-semibold shadow-lg"
                  >
                    Quick View
                  </motion.button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 cursor-pointer"
                >
                  <Heart className="w-5 h-5 text-red-500" />
                </motion.div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-1">({product.rating})</span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-orange-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-3">by {product.creator}</p>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-orange-600">{product.price}</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-shadow"
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CreatorStories() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const creators = [
    {
      id: 1,
      name: "Maya Chen",
      craft: "Ceramic Artist",
      story:
        "Creating beautiful pottery inspired by nature's organic forms and ancient techniques passed down through generations.",
      image: "/placeholder.svg?height=200&width=200",
      products: 47,
      rating: 4.9,
    },
    {
      id: 2,
      name: "James Wilson",
      craft: "Basket Weaver",
      story:
        "Weaving stories into every basket using sustainable materials and traditional patterns from my grandmother's teachings.",
      image: "/placeholder.svg?height=200&width=200",
      products: 32,
      rating: 4.8,
    },
    {
      id: 3,
      name: "Sofia Rodriguez",
      craft: "Leather Artisan",
      story:
        "Handcrafting leather goods with precision and care, each piece designed to last a lifetime and tell your story.",
      image: "/placeholder.svg?height=200&width=200",
      products: 28,
      rating: 4.9,
    },
  ]

  return (
    <section ref={ref} className="py-20 px-6 bg-gradient-to-b from-red-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent font-playfair">
            Meet Our Artisans
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-crimson">
            Every creator has a unique story, passion, and dedication to their craft
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {creators.map((creator, index) => (
            <motion.div
              key={creator.id}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, rotateY: 5 }}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="relative mb-6"
              >
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-orange-400 to-red-400 p-1">
                  <img
                    src={creator.image || "/placeholder.svg"}
                    alt={creator.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center"
                >
                  <Sparkles className="w-4 h-4 text-white" />
                </motion.div>
              </motion.div>

              <h3 className="text-2xl font-bold text-gray-800 mb-2 font-playfair">{creator.name}</h3>
              <p className="text-orange-600 font-semibold mb-4">{creator.craft}</p>

              <p className="text-gray-600 mb-6 leading-relaxed font-crimson">{creator.story}</p>

              <div className="flex justify-center gap-6 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">{creator.products}</div>
                  <div className="text-sm text-gray-500">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600 flex items-center justify-center gap-1">
                    {creator.rating} <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  </div>
                  <div className="text-sm text-gray-500">Rating</div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow w-full"
              >
                View Collection
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CommunitySection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 px-6 bg-gradient-to-b from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent font-playfair">
            Join Our Community
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-crimson">
            Connect with fellow art lovers, discover new techniques, and celebrate creativity together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-8">
              {[
                { icon: Users, title: "Connect", desc: "Meet artisans and art enthusiasts from around the world" },
                { icon: Award, title: "Learn", desc: "Access exclusive workshops and masterclasses" },
                { icon: Heart, title: "Support", desc: "Help preserve traditional crafts and support local artists" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-full">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-8 text-white text-center"
          >
            <h3 className="text-3xl font-bold mb-6 font-playfair">Ready to Start Your Journey?</h3>
            <p className="text-lg mb-8 opacity-90">
              Join thousands of creators and collectors in our vibrant community
            </p>

            <div className="space-y-4">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-white text-orange-600 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Become an Artisan
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full border-2 border-white text-white py-4 rounded-full text-lg font-bold hover:bg-white hover:text-orange-600 transition-all duration-300"
              >
                Start Shopping
              </motion.button>
            </div>

            <div className="mt-8 flex justify-center gap-8 text-center">
              <div>
                <div className="text-2xl font-bold">10K+</div>
                <div className="text-sm opacity-80">Artisans</div>
              </div>
              <div>
                <div className="text-2xl font-bold">50K+</div>
                <div className="text-sm opacity-80">Products</div>
              </div>
              <div>
                <div className="text-2xl font-bold">100K+</div>
                <div className="text-sm opacity-80">Happy Customers</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Artisan Marketplace
            </h3>
            <p className="text-gray-400 mb-4">
              Connecting artisans with art lovers worldwide, one handcrafted piece at a time.
            </p>
            <div className="flex gap-4">
              {["facebook", "instagram", "twitter", "pinterest"].map((social) => (
                <motion.div
                  key={social}
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center cursor-pointer"
                >
                  <div className="w-5 h-5 bg-white rounded-full"></div>
                </motion.div>
              ))}
            </div>
          </div>

          {[
            { title: "Shop", items: ["All Products", "New Arrivals", "Best Sellers", "Sale"] },
            { title: "Artisans", items: ["Become a Seller", "Success Stories", "Resources", "Community"] },
            { title: "Support", items: ["Help Center", "Contact Us", "Shipping", "Returns"] },
          ].map((column, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.items.map((item) => (
                  <li key={item}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5, color: "#f97316" }}
                      className="text-gray-400 hover:text-orange-500 transition-colors"
                    >
                      {item}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Artisan Marketplace. All rights reserved. Made with ❤️ for creators.</p>
        </div>
      </div>
    </footer>
  )
}
