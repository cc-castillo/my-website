import { Home, Blog, Photography, Person, Social } from "@/types";

const person: Person = {
  firstName: "Christina",
  lastName: "Castillo",
  name: `Christina Castillo`,
  role: "Software Engineer",
  avatar: "/images/Mee.jpg",
  email: "christinakccastillo@gmail.com",
  languages: ["English", "Spanish"]
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/c-cubed",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  label: "Home",
  title: "Work Experience",
  description: `Meet ${person.name}, ${person.role}`,
  avatar: {
    display: true,
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hi! I'm Christina, a software engineer specializing in backend systems and cloud infrastructure.
        Since I was a child, I have been fascinated by the internet and how technology shapes our world. I remember rushing home from school to redesign
        MySpace page and connecting with friends online. Many years later, this has evolved into a career that allows me to build impacful systems and explore the 
        possibilities of software development.
        <br></br>
            <br></br>
        In addition to losing track of time on the computer, I enjoy traveling, photography and spending time with my dog, Rey.
        If you want to find out more, connect with me on LinkedIn or send me an email! I'd love to hear from you.
        </>
    ),
  },
  work: {
    display: true,
    title: " Work Experience",
    experiences: [
      {
        company: "Zappos.com",
        timeframe: "2020 - Present",
        role: "Software Engineer",
        achievements: [
          <>
            Built REST APIs to support order processing and storage of customer data.
          </>,
          <>
            Spearheaded the migration of legacy systems to AWS, improving system reliability and efficiency.
          </>,
          <>
            Automated management of cloud resources using AWS CDK, reducing manual effort.
          </>,    
          <>
            Ensured high availability and performance of services through effective monitoring and incident response.
          </>      
          ],
        images: [],
      },
      {
        company: "Zappos.com",
        timeframe: "2018 - 2020",
        role: "QA Engineer",
        achievements: [
          <>
            Developed test suites for frontend functionality using Nightwatch.js
          </>,
          <>
            Led weekly code deployments, ensuring smooth releases with succussful regression testing.
          </>,
        ],
        images: [],
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "AWS Solutions Architect Associate Certified",
        description: (
          <> </>
        )
      },
      {
        title: "Strong knowledge of Java",
        description: (
          <></>
        )
      },
      {
        title: "JavaScript & TypeScript",
        description: (
          <></>
        )
      },
      {
        title: "Database Management using RDS, DynamoDB, MongoDB",
        description: (
          <> </>
        )
      },
      {
        title: "Network Security using VPCs, Security Groups, Authentication roles",
        description: (
          <> </>
        )
      },
      {
        title: "Successfully taught my parents to send emails from their phones",
        description: (
          <> </>
        )
      }
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  display: false,
  label: "Blog",
  title: `Blog – ${person.name}`,
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
};

const photography: Photography = {
  path: "/photography",
  label: "Photography",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
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
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, home, blog, photography };
