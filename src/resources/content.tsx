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
  headline: <>Transforming Data into Insights, Automation, and Business Impact</>,
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
    I’m Sushma, a data and automation enthusiast blending IAM expertise with analytics. I enjoy building Python-based automation solutions and exploring innovative ways to improve processes.
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
        Results-driven Data Analyst with 2+ years of 
        experience spanning Identity & Access Management (IAM),
        data analytics, and process automation. Skilled in Python, 
        SQL (Snowflake), and Power BI to uncover insights, 
        detect anomalies, and streamline compliance workflows, 
        reducing manual effort by 60%. Recognized as a Peak Performer (2025) 
        at Accenture for delivering measurable impact in fraud 
        detection and operational efficiency. Passionate about 
        leveraging data and automation to build secure, efficient, 
        and scalable digital solutions.

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
        timeframe: "Feb 2024 - Present",
        role: "Security Services Managed Analyst | Data Analyst",
        achievements: [
          <>
            <h3>Privileged Access Review Automation</h3>
            Designed and implemented an automated review process that identified 
            inactive privileged accounts, triggered user notifications, and initiated 
            access revocations, reducing manual effort by 60% and strengthening access governance.
          </>,
          <>
            <h3>Automated Reporting Framework</h3>
            Built Python-based automation to extract, process, 
            and transform data into standardized Excel reports, 
            significantly reducing report preparation time and manual intervention.
          </>,
          <>
          <h3>Excel Dataset Validation Tool</h3>
          Developed a Python utility to compare and 
          validate large Excel datasets, improving audit accuracy, 
          accelerating access verification, and minimizing human error.
          </>,
        ],
        images: [],
      },

      {
        company: "Accenture",
        timeframe: "Feb 2024 - May 2024",
        role: "Security Services Managed Analyst | IAM Analyst",
        achievements: [
          <>
            Administered user access lifecycle management for critical 
            banking and client applications, handling provisioning, 
            modifications, and deprovisioning through ServiceNow.
          </>,
          <>
            Partnered with users, application owners, and support teams 
            to troubleshoot and resolve access-related issues, ensuring 
            secure and uninterrupted business operations.
          </>,
          <>
          Supported Identity and Access Management governance by conducting 
          access reviews, maintaining audit-ready documentation, and ensuring 
          compliance with internal controls and regulatory requirements.
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
          <>Designed and implemented automation solutions for reporting, email notifications, and operational workflows, reducing manual effort by 60% and improving process efficiency.</>
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
          <>Developed scripts for data processing, workflow automation, report generation, and Excel-based solutions to streamline repetitive tasks.</>
        ),
        tags: [
          
        ],
        images: [
          
        ],
      },
      {
        title: "SQL & Snowflake",
        description: (
          <>Queried, transformed, and analyzed large datasets to support reporting, compliance reviews, and data-driven decision-making.</>
        ),
        tags: [
          
        ],
        images: [
      
        ],
      },
      {
        title: "Excel",
        description: (
          <>Utilized advanced Excel techniques for data validation, reconciliation, reporting, and audit support to ensure data accuracy and consistency.</>
        ),
        tags: [

        ],
        images: [
          
        ],
      },

      {
        title: "ServiceNow",
        description: (
          <>Managed end-to-end user access lifecycle activities, including provisioning, modifications, deprovisioning, and access-related issue resolution.</>
        ),
        tags: [

        ],
        images: [
          
        ],
      },
      {
        title: "Power BI",
        description: (
          <>Created interactive dashboards and visual reports, transforming raw data into actionable insights for stakeholders and business teams.</>
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
