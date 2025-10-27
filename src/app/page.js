"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import SocialLinks from "../components/SocialLinks";

// --- ICONS & LOGOS (Modern & Clean Style) ---
const Icon = ({ path, className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d={path} />
  </svg>
);

const MonitorIcon = () => (
  <Icon
    path="M20 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2z M8 21h8 M12 17v4"
    className="w-8 h-8"
  />
);
const SmartphoneIcon = () => (
  <Icon
    path="M5 2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z M12 18h.01"
    className="w-8 h-8"
  />
);
const BotIcon = () => (
  <Icon
    path="M21 15a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2zM9 8V6a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3v2m-6 0h6"
    className="w-8 h-8"
  />
);
const MenuIcon = () => <Icon path="M3 12h18M3 6h18M3 18h18" />;
const XIcon = () => <Icon path="M18 6L6 18M6 6l12 12" />;
const WhatsAppIcon = () => (
  <Icon
    path="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
    className="w-7 h-7"
  />
);
const CheckIcon = () => (
  <Icon
    path="M20 6L9 17l-5-5"
    className="w-5 h-5 inline-block mr-2 text-emerald-500"
  />
);
const ArrowUpIcon = () => <Icon path="M12 19V5M5 12l7-7 7 7" />;
const StarIcon = ({ filled = true }) => (
  <Icon
    path="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
    className={`w-5 h-5 ${
      filled ? "text-yellow-400 fill-current" : "text-gray-300"
    }`}
  />
);
const ArrowRightIcon = () => <Icon path="M5 12h14M12 5l7 7-7 7" />;
const DiscoverIcon = () => (
  <Icon
    path="M11 17.25a6.25 6.25 0 110-12.5 6.25 6.25 0 010 12.5zM21 21l-4.35-4.35"
    className="w-8 h-8"
  />
);
const DesignIcon = () => (
  <Icon
    path="M12 20h9M3 17.5a2.5 2.5 0 015 0 2.5 2.5 0 01-5 0zM3 7.5a2.5 2.5 0 015 0 2.5 2.5 0 01-5 0zM3 12.5h18"
    className="w-8 h-8"
  />
);
const DevelopIcon = () => (
  <Icon path="M16 18l6-6-6-6M8 6l-6 6 6 6" className="w-8 h-8" />
);
const DeployIcon = () => (
  <Icon
    path="M2 16.1A5 5 0 015.9 20H18a5 5 0 015-5v-2.1a5 5 0 01-5-5H5.9A5 5 0 012 10.1z"
    className="w-8 h-8"
  />
);
const QuoteIcon = () => (
  <Icon
    path="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H4c-1.25 0-2 .75-2 2v6c0 5.25 4 8 8 8"
    className="w-12 h-12 text-accent/10 absolute -top-4 -left-4"
  />
);
const TwitterIcon = () => (
  <Icon path="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
);
const LinkedInIcon = () => (
  <Icon path="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
);
const InstagramIcon = () => (
  <Icon path="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M15 21h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-4M12 2v20" />
);
const RocketIcon = () => (
  <Icon path="M2 16.1A5 5 0 015.9 20H18a5 5 0 015-5v-2.1a5 5 0 01-5-5H5.9A5 5 0 012 10.1z" />
);
const BrainCircuitIcon = () => (
  <Icon path="M12 2a9 9 0 00-9 9h18a9 9 0 00-9-9zM2.1 12a9 9 0 009 9 9 9 0 009-9" />
);
const GamepadIcon = () => (
  <Icon path="M6 12h4m2 0h4m-6-6v4m0 4v4" className="w-8 h-8" />
);
const SupportIcon = () => (
  <Icon path="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" className="w-8 h-8" />
);
const StarBadgeIcon = () => (
  <Icon path="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" className="w-8 h-8" />
);
const WalletIcon = () => (
  <Icon path="M20 12V8H4v4m16 0v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4m16 0h-2M4 12H2" />
);
const UsersIcon = () => (
  <Icon path="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2m8-10a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87" />
);

// --- Helper Hooks & Components ---
const useOnScreen = (options) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);
    const current = ref.current;
    if (current) {
      observer.observe(current);
    }
    return () => {
      if (current) {
        observer.disconnect();
      }
    };
  }, [ref, options]);
  return [ref, isVisible];
};

const AnimatedSection = ({ children, className, delay = 0 }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1, triggerOnce: true });
  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// --- Page Sections as Scalable Components ---

const HeroSection = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 10000);
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: Math.random() * 0.4 - 0.2,
          vy: Math.random() * 0.4 - 0.2,
          size: Math.random() * 2 + 1,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${1 - dist / 100})`;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("resize", () => {
      resizeCanvas();
      createParticles();
    });

    resizeCanvas();
    createParticles();
    animate();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <header className="bg-[#1E1B4B] text-white min-h-screen flex flex-col justify-center items-center text-center p-8 relative overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0"
      ></canvas>
      <div className="z-10 max-w-4xl mx-auto">
        <AnimatedSection>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold mb-4 tracking-tighter">
            We build the <span className="text-purple-400">Digital</span> <span className="text-blue-400">Experience</span> That Drives Business Growth
          </h1>
          <p
            className="text-lg md:text-xl text-indigo-200 max-w-2xl mx-auto mb-10"
            style={{ lineHeight: 1.6 }}
          >
            Websites That Works. App that Track, AI that Answers
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/portfolio"
              className="bg-[#008080] text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-[#006666] transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              style={{ height: "56px" }}
            >
              View Portfolio
            </Link>
            <a
              href="https://wa.me/918652601566"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              style={{ height: "56px" }}
            >
              <WhatsAppIcon />
              <span className="ml-2">Connect with WhatsApp</span>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </header>
  );
};




const ServicesSection = () => {
  const services = [
    {
      icon: <MonitorIcon />,
      title: "Web Development",
      desc: "Launch a fast, professional and responsive website in days, not weeks. Complete with admin panels, contact forms and Google Maps integration.",
    },
    {
      icon: <SmartphoneIcon />,
      title: "Mobile App Development",
      desc: "Powerful Android & iOS apps with features like live location tracking for delivery, bookings, or field staff and push notifications.",
    },
    {
      icon: <BotIcon />,
      title: "AI Solutions",
      desc: "Automate customer service and data tasks with intelligent WhatsApp bots, data analysis, and automation in Hindi or English.",
    },
    {
      icon: <GamepadIcon />,
      title: "Game Development",
      desc: "Turn your ideas into playable reality with custom 2D & 3D game development for mobile and PC, built with Unity to captivate your audience.",
    },
    {
      icon: <SupportIcon />,
      title: "Support & Maintenance",
      desc: "Your digital safety net. We provide bug fixing, performance optimization, software updates and ongoing support to keep your business running smoothly.",
    },
    {
      icon: <StarBadgeIcon />,
      title: "Loyalty & Engagement Programs",
      desc: "Turn users into superfans. We build point systems, challenges, and rewards to boost customer retention.",
    },
  ];

  return (
    <section id="services" className="py-28 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center">
          <h2 className="font-display text-4xl font-extrabold text-gray-900 mb-4">
            What We Do
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto text-gray-700"
            style={{ lineHeight: 1.6 }}
          >
            Digital tools crafted for growth, engagement, and efficiency.
          </p>
        </AnimatedSection>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="bg-white p-8 rounded-xl border border-gray-200 transition-all duration-300 relative group overflow-hidden hover:shadow-2xl hover:border-accent hover:scale-105 hover:-translate-y-2">
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-accent/5 rounded-full transition-all duration-700 group-hover:scale-[10]"></div>
                <div className="relative z-10">
                  <div className="text-accent-dark mb-4">{service.icon}</div>
                  <h3 className="font-display text-2xl font-semibold mb-4 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-700" style={{ lineHeight: 1.6 }}>
                    {service.desc}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: <RocketIcon />,
      title: "Agile & Fast",
      text: "As students, we're nimble and deliver high-quality results in days, not months.",
    },
    {
      icon: <BrainCircuitIcon />,
      title: "Modern Tech",
      text: "We use the latest technologies like Next.js, AI, and modern design principles.",
    },
    {
      icon: <WalletIcon />,
      title: "Cost-Effective",
      text: "Get professional results at a fraction of the cost of a large agency.",
    },
    {
      icon: <UsersIcon />,
      title: "Direct Collaboration",
      text: "Work directly with the developers and designers building your project.",
    },
  ];

  return (
    <section id="why-choose-us" className="py-28 px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center">
          <h2 className="font-display text-4xl font-extrabold text-gray-900 mb-4">
            Why Choose Us?
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto text-gray-700"
            style={{ lineHeight: 1.6 }}
          >
            We combine passion, modern technology, and direct collaboration to
            deliver exceptional value.
          </p>
        </AnimatedSection>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="bg-white p-8 rounded-lg shadow-md text-center h-full">
                <div className="w-16 h-16 bg-accent/10 text-accent-dark rounded-full mx-auto flex items-center justify-center mb-4">
                  {reason.icon}
                </div>
                <h3 className="font-display text-xl font-semibold mb-2 text-gray-900">
                  {reason.title}
                </h3>
                <p className="text-gray-700">{reason.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const steps = [
    {
      num: "01",
      title: "Discover",
      text: "We start by understanding your vision, goals, and target audience.",
      icon: <DiscoverIcon />,
    },
    {
      num: "02",
      title: "Design",
      text: "We create intuitive UI/UX designs and prototypes for your approval.",
      icon: <DesignIcon />,
    },
    {
      num: "03",
      title: "Develop",
      text: "Our team writes clean, efficient code to bring the designs to life.",
      icon: <DevelopIcon />,
    },
    {
      num: "04",
      title: "Test",
      text: "We thoroughly test your project to ensure it works flawlessly across all devices.",
      icon: <CheckIcon />,
    },
    {
      num: "05",
      title: "Deploy",
      text: "We launch your project and provide support to ensure a smooth takeoff.",
      icon: <DeployIcon />,
    },
  ];
  return (
    <section id="process" className="py-28 px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center">
          <h2 className="font-display text-4xl font-extrabold text-gray-900 mb-4">
            Our 5-Step Process
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto text-gray-700"
            style={{ lineHeight: 1.6 }}
          >
            We follow a clear and agile process to ensure your project is a
            success from start to finish.
          </p>
        </AnimatedSection>
        <div className="mt-20 relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-accent/30 h-full hidden lg:block"></div>
          
          <div className="space-y-16">
            {steps.map((step, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:gap-0 gap-6`}>
                  {/* Content */}
                  <div className={`lg:w-5/12 w-full ${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'} text-center`}>
                    <h3 className="font-display text-2xl font-bold mb-3 text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 text-base" style={{ lineHeight: 1.6 }}>
                      {step.text}
                    </p>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="relative z-10 flex items-center justify-center lg:w-2/12 w-full">
                    <div className="w-20 h-20 bg-white border-4 border-accent rounded-full flex items-center justify-center text-accent-dark shadow-xl">
                      {step.icon}
                    </div>
                  </div>
                  
                  {/* Step number */}
                  <div className={`lg:w-5/12 w-full ${index % 2 === 0 ? 'lg:text-left lg:pl-12' : 'lg:text-right lg:pr-12'} text-center`}>
                    <div className="text-7xl font-bold text-accent/30 lg:block hidden">
                      {step.num}
                    </div>
                    <div className="text-4xl font-bold text-accent/50 lg:hidden block">
                      {step.num}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};



const ContactSection = () => {
  const [formState, setFormState] = useState({ status: "idle", message: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormState({ status: "loading", message: "" });

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setFormState({ status: "success", message: result.message });
        event.target.reset();
      } else {
        setFormState({
          status: "error",
          message: result.message || "Something went wrong.",
        });
      }
    } catch (error) {
      setFormState({ status: "error", message: "Something went wrong." });
    }
  };

  return (
    <section id="contact" className="py-28 px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection className="text-center">
          <h2 className="font-display text-4xl font-extrabold text-gray-900 mb-4">
            Let&apos;s Build Something Great
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto text-gray-700"
            style={{ lineHeight: 1.6 }}
          >
            Have a project in mind? Fill out the form below and we will get back
            to you shortly.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <form onSubmit={handleSubmit} className="mt-12 max-w-xl mx-auto">
            <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    required
                    className="py-3 px-4 block w-full shadow-sm focus:ring-accent focus:border-accent border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="py-3 px-4 block w-full shadow-sm focus:ring-accent focus:border-accent border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    required
                    className="py-3 px-4 block w-full shadow-sm focus:ring-accent focus:border-accent border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="py-3 px-4 block w-full shadow-sm focus:ring-accent focus:border-accent border-gray-300 rounded-md"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="mt-8 sm:col-span-2">
              <button
                type="submit"
                disabled={formState.status === "loading"}
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-accent-dark hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent disabled:opacity-50"
              >
                {formState.status === "loading" ? "Sending..." : "Send Message"}
              </button>
            </div>
            {formState.status === "success" && (
              <p className="mt-4 text-center text-green-600">
                {formState.message}
              </p>
            )}
            {formState.status === "error" && (
              <p className="mt-4 text-center text-red-600">
                {formState.message}
              </p>
            )}
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
};

const Footer = ({ navLinks }) => {
  const socialLinks = [
    { platform: "twitter", url: "https://twitter.com/innovoxsoftware" },
    { platform: "facebook", url: "https://facebook.com/innovoxsoftware" },
    { platform: "instagram", url: "https://instagram.com/innovoxsoftware" },
    { platform: "linkedin", url: "https://linkedin.com/company/innovoxsoftware" },
    { platform: "youtube", url: "https://youtube.com/@innovoxsoftware" },
    { platform: "github", url: "https://github.com/innovoxsoftware" },
  ];

  return (
    <footer className="bg-[#1E1B4B] text-white pt-20 pb-12 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
          <div>
            <h3 className="font-display text-xl font-bold mb-4">INNOVOX</h3>
            <p className="text-gray-400 pr-4">
              We build digital experiences that drive business growth.
            </p>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 tracking-wide">
              Contact Us
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href="mailto:sahilhode67@gmail.com"
                  className="hover:text-white"
                >
                  sahilhode67@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+919876543210" className="hover:text-white">
                  +91 8652601566
                </a>
              </li>
              <li>Thane, Maharashtra, India</li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 tracking-wide">
              Follow Us
            </h4>
            <SocialLinks links={socialLinks} />
          </div>
        </div>
      <div className="mt-16 border-t border-gray-700 pt-8">
                  <h4 className="font-display text-lg font-semibold mb-4 tracking-wide text-center">
                    Building the Future, Together
                  </h4>
                  <p className="text-gray-400 text-center max-w-4xl mx-auto">
                    We seek partners who are as dedicated to shaping the future as we are.
                    Our ideal collaborators are forward-thinkers—from early-stage startups
                    with groundbreaking ideas to established companies ready for a digital
                    transformation. If you&apos;re driven by a passion for creating meaningful
                    technology and making a lasting impact, we believe our combined
                    strengths can lead to extraordinary outcomes. Let&apos;s build what&apos;s next.{" "}
                  </p>      </div>
      <div className="mt-16 border-t border-gray-700 pt-8 text-center">
        <p className="text-gray-400">
          Copyright © 2025 INNOVOX Software Solutions. All rights reserved.
        </p>
      </div>
      </div>
    </footer>
  );
};

// --- Main App Component ---
export default function Page() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#why-choose-us", label: "Why Us" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "#process", label: "Process" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="bg-[#FAFAFF] text-gray-600 font-sans antialiased selection:bg-accent/20 selection:text-foreground">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMenuOpen
            ? "bg-white/80 backdrop-blur-sm shadow-md py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
          <a
            href="#"
            className={`flex items-center gap-2 font-display font-extrabold text-2xl transition-colors ${
              isScrolled || isMenuOpen ? "text-accent-dark" : "text-white"
            }`}
          >
            <Image
              src="/IX-logo.png"
              alt="Innovox Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            INNOVOX
          </a>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors border-b-2 border-transparent ${
                  isScrolled
                    ? "text-gray-700 hover:text-accent-dark"
                    : "text-white hover:text-white"
                } hover:border-accent`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="hidden md:block">
            <a
              href="#contact"
              className="bg-accent-dark text-white font-bold py-2 px-5 rounded-full text-sm hover:bg-accent transition-all duration-300 transform hover:scale-105"
            >
              Get Your Free Quote
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`transition-colors ${
                isScrolled || isMenuOpen ? "text-accent-dark" : "text-white"
              }`}
            >
              {isMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white md:hidden transition-all duration-300 ease-in-out overflow-hidden max-h-screen border-t">
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-accent-dark font-medium text-lg"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="bg-accent-dark text-center text-white font-bold py-3 px-6 rounded-full text-lg hover:bg-accent transition-colors duration-300"
              >
                Get Your Free Quote
              </a>
            </div>
          </div>
        )}
      </nav>

      <HeroSection />

      <main>
        <ServicesSection />
        <WhyChooseUsSection />
        <ProcessSection />
        <ContactSection />
      </main>

      <Footer navLinks={navLinks} />

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-8 right-8 bg-accent-dark text-white p-3 rounded-full shadow-lg hover:bg-accent transition-all duration-300 ${
          isScrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        aria-label="Back to top"
      >
        <ArrowUpIcon />
      </button>

      <a
        href="#contact"
        className={`md:hidden fixed bottom-8 left-1/2 -translate-x-1/2 bg-accent text-white font-bold py-3 px-8 rounded-full text-base shadow-lg hover:bg-accent-dark transition-all duration-300 transform hover:scale-105 ${
          isScrolled ? "opacity-100" : "opacity-0"
        }`}
      >
        Get a Quote
      </a>
    </div>
  );
}
