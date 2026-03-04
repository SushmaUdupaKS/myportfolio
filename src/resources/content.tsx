import { About, Blog, Gallery, Home, Newsletter, Person, Social, Projects } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Sushma",
  lastName: "Udupa KS",
  name: `Sushma Udupa KS`,
  role: "IAM Analyst | Data Analyst",
  avatar: "/images/profile.jpg",
  email: "sushmaudupa05@gmail.com",
  location: "Asia/Kolkata",
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  // {
  //   name: "GitHub",
  //   icon: "github",
  //   link: "https://github.com/once-ui-system",
  //   essential: true,
  // },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/sushma-udupa-k-s",
    essential: true,
  },
  // {
  //   name: "Instagram",
  //   icon: "instagram",
  //   link: "https://www.instagram.com/once_ui/",
  //   essential: false,
  // },
  // {
  //   name: "Threads",
  //   icon: "threads",
  //   link: "https://www.threads.com/@once_ui",
  //   essential: true,
  // },
  // {
  //   name: "Email",
  //   icon: "email",
  //   link: `mailto:${person.email}`,
  //   essential: true,
  // },
];

const home: Home = {
  path: "/",
  // image: "/images/profile.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Showcasing Skills. Sharing Stories. Shaping Opportunities.</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Download Resume</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Download Power BI Dashboard
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
    I’m Sushma, a data and automation enthusiast, blending IAM expertise with analytics. After work, I tinker with Python scripts and small automation projects.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Analytical and detail-oriented professional with 2 years of experience
        across Identity & Access Management (IAM) and Data Analytics in the
        banking domain. Proven expertise in Python automation, Excel-based
        reporting, and Snowflake SQL to streamline manual workflows and ensure
        compliance. Recognized as a Peak Performer (2025) for driving automation
        initiatives, improving operational efficiency, and delivering data-driven
        insights that support business decisions.
      </>
    ),
  },

  certification: {
    display: true, // set to false to hide this section
    title: "Certifications & Recognitions",
    cert: [
    {
      title: "Peak Performer - 2025",
      description:
        "Recognized for ownership, consistent delivery, and automation-driven impact.",
    },
    {
      title: "AZ-104: Microsoft Azure Administrator",
      description:
        "Microsoft Certified Azure Administrator Associate certification.",
    },
  ],
  },

  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
    {
        company: "Accenture",
        timeframe: "2024 - Present",
        role: "Security Services Managed Analyst | Data Analyst",
        achievements: [
          <>
            Led a Privileged Access Review Automation project that identified
            unused accounts, triggered user notifications, and initiated access
            revocations — reducing manual review effort by 60%.
          </>,
          <>
            Automated report generation using Python, enabling end-to-end data
            extraction, processing, and formatted Excel output creation.
          </>,
          <>
          Developed a Python utility to compare large Excel datasets,
          enhancing accuracy in access validation and audit reporting.
          </>,
        ],
        images: [],
      },

      {
        company: "Accenture",
        timeframe: "2024 - Present",
        role: "Security Services Managed Analyst | IAM Analyst",
        achievements: [
          <>
            Managed ServiceNow requests for provisioning, modification, and
            deprovisioning of user access across client-specific and Swift
            applications.
          </>,
          <>
            Resolved user and application team access issues promptly, ensuring
            compliance with internal security policies and audit standards.
          </>,
          <>
          Performed end-to-end IAM BAU activities, maintaining detailed audit
          documentation and evidence for periodic compliance reviews.
          </>
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Bachelor of Engineering",
        description: <>Electrical and Electronics Engineering</>,
      },
      // {
      //   name: "Build the Future",
      //   description: <>Studied online marketing and personal branding.</>,
      // },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Automation",
        description: (
          <>Built scripts and workflows to generate reports, send notifications, and optimize daily processes - reduced manual efforts by 60%</>
        ),
        tags: [
          {
            name: "Python",
            icon: "Python",
          },
          {
            name: "SQL",
            icon: "SQL",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-02.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
          // {
          //   src: "/images/projects/project-01/cover-03.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },

      {
        title: "Python",
        description: (
          <>Used for automating repetitive tasks, processing data, and generating Excel reports efficiently.</>
        ),
        tags: [
          
        ],
        images: [
          
        ],
      },
      {
        title: "SQL & Snowflake",
        description: (
          <>Extracted and queried data, performed optimization for reporting and analysis.</>
        ),
        tags: [
          
        ],
        images: [
      
        ],
      },
      {
        title: "Excel",
        description: (
          <>Applied for data validation, formatting, and comparison to ensure accurate reporting.</>
        ),
        tags: [

        ],
        images: [
          
        ],
      },

      {
        title: "ServiceNow",
        description: (
          <>Managed user access by provisioning, modifying, and deprovisioning accounts, and resolving user queries.</>
        ),
        tags: [

        ],
        images: [
          
        ],
      },
      {
        title: "Power BI",
        description: (
          <>Developed dashboards by transforming raw data into meaningful visual reports for better data understanding and presentation.</>
        ),
        tags: [

        ],
        images: [
          
        ],
      },
    ],
  },




};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const projects: Projects = {

  display: true,
  path: "/Projects",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `Automation and analytics projects by ${person.name}`,
  projects: [
  ]
}

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, projects, gallery };
