import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/salon-hero.jpg";
import colorImg from "@/assets/service-color.jpg";
import facialImg from "@/assets/service-facial.jpg";
import bridalImg from "@/assets/service-bridal.jpg";
import haircutImg from "@/assets/service-haircut.jpg";
import menHaircutImg from "@/assets/gallery-men-haircut.jpg";
import beardGroomingImg from "@/assets/gallery-beard-grooming.jpg";
import womenStylingImg from "@/assets/gallery-women-styling.jpg";
import menColorImg from "@/assets/gallery-men-color.jpg";
import { Phone, MapPin, Clock, MessageCircle, Scissors, Heart, Star, Instagram, ChevronRight, Calendar, Award, Users } from "lucide-react";
import { BookingForm } from "@/components/booking-form";

const INSTAGRAM_URL = "https://www.instagram.com/gravityunisex.salon";
const INSTAGRAM_HANDLE = "@gravityunisex.salon";
const SAJID_TEL = "+918800778800";
const SAJID_WA = "https://wa.me/918800778800";
const RASHID_TEL = "+917862020207";
const RASHID_WA = "https://wa.me/917862020207";
const ADDRESS_LINE = "488/3-A, Near R-Block, Gol Chakker, Opp. Jilmil Metro Station, Dilshad Garden, Delhi - 110095";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Best Salon in Dilshad Garden | Gravity Unisex Salon & Academy | East Delhi" },
      { name: "description", content: "Gravity Unisex Salon & Academy is a premium unisex salon in Dilshad Garden offering haircuts, hair spa, keratin treatment, smoothening, rebonding, facials, bridal makeup, hair color, grooming and beauty services. Serving East Delhi since 2013. Open 7 Days a Week." },
      { name: "keywords", content: "Best Salon in Dilshad Garden, Unisex Salon in Dilshad Garden, Hair Salon in Dilshad Garden, Beauty Salon in Dilshad Garden, Best Salon in East Delhi, Hair Spa in Dilshad Garden, Hair Color in Dilshad Garden, Keratin Treatment in Dilshad Garden, Smoothening in Dilshad Garden, Rebonding in Dilshad Garden, Bridal Makeup in Dilshad Garden, Facial Services in East Delhi, Salon Near Jilmil Metro Station, Salon Near Dilshad Garden Metro Station, Premium Salon in East Delhi" },
      { name: "geo.region", content: "IN-DL" },
      { name: "geo.placename", content: "Dilshad Garden, Delhi" },
      { property: "og:title", content: "Best Salon in Dilshad Garden | Gravity Unisex Salon & Academy" },
      { property: "og:description", content: "Premium unisex salon in Dilshad Garden, East Delhi. Haircuts, hair spa, keratin, smoothening, rebonding, hair color, facials, bridal makeup & grooming. Open 7 days." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://gravity-unisex-salon.example.com/" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Best Salon in Dilshad Garden | Gravity Unisex Salon & Academy" },
      { name: "twitter:description", content: "Premium unisex salon in Dilshad Garden, East Delhi. Hair, skin, bridal & grooming since 2013." },
    ],
    links: [{ rel: "canonical", href: "https://gravity-unisex-salon.example.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["HairSalon", "BeautySalon", "LocalBusiness"],
          "@id": "https://gravity-unisex-salon.example.com/#salon",
          name: "Gravity Unisex Salon & Academy",
          alternateName: "Gravity Salon Dilshad Garden",
          description: "Premium unisex salon in Dilshad Garden, East Delhi offering haircuts, hair spa, keratin, smoothening, rebonding, hair colour, facials, bridal makeup and grooming services since 2013.",
          url: "https://gravity-unisex-salon.example.com/",
          image: "https://gravity-unisex-salon.example.com/",
          telephone: ["+91-88007-78800", "+91-78620-20207"],
          address: {
            "@type": "PostalAddress",
            streetAddress: "488/3-A, Near R-Block, Gol Chakker, Opp. Jilmil Metro Station",
            addressLocality: "Dilshad Garden",
            addressRegion: "Delhi",
            postalCode: "110095",
            addressCountry: "IN",
          },
          areaServed: [
            { "@type": "Place", name: "Dilshad Garden" },
            { "@type": "Place", name: "Jilmil" },
            { "@type": "Place", name: "Shahdara" },
            { "@type": "Place", name: "Vivek Vihar" },
            { "@type": "Place", name: "Jhilmil Colony" },
            { "@type": "Place", name: "Mansarovar Park" },
            { "@type": "Place", name: "GTB Enclave" },
            { "@type": "Place", name: "Nand Nagri" },
            { "@type": "Place", name: "Seemapuri" },
            { "@type": "Place", name: "Anand Vihar" },
            { "@type": "Place", name: "East Delhi" },
          ],
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              name: "Men's Salon",
              dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
              opens: "10:00",
              closes: "22:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              name: "Women's Salon",
              dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
              opens: "10:00",
              closes: "20:00",
            },
          ],
          foundingDate: "2013",
          sameAs: [INSTAGRAM_URL],
          priceRange: "₹₹",
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Salon Services",
            itemListElement: [
              "Haircut", "Hair Spa", "Hair Colour", "Keratin Treatment",
              "Smoothening", "Rebonding", "Facial", "Bridal Makeup",
              "Beard Styling", "Manicure & Pedicure",
            ].map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s } })),
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "Which is the best salon in Dilshad Garden?", acceptedAnswer: { "@type": "Answer", text: "Gravity Unisex Salon & Academy is widely regarded as one of the best salons in Dilshad Garden, offering premium haircuts, hair colour, keratin, facials and bridal makeup for men and women since 2013." } },
            { "@type": "Question", name: "Do you offer hair spa services in East Delhi?", acceptedAnswer: { "@type": "Answer", text: "Yes. We offer professional hair spa treatments for men and women at our Dilshad Garden salon, serving clients across East Delhi including Shahdara, Vivek Vihar and Anand Vihar." } },
            { "@type": "Question", name: "Do you provide keratin treatment in Dilshad Garden?", acceptedAnswer: { "@type": "Answer", text: "Yes, we provide keratin treatment, smoothening and rebonding using premium products at our Dilshad Garden salon." } },
            { "@type": "Question", name: "Is the salon open on weekends?", acceptedAnswer: { "@type": "Answer", text: "Yes. Gravity Unisex Salon & Academy is open all 7 days a week. Men's Salon: 10:00 AM – 10:00 PM. Women's Salon: 10:00 AM – 8:00 PM." } },
            { "@type": "Question", name: "Do you offer bridal makeup services?", acceptedAnswer: { "@type": "Answer", text: "Yes, we offer bridal makeup, pre-bridal packages, hair styling and complete bridal beauty services in Dilshad Garden and East Delhi." } },
            { "@type": "Question", name: "What are your salon timings?", acceptedAnswer: { "@type": "Answer", text: "We are open 7 days a week. Men's Salon: 10:00 AM – 10:00 PM. Women's Salon: 10:00 AM – 8:00 PM." } },
            { "@type": "Question", name: "How can I book an appointment?", acceptedAnswer: { "@type": "Answer", text: "You can call or WhatsApp Sajid at 8800778800 or Rashid at 7862020207, or DM us on Instagram @gravityunisex.salon." } },
            { "@type": "Question", name: "Where is Gravity Unisex Salon located?", acceptedAnswer: { "@type": "Answer", text: "We are at 488/3-A, Near R-Block, Gol Chakker, Opp. Jilmil Metro Station, Dilshad Garden, Delhi - 110095 — minutes from Dilshad Garden and Jhilmil metro stations." } },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

const mensServices = [
  { title: "Hair Cut", price: "₹150" },
  { title: "Hair Cut + Styling", price: "₹200" },
  { title: "Beard Styling", price: "₹100" },
  { title: "Hair Colour", price: "₹500+" },
  { title: "Hair Spa", price: "₹600" },
  { title: "D-Tan", price: "₹500" },
  { title: "Facial", price: "₹1000+" },
  { title: "Clean Up", price: "₹500" },
  { title: "Keratin Treatment", price: "₹2000+" },
  { title: "Manicure & Pedicure", price: "₹400+" },
];

const womensServices = [
  { title: "Hair Cut", price: "₹300+" },
  { title: "Hair Styling", price: "₹500+" },
  { title: "Hair Colour", price: "₹1000+" },
  { title: "Keratin Treatment", price: "₹2500+" },
  { title: "Smoothening", price: "₹5000+" },
  { title: "Rebonding", price: "₹4000+" },
  { title: "Facial", price: "₹1000+" },
  { title: "Clean Up", price: "₹500+" },
  { title: "Waxing", price: "₹100+" },
  { title: "Threading", price: "₹50+" },
  { title: "Manicure & Pedicure", price: "₹400+" },
  { title: "Bridal Makeup", price: "₹5000+" },
];

const galleryImages = [
  { src: colorImg, alt: "Professional hair color service in Dilshad Garden, East Delhi" },
  { src: womenStylingImg, alt: "Premium hair styling and blow-dry service at Gravity Unisex Salon, Dilshad Garden" },
  { src: menHaircutImg, alt: "Men's haircut and fade styling by expert barber at Gravity Unisex Salon" },
  { src: facialImg, alt: "Premium facial services in Dilshad Garden at Gravity Salon" },
  { src: bridalImg, alt: "Bridal makeup service in East Delhi by Gravity Unisex Salon" },
  { src: menColorImg, alt: "Men's hair colour and dye service at Gravity Unisex Salon, Dilshad Garden" },
  { src: beardGroomingImg, alt: "Professional beard trim and grooming for men at Gravity Unisex Salon" },
  { src: heroImg, alt: "Gravity Unisex Salon & Academy storefront — illuminated signage in Dilshad Garden, Delhi" },
  { src: haircutImg, alt: "Inside Gravity Unisex Salon — premium styling stations and chairs in Dilshad Garden" },
  { src: colorImg, alt: "Gravity Unisex Salon & Academy brand wall with chandelier and product shelves" },
];

const faqs = [
  { q: "Which is the best salon in Dilshad Garden?", a: "Gravity Unisex Salon & Academy is widely regarded as one of the best salons in Dilshad Garden, offering premium haircuts, hair colour, keratin treatment, facials and bridal makeup for men and women since 2013." },
  { q: "Do you offer hair spa services in East Delhi?", a: "Yes — we offer professional hair spa treatments for men and women at our Dilshad Garden salon, serving clients across East Delhi including Shahdara, Vivek Vihar, Anand Vihar and Mansarovar Park." },
  { q: "Do you provide keratin treatment, smoothening & rebonding in Dilshad Garden?", a: "Yes. We provide keratin treatment, smoothening and rebonding using premium professional products at our Dilshad Garden salon." },
  { q: "Is the salon open on weekends?", a: "Yes. Gravity Unisex Salon & Academy is open all 7 days a week. Men's Salon: 10:00 AM – 10:00 PM · Women's Salon: 10:00 AM – 8:00 PM." },
  { q: "Do you offer bridal makeup services?", a: "Yes — bridal makeup, pre-bridal packages, hair styling and complete bridal beauty services are available for clients in Dilshad Garden and across East Delhi." },
  { q: "What are your salon timings?", a: "We are open every day of the week. Men's Salon: 10:00 AM – 10:00 PM · Women's Salon: 10:00 AM – 8:00 PM." },
  { q: "How can I book an appointment?", a: "Call or WhatsApp Sajid at 8800778800 or Rashid at 7862020207, or DM us on Instagram @gravityunisex.salon." },
];

const reviews = [
  {
    name: "Shweta Kohli",
    when: "4 months ago",
    text: "I did my first haircut here — it was the first haircut of my life and it'll be memorable. The experience was lit. The stylist crushed it, super talented. Salon vibe was calm and the staff greeted me sweetly.",
  },
  {
    name: "Himanshu Saxena",
    when: "Local Guide · 121 reviews",
    text: "One of the best salons in Dilshad Garden. Prices are a bit on the higher side but for the quality of service they offer, it's absolutely worth it.",
  },
  {
    name: "Saumya Chopra",
    when: "9 months ago",
    text: "I've been going to Gravity Salon for the past 3 years. The service and experience is incredible — especially Deepa didi. I've been her client since the beginning, she's really good at her job.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Booking />
      <Gallery />
      <Reviews />
      <FAQ />
      <Visit />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/40">
      <div className="max-w-7xl mx-auto px-5 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="text-xl sm:text-2xl font-display font-semibold tracking-tight">
            <span className="text-gold">GRAVITY UNISEX SALON</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition">About</a>
          <a href="#services" className="hover:text-foreground transition">Services</a>
          <a href="#book" className="hover:text-foreground transition">Book</a>
          <a href="#gallery" className="hover:text-foreground transition">Gallery</a>
          <a href="#reviews" className="hover:text-foreground transition">Reviews</a>
          <a href="#faq" className="hover:text-foreground transition">FAQ</a>
          <a href="#visit" className="hover:text-foreground transition">Visit</a>
        </nav>
        <a
          href="#book"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-gold text-primary-foreground px-4 py-2 text-sm font-medium shadow-gold hover:opacity-90 hover:scale-[1.03] transition-all duration-300"
        >
          <Calendar className="size-4" /> Book
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-end overflow-hidden">
      <img
        src={heroImg}
        alt="Inside Gravity Unisex Salon & Academy — Best Salon in Dilshad Garden, Delhi"
        width={1920}
        height={1080}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 pb-20 pt-32 w-full">
        <div className="max-w-2xl animate-fade-up">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-primary mb-6">
            <span className="h-px w-10 bg-primary" />
            Best Salon in Dilshad Garden · Est. 2013
          </div>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] font-medium">
            Gravity<br />Unisex Salon<br /><span className="text-gold italic">&amp; Academy.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-lg">
            The Best Salon in Dilshad Garden — 13+ years crafting premium haircuts, colour, keratin, facials and bridal looks for men and women. Serving clients since 2013.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={SAJID_WA}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-gold text-primary-foreground px-6 py-3 font-medium shadow-gold hover:scale-[1.03] transition-all duration-300"
            >
              <MessageCircle className="size-4" /> Book Appointment
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border/80 px-6 py-3 font-medium hover:bg-card hover:border-primary transition-all duration-300"
            >
              <Instagram className="size-4" /> {INSTAGRAM_HANDLE}
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Award className="size-4 text-primary" /> 13+ Years Experience
            </div>
            <span className="h-4 w-px bg-border" />
            <div className="flex items-center gap-2">
              <Clock className="size-4 text-primary" /> Open 7 Days · Men 10–10 · Women 10–8
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Haircuts", "Hair Colour", "Keratin", "Smoothening", "Rebonding", "Facials", "Bridal Makeup", "Beard Styling", "Hair Spa", "Mani-Pedi"];
  return (
    <div className="border-y border-border/40 bg-card/30 overflow-hidden">
      <div className="flex gap-12 py-5 whitespace-nowrap animate-[scroll_12s_linear_infinite]">
        {[...items, ...items, ...items].map((s, i) => (
          <span key={i} className="text-sm uppercase tracking-[0.3em] text-muted-foreground flex items-center gap-12">
            {s} <span className="text-primary">✦</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes scroll { from { transform: translateX(0) } to { transform: translateX(-33.33%) } }`}</style>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-24 md:py-32 max-w-7xl mx-auto px-5 md:px-10">
      <div className="grid md:grid-cols-12 gap-12 items-end">
        <div className="md:col-span-5">
          <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">— About</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            The Best Salon in Dilshad Garden, <span className="text-gold italic">since 2013.</span>
          </h2>
        </div>
        <div className="md:col-span-6 md:col-start-7 text-muted-foreground space-y-4 text-lg leading-relaxed">
          <p>
            Tucked opposite Jilmil Metro Station, Gravity Unisex Salon &amp; Academy is a premium unisex salon in Dilshad Garden led by stylists who treat every appointment like editorial work — listening first, then crafting cuts, colour and care that suit your face, your hair and your life.
          </p>
          <p>
            From a first haircut to a full bridal trousseau — haircuts, hair spa, keratin, smoothening, rebonding, hair colour, facials and bridal makeup — we bring the same warmth, hygiene and obsessive finish to every chair. Trusted across Dilshad Garden, Jilmil, Shahdara, Vivek Vihar, Anand Vihar and East Delhi since 2013.
          </p>
          <div className="grid grid-cols-3 gap-6 pt-8">
            <Stat n="13+" label="Years Experience" />
            <Stat n="2013" label="Established" />
            <Stat n="7 Days" label="Open a Week" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl md:text-4xl text-gold">{n}</div>
      <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-card/40 border-y border-border/40">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">— Services</p>
          <h2 className="font-display text-4xl md:text-5xl">Premium services for <span className="text-gold italic">him &amp; her.</span></h2>
          <p className="mt-5 text-muted-foreground">A curated menu of starting prices. Call for detailed pricing &amp; consultations.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          <ServiceCard title="Men's Services" subtitle="Grooming, cuts & care" items={mensServices} icon={Scissors} />
          <ServiceCard title="Women's Services" subtitle="Hair, skin & bridal" items={womensServices} icon={Heart} />
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <a href={SAJID_TEL ? `tel:${SAJID_TEL}` : "#visit"} className="inline-flex items-center gap-2 rounded-full bg-gradient-gold text-primary-foreground px-6 py-3 font-medium shadow-gold hover:scale-[1.03] transition-all duration-300">
            <Phone className="size-4" /> Call For Detailed Pricing
          </a>
          <a href={SAJID_WA} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-medium hover:bg-background hover:border-primary transition-all duration-300">
            <Calendar className="size-4" /> Book Appointment
          </a>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, subtitle, items, icon: Icon }: { title: string; subtitle: string; items: { title: string; price: string }[]; icon: typeof Phone }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-border/60 bg-background p-8 md:p-10 transition-all duration-500 hover:border-primary/40 hover:shadow-elegant">
      <div className="flex items-start justify-between gap-6 pb-6 border-b border-border/60">
        <div>
          <h3 className="font-display text-3xl md:text-4xl">{title}</h3>
          <p className="text-sm text-muted-foreground mt-2">{subtitle}</p>
        </div>
        <div className="size-12 rounded-full bg-primary/15 text-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
          <Icon className="size-5" />
        </div>
      </div>
      <ul className="mt-6 divide-y divide-border/40">
        {items.map((it) => (
          <li key={it.title} className="flex items-center justify-between py-3 text-sm md:text-base">
            <span className="text-foreground/90">{it.title}</span>
            <span className="font-display text-gold text-lg whitespace-nowrap">{it.price}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 max-w-7xl mx-auto px-5 md:px-10">
      <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">— Gallery</p>
          <h2 className="font-display text-4xl md:text-5xl">Real work. <span className="text-gold italic">Real clients.</span></h2>
        </div>
        <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-gold text-primary-foreground px-5 py-2.5 text-sm font-medium shadow-gold hover:scale-[1.03] transition-all duration-300">
          <Instagram className="size-4" /> Follow {INSTAGRAM_HANDLE}
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {galleryImages.map((img, i) => (
          <div key={i} className={`group relative overflow-hidden rounded-2xl border border-border/60 ${i === 0 ? "md:row-span-2 aspect-[3/4] md:aspect-auto" : "aspect-square"}`}>
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="size-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="py-24 md:py-32 bg-card/40 border-y border-border/40">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">— Loved by Delhi</p>
        <h2 className="font-display text-4xl md:text-5xl">Stories from our chair.</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <figure key={r.name} className="rounded-2xl border border-border/60 bg-background p-8 flex flex-col transition-all duration-500 hover:border-primary/40 hover:shadow-elegant hover:-translate-y-1">
            <div className="flex gap-1 mb-5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-primary text-primary" />
              ))}
            </div>
            <blockquote className="text-foreground/90 leading-relaxed flex-1">
              "{r.text}"
            </blockquote>
            <figcaption className="mt-6 pt-6 border-t border-border/60">
              <div className="font-medium">{r.name}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{r.when}</div>
            </figcaption>
          </figure>
        ))}
      </div>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section id="visit" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-10 grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">— Visit Us</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight mb-8">
            Walk in, or<br /><span className="text-gold italic">book ahead.</span>
          </h2>

          <ul className="space-y-6 text-base">
            <Info icon={MapPin} title="Address">
              488/3-A, Near R-Block, Gol Chakker,<br />Opp. Jilmil Metro Station,<br />Dilshad Garden, Delhi - 110095
            </Info>
            <Info icon={Phone} title="Sajid">
              <a href={`tel:${SAJID_TEL}`} className="hover:text-primary">+91 88007 78800</a>
            </Info>
            <Info icon={Phone} title="Rashid">
              <a href={`tel:${RASHID_TEL}`} className="hover:text-primary">+91 78620 20207</a>
            </Info>
            <Info icon={Clock} title="Hours">
              <div className="space-y-2">
                <div>
                  <div className="font-medium text-foreground">Men's Salon</div>
                  <div>10:00 AM – 10:00 PM · Open 7 Days</div>
                </div>
                <div>
                  <div className="font-medium text-foreground">Women's Salon</div>
                  <div>10:00 AM – 8:00 PM · Open 7 Days</div>
                </div>
              </div>
            </Info>
            <Info icon={Instagram} title="Instagram">
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="hover:text-primary">{INSTAGRAM_HANDLE}</a>
            </Info>
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={SAJID_WA}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-gold text-primary-foreground px-6 py-3 font-medium shadow-gold hover:scale-[1.03] transition-all duration-300"
            >
              <MessageCircle className="size-4" /> WhatsApp Sajid
            </a>
            <a
              href={RASHID_WA}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-medium hover:bg-card hover:border-primary transition-all duration-300"
            >
              <MessageCircle className="size-4" /> WhatsApp Rashid
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Gravity+Unisex+Salon+Dilshad+Garden+Delhi"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-medium hover:bg-card hover:border-primary transition-all duration-300"
            >
              <MapPin className="size-4" /> Directions
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-medium hover:bg-card hover:border-primary transition-all duration-300"
            >
              <Instagram className="size-4" /> Instagram
            </a>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden border border-border/60 min-h-[400px] shadow-elegant">
          <iframe
            title="Gravity Unisex Salon & Academy on map"
            src="https://www.google.com/maps?q=Gravity+Unisex+Salon+Dilshad+Garden+Delhi&output=embed"
            className="size-full min-h-[400px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

function Info({ icon: Icon, title, children }: { icon: typeof Phone; title: string; children: React.ReactNode }) {
  return (
    <li className="flex gap-4">
      <div className="size-10 rounded-full bg-primary/15 text-primary flex items-center justify-center shrink-0">
        <Icon className="size-5" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{title}</div>
        <div className="text-foreground/90 leading-relaxed">{children}</div>
      </div>
    </li>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/40 py-12 bg-card/30">
      <div className="max-w-7xl mx-auto px-5 md:px-10 grid md:grid-cols-3 gap-8 text-sm text-muted-foreground">
        <div>
          <div className="font-display text-xl text-foreground"><span className="text-gold">Gravity</span> Unisex Salon &amp; Academy</div>
          <p className="mt-3 leading-relaxed">Best Salon in Dilshad Garden · Established 2013 · 13+ Years of Premium Hair &amp; Beauty.</p>
        </div>
        <div>
          <div className="uppercase tracking-widest text-xs text-foreground mb-3">Contact</div>
          <p>{ADDRESS_LINE}</p>
          <p className="mt-2">Sajid · <a href={`tel:${SAJID_TEL}`} className="hover:text-primary">8800778800</a></p>
          <p>Rashid · <a href={`tel:${RASHID_TEL}`} className="hover:text-primary">7862020207</a></p>
          <p className="mt-2">Men's Salon · 10:00 AM – 10:00 PM · 7 Days</p>
          <p>Women's Salon · 10:00 AM – 8:00 PM · 7 Days</p>
        </div>
        <div>
          <div className="uppercase tracking-widest text-xs text-foreground mb-3">Follow</div>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-gold text-primary-foreground px-4 py-2 font-medium shadow-gold hover:scale-[1.03] transition-all duration-300">
            <Instagram className="size-4" /> {INSTAGRAM_HANDLE}
          </a>
          <p className="mt-6 text-xs">© {new Date().getFullYear()} Gravity Unisex Salon &amp; Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function Booking() {
  return (
    <section id="book" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-5 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">— Book Your Appointment</p>
          <h2 className="font-display text-4xl md:text-5xl">Instant booking — <span className="text-gold italic">via WhatsApp.</span></h2>
          <p className="mt-4 text-muted-foreground">
            Pick a service, stylist and time. We&apos;ll confirm your slot on WhatsApp within minutes.
          </p>
        </div>
        <BookingForm />
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32 max-w-5xl mx-auto px-5 md:px-10">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">— FAQ</p>
        <h2 className="font-display text-4xl md:text-5xl">Frequently asked <span className="text-gold italic">questions.</span></h2>
        <p className="mt-4 text-muted-foreground">Everything you need to know about our salon in Dilshad Garden, East Delhi.</p>
      </div>
      <div className="divide-y divide-border/60 rounded-2xl border border-border/60 bg-card/30">
        {faqs.map((f) => (
          <details key={f.q} className="group p-6 md:p-7">
            <summary className="flex items-center justify-between gap-6 cursor-pointer list-none">
              <h3 className="font-display text-lg md:text-xl text-foreground">{f.q}</h3>
              <ChevronRight className="size-5 text-primary shrink-0 transition-transform duration-300 group-open:rotate-90" />
            </summary>
            <p className="mt-4 text-muted-foreground leading-relaxed">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
