const base = import.meta.env.BASE_URL.replace(/\/$/, "");
export const asset = (p: string) => `${base}/assets/${p}`;

export const profile = {
  name: "Uduak Essien",
  fullName: "Uduak Alphonsus Essien",
  title: "Senior Full Stack Software Engineer",
  stack: "Ruby on Rails | React",
  location: "Portugal (EU time zone)",
  availability: "Open to remote opportunities worldwide",
  email: "uduak.essien.dev@gmail.com",
  github: "https://github.com/acushlakoncept",
  linkedin: "https://www.linkedin.com/in/acushlakoncept",
  resume: asset("Uduak_Essien_Resume.pdf"),
  portrait: asset("uduak-portrait.png"),
};

export type Role = {
  id: string;
  company: string;
  role: string;
  where: string;
  period: string;
  points: string[];
};

export const experience: Role[] = [
  {
    id: "whitelabel",
    company: "Whitelabel Collaborative",
    role: "Software Developer II",
    where: "Remote, USA",
    period: "Jun 2022 — Jul 2026",
    points: [
      "Built and maintained enterprise Rails and React applications for the Owens Corning digital marketing team and the OCConnect platform.",
      "Developed a warranty claims management platform used by contractors and customers, including the Solar Protect Warranty feature.",
      "Migrated legacy forms to a flexible, JSON-driven form architecture.",
      "Designed REST APIs for Racing for Recovery's Android and iOS apps, focused on data consistency and performance.",
      "Owned production reliability and delivery while collaborating in a distributed Agile team.",
    ],
  },
  {
    id: "microverse-reviewer",
    company: "Microverse",
    role: "Senior Code Reviewer",
    where: "Remote",
    period: "May 2021 — Sep 2021",
    points: [
      "Reviewed hundreds of student projects for code quality, testing and best practice.",
      "Mentored 300+ engineers through structured, actionable feedback.",
      "Helped standardize review guidelines across the reviewer team.",
    ],
  },
];

export const education = [
  { school: "Microverse", what: "Full Stack Web Development — 1300+ hours of remote pair programming", period: "Apr 2020 — Dec 2020" },
  { school: "University of Uyo", what: "BEng, Agricultural Engineering", period: "2005 — 2010" },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "languages", items: ["Ruby", "JavaScript", "TypeScript", "SQL"] },
  { group: "frameworks", items: ["Ruby on Rails", "React", "Redux", "Node.js"] },
  { group: "data", items: ["PostgreSQL", "MySQL", "REST APIs", "OAuth"] },
  { group: "testing", items: ["RSpec", "Jest", "Capybara", "TDD"] },
  { group: "delivery", items: ["AWS", "Docker", "GitHub Actions", "CI/CD"] },
  { group: "ai_tools", items: ["GitHub Copilot", "ChatGPT", "Claude", "Cursor"] },
];

export type Project = {
  id: string;
  name: string;
  client: string;
  kind: string;
  summary: string;
  problem: string;
  work: string[];
  stack: string[];
};

export const projects: Project[] = [
  {
    id: "occonnect",
    name: "OCConnect",
    client: "Owens Corning · via Whitelabel Collaborative",
    kind: "Enterprise platform",
    summary: "Enterprise Rails and React applications supporting Owens Corning's digital marketing team and contractor network.",
    problem: "A large enterprise product surface that has to stay dependable while features keep shipping across a distributed team.",
    work: [
      "Full stack feature work across Rails back ends and React front ends.",
      "Migrated legacy forms to a flexible JSON-driven architecture, so forms can evolve without hand-rewriting each one.",
      "Built and maintained REST APIs and focused on production reliability.",
    ],
    stack: ["Ruby on Rails", "React", "PostgreSQL", "REST"],
  },
  {
    id: "leads-management",
    name: "Leads Management & Subscription System",
    client: "OCConnect · Owens Corning · via Whitelabel Collaborative",
    kind: "Leads & subscriptions",
    summary: "Developed and integrated a Leads Management system within the company’s internal ecosystem, alongside a custom subscription and billing infrastructure.",
    problem: "Developed and integrated a Leads Management system within the company’s internal ecosystem, alongside a custom subscription and billing infrastructure.",
    work: [
      "Implemented lead management workflows covering lead creation, assignment, status tracking, follow-ups, and conversion.",
      "Designed and developed a custom subscription management system supporting three monthly subscription tiers.",
      "Integrated Stripe for secure payment processing and recurring subscription billing.",
      "Implemented a hybrid payment mechanism combining internally allocated promotional funds with Stripe, allowing customers to use available credits towards subscription payments and charge any outstanding balance to their payment card.",
      "Developed automated payment allocation and subscription workflows to streamline billing and subscription management.",
    ],
    stack: ["Ruby on Rails", "React.js", "PostgreSQL", "Stripe API"],
  },
  {
    id: "warranty-claims",
    name: "Warranty Claims Management",
    client: "Owens Corning · via Whitelabel Collaborative",
    kind: "Claims platform",
    summary: "A warranty claims platform for contractors and customers, including the Solar Protect Warranty feature.",
    problem: "Contractors and customers need a clear, reliable path from filing a warranty claim to resolution.",
    work: [
      "Developed claims management workflows for contractors and customers.",
      "Delivered the Solar Protect Warranty feature.",
      "Worked within the JSON-driven form architecture to keep claim forms flexible.",
    ],
    stack: ["Ruby on Rails", "React", "REST"],
  },
  {
    id: "racing4recovery",
    name: "Racing for Recovery APIs",
    client: "Racing for Recovery · via Whitelabel Collaborative",
    kind: "Mobile back end",
    summary: "RESTful APIs powering Racing for Recovery's Android and iOS applications.",
    problem: "Two native mobile clients depending on one API need consistent data and fast responses.",
    work: [
      "Designed and built RESTful endpoints consumed by Android and iOS apps.",
      "Focused on data consistency and performance.",
      "Carried features through to production delivery.",
    ],
    stack: ["Ruby on Rails", "REST", "PostgreSQL"],
  },
];

export const sideProjects = [
  { name: "Car Rentals", stack: "Rails API + React/Redux", url: "https://github.com/acushlakoncept/car-rentals-client" },
  { name: "Stockist", stack: "React + Redux", url: "https://github.com/acushlakoncept/react-capstone" },
  { name: "Adventures of Cush", stack: "Phaser 3 game, JavaScript", url: "https://github.com/acushlakoncept/phaser3-game" },
];

export type Post = { title: string; date: string; iso: string; url: string; outlet: string; topic: string };

export const posts: Post[] = [
  { title: "Rails Direct Uploads to Cloudinary Made Easy With Shrine", date: "Feb 3, 2021", iso: "2021-02-03", url: "https://www.microverse.org/blog/rails-direct-uploads-to-cloudinary-made-easy-with-shrine", outlet: "Microverse", topic: "rails" },
  { title: "Rails Image Upload in 7 Simple Steps Using Shrine", date: "Jan 14, 2021", iso: "2021-01-14", url: "https://www.microverse.org/blog/rails-image-upload-using-shrine", outlet: "Microverse", topic: "rails" },
  { title: "Understanding RSpec Controller/Request Specs & Integration Test Using Capybara", date: "Sep 10, 2020", iso: "2020-09-10", url: "https://www.microverse.org/blog/understanding-rspec-controller-request-specs-integration-test-using-capybara", outlet: "Microverse", topic: "testing" },
  { title: "Understanding RSpec Model and Helper Specs", date: "Sep 2, 2020", iso: "2020-09-02", url: "https://www.microverse.org/blog/understanding-rspec-model-and-helper-specs", outlet: "Microverse", topic: "testing" },
  { title: "Understanding TDD with RSpec in Ruby on Rails", date: "Aug 26, 2020", iso: "2020-08-26", url: "https://www.microverse.org/blog/test-driven-development-with-rspec-in-ruby-on-rails", outlet: "Microverse", topic: "testing" },
  { title: "Rails View Helpers — Best Practices Guide", date: "Aug 4, 2020", iso: "2020-08-04", url: "https://medium.com/@acushla4real/rails-view-helpers-best-practices-guide-d7d7b6db3db4", outlet: "Medium", topic: "rails" },
  { title: "Toastr, a Perfect Flash Message Alternative for Rails", date: "Aug 3, 2020", iso: "2020-08-03", url: "https://medium.com/@acushla4real/toastr-a-perfect-flash-message-alternative-for-rails-3d3ed823b145", outlet: "Medium", topic: "rails" },
  { title: "Responsive Design — you're doing it wrong!", date: "Jun 8, 2020", iso: "2020-06-08", url: "https://uxdesign.cc/responsive-design-youre-doing-it-wrong-d88a52e1d5f7", outlet: "UX Collective", topic: "frontend" },
];
