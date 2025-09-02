export interface Agent {
  id: number;
  name: string;
  category: string;
  description: string;
  fullDescription: string;
  features: string[];
  price: number;
  tags: string[];
  rating: number;
  reviewCount: number;
  image: string;
  icon: string;
  valueProposition: string;
  problemStatement: string;
  solution: string;
  result: string;
  businessHighlights: {
    icon: string;
    text: string;
  }[];
  integrations: string[];
  trustIndicator: string;
  caseExample: string;
  media: {
    images: string[];
    videos: string[];
    demos: { title: string; url: string; thumbnail: string }[];
  };
  reviews: {
    id: number;
    author: string;
    company: string;
    rating: number;
    comment: string;
    date: string;
    verified: boolean;
  }[];
  implementation: {
    timeline: string;
    phases: { name: string; duration: string; description: string }[];
    support: string;
  };
  techStack: {
    primary: string[];
    integrations: string[];
    infrastructure: string[];
  };
}

export const categories = [
  { id: 'sales', name: 'Sales', icon: 'TrendingUp' },
  { id: 'hr', name: 'HR & Recruiting', icon: 'Users' },
  { id: 'healthcare', name: 'Healthcare', icon: 'Heart' },
  { id: 'finance', name: 'Finance', icon: 'DollarSign' },
  { id: 'support', name: 'Customer Support', icon: 'Headphones' },
  { id: 'marketing', name: 'Marketing', icon: 'Megaphone' },
  { id: 'legal', name: 'Legal', icon: 'Scale' },
  { id: 'education', name: 'Education', icon: 'GraduationCap' },
];

export const agents: Agent[] = [
  {
    id: 1,
    name: "SalesAI Closer",
    category: "sales",
    description: "Automates lead qualification, analyzes client responses, and generates personalized closing scripts.",
    fullDescription: "SalesAI Closer is a sophisticated sales automation agent that revolutionizes your sales process. It intelligently qualifies leads by analyzing communication patterns, behavioral data, and engagement metrics. The agent generates highly personalized closing scripts based on client psychology profiles and past successful interactions.",
    features: [
      "Advanced lead scoring and qualification",
      "Personalized script generation",
      "Real-time conversation analysis", 
      "CRM integration support",
      "Performance analytics dashboard"
    ],
    price: 299,
    tags: ["automation", "lead-generation", "CRM"],
    rating: 4.8,
    reviewCount: 127,
    image: "/api/placeholder/300/200",
    icon: "🎯",
    valueProposition: "Close deals 30% faster. Save 40+ hours per sales rep monthly.",
    problemStatement: "Sales teams waste countless hours on manual lead qualification and struggle with inconsistent closing techniques.",
    solution: "Our AI agent automates lead scoring, analyzes prospect behavior, and generates personalized closing scripts in real-time.",
    result: "20-30% increase in revenue within 3 months with proven ROI.",
    businessHighlights: [
      { icon: "⏱", text: "Saves 40+ hours/month per rep" },
      { icon: "📈", text: "+30% faster closing cycle" },
      { icon: "💰", text: "ROI proven within 90 days" }
    ],
    integrations: ["Salesforce", "HubSpot", "Pipedrive", "Slack"],
    trustIndicator: "Trusted by 120+ businesses worldwide",
    caseExample: "B2B SaaS company → 27% more closed deals in Q2",
    media: {
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop&auto=format",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop&auto=format", 
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=450&fit=crop&auto=format"
      ],
      videos: [],
      demos: [
        { title: "Lead Qualification Demo", url: "#", thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=225&fit=crop&auto=format" },
        { title: "Script Generation Walkthrough", url: "#", thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=225&fit=crop&auto=format" }
      ]
    },
    reviews: [
      {
        id: 1,
        author: "Sarah Johnson",
        company: "TechFlow Solutions",
        rating: 5,
        comment: "SalesAI Closer transformed our sales process. We're closing deals 40% faster and our reps are much more productive.",
        date: "2024-01-15",
        verified: true
      },
      {
        id: 2,
        author: "Mike Chen",
        company: "Global Sales Corp",
        rating: 5,
        comment: "The personalized scripts are incredibly effective. Our conversion rate increased by 35% in just two months.",
        date: "2024-01-08",
        verified: true
      }
    ],
    implementation: {
      timeline: "2-4 weeks full deployment",
      phases: [
        { name: "Setup & Integration", duration: "3-5 days", description: "Connect to existing CRM and configure initial settings" },
        { name: "AI Training", duration: "5-7 days", description: "Train the AI on your sales data and processes" },
        { name: "Team Training", duration: "2-3 days", description: "Train your sales team on the new AI tools" },
        { name: "Full Launch", duration: "1-2 days", description: "Go live with full agent capabilities" }
      ],
      support: "24/7 implementation support with dedicated specialist"
    },
    techStack: {
      primary: ["ChatGPT-4", "Claude 3", "Gemini Pro"],
      integrations: ["N8N", "Make.com", "Zapier"],
      infrastructure: ["AWS", "Azure", "Google Cloud"]
    }
  },
  {
    id: 2,
    name: "HR Talent Scout",
    category: "hr",
    description: "AI-powered recruitment agent that screens candidates, schedules interviews, and matches skills.",
    fullDescription: "HR Talent Scout streamlines your entire recruitment process with advanced AI capabilities. It automatically screens resumes, conducts preliminary interviews via chat, and provides detailed candidate assessments.",
    features: [
      "Automated resume screening",
      "AI-powered candidate interviews", 
      "Skills assessment and scoring",
      "Interview scheduling automation",
      "Bias-free candidate evaluation"
    ],
    price: 449,
    tags: ["recruitment", "HR", "automation"],
    rating: 4.9,
    reviewCount: 89,
    image: "/api/placeholder/300/200",
    icon: "👥",
    valueProposition: "Reduce hiring time by 60%. Screen 10x more candidates efficiently.",
    problemStatement: "HR teams spend weeks manually reviewing resumes and conducting initial screenings, leading to delayed hires.",
    solution: "Our AI agent automatically screens candidates, conducts preliminary interviews, and ranks applicants based on your criteria.",
    result: "60% faster time-to-hire with 3x higher candidate satisfaction scores.",
    businessHighlights: [
      { icon: "⏰", text: "60% faster hiring process" },
      { icon: "📊", text: "10x more candidates screened" },
      { icon: "🎯", text: "85% better candidate match rate" }
    ],
    integrations: ["LinkedIn", "Indeed", "BambooHR", "Workday"],
    trustIndicator: "Used by 200+ HR teams globally",
    caseExample: "Tech startup → Filled 15 positions in 3 weeks vs. 3 months",
    media: {
      images: [
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=450&fit=crop&auto=format", 
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=450&fit=crop&auto=format"
      ],
      videos: [],
      demos: [
        { title: "Resume Screening Demo", url: "#", thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=225&fit=crop&auto=format" }
      ]
    },
    reviews: [
      {
        id: 1,
        author: "Jennifer Wu",
        company: "TechCorp HR",
        rating: 5,
        comment: "Cut our hiring time in half while improving candidate quality. The AI interviews are incredibly thorough.",
        date: "2024-01-10",
        verified: true
      }
    ],
    implementation: {
      timeline: "1-3 weeks deployment",
      phases: [
        { name: "ATS Integration", duration: "2-3 days", description: "Connect to your existing HR systems" },
        { name: "AI Calibration", duration: "3-5 days", description: "Train AI on your hiring criteria and company culture" },
        { name: "Team Onboarding", duration: "2 days", description: "Train HR team on new workflow and tools" }
      ],
      support: "Dedicated HR specialist for setup and ongoing optimization"
    },
    techStack: {
      primary: ["ChatGPT-4", "Claude 3"],
      integrations: ["N8N", "Zapier", "Make.com"],
      infrastructure: ["AWS", "Microsoft Azure"]
    }
  },
  {
    id: 3,
    name: "Healthcare Assistant",
    category: "healthcare",
    description: "AI-powered patient interaction agent that handles inquiries, schedules appointments, and provides medical guidance.",
    fullDescription: "Healthcare Assistant revolutionizes patient care with intelligent automation. It manages patient inquiries 24/7, schedules appointments efficiently, and provides preliminary medical guidance based on symptoms and health data.",
    features: [
      "24/7 patient inquiry handling",
      "Intelligent appointment scheduling", 
      "Symptom analysis and triage",
      "Medical record integration",
      "Multilingual patient support"
    ],
    price: 399,
    tags: ["healthcare", "patient-care", "scheduling"],
    rating: 4.9,
    reviewCount: 156,
    image: "/api/placeholder/300/200",
    icon: "🏥",
    valueProposition: "Process 3x more patient inquiries. Reduce wait times by 50%.",
    problemStatement: "Healthcare providers struggle with overwhelming patient inquiries and inefficient appointment scheduling.",
    solution: "Our AI assistant handles patient communications, schedules appointments intelligently, and provides instant medical guidance.",
    result: "50% reduction in patient wait times with 3x increase in inquiry processing capacity.",
    businessHighlights: [
      { icon: "🏥", text: "3x more patients served daily" },
      { icon: "⏱", text: "50% reduced wait times" },
      { icon: "📋", text: "90% appointment accuracy rate" }
    ],
    integrations: ["Epic", "Cerner", "Allscripts", "NextGen"],
    trustIndicator: "HIPAA compliant • Used by 80+ healthcare facilities",
    caseExample: "Regional hospital → 200% increase in patient satisfaction scores",
    media: {
      images: [
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=450&fit=crop&auto=format",
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=450&fit=crop&auto=format"
      ],
      videos: [],
      demos: [
        { title: "Patient Inquiry Demo", url: "#", thumbnail: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=225&fit=crop&auto=format" }
      ]
    },
    reviews: [
      {
        id: 1,
        author: "Dr. Amanda Foster",
        company: "Regional Medical Center",
        rating: 5,
        comment: "Transformed our patient experience. The AI handles routine inquiries perfectly, freeing up our staff for complex cases.",
        date: "2024-01-12",
        verified: true
      }
    ],
    implementation: {
      timeline: "2-4 weeks deployment",
      phases: [
        { name: "EMR Integration", duration: "3-5 days", description: "Connect to existing medical record systems" },
        { name: "HIPAA Compliance Setup", duration: "2-3 days", description: "Configure security and privacy protocols" },
        { name: "Staff Training", duration: "3-4 days", description: "Train medical staff on AI assistant workflow" },
        { name: "Patient Rollout", duration: "1-2 days", description: "Launch patient-facing features" }
      ],
      support: "24/7 healthcare specialist support with medical compliance oversight"
    },
    techStack: {
      primary: ["ChatGPT-4", "Claude 3", "Med-PaLM"],
      integrations: ["N8N", "Zapier", "HL7 FHIR"],
      infrastructure: ["AWS Healthcare", "Microsoft Azure Healthcare"]
    }
  }
];