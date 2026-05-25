/**
 * courses/ent301.js — ENT 301: Essentials of Entrepreneurship
 * Level: 300 Level, 1st Semester
 *
 * To edit: add/remove chapters in the array below.
 * Each chapter follows the structure shown in courses/_template.js
 *
 * This file must be loaded in index.html BEFORE data.js and app.js.
 */

PORTAL_INJECT("ENT 301", [

  {
    number: 1,
    title: "Entrepreneurship & Intrapreneurship",
    summary: "Entrepreneurship is the process of identifying and exploiting opportunities to create value. It involves risk-taking, innovation, and resource mobilization. Intrapreneurship refers to entrepreneurial behaviour within an existing organisation. Both require creativity, leadership, and a problem-solving mindset.",
    keyPoints: [
      "Entrepreneur vs Intrapreneur: external vs internal innovation",
      "Schumpeter's 'creative destruction' — old methods replaced by new",
      "Key traits: risk tolerance, innovation, leadership, persistence",
      "Types: innovative, imitative, Fabian, drone, social entrepreneurs"
    ],
    pdfUrl: "https://drive.google.com/file/d/1ClhSayxUahz3NG-eD113AIW3LwEOdF8l/view",
    cbtUrl: "",
    questions: [
      {
        text: "Who coined the term 'creative destruction' in relation to entrepreneurship?",
        options: ["Peter Drucker", "Joseph Schumpeter", "Adam Smith", "Max Weber"],
        correct: 1,
        explanation: "Joseph Schumpeter introduced 'creative destruction' to describe how innovation displaces old technologies and markets."
      },
      {
        text: "Intrapreneurship refers to:",
        options: ["Starting a new business from scratch", "Entrepreneurial activity within an existing organization", "International business operations", "Non-profit enterprise management"],
        correct: 1,
        explanation: "Intrapreneurship (also called corporate entrepreneurship) is the practice of entrepreneurship within established organisations."
      },
      {
        text: "Which of the following is NOT a type of entrepreneur identified in literature?",
        options: ["Innovative", "Imitative", "Reactive", "Drone"],
        correct: 2,
        explanation: "The common types are Innovative, Imitative, Fabian, and Drone. 'Reactive' is not a standard classification."
      },
      {
        text: "True or False: An entrepreneur bears all the risks of a business venture.",
        options: ["True", "False"],
        correct: 0,
        explanation: "True. Risk-bearing is one of the defining characteristics of an entrepreneur."
      }
    ]
  },

  {
    number: 2,
    title: "The Nigerian Entrepreneurial Environment",
    summary: "Nigeria's entrepreneurial environment is shaped by economic, social, political, and technological factors. Challenges include inadequate infrastructure, policy instability, and limited access to finance. Opportunities exist in agriculture, ICT, fintech, and the informal sector.",
    keyPoints: [
      "SWOT of Nigerian business environment: large market, youthful population (strength); corruption, poor infrastructure (weakness)",
      "Role of SMEs in Nigerian GDP — over 48% contribution",
      "Key agencies: SMEDAN, BOI, CBN, NAFDAC",
      "Informal sector employs ~80% of Nigerian workforce"
    ],
    pdfUrl: "https://drive.google.com/file/d/1qULY8zGnFnZPR4keJ4OEOdjm4MQmhefe/view",
    cbtUrl: "",
    questions: [
      {
        text: "What percentage of Nigeria's GDP do SMEs approximately contribute?",
        options: ["About 20%", "About 48%", "About 65%", "About 10%"],
        correct: 1,
        explanation: "SMEs contribute over 48% to Nigeria's GDP and employ the majority of the workforce."
      },
      {
        text: "Which Nigerian agency is primarily responsible for developing micro, small, and medium enterprises?",
        options: ["NAFDAC", "NNPC", "SMEDAN", "NCC"],
        correct: 2,
        explanation: "SMEDAN (Small and Medium Enterprises Development Agency of Nigeria) is the primary body for SME development."
      },
      {
        text: "True or False: Nigeria's large population is considered a weakness in its entrepreneurial environment.",
        options: ["True", "False"],
        correct: 1,
        explanation: "False. A large population is a strength — it represents a large consumer market and labour pool."
      }
    ]
  },

  {
    number: 3,
    title: "Creativity & Intellectual Property Rights",
    summary: "Creativity is the ability to generate novel and useful ideas. Intellectual Property (IP) protects these creations legally. Forms include Patents, Copyrights, Trademarks, and Trade Secrets. In Nigeria, the Nigerian Copyright Commission (NCC) and Patents and Designs Registry (under FIPO) manage IP.",
    keyPoints: [
      "4 types of IP: Patent, Copyright, Trademark, Trade Secret",
      "Patent duration in Nigeria: 20 years from filing date",
      "Copyright: automatic upon creation; protects expression not ideas",
      "FIPO — Federal Institute of Industrial Property (formerly PBGRD)"
    ],
    pdfUrl: "https://drive.google.com/file/d/1l5JLyv4oxM3rNc2sdVUs2-jNw3jBn88k/view",
    cbtUrl: "",
    questions: [
      {
        text: "How long does a patent last in Nigeria from the filing date?",
        options: ["10 years", "15 years", "20 years", "25 years"],
        correct: 2,
        explanation: "A patent in Nigeria is protected for 20 years from the date of filing."
      },
      {
        text: "Which of these does copyright law protect?",
        options: ["Ideas", "Facts", "Expression of ideas", "Mathematical concepts"],
        correct: 2,
        explanation: "Copyright protects the expression of ideas, not the ideas themselves."
      },
      {
        text: "The Nigerian agency responsible for copyright administration is:",
        options: ["NAFDAC", "NCC", "FIPO", "SON"],
        correct: 1,
        explanation: "The Nigerian Copyright Commission (NCC) administers copyright in Nigeria."
      }
    ]
  },

  {
    number: 4,
    title: "Technological Entrepreneurship",
    summary: "Tech entrepreneurship leverages technology to create scalable solutions. It combines engineering, business, and innovation. Key concepts include tech startups, disruptive innovation, digital economy, and the role of ICT in business growth.",
    keyPoints: [
      "Disruptive innovation: lower-cost technology displaces established products",
      "Nigeria's tech hub: Lagos (Yaba — 'Silicon Lagoon')",
      "Key Nigerian tech unicorns: Flutterwave, Paystack, Andela",
      "Digital entrepreneurship enabled by mobile internet penetration"
    ],
    pdfUrl: "https://drive.google.com/file/d/1vrHE_sHRS_JXcWDE-xQLUg0-1tAgKulvqA/view",
    cbtUrl: "",
    questions: [
      {
        text: "What is the name given to Nigeria's technology hub located in Yaba, Lagos?",
        options: ["Silicon Valley West", "Silicon Lagoon", "Lagos Tech Park", "Naijatech Hub"],
        correct: 1,
        explanation: "Yaba in Lagos is nicknamed 'Silicon Lagoon' due to its concentration of tech startups."
      },
      {
        text: "Disruptive innovation typically begins by:",
        options: ["Targeting the most profitable customers", "Serving overlooked or nonconsumers with simpler, cheaper solutions", "Copying existing market leaders", "Raising prices to increase perceived value"],
        correct: 1,
        explanation: "Disruptive innovations start at the low end or in new markets, then move upmarket."
      }
    ]
  },

  {
    number: 5,
    title: "Management of Innovation",
    summary: "Innovation management involves systematically guiding the process of new idea development into market-ready products or services. It includes stages: idea generation, screening, concept development, testing, and commercialisation.",
    keyPoints: [
      "Innovation funnel: many ideas → few launched products",
      "Types of innovation: incremental, radical, architectural, modular",
      "Open vs closed innovation: Chesbrough's model",
      "Stage-Gate process: structured review points before proceeding"
    ],
    pdfUrl: "https://drive.google.com/file/d/1_1kci9TbJ0P7dK4d1gN0wopcFJJVH2JN/view",
    cbtUrl: "",
    questions: [
      {
        text: "Who developed the concept of 'Open Innovation'?",
        options: ["Clayton Christensen", "Henry Chesbrough", "Peter Drucker", "Michael Porter"],
        correct: 1,
        explanation: "Henry Chesbrough introduced Open Innovation in his 2003 book."
      },
      {
        text: "The Stage-Gate process in innovation management is best described as:",
        options: ["A continuous loop with no checkpoints", "A sequential process with reviews between phases", "A random idea selection system", "A financial audit model"],
        correct: 1,
        explanation: "Stage-Gate is a project management technique where each development stage is followed by a gate (review) before progressing."
      }
    ]
  },

  {
    number: 6,
    title: "Family Business & Succession Planning",
    summary: "Family businesses form the majority of businesses worldwide. Key challenges include nepotism, lack of professional management, and succession conflicts. Effective succession planning ensures business continuity across generations.",
    keyPoints: [
      "Family business: owned and managed by family members, two or more generations involved",
      "Three-circle model: Family, Ownership, Business (Gersick et al.)",
      "Stages of succession: owner-managed → sibling partnership → cousin consortium",
      "Key success factor: clear governance and family constitution"
    ],
    pdfUrl: "https://drive.google.com/file/d/1tSAy_Wm_b0PhAS2nnQWTnU8nhfeem35F/view",
    cbtUrl: "",
    questions: [
      {
        text: "The three-circle model of family business includes which three systems?",
        options: ["Finance, Operations, HR", "Family, Ownership, Business", "Product, Market, Strategy", "Legal, Financial, Technical"],
        correct: 1,
        explanation: "Gersick et al.'s three-circle model identifies Family, Ownership, and Business as the three overlapping systems."
      }
    ]
  },

  {
    number: 7,
    title: "Women Entrepreneurship",
    summary: "Women entrepreneurs face unique barriers including access to finance, cultural norms, and work-life balance. Despite this, they represent a growing segment of the global economy. Programmes by the IFC, World Bank, and CBN aim to bridge the gender gap in business.",
    keyPoints: [
      "Women-owned businesses: ~33% of all businesses globally",
      "Key barriers: cultural norms, collateral requirements, mobility constraints",
      "CBN Programmes: AGSMEIS, WBI (Women Business Initiative)",
      "Glass ceiling: invisible barriers to women's advancement"
    ],
    pdfUrl: "https://drive.google.com/file/d/16BEQySr_MUlfo8hAQFKmn84CW2dDrobl/view",
    cbtUrl: "",
    questions: [
      {
        text: "The 'glass ceiling' concept refers to:",
        options: ["Transparent building material used in offices", "Invisible barriers limiting women's career advancement", "Government regulations on women-owned businesses", "Financial credit limits for female entrepreneurs"],
        correct: 1,
        explanation: "The glass ceiling is an invisible but real barrier preventing women and minorities from advancing to top positions."
      }
    ]
  },

  {
    number: 8,
    title: "Social Entrepreneurship in Nigeria",
    summary: "Social entrepreneurs create ventures that address social problems while being financially sustainable. In Nigeria, examples include rural fintech, agriculture cooperatives, and low-cost healthcare initiatives.",
    keyPoints: [
      "Social enterprise ≠ charity; it generates revenue while solving social problems",
      "Triple bottom line: People, Planet, Profit",
      "Ashoka Nigeria, Tony Elumelu Foundation support social entrepreneurs",
      "SDGs provide a global framework for social entrepreneurship"
    ],
    pdfUrl: "https://drive.google.com/file/d/1MHNbE1CANnlBqeB2MyM4e2ndWBRjV0o1/view",
    cbtUrl: "",
    questions: [
      {
        text: "The 'triple bottom line' framework measures business success by:",
        options: ["Revenue, costs, and profit only", "People, Planet, and Profit", "Employees, customers, and shareholders", "Innovation, marketing, and operations"],
        correct: 1,
        explanation: "The triple bottom line (3BL) measures sustainability across People, Planet, and Profit dimensions."
      }
    ]
  },

  {
    number: 9,
    title: "Business Opportunity Evaluation",
    summary: "A business opportunity must be evaluated across multiple dimensions: market size, competition, resource requirements, timing, and entrepreneur fit. Tools include SWOT analysis, feasibility studies, and market research.",
    keyPoints: [
      "4 tests: real opportunity? Can we win? Is it worth it? Is it right?",
      "Feasibility study differs from business plan: feasibility checks viability first",
      "TAM / SAM / SOM — Total / Serviceable / Obtainable market",
      "Opportunity vs idea: an opportunity has a paying customer"
    ],
    pdfUrl: "https://drive.google.com/file/d/1NRumM7ZKShksMlhbJpVBhry_JURINGC7/view",
    cbtUrl: "",
    questions: [
      {
        text: "What does SAM stand for in market sizing?",
        options: ["Sustainable Available Market", "Serviceable Available Market", "Standard Addressable Market", "Small Accessible Market"],
        correct: 1,
        explanation: "SAM (Serviceable Available Market) is the portion of TAM that your product or service can realistically target."
      }
    ]
  },

  {
    number: 10,
    title: "Feasibility Study & Business Plan",
    summary: "A feasibility study assesses whether a business idea is viable (technical, market, financial, legal). A business plan is a detailed roadmap to execute a viable idea. It includes executive summary, market analysis, operations plan, and financial projections.",
    keyPoints: [
      "Sections of a feasibility study: technical, market, financial, management, legal",
      "Business plan sections: Executive Summary, Company Description, Market Analysis, Product/Service, Marketing, Operations, Financials",
      "Break-even analysis: Fixed Costs ÷ (Selling Price − Variable Cost)",
      "Difference: feasibility = 'can we?'; business plan = 'how we will'"
    ],
    pdfUrl: "https://drive.google.com/file/d/1lpTSWBVZ_2oFWW9jIXDLp_5PtIu-QkXs/view",
    cbtUrl: "",
    questions: [
      {
        text: "The formula for Break-Even Point in units is:",
        options: ["Fixed Costs × (Selling Price − Variable Cost)", "Fixed Costs ÷ (Selling Price − Variable Cost)", "Variable Cost ÷ Fixed Costs", "Selling Price − Fixed Costs"],
        correct: 1,
        explanation: "Break-even units = Fixed Costs ÷ Contribution Margin per unit (Selling Price − Variable Cost)."
      },
      {
        text: "A feasibility study is best described as:",
        options: ["A detailed execution roadmap", "An assessment of whether a business idea is viable", "A financial report for investors", "A government registration document"],
        correct: 1,
        explanation: "A feasibility study tests viability before committing to a full business plan."
      }
    ]
  },

  {
    number: 11,
    title: "Theories of Growth",
    summary: "Business growth theories explain why and how firms expand. Key theories include Penrose's resource-based view, Greiner's growth model, and the lifecycle model. Growth can be organic or inorganic (mergers & acquisitions).",
    keyPoints: [
      "Penrose Theory: firm growth driven by underutilised resources and managerial capability",
      "Greiner's 5 stages: Creativity → Direction → Delegation → Coordination → Collaboration",
      "Organic growth: internal expansion; inorganic: mergers, acquisitions, franchising",
      "Gibrat's Law: firm growth rate is independent of firm size"
    ],
    pdfUrl: "",
    cbtUrl: "",
    questions: [
      {
        text: "Penrose's theory of firm growth is primarily based on:",
        options: ["Government subsidies", "Underutilised internal resources and managerial capacity", "Market monopoly power", "Foreign direct investment"],
        correct: 1,
        explanation: "Edith Penrose argued that firms grow by deploying underutilised resources and managerial knowledge."
      }
    ]
  },

  {
    number: 12,
    title: "Sources of Funds",
    summary: "Entrepreneurs need capital at different business stages. Funding sources range from bootstrapping and family to angel investors, venture capital, bank loans, and government grants. In Nigeria, CBN, BOI, and SMEDAN provide targeted financing programmes.",
    keyPoints: [
      "Bootstrapping: self-funding; zero equity dilution but limited scale",
      "Angel investors vs VCs: angels are individuals; VCs are institutional",
      "BOI: Bank of Industry provides low-interest loans for SMEs in Nigeria",
      "CBN Anchor Borrowers' Programme targets agricultural MSMEs"
    ],
    pdfUrl: "",
    cbtUrl: "",
    questions: [
      {
        text: "Which Nigerian institution provides low-interest loans specifically targeted at SMEs?",
        options: ["CBN", "NNPC", "BOI", "NCC"],
        correct: 2,
        explanation: "The Bank of Industry (BOI) provides long-term low-interest loans and equity financing to Nigerian businesses."
      },
      {
        text: "'Bootstrapping' in entrepreneurship means:",
        options: ["Borrowing heavily from banks", "Starting and growing a business using only personal savings", "Raising money through an IPO", "Receiving government grants"],
        correct: 1,
        explanation: "Bootstrapping refers to funding your startup from personal savings and early revenues without external investors."
      }
    ]
  },

  {
    number: 13,
    title: "Marketing for Entrepreneurs",
    summary: "Entrepreneurial marketing is resource-constrained and relies on creativity, networking, and customer intimacy. The marketing mix (4Ps → 7Ps) guides strategy. Digital marketing has democratised access for small businesses.",
    keyPoints: [
      "7Ps: Product, Price, Place, Promotion, People, Process, Physical Evidence",
      "Market segmentation: demographic, geographic, psychographic, behavioural",
      "Customer Lifetime Value (CLV): long-term revenue from a single customer",
      "Guerrilla marketing: low-cost unconventional tactics for maximum exposure"
    ],
    pdfUrl: "",
    cbtUrl: "",
    questions: [
      {
        text: "The extended marketing mix for services adds 3 extra Ps. Which are they?",
        options: ["Planning, Profit, Performance", "People, Process, Physical Evidence", "Packaging, Positioning, Publicity", "Price, Place, Promotion"],
        correct: 1,
        explanation: "The service marketing mix (7Ps) adds People, Process, and Physical Evidence to the original 4Ps."
      }
    ]
  },

  {
    number: 14,
    title: "Ethics & Social Responsibility",
    summary: "Business ethics guide moral decision-making in commerce. Corporate Social Responsibility (CSR) reflects a firm's commitment to society beyond profit. In Nigeria, NESREA and the Companies and Allied Matters Act (CAMA) establish ethical and legal standards.",
    keyPoints: [
      "CSR Pyramid (Carroll): Philanthropic → Ethical → Legal → Economic",
      "Stakeholder theory: businesses owe responsibility to all stakeholders, not just shareholders",
      "Codes of conduct: voluntary ethical guidelines for employees and partners",
      "Whistleblowing: reporting unethical conduct; protected under Nigerian law"
    ],
    pdfUrl: "",
    cbtUrl: "",
    questions: [
      {
        text: "In Carroll's CSR Pyramid, the base (most fundamental) level of responsibility is:",
        options: ["Ethical", "Philanthropic", "Legal", "Economic"],
        correct: 3,
        explanation: "Carroll's CSR Pyramid places Economic responsibility at the base — a business must be profitable first."
      }
    ]
  },

  {
    number: 15,
    title: "Business Expansion & Growth Strategies",
    summary: "Strategies for growth include market penetration, product development, market development, and diversification (Ansoff Matrix). Firms also grow through franchising, licensing, joint ventures, and strategic alliances.",
    keyPoints: [
      "Ansoff Matrix: 2×2 grid of product/market combinations",
      "Market penetration: existing product, existing market — lowest risk",
      "Diversification: new product, new market — highest risk",
      "Franchising: licensing business model and brand to independent operators"
    ],
    pdfUrl: "",
    cbtUrl: "",
    questions: [
      {
        text: "According to the Ansoff Matrix, which strategy carries the HIGHEST risk?",
        options: ["Market Penetration", "Product Development", "Market Development", "Diversification"],
        correct: 3,
        explanation: "Diversification (new product + new market) is the riskiest Ansoff strategy as the firm has no existing expertise in either dimension."
      }
    ]
  }

]); // end PORTAL_INJECT for ENT 301
