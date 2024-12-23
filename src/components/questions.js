const CareerPaths = [
  {
    question: 1,
    text: "What type of tasks do you enjoy most?",
    choices: [
      {
        value: "A",
        label: "Solving complex problems",
        career: "Technology, Engineering",
      },
      {
        value: "B",
        label: "Helping others directly",
        career: "Healthcare, Social Work, Education",
      },
      {
        value: "C",
        label: "Creative and artistic projects",
        career: "Arts, Design, Media",
      },
      {
        value: "D",
        label: "Organizing and planning",
        career: "Management, Event Planning, Operations",
      },
    ],
  },
  // Question 2: How do you prefer to spend your leisure time?
  {
    question: 2,
    text: "How do you prefer to spend your leisure time?",
    choices: [
      {
        value: "A",
        label: "Reading, researching, or studying",
        career: "Academia, Research, Technology",
      },
      {
        value: "B",
        label: "Volunteering or socializing",
        career: "Non-profits, Social Work, Counseling",
      },
      {
        value: "C",
        label: "Doing something artistic or crafty",
        career: "Arts, Design, Fashion",
      },
      {
        value: "D",
        label: "Organizing events or working on a project",
        career: "Project Management, Event Planning, Business",
      },
    ],
  },
  // Question 3: How do you handle stress?
  {
    question: 3,
    text: "How do you handle stress?",
    choices: [
      {
        value: "A",
        label: "I stay calm and analyze the situation",
        career: "Technology, Finance, Research",
      },
      {
        value: "B",
        label: "I rely on my support network for advice and help",
        career: "Healthcare, Counseling, Teaching",
      },
      {
        value: "C",
        label: "I focus on finding a creative solution",
        career: "Arts, Design, Media",
      },
      {
        value: "D",
        label: "I plan out a detailed course of action",
        career: "Management, Consulting, Engineering",
      },
    ],
  },
  // Question 4: Which of the following do you consider your strongest skill?
  {
    question: 4,
    text: "Which of the following do you consider your strongest skill?",
    choices: [
      {
        value: "A",
        label: "Critical thinking and analysis",
        career: "Technology, Finance, Research",
      },
      {
        value: "B",
        label: "Empathy and communication",
        career: "Healthcare, Counseling, Education, Sales",
      },
      {
        value: "C",
        label: "Artistic or design skills",
        career: "Arts, Design, Fashion, Media",
      },
      {
        value: "D",
        label: "Organizational and leadership skills",
        career: "Management, Project Management, Business",
      },
    ],
  },
  // Question 5: How do you prefer to work?
  {
    question: 5,
    text: "How do you prefer to work?",
    choices: [
      {
        value: "A",
        label: "Independently, with minimal supervision",
        career: "Technology, Research, Freelancing",
      },
      {
        value: "B",
        label: "In a team environment, collaborating with others",
        career: "Healthcare, Social Services, Marketing",
      },
      {
        value: "C",
        label: "In a creative space with room for exploration",
        career: "Arts, Media, Design",
      },
      {
        value: "D",
        label: "Structured, with clear roles and tasks",
        career: "Project Management, Business Operations, Engineering",
      },
    ],
  },
  // Question 6: What kind of environment excites you most?
  {
    question: 6,
    text: "What kind of environment excites you most?",
    choices: [
      {
        value: "A",
        label: "A quiet office or small workspace",
        career: "Technology, Research, Freelancing",
      },
      {
        value: "B",
        label: "A social or community-focused setting",
        career: "Healthcare, Social Services, Marketing",
      },
      {
        value: "C",
        label: "A studio or a creative agency",
        career: "Arts, Media, Design",
      },
      {
        value: "D",
        label: "A fast-paced, project-driven setting",
        career: "Project Management, Business Operations, Engineering",
      },
    ],
  },
  // Question 7: What motivates you at work?
  {
    question: 7,
    text: "What motivates you at work?",
    choices: [
      {
        value: "A",
        label: "Solving challenges and intellectual growth",
        career: "Technology, Research",
      },
      {
        value: "B",
        label: "Making a positive impact on others' lives",
        career: "Healthcare, Social Services",
      },
      {
        value: "C",
        label: "Expressing creativity and innovation",
        career: "Arts, Media, Design",
      },
      {
        value: "D",
        label: "Achieving goals and seeing progress",
        career: "Project Management, Business Operations",
      },
    ],
  },
  // Question 8: If you were to start a business, what kind of business would it be?
  {
    question: 8,
    text: "If you were to start a business, what kind of business would it be?",
    choices: [
      {
        value: "A",
        label: "A tech startup solving a complex issue",
        career: "Technology, Research",
      },
      {
        value: "B",
        label: "A non-profit helping others",
        career: "Healthcare, Social Services",
      },
      {
        value: "C",
        label: "A design or creative agency",
        career: "Arts, Media, Design",
      },
      {
        value: "D",
        label: "An event planning or project management firm",
        career: "Project Management, Business Operations",
      },
    ],
  },
  // Question 9: What subject did you excel in during school?
  {
    question: 9,
    text: "What subject did you excel in during school?",
    choices: [
      {
        value: "A",
        label: "Mathematics or science",
        career: "Technology, Research",
      },
      {
        value: "B",
        label: "Social studies or psychology",
        career: "Healthcare, Social Services",
      },
      { value: "C", label: "Arts or design", career: "Arts, Media, Design" },
      {
        value: "D",
        label: "Business or administration",
        career: "Project Management, Business Operations",
      },
    ],
  },
  // Question 10: How would you describe your ideal job?
  {
    question: 10,
    text: "How would you describe your ideal job?",
    choices: [
      {
        label: "Analytical and intellectually stimulating",
        value: "A",
        career: "Technology, Finance, Engineering",
      },
      {
        label: "Social, people-focused, and impactful",
        value: "B",
        career: "Healthcare, Social Services, Education",
      },
      {
        label: "Creative and hands-on",
        value: "C",
        career: "Creative Industries, Art, Design",
      },
      {
        label: "Structured with a clear path to leadership",
        value: "D",
        career: "Management, Consulting, Project Management",
      },
    ],
  },
  // Question 11: What kind of tasks do you dislike most?
  {
    question: 11,
    text: "What kind of tasks do you dislike most?",
    choices: [
      {
        label: "Repetitive or monotonous work",
        value: "A",
        career: "Technology, Finance, Engineering",
      },
      {
        label: "Healthcare, Sales, Consulting",
        value: "B",
        career: "Healthcare, Social Services, Education",
      },
      {
        label: "Creative Industries, Design",
        value: "C",
        career: "Creative Industries, Art, Design",
      },
      {
        label: "Project Management, Operations, Engineering",
        value: "D",
        career: "Management, Consulting, Project Management",
      },
    ],
  },
  // Question 12: How do you prefer to make decisions?
  {
    question: 12,
    text: "How do you prefer to make decisions?",
    choices: [
      {
        label: "Strategic and methodical",
        value: "A",
        career: "Technology, Finance, Engineering",
      },
      {
        label: "People-oriented and collaborative",
        value: "B",
        career: "Healthcare, Social Services, Education",
      },
      {
        label: "Flexible and imaginative",
        value: "C",
        career: "Creative Industries, Art, Design",
      },
      {
        label: "Project Management, Business Operations",
        value: "D",
        career: "Management, Consulting, Project Management",
      },
    ],
  },
  // Question 13: Which of the following describes your work style best?
  {
    question: 13,
    text: "Which of the following describes your work style best?",
    choices: [
      {
        label: "Consulting, Engineering, Finance",
        value: "A",
        career: "Technology, Finance, Engineering",
      },
      {
        label: "Healthcare, Social Work, Marketing",
        value: "B",
        career: "Healthcare, Social Services, Education",
      },
      {
        label: "Arts, Design, Media",
        value: "C",
        career: "Creative Industries, Art, Design",
      },
      {
        label: "Goal-oriented and decisive",
        value: "D",
        career: "Management, Consulting, Project Management",
      },
    ],
  },
  // Question 14: What type of career advancement do you desire?
  {
    question: 14,
    text: "What type of career advancement do you desire?",
    choices: [
      {
        value: "A",
        label: "Become an expert or specialist",
        career: "Technology, Finance, Engineering",
      },
      {
        value: "B",
        label: "Take on leadership roles",
        career: "Healthcare, Social Services, Education",
      },
      {
        value: "C",
        label: "Explore creative opportunities",
        career: "Creative Industries, Art, Design",
      },
      {
        value: "D",
        label: "Manage projects and teams",
        career: "Management, Consulting, Project Management",
      },
    ],
  },
  // Question 15: How do you feel about risk-taking?
  {
    question: 15,
    text: "How do you feel about risk-taking?",
    choices: [
      {
        value: "A",
        label: "I prefer to calculate the risks before acting",
        career: "Technology, Finance, Engineering",
      },
      {
        value: "B",
        label: "I’m open to risks, especially if they benefit others",
        career: "Healthcare, Social Services, Education",
      },
      {
        value: "C",
        label: "I enjoy experimenting and thinking outside the box",
        career: "Creative Industries, Art, Design",
      },
      {
        value: "D",
        label: "I’m comfortable taking risks if I have a plan in place",
        career: "Management, Consulting, Project Management",
      },
    ],
  },
  // Question 16: When working in a team, you tend to...
  {
    question: 16,
    text: "When working in a team, you tend to...",
    choices: [
      {
        value: "A",
        label: "Take charge of the problem-solving aspect",
        career: "Technology, Finance, Engineering",
      },
      {
        value: "B",
        label: "Support others emotionally and offer advice",
        career: "Healthcare, Social Services, Education",
      },
      {
        value: "C",
        label: "Contribute creative ideas and innovations",
        career: "Creative Industries, Art, Design",
      },
      {
        value: "D",
        label: "Organize the team and keep things on track",
        career: "Management, Consulting, Project Management",
      },
    ],
  },
  // Question 17: Do you prefer working with:
  {
    question: 17,
    text: "Do you prefer working with:",
    choices: [
      {
        value: "A",
        label: "People, understanding their needs and helping them",
        career: "Technology, Finance, Engineering",
      },
      {
        value: "B",
        label: "Healthcare, Social Work, Counseling",
        career: "Healthcare, Social Services, Education",
      },
      {
        value: "C",
        label: "Art, Design, Creative Expression",
        career: "Creative Industries, Art, Design",
      },
      {
        value: "D",
        label: "Projects, Logistics, Structured Tasks",
        career: "Management, Consulting, Project Management",
      },
    ],
  },
  // Question 18: How do you feel about working under pressure?
  {
    question: 18,
    text: "How do you feel about working under pressure?",
    choices: [
      {
        value: "A",
        label: "I enjoy working under pressure",
        career: "Technology, Finance, Engineering",
      },
      {
        value: "B",
        label: "I prefer to maintain a calm and supportive environment",
        career: "Healthcare, Social Services, Education",
      },
      {
        value: "C",
        label: "I enjoy working in a dynamic and unpredictable environment",
        career: "Creative Industries, Art, Design",
      },
      {
        value: "D",
        label: "I prefer working with a clear timeline and deadlines",
        career: "Management, Consulting, Project Management",
      },
    ],
  },
  // Question 19: What is your preferred type of feedback?
  {
    question: 19,
    text: "What is your preferred type of feedback?",
    choices: [
      {
        value: "A",
        label: "Positive and people-focused",
        career: "Technology, Finance, Engineering",
      },
      {
        value: "B",
        label: "Constructive and performance-based",
        career: "Healthcare, Social Services, Education",
      },
      {
        value: "C",
        label: "Creative and open-ended",
        career: "Creative Industries, Art, Design",
      },
      {
        value: "D",
        label: "Clear and actionable",
        career: "Management, Consulting, Project Management",
      },
    ],
  },
  // Question 20: How do you approach learning new skills?
  {
    question: 20,
    text: "How do you approach learning new skills?",
    choices: [
      {
        value: "A",
        label: "I prefer structured learning",
        career: "Technology, Finance, Engineering",
      },
      {
        value: "B",
        label: "I prefer hands-on learning",
        career: "Healthcare, Social Services, Education",
      },
      {
        value: "C",
        label: "I prefer creative exploration",
        career: "Creative Industries, Art, Design",
      },
      {
        value: "D",
        label: "I prefer planning and organizing tasks",
        career: "Management, Consulting, Project Management",
      },
    ],
  },
  {
    question: 21,
    text: "What kind of pace do you prefer at work?",
    choices: [
      {
        label: "Fast-paced and challenging",
        value: "A",
        career: "Technology, Consulting, Finance",
      },
      {
        label: "Calm and steady",
        value: "B",
        career: "Healthcare, Social Work, Research",
      },
      {
        label: "Dynamic and ever-changing",
        value: "C",
        career: "Creative Industries, Entertainment",
      },
      {
        label: "Planned and structured",
        value: "D",
        career: "Project Management, Engineering, Business",
      },
    ],
  },
  {
    question: 22,
    text: "What do you find most satisfying about your work?",
    choices: [
      {
        label: "Seeing tangible results from my efforts",
        value: "A",
        career: "Engineering, Architecture, Technology",
      },
      {
        label: "Helping others and making a difference",
        value: "B",
        career: "Healthcare, Counseling, Non-profit",
      },
      {
        label: "Expressing my creativity and imagination",
        value: "C",
        career: "Design, Art, Fashion",
      },
      {
        label: "Achieving business goals and maximizing efficiency",
        value: "D",
        career: "Management, Operations, Business",
      },
    ],
  },
  {
    question: 23,
    text: "How do you deal with uncertainty at work?",
    choices: [
      {
        label:
          "I like to gather all the facts and make decisions based on data",
        value: "A",
        career: "Technology, Finance, Research",
      },
      {
        label: "I remain calm and trust my instincts",
        value: "B",
        career: "Healthcare, Counseling, Education",
      },
      {
        label: "I try to come up with creative solutions",
        value: "C",
        career: "Design, Arts, Marketing",
      },
      {
        label: "I work to structure the situation and reduce ambiguity",
        value: "D",
        career: "Consulting, Project Management, Operations",
      },
    ],
  },
  {
    question: 24,
    text: "What type of leadership style resonates most with you?",
    choices: [
      {
        label: "Collaborative and democratic",
        value: "A",
        career: "Education, Healthcare, Non-profit",
      },
      {
        label: "Inspirational and visionary",
        value: "B",
        career: "Creative Industries, Media, Entertainment",
      },
      {
        label: "Direct and decisive",
        value: "C",
        career: "Consulting, Engineering, Finance",
      },
      {
        label: "Coaching and mentoring",
        value: "D",
        career: "Human Resources, Education, Counseling",
      },
    ],
  },
  {
    question: 25,
    text: "Which of the following best describes your ideal work-life balance?",
    choices: [
      {
        label: "Work hard and play hard",
        value: "A",
        career: "Consulting, Business Development, Finance",
      },
      {
        label: "I prefer more flexibility and time for personal activities",
        value: "B",
        career: "Technology, Freelancing, Education",
      },
      {
        label: "I like a balanced routine with time for creativity and leisure",
        value: "C",
        career: "Creative Industries, Arts, Design",
      },
      {
        label: "I value structure and consistent working hours",
        value: "D",
        career: "Engineering, Operations, Project Management",
      },
    ],
  },
  {
    question: 26,
    text: "What motivates you to do your best work?",
    choices: [
      {
        label: "The challenge and complexity of the work",
        value: "A",
        career: "Technology, Engineering, Research",
      },
      {
        label: "The opportunity to make a positive impact on people",
        value: "B",
        career: "Healthcare, Social Services, Education",
      },
      {
        label: "The chance to innovate and create something new",
        value: "C",
        career: "Creative Industries, Design, Art",
      },
      {
        label: "Achieving personal or team goals and recognition",
        value: "D",
        career: "Business, Sales, Project Management",
      },
    ],
  },
  {
    question: 27,
    text: "Which of the following best describes your work environment preference?",
    choices: [
      {
        label: "Quiet and focused",
        value: "A",
        career: "Research, Finance, Software Development",
      },
      {
        label: "Busy and collaborative",
        value: "B",
        career: "Healthcare, Education, Non-profits",
      },
      {
        label: "Flexible and creative",
        value: "C",
        career: "Creative Agencies, Fashion, Media",
      },
      {
        label: "Structured with clear goals",
        value: "D",
        career: "Business, Project Management, Engineering",
      },
    ],
  },
  {
    question: 28,
    text: "How do you feel about working in a leadership position?",
    choices: [
      {
        label: "I’m ready to take charge and lead others",
        value: "A",
        career: "Management, Consulting, Finance",
      },
      {
        label: "I prefer to contribute without managing others",
        value: "B",
        career: "Healthcare, Research, Creative Roles",
      },
      {
        label: "I would like to guide and mentor others",
        value: "C",
        career: "Teaching, Counseling, Social Work",
      },
      {
        label: "I’m open to leadership, but prefer working as part of a team",
        value: "D",
        career: "Project Management, Engineering, Operations",
      },
    ],
  },
  {
    question: 29,
    text: "How important is job stability to you?",
    choices: [
      {
        label: "Very important, I prefer long-term stability",
        value: "A",
        career: "Government, Healthcare, Education",
      },
      {
        label: "Somewhat important, I’m open to change",
        value: "B",
        career: "Technology, Freelancing, Consulting",
      },
      {
        label: "I’m open to taking risks for growth opportunities",
        value: "C",
        career: "Startups, Creative Industries, Entrepreneurship",
      },
      {
        label: "I prefer job stability but enjoy new challenges",
        value: "D",
        career: "Business, Project Management, Engineering",
      },
    ],
  },
  {
    question: 30,
    text: "Which of these skills do you most want to develop?",
    choices: [
      {
        label: "Technical skills and knowledge",
        value: "A",
        career: "Technology, Engineering, Research",
      },
      {
        label: "Empathy and communication skills",
        value: "B",
        career: "Healthcare, Counseling, Sales",
      },
      {
        label: "Creativity and artistic expression",
        value: "C",
        career: "Arts, Design, Media",
      },
      {
        label: "Leadership and management skills",
        value: "D",
        career: "Management, Business Operations",
      },
    ],
  },
  {
    question: 31,
    text: "How do you prefer to give back to your community?",
    choices: [
      {
        label: "By solving technical problems or creating innovations",
        value: "A",
        career: "Technology, Engineering, Research",
      },
      {
        label: "By helping others directly through service or care",
        value: "B",
        career: "Healthcare, Social Work, Non-profits",
      },
      {
        label: "By sharing my creative work or artistic expression",
        value: "C",
        career: "Art, Design, Marketing",
      },
      {
        label: "By improving business practices or efficiency",
        value: "D",
        career: "Business, Consulting, Operations",
      },
    ],
  },
  {
    question: 32,
    text: "How important is financial compensation in your career choice?",
    choices: [
      {
        label: "Very important, I want to earn well",
        value: "A",
        career: "Finance, Consulting, Technology",
      },
      {
        label: "Moderately important, but work-life balance is key",
        value: "B",
        career: "Healthcare, Education, Social Work",
      },
      {
        label:
          "Not a primary factor, I’m more interested in doing meaningful work",
        value: "C",
        career: "Non-profit, Arts, Counseling",
      },
      {
        label:
          "Important, but I also value a creative and fulfilling environment",
        value: "D",
        career: "Creative Industries, Design, Entertainment",
      },
    ],
  },
  {
    question: 33,
    text: "How do you typically approach problem-solving?",
    choices: [
      {
        label:
          "By analyzing the problem logically and looking for data-driven solutions",
        value: "A",
        career: "Finance, Technology, Engineering",
      },
      {
        label:
          "By discussing it with others and considering everyone’s perspective",
        value: "B",
        career: "Healthcare, Social Work, Education",
      },
      {
        label: "By coming up with a creative, outside-the-box solution",
        value: "C",
        career: "Design, Arts, Advertising",
      },
      {
        label:
          "By breaking it down into smaller tasks and creating a step-by-step plan",
        value: "D",
        career: "Project Management, Business Operations",
      },
    ],
  },
  {
    question: 34,
    text: "What role does technology play in your work preferences?",
    choices: [
      {
        label: "It’s essential, I enjoy working with technology regularly",
        value: "A",
        career: "Technology, Software Engineering, Data Science",
      },
      {
        label: "It’s important, but not a primary focus",
        value: "B",
        career: "Healthcare, Education, Social Work",
      },
      {
        label: "I prefer working in more traditional or creative roles",
        value: "C",
        career: "Art, Design, Media",
      },
      {
        label: "I can adapt to technology, but prefer hands-on work",
        value: "D",
        career: "Manufacturing, Engineering, Business",
      },
    ],
  },
  {
    question: 35,
    text: "How do you feel about working on a team?",
    choices: [
      {
        label: "I prefer working in teams where collaboration is key",
        value: "A",
        career: "Healthcare, Education, Technology",
      },
      {
        label: "I enjoy working independently but am open to teamwork",
        value: "B",
        career: "Freelancing, Research, Technology",
      },
      {
        label: "I like to lead teams and help others grow",
        value: "C",
        career: "Management, Business, Consulting",
      },
      {
        label:
          "I enjoy a mixture of solo and team tasks depending on the project",
        value: "D",
        career: "Creative Agencies, Design, Media",
      },
    ],
  },
  {
    question: 36,
    text: "What is your preferred method of learning new skills?",
    choices: [
      {
        label: "Formal education such as workshops or courses",
        value: "A",
        career: "Academia, Engineering, Technology",
      },
      {
        label: "Self-directed learning and hands-on practice",
        value: "B",
        career: "Creative Industries, Freelancing, Tech",
      },
      {
        label: "Mentoring and learning from others in a practical setting",
        value: "C",
        career: "Healthcare, Education, Social Work",
      },
      {
        label: "On-the-job training and project-based learning",
        value: "D",
        career: "Business, Consulting, Project Management",
      },
    ],
  },
  {
    question: 37,
    text: "Which of these traits do you consider most important in your career?",
    choices: [
      {
        label: "Innovation and problem-solving",
        value: "A",
        career: "Technology, Engineering, Research",
      },
      {
        label: "Empathy and social impact",
        value: "B",
        career: "Healthcare, Counseling, Non-profit",
      },
      {
        label: "Creativity and artistic expression",
        value: "C",
        career: "Arts, Design, Media",
      },
      {
        label: "Leadership and organizational efficiency",
        value: "D",
        career: "Business, Operations, Project Management",
      },
    ],
  },
  {
    question: 38,
    text: "How do you feel about working with data?",
    choices: [
      {
        label: "I love analyzing data and extracting meaningful insights",
        value: "A",
        career: "Data Science, Analytics, Finance",
      },
      {
        label: "I’m comfortable with data but prefer working with people",
        value: "B",
        career: "Healthcare, Education, Social Work",
      },
      {
        label: "I prefer working with qualitative data or creative concepts",
        value: "C",
        career: "Marketing, Design, Arts",
      },
      {
        label:
          "I prefer working with data in a more structured, organizational context",
        value: "D",
        career: "Operations, Business, Project Management",
      },
    ],
  },
  {
    question: 39,
    text: "Which of the following is most important in your job?",
    choices: [
      {
        label: "Solving complex technical challenges",
        value: "A",
        career: "Technology, Engineering, Research",
      },
      {
        label: "Providing personal care and support to others",
        value: "B",
        career: "Healthcare, Social Work, Education",
      },
      {
        label: "Creating and expressing new ideas",
        value: "C",
        career: "Design, Arts, Entertainment",
      },
      {
        label: "Achieving business goals and optimizing processes",
        value: "D",
        career: "Business, Project Management, Operations",
      },
    ],
  },
  {
    question: 40,
    text: "Which of these best describes your career goals?",
    choices: [
      {
        label: "Become an expert or thought leader in a technical field",
        value: "A",
        career: "Technology, Engineering, Data Science",
      },
      {
        label: "Make a significant social impact and improve lives",
        value: "B",
        career: "Healthcare, Social Work, Non-profit",
      },
      {
        label: "Create and innovate in the world of art or design",
        value: "C",
        career: "Arts, Fashion, Marketing",
      },
      {
        label: "Lead and grow successful teams or businesses",
        value: "D",
        career: "Business, Consulting, Project Management",
      },
    ],
  },
];

export default CareerPaths;
