export const myProjects = [
  {
    id: 1,
    title: "End-to-End Scalable Architecture Evolution",
    description:
      "Architected 8-phase evolution of distributed e-commerce system from 3-tier MVP to production microservices.",
    subDescription: [
      "Architected 8-phase evolution of distributed e-commerce system from 3-tier MVP to production microservices",
      "Implemented auto-scaling, high availability, and rolling updates using Kubernetes orchestration",
      "Optimized read-heavy domains with hybrid Cassandra and PostgreSQL database architecture",
      "Decoupled order submission from processing using RabbitMQ message queues to handle traffic spikes",
      "Built observability system with EFK centralized logging, Jaeger distributed tracing, and Prometheus metrics",
      "Simplified routing via Zuul Gateway, Eureka discovery, and Nginx/Ribbon load balancing",
      "Ensured consistent environment and easy restarts using Docker Compose/Network/Volume and bash automation",
      "Developed initial 3-tier MVP store using Spring Boot, Django, PostgreSQL, and React on GCP virtual machine",
    ],
    href: "https://tinyurl.com/sa2023doc",
    logo: "",
    image: "/assets/projects/accessories.jpg",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Git",
        path: "/assets/logos/git.svg",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 4,
        name: "GitHub",
        path: "/assets/logos/github.svg",
      },
    ],
  },
];

export const mySocials = [];

export const experiences = [
  {
    title: "Full Stack Developer Lead",
    job: "1 Thing Org",
    date: "January 2024 – May 2025",
    contents: [
      "Led 3-9 developers with Google engineering manager to develop mobile/web real-time tracker for anti-Asian hate incidents across North America using React Native, serving thousands of daily users",
      "Optimized API latency by migrating Google Translate LROs from synchronous Flask endpoints to async Cloud Functions workers with Firestore caching, reducing response times from seconds to milliseconds",
      "Eliminated incident data cache inconsistency across distributed App Engine instances by migrating from in-memory TTL caches to centralized Redis",
      "Reduced onboarding time by 50% (1 week) using DevContainer, CodeSpaces, Bash and Docs",
      "Led team to win 2nd place + most popular project at \"Hack for Impact\" NY tech week with AI coding and MCP",
      "Improved team productivity by lecturing on AI tools and proposed Responsible AI Initiative",
    ],
  },
  {
    title: "Full Stack Developer",
    job: "1 Thing Org",
    date: "September 2023 – February 2024",
    contents: [
      "Designed/implemented \"self-report\" system allows reporters to submit incidents with Cloud Storage attachments, admins to moderate, and users to interact with D3.js/Redux geo maps and statistics by state/date",
    ],
  },
  {
    title: "Full Stack Developer",
    job: "Mink Inc",
    date: "August 2023 – September 2023",
    contents: [
      "Independently developed three Flask sites for blind scientists with accessibility features and responsive interface",
    ],
  },
  {
    title: "Software Development Engineer Intern",
    job: "Knobull Inc",
    date: "2023",
    contents: [
      "Delivered MERN stack news site 50% (2 months) faster by leveraging open-source React-admin with REST API",
    ],
  },
];
export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
