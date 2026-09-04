// Single Source of Truth for Muhammad Nurazam's HR Portfolio

export const PORTFOLIO_DATA = {
  personal: {
    name: "Muhammad Nurazam",
    shortName: "Azam",
    badge: "HR Professional",
    currentRole: "HR Executive",
    company: "ALPS Global Holding Berhad",
    linkedinUrl: "https://www.linkedin.com/in/muhammad-nurazam-87b337252",
    email: "nurazam190@gmail.com",
    phone: "0174863816",
    portfolioUrl: "https://nurazam190.github.io/",
    portfolioDisplay: "nurazam190.github.io",
    contactLocation: {
      city: "Kuala Lumpur",
      country: "Malaysia"
    },
    linkedinHeadline: "HR Executive @ ALPS Global Holding Berhad | Talent Acquisition | Employee Relations | HR Operations",
    positioning: "HR Professional | Talent Acquisition | Employee Relations | HR Operations",
    brandPhilosophy: "A journey in HR shaped by people, experience, and continuous learning.",
    location: "Malaysia",
    portrait: "assets/images/portrait.jpg",
    portraitAlt: "Muhammad Nurazam — HR Professional"
  },

  hero: {
    liveStatus: "Currently HR Executive @ ALPS Global Holding Berhad",
    headlineLead: "Bridging People, Process & Purpose in",
    headlineAccent: "Modern Human Resources.",
    bio: "Supporting 100+ employees across diverse business units with a focus on talent acquisition, employee relations, and reliable HR operations. Grounded in empathy, compliance, and continuous growth.",
    heroProofPoints: [
      { value: "100+", label: "Employees Supported" },
      { value: "End-to-End", label: "Recruitment" },
      { value: "ER / IR", label: "Case Management" },
      { value: "HRD Corp", label: "Training & Claims" }
    ]
  },

  philosophy: {
    quote: "A journey in HR shaped by people, experience, and continuous learning.",
    principles: [
      {
        title: "Human-Centered Communication",
        description: "Behind every CV, policy question, and inquiry is a person. Effective HR begins with genuine active listening, respectful dialogue, and clear expectations."
      },
      {
        title: "Procedural Fairness & Integrity",
        description: "Navigating employee relations and compliance requires strict adherence to labor principles, objective investigation, and unbiased decision-making."
      },
      {
        title: "Operational Consistency",
        description: "Reliable HR operations—from onboarding to pre-payroll and SOP execution—form the dependable backbone that allows teams to thrive."
      }
    ]
  },

  careerJourney: [
    {
      id: "alps",
      number: "01",
      company: "ALPS Global Holding Berhad",
      role: "HR Executive",
      period: "FEB 2025 — PRESENT",
      location: "Kuala Lumpur",
      stage: "Full-Scope Human Resources",
      isCurrent: true,
      badge: "Current Role",
      summary: "Driving recruitment, onboarding, employee relations, and comprehensive HR operations for 100+ employees across multiple business units.",
      responsibilities: [
        "Full lifecycle recruitment: job posting, CV screening, interviewing, and structured onboarding",
        "Employee relations: disciplinary investigations, Domestic Inquiry (DI) coordination, and misconduct case management",
        "HR documentation: Letters of Appointment, contract renewals, confirmation letters, and employee records",
        "Pre-payroll processing support and employee data validation",
        "HRD Corp training administration and claim submissions",
        "Employee welfare administration, medical insurance, and LHDN contract stamping compliance",
        "Line manager HR advisory support and executive employee exit analysis reporting"
      ]
    },
    {
      id: "tsubaki",
      number: "02",
      company: "Tsubaki Power Transmission (Malaysia) Sdn. Bhd.",
      role: "Sales Services, Human Resources Executive",
      period: "DEC 2022 — JAN 2025",
      location: "Malaysia",
      stage: "Corporate Sales Operations + HR Exposure",
      isCurrent: false,
      badge: "Career Transition",
      summary: "Built corporate sales and international client experience while gaining practical exposure across Human Resources and talent initiatives.",
      responsibilities: [
        "Global sales support for international clients across the US, Japan, and Germany",
        "Recruitment pipeline support, candidate screening, and interview scheduling",
        "New hire orientation, job description development, and Employee Handbook improvement",
        "Employee relations support and corporate welfare event coordination",
        "Standard Operating Procedure (SOP) development and team capability training for the In-House Sales Department"
      ]
    },
    {
      id: "mcdonalds",
      number: "03",
      company: "McDonald's",
      role: "Part-Time Crew",
      period: "NOV 2020 — DEC 2022",
      location: "Subang Bestari",
      stage: "Fast-Paced Operations, Teamwork & Early Leadership",
      isCurrent: false,
      isEarlyCareer: true,
      badge: "Early Career",
      summary: "Built a strong foundation in customer service, teamwork, time management, and fast-paced operations while balancing work with studies. Took on additional responsibilities including supporting and guiding new crew members on procedures and operational best practices.",
      competencies: [
        "Customer Service",
        "Teamwork",
        "Time Management",
        "Early Leadership"
      ]
    },
    {
      id: "parkson",
      number: "04",
      company: "Parkson",
      role: "Cashier",
      period: "JAN 2020 — JUN 2020",
      location: "NU Sentral",
      stage: "Customer Service Foundation",
      isCurrent: false,
      isEarlyCareer: true,
      badge: "Career Foundation",
      summary: "Developed early professional discipline through customer-facing retail operations, cash handling, transaction accuracy, customer service, and team collaboration.",
      competencies: [
        "Customer Service",
        "Cash Accountability",
        "Communication",
        "Teamwork"
      ]
    }
  ],

  educationFoundation: {
    eyebrow: "Education & Foundation",
    headline: "Built on Human Resources education and practical cross-functional experience.",
    education: {
      label: "Education",
      qualification: "Diploma in Human Resources",
      institution: "Universiti Islam Selangor",
      period: "2020 — 2023",
      detail: "CGPA 3.45"
    },
    systems: {
      label: "Professional Systems",
      items: ["HR2000", "SAP", "Navision", "Microsoft Office"]
    }
  },

  achievements: [
    {
      id: "case-management",
      metric: "01",
      title: "End-to-End Case Management",
      subtitle: "Disciplinary & Domestic Inquiry",
      description: "Managed disciplinary and Domestic Inquiry (DI) cases end-to-end, ensuring proper documentation, procedural compliance, and timely resolution in accordance with company policies and Employment Act requirements."
    },
    {
      id: "misconduct-handling",
      metric: "02",
      title: "Sensitive Misconduct Handling",
      subtitle: "Employee Relations & Risk Management",
      description: "Handled sensitive employee misconduct cases involving fraud, attendance issues, and policy violations while maintaining confidentiality and minimizing organizational risk exposure."
    },
    {
      id: "hr-advisory",
      metric: "03",
      title: "HR Advisory Support",
      subtitle: "Employee Relations & Policy Guidance",
      description: "Provided HR advisory support to line managers on employee relations matters, disciplinary actions, and policy interpretation to support consistent and compliant decision-making."
    },
    {
      id: "full-cycle-recruitment",
      metric: "04",
      title: "Full-Cycle Recruitment",
      subtitle: "Talent Acquisition",
      description: "Handle end-to-end recruitment activities for ALPS Global Holding Berhad, including job posting, CV screening, interview coordination, and offer management to support efficient hiring turnaround."
    },
    {
      id: "exit-insights",
      metric: "05",
      title: "Actionable Exit Insights",
      subtitle: "Employee Exit Analysis",
      description: "Produced employee exit analysis reports for management, providing insights into turnover trends and supporting workforce planning and decision-making."
    },
    {
      id: "employee-well-being",
      metric: "06",
      title: "Employee Well-Being",
      subtitle: "Welfare & Engagement",
      description: "Managed employee welfare programs and engagement initiatives to support staff well-being and improve workplace satisfaction."
    }
  ],

  selectedWork: [
    {
      id: "er-di-management",
      number: "01",
      title: "Disciplinary & Domestic Inquiry Management",
      category: "Employee Relations",
      summary: "Structured handling of sensitive employee relations matters with procedural care.",
      context: "Employee relations and misconduct matters requiring proper investigation, documentation, and procedural handling.",
      contribution: [
        "Managed preliminary investigation and fact-finding for misconduct matters",
        "Prepared disciplinary documentation and supported Domestic Inquiry processes",
        "Coordinated case handling through resolution with procedural care"
      ],
      focus: ["Procedural Fairness", "Confidentiality", "Compliance", "Risk Management"]
    },
    {
      id: "talent-acquisition",
      number: "02",
      title: "End-to-End Talent Acquisition",
      category: "Talent Acquisition",
      summary: "Coordinated recruitment activity across multiple business functions and hiring stages.",
      context: "Recruitment requirements across multiple business functions.",
      contribution: [
        "Managed job posting and CV screening",
        "Coordinated interviews and stakeholder communication",
        "Supported offer management and onboarding coordination"
      ],
      focus: ["Hiring Turnaround", "Candidate Coordination", "Stakeholder Communication", "Employee Integration"]
    },
    {
      id: "exit-analysis",
      number: "03",
      title: "Employee Exit Analysis",
      category: "Workforce Insights",
      summary: "Converted employee departure information into structured management reporting.",
      context: "Management visibility into employee turnover and workforce trends.",
      contribution: [
        "Produced employee exit analysis reports",
        "Organized turnover information into clear management insights",
        "Supported workforce planning and decision-making"
      ],
      focus: ["Turnover Trends", "Workforce Insights", "Management Reporting", "Workforce Planning"]
    },
    {
      id: "sales-sop",
      number: "04",
      title: "Process & SOP Standardization",
      category: "SOP & Operations",
      summary: "Developed clearer operational guidance for the In-House Sales Department at Tsubaki.",
      context: "Need for clearer and more consistent operational workflows.",
      contribution: [
        "Developed and implemented an SOP for the In-House Sales Department",
        "Documented operational workflows and clearer handoff practices",
        "Supported team understanding of the standardized process"
      ],
      focus: ["Process Clarity", "Consistency", "Documentation", "Capability Development"]
    }
  ],

  hrJournal: {
    sectionTitle: "HR Journal by Azam",
    description: "Thoughts, lessons and reflections from my journey in HR.",
    entries: [
      {
        number: "#01",
        title: "Recruitment Taught Me That HR Is About People",
        teaser: "Looking beyond resumes and credentials to understand the real human motivations, potential, and aspirations of every candidate.",
        linkedinUrl: "https://www.linkedin.com/in/muhammad-nurazam-87b337252"
      },
      {
        number: "#02",
        title: "The First Day Is More Important Than We Think",
        teaser: "Why early onboarding moments define an employee's psychological safety, long-term engagement, and confidence in the organization.",
        linkedinUrl: "https://www.linkedin.com/in/muhammad-nurazam-87b337252"
      },
      {
        number: "#03",
        title: "Sometimes, the Candidate Isn’t the Problem",
        teaser: "Analyzing hiring mismatches, role clarity, and internal expectations before attributing recruitment challenges to the talent pool.",
        linkedinUrl: "https://www.linkedin.com/in/muhammad-nurazam-87b337252"
      },
      {
        number: "#04",
        title: "Sometimes, HR Doesn’t Have an Easy Answer",
        teaser: "Navigating complex workplace dilemmas where policy, fairness, empathy, and organizational reality intersect.",
        linkedinUrl: "https://www.linkedin.com/in/muhammad-nurazam-87b337252"
      },
      {
        number: "#05",
        title: "People Remember How HR Made Them Feel",
        teaser: "The lasting professional impact of conducting difficult conversations, interviews, and exits with dignity and empathy.",
        linkedinUrl: "https://www.linkedin.com/in/muhammad-nurazam-87b337252"
      },
      {
        number: "#06",
        title: "HR Is Not Here to Be Everyone’s Favourite",
        teaser: "Balancing human empathy with the courage to uphold standards, accountability, and fairness without favoritism.",
        linkedinUrl: "https://www.linkedin.com/in/muhammad-nurazam-87b337252"
      }
    ]
  },

  expertise: [
    {
      index: "01",
      domain: "Talent Acquisition",
      skills: ["Recruitment", "CV Screening", "Interview Coordination", "Offer Management", "Onboarding"]
    },
    {
      index: "02",
      domain: "Employee & Industrial Relations",
      skills: ["Employee Relations", "Disciplinary Action", "Misconduct Investigation", "Domestic Inquiry (DI)", "Employee Separation"]
    },
    {
      index: "03",
      domain: "HR Operations",
      skills: ["Employee Lifecycle", "HR Documentation", "Employee Records", "Confirmation", "Contract Renewal", "Offboarding"]
    },
    {
      index: "04",
      domain: "Payroll & Benefits",
      skills: ["Pre-Payroll Administration", "Employee Benefits", "Medical Claims", "Insurance Administration"]
    },
    {
      index: "05",
      domain: "HR Compliance",
      skills: ["Employment Act", "LHDN Stamping", "HR Audit Readiness", "Policy Administration", "SOP & Documentation"]
    },
    {
      index: "06",
      domain: "Learning & Workforce",
      skills: ["HRD Corp", "Training Coordination", "Employee Development", "Manpower Planning", "Exit Analysis"]
    }
  ],

  resume: {
    title: "Curriculum Vitae",
    subtitle: "Muhammad Nurazam — Human Resources Professional",
    filePath: "assets/resume.pdf",
    highlights: [
      "Current HR Executive at ALPS Global Holding Berhad (100+ employees scope)",
      "Prior Sales Services and Human Resources experience at Tsubaki Power Transmission",
      "Demonstrated track record in full lifecycle recruitment, ER/DI, and operations"
    ]
  }
};
