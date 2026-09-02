// Single Source of Truth for Muhammad Nur Azam's HR Portfolio

export const PORTFOLIO_DATA = {
  personal: {
    name: "Muhammad Nur Azam",
    shortName: "Azam",
    badge: "HR Professional",
    currentRole: "Human Resources Executive",
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
    portraitAlt: "Muhammad Nur Azam — HR Professional"
  },

  hero: {
    liveStatus: "Currently HR Executive @ ALPS Global Holding Berhad",
    headlineLead: "Bridging People, Process & Purpose in",
    headlineAccent: "Modern Human Resources.",
    bio: "Supporting 100+ employees across diverse business units with a focus on talent acquisition, employee relations, and reliable HR operations. Grounded in empathy, compliance, and continuous growth.",
    heroProofPoints: [
      { label: "Workforce Scope", value: "100+ Employees Supported" },
      { label: "Specialization", value: "Talent Acquisition & Employee Relations" }
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
      company: "ALPS Global Holding Berhad",
      role: "Human Resources Executive",
      period: "February 2025 – Present",
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
      company: "Tsubaki Power Transmission",
      role: "Sales Services / Human Resources Support",
      period: "December 2022 – January 2025",
      isCurrent: false,
      badge: "Foundational Experience",
      summary: "Held a hybrid role managing international customer and sales operations while supporting localized human resources and talent initiatives.",
      responsibilities: [
        "Global sales support for international clients across the US, Japan, and Germany",
        "Recruitment pipeline support, candidate screening, and interview scheduling",
        "New hire orientation, job description development, and Employee Handbook improvement",
        "Employee relations support and corporate welfare event coordination",
        "Standard Operating Procedure (SOP) development and team capability training for the In-House Sales Department"
      ]
    }
  ],

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
      id: "talent-acquisition",
      number: "01",
      title: "End-to-End Talent Acquisition Pipeline",
      category: "Talent Acquisition",
      summary: "Managing high-velocity full lifecycle recruitment across entry-level to senior roles for diverse business units.",
      context: "Business units required rapid talent turnaround across specialized finance and operational roles while maintaining high screening rigor.",
      contribution: [
        "Authored and published targeted job descriptions across professional recruitment channels",
        "Conducted structured resume screening and preliminary competency interviews",
        "Coordinated multi-stage interview panels with hiring managers",
        "Facilitated offer management and seamless new hire onboarding"
      ],
      outcome: "Successfully closed 3 Finance vacancies within 1 month and placed a Senior HR Generalist within 1 month."
    },
    {
      id: "sales-sop",
      number: "02",
      title: "In-House Sales Department SOP Development",
      category: "SOP & Operations",
      summary: "Designing and documenting standardized workflows for cross-border sales support operations.",
      context: "International sales support serving clients across the US, Japan, and Germany needed consistent operational guidelines and clear handoff protocols.",
      contribution: [
        "Mapped daily operational workflows and identified process bottlenecks",
        "Authored clear, comprehensive Standard Operating Procedures (SOPs)",
        "Conducted walk-through sessions and trained team members on updated protocols"
      ],
      outcome: "Improved workflow clarity and operational consistency across international client accounts."
    },
    {
      id: "exit-analysis",
      number: "03",
      title: "Employee Exit Analysis & Management Reporting",
      category: "HR Analytics & Retention",
      summary: "Transforming departure feedback into structured, actionable management intelligence.",
      context: "Leadership required systematic insight into employee turnover trends to support talent retention planning.",
      contribution: [
        "Conducted professional and empathetic exit interview sessions",
        "Categorized turnover drivers and compiled structured analytical reports",
        "Presented objective findings and feedback summaries to management"
      ],
      outcome: "Provided management with structured visibility into turnover patterns and actionable employee feedback."
    },
    {
      id: "er-di-management",
      number: "04",
      title: "Employee Relations & Domestic Inquiry Case Management",
      category: "Employee Relations",
      summary: "Upholding procedural fairness and policy integrity across sensitive workplace disciplinary cases.",
      context: "Addressing workplace misconduct, attendance non-compliance, and policy breaches requiring strict procedural rigor.",
      contribution: [
        "Conducted preliminary fact-finding and evidence gathering",
        "Drafted formal show-cause documentation and handled employee responses",
        "Coordinated Domestic Inquiry (DI) panel proceedings adhering strictly to natural justice principles",
        "Guided line managers on policy interpretation and fair disciplinary practices"
      ],
      outcome: "Resolved sensitive cases with full adherence to company policy and Malaysian labor compliance standards."
    },
    {
      id: "hr-ops-payroll",
      number: "05",
      title: "HR Operations, Pre-Payroll & Statutory Compliance",
      category: "HR Operations",
      summary: "Maintaining reliable statutory compliance, employee documentation, and payroll data validation.",
      context: "Ensuring 100+ personnel records, appointment letters, and statutory claims are processed accurately without delay.",
      contribution: [
        "Issued Letters of Appointment, contract renewals, and confirmation letters",
        "Managed LHDN contract stamping compliance and maintained secure employee personnel files",
        "Supported monthly pre-payroll data validation and attendance records",
        "Administered HRD Corp training documentation and claim submissions"
      ],
      outcome: "Maintained compliant, up-to-date employee records and timely operational documentation."
    },
    {
      id: "learning-development",
      number: "06",
      title: "Learning & Capability Development",
      category: "Learning & Development",
      summary: "Facilitating structured onboarding and competency development for operational teams.",
      context: "Supporting continuous team readiness and standardized execution across department functions.",
      contribution: [
        "Structured new hire orientation modules covering departmental workflows",
        "Facilitated capability development sessions for in-house team members",
        "Tracked training participation and processed HRD Corp claim requirements"
      ],
      outcome: "Supported team readiness and standardized execution across daily operations."
    },
    {
      id: "employee-welfare",
      number: "07",
      title: "Employee Welfare & Engagement Initiatives",
      category: "Employee Welfare",
      summary: "Administering medical benefits and coordinating workplace engagement activities.",
      context: "Fostering a supportive workplace culture and reliable healthcare benefit access for employees.",
      contribution: [
        "Administered employee medical insurance enrollments and claims support",
        "Organized corporate engagement initiatives and employee welfare events",
        "Served as an approachable point of contact for employee welfare inquiries"
      ],
      outcome: "Ensured consistent employee welfare support and timely benefits administration."
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
      domain: "Talent Acquisition",
      badge: "Recruitment Lifecycle",
      skills: [
        "Job Posting",
        "CV Screening",
        "Interview Coordination",
        "Interviewing",
        "Offer Management",
        "Onboarding"
      ]
    },
    {
      domain: "Employee Relations & Governance",
      badge: "Fairness & Compliance",
      skills: [
        "Disciplinary Investigations",
        "Domestic Inquiry (DI) Coordination",
        "Misconduct Case Management",
        "Policy Interpretation",
        "Line Manager Advisory"
      ]
    },
    {
      domain: "HR Operations & Administration",
      badge: "Documentation & Records",
      skills: [
        "HR Documentation",
        "Letters of Appointment",
        "Contract Renewals",
        "Confirmation Letters",
        "Employee Records Management",
        "LHDN Stamping Compliance"
      ]
    },
    {
      domain: "Payroll, L&D & Welfare",
      badge: "Support & Enablement",
      skills: [
        "Pre-Payroll Support & Validation",
        "HRD Corp Training Claims",
        "Learning & Capability Development",
        "Medical Insurance Administration",
        "Employee Welfare & Corporate Events"
      ]
    }
  ],

  resume: {
    title: "Curriculum Vitae",
    subtitle: "Muhammad Nur Azam — Human Resources Professional",
    filePath: "assets/resume.pdf",
    highlights: [
      "Current HR Executive at ALPS Global Holding Berhad (100+ employees scope)",
      "Prior hybrid Sales Services & HR Support at Tsubaki Power Transmission",
      "Demonstrated track record in full lifecycle recruitment, ER/DI, and operations"
    ]
  }
};
