import { 
  Scissors, 
  GraduationCap, 
  Home, 
  Dumbbell, 
  Smile, 
  Heart, 
  Car,
  ClipboardCheck,
  Megaphone,
  BookOpen,
  Headphones,
  Calendar,
  DollarSign
} from 'lucide-react';

export interface NicheAgent {
  id: number;
  name: string;
  valueProposition: string;
  kpis: string[];
  integrations: string[];
  icon: string;
}

export interface Department {
  id: string;
  name: string;
  description: string;
  benefit: string;
  kpis: string[];
  tooltip: string[];
  icon: string;
  agents: NicheAgent[];
}

export interface Niche {
  id: string;
  name: string;
  description: string;
  icon: string;
  departments: Department[];
}

export const niches: Niche[] = [
  {
    id: 'beauty',
    name: 'Beauty',
    description: 'AI solutions for salons, spas, and beauty professionals',
    icon: 'Scissors',
    departments: [
      {
        id: 'reception',
        name: 'Reception',
        description: 'Automate bookings and customer communication',
        benefit: 'Reduce no-shows by 40% and automate scheduling',
        kpis: ['No-Shows', 'Booking Rate', 'Response Time'],
        tooltip: [
          'Automated appointment scheduling',
          'WhatsApp & Instagram booking',
          'Smart reminders and follow-ups',
          'Cancellation management',
          'Multi-channel communication'
        ],
        icon: 'Calendar',
        agents: [
          {
            id: 101,
            name: 'AI Booking Assistant',
            valueProposition: 'Auto-schedules appointments via WhatsApp, Instagram DMs, and calls',
            kpis: ['-40% no-shows', '+25% booking rate', '24/7 availability'],
            integrations: ['WhatsApp', 'Instagram', 'Calendar', 'SMS'],
            icon: '📅'
          },
          {
            id: 102,
            name: 'Smart Reminder Bot',
            valueProposition: 'Sends personalized appointment reminders and follow-ups',
            kpis: ['-50% cancellations', '+30% rebookings', 'Auto follow-ups'],
            integrations: ['SMS', 'WhatsApp', 'Email', 'Calendar'],
            icon: '⏰'
          }
        ]
      },
      {
        id: 'marketing',
        name: 'Marketing',
        description: 'Grow your customer base with AI-powered campaigns',
        benefit: 'Attract 3x more customers with automated marketing',
        kpis: ['Engagement', 'Follower Growth', 'Content Output'],
        tooltip: [
          'Social media content creation',
          'Auto-posting and scheduling',
          'Review management',
          'Customer engagement',
          'Brand reputation monitoring'
        ],
        icon: 'Megaphone',
        agents: [
          {
            id: 103,
            name: 'Social Media Manager',
            valueProposition: 'Auto-posts before/after photos, responds to comments, runs promotions',
            kpis: ['+200% engagement', '+50% followers', 'Auto-content'],
            integrations: ['Instagram', 'Facebook', 'TikTok'],
            icon: '📱'
          },
          {
            id: 104,
            name: 'Review Response AI',
            valueProposition: 'Responds to Google and Yelp reviews within minutes',
            kpis: ['+4.5★ rating', '10min response time', 'Brand reputation'],
            integrations: ['Google Business', 'Yelp', 'Facebook'],
            icon: '⭐'
          }
        ]
      },
      {
        id: 'sales',
        name: 'Sales',
        description: 'Convert leads into paying customers faster',
        benefit: 'Increase revenue by 35% with smart upselling',
        kpis: ['Revenue per Customer', 'Package Sales', 'Conversion Rate'],
        tooltip: [
          'Personalized service recommendations',
          'Smart upselling',
          'Package deals',
          'Customer segmentation',
          'Sales analytics'
        ],
        icon: 'DollarSign',
        agents: [
          {
            id: 105,
            name: 'Upsell Assistant',
            valueProposition: 'Suggests personalized service upgrades during booking',
            kpis: ['+35% revenue per customer', '+20% package sales', 'Smart recommendations'],
            integrations: ['CRM', 'POS', 'Booking System'],
            icon: '💰'
          }
        ]
      },
      {
        id: 'operations',
        name: 'Operations',
        description: 'Streamline inventory and team management',
        benefit: 'Save 15 hours/week on admin tasks',
        kpis: ['Admin Hours', 'Stockouts', 'Waste'],
        tooltip: [
          'Inventory tracking',
          'Auto-reordering',
          'Team scheduling',
          'Supply chain management',
          'Staff coordination'
        ],
        icon: 'ClipboardCheck',
        agents: [
          {
            id: 106,
            name: 'Inventory Tracker',
            valueProposition: 'Auto-tracks product usage and reorders supplies before stockouts',
            kpis: ['Zero stockouts', '-30% waste', 'Auto-reordering'],
            integrations: ['POS', 'Suppliers', 'Inventory System'],
            icon: '📦'
          }
        ]
      },
      {
        id: 'customer-experience',
        name: 'Customer Experience',
        description: 'Build loyalty and retention',
        benefit: 'Increase repeat visits by 45%',
        kpis: ['Repeat Rate', 'Referrals', 'Loyalty'],
        tooltip: [
          'Loyalty program management',
          'Personalized offers',
          'Referral rewards',
          'Customer feedback',
          'Retention campaigns'
        ],
        icon: 'Heart',
        agents: [
          {
            id: 107,
            name: 'Loyalty Program Manager',
            valueProposition: 'Automatically rewards regulars and sends personalized offers',
            kpis: ['+45% repeat customers', '+25% referrals', 'Auto rewards'],
            integrations: ['CRM', 'SMS', 'WhatsApp', 'Email'],
            icon: '🎁'
          }
        ]
      }
    ]
  },
  {
    id: 'education',
    name: 'Education',
    description: 'AI tools for schools, tutoring centers, and online courses',
    icon: 'GraduationCap',
    departments: [
      {
        id: 'admissions',
        name: 'Admissions & Enrollment',
        description: '',
        benefit: 'Increase student sign-ups with less effort',
        kpis: ['More Enrollments', 'Faster Sign-Ups'],
        tooltip: [
          'Auto-capture leads from forms + DMs',
          'Follow-ups & reminders sent for you',
          'Recover lost leads & no-shows'
        ],
        icon: 'ClipboardCheck',
        agents: [
          {
            id: 201,
            name: 'Enrollment Assistant',
            valueProposition: '+40% enrollment rate with 24/7 automated responses (Khan Academy)',
            kpis: ['+40% enrollment', '24/7 support', '-60% response time'],
            integrations: ['WhatsApp', 'Email', 'Calendar', 'CRM'],
            icon: '🎓'
          },
          {
            id: 205,
            name: 'Lead Qualifier',
            valueProposition: '+50% qualified leads through automated screening (Udacity)',
            kpis: ['+50% qualified leads', '-70% screening time', 'Better fit students'],
            integrations: ['CRM', 'Forms', 'Email', 'SMS'],
            icon: '✅'
          }
        ]
      },
      {
        id: 'marketing',
        name: 'Marketing & Outreach',
        description: '',
        benefit: 'Get more student leads every week',
        kpis: ['More Leads', 'Lower CPL'],
        tooltip: [
          'Social content & email campaigns',
          'Automated ads & tracking',
          'Local SEO for more organic leads'
        ],
        icon: 'Megaphone',
        agents: [
          {
            id: 206,
            name: 'Student Acquisition AI',
            valueProposition: '-40% cost per lead with targeted campaigns (Coursera)',
            kpis: ['-40% cost per lead', '+60% lead quality', '3x reach'],
            integrations: ['Facebook Ads', 'Google Ads', 'Email', 'Analytics'],
            icon: '🎯'
          }
        ]
      },
      {
        id: 'teaching',
        name: 'Teaching & Learning',
        description: '',
        benefit: 'Improve learning results with less work',
        kpis: ['Better Scores', 'Higher Completion'],
        tooltip: [
          'AI-assisted lesson plans & quizzes',
          'Personalized AI tutoring',
          'Faster grading & feedback'
        ],
        icon: 'BookOpen',
        agents: [
          {
            id: 203,
            name: 'AI Tutor',
            valueProposition: '+30% test scores with personalized AI tutoring (Duolingo)',
            kpis: ['+30% test scores', 'Personalized learning', '24/7 tutoring'],
            integrations: ['LMS', 'Google Classroom', 'Canvas'],
            icon: '🧑‍🏫'
          },
          {
            id: 207,
            name: 'Assessment Generator',
            valueProposition: '-80% grading time with instant feedback (edX)',
            kpis: ['-80% grading time', 'Instant feedback', 'Adaptive difficulty'],
            integrations: ['LMS', 'Google Classroom', 'Moodle'],
            icon: '📝'
          }
        ]
      },
      {
        id: 'student-support',
        name: 'Student & Parent Support',
        description: '',
        benefit: '24/7 support without extra staff',
        kpis: ['Faster Replies', 'Happier Families'],
        tooltip: [
          'Auto replies to common questions',
          'Escalation only for complex cases',
          'Proactive reminders & guidance'
        ],
        icon: 'Headphones',
        agents: [
          {
            id: 202,
            name: 'Student Q&A Bot',
            valueProposition: '-50% support tickets with instant answers (Udemy)',
            kpis: ['-50% support tickets', '24/7 availability', 'Instant answers'],
            integrations: ['LMS', 'Email', 'Slack', 'Discord'],
            icon: '💬'
          }
        ]
      },
      {
        id: 'operations',
        name: 'Operations & Scheduling',
        description: '',
        benefit: 'Save 20+ hours on admin weekly',
        kpis: ['Less Admin', 'Fewer Errors'],
        tooltip: [
          'Class & teacher scheduling',
          'Attendance & documentation',
          'Admin tasks done by AI'
        ],
        icon: 'Calendar',
        agents: [
          {
            id: 204,
            name: 'Class Scheduler',
            valueProposition: 'Zero scheduling conflicts with automated optimization (Stanford Online)',
            kpis: ['Zero conflicts', '-80% scheduling time', 'Optimal capacity'],
            integrations: ['Calendar', 'Google Workspace', 'Zoom'],
            icon: '📆'
          }
        ]
      },
      {
        id: 'finance',
        name: 'Billing & Payments',
        description: '',
        benefit: 'Get paid on time with less friction',
        kpis: ['Faster Payments', 'Fewer Issues'],
        tooltip: [
          'Automatic invoices & receipts',
          'Payment reminders & failed payment recovery',
          'Financial aid / refund handling'
        ],
        icon: 'DollarSign',
        agents: [
          {
            id: 208,
            name: 'Billing Automator',
            valueProposition: '+95% payment collection with automated reminders (Skillshare)',
            kpis: ['-60% DSO', '+95% collection', 'Zero billing errors'],
            integrations: ['Stripe', 'QuickBooks', 'Email', 'SMS'],
            icon: '💳'
          }
        ]
      }
    ]
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    description: 'AI solutions for realtors, agencies, and property managers',
    icon: 'Home',
    departments: [
      {
        id: 'lead-generation',
        name: 'Lead Generation',
        description: 'Capture and qualify property leads automatically',
        benefit: 'Generate 3x more qualified leads',
        kpis: ['Lead Volume', 'Qualification Rate', 'Response Time'],
        tooltip: [
          'Lead capture from multiple sources',
          'Automated qualification',
          'Property viewing scheduling',
          'Lead scoring',
          'Follow-up automation'
        ],
        icon: 'Home',
        agents: [
          {
            id: 301,
            name: 'Lead Qualifier',
            valueProposition: 'Instantly qualifies leads via chat and schedules property viewings',
            kpis: ['+200% lead volume', '+50% qualification rate', 'Auto-scheduling'],
            integrations: ['CRM', 'WhatsApp', 'Website Chat', 'Facebook'],
            icon: '🏠'
          }
        ]
      },
      {
        id: 'client-communication',
        name: 'Client Communication',
        description: 'Stay in touch with buyers and sellers effortlessly',
        benefit: 'Never miss a follow-up again',
        kpis: ['Response Rate', 'Follow-up Rate', 'Conversion Rate'],
        tooltip: [
          'Automated property updates',
          'Lead nurturing',
          'Personalized messaging',
          'Follow-up reminders',
          'Multi-channel communication'
        ],
        icon: 'Headphones',
        agents: [
          {
            id: 302,
            name: 'Follow-Up Assistant',
            valueProposition: 'Sends personalized property updates and checks in with leads',
            kpis: ['+60% response rate', 'Auto follow-ups', '+35% conversions'],
            integrations: ['CRM', 'Email', 'SMS', 'WhatsApp'],
            icon: '✉️'
          }
        ]
      },
      {
        id: 'marketing',
        name: 'Marketing',
        description: 'Promote listings with AI-powered campaigns',
        benefit: 'Sell properties 25% faster',
        kpis: ['Listing Views', 'Time to Sale', 'Platform Reach'],
        tooltip: [
          'Automated ad creation',
          'Multi-platform posting',
          'Property photo optimization',
          'Campaign analytics',
          'Virtual tour management'
        ],
        icon: 'Megaphone',
        agents: [
          {
            id: 303,
            name: 'Listing Promoter',
            valueProposition: 'Auto-creates and posts property ads on all major platforms',
            kpis: ['+150% listing views', '-25% time to sale', 'Multi-platform'],
            integrations: ['Zillow', 'Realtor.com', 'Facebook', 'Instagram'],
            icon: '📢'
          }
        ]
      },
      {
        id: 'operations',
        name: 'Operations',
        description: 'Manage showings and paperwork efficiently',
        benefit: 'Save 10 hours/week on admin',
        kpis: ['Admin Hours', 'No-Show Rate', 'Calendar Efficiency'],
        tooltip: [
          'Property tour scheduling',
          'Automated reminders',
          'Document management',
          'Showing coordination',
          'Calendar optimization'
        ],
        icon: 'Calendar',
        agents: [
          {
            id: 304,
            name: 'Showing Coordinator',
            valueProposition: 'Schedules property tours and sends automated reminders',
            kpis: ['-70% no-shows', 'Auto-scheduling', 'Calendar sync'],
            integrations: ['Calendar', 'CRM', 'SMS', 'Email'],
            icon: '🗓️'
          }
        ]
      }
    ]
  },
  {
    id: 'fitness',
    name: 'Fitness',
    description: 'AI tools for gyms, personal trainers, and fitness studios',
    icon: 'Dumbbell',
    departments: [
      {
        id: 'member-acquisition',
        name: 'Member Acquisition',
        description: 'Convert more trial members into paying customers',
        benefit: 'Increase memberships by 40%',
        kpis: ['Conversion Rate', 'Sign-ups', 'Trial Completion'],
        tooltip: [
          'Trial member tracking',
          'Personalized outreach',
          'Membership plan recommendations',
          'Follow-up automation',
          'Conversion optimization'
        ],
        icon: 'Dumbbell',
        agents: [
          {
            id: 401,
            name: 'Trial Conversion Bot',
            valueProposition: 'Follows up with trial members and offers personalized membership plans',
            kpis: ['+40% trial-to-member', '+30% signups', 'Auto follow-ups'],
            integrations: ['CRM', 'SMS', 'WhatsApp', 'Email'],
            icon: '🎯'
          }
        ]
      },
      {
        id: 'member-retention',
        name: 'Member Retention',
        description: 'Keep members engaged and reduce churn',
        benefit: 'Reduce churn by 35%',
        kpis: ['Churn Rate', 'Check-in Frequency', 'Engagement'],
        tooltip: [
          'Workout reminders',
          'Progress tracking',
          'Milestone celebrations',
          'Personalized motivation',
          'At-risk member alerts'
        ],
        icon: 'Heart',
        agents: [
          {
            id: 402,
            name: 'Engagement Coach',
            valueProposition: 'Sends workout reminders, tracks progress, and celebrates milestones',
            kpis: ['-35% churn', '+50% check-ins', 'Personalized motivation'],
            integrations: ['Gym Software', 'SMS', 'App', 'Wearables'],
            icon: '💪'
          }
        ]
      },
      {
        id: 'training',
        name: 'Training',
        description: 'Scale personal training with AI coaches',
        benefit: 'Train 3x more clients simultaneously',
        kpis: ['Client Capacity', 'Program Quality', 'Results'],
        tooltip: [
          'Personalized workout plans',
          'Progress monitoring',
          'Exercise form guidance',
          'Nutrition recommendations',
          'Goal tracking'
        ],
        icon: 'BookOpen',
        agents: [
          {
            id: 403,
            name: 'AI Workout Planner',
            valueProposition: 'Creates personalized workout plans based on goals and progress',
            kpis: ['3x client capacity', 'Personalized plans', '+25% results'],
            integrations: ['Training App', 'Wearables', 'Calendar'],
            icon: '📋'
          }
        ]
      },
      {
        id: 'operations',
        name: 'Operations',
        description: 'Automate class bookings and payments',
        benefit: 'Save 12 hours/week on admin',
        kpis: ['Admin Hours', 'Booking Efficiency', 'Payment Collection'],
        tooltip: [
          'Class booking automation',
          'Waitlist management',
          'Payment processing',
          'Attendance tracking',
          'Capacity optimization'
        ],
        icon: 'Calendar',
        agents: [
          {
            id: 404,
            name: 'Class Manager',
            valueProposition: 'Handles class bookings, waitlists, and automatic billing',
            kpis: ['Zero double-bookings', '+95% payment collection', 'Auto-waitlists'],
            integrations: ['Gym Software', 'Payment Gateway', 'Calendar'],
            icon: '🏋️'
          }
        ]
      }
    ]
  },
  {
    id: 'dental',
    name: 'Dental',
    description: 'AI solutions for dental practices and orthodontists',
    icon: 'Smile',
    departments: [
      {
        id: 'patient-acquisition',
        name: 'Patient Acquisition',
        description: 'Attract new patients and fill your schedule',
        benefit: 'Add 30+ new patients monthly',
        kpis: ['New Patients', 'Booking Rate', 'Conversion Rate'],
        tooltip: [
          'Insurance verification',
          'First appointment booking',
          'Patient education',
          'Lead qualification',
          '24/7 availability'
        ],
        icon: 'Smile',
        agents: [
          {
            id: 501,
            name: 'New Patient Bot',
            valueProposition: 'Answers insurance questions and books first appointments instantly',
            kpis: ['+30 patients/month', '24/7 booking', '+60% conversion'],
            integrations: ['WhatsApp', 'Website Chat', 'Calendar', 'Insurance DB'],
            icon: '🦷'
          }
        ]
      },
      {
        id: 'appointment-management',
        name: 'Appointment Management',
        description: 'Keep your schedule full and reduce no-shows',
        benefit: 'Reduce no-shows by 55%',
        kpis: ['No-Show Rate', 'Utilization', 'Rescheduling'],
        tooltip: [
          'Automated reminders',
          'Rescheduling automation',
          'Gap filling',
          'Waitlist management',
          'Calendar optimization'
        ],
        icon: 'Calendar',
        agents: [
          {
            id: 502,
            name: 'Appointment Optimizer',
            valueProposition: 'Sends reminders, reschedules cancellations, fills gaps automatically',
            kpis: ['-55% no-shows', '+90% utilization', 'Auto-rescheduling'],
            integrations: ['Practice Software', 'SMS', 'Email', 'Calendar'],
            icon: '📅'
          }
        ]
      },
      {
        id: 'patient-care',
        name: 'Patient Care',
        description: 'Improve treatment follow-through and satisfaction',
        benefit: 'Increase treatment acceptance by 40%',
        kpis: ['Treatment Acceptance', 'Referrals', 'Outcomes'],
        tooltip: [
          'Treatment education',
          'Post-visit follow-ups',
          'Patient questions',
          'Care instructions',
          'Outcome tracking'
        ],
        icon: 'Heart',
        agents: [
          {
            id: 503,
            name: 'Treatment Follow-Up AI',
            valueProposition: 'Educates patients about treatments and answers post-visit questions',
            kpis: ['+40% treatment acceptance', '+25% referrals', 'Better outcomes'],
            integrations: ['Practice Software', 'SMS', 'Email', 'Patient Portal'],
            icon: '💊'
          }
        ]
      },
      {
        id: 'operations',
        name: 'Operations',
        description: 'Streamline insurance and billing',
        benefit: 'Save 15 hours/week on paperwork',
        kpis: ['Admin Hours', 'Claim Denials', 'Verification Time'],
        tooltip: [
          'Insurance verification',
          'Pre-authorization',
          'Claim management',
          'Billing automation',
          'Coverage checks'
        ],
        icon: 'ClipboardCheck',
        agents: [
          {
            id: 504,
            name: 'Insurance Verifier',
            valueProposition: 'Automatically verifies coverage and pre-authorizes treatments',
            kpis: ['-80% verification time', 'Zero claim denials', 'Auto-authorization'],
            integrations: ['Insurance APIs', 'Practice Software', 'Billing System'],
            icon: '📄'
          }
        ]
      }
    ]
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    description: 'AI tools for clinics, hospitals, and medical practices',
    icon: 'Heart',
    departments: [
      {
        id: 'patient-scheduling',
        name: 'Patient Scheduling',
        description: 'Optimize appointment flow and reduce wait times',
        benefit: 'See 20% more patients with same staff',
        kpis: ['Capacity', 'Wait Times', 'Scheduling Efficiency'],
        tooltip: [
          'Appointment booking',
          'Urgent case handling',
          'Provider schedule optimization',
          'Patient flow management',
          'Wait time reduction'
        ],
        icon: 'Calendar',
        agents: [
          {
            id: 601,
            name: 'Smart Scheduler',
            valueProposition: 'Books appointments, handles urgent cases, and optimizes provider schedules',
            kpis: ['+20% capacity', '-40% wait times', 'Priority routing'],
            integrations: ['EHR', 'Calendar', 'SMS', 'Patient Portal'],
            icon: '🏥'
          }
        ]
      },
      {
        id: 'patient-communication',
        name: 'Patient Communication',
        description: 'Stay connected with patients between visits',
        benefit: 'Improve outcomes and reduce readmissions',
        kpis: ['Readmissions', 'Adherence', 'Patient Engagement'],
        tooltip: [
          'Medication reminders',
          'Symptom checks',
          'Follow-up scheduling',
          'Care plan support',
          'Proactive outreach'
        ],
        icon: 'Headphones',
        agents: [
          {
            id: 602,
            name: 'Care Coordinator',
            valueProposition: 'Sends medication reminders, checks symptoms, schedules follow-ups',
            kpis: ['-30% readmissions', '+95% adherence', 'Proactive care'],
            integrations: ['EHR', 'SMS', 'Patient App', 'Pharmacy'],
            icon: '👨‍⚕️'
          }
        ]
      },
      {
        id: 'triage',
        name: 'Triage',
        description: 'Screen patients and route urgent cases',
        benefit: 'Prioritize critical cases instantly',
        kpis: ['Urgent Detection', 'Triage Time', 'Care Routing'],
        tooltip: [
          'Symptom assessment',
          'Urgency classification',
          'Care routing',
          'Emergency protocols',
          'Provider matching'
        ],
        icon: 'ClipboardCheck',
        agents: [
          {
            id: 603,
            name: 'Triage Assistant',
            valueProposition: 'Assesses symptoms, identifies urgent cases, and routes to appropriate care',
            kpis: ['100% urgent detection', '-50% triage time', 'Better outcomes'],
            integrations: ['EHR', 'Phone System', 'Chat', 'Emergency Protocols'],
            icon: '🚑'
          }
        ]
      },
      {
        id: 'operations',
        name: 'Operations',
        description: 'Reduce admin burden on staff',
        benefit: 'Save 25 hours/week on documentation',
        kpis: ['Documentation Time', 'Compliance', 'Efficiency'],
        tooltip: [
          'Visit note generation',
          'Voice-to-text documentation',
          'Chart completion',
          'HIPAA compliance',
          'Template automation'
        ],
        icon: 'BookOpen',
        agents: [
          {
            id: 604,
            name: 'Medical Scribe',
            valueProposition: 'Auto-generates visit notes from doctor-patient conversations',
            kpis: ['-70% documentation time', 'HIPAA compliant', '+2 patients/day'],
            integrations: ['EHR', 'Voice Recording', 'Templates'],
            icon: '📝'
          }
        ]
      }
    ]
  },
  {
    id: 'car-retail',
    name: 'Car Retail',
    description: 'AI solutions for car dealerships and auto sales',
    icon: 'Car',
    departments: [
      {
        id: 'lead-management',
        name: 'Lead Management',
        description: 'Capture and qualify car buyers instantly',
        benefit: 'Convert 45% more leads into test drives',
        kpis: ['Test Drives', 'Response Time', 'Conversion Rate'],
        tooltip: [
          'Website visitor engagement',
          'Budget qualification',
          'Needs assessment',
          'Test drive scheduling',
          'Lead scoring'
        ],
        icon: 'Car',
        agents: [
          {
            id: 701,
            name: 'Lead Qualifier Bot',
            valueProposition: 'Engages website visitors, qualifies budget/needs, schedules test drives',
            kpis: ['+45% test drives', '5min response', '+30% conversions'],
            integrations: ['CRM', 'Website Chat', 'SMS', 'WhatsApp'],
            icon: '🚗'
          }
        ]
      },
      {
        id: 'sales',
        name: 'Sales',
        description: 'Close more deals with AI sales support',
        benefit: 'Increase sales by 25%',
        kpis: ['Sales Volume', 'Deal Value', 'Close Rate'],
        tooltip: [
          'Financing options',
          'Trade-in valuations',
          'Add-on recommendations',
          'Payment calculations',
          'Deal structuring'
        ],
        icon: 'DollarSign',
        agents: [
          {
            id: 702,
            name: 'Sales Assistant',
            valueProposition: 'Suggests financing options, handles trade-in estimates, upsells add-ons',
            kpis: ['+25% sales', '+$3k per deal', 'Smart financing'],
            integrations: ['CRM', 'Financing Tools', 'Inventory System'],
            icon: '💼'
          }
        ]
      },
      {
        id: 'customer-service',
        name: 'Customer Service',
        description: 'Build loyalty with post-sale support',
        benefit: 'Increase repeat buyers by 40%',
        kpis: ['Service Bookings', 'Repeat Customers', 'Loyalty'],
        tooltip: [
          'Maintenance scheduling',
          'Recall alerts',
          'Service promotions',
          'Customer retention',
          'Lifetime value optimization'
        ],
        icon: 'Headphones',
        agents: [
          {
            id: 703,
            name: 'Service Reminder Bot',
            valueProposition: 'Schedules maintenance, sends recall alerts, offers service promotions',
            kpis: ['+40% service bookings', '+30% repeat customers', 'Brand loyalty'],
            integrations: ['Service System', 'SMS', 'Email', 'Calendar'],
            icon: '🔧'
          }
        ]
      },
      {
        id: 'operations',
        name: 'Operations',
        description: 'Manage inventory and pricing dynamically',
        benefit: 'Optimize pricing and turnover',
        kpis: ['Lot Time', 'Pricing', 'Margins'],
        tooltip: [
          'Inventory tracking',
          'Dynamic pricing',
          'Aging stock alerts',
          'Market analysis',
          'Turnover optimization'
        ],
        icon: 'ClipboardCheck',
        agents: [
          {
            id: 704,
            name: 'Inventory Manager',
            valueProposition: 'Tracks lot inventory, suggests optimal pricing, alerts on aging stock',
            kpis: ['-30% lot time', 'Dynamic pricing', '+15% margins'],
            integrations: ['DMS', 'Inventory System', 'Pricing Tools'],
            icon: '📊'
          }
        ]
      }
    ]
  }
];

export const iconMap = {
  Scissors,
  GraduationCap,
  Home,
  Dumbbell,
  Smile,
  Heart,
  Car,
  ClipboardCheck,
  Megaphone,
  BookOpen,
  Headphones,
  Calendar,
  DollarSign
};
