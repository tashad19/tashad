export const personalInfo = {
  name: "Tashadur Rahman",
  tagline: "Full Stack Developer",
  description: " Final Year Computer Science student at VIT Chennai with a strong background in developing reliable systems and dealing with large volumes of data.",
  photo: "/images/profile_pic.jpg",
  resumeUrl: "https://drive.google.com/file/d/1vVtg8-GUH3Vv8WNv3hybrfHmweczDDF4/view?usp=sharing",
  email: "tashadurrahman1924@email.com",
  location: "San Francisco, CA"
};

export const achievements = [
  "Won first place at the University Hackathon 2023 for developing an AI-powered learning assistant that helps students with personalized study plans",
  "Selected as one of the top 50 finalists in Google Code-in competition for outstanding open source contributions to various projects",
  "Maintained a 3.9 GPA and received Dean's List recognition for academic excellence throughout my computer science program",
  "Led a team of 5 developers in creating a mobile app that gained 1000+ downloads within the first month of launch",
  "Completed advanced certifications in React, Node.js, and AWS cloud services with distinction grades"
];

export const education = [
  {
    degree: "B. Tech. in Computer Science Engineering",
    institution: "Vellore Institute of Technology, Chennai",
    period: "2022 - 2026",
    gpa: "8.59/10",
    status: "In Progress"
  },
  {
    degree: "Class 12th - Science Stream (with CS)",
    institution: "D.A.V. Kapildev Public School",
    period: "2021 - 2022",
    gpa: "90.7%",
    status: "Completed"
  },
  {
    degree: "Class 10th",
    institution: "D.A.V. Kapildev Public School",
    period: "2019 - 2020",
    gpa: "93.3%",
    status: "Completed"
  }
];

export const technicalSkills = [
  { name: "JavaScript", category: "language" },
  { name: "TypeScript", category: "language" },
  { name: "Python", category: "language" },
  { name: "Java", category: "language" },
  { name: "React", category: "framework" },
  { name: "Node.js", category: "framework" },
  { name: "Express", category: "framework" },
  { name: "Next.js", category: "framework" },
  { name: "MongoDB", category: "database" },
  { name: "PostgreSQL", category: "database" },
  { name: "Git", category: "tool" },
  { name: "Docker", category: "tool" },
  { name: "AWS", category: "tool" },
  { name: "Figma", category: "tool" }
];

export const softSkills = [
  "Problem Solving",
  "Team Leadership",
  "Communication",
  "Project Management",
  "Critical Thinking",
  "Adaptability"
];

export const projects = [
  {
    id: 1,
    title: "EcoTrack - Sustainability App",
    shortDescription: "A mobile app that helps users track their carbon footprint and suggests eco-friendly alternatives",
    longDescription: "EcoTrack is a comprehensive sustainability application that empowers users to make environmentally conscious decisions. The app features real-time carbon footprint tracking, personalized eco-friendly recommendations, and a community platform for sharing green initiatives.",
    techStack: ["React Native", "Node.js", "MongoDB", "Express"],
    images: [
      "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    githubUrl: "https://github.com/yourusername/ecotrack",
    liveUrl: "https://ecotrack-demo.netlify.app",
    problemSolved: "Addressed the lack of accessible tools for individuals to monitor and reduce their environmental impact",
    learnings: "Gained experience with mobile development, API integration, and creating intuitive UX for complex data visualization"
  },
  {
    id: 2,
    title: "StudyBuddy - Collaborative Learning Platform",
    shortDescription: "A web platform connecting students for collaborative study sessions and knowledge sharing",
    longDescription: "StudyBuddy revolutionizes the way students learn together by providing a digital space for forming study groups, sharing resources, and conducting virtual study sessions. Features include real-time collaboration tools, progress tracking, and AI-powered study recommendations.",
    techStack: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    images: [
      "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    githubUrl: "https://github.com/yourusername/studybuddy",
    liveUrl: "https://studybuddy-platform.vercel.app",
    problemSolved: "Solved the challenge of remote collaborative learning during the pandemic",
    learnings: "Developed skills in real-time communication systems, user authentication, and responsive design principles"
  },
  {
    id: 3,
    title: "TaskFlow - Project Management Tool",
    shortDescription: "An intuitive project management application with Kanban boards and team collaboration features",
    longDescription: "TaskFlow is a modern project management solution designed for agile teams. It features customizable Kanban boards, time tracking, team analytics, and seamless integration with popular development tools.",
    techStack: ["Next.js", "PostgreSQL", "Prisma", "NextAuth"],
    images: [
      "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    githubUrl: "https://github.com/yourusername/taskflow",
    liveUrl: "https://taskflow-pm.vercel.app",
    problemSolved: "Created an affordable alternative to expensive project management tools for small teams",
    learnings: "Mastered full-stack development, database design, and implementing complex user authorization systems"
  }
];

export const experiences = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    company: "TechCorp Solutions",
    period: "Jun 2023 - Aug 2023",
    location: "San Francisco, CA",
    description: "Developed responsive web applications using React and TypeScript. Collaborated with the design team to implement pixel-perfect UI components and improved website performance by 40%.",
    achievements: [
      "Built 5 major feature components that increased user engagement by 25%",
      "Optimized bundle size and loading times, resulting in 40% performance improvement",
      "Collaborated with cross-functional teams of 8+ members using Agile methodologies"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Jest"]
  },
  {
    id: 2,
    title: "Full Stack Developer Intern",
    company: "StartupXYZ",
    period: "Dec 2022 - Feb 2023",
    location: "Remote",
    description: "Worked on both frontend and backend development for a SaaS platform. Implemented new features, fixed bugs, and contributed to the overall architecture decisions.",
    achievements: [
      "Developed RESTful APIs serving 1000+ daily active users",
      "Implemented user authentication and authorization systems",
      "Reduced API response time by 30% through database optimization"
    ],
    techStack: ["Node.js", "Express", "MongoDB", "React"]
  }
];

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/tashad19", icon: "github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/tashadur-rahman/", icon: "linkedin" },
  { name: "Twitter", url: "https://x.com/Tashadur1", icon: "twitter" }
];

export const codingLinks = [
  { name: "LeetCode", url: "https://leetcode.com/u/tashadur", icon: "leetcode" },
  { name: "HackerRank", url: "https://www.hackerrank.com/profile/tashadurrahman11", icon: "hackerrank" },
  { name: "CodeChef", url: "https://www.codechef.com/users/tash1924", icon: "codechef" },
  { name: "Codeforces", url: "https://codeforces.com/profile/tashad", icon: "codeforces" }
]