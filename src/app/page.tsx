import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Cloud,
  Database,
  Download,
  Github,
  GraduationCap,
  Icon,
  Layers,
  Layout,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Server,
  Shield,
} from "@/components/icons";
import { Logo } from "@/components/logo";
import { Navbar } from "@/components/navbar";
import { Reveal } from "@/components/reveal";
import {
  experience,
  facts,
  highlights,
  projects,
  services,
  site,
  skillBars,
  stack,
} from "@/lib/content";

const YEAR = 2026;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  image: `${site.url}/og-image.png`,
  jobTitle: "NestJS Backend & AWS Cloud Engineer",
  description:
    "Eugene Okaka is a NestJS backend and AWS cloud engineer in Kenya, building scalable APIs, PostgreSQL systems, and full-stack products with Next.js and TypeScript.",
  email: site.email,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },
  worksFor: {
    "@type": "Organization",
    name: "Graywall Design Ltd",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Kabarak University",
  },
  sameAs: [site.github, site.linkedin],
  knowsAbout: [
    "NestJS",
    "Node.js",
    "AWS",
    "Cloud Engineering",
    "Next.js",
    "React",
    "TypeScript",
    "PostgreSQL",
    "Drizzle ORM",
    "Prisma",
    "Docker",
    "Linux",
    "REST APIs",
  ],
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 overflow-x-clip">
        <Hero />
        <Highlights />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
    </>
  );
}

function SectionLabel({
  children,
  center = false,
}: {
  children: React.ReactNode;
  center?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-ink/45 ${
        center ? "justify-center" : ""
      }`}
    >
      <span className="h-px w-8 bg-sun" />
      {children}
    </div>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-cream"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute left-6 top-24 hidden select-none font-display text-[10vw] font-extrabold leading-none tracking-tighter text-ink/[0.035] lg:block"
      >
        Eugene
      </span>

      <div
        aria-hidden
        className="pointer-events-none absolute -left-56 top-48 hidden h-64 w-64 md:block"
      >
        <div className="blob-c h-full w-full bg-ink" />
        <div className="dot-grid-fine absolute bottom-4 right-0 h-16 w-16 text-sun" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-5 pb-24 pt-12 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-32 lg:pt-16">
        <div className="hero-enter relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white/70 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/55">
            <span className="h-2 w-2 rounded-full bg-sun ring-2 ring-sun/30" />
            {site.availability}
          </div>

          <h1 className="mt-6 font-display text-[2.7rem] font-extrabold leading-[1.04] tracking-tight text-ink sm:text-6xl lg:text-[4.1rem]">
            Hi! I&apos;m Eugene Okaka —
            <span className="mt-3 block text-sun">
              Full-Stack &amp; Cloud Engineer
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/60 sm:text-lg">
            {site.description}
          </p>

          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-ink shadow-sm ring-1 ring-line">
                <Mail className="h-4 w-4" />
              </span>
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/35">
                  Email
                </dt>
                <dd className="mt-0.5 text-sm font-medium text-ink/80">
                  {site.email}
                </dd>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-ink shadow-sm ring-1 ring-line">
                <MapPin className="h-4 w-4" />
              </span>
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/35">
                  Location
                </dt>
                <dd className="mt-0.5 text-sm font-medium text-ink/80">
                  {site.location}
                </dd>
              </div>
            </div>
          </dl>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={`mailto:${site.email}`}
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-ink px-6 text-sm font-semibold text-cream transition-colors hover:bg-ink/85"
            >
              Contact Me
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="/eugene-okaka-cv.pdf"
              download="Eugene-Okaka-CV.pdf"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-sun px-6 text-sm font-semibold text-ink transition-colors hover:bg-sun/85"
            >
              Download CV
              <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </div>
        </div>

        <div className="hero-enter hero-enter-delay relative z-10">
          <HeroCard />
        </div>
      </div>
    </section>
  );
}

function HeroCard() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[460px]">
      <div aria-hidden className="blob-a absolute inset-0 bg-sun" />
      <div
        aria-hidden
        className="dot-grid absolute -right-1 top-8 h-24 w-24 text-ink/25"
      />
      <div
        aria-hidden
        className="absolute -bottom-2 left-8 h-16 w-16 rounded-full border-[10px] border-ink/10"
      />

      <div className="absolute left-1/2 top-1/2 w-[86%] max-w-[350px] -translate-x-1/2 -translate-y-1/2 -rotate-2 rounded-[1.75rem] bg-ink p-5 text-cream shadow-[0_35px_80px_-30px_rgba(18,18,18,0.7)] sm:p-6">
        <div className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-sun font-display text-sm font-extrabold text-ink">
            EO
          </span>
          <div className="min-w-0">
            <p className="font-display text-sm font-semibold">Eugene Okaka</p>
            <p className="text-[11px] text-cream/55">{site.role}</p>
          </div>
          <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-sun/15 px-2.5 py-1 text-[10px] font-semibold text-sun">
            <span className="h-1.5 w-1.5 rounded-full bg-sun" />
            Open
          </span>
        </div>

        <div className="mt-5 overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.04] p-4 font-mono text-[10px] leading-[1.75] sm:text-[11px]">
          <div className="mb-3 flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#ff6b6b]" />
            <span className="h-2 w-2 rounded-full bg-sun" />
            <span className="h-2 w-2 rounded-full bg-[#6ee7a8]" />
          </div>
          <div className="space-y-0.5 whitespace-nowrap text-cream/70">
            <p>
              <span className="text-[#ff9eb5]">const</span>{" "}
              <span className="text-sun">engineer</span>{" "}
              <span className="text-cream/40">=</span>{" "}
              <span className="text-cream/40">{"{"}</span>
            </p>
            <p className="pl-4">
              <span className="text-[#8fd3ff]">role</span>
              <span className="text-cream/40">:</span>{" "}
              <span className="text-[#b8e986]">
                &quot;Full-Stack + Cloud&quot;
              </span>
              <span className="text-cream/40">,</span>
            </p>
            <p className="pl-4">
              <span className="text-[#8fd3ff]">stack</span>
              <span className="text-cream/40">:</span>{" "}
              <span className="text-cream/40">[</span>
              <span className="text-[#b8e986]">&quot;NestJS&quot;</span>
              <span className="text-cream/40">, </span>
              <span className="text-[#b8e986]">&quot;Next.js&quot;</span>
              <span className="text-cream/40">, </span>
              <span className="text-[#b8e986]">&quot;AWS&quot;</span>
              <span className="text-cream/40">]</span>
              <span className="text-cream/40">,</span>
            </p>
            <p className="pl-4">
              <span className="text-[#8fd3ff]">focus</span>
              <span className="text-cream/40">:</span>{" "}
              <span className="text-[#b8e986]">&quot;scalable systems&quot;</span>
              <span className="text-cream/40">,</span>
            </p>
            <p className="pl-4">
              <span className="text-[#8fd3ff]">status</span>
              <span className="text-cream/40">:</span>{" "}
              <span className="text-[#b8e986]">&quot;open to work&quot;</span>
              <span className="text-cream/40">,</span>
            </p>
            <p>
              <span className="text-cream/40">{"};"}</span>
            </p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {["NestJS", "Next.js", "PostgreSQL", "AWS"].map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] text-cream/60"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <span className="absolute left-0 top-[18%] z-10 hidden items-center gap-1.5 rounded-full bg-white px-3 py-2 text-[10px] font-semibold text-ink shadow-[0_10px_25px_-12px_rgba(18,18,18,0.45)] ring-1 ring-line sm:inline-flex">
        <Cloud className="h-3.5 w-3.5 text-ink/60" />
        AWS
      </span>
      <span className="absolute right-0 top-[10%] z-10 hidden items-center gap-1.5 rounded-full bg-ink px-3 py-2 text-[10px] font-semibold text-cream shadow-[0_10px_25px_-12px_rgba(18,18,18,0.6)] sm:inline-flex">
        <Layout className="h-3.5 w-3.5 text-sun" />
        Next.js
      </span>
      <span className="absolute bottom-[16%] left-0 z-10 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-2 text-[10px] font-semibold text-ink shadow-[0_10px_25px_-12px_rgba(18,18,18,0.45)] ring-1 ring-line">
        <Database className="h-3.5 w-3.5 text-ink/60" />
        PostgreSQL
      </span>
      <span className="absolute bottom-[6%] right-2 z-10 inline-flex items-center gap-1.5 rounded-full bg-sun px-3 py-2 text-[10px] font-semibold text-ink shadow-[0_10px_25px_-12px_rgba(18,18,18,0.45)] ring-1 ring-ink/10">
        <Server className="h-3.5 w-3.5 text-ink/70" />
        NestJS
      </span>
    </div>
  );
}

function Highlights() {
  return (
    <section className="relative z-10 -mt-10 bg-cream pb-4">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="hero-enter h-full"
              style={{ animationDelay: `${180 + index * 90}ms` }}
            >
              <div className="group flex h-full items-center gap-4 rounded-2xl border border-line bg-white p-5 shadow-[0_18px_45px_-30px_rgba(18,18,18,0.35)] transition-transform duration-300 hover:-translate-y-1">
                <span
                  className={`grid h-12 w-12 shrink-0 place-items-center rounded-full ${
                    index === 1 ? "bg-ink text-sun" : "bg-sun text-ink"
                  }`}
                >
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="font-display text-sm font-semibold text-ink">
                    {item.title}
                  </p>
                  <p className="mt-0.5 text-xs text-ink/55">{item.copy}</p>
                </div>
                <span className="ml-auto grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line text-ink/40 transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-cream">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section
      id="about"
      className="scroll-mt-28 bg-cream py-20 md:py-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <AboutVisual />
        </Reveal>

        <Reveal delay={120}>
          <SectionLabel>Who I am</SectionLabel>
          <h2 className="mt-4 max-w-xl font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
            Need a reliable engineer?{" "}
            <span className="text-sun">I can help you!</span>
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-ink/60 sm:text-base">
            I&apos;m Eugene Okaka, a software developer based in Kenya focused
            on building end-to-end software products, from initial architecture
            and development to deployment and production.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink/60 sm:text-base">
            I work across the application stack, with a particular interest in
            backend engineering and cloud infrastructure. My work involves
            designing APIs, building backend services, integrating databases,
            developing user-facing applications, and deploying systems using
            cloud technologies.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink/60 sm:text-base">
            My primary stack includes NestJS, Next.js, PostgreSQL, and AWS. I
            also have hands-on experience with IT infrastructure, networking,
            Linux administration, and systems troubleshooting, giving me a
            broader perspective on the environments in which software operates.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink/60 sm:text-base">
            I approach engineering with a focus on practical problem-solving,
            maintainable architecture, and building systems that are reliable
            beyond the development environment. I&apos;m particularly interested
            in backend systems, distributed workloads, cloud architecture, and
            the engineering decisions that make applications scalable and
            dependable.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-2xl border border-line bg-white/70 p-4"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/35">
                  {fact.label}
                </p>
                <p className="mt-1.5 text-sm font-medium leading-snug text-ink/80">
                  {fact.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/40">
              Find me
            </span>
            <div className="flex gap-2.5">
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="grid h-10 w-10 place-items-center rounded-full bg-ink text-cream transition-colors hover:bg-sun hover:text-ink"
              >
                <Github className="h-[18px] w-[18px]" />
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-full border border-line bg-white text-ink/60 transition-colors hover:border-ink hover:text-ink"
              >
                <Linkedin className="h-[18px] w-[18px]" />
              </a>
              <a
                href={`mailto:${site.email}`}
                aria-label="Email"
                className="grid h-10 w-10 place-items-center rounded-full border border-line bg-white text-ink/60 transition-colors hover:border-ink hover:text-ink"
              >
                <Mail className="h-[18px] w-[18px]" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function AboutVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[440px] px-2 pb-12 pt-6">
      <div aria-hidden className="blob-b absolute inset-x-0 bottom-0 top-16 bg-sun" />
      <div
        aria-hidden
        className="dot-grid absolute -right-2 top-16 h-20 w-20 text-ink/20"
      />

      <p
        aria-hidden
        className="absolute left-5 top-2 z-20 -rotate-6 font-hand text-6xl font-bold text-ink sm:text-7xl"
      >
        Hi There!
      </p>

      <div className="relative z-10 mx-auto mt-24 w-[88%] rounded-3xl bg-white p-5 shadow-[0_30px_70px_-35px_rgba(18,18,18,0.45)]">
        <div className="flex items-center justify-between">
          <p className="font-display text-sm font-semibold text-ink">
            How I build
          </p>
          <span className="rounded-full bg-mist px-2.5 py-1 text-[9px] font-semibold uppercase tracking-widest text-ink/45">
            Full-stack
          </span>
        </div>

        <div className="mt-5">
          {[
            { icon: Layout, label: "Next.js frontend", tag: "UI" },
            { icon: Server, label: "NestJS API", tag: "Logic" },
            { icon: Database, label: "PostgreSQL", tag: "Data" },
          ].map((row, index) => (
            <div key={row.label}>
              <div className="flex items-center gap-3 rounded-2xl bg-mist/70 px-3.5 py-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-white text-ink shadow-sm">
                  <row.icon className="h-4 w-4" />
                </span>
                <span className="text-xs font-semibold text-ink">
                  {row.label}
                </span>
                <span className="ml-auto text-[9px] font-semibold uppercase tracking-widest text-ink/35">
                  {row.tag}
                </span>
              </div>
              {index < 2 && <div className="ml-7 h-3 w-px bg-line" />}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-1 left-0 z-10 hidden items-center gap-2 rounded-2xl bg-ink px-4 py-3 text-cream shadow-xl sm:flex">
        <Cloud className="h-4 w-4 text-sun" />
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-widest text-cream/45">
            Deployed on
          </p>
          <p className="font-display text-xs font-semibold">AWS Cloud</p>
        </div>
      </div>

      <div className="absolute -right-1 top-28 z-10 hidden rotate-3 rounded-2xl border border-line bg-white px-4 py-3 shadow-lg sm:block">
        <p className="text-[9px] font-semibold uppercase tracking-widest text-ink/35">
          Currently
        </p>
        <p className="mt-1 font-display text-xs font-semibold text-ink">
          Diploma in IT
        </p>
        <p className="text-[10px] text-ink/50">Kabarak University</p>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-28 bg-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionLabel center>My toolbox</SectionLabel>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
            What my technical skills include
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink/55 sm:text-base">
            From designing REST APIs to deploying on AWS, here is the stack I
            use to turn ideas into working products.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <div className="space-y-3">
              {skillBars.map((skill, index) => (
                <div
                  key={skill.label}
                  className="flex items-center gap-4 rounded-2xl border border-line bg-cream px-4 py-4 sm:px-5"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-sun text-ink">
                    <Icon name={skill.icon} className="h-[18px] w-[18px]" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-display text-sm font-semibold text-ink">
                      {skill.label}
                    </p>
                    <p className="mt-0.5 text-xs leading-relaxed text-ink/45">
                      {skill.caption}
                    </p>
                  </div>
                  <span className="ml-auto hidden font-mono text-[10px] font-semibold tracking-widest text-ink/25 sm:block">
                    0{index + 1}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-9 rounded-2xl bg-ink p-5 text-cream">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-sun/15 text-sun">
                  <Shield className="h-4 w-4" />
                </span>
                <p className="font-display text-sm font-semibold">
                  Always learning
                </p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-cream/60">
                Currently deepening my AWS architecture and backend engineering
                skills, because good engineers never stop shipping and
                learning.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service, index) => (
              <Reveal
                key={service.title}
                delay={index * 80}
                className="h-full"
              >
                <div className="group h-full rounded-2xl border border-line bg-cream p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ink/20 hover:shadow-[0_24px_50px_-35px_rgba(18,18,18,0.45)]">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-sun text-ink transition-transform duration-300 group-hover:-rotate-6">
                    <Icon name={service.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-base font-bold text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/55">
                    {service.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-16">
          <div className="rounded-3xl border border-line bg-mist/70 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-sun">
                <Layers className="h-4 w-4" />
              </span>
              <p className="font-display text-sm font-semibold text-ink">
                Tech stack
              </p>
            </div>
            <div className="mt-6 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {stack.map((group) => (
                <div key={group.group}>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/35">
                    {group.group}
                  </p>
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-line bg-white px-3 py-1.5 text-xs font-medium text-ink/70"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionLabel>My work</SectionLabel>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              Featured projects
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-ink/55 sm:text-right">
            Real products I have designed, built, and shipped, from the database
            and APIs to the interface and cloud deployment.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 90} className="h-full">
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-[0_20px_50px_-40px_rgba(18,18,18,0.5)] transition-all duration-300 hover:-translate-y-1 hover:border-ink/15 hover:shadow-[0_30px_60px_-35px_rgba(18,18,18,0.45)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-mist">
                  <Image
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    fill
                    sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-cream/95 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-ink/60 backdrop-blur">
                    {project.tag}
                  </span>
                  <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-ink text-cream opacity-0 transition-opacity group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="font-display text-lg font-bold text-ink">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/55">
                    {project.copy}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-mist px-2.5 py-1 text-[10px] font-medium text-ink/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <span className="mt-auto inline-flex items-center gap-2 pt-5 text-xs font-semibold text-ink">
                    View live project
                    <ArrowUpRight className="h-3.5 w-3.5 text-ink/50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-28 bg-mist py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <SectionLabel>My journey</SectionLabel>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              Experience &amp; education
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink/60 sm:text-base">
              Hands-on software development and IT experience across a
              technology company and institutional environments, backed by an
              ongoing IT diploma.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <ol className="relative space-y-5 border-l border-line pl-7 sm:pl-9">
              {experience.map((item) => (
                <li key={item.org} className="relative">
                  <span
                    className={`absolute top-6 grid h-5 w-5 place-items-center rounded-full ring-4 ring-mist ${
                      item.icon === "education" ? "bg-sun" : "bg-ink"
                    } -left-[38px] sm:-left-[46px]`}
                  >
                    {item.icon === "education" ? (
                      <GraduationCap className="h-3 w-3 text-ink" />
                    ) : (
                      <Briefcase className="h-2.5 w-2.5 text-sun" />
                    )}
                  </span>
                  <div className="rounded-2xl border border-line bg-white p-5 shadow-[0_18px_45px_-35px_rgba(18,18,18,0.4)] sm:p-6">
                    <span className="inline-flex rounded-full bg-sun/20 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-ink/65">
                      {item.period}
                    </span>
                    <h3 className="mt-3 font-display text-base font-bold text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 text-xs font-semibold text-ink/45">
                      {item.org}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-ink/60">
                      {item.copy}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="scroll-mt-28 bg-cream pb-20 md:pb-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-ink px-6 py-14 text-cream sm:px-12 md:py-20">
            <div
              aria-hidden
              className="blob-a absolute -right-20 -top-24 h-72 w-72 bg-sun/15"
            />
            <div
              aria-hidden
              className="dot-grid absolute bottom-8 right-10 h-24 w-24 text-sun/30"
            />
            <div
              aria-hidden
              className="blob-c absolute -bottom-24 -left-16 h-64 w-64 bg-sun/10"
            />

            <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-cream/60">
                  <span className="h-1.5 w-1.5 rounded-full bg-sun" />
                  Available for opportunities
                </span>
                <h2 className="mt-6 max-w-xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                  Have a project in mind?{" "}
                  <span className="text-sun">Let&apos;s build it.</span>
                </h2>
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-cream/60 sm:text-base">
                  Available for software engineering opportunities and
                  freelance engagements. Open to collaborating on impactful
                  products and solving meaningful technical challenges.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={`mailto:${site.email}`}
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-sun px-6 text-sm font-semibold text-ink transition-colors hover:bg-sun/85"
                  >
                    <Mail className="h-4 w-4" />
                    {site.email}
                  </a>
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/15 px-6 text-sm font-semibold text-cream transition-colors hover:bg-white/5"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <p className="font-display text-sm font-semibold">
                  Quick details
                </p>
                <dl className="mt-4 space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-sun" />
                    <div>
                      <dt className="text-[10px] font-semibold uppercase tracking-widest text-cream/40">
                        Email
                      </dt>
                      <dd className="mt-0.5 break-all text-cream/75">
                        {site.email}
                      </dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-sun" />
                    <div>
                      <dt className="text-[10px] font-semibold uppercase tracking-widest text-cream/40">
                        Phone
                      </dt>
                      <dd className="mt-0.5 text-cream/75">
                        <a
                          href={`tel:${site.phone}`}
                          className="transition-colors hover:text-sun"
                        >
                          {site.phone}
                        </a>
                      </dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sun" />
                    <div>
                      <dt className="text-[10px] font-semibold uppercase tracking-widest text-cream/40">
                        Location
                      </dt>
                      <dd className="mt-0.5 text-cream/75">{site.location}</dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Github className="mt-0.5 h-4 w-4 shrink-0 text-sun" />
                    <div>
                      <dt className="text-[10px] font-semibold uppercase tracking-widest text-cream/40">
                        GitHub
                      </dt>
                      <dd className="mt-0.5 text-cream/75">@eugeneokaka</dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-sun" />
                    <div>
                      <dt className="text-[10px] font-semibold uppercase tracking-widest text-cream/40">
                        Education
                      </dt>
                      <dd className="mt-0.5 text-cream/75">
                        Diploma in IT — Kabarak University
                      </dd>
                    </div>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line bg-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-8 sm:px-8 md:flex-row">
        <Logo />
        <p className="text-xs text-ink/45">
          © {YEAR} Eugene Okaka. Built with Next.js &amp; Tailwind CSS.
        </p>
        <div className="flex items-center gap-2.5">
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid h-9 w-9 place-items-center rounded-full border border-line bg-white text-ink/55 transition-colors hover:border-ink hover:text-ink"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid h-9 w-9 place-items-center rounded-full border border-line bg-white text-ink/55 transition-colors hover:border-ink hover:text-ink"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${site.email}`}
            aria-label="Email"
            className="grid h-9 w-9 place-items-center rounded-full border border-line bg-white text-ink/55 transition-colors hover:border-ink hover:text-ink"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href={`tel:${site.phone}`}
            aria-label="Call"
            className="grid h-9 w-9 place-items-center rounded-full border border-line bg-white text-ink/55 transition-colors hover:border-ink hover:text-ink"
          >
            <Phone className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
