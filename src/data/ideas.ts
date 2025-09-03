export interface Idea {
  id: number;
  slug: string;
  title: string;
  outcome: string;
  category: string;
  description: string;
  thumbnail: string;
  benefits: string[];
  tags: string[];
  stack: string[];
  json: {
    price: number;
    id: string;
  };
  caseStudy: {
    problem: string;
    beforeAfter: string;
    demo: string;
    stackUsed: string[];
  };
  integration: {
    basePrice: number;
    deliveryDays: number;
  };
}

export const categories = [
  { id: 'sales', name: 'Sales', icon: 'TrendingUp' },
  { id: 'hr', name: 'HR', icon: 'Users' },
  { id: 'healthcare', name: 'Healthcare', icon: 'Heart' },
  { id: 'operations', name: 'Operations', icon: 'Settings' },
];

export const taskTags = [
  'lead-generation',
  'recruiting', 
  'patient-care',
  'reporting',
  'support',
  'billing'
];

export const stackTags = [
  'n8n',
  'Make',
  'Zapier',
  'Slack',
  'Gmail',
  'Notion',
  'HubSpot',
  'Salesforce',
  'Epic',
  'LinkedIn',
  'BambooHR'
];

export const ideas: Idea[] = [
  {
    id: 1,
    slug: "sales-ai-closer",
    title: "AI Sales Closer",
    outcome: "+27% closed deals in 2 months",
    category: "sales",
    description: "Automate lead scoring, follow-ups, and generate personalized closing scripts in real-time.",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&auto=format",
    benefits: [
      "Saves 40+ hours/rep monthly",
      "Auto lead scoring & follow-ups", 
      "Real-time closing scripts"
    ],
    tags: ["lead-generation", "support"],
    stack: ["HubSpot", "Salesforce", "n8n"],
    json: {
      price: 19,
      id: "json_sales_closer_v1"
    },
    caseStudy: {
      problem: "Sales teams waste countless hours on manual lead qualification and struggle with inconsistent closing techniques.",
      beforeAfter: "Before: 45% close rate, 8 hours/week per lead. After: 72% close rate, 3 hours/week per lead.",
      demo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop&auto=format",
      stackUsed: ["HubSpot", "Salesforce", "n8n", "OpenAI"]
    },
    integration: {
      basePrice: 500,
      deliveryDays: 14
    }
  },
  {
    id: 2,
    slug: "hr-talent-scout", 
    title: "HR Talent Scout",
    outcome: "-60% time-to-hire, 3× candidate throughput",
    category: "hr",
    description: "Automated screening, scheduling, and structured interview summaries with ATS sync.",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop&auto=format",
    benefits: [
      "Auto screening + scheduling",
      "Structured interview summaries",
      "ATS sync"
    ],
    tags: ["recruiting"],
    stack: ["LinkedIn", "BambooHR", "Make"],
    json: {
      price: 29,
      id: "json_hr_scout_v1"
    },
    caseStudy: {
      problem: "HR teams spend weeks manually reviewing resumes and conducting initial screenings, leading to delayed hires.",
      beforeAfter: "Before: 6 weeks avg. hire time, 50 candidates screened. After: 2.4 weeks avg. hire time, 150 candidates screened.",
      demo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=450&fit=crop&auto=format",
      stackUsed: ["LinkedIn", "BambooHR", "Make", "OpenAI"]
    },
    integration: {
      basePrice: 750,
      deliveryDays: 10
    }
  },
  {
    id: 3,
    slug: "healthcare-assistant",
    title: "Healthcare Assistant", 
    outcome: "3× more patient inquiries processed",
    category: "healthcare",
    description: "Smart triage, scheduling, and patient communication with audit-ready logs.",
    thumbnail: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop&auto=format",
    benefits: [
      "Smart triage & scheduling",
      "Wait times reduced by 50%",
      "Audit-ready logs"
    ],
    tags: ["patient-care", "support"],
    stack: ["Epic", "NextGen", "Zapier"],
    json: {
      price: 39,
      id: "json_health_assistant_v1"
    },
    caseStudy: {
      problem: "Healthcare providers struggle with overwhelming patient inquiries and inefficient appointment scheduling.",
      beforeAfter: "Before: 100 calls/day handled, 45min avg. wait. After: 300 calls/day handled, 18min avg. wait.",
      demo: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=450&fit=crop&auto=format",
      stackUsed: ["Epic", "NextGen", "Zapier", "OpenAI"]
    },
    integration: {
      basePrice: 1200,
      deliveryDays: 21
    }
  },
  {
    id: 4,
    slug: "operations-reporter",
    title: "Operations Reporter",
    outcome: "90% reduction in manual reporting time",
    category: "operations", 
    description: "Automated data collection, analysis, and executive dashboard generation.",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&auto=format",
    benefits: [
      "Automated data collection",
      "Real-time executive dashboards", 
      "Cross-platform integration"
    ],
    tags: ["reporting"],
    stack: ["Notion", "Slack", "n8n"],
    json: {
      price: 24,
      id: "json_ops_reporter_v1"
    },
    caseStudy: {
      problem: "Operations teams spend hours weekly compiling reports from multiple systems manually.",
      beforeAfter: "Before: 12 hours/week manual reporting. After: 1.2 hours/week report validation.",
      demo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop&auto=format",
      stackUsed: ["Notion", "Slack", "n8n", "Google Sheets"]
    },
    integration: {
      basePrice: 600,
      deliveryDays: 7
    }
  }
];