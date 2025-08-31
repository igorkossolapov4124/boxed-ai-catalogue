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
  media?: {
    images: string[];
    videos: string[];
    demos: { title: string; url: string; thumbnail: string }[];
  };
  reviews?: {
    id: number;
    author: string;
    company: string;
    rating: number;
    comment: string;
    date: string;
    verified: boolean;
  }[];
  implementation?: {
    timeline: string;
    phases: { name: string; duration: string; description: string }[];
    support: string;
  };
  techStack?: {
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
        "/api/placeholder/800/450",
        "/api/placeholder/800/450", 
        "/api/placeholder/800/450"
      ],
      videos: [
        "/api/placeholder/video/demo1.mp4",
        "/api/placeholder/video/demo2.mp4"
      ],
      demos: [
        { title: "Lead Qualification Demo", url: "/api/placeholder/video/qualification.mp4", thumbnail: "/api/placeholder/400/225" },
        { title: "Script Generation Walkthrough", url: "/api/placeholder/video/scripts.mp4", thumbnail: "/api/placeholder/400/225" }
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
      },
      {
        id: 3,
        author: "Lisa Rodriguez",
        company: "StartupX",
        rating: 4,
        comment: "Great tool for scaling our sales operations. The lead scoring is very accurate and saves us tons of time.",
        date: "2023-12-22",
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
      primary: ["GPT-4", "Claude 3", "Gemini Pro"],
      integrations: ["N8N", "Make.com", "Zapier"],
      infrastructure: ["AWS", "Azure", "Google Cloud"]
    }
  },
  {
    id: 2,
    name: "HR Talent Scout",
    category: "hr",
    description: "AI-powered recruitment agent that screens candidates, schedules interviews, and matches skills.",
    fullDescription: "HR Talent Scout streamlines your entire recruitment process with advanced AI capabilities. It automatically screens resumes, conducts preliminary interviews via chat, and provides detailed candidate assessments. The agent learns from your hiring preferences to improve match quality over time.",
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
    problemStatement: "HR teams spend weeks manually reviewing resumes and conducting initial screenings, leading to delayed hires and missed talent.",
    solution: "Our AI agent automatically screens candidates, conducts preliminary interviews, and ranks applicants based on your criteria.",
    result: "60% faster time-to-hire with 3x higher candidate satisfaction scores.",
    businessHighlights: [
      { icon: "⏰", text: "60% faster hiring process" },
      { icon: "📊", text: "10x more candidates screened" },
      { icon: "🎯", text: "85% better candidate match rate" }
    ],
    integrations: ["LinkedIn", "Indeed", "BambooHR", "Workday"],
    trustIndicator: "Used by 200+ HR teams globally",
    caseExample: "Tech startup → Filled 15 positions in 3 weeks vs. 3 months"
  },
  {
    id: 3,
    name: "HealthCare Assistant",
    category: "healthcare",
    description: "Medical AI agent for patient triage, appointment scheduling, and basic health consultations.",
    fullDescription: "HealthCare Assistant provides 24/7 patient support with medical-grade AI capabilities. It performs intelligent patient triage, schedules appointments based on urgency, and conducts preliminary health assessments. HIPAA compliant and trained on medical protocols.",
    features: [
      "Patient triage and assessment",
      "Appointment scheduling optimization",
      "Symptom analysis and recommendations",
      "HIPAA compliant data handling",
      "Integration with medical records"
    ],
    price: 599,
    tags: ["healthcare", "medical", "triage"],
    rating: 4.7,
    reviewCount: 156,
    image: "/api/placeholder/300/200",
    icon: "🏥",
    valueProposition: "24/7 patient support. Reduce wait times by 40%.",
    problemStatement: "Healthcare facilities struggle with patient triage bottlenecks and appointment scheduling inefficiencies, leading to longer wait times.",
    solution: "AI-powered triage system that assesses patient urgency, schedules appointments intelligently, and provides preliminary consultations.",
    result: "40% reduction in wait times and 25% increase in patient satisfaction.",
    businessHighlights: [
      { icon: "🕐", text: "24/7 availability" },
      { icon: "📉", text: "40% shorter wait times" },
      { icon: "🔒", text: "HIPAA compliant" }
    ],
    integrations: ["Epic", "Cerner", "Allscripts", "Athenahealth"],
    trustIndicator: "Trusted by 50+ healthcare facilities",
    caseExample: "Regional clinic → 40% fewer no-shows, $200K annual savings"
  },
  {
    id: 4,
    name: "FinanceBot Pro",
    category: "finance",
    description: "Financial analysis agent for budgeting, expense tracking, and investment recommendations.",
    fullDescription: "FinanceBot Pro is your personal financial advisor powered by advanced AI algorithms. It analyzes spending patterns, creates optimized budgets, and provides personalized investment recommendations based on your financial goals and risk tolerance.",
    features: [
      "Automated expense categorization",
      "Personalized budget optimization",
      "Investment portfolio analysis",
      "Real-time financial alerts",
      "Tax optimization suggestions"
    ],
    price: 379,
    tags: ["finance", "budgeting", "investment"],
    rating: 4.6,
    reviewCount: 203,
    image: "/api/placeholder/300/200",
    icon: "💼",
    valueProposition: "Optimize budgets automatically. Save 15-25% on expenses.",
    problemStatement: "Finance teams waste hours on manual expense categorization and struggle to identify cost-saving opportunities across departments.",
    solution: "AI-driven financial analysis that automatically categorizes expenses, identifies savings opportunities, and optimizes budget allocation.",
    result: "15-25% cost reduction with automated financial insights and recommendations.",
    businessHighlights: [
      { icon: "💰", text: "15-25% cost reduction" },
      { icon: "📈", text: "Real-time budget insights" },
      { icon: "🎯", text: "Automated tax optimization" }
    ],
    integrations: ["QuickBooks", "Xero", "SAP", "Oracle Financials"],
    trustIndicator: "Manages $500M+ in corporate budgets",
    caseExample: "Manufacturing company → $2.5M saved annually"
  },
  {
    id: 5,
    name: "Support Hero",
    category: "support",
    description: "24/7 customer support agent with multilingual capabilities and issue resolution.",
    fullDescription: "Support Hero transforms your customer service with AI-powered support that never sleeps. It handles common inquiries, escalates complex issues appropriately, and maintains consistent service quality across all channels.",
    features: [
      "24/7 automated customer support",
      "Multilingual conversation support",
      "Smart ticket routing and escalation",
      "Customer sentiment analysis",
      "Integration with help desk systems"
    ],
    price: 329,
    tags: ["support", "multilingual", "automation"],
    rating: 4.8,
    reviewCount: 267,
    image: "/api/placeholder/300/200",
    icon: "🎧",
    valueProposition: "24/7 support coverage. Resolve 80% of tickets instantly.",
    problemStatement: "Support teams struggle with high ticket volumes, inconsistent response times, and limited multilingual capabilities.",
    solution: "AI-powered support agent that handles inquiries 24/7, provides instant responses, and escalates complex issues appropriately.",
    result: "80% faster resolution times with 90% customer satisfaction rate.",
    businessHighlights: [
      { icon: "⚡", text: "80% instant ticket resolution" },
      { icon: "🌍", text: "50+ language support" },
      { icon: "📞", text: "24/7 availability" }
    ],
    integrations: ["Zendesk", "Freshdesk", "Intercom", "ServiceNow"],
    trustIndicator: "Handles 1M+ support tickets monthly",
    caseExample: "E-commerce platform → 75% reduction in support costs"
  },
  {
    id: 6,
    name: "Marketing Genius",
    category: "marketing",
    description: "Content creation and campaign optimization agent for social media and digital marketing.",
    fullDescription: "Marketing Genius is your creative AI partner that generates compelling marketing content, optimizes campaigns across platforms, and analyzes performance metrics to maximize ROI. It understands brand voice and adapts content accordingly.",
    features: [
      "Automated content generation",
      "Multi-platform campaign management",
      "A/B testing and optimization",
      "Audience targeting and segmentation",
      "Performance analytics and reporting"
    ],
    price: 399,
    tags: ["marketing", "content", "social-media"],
    rating: 4.7,
    reviewCount: 194,
    image: "/api/placeholder/300/200",
    icon: "📢",
    valueProposition: "Generate 10x more content. Increase engagement by 150%.",
    problemStatement: "Marketing teams struggle to create consistent, high-quality content at scale while maintaining brand voice across platforms.",
    solution: "AI content generator that creates on-brand marketing materials, optimizes campaigns, and provides real-time performance insights.",
    result: "150% increase in engagement rates with 5x faster content production.",
    businessHighlights: [
      { icon: "🚀", text: "10x faster content creation" },
      { icon: "📊", text: "150% higher engagement" },
      { icon: "💡", text: "AI-powered insights" }
    ],
    integrations: ["Meta Ads", "Google Ads", "LinkedIn", "Twitter"],
    trustIndicator: "Powers 300+ marketing campaigns",
    caseExample: "SaaS startup → 400% increase in qualified leads"
  },
  {
    id: 7,
    name: "Legal Research Assistant",
    category: "legal",
    description: "AI-powered legal research and document analysis for law firms and legal professionals.",
    fullDescription: "Legal Research Assistant accelerates legal work with AI-powered document analysis, case law research, and contract review. It helps legal professionals quickly find relevant precedents and identify potential issues in legal documents.",
    features: [
      "Automated case law research",
      "Contract analysis and review",
      "Legal document summarization",
      "Precedent identification",
      "Compliance checking"
    ],
    price: 699,
    tags: ["legal", "research", "contracts"],
    rating: 4.9,
    reviewCount: 78,
    image: "/api/placeholder/300/200",
    icon: "⚖️",
    valueProposition: "Research 90% faster. Save 50+ hours per case.",
    problemStatement: "Legal professionals spend excessive time on document review and case research, delaying client deliverables and increasing costs.",
    solution: "AI-powered legal research that analyzes contracts, finds relevant precedents, and summarizes complex legal documents instantly.",
    result: "90% faster research with 95% accuracy in precedent identification.",
    businessHighlights: [
      { icon: "⚡", text: "90% faster research" },
      { icon: "🎯", text: "95% accuracy rate" },
      { icon: "📚", text: "Access to 50M+ cases" }
    ],
    integrations: ["Westlaw", "LexisNexis", "Bloomberg Law", "Clio"],
    trustIndicator: "Used by 100+ law firms globally",
    caseExample: "Corporate law firm → 60% reduction in research time"
  },
  {
    id: 8,
    name: "EduTutor AI",
    category: "education",
    description: "Personalized learning assistant that adapts to student needs and provides interactive lessons.",
    fullDescription: "EduTutor AI creates personalized learning experiences tailored to each student's pace and learning style. It provides interactive lessons, tracks progress, and adapts difficulty levels to ensure optimal learning outcomes.",
    features: [
      "Personalized learning paths",
      "Interactive lesson delivery",
      "Progress tracking and analytics",
      "Adaptive difficulty adjustment",
      "Multi-subject support"
    ],
    price: 249,
    tags: ["education", "tutoring", "personalized"],
    rating: 4.8,
    reviewCount: 312,
    image: "/api/placeholder/300/200",
    icon: "🎓",
    valueProposition: "Personalized learning at scale. Improve grades by 35%.",
    problemStatement: "Educational institutions struggle to provide personalized learning experiences for diverse student needs and learning paces.",
    solution: "AI tutor that adapts to individual learning styles, provides personalized content, and tracks progress in real-time.",
    result: "35% improvement in student grades with 90% engagement rate.",
    businessHighlights: [
      { icon: "📈", text: "35% better grades" },
      { icon: "👥", text: "Scales to 1000+ students" },
      { icon: "🎯", text: "90% engagement rate" }
    ],
    integrations: ["Canvas", "Blackboard", "Moodle", "Google Classroom"],
    trustIndicator: "Educating 50,000+ students worldwide",
    caseExample: "University → 40% reduction in dropout rates"
  },
  {
    id: 9,
    name: "Data Analysis Pro",
    category: "finance",
    description: "Advanced data analytics agent for business intelligence and predictive modeling.",
    fullDescription: "Data Analysis Pro transforms raw data into actionable insights with advanced AI analytics. It performs complex statistical analysis, creates predictive models, and generates comprehensive reports with visualizations.",
    features: [
      "Advanced statistical analysis",
      "Predictive modeling and forecasting",
      "Automated report generation",
      "Data visualization creation",
      "Business intelligence insights"
    ],
    price: 549,
    tags: ["analytics", "data-science", "BI"],
    rating: 4.7,
    reviewCount: 145,
    image: "/api/placeholder/300/200",
    icon: "📊",
    valueProposition: "Turn data into decisions. Generate insights 10x faster.",
    problemStatement: "Companies struggle to extract meaningful insights from vast data sets, leading to delayed decision-making and missed opportunities.",
    solution: "AI analytics engine that processes complex data, identifies patterns, and generates actionable business insights automatically.",
    result: "10x faster data analysis with 95% accuracy in predictive modeling.",
    businessHighlights: [
      { icon: "⚡", text: "10x faster analysis" },
      { icon: "🎯", text: "95% prediction accuracy" },
      { icon: "📈", text: "Real-time insights" }
    ],
    integrations: ["Tableau", "Power BI", "Snowflake", "AWS"],
    trustIndicator: "Processes 100TB+ data monthly",
    caseExample: "Retail chain → 25% increase in revenue forecasting accuracy"
  },
  {
    id: 10,
    name: "Social Media Manager",
    category: "marketing",
    description: "Comprehensive social media management with content scheduling and engagement analysis.",
    fullDescription: "Social Media Manager handles all aspects of your social media presence. It creates engaging content, schedules posts for optimal timing, monitors engagement, and provides detailed analytics to grow your online presence.",
    features: [
      "Multi-platform content scheduling",
      "Engagement monitoring and response",
      "Hashtag optimization",
      "Influencer identification",
      "Social media analytics"
    ],
    price: 279,
    tags: ["social-media", "scheduling", "engagement"],
    rating: 4.6,
    reviewCount: 225,
    image: "/api/placeholder/300/200",
    icon: "📱",
    valueProposition: "Automate social media. Grow followers by 200%.",
    problemStatement: "Social media management is time-consuming with inconsistent posting schedules and poor engagement tracking across platforms.",
    solution: "AI social media manager that creates content, schedules posts optimally, and analyzes engagement patterns for growth.",
    result: "200% follower growth with 3x higher engagement rates.",
    businessHighlights: [
      { icon: "📈", text: "200% follower growth" },
      { icon: "🎯", text: "3x higher engagement" },
      { icon: "⏰", text: "Saves 20 hours/week" }
    ],
    integrations: ["Facebook", "Instagram", "Twitter", "LinkedIn"],
    trustIndicator: "Manages 500+ social accounts",
    caseExample: "E-commerce brand → 300% increase in social sales"
  },
  {
    id: 11,
    name: "Quality Assurance Bot",
    category: "support",
    description: "Automated testing and quality assurance agent for software applications and processes.",
    fullDescription: "Quality Assurance Bot ensures your software and processes meet the highest standards. It performs automated testing, identifies bugs, and provides detailed reports on system performance and reliability.",
    features: [
      "Automated software testing",
      "Bug detection and reporting",
      "Performance monitoring",
      "Process quality assessment",
      "Continuous integration support"
    ],
    price: 429,
    tags: ["QA", "testing", "automation"],
    rating: 4.8,
    reviewCount: 167,
    image: "/api/placeholder/300/200",
    icon: "🔍",
    valueProposition: "Catch bugs 95% faster. Reduce testing time by 70%.",
    problemStatement: "Software teams spend excessive time on manual testing, leading to delayed releases and undetected bugs in production.",
    solution: "AI-powered QA agent that automates testing workflows, detects bugs early, and ensures consistent quality standards.",
    result: "70% reduction in testing time with 95% bug detection accuracy.",
    businessHighlights: [
      { icon: "🐛", text: "95% bug detection rate" },
      { icon: "⚡", text: "70% faster testing" },
      { icon: "🛡️", text: "Zero critical bugs" }
    ],
    integrations: ["Jenkins", "GitLab", "Jira", "Selenium"],
    trustIndicator: "Tests 1000+ applications monthly",
    caseExample: "Software company → 80% reduction in production bugs"
  },
  {
    id: 12,
    name: "Inventory Optimizer",
    category: "sales",
    description: "Supply chain and inventory management agent with demand forecasting capabilities.",
    fullDescription: "Inventory Optimizer revolutionizes supply chain management with AI-powered demand forecasting and inventory optimization. It reduces costs while ensuring product availability through intelligent stock level management.",
    features: [
      "Demand forecasting and planning",
      "Automated inventory optimization",
      "Supply chain analytics",
      "Vendor management assistance",
      "Cost reduction recommendations"
    ],
    price: 479,
    tags: ["inventory", "supply-chain", "forecasting"],
    rating: 4.7,
    reviewCount: 134,
    image: "/api/placeholder/300/200",
    icon: "📦",
    valueProposition: "Reduce inventory costs by 30%. Prevent 99% of stockouts.",
    problemStatement: "Businesses struggle with inventory management, leading to excess stock, stockouts, and inefficient supply chain operations.",
    solution: "AI inventory optimizer that predicts demand, automates reordering, and optimizes stock levels across all locations.",
    result: "30% inventory cost reduction with 99% stockout prevention.",
    businessHighlights: [
      { icon: "💰", text: "30% cost reduction" },
      { icon: "📈", text: "99% stockout prevention" },
      { icon: "🎯", text: "Perfect demand forecasting" }
    ],
    integrations: ["SAP", "Oracle SCM", "NetSuite", "WMS"],
    trustIndicator: "Optimizes $2B+ inventory value",
    caseExample: "Retail chain → $5M annual savings in inventory costs"
  }
];