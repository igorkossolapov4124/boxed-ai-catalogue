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
    image: "/api/placeholder/300/200"
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
    image: "/api/placeholder/300/200"
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
    image: "/api/placeholder/300/200"
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
    image: "/api/placeholder/300/200"
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
    image: "/api/placeholder/300/200"
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
    image: "/api/placeholder/300/200"
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
    image: "/api/placeholder/300/200"
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
    image: "/api/placeholder/300/200"
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
    image: "/api/placeholder/300/200"
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
    image: "/api/placeholder/300/200"
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
    image: "/api/placeholder/300/200"
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
    image: "/api/placeholder/300/200"
  }
];