import { UploadIcon, VideoIcon, ZapIcon } from "lucide-react";

export const featuresData = [
  {
    icon: <UploadIcon className="w-6 h-6" />,
    title: "Discovery & Planning",
    desc: "We understand your goals, audience and challenges to craft a clear, actionable strategy.",
  },
  {
    icon: <ZapIcon className="w-6 h-6" />,
    title: "Design & Development",
    desc: "High-quality design and scalable development focused on performance and usability.",
  },
  {
    icon: <VideoIcon className="w-6 h-6" />,
    title: "Launch & Growth",
    desc: "We launch, optimize and continuously improve to drive measurable business growth.",
  },
];

export const plansData = [
  {
    id: "starter",
    name: "Starter",
    price: "$499",
    desc: "Best for early-stage startups.",
    credits: "One-time",
    features: [
      "Project discovery & planning",
      "UI/UX design",
      "Basic website development",
      "1 revision round",
      "Email support",
    ],
  },
  {
    id: "pro",
    name: "Growth",
    price: "$1,499",
    desc: "Growing teams and businesses.",
    credits: "Monthly",
    features: [
      "Everything in Starter",
      "Advanced UI/UX design",
      "Custom development",
      "Performance optimization",
      "Priority support",
    ],
    popular: true,
  },
  {
    id: "ultra",
    name: "Scale",
    price: "$3,999",
    desc: "For brands ready to scale fast.",
    credits: "Custom",
    features: [
      "Everything in Growth",
      "Dedicated project manager",
      "Ongoing optimization",
      "Marketing & growth support",
      "Chat + Email support",
    ],
  },
];

export const faqData = [
  {
    question: "What does this AI YouTube Thumbnail Generator do?",
    answer:
      "It uses AI to generate high-quality, click-worthy YouTube thumbnails based on your title, content, and style preferences—in seconds.",
  },
  {
    question: "Who is this tool for?",
    answer:
      "This tool is built for YouTubers, creators, startups, brands, and marketing teams who want professional thumbnails without design skills.",
  },
  {
    question: "How long does it take to generate a thumbnail?",
    answer:
      "Most thumbnails are generated in under 10 seconds, depending on image complexity and selected styles.",
  },
  {
    question: "Do I need design experience to use it?",
    answer:
      "No. The generator is designed to be simple and beginner-friendly. Just enter your video details and let the AI handle the design.",
  },
  {
    question: "Can I customize the thumbnails?",
    answer:
      "Yes. You can adjust text, colors, fonts, layouts, and styles after generation to perfectly match your brand.",
  },
  {
    question: "Are the thumbnails optimized for YouTube?",
    answer:
      "Absolutely. All thumbnails are generated in YouTube-recommended dimensions and optimized for high click-through rates.",
  },
  {
    question: "Can I use the thumbnails commercially?",
    answer:
      "Yes. You can use all generated thumbnails for personal and commercial YouTube projects.",
  },
];

export const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "Home", url: "#" },
      { name: "Services", url: "#" },
      { name: "Work", url: "#" },
      { name: "Contact", url: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", url: "#" },
      { name: "Terms of Service", url: "#" },
    ],
  },
  {
    title: "Connect",
    links: [
      { name: "Twitter", url: "https://x.com/XManish_" },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rajz-manish-900453382/",
      },
      { name: "GitHub", url: "https://github.com/strictlyManish" },
    ],
  },
];
