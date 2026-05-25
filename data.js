/**
 * data.js — FUTA Online Class Portal Data
 *
 * This file defines the full portal structure: all levels, semesters, and courses.
 * Chapter content (chapters array) is populated by individual course files in /courses/.
 *
 * HOW IT WORKS:
 *   1. Each course has an empty `chapters: []` array here.
 *   2. A course file (e.g. courses/mts101.js) calls:
 *        PORTAL_INJECT("MTS 101", [...chapters]);
 *      ...which finds the matching course and fills in its chapters.
 *   3. data.js must be loaded AFTER all course files in index.html.
 *
 * TO ADD A NEW COURSE:
 *   1. Create a file in /courses/ named after the course code (e.g. pmt305.js).
 *   2. Copy the template from courses/_template.js and fill in chapters.
 *   3. Add a <script src="courses/pmt305.js"></script> tag in index.html
 *      BEFORE the <script src="data.js"></script> line.
 */

"use strict";

/* ─────────────────────────────────────────────────────────────────
   INJECTION REGISTRY
   Course files call PORTAL_INJECT(courseCode, chapters) to load data.
   This runs before PORTAL_DATA is built, so we store them here first.
───────────────────────────────────────────────────────────────── */

/* ─────────────────────────────────────────────────────────────────
   PORTAL DATA
───────────────────────────────────────────────────────────────── */
const PORTAL_DATA = {

  site: {
    name: "FUTA Online Class",
    university: "Federal University of Technology, Akure",
    tagline: "Read · Revise · Ace",
  },

  levels: [

    // ── PDS ─────────────────────────────────
    {
      id: "pds",
      name: "PDS",
      fullName: "Pre-Degree Science",
      description: "Foundation science and language courses for pre-degree students preparing for university admission.",
      semesters: [
        {
          id: "all",
          name: "All Courses",
          courses: [
            { code: "MATH",    title: "Mathematics",    description: "Arithmetic, algebra, geometry, trigonometry and elementary calculus for pre-degree students.", chapters: [] },
            { code: "PHY",     title: "Physics",        description: "Mechanics, electricity, magnetism, waves, optics, and modern physics fundamentals.", chapters: [] },
            { code: "BIO",     title: "Biology",        description: "Cell biology, genetics, ecology, physiology and general life sciences.", chapters: [] },
            { code: "CHEM",    title: "Chemistry",      description: "Atomic structure, bonding, reactions, organic and inorganic chemistry.", chapters: [] },
            { code: "ENG",     title: "Use of English", description: "Reading comprehension, essay writing, grammar, and oral communication skills.", chapters: [] },
          ]
        }
      ]
    },

    // ── UABS ────────────────────────────────
    {
      id: "uabs",
      name: "UABS",
      fullName: "University Advanced Basic Science",
      description: "Advanced bridging science courses for students entering through the UABS programme.",
      semesters: [
        {
          id: "all",
          name: "All Courses",
          courses: [
            { code: "MATH",    title: "Mathematics", description: "Advanced pre-university mathematics including calculus, vectors and algebra.", chapters: [] },
            { code: "PHY",     title: "Physics",     description: "Advanced physics covering waves, electricity, mechanics and modern physics.", chapters: [] },
            { code: "BIO",     title: "Biology",     description: "Advanced biology: genetics, evolution, cell biology and human physiology.", chapters: [] },
            { code: "CHEM",    title: "Chemistry",   description: "Advanced chemistry: organic, inorganic, physical and analytical chemistry.", chapters: [] },
          ]
        }
      ]
    },

    // ── 100 LEVEL ───────────────────────────
    {
      id: "100",
      name: "100 Level",
      fullName: "First Year",
      description: "Foundation engineering, science, and general studies courses.",
      semesters: [
        {
          id: "1st",
          name: "1st Semester",
          courses: [
            { code: "CHE 101", title: "General Chemistry I",             description: "Atomic structure, bonding, periodic table, stoichiometry and states of matter.", chapters: [] },
            { code: "CHE 103", title: "Experimental Chemistry I",        description: "Laboratory experiments in general chemistry, titrations and qualitative analysis.", chapters: [] },
            { code: "PHY 101", title: "General Physics",                 description: "Mechanics, kinematics, Newton's laws, energy and work, oscillations.", chapters: [] },
            { code: "PHY 107", title: "General Physics Lab I",           description: "Practical experiments reinforcing General Physics I concepts.", chapters: [] },
            { code: "MTS 101", title: "Introductory Mathematics I",      description: "Sets, logic, real numbers, functions, limits and differentiation.", chapters: [] },
            { code: "MEE 101", title: "Engineering Drawing I",           description: "Orthographic and isometric projections, engineering drawing standards.", chapters: [] },
            { code: "GNS 101", title: "Use of English I",                description: "English comprehension, grammar, vocabulary and writing skills.", chapters: [] },
            { code: "GNS 103", title: "Information Literacy",            description: "Research skills, library use, digital information and academic integrity.", chapters: [] },
            { code: "TNP 101", title: "Fundamentals of Innovation",      description: "Introduction to innovation thinking, technology and creative problem solving.", chapters: [] },
            { code: "FNT 101", title: "Introductory Accounting I",       description: "Basic bookkeeping, accounting equations, journals, ledgers and trial balance.", chapters: [] },
            { code: "PMT 101", title: "Foundation of PMT",               description: "Introduction to project management technology: concepts, scope and relevance.", chapters: [] },
          ]
        },
        {
          id: "2nd",
          name: "2nd Semester",
          courses: [
            { code: "CHE 102", title: "General Chemistry II",            description: "Thermodynamics, kinetics, electrochemistry and chemical equilibrium.", chapters: [] },
            { code: "CHE 104", title: "Experimental Chemistry II",       description: "Advanced laboratory experiments including synthesis and analysis.", chapters: [] },
            { code: "PHY 102", title: "General Physics II",              description: "Electrostatics, current electricity, magnetism and electromagnetic induction.", chapters: [] },
            { code: "PHY 108", title: "General Physics Laboratory II",   description: "Practical experiments in electricity and magnetism.", chapters: [] },
            { code: "MTS 102", title: "Introductory Mathematics II",     description: "Integration, differential equations, sequences, series and complex numbers.", chapters: [] },
            { code: "MEE 102", title: "Workshop Practice",               description: "Hands-on workshop skills: woodwork, metalwork, welding and fitting.", chapters: [] },
            { code: "PMT 102", title: "Science, Technology and Society", description: "History of science, energy resources, role of technology in national economy.", chapters: [] },
            { code: "GNS 102", title: "Use of English II",               description: "Essay writing, oral communication, comprehension and precis writing.", chapters: [] },
            { code: "GNS 106", title: "Logic and Philosophy",            description: "Critical thinking, logic, philosophy of science and formal reasoning.", chapters: [] },
            { code: "FNT 102", title: "Introductory Accounting II",      description: "Financial statements, depreciation, inventory valuation and trial balance.", chapters: [] },
            { code: "CSC 102", title: "Introduction to Computing",       description: "Computer hardware, software, internet, programming basics and applications.", chapters: [] },
            { code: "BIO 102", title: "General Biology II",              description: "", chapters: [] },
            { code: "MTS 104", title: "Applied Mathematics",             description: "", chapters: [] },
            { code: "EEE 102", title: "Software Application in EEE",     description: "", chapters: [] },
            { code: "GNS 102", title: "Use of English II",               description: "", chapters: [] },
          ]
        }
      ]
    },

    // ── 200 LEVEL ───────────────────────────
    {
      id: "200",
      name: "200 Level",
      fullName: "Second Year",
      description: "Intermediate courses across management, engineering, economics and ICT.",
      semesters: [
        {
          id: "1st",
          name: "1st Semester",
          courses: [
            { code: "FNT 103", title: "Introduction to Economics I",              description: "Microeconomics: demand, supply, market structures, consumer theory.", chapters: [] },
            { code: "MTS 201", title: "Mathematical Methods I",                   description: "Differential equations, matrices, vectors and Laplace transforms.", chapters: [] },
            { code: "CSC 201", title: "Introduction to Computer Programming",     description: "Programming fundamentals using structured languages; algorithms and flowcharts.", chapters: [] },
            { code: "PMT 201", title: "Principles of Management",                 description: "Planning, organizing, staffing, directing, controlling; management theories.", chapters: [] },
            { code: "GNS 203", title: "Nigerian History and Culture",             description: "Pre-colonial, colonial and post-colonial Nigeria; culture and institutions.", chapters: [] },
            { code: "FNT 203", title: "Cost Accounting I",                        description: "Cost concepts, job costing, process costing, overhead absorption.", chapters: [] },
            { code: "MEE 207", title: "Applied Mechanics",                        description: "Statics, stress analysis, strain, torsion and beam bending.", chapters: [] },
            { code: "FNT 211", title: "Fundamentals of Financial Technology",     description: "FinTech concepts, digital payments, blockchain and financial innovation.", chapters: [] },
            { code: "FNT 215", title: "Quantitative Techniques",                  description: "Statistics, probability, regression, decision theory and operations analysis.", chapters: [] },
          ]
        },
        {
          id: "2nd",
          name: "2nd Semester",
          courses: [
            { code: "FNT 104", title: "Introduction to Economics II",                    description: "Macroeconomics: national income, monetary policy, fiscal policy and growth.", chapters: [] },
            { code: "PMT 202", title: "Management Theory and Practice",                  description: "Scientific management, human relations, Theory X/Y, management by objectives.", chapters: [] },
            { code: "MEE 202", title: "Engineering Drawing II",                          description: "Advanced drawing: assembly drawings, sectional views and tolerances.", chapters: [] },
            { code: "CSC 202", title: "System Programming with Computer",                description: "Assembly language, compilers, operating system fundamentals.", chapters: [] },
            { code: "FNT 204", title: "Cost Accounting II",                              description: "Standard costing, variance analysis, marginal costing and CVP analysis.", chapters: [] },
            { code: "PMT 204", title: "Introduction to Project Management",              description: "Project lifecycle, feasibility, site selection, finance and cost-benefit analysis.", chapters: [] },
            { code: "PMT 206", title: "Industrial Psychology & Organisational Behaviour", description: "Motivation, leadership, group dynamics, organisational culture and change.", chapters: [] },
            { code: "CSP 210", title: "Practical Agriculture",                           description: "Basic crop and animal production, agricultural technology and food security.", chapters: [] },
            { code: "FNT 214", title: "Introduction to Statistics",                      description: "Descriptive statistics, probability distributions, sampling and hypothesis testing.", chapters: [] },
            { code: "FNT 216", title: "Economics of Innovation",                         description: "Innovation economics, R&D, intellectual property, technological change.", chapters: [] },
          ]
        }
      ]
    },

    // ── 300 LEVEL ───────────────────────────
    {
      id: "300",
      name: "300 Level",
      fullName: "Third Year",
      description: "Core departmental courses.",
      semesters: [
        {
          id: "1st",
          name: "1st Semester",
          courses: [
            { code: "ENT 301", title: "Essentials of Entrepreneurship",              description: "A comprehensive study of entrepreneurship, innovation, business creation, and growth strategies.", chapters: [] },
            { code: "PMT 301", title: "Energy Technology Management I",              description: "Energy demand and supply, policy instruments, energy security, economic growth and environmental protection.", chapters: [] },
            { code: "PMT 303", title: "Operation Management I",                      description: "Production systems classification, demand forecasting, aggregate planning, location and layout of factory.", chapters: [] },
            { code: "PMT 305", title: "Small Business Management",                   description: "Fundamentals of business management, small business plans, legal issues, accounting and capital sourcing.", chapters: [] },
            { code: "PMT 307", title: "Industrial Location",                         description: "Weber's Theory, factors affecting location decisions, factor rating, centre-of-gravity method, transportation LP.", chapters: [] },
            { code: "PMT 309", title: "Industrial and Project Safety Management",    description: "Safety planning, hazard analysis, safety plan execution, personnel protective equipment, accident investigation.", chapters: [] },
            { code: "PTM 311", title: "Commercial Law",                              description: "Nigerian legal system, law of contracts, commercial arbitration, company law, introduction to taxation.", chapters: [] },
            { code: "PMT 315", title: "Engineering Economy",                         description: "Time value of money, capital recovery, present worth, annual worth, future worth and rate of return.", chapters: [] },
            { code: "PMT 313", title: "Marketing and Product Innovation",            description: "Marketing types, sales strategy, product lifecycle, market feedback, prototyping and product launch.", chapters: [] },
          ]
        },
        {
          id: "2nd",
          name: "2nd Semester",
          courses: [
            { code: "TNP 302", title: "Practical Skills in Entrepreneurship",         description: "Hands-on entrepreneurship: business registration, pitching, financial planning and startup execution.", chapters: [] },
            { code: "PMT 302", title: "Project Design & Environmental Impact Assessment", description: "Project identification, objectives, EIA definitions, baseline studies, impact prediction and mitigation.", chapters: [] },
            { code: "PMT 304", title: "Management of Project Materials",              description: "Materials purchasing, stock control, ABC analysis, stores organisation, perpetual inventory.", chapters: [] },
            { code: "PMT 306", title: "Economic Pricing of Public Utilities",         description: "Rate base, pricing structures, cost of capital, peak-load pricing, electricity and water supply pricing.", chapters: [] },
            { code: "PMT 308", title: "Human Resource Management",                   description: "Staffing, training, performance management, compensation, Delphi technique, job evaluation methods.", chapters: [] },
            { code: "PMT 310", title: "Maintenance Management",                      description: "Planned/unplanned maintenance, maintenance economics, life-cycle cost, repairs and replacement policies.", chapters: [] },
            { code: "PMT 312", title: "Operations Management II",                    description: "Operations sequencing, supply chain design, quality management, lean operations and scheduling.", chapters: [] },
          ]
        }
      ]
    },

    // ── 400 LEVEL ───────────────────────────
    {
      id: "400",
      name: "400 Level",
      fullName: "Fourth Year",
      description: "Advanced Courses and SIWES.",
      semesters: [
        {
          id: "1st",
          name: "1st Semester",
          courses: [
            { code: "PMT 401", title: "Project Risk Management Technology",          description: "Risk identification, quantification, response control, Monte Carlo process and legal/ethical considerations.", chapters: [] },
            { code: "PMT 403", title: "Research Methodology",                        description: "Research design, sampling, hypothesis testing, questionnaire design, data processing and analysis.", chapters: [] },
            { code: "PMT 405", title: "Operations Research I",                       description: "Linear programming (graphical), transportation model, assignment model, CPM, PERT and inventory control.", chapters: [] },
            { code: "PMT 407", title: "Feasibility Studies & Technical Report Writing", description: "Technical writing, report organisation, feasibility studies, specifications and contract documents.", chapters: [] },
            { code: "PMT 409", title: "Quality Assurance and Control",               description: "Quality concepts, TQM, acceptance sampling, control charts, ISO standards and quality circles.", chapters: [] },
            { code: "TNP 411", title: "Commercialisation of R&D Outcomes",           description: "Technology transfer, IP commercialisation, spin-offs, licensing and innovation ecosystems.", chapters: [] },
            { code: "PMT 411", title: "Field Trip",                                  description: "Supervised industrial visits to engineering firms and project sites for practical exposure.", chapters: [] },
            { code: "PMT 413", title: "Industrial Engineering I",                    description: "Work study, method study, work measurement, ergonomics, time and motion study, workplace design.", chapters: [] },
            { code: "PMT 415", title: "System Engineering for Project Managers",     description: "System concepts, mathematical description, state space approach, system design and computer simulation.", chapters: [] },
          ]
        },
        {
          id: "2nd",
          name: "2nd Semester — SIWES",
          courses: [
            { code: "PMT 402", title: "Industrial Training (Industry-Based Assessment)", description: "Student Industrial Work Experience Scheme: assessed by industry-based supervisors.", chapters: [] },
            { code: "PMT 404", title: "Industrial Training (FUTA Supervisor Assessment)", description: "Student Industrial Work Experience Scheme: assessed by FUTA academic supervisors.", chapters: [] },
            { code: "PMT 406", title: "Student's Report and Presentation",            description: "Comprehensive written report and oral presentation of industrial training experience.", chapters: [] },
          ]
        }
      ]
    },

    // ── 500 LEVEL ───────────────────────────
    {
      id: "500",
      name: "500 Level",
      fullName: "Fifth Year",
      description: "Final year advanced courses, professional conduct and final year research project.",
      semesters: [
        {
          id: "1st",
          name: "1st Semester",
          courses: [
            { code: "PMT 501", title: "Industrial Engineering II",                   description: "MRP, CPM/PERT scheduling, aggregate planning, CAD/CAM, CNC programming, robotics and CIM.", chapters: [] },
            { code: "PMT 503", title: "Project Finance & Contract Management",       description: "Sources of capital, investment decision models, procurement methods, contracts and BOOT/PPP systems.", chapters: [] },
            { code: "PMT 505", title: "Project Management Ethics & Professional Conduct", description: "Professional practice, project manager's duties, Nigerian Association of Project Management.", chapters: [] },
            { code: "PMT 507", title: "Development Planning & Project Management",   description: "Plans and projects, social cost-benefit analysis, project scheduling and stakeholder management.", chapters: [] },
            { code: "PMT 509", title: "Operations Research II",                      description: "Simplex method, duality theory, non-linear programming, queuing models, Markov chains.", chapters: [] },
            { code: "PMT 599", title: "Final Year Student's Project",                description: "Original research in project management under academic supervision; written report and oral defence.", chapters: [] },
          ]
        },
        {
          id: "2nd",
          name: "2nd Semester",
          courses: [
            { code: "PMT 502", title: "Software Design and Development",             description: "Programming concepts, control structures, methods, arrays, objects, classes and language comparison.", chapters: [] },
            { code: "PMT 504", title: "Project Cost Estimating and Tendering",       description: "Estimating procedures, BOQ preparation, tendering arrangements, procurement and contract evaluation.", chapters: [] },
            { code: "PMT 506", title: "Project Planning and Control",                description: "CPM applications, project scope, schedule, cost and quality planning, investment appraisal.", chapters: [] },
            { code: "PMT 508", title: "Computer-Based Project Management",           description: "PERT/CPM software applications, project monitoring, ICT-based evaluation and reporting systems.", chapters: [] },
            { code: "PMT 510", title: "Project Formulation and Appraisal",           description: "Project concept, cost analysis, profitability analysis, NPV, IRR, payback period and financial analysis.", chapters: [] },
            { code: "PMT 512", title: "Industrial and Labour Legislation",           description: "Labour law, industrial relations, trade unions, collective bargaining and employment regulations.", chapters: [] },
          ]
        }
      ]
    },

    // ── PGD ─────────────────────────────────
    {
      id: "pgd",
      name: "PGD",
      fullName: "Postgraduate Diploma",
      description: "Postgraduate diploma bridging courses.",
      semesters: [{ id: "all", name: "All Courses", courses: [] }]
    },

    // ── MASTERS ─────────────────────────────
    {
      id: "masters",
      name: "Masters",
      fullName: "M.Sc / M.Eng / MBA",
      description: "Postgraduate taught and research programmes.",
      semesters: [{ id: "all", name: "All Courses", courses: [] }]
    },

    // ── PHD ─────────────────────────────────
    {
      id: "phd",
      name: "Ph.D",
      fullName: "Doctor of Philosophy",
      description: "Doctoral research programmes.",
      semesters: [{ id: "all", name: "All Courses", courses: [] }]
    }

  ] // end levels

}; // end PORTAL_DATA


/* ─────────────────────────────────────────────────────────────────
   APPLY INJECTED CHAPTERS
   After PORTAL_DATA is defined, loop through all courses and fill
   in any chapters that were registered by course files.
───────────────────────────────────────────────────────────────── */
(function applyInjections() {
  PORTAL_DATA.levels.forEach(level => {
    level.semesters.forEach(sem => {
      sem.courses.forEach(course => {
        if (_COURSE_REGISTRY[course.code]) {
          course.chapters = _COURSE_REGISTRY[course.code];
        }
      });
    });
  });
})();
