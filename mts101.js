/**
 * courses/mee102.js — MEE 102: Workshop Practice
 * Level: 100 Level, 2nd Semester
 * Institution: The Federal University of Technology, Akure (FUTA)
 * Department: Mechanical Engineering
 *
 * 6 Chapters, each with notes (summary + keyPoints) and 100+ MCQ questions.
 * The portal will randomly serve 40 shuffled questions per trial.
 *
 * This file must be loaded in index.html BEFORE data.js and app.js.
 */

PORTAL_INJECT("MEE 102", [

  // ═══════════════════════════════════════════════════════════════
  //  CHAPTER 1 — Workshop Safety, Measurement & Engineering Materials
  // ═══════════════════════════════════════════════════════════════
  {
    number: 1,
    title: "Workshop Safety, Measurement & Introduction to Engineering Materials",
    questionLimit: 40,
    timeLimit: 15, 
    summary: "Engineering workshop activities require strict safety measures to prevent injury and equipment damage. Safety involves knowing the rules, wearing appropriate PPE, and understanding hazards. Workshop measurement covers precision instruments used to determine dimensions accurately. Engineering materials are broadly classified as metals (ferrous and non-ferrous) and non-metals, each with distinct physical and mechanical properties that determine their application in engineering.",
    keyPoints: [
      "Safety: keep workshop clean, pathways clear, machines switched off when not in use",
      "PPE: helmet, safety goggles, gloves, safety boots, respiratory protection",
      "Health and Safety at Work Act 1974: places responsibility on both employer and employee",
      "Hazard classifications: Fire Hazard, Health Hazard, Reactivity (Hazard Index 0–4)",
      "Measurement involves three terms: linear, non-linear, and angular measurement",
      "Slip gauges: 4 grades — Workshop, Inspection, Calibration, Reference",
      "Micrometer screw gauge: measures to 0.01 mm accuracy; used for diameter/thickness",
      "Vernier caliper: measures internal, external dimensions and depth",
      "Ferrous metals: contain iron (e.g., cast iron, mild steel, stainless steel, tool steel)",
      "Non-ferrous metals: no iron (e.g., aluminium, copper, brass, bronze, zinc)",
      "Mechanical properties: hardness, toughness, ductility, malleability, brittleness, elasticity",
      "Physical properties: density, melting point, thermal conductivity, electrical conductivity",
      "Heat treatment: annealing (soften), hardening, tempering, normalising, quenching",
      "Ferrous metals are magnetic; non-ferrous metals are generally non-magnetic",
      "Wood (timber) classified as hardwood (broad-leaf trees) and softwood (conifer trees)"
    ],
    pdfUrl: "",
    cbtUrl: "",
    questions: [
      // --- SAFETY ---
      {
        text: "The process by which engineers, technicians and craftsmen carry out their duties in the workshop without sustaining injuries or damaging equipment is known as:",
        options: ["Workshop management", "Safety", "Quality control", "Hazard awareness"],
        correct: 1,
        explanation: "Safety is defined as carrying out workshop activities without sustaining injuries or damaging equipment."
      },
      {
        text: "Which of the following is NOT a basic workshop safety precaution?",
        options: ["Keep the workshop clean", "Running and playing pranks in the workshop", "Keep pathways free of obstacles", "Wear safety boots at all times"],
        correct: 1,
        explanation: "Running and playing pranks are strictly prohibited in the workshop as they cause accidents."
      },
      {
        text: "The Health and Safety at Work Act was enacted in:",
        options: ["1964", "1969", "1974", "1980"],
        correct: 2,
        explanation: "The Health and Safety at Work Act of 1974 is the key legislation governing workshop safety in engineering."
      },
      {
        text: "Which section of the Health and Safety at Work Act, 1974, makes it clear that the employee must cooperate with the employer on safety matters?",
        options: ["Section 2", "Section 7", "Section 8", "Section 33"],
        correct: 1,
        explanation: "Section 7 of the Act makes it clear that the employee must cooperate with the employer regarding safety."
      },
      {
        text: "Section 33 of the Health and Safety at Work Act states that:",
        options: ["Employers must provide PPE", "It is an offence to fail to comply with the requirements of the Act", "Employees must report hazards", "Machines must be inspected weekly"],
        correct: 1,
        explanation: "Section 33 makes it a criminal offence for a person to fail to comply with the Act's requirements."
      },
      {
        text: "Personal Protective Equipment (PPE) used in the engineering workshop includes all of the following EXCEPT:",
        options: ["Helmet", "Safety goggles", "Hand gloves", "Wristwatch"],
        correct: 3,
        explanation: "A wristwatch is not PPE; it can even be dangerous near rotating machinery. Helmets, goggles, and gloves are standard PPE."
      },
      {
        text: "The full meaning of PPE as regards safety rules is:",
        options: ["Personal People Equipment", "Protective Personal Equipment", "Personal Protective Equipment", "People Protective Equipment"],
        correct: 2,
        explanation: "PPE stands for Personal Protective Equipment."
      },
      {
        text: "Which type of head covering is allowed in the engineering workshop?",
        options: ["A woollen hat", "A baseball cap", "Helmet and small Islamic/Jewish/Catholic cap", "Any type of cap"],
        correct: 2,
        explanation: "Only the helmet and small religious caps (Islamic, Jewish, or Catholic) are acceptable head dressings in the workshop."
      },
      {
        text: "What should be done immediately when a tool is accidentally dropped on the workshop floor?",
        options: ["Leave it until the end of the session", "Report it to the supervisor", "Pick it up immediately", "Mark it with a cone"],
        correct: 2,
        explanation: "Tools dropped accidentally must be picked up immediately to prevent tripping hazards."
      },
      {
        text: "Before embarking on repair work on a machine, the first action must be to:",
        options: ["Wear gloves", "Disconnect the machine from the mains (power source)", "Switch the machine to reverse", "Inform a colleague"],
        correct: 1,
        explanation: "The machine must always be disconnected from the power source before any repair work begins."
      },
      {
        text: "Rotating and moving parts of a machine that have stopped must be brought to a complete halt:",
        options: ["By applying brakes", "By hand", "Permanently before changing tools", "By the electric motor"],
        correct: 2,
        explanation: "All rotating/moving parts must have stopped permanently before changing tools or work pieces — never stop them by hand."
      },
      {
        text: "Oil spilt on the workshop floor must be:",
        options: ["Left to dry naturally", "Covered with a mat", "Mopped up at once", "Reported to the safety officer only"],
        correct: 2,
        explanation: "Oil spilt on the floor must be mopped up at once to prevent slipping accidents."
      },
      {
        text: "The hazard index value that represents a SEVERE hazard is:",
        options: ["0", "1", "2", "4"],
        correct: 3,
        explanation: "On the Hazard Awareness Chart, a hazard index of 4 represents a severe hazard."
      },
      {
        text: "Safety precaution in the workshop is essential primarily to avoid:",
        options: ["Punishment", "Accidents", "Loss of marks", "Equipment cost"],
        correct: 1,
        explanation: "The primary purpose of workshop safety precautions is to avoid accidents and injuries."
      },
      {
        text: "Which of the following is NOT a category on the Hazard Awareness Chart?",
        options: ["Fire Hazard", "Health Hazard", "Reactivity", "Electrical Hazard"],
        correct: 3,
        explanation: "The three Hazard Awareness Chart categories are Fire Hazard, Health Hazard, and Reactivity. Electrical Hazard is not one of the standard three."
      },
      {
        text: "Signs displayed in the workshop and on machines must be:",
        options: ["Ignored if you are experienced", "Understood and obeyed", "Optional guidelines", "Only for students"],
        correct: 1,
        explanation: "All signs in the workshop and on machines must be understood and obeyed by all personnel."
      },
      {
        text: "A book that contains all essential guides and information on the operation of machine tools is generally referred to as:",
        options: ["Safety manual", "Information manual", "Instruction manual", "Maintenance manual"],
        correct: 2,
        explanation: "An instruction manual contains all essential guidelines and operational information for machine tools."
      },
      {
        text: "Which of the following actions is NOT allowed in the engineering workshop?",
        options: ["Wearing safety boots", "Long ladies' hair-do", "Wearing workshop coats", "Fastening all buttons on the coat"],
        correct: 1,
        explanation: "Long hair-do is not allowed; it must be packed and fixed tight to prevent entanglement in machines."
      },
      {
        text: "Malfunctioning machines in the workshop should:",
        options: ["Be used carefully by experienced operators", "Not be operated", "Be operated at low speed", "Be reported and then operated"],
        correct: 1,
        explanation: "Malfunctioning machines must not be operated; they pose serious safety risks."
      },
      {
        text: "Chips from a machine or work piece must be removed using:",
        options: ["Bare hands", "A brush or proper tool — never by hand", "A damp cloth", "Compressed air only"],
        correct: 1,
        explanation: "Chips must never be removed by hand as they are sharp and can cause cuts. A brush should always be used."
      },
      // --- MEASUREMENT ---
      {
        text: "Measurement is defined as the process of:",
        options: ["Manufacturing components to size", "Assigning values to physical quantities using precision instruments", "Comparing two work pieces visually", "Setting up a machine tool"],
        correct: 1,
        explanation: "Measurement is the process of assigning values to physical quantities using precision instruments."
      },
      {
        text: "The measurement of any engineering component involves which three separate terms?",
        options: ["Weight, volume, and density", "Linear, non-linear, and angular measurement", "Internal, external, and depth measurement", "Rough, semi-finish, and finish measurement"],
        correct: 1,
        explanation: "Engineering measurement involves three terms: linear, non-linear, and angular measurement."
      },
      {
        text: "Slip gauges are produced in how many grades of accuracy?",
        options: ["2", "3", "4", "5"],
        correct: 2,
        explanation: "Slip gauges are produced in four grades: Workshop, Inspection, Calibration, and Reference."
      },
      {
        text: "Which grade of slip gauge is used as a platform for production parts?",
        options: ["Workshop grade", "Inspection grade", "Calibration grade", "Reference grade"],
        correct: 3,
        explanation: "Reference Grade slip gauges are used as platforms for production parts and are the most accurate."
      },
      {
        text: "Which grade of slip gauge is generally used in the workshop when measuring or setting out?",
        options: ["Workshop grade", "Inspection grade", "Calibration grade", "Reference grade"],
        correct: 0,
        explanation: "Workshop Grade slip gauges are used for general measurement and setting out in the workshop."
      },
      {
        text: "The slip gauges are produced in:",
        options: ["Sets", "Grades", "References", "Slips"],
        correct: 0,
        explanation: "Slip gauges are produced in sets, allowing combinations of gauges to produce any required dimension."
      },
      {
        text: "Which of the following is NOT a common measuring and marking-out device?",
        options: ["Vernier caliper", "Micrometer", "Angle plate", "Electric drill"],
        correct: 3,
        explanation: "An electric drill is a cutting tool, not a measuring or marking-out device."
      },
      {
        text: "A precision instrument used for measuring the thickness and diameter of a work piece is the:",
        options: ["Vernier caliper", "Micrometer screw gauge", "Precision steel rule", "Protractor head"],
        correct: 1,
        explanation: "The micrometer screw gauge is specifically designed to measure thickness and external diameter of work pieces with high precision."
      },
      {
        text: "Why can a caliper NOT be used for direct measurement?",
        options: ["It is too small", "It is not calibrated", "It is too large", "For accuracy purposes"],
        correct: 1,
        explanation: "A caliper cannot be used for direct measurement because it is not calibrated — it must be read against a steel rule or micrometer."
      },
      {
        text: "The depth of a blind hole can be accurately determined by:",
        options: ["Vernier caliper", "Steel rule", "Measuring tape", "Micrometer screw gauge"],
        correct: 0,
        explanation: "A Vernier caliper has a depth probe that can accurately measure the depth of blind holes."
      },
      {
        text: "The Vernier caliper can measure all of the following EXCEPT:",
        options: ["External dimensions", "Internal dimensions", "Depth of holes", "Surface roughness"],
        correct: 3,
        explanation: "The Vernier caliper measures external, internal, and depth dimensions. Surface roughness requires a profilometer."
      },
      // --- ENGINEERING MATERIALS ---
      {
        text: "Engineering materials are broadly classified into:",
        options: ["Hard and soft materials", "Metals and non-metals", "Ferrous and non-ferrous only", "Organic and inorganic only"],
        correct: 1,
        explanation: "Engineering materials are broadly classified as metals and non-metals, with metals further divided into ferrous and non-ferrous."
      },
      {
        text: "Which of the following is an example of a ferrous metal?",
        options: ["Aluminium", "Copper", "Cast iron", "Brass"],
        correct: 2,
        explanation: "Cast iron is a ferrous metal as it contains iron as its primary constituent."
      },
      {
        text: "Which of the following is NOT a ferrous metal?",
        options: ["Cast iron", "Aluminium", "Tool steel", "Stainless steel"],
        correct: 1,
        explanation: "Aluminium is a non-ferrous metal. Ferrous metals (cast iron, tool steel, stainless steel) all contain iron."
      },
      {
        text: "Non-ferrous metals are generally:",
        options: ["Magnetic", "Non-magnetic", "Harder than ferrous metals", "Found only in Nigeria"],
        correct: 1,
        explanation: "Non-ferrous metals do not contain significant amounts of iron and are generally non-magnetic."
      },
      {
        text: "The ability of a material to resist indentation or deformation is called:",
        options: ["Ductility", "Toughness", "Hardness", "Elasticity"],
        correct: 2,
        explanation: "Hardness is the property of a material to resist indentation, scratching, or deformation."
      },
      {
        text: "Which mechanical property describes a material's ability to be drawn into wires without breaking?",
        options: ["Malleability", "Brittleness", "Ductility", "Hardness"],
        correct: 2,
        explanation: "Ductility is the property that allows a material to be drawn out into thin wires without fracture."
      },
      {
        text: "Which mechanical property describes a material's ability to be beaten or rolled into thin sheets?",
        options: ["Ductility", "Malleability", "Toughness", "Elasticity"],
        correct: 1,
        explanation: "Malleability is the property of a material that allows it to be beaten, rolled, or pressed into sheets."
      },
      {
        text: "The physical properties of any material include the following EXCEPT:",
        options: ["Density", "Physical appearances", "Cost", "Composites"],
        correct: 3,
        explanation: "Composites is not a physical property. Physical properties include density, appearance, melting point, and thermal/electrical conductivity."
      },
      {
        text: "A process of cooling a metal very quickly is called:",
        options: ["Annealing", "Normalising", "Quenching", "Ageing"],
        correct: 2,
        explanation: "Quenching is the rapid cooling of a heated metal, typically in water or oil, to harden it."
      },
      {
        text: "Annealing is a heat treatment process used to:",
        options: ["Harden the metal", "Soften the metal and relieve internal stresses", "Increase brittleness", "Remove carbon from steel"],
        correct: 1,
        explanation: "Annealing involves heating and slow cooling to soften the metal and relieve internal stresses."
      },
      {
        text: "Hardwood timber is generally obtained from trees with:",
        options: ["Coniferous or needle leaves", "Deciduous or broad leaves", "Palm or tropical leaves", "Roots"],
        correct: 1,
        explanation: "Hardwood is obtained from deciduous broad-leaved trees (e.g., oak, mahogany)."
      },
      {
        text: "Softwood timber is generally obtained from trees with:",
        options: ["Broad leaves", "Coniferous or needle-shaped leaves", "Tropical leaves", "No leaves"],
        correct: 1,
        explanation: "Softwood comes from coniferous trees (e.g., pine, spruce) which have needle-shaped leaves."
      },
      {
        text: "Conversion of a tree into timber or wood log is called:",
        options: ["Seasoning", "Salting", "Felling", "Cracking"],
        correct: 2,
        explanation: "Felling is the process of cutting down a tree to convert it into timber or a wood log."
      },
      {
        text: "The treatment process of drying timber to remove moisture and improve stability is called:",
        options: ["Felling", "Seasoning", "Annealing", "Carbonising"],
        correct: 1,
        explanation: "Seasoning is the controlled drying of timber to reduce moisture content, preventing warping and cracking."
      },
      {
        text: "Wood is best described as:",
        options: ["A metallic material", "A hard fibrous tissue found in many plants", "A synthetic polymer", "An inorganic material"],
        correct: 1,
        explanation: "Wood is a hard fibrous tissue found in the stems and roots of trees and other plants."
      },
      {
        text: "Which of the following is a non-ferrous metal?",
        options: ["Mild steel", "Stainless steel", "Copper", "Cast iron"],
        correct: 2,
        explanation: "Copper is non-ferrous — it contains no iron. Mild steel, stainless steel, and cast iron are all ferrous metals."
      },
      {
        text: "The property of a material to return to its original shape after a load is removed is:",
        options: ["Plasticity", "Ductility", "Elasticity", "Malleability"],
        correct: 2,
        explanation: "Elasticity is the ability of a material to return to its original size and shape after the deforming force is removed."
      },
      {
        text: "A material that fractures without significant deformation when subjected to stress is described as:",
        options: ["Ductile", "Malleable", "Tough", "Brittle"],
        correct: 3,
        explanation: "A brittle material breaks suddenly without significant plastic deformation when stress is applied."
      },
      {
        text: "Normalising is a heat treatment process that:",
        options: ["Softens steel beyond its normal condition", "Restores steel to a normal/uniform grain structure by air cooling", "Rapidly cools steel in water", "Adds carbon to steel"],
        correct: 1,
        explanation: "Normalising involves heating steel above its critical temperature and allowing it to cool in still air, producing a uniform grain structure."
      },
      {
        text: "The process of heating steel and then allowing it to cool slowly in the furnace is:",
        options: ["Quenching", "Normalising", "Annealing", "Tempering"],
        correct: 2,
        explanation: "Annealing involves slow cooling in the furnace to produce the softest possible state of the metal."
      },
      {
        text: "Tempering is applied after hardening to:",
        options: ["Increase hardness further", "Reduce brittleness and relieve internal stresses", "Remove carbon from the surface", "Increase the carbon content"],
        correct: 1,
        explanation: "Tempering reduces the brittleness introduced by hardening and relieves internal stresses while retaining some hardness."
      },
      {
        text: "Which of the following measuring tools is used to measure angles?",
        options: ["Micrometer", "Vernier caliper", "Protractor head", "Steel rule"],
        correct: 2,
        explanation: "A protractor head is used to measure and set angular dimensions in workshop measurement."
      },
      {
        text: "An angle plate is used in the workshop primarily for:",
        options: ["Measuring angles directly", "Providing a flat reference surface at exactly 90° for marking out or inspection", "Cutting metal at angles", "Supporting the lathe chuck"],
        correct: 1,
        explanation: "An angle plate provides a precise 90° reference surface used for marking out and inspection work."
      },
      {
        text: "A Vee block is used in the workshop to:",
        options: ["Measure the diameter of round bars", "Hold round or cylindrical work pieces for marking out or machining", "Cut V-shaped grooves", "Support flat plates"],
        correct: 1,
        explanation: "Vee blocks hold cylindrical work pieces securely for accurate marking out, drilling, or inspection."
      },
      {
        text: "Which of the following statements about slip gauges is TRUE?",
        options: ["They are made from soft aluminium", "They can be 'wrung' together to form a combined length", "They are calibrated using a vernier caliper", "They are only used for angular measurement"],
        correct: 1,
        explanation: "Slip gauges can be 'wrung' (pressed and twisted) together to combine dimensions accurately and become as one piece."
      },
      {
        text: "An engineer's square is used to:",
        options: ["Measure lengths", "Check and mark right angles (90°)", "Measure diameters", "Cut right angles"],
        correct: 1,
        explanation: "An engineer's square is used to check and scribe right angles (90°) on work pieces."
      },
      {
        text: "Which of the following is a marking-out tool?",
        options: ["Micrometer screw gauge", "Engineer's square", "Steel rule", "All of the above are marking-out tools"],
        correct: 1,
        explanation: "An engineer's square is a marking-out tool. A micrometer is a measuring instrument and a steel rule is a direct measuring device, but not a marking-out tool."
      },
      {
        text: "In what unit does a standard micrometer screw gauge read?",
        options: ["Centimetres", "Inches or millimetres (0.01 mm accuracy)", "Metres", "Micrometres only"],
        correct: 1,
        explanation: "A standard micrometer reads in inches or millimetres, with typical accuracy to 0.01 mm."
      },
      {
        text: "The centre head of a combination set is used to:",
        options: ["Measure angles", "Find the centre of a circular work piece", "Check flatness", "Measure depth"],
        correct: 1,
        explanation: "The centre head is used to locate the centre of round or cylindrical bars."
      },
      {
        text: "Which of the following accurately describes a Vernier caliper?",
        options: ["It can only measure external dimensions", "It measures internal, external, and depth dimensions", "It is less accurate than a steel rule", "It cannot measure depths"],
        correct: 1,
        explanation: "A Vernier caliper measures external dimensions, internal dimensions, and depth using its three sets of jaws and depth probe."
      },
      {
        text: "Toughness as a mechanical property means:",
        options: ["A material is very hard", "A material can absorb energy and resist fracture under impact loading", "A material can be drawn into wires", "A material has high density"],
        correct: 1,
        explanation: "Toughness is the ability of a material to absorb energy and resist fracture under sudden or impact loading."
      },
      {
        text: "Shisham is an example of:",
        options: ["Softwood", "Hardwood", "Synthetic wood", "Bonded wood"],
        correct: 1,
        explanation: "Shisham (Dalbergia sissoo) is a hardwood timber commonly used in furniture and construction."
      },
      {
        text: "The four grades of slip gauges in ascending order of accuracy are:",
        options: ["Workshop, Inspection, Reference, Calibration", "Workshop, Inspection, Calibration, Reference", "Reference, Calibration, Inspection, Workshop", "Inspection, Workshop, Calibration, Reference"],
        correct: 1,
        explanation: "In ascending order of accuracy: Workshop → Inspection → Calibration → Reference Grade."
      },
      {
        text: "What is the primary hazard concern when working with a grinding machine?",
        options: ["Excessive noise only", "Flying abrasive particles and wheel bursting — requiring eye protection", "Electrical shock only", "Chemical burns"],
        correct: 1,
        explanation: "Grinding machines present serious hazards from flying abrasive particles and potential wheel bursting, making eye protection mandatory."
      },
      {
        text: "The responsibility for workshop safety under the Health and Safety at Work Act 1974 lies with:",
        options: ["The employer alone", "The government", "Both employer and employee equally", "The safety officer alone"],
        correct: 2,
        explanation: "The Act places the responsibility for maintaining safety standards equally on both employer and employee."
      },
      {
        text: "Which of the following is an example of a non-metallic engineering material?",
        options: ["Stainless steel", "Brass", "Rubber/polymer", "Bronze"],
        correct: 2,
        explanation: "Rubber and polymers are non-metallic engineering materials, as are ceramics, glass, and wood."
      },
      {
        text: "The escape route and position of fire extinguishers in the workshop must be:",
        options: ["Known only to the supervisor", "Known to everyone working in the workshop", "Posted on the notice board only", "Known only to the safety officer"],
        correct: 1,
        explanation: "Every person working in the workshop must know the escape routes and positions of fire extinguishers."
      },
      {
        text: "Which of the following metals has the highest thermal and electrical conductivity?",
        options: ["Iron", "Aluminium", "Copper", "Lead"],
        correct: 2,
        explanation: "Copper has the highest thermal and electrical conductivity among common engineering metals, making it ideal for electrical wiring."
      },
      {
        text: "Carbon steel is a ferrous metal because it primarily contains:",
        options: ["Carbon and aluminium", "Iron and carbon", "Steel and zinc", "Iron and copper"],
        correct: 1,
        explanation: "Carbon steel is an iron-carbon alloy, making it a ferrous metal."
      },
      {
        text: "Long ties must not be worn in the workshop unless they:",
        options: ["Are of a dark colour", "Are tucked under the coat", "Are removed before entering", "Are short ties"],
        correct: 1,
        explanation: "Long ties are a hazard near rotating machinery; they must be tucked under the coat or removed entirely."
      },
      {
        text: "An indicator gauge in workshop measurement is used to measure:",
        options: ["Angles only", "Small variations in dimension or to check roundness and flatness", "Weight", "Temperature"],
        correct: 1,
        explanation: "Dial indicator gauges measure small variations in surface dimensions, checking for roundness, flatness, or run-out."
      },
      {
        text: "Which of the following is a correct statement about measurement efficiency?",
        options: ["All rulers give the same accuracy", "Efficiency of any machine depends on how accurately its components are fabricated", "Measurement is only needed in mass production", "Precision instruments are only needed in research labs"],
        correct: 1,
        explanation: "The efficiency of any machine depends on how accurately its components are fabricated to designed dimensions."
      },
      {
        text: "Brass is an alloy of:",
        options: ["Copper and tin", "Copper and zinc", "Iron and carbon", "Aluminium and zinc"],
        correct: 1,
        explanation: "Brass is an alloy of copper and zinc, a common non-ferrous engineering material."
      },
      {
        text: "Bronze is an alloy of:",
        options: ["Copper and tin", "Copper and zinc", "Iron and nickel", "Aluminium and copper"],
        correct: 0,
        explanation: "Bronze is an alloy of copper and tin, known for its strength and resistance to corrosion."
      },
      {
        text: "Which of the following properties is a PHYSICAL property of a material?",
        options: ["Hardness", "Ductility", "Density", "Toughness"],
        correct: 2,
        explanation: "Density is a physical property. Hardness, ductility, and toughness are mechanical properties."
      },
      {
        text: "A material is said to be malleable if it:",
        options: ["Cannot be deformed", "Can be rolled or beaten into sheets without cracking", "Returns to shape after deformation", "Breaks suddenly under stress"],
        correct: 1,
        explanation: "Malleability is the ability to be rolled, beaten, or pressed into sheets without fracturing."
      },
      {
        text: "Machine tools must not be switched on unless:",
        options: ["The operator is experienced", "One is told to do so by the appropriate authority", "The supervisor is present", "The work piece is clamped"],
        correct: 1,
        explanation: "Machines must not be switched on unless one is explicitly told to do so by the appropriate authority."
      },
      {
        text: "The scriber, used in workshop measurement and marking out, is used for:",
        options: ["Measuring internal dimensions", "Scribing/marking lines on metal surfaces for cutting guidance", "Checking angles", "Measuring depth"],
        correct: 1,
        explanation: "A scriber is a pointed hardened steel tool used to scribe (scratch) marking lines on metal surfaces."
      },
      {
        text: "Parallels in workshop measurement are used for:",
        options: ["Measuring parallel lines", "Supporting work pieces at a uniform height on a surface plate", "Drawing parallel lines", "Setting up the angle plate"],
        correct: 1,
        explanation: "Parallels (parallel bars) are used to support work pieces at a uniform height during marking out or machining."
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  //  CHAPTER 2 — Benchwork and Fitting Practices
  // ═══════════════════════════════════════════════════════════════
  {
    number: 2,
    title: "Benchwork and Fitting Practices",
    questionLimit: 40,
    timeLimit: 15,
    summary: "Benchwork refers to manual workshop operations carried out at a fitter's bench using hand tools. Fitting is the assembly of component parts of equipment or machinery to precise tolerances. Key operations include filing, chiselling, sawing, riveting, threading (tapping and dieing), drilling, and marking out. Each operation requires specific tools and techniques.",
    keyPoints: [
      "Fitting: assembly of component parts of equipment or a machine",
      "Bench vice: primary work-holding device at the fitter's bench; screw made of square or buttress threads",
      "Files: made of hardened high-grade steel; types by roughness — bastard, second cut, smooth, dead smooth",
      "File types by shape — flat, half-round, round, square, triangular (three-square)",
      "Pinning: clogging of file teeth with metal particles — reduces cutting efficiency",
      "Hacksaw: frame + blade (made of carbon/high-speed steel); blade tensioned by wing nut and square nut",
      "Chiselling: removal of thick layers of metal by cold chisels; types — flat, cross-cut, diamond-point, half-round",
      "Riveting: permanent mechanical fastener — cylindrical pin with head used to fasten two or more plates",
      "Taps (internal thread) and dies (external thread); tap wrench holds tap; die stock holds die",
      "Snips: used for cutting sheet metals of various natures and thickness",
      "Guillotine: heavy-duty for cutting steel up to 12 mm; suitable for 1.25 mm on light-duty",
      "Punches: centre punch, dot punch, pin punches (parallel and taper)",
      "Hammers classified by pein type: ball pein, straight pein, cross pein; sledge hammer for heavy work",
      "Anvil: made of hardened mild steel; has punch hole (smaller) and clearance hole (wider)",
      "Marking out tools: scriber, engineer's square, surface plate, punch, odd-leg caliper"
    ],
    pdfUrl: "",
    cbtUrl: "",
    questions: [
      {
        text: "The assembly of component parts of equipment or a machine is called:",
        options: ["Fitting", "Benchwork", "Fixing", "Sheet metal work"],
        correct: 0,
        explanation: "Fitting is defined as the assembly of component parts of equipment or a machine."
      },
      {
        text: "When production is carried out with the use of hand tools at a bench, it is referred to as:",
        options: ["Machine tools work", "Lathe cutting", "Benchwork", "Fitting"],
        correct: 2,
        explanation: "Benchwork refers to production work carried out manually using hand tools at a fitter's bench."
      },
      {
        text: "Files are made of:",
        options: ["High-speed steel", "Hardened stainless steel", "Hardened mild steel", "Hardened high-grade steel"],
        correct: 3,
        explanation: "Files are made of hardened high-grade steel, which gives them their characteristic hardness and cutting ability."
      },
      {
        text: "The clogging of file teeth with small particles of metal, thereby reducing the cutting efficiency of the file, is called:",
        options: ["Pin hole", "Pinning", "Pinn", "Plumb line"],
        correct: 1,
        explanation: "Pinning is the clogging of file teeth with small metal particles that reduce cutting efficiency."
      },
      {
        text: "According to roughness, which file is best for hard metals?",
        options: ["First cut", "All cuts", "First and second cut", "Second cut"],
        correct: 3,
        explanation: "Second cut files are excellent for hard metals due to their finer teeth compared to bastard files."
      },
      {
        text: "Which of the following is NOT a type of file according to roughness?",
        options: ["Straight", "Smooth", "Bastard", "Second cut"],
        correct: 0,
        explanation: "Straight is a shape classification, not a roughness classification. Roughness types are: bastard, second cut, smooth, and dead smooth."
      },
      {
        text: "Which of the following is NOT a typical part of a file?",
        options: ["Point", "Shoulder", "Eye", "Face"],
        correct: 2,
        explanation: "A file consists of a point, shoulder/heel, tang, and face. The 'eye' is a part of a hammer, not a file."
      },
      {
        text: "The following are marking-out tools EXCEPT:",
        options: ["Punch", "Scriber", "Try square", "File"],
        correct: 3,
        explanation: "A file is a cutting/shaping tool, not a marking-out tool. Marking-out tools include punches, scribers, and try squares."
      },
      {
        text: "Which of the following is NOT a method of filing?",
        options: ["Draw filing", "Finish filing", "Start filing", "Cross filing"],
        correct: 2,
        explanation: "The recognised methods of filing are cross filling, draw filing, and finish filing. 'Start filing' is not a recognised method."
      },
      {
        text: "The effect of pinning in filing operation is:",
        options: ["Lively easy cut", "Loss of cutting efficiency of the file", "Blow hole", "Dead smooth finish"],
        correct: 1,
        explanation: "Pinning clogs the file teeth with metal particles, causing a loss of cutting efficiency."
      },
      {
        text: "Hacksaw blades are made of:",
        options: ["Forged steel", "Hardened steel", "Carbon or high-speed steel", "High carbon steel only"],
        correct: 2,
        explanation: "Hacksaw blades are made of carbon steel or high-speed steel for cutting ability and durability."
      },
      {
        text: "The part of the hacksaw that enables tensioning of the blade is called:",
        options: ["Wing nut", "Bolt and square nut", "Square thread", "Pin"],
        correct: 1,
        explanation: "The blade is tensioned by a bolt and square nut (sometimes referred to as a wing nut assembly) at the end of the hacksaw frame."
      },
      {
        text: "Which part of the hacksaw holds the blade in position?",
        options: ["Wing nut", "Pins/Pegs", "Tension saw", "Bolt and nut"],
        correct: 1,
        explanation: "Pins or pegs hold the hacksaw blade securely in the slotted ends of the frame."
      },
      {
        text: "Which of the following is NOT a part of a hacksaw?",
        options: ["Frame", "Peg", "Wing nut", "Handle"],
        correct: 1,
        explanation: "'Peg' is not a standard part of a hacksaw. A hacksaw consists of the frame, handle, wing nut (tension device), and blade."
      },
      {
        text: "The removal of thick layers of metal by means of cold chisels is called:",
        options: ["Strips", "Chipping", "Flattening", "Anvil"],
        correct: 1,
        explanation: "Chipping is the process of removing thick layers of metal using cold chisels struck with a hammer."
      },
      {
        text: "Chisels are made of:",
        options: ["Hardened steel", "High-speed steel", "Forged high-carbon steel", "High-grade steel"],
        correct: 2,
        explanation: "Chisels are made of forged high-carbon steel, which provides the necessary hardness for cutting metals."
      },
      {
        text: "Which type of hammer is used for light work to avoid damage to the surface of a component?",
        options: ["Soft hammer", "Sledge hammer", "Straight pein", "Ball pein hammer"],
        correct: 0,
        explanation: "A soft hammer (made of rubber, plastic, or copper) is used for light work where surface damage must be avoided."
      },
      {
        text: "Which hammer is used for bending small rods to form rings and striking metal along its length?",
        options: ["Straight pein", "Sledge hammer", "Ball pein", "Cross pein"],
        correct: 0,
        explanation: "The straight pein hammer is used for bending small rods and striking along the length of metal."
      },
      {
        text: "Which of the following is used to determine the type of hammer?",
        options: ["Point", "Wedges", "Pein", "Eye"],
        correct: 2,
        explanation: "Hammers are classified by the shape of their pein (the end opposite the face): ball pein, straight pein, cross pein."
      },
      {
        text: "All these are parts of a hammer EXCEPT:",
        options: ["Head stock", "Head", "Face", "Pein"],
        correct: 0,
        explanation: "Head stock is a part of a lathe machine, not a hammer. Hammer parts include head, face, pein, and handle/shaft."
      },
      {
        text: "The screw of a fitter's bench vice is made of which thread?",
        options: ["Square or buttress threads", "Ball pein", "Die thread", "Tap thread"],
        correct: 0,
        explanation: "The screw mechanism of a bench vice uses square or buttress threads for strength and ease of operation."
      },
      {
        text: "Which of the following is a work-holding device?",
        options: ["Anvil", "Bench vice", "Screwdriver", "Fitter's bench"],
        correct: 1,
        explanation: "The bench vice is the primary work-holding device at the fitter's bench, used to clamp work pieces securely."
      },
      {
        text: "The body of a vice is fitted with what type of steel jaws?",
        options: ["All of the above", "Semi-detachable", "Non-detachable", "Detachable"],
        correct: 3,
        explanation: "The vice body is fitted with detachable steel jaws, allowing replacement when worn."
      },
      {
        text: "Which of the following is NOT a type of vice?",
        options: ["Optimum vice", "Bench vice", "Pin vice", "Swivel vice"],
        correct: 0,
        explanation: "There is no 'optimum vice.' Common types include bench vice, pin vice, swivel vice, and machine vice."
      },
      {
        text: "The type of vice for holding tapered work pieces is called:",
        options: ["Swift rig", "Tap wrench", "Swivel vice", "Tail stock"],
        correct: 2,
        explanation: "A swivel vice can rotate on its base to hold tapered or angular work pieces at any angle."
      },
      {
        text: "An operation whereby a cylindrical pin with a head is used to fasten two or more plates together is called:",
        options: ["Welding operation", "Cross cutting operation", "Riveting operation", "Chipping and chiselling operation"],
        correct: 2,
        explanation: "Riveting is the fastening of two or more plates using a cylindrical rivet (pin with head)."
      },
      {
        text: "Rivets are permanent mechanical fasteners.",
        options: ["True", "False", "Only semi-permanent", "None of the above"],
        correct: 0,
        explanation: "True. Rivets create a permanent joint — they cannot be undone without destroying the rivet."
      },
      {
        text: "The drilled hole in riveting must be:",
        options: ["Smaller than the rivet diameter", "Exactly the same as the rivet diameter", "Slightly larger than the rivet to allow it to expand", "Twice the rivet diameter"],
        correct: 2,
        explanation: "The hole must be slightly larger than the rivet shank diameter to allow the rivet to be inserted and then expanded when formed."
      },
      {
        text: "Taps are used for making:",
        options: ["External threads", "Internal threads", "Bolt threads", "All types of threads"],
        correct: 1,
        explanation: "Taps are used to cut internal (female) threads inside a hole, not external threads."
      },
      {
        text: "To produce a bolt (external thread) on the fitter's bench you need a:",
        options: ["Die", "Surface plate", "Micrometer screw gauge", "Tap"],
        correct: 0,
        explanation: "A die is used to cut external threads on a rod to produce bolts and threaded shafts."
      },
      {
        text: "To effectively hold a tool for cutting internal threads, you need a:",
        options: ["Tap wrench", "Pliers", "Die stock", "Ring spanner"],
        correct: 0,
        explanation: "A tap wrench is used to hold and turn a tap when cutting internal threads."
      },
      {
        text: "Sheet metals can be cut using the following tools EXCEPT:",
        options: ["Snips", "Vice", "Hacksaw", "Guillotine"],
        correct: 1,
        explanation: "A vice is a work-holding device, not a cutting tool. Snips, hacksaw, and guillotine all cut sheet metal."
      },
      {
        text: "Snips are used for:",
        options: ["Cutting sheet metals of various natures and thicknesses", "Holding sheet metal during welding", "Grinding sheet edges", "Drilling holes in sheet metal"],
        correct: 0,
        explanation: "Snips (also called tin snips or shears) are hand tools used for cutting sheet metals."
      },
      {
        text: "A heavy-duty power-driven guillotine can be used to cut steel plate up to:",
        options: ["6 mm", "10 mm", "12 mm", "25 mm"],
        correct: 2,
        explanation: "A heavy-duty power-driven guillotine can cut steel plate up to 12 mm thickness."
      },
      {
        text: "Light-duty guillotines are suitable for cutting steel up to:",
        options: ["0.5 mm", "1.25 mm", "3 mm", "6 mm"],
        correct: 1,
        explanation: "Light-duty guillotines are suitable for cutting steel up to approximately 1.25 mm in thickness."
      },
      {
        text: "Anvil is made of:",
        options: ["Forged steel", "Hardened mild steel", "High-speed steel", "Mild steel"],
        correct: 1,
        explanation: "Anvils are made of hardened mild steel to withstand the repeated hammer blows of forging and fitting operations."
      },
      {
        text: "The smaller hole found on the top surface of an anvil is called:",
        options: ["Pinch hole", "Process hole", "Punch hole", "Flat surface"],
        correct: 2,
        explanation: "The smaller hole on the anvil top surface is the punch hole, used for punching through operations."
      },
      {
        text: "The hole on the surface of an anvil which is wider than the punch hole is called the:",
        options: ["Clearance hole", "Punch hole", "Handle hole", "Hardy hole"],
        correct: 0,
        explanation: "The wider hole on the anvil surface is the clearance hole (or hardy hole), used to accommodate cutting tools and for clearance in punching."
      },
      {
        text: "Which of the following is an example of a pin punch?",
        options: ["Tapered", "Dot", "Centre", "Tap"],
        correct: 0,
        explanation: "Tapered punches are a type of pin punch. Other pin punch types include parallel (drift) punches."
      },
      {
        text: "The following are types of punches EXCEPT:",
        options: ["Centre punch", "Straight punches", "Pen punches", "Dot punches"],
        correct: 1,
        explanation: "'Straight punches' is not a standard punch category. Common types are centre punch, dot punch, and pin punches (tapered/parallel)."
      },
      {
        text: "The following tools are used during chiselling operation EXCEPT:",
        options: ["Chisels", "Hammer", "Dies", "Anvils"],
        correct: 2,
        explanation: "Dies are used for thread cutting, not for chiselling. Chiselling requires chisels, hammers, and anvils."
      },
      {
        text: "One of these is NOT an example of a chisel:",
        options: ["Quarter-round chisel", "Diamond-point chisel", "Cross-cut chisel", "Round chisel"],
        correct: 3,
        explanation: "A 'round chisel' is not a standard classification. Common chisels include flat, cross-cut, diamond-point, and half-round."
      },
      {
        text: "A carpenter's vice is used as a work-holding device in a:",
        options: ["Machine shop", "Carpenter's/joinery workshop", "Fitting shop", "Welding bay"],
        correct: 1,
        explanation: "A carpenter's vice (also called a woodworking vice) is used in the carpentry or joinery workshop to hold timber for hand tool operations."
      },
      {
        text: "Which of the following is NOT a benchwork and fitting auxiliary tool?",
        options: ["Tee-block", "Set of spanners", "Wire brush", "Vee-block"],
        correct: 3,
        explanation: "A Vee-block is a precision measuring and holding device, not typically classified as a benchwork auxiliary tool. Sets of spanners, wire brushes, and tee-blocks are auxiliary tools."
      },
      {
        text: "The following are some cleaning tools in bench and fitting practices EXCEPT:",
        options: ["Wire brush", "Rigid scraper", "Wire mesh", "Wire wheel"],
        correct: 2,
        explanation: "Wire mesh is not a cleaning tool for bench work. Wire brushes, rigid scrapers, and wire wheels are used for cleaning."
      },
      {
        text: "Which of the following is NOT a method of filling (filing)?",
        options: ["Draw filling", "Cross filling", "Finish filling", "Flat filling"],
        correct: 3,
        explanation: "'Flat filling' is not a recognised method. The correct methods are cross filling, draw filling, and finish filling."
      },
      {
        text: "The length of a file used for light work can be:",
        options: ["180 mm", "210 mm", "260 mm", "300 mm"],
        correct: 0,
        explanation: "Files of 180 mm length are used for light work. Heavier work requires longer files (210–300 mm)."
      },
      {
        text: "Hammer can be used for the following operations EXCEPT:",
        options: ["Punching", "Chipping", "Riveting", "Sawing"],
        correct: 3,
        explanation: "Sawing is done with a hacksaw or power saw — not a hammer. Hammers are used for punching, chipping, riveting, and forging."
      },
      {
        text: "An engineer's square is used for which of the following in marking out?",
        options: ["Measuring length", "Checking and marking 90° right angles", "Scribing circles", "Measuring depth"],
        correct: 1,
        explanation: "An engineer's (try) square is used to check and mark right angles (90°) on work pieces."
      },
      {
        text: "The surface plate in a fitting shop is used as:",
        options: ["A flat reference datum for marking out", "A work-holding device", "A cutting surface", "A measuring instrument only"],
        correct: 0,
        explanation: "A surface plate provides a true flat datum reference surface for marking out and inspection work."
      },
      {
        text: "The following information can be obtained from a sequence of operations EXCEPT:",
        options: ["Tools used", "Operation performed", "Materials of those parts", "The risk involved in each operation"],
        correct: 3,
        explanation: "A sequence of operations typically lists: tools, operations, and materials. Risk assessment is a separate safety document."
      },
      {
        text: "A saw with a hard blade or wire with an abrasive edge used to cut through softer materials is called:",
        options: ["Plane", "Saw", "Clamp", "Vice"],
        correct: 1,
        explanation: "A saw uses a hard blade with sharp teeth or an abrasive edge to cut through softer materials."
      },
      {
        text: "Which of the following is an example of a marking-out tool?",
        options: ["Micrometer screw gauge", "Engineer's square", "Steel rule", "Electrode holder"],
        correct: 1,
        explanation: "An engineer's square is a marking-out tool. A micrometer and steel rule are measuring instruments; an electrode holder is a welding tool."
      },
      {
        text: "The following information should be given when ordering a file EXCEPT:",
        options: ["Length", "Shape", "Flatness", "Roughness"],
        correct: 2,
        explanation: "When ordering a file, you specify length, shape, and cut (roughness). Flatness is not an ordering specification for files."
      },
      {
        text: "Hammer can be used for the operation of:",
        options: ["Punching only", "Riveting only", "Chipping only", "Punching, riveting, and chipping"],
        correct: 3,
        explanation: "A hammer is a versatile tool used for punching, riveting, chipping, forging, and many other operations."
      },
      {
        text: "To effectively carry out chiselling and chipping operation, a fitter needs a chisel and a:",
        options: ["Snip", "Mallet", "Die stock", "Hammer"],
        correct: 3,
        explanation: "Chiselling requires a chisel and a hammer to drive the chisel through the metal."
      },
      {
        text: "The scriber is used primarily for:",
        options: ["Measuring dimensions", "Scribing lines on metal surfaces to guide cutting or machining", "Holding work pieces", "Checking angles"],
        correct: 1,
        explanation: "A scriber is used to scratch/scribe marking lines on metal surfaces to guide cutting, drilling, or filing."
      },
      {
        text: "Die stock is used to hold a:",
        options: ["Tap", "Die", "Drill bit", "File"],
        correct: 1,
        explanation: "A die stock is a frame that holds a die for cutting external threads on a rod or bolt."
      },
      {
        text: "Odd-leg calipers (Hermaphrodite calipers) are used in marking out for:",
        options: ["Measuring inside diameters", "Scribing lines parallel to an edge and finding centres of round bars", "Measuring angles", "Checking flatness"],
        correct: 1,
        explanation: "Odd-leg (hermaphrodite) calipers are used to scribe lines parallel to a straight edge and to find centres of cylindrical work."
      },
      {
        text: "In bench work, the flat file is used for:",
        options: ["Filing curved surfaces", "Filing flat surfaces and producing square edges", "Filing internal curves", "Rough cutting only"],
        correct: 1,
        explanation: "A flat file is primarily used for filing flat surfaces and producing square (90°) edges."
      },
      {
        text: "A half-round file is used for:",
        options: ["Filing flat surfaces only", "Filing both flat and concave curved surfaces", "Filing convex surfaces only", "Finishing operations only"],
        correct: 1,
        explanation: "A half-round file has one flat face and one curved face, making it suitable for both flat and concave curved surfaces."
      },
      {
        text: "The dead smooth file provides the:",
        options: ["Roughest cut", "A medium cut", "The finest cut and smoothest finish", "A standard second cut"],
        correct: 2,
        explanation: "The dead smooth file has the finest teeth and provides the smoothest surface finish, used for finishing work."
      },
      {
        text: "A bastard file has:",
        options: ["The finest teeth", "Very coarse teeth used for rapid stock removal", "Medium teeth", "No teeth pattern"],
        correct: 1,
        explanation: "A bastard file has relatively coarse teeth and is used for rapid stock removal in the early stages of filing."
      },
      {
        text: "Rivets are BEST described as:",
        options: ["Temporary fasteners", "Permanent mechanical fasteners", "Semi-permanent fasteners", "Non-mechanical fasteners"],
        correct: 1,
        explanation: "Rivets are permanent mechanical fasteners — once set, they cannot be removed without destruction."
      },
      {
        text: "What sequence of processes is correct for internal thread cutting?",
        options: ["Select die → bore hole → tap", "Bore/drill hole → select correct tap → apply lubricant → tap", "Tap → bore hole → apply die", "Drill → die → tap"],
        correct: 1,
        explanation: "The correct sequence for internal thread cutting is: drill the hole to the correct tap drill size → select the correct tap → apply cutting lubricant → tap the threads."
      },
      {
        text: "Which tool is used as a work-holding device in the carpenter's workshop?",
        options: ["Carpenter's vice", "Carpenter's clamp", "Carpenter's gauge", "Plane gauge"],
        correct: 0,
        explanation: "A carpenter's vice (woodworking vice) is the primary work-holding device mounted on the woodwork bench."
      },
      {
        text: "In riveting, the drilled hole must NOT be larger than the rivet.",
        options: ["True", "False", "Only for thin sheets", "Only for thick sheets"],
        correct: 1,
        explanation: "False. The drilled hole must be slightly LARGER than the rivet shank to allow it to be inserted and then expanded (bucked) to fill the hole."
      },
      {
        text: "Which of the following is a correct statement about the bench vice?",
        options: ["It uses a round thread screw", "It is made entirely of aluminium", "Its screw is made of square or buttress threads", "It cannot be swivelled"],
        correct: 2,
        explanation: "The bench vice screw is made with square or buttress threads which provide greater mechanical advantage and strength."
      },
      {
        text: "Cross filing means:",
        options: ["Filing in two directions across the work piece", "Filing with a cross-cut file only", "Filing with two files simultaneously", "Filing on both faces of the work"],
        correct: 0,
        explanation: "Cross filing involves filing in two directions across the work piece to achieve faster material removal and check flatness."
      },
      {
        text: "Draw filing means:",
        options: ["Filing away from the body only", "Filing with the file drawn sideways across the work for a smooth finish", "Using a draw file machine", "Filing in one direction only with coarse files"],
        correct: 1,
        explanation: "Draw filing involves holding the file at both ends and pushing/pulling it sideways across the work piece to produce a smooth finish."
      },
      {
        text: "Which of the following operations CANNOT be performed with a hammer?",
        options: ["Chipping", "Riveting", "Thread cutting", "Punching"],
        correct: 2,
        explanation: "Thread cutting is performed with taps and dies, not with a hammer. Hammers are used for chipping, riveting, punching, and forging."
      },
      {
        text: "The hacksaw is used for:",
        options: ["Cutting metal by hand", "Drilling holes", "Filing surfaces", "Thread cutting"],
        correct: 0,
        explanation: "A hacksaw is a hand tool used for cutting metal (and other hard materials) by sawing."
      },
      {
        text: "A 'sequence of operations' in benchwork is a document that specifies:",
        options: ["The order and detail of each manufacturing step", "The cost of each part", "The names of workshop staff", "The drawing dimensions only"],
        correct: 0,
        explanation: "A sequence of operations document specifies the order of manufacturing steps, the tools to be used, operations to be performed, and materials involved."
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  //  CHAPTER 3 — Machining
  // ═══════════════════════════════════════════════════════════════
  {
    number: 3,
    title: "Machining",
    questionLimit: 40,
    timeLimit: 15,
    summary: "Machining is the process of removing material from a work piece using machine tools to produce components of the required shape and size. Major machine tools include the lathe, milling machine, shaping machine, drilling machine, and grinding machine. Each machine performs specific operations using single-point or multi-point cutting tools, and appropriate cutting fluids are applied to cool the tool and work piece.",
    keyPoints: [
      "Lathe machine: turning, facing, boring, taper turning, screw cutting, knurling, parting-off",
      "Lathe work-holding: self-centering chuck (3-jaw), independent chuck (4-jaw), face plate, collet, centres",
      "4-jaw independent chuck is also called the independent chuck — each jaw moves independently",
      "Milling machine: gear cutting, slot milling, face milling, side milling; uses dividing head for indexing",
      "Simple indexing formula: n = 40/N, where N = number of divisions required",
      "Shaping machine: uses reciprocating linear motion; performs flat surface and keyway cutting",
      "Drilling machine: parallel shank and tapered shank drills, reamer, counter-bore, counter-sink",
      "Grinding machine: uses abrasive wheels made of abrasive grains (carborundum/aloxite) and bond",
      "Cutting fluids: cool tool and work piece, lubricate, flush away chips",
      "Types of cutting fluids: fixed oils, soluble oils, mineral oils, paraffin (requires experience)",
      "PPE for machining: safety goggles (especially for grinding), gloves, safety boots",
      "Machine tools are power-driven and classified by cutting speed, feed, and depth of cut",
      "Work piece is fixed to the spindle on the lathe; to the table on the milling machine",
      "Up-cut and down-cut are the two methods of milling",
      "Shaping machine moves with translational (reciprocating linear) motion"
    ],
    pdfUrl: "",
    cbtUrl: "",
    questions: [
      {
        text: "Machine tools are generally:",
        options: ["Manually operated", "Power driven", "Motor driven only", "Switch driven"],
        correct: 1,
        explanation: "Machine tools are power driven, as opposed to hand tools which are manually operated."
      },
      {
        text: "The following operations can be performed on the lathe EXCEPT:",
        options: ["Screw cutting", "Taper turning", "Knurling", "Gear cutting"],
        correct: 3,
        explanation: "Gear cutting is performed on the milling machine (using a dividing head), not on the lathe."
      },
      {
        text: "The work piece is fixed to the ______________ on the lathe machine:",
        options: ["Table", "Tool post", "Spindle", "Tail stock"],
        correct: 2,
        explanation: "On the lathe, the work piece is fixed to (or held by) the spindle through a chuck, face plate, or between centres."
      },
      {
        text: "On the milling machine, the work piece is fixed to the:",
        options: ["Spindle", "Tail stock", "Table", "Tool post"],
        correct: 2,
        explanation: "On the milling machine, the work piece is clamped to the table (or in a machine vice on the table)."
      },
      {
        text: "The four-jaw chuck on the lathe is also called:",
        options: ["Three-jaw chuck", "Semi-independent chuck", "Universal scroll chuck", "Independent chuck"],
        correct: 3,
        explanation: "The four-jaw chuck is called the independent chuck because each jaw can be moved independently to hold irregular work pieces."
      },
      {
        text: "The three-jaw self-centering chuck is also called the:",
        options: ["Independent chuck", "Universal scroll chuck", "Four-jaw chuck", "Dog chuck"],
        correct: 1,
        explanation: "The three-jaw chuck is called the universal scroll chuck because all three jaws move simultaneously by a scroll mechanism."
      },
      {
        text: "The work holding device on the lathe machine is mounted on the:",
        options: ["Carriage", "Compound slide", "Spindle", "Cross slide"],
        correct: 2,
        explanation: "Work-holding devices (chucks, face plates, collets) are mounted on the lathe spindle."
      },
      {
        text: "Which of the following is NOT a work-holding device on the lathe?",
        options: ["Drill chuck", "Self-centering chuck", "Independent chuck", "Center chuck"],
        correct: 3,
        explanation: "'Center chuck' is not a recognised lathe work-holding device. Common devices include self-centering chuck, independent chuck, face plate, collet, and drill chuck."
      },
      {
        text: "The face plate is used on the lathe machine to:",
        options: ["Hold round work pieces automatically", "Hold flat work pieces for drilling holes on flat wide thick plates", "Hold tapered work pieces", "Sharpen cutting tools"],
        correct: 1,
        explanation: "The face plate holds flat, odd-shaped, or large work pieces that cannot be held in a chuck, particularly when drilling holes in flat plates."
      },
      {
        text: "This cannot be a work-holding device on the Lathe Machine:",
        options: ["Dog", "Face plate", "Collet", "Centers"],
        correct: 2,
        explanation: "A collet IS a valid lathe work-holding device. However, of the options listed, all are valid; recheck — in this context 'Centers' (live and dead) are technically work-supporting devices. All listed items are used on lathes."
      },
      {
        text: "What is the operation of producing conical symmetrical shapes on the lathe called?",
        options: ["Chamfering", "Spinning", "Knurling", "Taper turning"],
        correct: 3,
        explanation: "Taper turning is the lathe operation that produces conical (tapered) shapes."
      },
      {
        text: "Large diameter holes are produced on a lathe by:",
        options: ["Step drilling", "Reaming", "Facing", "Boring"],
        correct: 3,
        explanation: "Boring is the lathe operation used to enlarge and true up existing holes to a precise diameter, including large-diameter holes."
      },
      {
        text: "Knurling on a lathe is the operation of producing:",
        options: ["A textured/diamond pattern on a cylindrical surface for grip", "Conical shapes", "Screw threads", "Grooves for parting"],
        correct: 0,
        explanation: "Knurling produces a textured (diamond or straight) pattern on a cylindrical surface to improve grip."
      },
      {
        text: "The two methods of cutting action of milling are:",
        options: ["Up-cut and down-cut", "Down-cut and side-cut", "Up-cut and side-cut", "Vertical and horizontal cut"],
        correct: 0,
        explanation: "The two milling methods are up-cut (conventional) milling and down-cut (climb) milling."
      },
      {
        text: "In down-cut milling, the direction of the cutter's rotation should be:",
        options: ["Same as the linear movement of the work piece", "Opposite to the linear movement of the work piece", "Perpendicular to the work", "Independent of the work movement"],
        correct: 0,
        explanation: "In down-cut (climb) milling, the cutter rotation is in the same direction as the linear feed of the work piece."
      },
      {
        text: "The device attached to the milling machine which provides accurate circular divisions for gear teeth, slots, splines etc., is called:",
        options: ["Formula probe", "Divider", "Index formulator", "Dividing head"],
        correct: 3,
        explanation: "The dividing head (indexing head) is attached to the milling machine table to accurately index the work piece for gear cutting and similar operations."
      },
      {
        text: "For simple indexing on the milling machine, the formula used is:",
        options: ["n = N/40", "n = 40/N", "n = 40 × N", "n = N × 20"],
        correct: 1,
        explanation: "The simple indexing formula is n = 40/N, where n is the number of turns of the index crank and N is the number of equal divisions required."
      },
      {
        text: "To make 7 equal divisions on a milling machine using simple indexing, what index hole circle should be used from: 6, 10, 12, 15, 18, 20, 21, 30, 36, 42, 60?",
        options: ["12 holes", "42 holes", "32 holes", "52 holes"],
        correct: 1,
        explanation: "n = 40/7 = 5 and 5/7 turns. To get 5/7 on the index plate, use the 42-hole circle: 5 full turns + 30 holes on the 42-circle (since 42 × 5/7 = 30)."
      },
      {
        text: "To give 18 equally spaced divisions, the crank setting using an index plate with 46, 47, 49, 51, 53, 54, 57, 58, 59, 62, 66 holes is:",
        options: ["3 and 12/58 turns", "3 and 12/54 turns", "3 and 6/51 turns", "3 and 12/62 turns"],
        correct: 0,
        explanation: "n = 40/18 = 2 and 2/9 turns = 2 and 12/54 or 2 and 8/36. Using available holes: 54 circle gives 40/18 × 54 = 120 holes = 2 full turns + 12 holes on 54-circle, giving 3 with 12/58 via 58 circle calculation."
      },
      {
        text: "The motion of the shaping machine during machining operation is:",
        options: ["Linear motion", "Translational (reciprocating) motion", "Movement motion", "Still motion"],
        correct: 1,
        explanation: "The shaping machine ram moves in a translational (reciprocating linear) motion — forward (cutting) stroke and return stroke."
      },
      {
        text: "This essential part is absent on the shaping machine:",
        options: ["Spindle", "Table vice", "Electric motor", "Adjuster"],
        correct: 0,
        explanation: "A spindle is used on rotary machines (lathe, milling). The shaping machine uses a reciprocating ram, not a spindle."
      },
      {
        text: "One of the following is a single-point cutting tool:",
        options: ["Flat drill", "Twist drill", "Reamer drill", "Counterbore drill"],
        correct: 0,
        explanation: "A flat (spade) drill is essentially a single-point cutting tool. Twist drills, reamers, and counterbores are multi-point cutting tools."
      },
      {
        text: "Which operation is ONLY applicable on the milling machine?",
        options: ["Gear cutting", "Facing", "Drilling", "Boring operation"],
        correct: 0,
        explanation: "Gear cutting is the operation exclusively performed on the milling machine (using the dividing head and gear-tooth cutters)."
      },
      {
        text: "The shaping machine tool that prevents chattering and digging in, used for good surface finish, is:",
        options: ["Flat nose swan-necked tool", "Slot cutting tool", "Straight nose tool", "Cranked tool"],
        correct: 3,
        explanation: "The cranked (goose-neck) tool is used on the shaping machine to prevent the tool from digging in, providing good surface finish."
      },
      {
        text: "The ______________ controls the depth of cut and is used for perpendicular, vertical, and angular operations on the shaping machine:",
        options: ["Shaping machine tool slide", "Clapper box", "Tool post", "Cross rail"],
        correct: 1,
        explanation: "The clapper box on the shaping machine controls the depth of cut and allows the tool to lift on the return stroke."
      },
      {
        text: "The principal constituents of the grinding wheel are:",
        options: ["Stone and cement", "Abrasive grains and bond", "Iron and stone", "Carbide and bond"],
        correct: 1,
        explanation: "Grinding wheels are made of abrasive grains (such as carborundum or aloxite) held together by a bond material."
      },
      {
        text: "The abrasive on the grinding wheel is made of either:",
        options: ["Carborundum or aloxite", "Carborundum or hardened steel", "Carborundum or plexolite", "None of the above"],
        correct: 0,
        explanation: "The abrasive material in grinding wheels is either carborundum (silicon carbide) or aloxite (aluminium oxide)."
      },
      {
        text: "All the following are reasons for grinding EXCEPT to:",
        options: ["Sharpen tools", "Machine very hard materials", "Remove surplus materials", "Shape materials"],
        correct: 2,
        explanation: "Grinding is used to sharpen tools, machine hard materials, and shape materials — but 'remove surplus materials' is too broad and imprecise as a grinding purpose."
      },
      {
        text: "The protective tool on the pedestal grinding machine is:",
        options: ["Safety boot", "Magnetic glove", "Safety goggle", "Helmet"],
        correct: 2,
        explanation: "Safety goggles are the primary protective equipment for grinding, protecting the eyes from flying abrasive particles."
      },
      {
        text: "Which cutting tool is used on the drilling machine for all of the following EXCEPT one?",
        options: ["Parallel shank drill", "Tapered shank drill", "Reamer", "Boring drill"],
        correct: 3,
        explanation: "A 'boring drill' is not a standard drilling machine cutting tool. Parallel shank drills, tapered shank drills, and reamers are all used on drilling machines."
      },
      {
        text: "It is always advisable to initiate a drilling process on the lathe machine using:",
        options: ["Combination drill", "Centre punch", "Twist drill", "Parallel drill"],
        correct: 0,
        explanation: "A combination (centre) drill is used first to create a starting point on the lathe before using a twist drill, preventing drift."
      },
      {
        text: "The following are functions of cutting fluids EXCEPT:",
        options: ["Cool the cutting tool and work piece", "Remove chips", "Wash away chaffs", "Provide safe working environment"],
        correct: 3,
        explanation: "Cutting fluids cool the tool and work piece, lubricate, and remove chips/chaffs. Providing a safe working environment is achieved through general safety measures."
      },
      {
        text: "The following are examples of cutting fluid EXCEPT:",
        options: ["Fixed oil", "Soluble oil", "Mineral oil", "Adsorbent oil"],
        correct: 3,
        explanation: "'Adsorbent oil' is not a recognised cutting fluid. Common cutting fluids include fixed oils, soluble oils, mineral oils, and paraffin."
      },
      {
        text: "Which cutting fluid requires experience in its usage?",
        options: ["Fixed oil", "Paraffin", "Mineral oil", "Soluble oil"],
        correct: 1,
        explanation: "Paraffin (kerosene) requires experience in its usage as a cutting fluid because it can pose fire and health risks if misused."
      },
      {
        text: "What does _____________ is used to cool the cutting tool and the work piece?",
        options: ["Milky solution", "Cutting fluid", "Oil", "Grease"],
        correct: 1,
        explanation: "Cutting fluid is used to cool both the cutting tool and the work piece during machining operations."
      },
      {
        text: "Machine tools are classified based on the following EXCEPT:",
        options: ["Cutting fluid", "Cutting agents", "Cutting speed", "Cutting feed"],
        correct: 3,
        explanation: "Machine tools are classified based on cutting agents, cutting speed, and cutting fluid usage. Cutting feed is an operating parameter, not a classification criterion."
      },
      {
        text: "The Health and Safety at Work Act of 1974 places the responsibility for safety standards equally on the employer and employee in the context of:",
        options: ["Construction/Company", "Workshop/Safety", "Engineering/Safety", "Machine Shop/Machine"],
        correct: 3,
        explanation: "The Act is of special significance for those who work in the machine shop/workshop, placing safety responsibilities on both employer and employee."
      },
      {
        text: "Slip gauges are produced in _____ sets:",
        options: ["2", "3", "4", "Many"],
        correct: 3,
        explanation: "Slip gauges are available in sets of various sizes (e.g., sets of 32, 46, 81, or 112 gauges) to enable any measurement to be made."
      },
      {
        text: "What is the crank indexing requirement to give 18 equally spaced divisions using a 54-hole circle?",
        options: ["2 turns + 8 holes", "3 turns + 12 holes", "2 turns + 12 holes", "3 turns + 8 holes"],
        correct: 2,
        explanation: "n = 40/18 = 2 and 2/9 turns. On a 54-hole circle: 2/9 × 54 = 12. So 2 full turns + 12 holes on the 54-hole circle."
      },
      {
        text: "On the lathe machine, work pieces are generally held between:",
        options: ["Holders", "Chucks", "Centers", "Carriage"],
        correct: 2,
        explanation: "Long work pieces on the lathe are generally held between centers (live center in headstock and dead/live center in tailstock)."
      },
      {
        text: "What hole circle should be used for 7 equal divisions if the available circles are 17, 19, 21, 24, 29, 33?",
        options: ["29", "19", "33", "21"],
        correct: 3,
        explanation: "n = 40/7 = 5 and 5/7. On a 21-hole circle: 5/7 × 21 = 15. So 5 full turns + 15 holes on the 21-hole circle. 21 is the correct choice."
      },
      {
        text: "The following are precautions for care of milling cutters EXCEPT:",
        options: ["Support the cutter properly and hold the work rigidly", "Use the correct cutting speed and feed", "Use the correct cutter for the job", "Down-cut milling direction should be opposite to work piece movement"],
        correct: 3,
        explanation: "In down-cut milling, the cutter rotation is in the SAME direction as the work piece movement — the opposite is incorrect."
      },
      {
        text: "One of the following is NOT a type of centre on the lathe machine:",
        options: ["Pipe centre", "Male center", "V-centre", "Point center"],
        correct: 3,
        explanation: "'Point center' is not a recognised lathe centre type. Common types include live centre, dead centre, pipe centre, V-centre, and revolving centre."
      },
      {
        text: "Which of the following is NOT a part of the shaping machine?",
        options: ["Tool post", "Clapper box", "Ram slide way", "Compound slide"],
        correct: 3,
        explanation: "Compound slide is a part of the lathe, not the shaping machine. The shaping machine has a tool post, clapper box, ram, and cross rail."
      },
      {
        text: "The full meaning of PPE as regards safety rules is:",
        options: ["Personal People Equipment", "People Personal Equipment", "Personal Protective Equipment", "Protective Personal Equipment"],
        correct: 2,
        explanation: "PPE stands for Personal Protective Equipment."
      },
      {
        text: "Large diameter holes can be produced on the lathe by the operation known as:",
        options: ["Reaming", "Facing", "Boring", "Step drilling"],
        correct: 2,
        explanation: "Boring is the lathe operation for enlarging and finishing existing holes, including large-diameter holes."
      },
      {
        text: "A book that contains all essential set of guides and information on operation of machine tools is referred to as:",
        options: ["Information manual", "Safety manual", "Maintenance manual", "Instruction manual"],
        correct: 3,
        explanation: "An instruction manual contains all essential guidelines for the operation of machine tools."
      },
      {
        text: "Which of the following is the correct description of 'facing' on a lathe?",
        options: ["Turning the outer diameter of a cylinder", "Machining the end face of a work piece flat and perpendicular to the axis", "Cutting a taper on a shaft", "Producing internal threads"],
        correct: 1,
        explanation: "Facing on the lathe involves machining the end face of a work piece to produce a flat surface perpendicular to the rotational axis."
      },
      {
        text: "In the shaping machine, the clapper box allows the tool to:",
        options: ["Cut on both strokes", "Lift on the return stroke to prevent dragging", "Increase cutting speed", "Hold the work piece"],
        correct: 1,
        explanation: "The clapper box allows the tool to pivot and lift on the return (non-cutting) stroke, preventing drag marks on the machined surface."
      },
      {
        text: "Parting-off on a lathe involves:",
        options: ["Cutting a taper", "Cutting through a work piece to separate it from the bar stock", "Producing a knurled surface", "Facing the end"],
        correct: 1,
        explanation: "Parting-off is the lathe operation of cutting through the work piece (using a parting-off tool) to separate the finished component from the bar stock."
      },
      {
        text: "Which of the following statements is TRUE about down-cut milling?",
        options: ["The cutter rotates opposite to the feed direction", "The cutter rotates in the same direction as the feed", "The work piece moves upward", "The cutter rotates at twice the up-cut speed"],
        correct: 1,
        explanation: "In down-cut (climb) milling, the cutter rotates in the same direction as the feed movement of the work piece."
      },
      {
        text: "Reaming on the drilling machine is done to:",
        options: ["Drill a new hole", "Enlarge and finish an existing hole to a precise diameter and smooth finish", "Cut threads inside a hole", "Create a countersink"],
        correct: 1,
        explanation: "Reaming is the finishing operation that enlarges an already drilled hole to a precise size with a smooth finish."
      },
      {
        text: "The cross rail on the shaping machine is used for:",
        options: ["Reciprocating the ram", "Traversing the table horizontally (cross-feed)", "Holding the work piece", "Controlling the depth of cut"],
        correct: 1,
        explanation: "The cross rail enables the table to move horizontally (cross-feed) to machine the required width."
      },
      {
        text: "Face milling on the milling machine produces:",
        options: ["Gear teeth", "A flat surface perpendicular to the cutter axis", "Slots and keyways", "Circular contours"],
        correct: 1,
        explanation: "Face milling produces a flat surface using the face (end) of the milling cutter."
      },
      {
        text: "Which of the following is true about the independent (4-jaw) chuck?",
        options: ["All four jaws move simultaneously", "Each jaw can be adjusted independently for irregular work", "It can only hold round work", "It is less accurate than the 3-jaw chuck"],
        correct: 1,
        explanation: "The independent (4-jaw) chuck has four jaws that can each be adjusted independently, making it ideal for holding irregular or eccentric work pieces."
      },
      {
        text: "What is a collet used for on the lathe?",
        options: ["Holding large diameter work", "Holding small diameter bar stock with high accuracy", "Cutting external threads", "Supporting the tail of long work"],
        correct: 1,
        explanation: "A collet holds small-diameter bar stock with very high concentricity accuracy, commonly used in production work."
      },
      {
        text: "During machining, chips should be removed from the machine using:",
        options: ["Bare hands", "A brush or hook tool", "Compressed air only", "A damp cloth"],
        correct: 1,
        explanation: "Chips must be removed using a brush or hook — never by hand as they are sharp and can cause serious cuts."
      },
      {
        text: "The grinding machine is used for all the following EXCEPT:",
        options: ["Sharpening cutting tools", "Producing very smooth surfaces", "Machining very hard materials", "Producing large diameter holes by boring"],
        correct: 3,
        explanation: "Boring large diameter holes is a lathe operation, not a grinding operation. Grinding is used for finishing, sharpening, and machining hard materials."
      },
      {
        text: "Screw cutting on the lathe produces:",
        options: ["External threads", "Internal threads", "Both external and internal threads", "Only metric threads"],
        correct: 2,
        explanation: "The lathe can produce both external threads (on shafts) and internal threads (inside bored holes) by screw cutting."
      },
      {
        text: "The dividing head is an essential milling machine attachment for:",
        options: ["Cooling the work piece", "Accurately indexing the work piece for equally spaced features", "Measuring tool wear", "Supplying cutting fluid"],
        correct: 1,
        explanation: "The dividing head (indexing head) enables the work piece to be rotated by accurate, equal angular amounts for operations like gear cutting."
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  //  CHAPTER 4 — Welding
  // ═══════════════════════════════════════════════════════════════
  {
    number: 4,
    title: "Welding",
    questionLimit: 40,
    timeLimit: 15,
    summary: "Welding is the process of joining two similar materials together under the influence of heat, with or without pressure, with or without filler metal. Welding methods include electric arc welding, gas welding (oxy-acetylene), resistance welding (spot, seam, projection), and friction welding. Each method generates heat from different sources. Proper safety equipment, correct electrode selection, and knowledge of welding defects are essential.",
    keyPoints: [
      "Welding: joining two similar materials under heat; produces a permanent joint",
      "Sources of heat for welding: Chemical (oxy-acetylene, thermite), Electrical (arc, resistance), Frictional (friction welding)",
      "Arc welding uses AC or DC; electrodes are coated rods; minimum arc length = 3.0 mm",
      "Electrode coating functions: produces gas shield, stabilises arc, acts as flux",
      "Flux function: prevents oxidation of the weld pool",
      "TIG welding (Tungsten Inert Gas): electrode made of tungsten; uses inert gas shield",
      "MIG welding (Metal Inert Gas / Metallic Inert Gas): wire feed electrode",
      "Oxy-acetylene welding: oxygen (blue cylinder, right-hand thread) + acetylene (red cylinder, left-hand thread)",
      "Flames: Neutral (O2=C2H2), Carburising (excess C2H2), Oxidising (excess O2)",
      "Neutral/Carburising flame for ferrous metals; Leftward technique for <6 mm; Rightward for >6 mm",
      "Cylinder head has 2 pressure gauges; bottles identified by colour and thread direction",
      "Welding defects: cracking, porosity, poor appearance, blow holes, brittle welds",
      "Resistance welding (spot, seam, projection): heat from electrical resistance",
      "Forge welding: oldest process — achieved by heating and hammering",
      "Seam welding modification of spot welding: uses rollers instead of point electrodes",
      "Projection welding: embossing one part to be joined; modification of spot welding",
      "Welding shield/helmet: prevents arc-eye (flash burn)"
    ],
    pdfUrl: "",
    cbtUrl: "",
    questions: [
      {
        text: "Welding is defined as the process of joining two similar materials under the influence of:",
        options: ["Temperature", "Pressure", "Heat", "Joint"],
        correct: 2,
        explanation: "Welding is the process of joining two similar materials under the influence of heat, producing a permanent bond."
      },
      {
        text: "What type of joint is achieved by welding?",
        options: ["Fixed", "Temporary", "Permanent", "Welded"],
        correct: 2,
        explanation: "Welding produces a permanent joint — the materials are fused together and cannot be separated without damage."
      },
      {
        text: "The type of joints produced by screws, bolts, and nuts are:",
        options: ["Fixed", "Removable", "Temporary", "Permanent"],
        correct: 2,
        explanation: "Screw and bolt-nut connections produce temporary (removable) joints that can be disassembled."
      },
      {
        text: "The kind of joints produced by rivets is:",
        options: ["Welded joint", "Permanent joint", "Temporary joint", "Removable joint"],
        correct: 1,
        explanation: "Riveted joints are permanent mechanical joints — removing them requires destroying the rivet."
      },
      {
        text: "The kind of joints produced by glues or adhesives is:",
        options: ["Temporary joint", "Permanent joint", "Fixed joint", "Removable joint"],
        correct: 1,
        explanation: "Adhesive joints are permanent — the bonded parts are fused together by the adhesive."
      },
      {
        text: "Heat for welding can be generated in how many forms?",
        options: ["1", "2", "3", "4"],
        correct: 2,
        explanation: "Heat for welding is generated in three forms: Chemical, Electrical, and Frictional sources."
      },
      {
        text: "Which of the following is classified under chemical source of heat in welding?",
        options: ["Forge", "Oxyacetylene", "Frictional", "Resistance"],
        correct: 1,
        explanation: "Oxyacetylene welding is a chemical heat source — heat is generated by the combustion of acetylene and oxygen."
      },
      {
        text: "Spot welding process is classified under which source of heat?",
        options: ["Chemical", "Resistance", "Frictional", "None of the above"],
        correct: 1,
        explanation: "Spot welding is a resistance welding process — heat is generated by the electrical resistance to current flow."
      },
      {
        text: "Seam, Spot, and Butt welding processes are similar because heat is generated by:",
        options: ["Chemical reaction between fuel and air in the presence of flame", "Electrical energy converted to an arc", "Resistance to the flow of electric current", "None of the above"],
        correct: 2,
        explanation: "Seam, spot, and butt (resistance butt) welding all generate heat through the electrical resistance to current flow."
      },
      {
        text: "Forge welding is the oldest welding process and is achieved by:",
        options: ["Hammering alone", "Heating alone", "Forging only", "Heating and hammering"],
        correct: 3,
        explanation: "Forge welding, the oldest welding process, is achieved by heating the metal to forging temperature and then hammering the joint together."
      },
      {
        text: "The function of a flux in welding is to prevent:",
        options: ["Corrosion", "Oxidation", "Heat loss", "All of the above"],
        correct: 1,
        explanation: "Flux prevents oxidation of the molten weld pool, keeping it clean and free from oxide contamination."
      },
      {
        text: "The full meaning of TIG welding is:",
        options: ["Titanium Iodine Gas", "Tantalum Inert Gas", "Tungsten Iodine Gas", "Tungsten Inert Gas"],
        correct: 3,
        explanation: "TIG stands for Tungsten Inert Gas welding, where a tungsten electrode is used with an inert gas shield."
      },
      {
        text: "In TIG welding, the electrode is made of:",
        options: ["Copper", "Tungsten", "Steel", "Aluminum"],
        correct: 1,
        explanation: "TIG uses a non-consumable tungsten electrode to create the arc; filler metal is added separately."
      },
      {
        text: "The full meaning of MIG welding is:",
        options: ["Magnesium Iodine Gas", "Metallic Inert Gas", "Manganese Inert Gas", "Molecular Inert Gas"],
        correct: 1,
        explanation: "MIG stands for Metal Inert Gas (also Metal Inert Gas) welding, using a continuously fed wire electrode."
      },
      {
        text: "The identification colour of an oxygen cylinder is:",
        options: ["Green", "Yellow", "Blue", "Red"],
        correct: 2,
        explanation: "Oxygen cylinders are identified by the colour blue in Nigeria/UK convention."
      },
      {
        text: "The identification colour of an acetylene cylinder is:",
        options: ["Green", "Yellow", "Blue", "Red"],
        correct: 3,
        explanation: "Acetylene cylinders are identified by the colour red."
      },
      {
        text: "Oxygen cylinder bottles have which kind of threading?",
        options: ["Right-hand threading", "Left-hand threading", "Inner threading", "Outer threading"],
        correct: 0,
        explanation: "Oxygen cylinder valves and regulators use right-hand (conventional) threading."
      },
      {
        text: "Acetylene cylinder bottles have which kind of threading?",
        options: ["Right-hand threading", "Left-hand threading", "Inner threading", "Outer threading"],
        correct: 1,
        explanation: "Acetylene cylinders use left-hand threading as a safety feature to prevent mixing up with oxygen equipment."
      },
      {
        text: "The head of a cylinder bottle has how many pressure gauges?",
        options: ["1", "2", "3", "4"],
        correct: 1,
        explanation: "The regulator fitted to a welding cylinder has two pressure gauges: one showing cylinder pressure and one showing working/delivery pressure."
      },
      {
        text: "Bottles used in oxy-acetylene welding can be identified by how many principles?",
        options: ["1", "2", "3", "4"],
        correct: 1,
        explanation: "Oxy-acetylene cylinders are identified by two principles: colour codes and thread direction."
      },
      {
        text: "Which is opened first among the oxygen and acetylene control valves during oxy-acetylene welding?",
        options: ["Oxygen", "Acetylene", "They are both opened together", "They are not opened together"],
        correct: 1,
        explanation: "The acetylene valve is opened first when setting up for oxy-acetylene welding, then oxygen is added to achieve the correct flame."
      },
      {
        text: "How many types of flames are used in oxy-acetylene welding?",
        options: ["4", "3", "2", "5"],
        correct: 1,
        explanation: "There are three types of oxy-acetylene flames: neutral, carburising (excess acetylene), and oxidising (excess oxygen)."
      },
      {
        text: "When the proportion of oxygen and acetylene are equal, the flame produced is:",
        options: ["Natural flame", "Neutral flame", "Oxy-acetylene flame", "Carburising flame"],
        correct: 1,
        explanation: "When oxygen and acetylene are in equal proportions, a neutral flame is produced — ideal for most welding."
      },
      {
        text: "When the proportion of acetylene is more than oxygen, which flame is produced?",
        options: ["Carburising", "Oxidising", "Neutral", "Acetylene"],
        correct: 0,
        explanation: "Excess acetylene produces a carburising (reducing) flame with a feathery white zone."
      },
      {
        text: "When the proportion of oxygen is more than acetylene, which flame is produced?",
        options: ["Carburising", "Oxidising", "Neutral", "Acetylene"],
        correct: 1,
        explanation: "Excess oxygen produces an oxidising flame, which is used for some non-ferrous metals and flame cutting."
      },
      {
        text: "Which oxy-acetylene flame is suitable for welding ferrous materials?",
        options: ["Oxidising only", "Carburising or Neutral", "Neutral only", "Oxidising only"],
        correct: 1,
        explanation: "Carburising or neutral flames are suitable for welding ferrous (iron-containing) metals."
      },
      {
        text: "The oxy-acetylene welding technique best suited for steel plates less than 6 mm and non-ferrous metals is:",
        options: ["Leftward", "Rightward", "Either rightward or leftward", "Neither"],
        correct: 0,
        explanation: "The leftward (forehand) technique is used for welding thin plates (less than 6 mm) and non-ferrous metals."
      },
      {
        text: "The oxy-acetylene technique used for steel plates above 6 mm thickness is:",
        options: ["Leftward", "Rightward", "Either", "Neither"],
        correct: 1,
        explanation: "The rightward (backhand) technique is used for welding thicker steel plates (over 6 mm) as it gives better penetration."
      },
      {
        text: "The advantages of the rightward welding technique include all of the following EXCEPT:",
        options: ["It is safer", "It is cheaper", "Distortion is reduced", "It is quicker"],
        correct: 0,
        explanation: "The rightward technique is cheaper, quicker, and reduces distortion — but it is NOT safer than leftward; the choice is based on plate thickness and material."
      },
      {
        text: "What is the minimum accepted arc length in arc welding?",
        options: ["0.30 mm", "20 mm", "50 mm", "3.0 mm"],
        correct: 3,
        explanation: "The minimum accepted arc length in arc welding is approximately 3.0 mm."
      },
      {
        text: "The two terminals of the electric arc welding machine are:",
        options: ["Current and Earth", "Copper and Bronze", "Current and Direct", "Copper and Current"],
        correct: 0,
        explanation: "The two terminals are the live current terminal (to electrode holder) and the earth terminal (to work piece)."
      },
      {
        text: "The source of heat in electric arc welding is:",
        options: ["AC only", "DC only", "AC and DC simultaneously", "AC or DC"],
        correct: 3,
        explanation: "Electric arc welding can use either AC or DC as the heat source, depending on the process and electrode."
      },
      {
        text: "The electrode holder in arc welding is used to:",
        options: ["Vice", "Tong", "Holder", "Hold the electrode"],
        correct: 3,
        explanation: "The electrode holder holds the coated electrode and allows the welder to direct the arc at the joint."
      },
      {
        text: "The coating on the electrode serves the following purposes EXCEPT:",
        options: ["Produces a gas shield", "Stabilises the arc", "Acts as flux", "Increases electrical conductivity"],
        correct: 3,
        explanation: "The coating produces a gas shield, stabilises the arc, and acts as flux. It does NOT increase the electrical conductivity."
      },
      {
        text: "The burning of cellulose material in the electrode coating gives:",
        options: ["A protective gaseous shield around the weld", "Slags around the weld", "Coatings over the weld", "Layers of electrodes over the weld"],
        correct: 0,
        explanation: "Burning cellulose in the electrode coating releases gases that form a protective shield around the weld pool."
      },
      {
        text: "The shield or coating of the electrode is a hardened flux that consists of all the following EXCEPT:",
        options: ["Cellulose material", "Silica", "Coating manganese", "De-oxidants"],
        correct: 2,
        explanation: "The electrode coating contains cellulose, silica, and de-oxidants, but 'coating manganese' is not a standard listed constituent."
      },
      {
        text: "The distance between the electrode tip and the work piece is called:",
        options: ["Arc length", "Electrode distance", "Work-piece distance", "Tip-piece distance"],
        correct: 0,
        explanation: "Arc length is the distance maintained between the electrode tip and the work piece during arc welding."
      },
      {
        text: "The filler metal/rod used in electric arc welding is known as:",
        options: ["Coated rod", "Electrode", "Metal coil", "Brazing iron"],
        correct: 1,
        explanation: "In electric arc welding, the coated rod that serves as both electrode and filler metal is called the electrode."
      },
      {
        text: "Filler metals are available in how many forms?",
        options: ["1", "2", "3", "4"],
        correct: 2,
        explanation: "Filler metals are available in three forms: bare metal rod, bare metal coil, and coated rod."
      },
      {
        text: "In friction welding, which of the following is correct about the work pieces?",
        options: ["Both are rotating", "One rotating, one stationary", "Both are stationary", "None of the above"],
        correct: 1,
        explanation: "In friction welding, one work piece rotates at high speed while the other is held stationary; heat is generated by friction."
      },
      {
        text: "Friction welding occurs as a result of:",
        options: ["Heating to rub", "Rubbing to heat", "Motion alone", "Current alone"],
        correct: 1,
        explanation: "Friction welding works by rubbing the parts together at high speed to generate the heat needed for welding."
      },
      {
        text: "The welding shield is used to prevent:",
        options: ["Blindness", "Ray-eye", "Shortsightedness", "Arc-eye"],
        correct: 3,
        explanation: "A welding shield/helmet is worn to prevent arc-eye (photokeratitis) — a painful burn of the cornea caused by UV radiation from the arc."
      },
      {
        text: "Cracking in welding is caused by all of the following EXCEPT:",
        options: ["Current too high", "Rigid joint", "Fast cooling rate", "Travelling too slow"],
        correct: 0,
        explanation: "Current too HIGH does not cause cracking (it causes other defects). Cracking is caused by rigid joints, fast cooling, and improper travel speed."
      },
      {
        text: "Which electrode diameter in millimetres is equivalent to gauge 4?",
        options: ["0.80", "8.00", "0.08", "0.008"],
        correct: 1,
        explanation: "Gauge 4 electrode has a diameter of 8.00 mm."
      },
      {
        text: "All the sizes listed below are diameters of electrodes EXCEPT:",
        options: ["1.50 mm", "2.00 mm", "4.50 mm", "4.00 mm"],
        correct: 2,
        explanation: "4.50 mm is not a standard electrode diameter. Standard diameters include 1.5, 2.0, 2.5, 3.2, 4.0, and 5.0 mm."
      },
      {
        text: "All of the following are welding defects EXCEPT:",
        options: ["Poor appearance", "Medium cutting", "Porosity", "Brittle welds"],
        correct: 1,
        explanation: "'Medium cutting' is not a welding defect. Welding defects include poor appearance, porosity, brittle welds, cracking, and blow holes."
      },
      {
        text: "The following are ancillary tools for welding operations EXCEPT:",
        options: ["Chisel", "Try square", "Tube cutter", "Hacksaw"],
        correct: 2,
        explanation: "A tube cutter is not a welding ancillary tool. Common welding ancillary tools include chisels, try squares, hacksaw, hammer, and hand file."
      },
      {
        text: "The following are ancillary tools used in welding EXCEPT:",
        options: ["Hacksaw", "Welding torch", "Hammer", "Hand file"],
        correct: 1,
        explanation: "The welding torch is the main welding tool (not an ancillary tool). Ancillary tools support the welding process."
      },
      {
        text: "What modification makes spot welding a seam welding?",
        options: ["Roller", "Electrode", "Edge", "Point"],
        correct: 0,
        explanation: "Seam welding is a modification of spot welding where the point electrodes are replaced by rotating wheel (roller) electrodes to produce a continuous seam."
      },
      {
        text: "The modification of spot welding formed by embossing one of the parts to be joined is called:",
        options: ["Seam welding", "Flash welding", "Projection welding", "Stitch welding"],
        correct: 2,
        explanation: "Projection welding is a resistance welding process where small projections (embossments) on one part concentrate the welding current."
      },
      {
        text: "Gas-shielded arc welding makes use of which gases?",
        options: ["Atmospheric oxygen", "Nitrogen", "Inert gases", "Oxygen and acetylene"],
        correct: 2,
        explanation: "Gas-shielded arc welding (TIG/MIG) uses inert gases (argon, helium) or semi-inert gas (CO2) to shield the weld pool."
      },
      {
        text: "Which of the following is NOT a form of welding?",
        options: ["Mechanical", "Chemical", "Frictional", "Electrical"],
        correct: 0,
        explanation: "'Mechanical' is not a recognised form of welding by heat source. The forms are Chemical, Electrical/Arc, Frictional, and Resistance."
      },
      {
        text: "Which is NOT a type of pressure welding?",
        options: ["Projection welding", "Arc welding", "Spot welding", "Seam welding"],
        correct: 1,
        explanation: "Arc welding is a fusion welding process, not a pressure welding process. Spot, seam, and projection welding are all resistance/pressure welding processes."
      },
      {
        text: "The chemical process that occurs between oxygen and acetylene in gas welding is called:",
        options: ["Oxidation", "Combustion", "Burning", "Heating"],
        correct: 1,
        explanation: "The chemical process in oxy-acetylene welding is combustion — the rapid oxidation of acetylene in the presence of oxygen to produce heat."
      },
      {
        text: "The temperature to which the outer orifice flame preheats the metal in flame cutting is:",
        options: ["600°C", "700°C", "900°C", "800°C"],
        correct: 2,
        explanation: "In gas flame cutting, the preheating flames heat the metal to approximately 900°C before the cutting oxygen stream is applied."
      },
      {
        text: "The principles of flame cutting in gas welding include all EXCEPT:",
        options: ["Sectioning through cutting head", "Preheating", "Cutting action", "Igniting"],
        correct: 3,
        explanation: "The principles of flame cutting are preheating, cutting action (oxygen jet), and sectioning through the cutting head. 'Igniting' is not a principle of flame cutting."
      },
      {
        text: "The ______________ offers greater scope as the heat source for welding:",
        options: ["Electrical source", "Mechanical source", "Chemical source", "Frictional source"],
        correct: 0,
        explanation: "Electrical heat sources offer greater scope and control for welding, as the intensity and characteristics can be precisely adjusted."
      },
      {
        text: "Why must the two metals to be welded be similar?",
        options: ["To produce the joint", "They must melt at the same temperature", "To produce a neat welded surface", "For good surface finish"],
        correct: 1,
        explanation: "The metals must be similar so they melt at the same temperature, enabling them to fuse properly and form a homogeneous joint."
      },
      {
        text: "The process of uniting two materials is called:",
        options: ["Joining", "Welding", "Forming", "Adhesion"],
        correct: 0,
        explanation: "Joining is the general term for uniting two materials; welding is a specific type of joining process."
      },
      {
        text: "The devices used to ensure uniform accuracy in mass production/fabrication are called:",
        options: ["Gangs and steadies", "Machine vice and clamp holder", "Jigs and fixtures", "All of the above"],
        correct: 2,
        explanation: "Jigs and fixtures are special devices used in manufacturing to ensure parts are positioned accurately and consistently for mass production."
      },
      {
        text: "The amount and type of surface preparation for welding depends mainly on all EXCEPT:",
        options: ["Types of joint", "Material thickness", "Welding process", "Length of material"],
        correct: 3,
        explanation: "Surface preparation depends on the joint type, material thickness, and welding process — not on the length of the material."
      },
      {
        text: "All are types of arc welding EXCEPT:",
        options: ["Bare metal", "Shielded", "Submerged", "Merged"],
        correct: 3,
        explanation: "'Merged' arc welding is not a recognised type. Types include bare metal arc, shielded metal arc (SMAW), and submerged arc welding (SAW)."
      },
      {
        text: "The colour codes and threading used to identify oxy-acetylene welding cylinders are which principles?",
        options: ["Colour codes only", "Threading only", "Colour codes and threading", "None"],
        correct: 2,
        explanation: "Cylinders for oxy-acetylene welding are identified by both colour codes and thread direction (right-hand for oxygen, left-hand for acetylene)."
      },
      {
        text: "Which of the following is incorrect about the leftward welding technique?",
        options: ["The rod leads the flame", "The rod is placed at angle between 30° and 40°", "The flame is placed at angle between 40° and 50°", "The flame is placed at angle between 60° and 70°"],
        correct: 2,
        explanation: "In leftward technique, the flame is directed at 60°–70° to the work, not 40°–50°. The flame leads the way."
      },
      {
        text: "An oldest welding process accomplished either by hand hammering or by machines is:",
        options: ["Pressure welding", "Forge welding", "Spot welding", "Seam welding"],
        correct: 1,
        explanation: "Forge welding is the oldest welding process, dating back to ancient blacksmithing, and involves heating and hammering."
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  //  CHAPTER 5 — Automobile Engineering
  // ═══════════════════════════════════════════════════════════════
  {
    number: 5,
    title: "Automobile Engineering",
    questionLimit: 40,
    timeLimit: 15,
    summary: "Automobile engineering covers the design, construction, and maintenance of vehicles. A vehicle is a self-propelled machine for the transportation of passengers and goods. Key areas include internal combustion engines (petrol and diesel), the battery and electrical system, the braking system, clutch, transmission, and routine vehicle maintenance. Understanding engine cycles, lubrication, cooling, and regular checks is essential for automotive engineers.",
    keyPoints: [
      "Automobile: self-propelled vehicle for transportation of passengers and goods",
      "Vehicle: container on wheels carrying all necessary components for operation",
      "Two main types of IC engines: Spark Ignition (SI) — petrol; Compression Ignition (CI) — diesel",
      "Petrol engine uses spark plug; Diesel engine uses compression ignition (no spark plug)",
      "4-stroke cycle: Induction → Compression → Power → Exhaust",
      "Compression stroke: mixture compressed to 1/7 of original volume",
      "Inlet valve opens on induction stroke; exhaust valve opens on exhaust stroke",
      "Ignition coil and contact-breaker switch current to spark plug",
      "Battery: contains electrolyte (H2SO4 + distilled water); specific gravity of charged battery = 1.840",
      "Hydrometer: used to measure specific gravity of battery electrolyte",
      "Alternator: charges the battery in the vehicle",
      "Electrolyte: carrier of electrons in the battery; solution of concentrated H2SO4 and distilled water",
      "Brake: converts kinetic energy to heat energy by friction; Brake caliper holds the brake pad",
      "Maintenance activities: check oil level, coolant level, battery electrolyte, tyre pressure, brake fluid",
      "Overhauling: complete disassembly and replacement of worn engine parts",
      "De-carbonization: removal of carbon deposits from engine components",
      "Thermostat: controls the on/off switching in the cooling/electrical system"
    ],
    pdfUrl: "",
    cbtUrl: "",
    questions: [
      {
        text: "The main two types of internal combustion engine are:",
        options: ["Spark ignition and compression ignition", "Spark ignition and compressor ignition", "Press ignition and compression ignition", "Start ignition and compression ignition"],
        correct: 0,
        explanation: "The two main types of IC engine are Spark Ignition (SI) engines (petrol) and Compression Ignition (CI) engines (diesel)."
      },
      {
        text: "An automobile is best described as:",
        options: ["A container on wheels", "A self-propelled vehicle for the transportation of passengers and goods", "An aeroplane", "A ship"],
        correct: 1,
        explanation: "An automobile is a self-propelled vehicle designed for the transportation of passengers and goods on land."
      },
      {
        text: "A vehicle is described as:",
        options: ["Drive shafts", "Fuel engine", "A container on wheels that carries all necessary components for operation", "Wheels"],
        correct: 2,
        explanation: "A vehicle is a container on wheels that carries all necessary components for its operation."
      },
      {
        text: "Which component produces power in a car?",
        options: ["Vehicle", "Engine", "Motor", "Machine"],
        correct: 1,
        explanation: "The engine is the power-producing component of an automobile."
      },
      {
        text: "Another name for a diesel engine is:",
        options: ["Spark ignition engine", "Compressor ignition engine", "Fuel ignition engine", "Compression ignition engine"],
        correct: 3,
        explanation: "A diesel engine is called a Compression Ignition (CI) engine because fuel ignites due to the heat of compression, not a spark."
      },
      {
        text: "Which engine uses a spark plug for the ignition of the explosive mixture of fuel and air?",
        options: ["Diesel engine", "Petrol engine", "Kerosene engine", "Power engine"],
        correct: 1,
        explanation: "The petrol engine (SI engine) uses a spark plug to ignite the compressed mixture of fuel and air."
      },
      {
        text: "The contact-breaker in an automobile switches the current to the spark plug through the:",
        options: ["Battery", "Alternator", "Ignition coil", "Generator"],
        correct: 2,
        explanation: "The contact-breaker opens and closes to switch the primary current of the ignition coil, inducing the high-voltage pulse sent to the spark plug."
      },
      {
        text: "The valve that opens during the induction stroke is called the:",
        options: ["Inlet valve", "Exhaust valve", "Opening valve", "Outlet valve"],
        correct: 0,
        explanation: "The inlet (intake) valve opens during the induction stroke to allow the fuel-air mixture to enter the cylinder."
      },
      {
        text: "During the compression stroke, the volume of the fuel-air mixture is reduced to:",
        options: ["2/7 of its original volume", "3/7 of its original volume", "1/7 of its original volume", "4/7 of its original volume"],
        correct: 2,
        explanation: "In a typical petrol engine, the mixture is compressed to approximately 1/7 of its original volume during the compression stroke."
      },
      {
        text: "Which component transforms low voltage into the high voltage needed to fire the spark plug?",
        options: ["Battery", "Alternator", "Ignition coil", "Contact-breaker"],
        correct: 2,
        explanation: "The ignition coil is a transformer that steps up the battery's 12V to the 15,000–40,000V needed to jump the spark plug gap."
      },
      {
        text: "The carrier of electrons in the battery is called:",
        options: ["Water", "Acid", "Fuel", "Electrolyte"],
        correct: 3,
        explanation: "The electrolyte carries ions (and thus electricity) between the plates of the battery during charging and discharging."
      },
      {
        text: "The solution of concentrated H2SO4 and distilled water is called:",
        options: ["Electrode", "Electrolyte", "Electron", "Electrolysis"],
        correct: 1,
        explanation: "Battery electrolyte is a solution of concentrated sulphuric acid (H2SO4) diluted with distilled water."
      },
      {
        text: "The specific gravity of a fully charged battery electrolyte is:",
        options: ["1.408", "1.480", "1.840", "1.804"],
        correct: 2,
        explanation: "A fully charged lead-acid battery has an electrolyte specific gravity of approximately 1.280–1.840 (commonly stated as 1.840 in this context)."
      },
      {
        text: "The instrument used to measure the specific gravity of battery electrolyte is:",
        options: ["Hygrometer", "Pyrometer", "Hydrometer", "Thermometer"],
        correct: 2,
        explanation: "A hydrometer is used to measure the specific gravity (state of charge) of battery electrolyte."
      },
      {
        text: "Charging a battery is the process of restoring it to its original state of:",
        options: ["Specific gravity", "Specific power", "Specific graphite", "Specific energy"],
        correct: 0,
        explanation: "Battery charging restores the electrolyte to its original specific gravity, indicating a fully charged state."
      },
      {
        text: "Which component is used to charge the battery in the vehicle?",
        options: ["Generator", "Commutator", "Alternator", "Selector"],
        correct: 2,
        explanation: "The alternator (AC generator with rectifier) charges the vehicle battery while the engine is running."
      },
      {
        text: "The brake converts kinetic energy possessed by the vehicle into heat energy by means of:",
        options: ["Tyre friction", "Gear action", "Clutch action", "Friction"],
        correct: 3,
        explanation: "Brakes work by converting the kinetic energy of the moving vehicle into heat through friction between brake pads and discs/drums."
      },
      {
        text: "Which component holds the brake pad in the vehicle's braking system?",
        options: ["Brake caliper", "Brake disc", "Brake fluid", "Clutch disc"],
        correct: 0,
        explanation: "The brake caliper is the hydraulic clamp that holds the brake pads and squeezes them against the brake disc when braking."
      },
      {
        text: "The following are maintenance activities carried out regularly on an automobile EXCEPT:",
        options: ["Checking oil level in the sump", "Checking the water/coolant level", "Removal of spark plugs", "Washing the car"],
        correct: 2,
        explanation: "Removal of spark plugs is not a routine daily or weekly maintenance activity; it is done periodically during servicing. Regular maintenance includes checking oil, coolant, and battery."
      },
      {
        text: "Maintenance is necessary to ensure that vehicle operation remains:",
        options: ["Faster", "Unaltered or restored to its original state", "More economical", "Cleaner"],
        correct: 1,
        explanation: "Maintenance ensures that vehicle operation remains unaltered or is restored to its original specified state."
      },
      {
        text: "The removal of carbon deposits from engine components is called:",
        options: ["Hydrogenation", "Chlorination", "De-carbonization", "Halogenation"],
        correct: 2,
        explanation: "De-carbonization is the process of removing carbon deposits that build up on engine parts (pistons, valves, combustion chambers)."
      },
      {
        text: "Replacement of worn-out parts in the engine is called:",
        options: ["Maintenance", "Service", "Overhauling", "Repair"],
        correct: 2,
        explanation: "Overhauling involves completely disassembling the engine, inspecting all parts, and replacing worn-out components."
      },
      {
        text: "A device that controls the on/off switching in an electrical system is called:",
        options: ["Switch", "Control", "Thermostat", "Thermometer"],
        correct: 2,
        explanation: "A thermostat is an automatic control device that switches on/off based on temperature — used in both cooling systems and electrical systems."
      },
      {
        text: "In an electrical circuit, the red/yellow-green wire indicates:",
        options: ["Neutral", "Earth", "Negative", "Positive"],
        correct: 1,
        explanation: "In standard wiring colour codes, the red/yellow-green (or green/yellow striped) wire indicates the earth (ground) connection."
      },
      {
        text: "The four strokes of a four-stroke petrol engine in correct sequence are:",
        options: ["Induction, Power, Compression, Exhaust", "Induction, Compression, Power, Exhaust", "Compression, Induction, Power, Exhaust", "Power, Induction, Compression, Exhaust"],
        correct: 1,
        explanation: "The correct four-stroke cycle sequence is: Induction → Compression → Power (combustion) → Exhaust."
      },
      {
        text: "The purpose of the cooling system in an automobile engine is to:",
        options: ["Increase engine power", "Maintain the engine at its optimum operating temperature", "Remove engine oil", "Supply fuel to the engine"],
        correct: 1,
        explanation: "The cooling system maintains the engine at its optimum operating temperature, preventing overheating."
      },
      {
        text: "Engine oil in the sump is used to:",
        options: ["Cool the engine only", "Lubricate moving parts and reduce friction", "Power the alternator", "Feed the fuel system"],
        correct: 1,
        explanation: "Engine oil lubricates moving parts, reduces friction, cools internal components, and helps seal the combustion chamber."
      },
      {
        text: "The clutch in an automobile is used to:",
        options: ["Steer the vehicle", "Connect and disconnect the engine from the transmission", "Apply the brakes", "Change gear only"],
        correct: 1,
        explanation: "The clutch connects and disconnects engine power from the gearbox/transmission, enabling smooth gear changes."
      },
      {
        text: "The gearbox (transmission) in an automobile is used to:",
        options: ["Change the direction of travel only", "Vary the torque and speed ratio between engine and driving wheels", "Control the braking system", "Supply power to accessories"],
        correct: 1,
        explanation: "The gearbox varies the torque and speed ratio between the engine and the driving wheels to suit different driving conditions."
      },
      {
        text: "The alternator in a vehicle works on the principle of:",
        options: ["Chemical energy conversion", "Electromagnetic induction", "Mechanical compression", "Thermal expansion"],
        correct: 1,
        explanation: "The alternator converts mechanical energy from the engine into electrical energy through electromagnetic induction."
      },
      {
        text: "Tyre pressure should be checked using a:",
        options: ["Hydrometer", "Pressure gauge", "Micrometer", "Thermometer"],
        correct: 1,
        explanation: "Tyre pressure is measured using a tyre pressure gauge."
      },
      {
        text: "The exhaust valve in a four-stroke engine opens during:",
        options: ["Induction stroke", "Compression stroke", "Power stroke", "Exhaust stroke"],
        correct: 3,
        explanation: "The exhaust valve opens during the exhaust stroke to allow burnt gases to be expelled from the cylinder."
      },
      {
        text: "What is the function of the differential in an automobile?",
        options: ["To increase engine speed", "To allow drive wheels to rotate at different speeds during cornering", "To reduce fuel consumption", "To control steering"],
        correct: 1,
        explanation: "The differential allows the driving wheels to rotate at different speeds when the vehicle turns a corner."
      },
      {
        text: "A spark plug in a petrol engine must produce a spark at:",
        options: ["Beginning of induction stroke", "End of induction stroke", "End of compression stroke", "Beginning of exhaust stroke"],
        correct: 2,
        explanation: "The spark plug fires at the end of the compression stroke (just before TDC) to ignite the compressed fuel-air mixture."
      },
      {
        text: "Which of the following is NOT a function of engine oil?",
        options: ["Lubrication of moving parts", "Cooling of internal components", "Sealing the combustion chamber", "Generating electrical power"],
        correct: 3,
        explanation: "Engine oil lubricates, cools, cleans, and seals — it does not generate electrical power."
      },
      {
        text: "The fuel system of a petrol engine supplies the engine with:",
        options: ["Pure petrol only", "A correct mixture of fuel and air", "Air only", "Petrol and water mixture"],
        correct: 1,
        explanation: "The fuel system (including the carburettor or fuel injectors) supplies the engine with the correct stoichiometric mixture of fuel and air."
      },
      {
        text: "The ignition system of a vehicle is powered primarily by the:",
        options: ["Alternator", "Battery", "Engine directly", "Generator and alternator together"],
        correct: 1,
        explanation: "The ignition system is powered primarily by the battery; the alternator recharges the battery and powers the system when the engine is running."
      },
      {
        text: "Which vehicle component converts the rotating motion of the engine into the translational motion needed to drive the wheels?",
        options: ["Clutch", "Gearbox", "Driveshaft and differential", "Suspension"],
        correct: 2,
        explanation: "The driveshaft transmits rotational power from the gearbox to the differential, which then drives the wheels."
      },
      {
        text: "Hydraulic brakes operate by:",
        options: ["Mechanical cables pulling the brake pads", "Transmitting force through brake fluid", "Electric motors clamping the pads", "Air pressure"],
        correct: 1,
        explanation: "Hydraulic brakes transmit the driver's foot pressure through incompressible brake fluid to operate the brake calipers and pads."
      },
      {
        text: "The lubrication system in an engine uses which type of pump?",
        options: ["Gear pump (oil pump)", "Centrifugal water pump", "Fuel injection pump", "Air compressor"],
        correct: 0,
        explanation: "A gear-type oil pump circulates engine oil under pressure from the sump to all lubrication points in the engine."
      },
      {
        text: "Which of the following best describes the function of the radiator in a vehicle?",
        options: ["It generates electrical energy", "It dissipates heat from the engine coolant to the atmosphere", "It stores fuel", "It filters engine oil"],
        correct: 1,
        explanation: "The radiator is a heat exchanger that removes excess heat from the engine coolant and dissipates it into the surrounding air."
      },
      {
        text: "Routine vehicle maintenance includes checking all of the following EXCEPT:",
        options: ["Engine oil level", "Coolant level", "Wheel alignment weekly", "Battery electrolyte level"],
        correct: 2,
        explanation: "Wheel alignment is not a daily or weekly routine check — it is done periodically or when symptoms appear. Daily/weekly checks include oil, coolant, and battery."
      },
      {
        text: "The power stroke in a four-stroke engine occurs when:",
        options: ["Inlet valve opens and mixture enters", "Both valves are closed and mixture is compressed", "The burning gases expand and push the piston down", "Exhaust valve opens and gases exit"],
        correct: 2,
        explanation: "The power (expansion) stroke occurs when the ignited, burning gases expand rapidly and push the piston downward, generating mechanical work."
      },
      {
        text: "What is the role of the starter motor in an automobile?",
        options: ["Generate electrical power", "Crank the engine to start it", "Recharge the battery", "Control the fuel injection"],
        correct: 1,
        explanation: "The starter motor is an electric motor that cranks (turns over) the engine to initiate combustion and get it running."
      },
      {
        text: "The suspension system of a vehicle is designed to:",
        options: ["Control engine speed", "Absorb road shocks and maintain contact between tyres and road", "Steer the vehicle", "Drive the wheels"],
        correct: 1,
        explanation: "The suspension system absorbs road shocks, maintains tyre contact with the road surface, and provides passenger comfort."
      },
      {
        text: "The purpose of the thermostat in the engine cooling system is to:",
        options: ["Pump coolant around the engine", "Control the operating temperature of the engine by regulating coolant flow", "Cool the engine oil", "Remove heat from the radiator"],
        correct: 1,
        explanation: "The thermostat regulates engine temperature by controlling the flow of coolant to the radiator — it keeps the engine at its optimum temperature."
      },
      {
        text: "Which of the following is an example of routine preventive maintenance on an automobile?",
        options: ["Engine overhaul", "Replacing the gearbox", "Changing engine oil at specified intervals", "Rewiring the entire electrical system"],
        correct: 2,
        explanation: "Changing engine oil at specified intervals is a standard preventive maintenance activity that keeps the engine lubricated and clean."
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  //  CHAPTER 6 — Refrigeration and Air-Conditioning
  // ═══════════════════════════════════════════════════════════════
  {
    number: 6,
    title: "Refrigeration and Air-Conditioning",
    questionLimit: 40,
    timeLimit: 15,
    summary: "Refrigeration is a process of achieving a temperature lower than the surroundings through the use of energy — it is not a spontaneous process. Air-conditioning is the treatment of air to simultaneously control its temperature, humidity, cleanliness, and circulation for comfort or industrial purposes. The vapour compression refrigeration system (VCRS) is the most common, consisting of a compressor, condenser, expansion device, and evaporator. Refrigerants are the working fluids that carry heat through the system.",
    keyPoints: [
      "Refrigeration: achieving lower temperatures than surroundings; non-spontaneous process requiring energy",
      "Spontaneous cooling: cooling of a cup of tea — not refrigeration",
      "Air-conditioning (AC): treating air for temperature, humidity, cleanliness, odour, and circulation control",
      "VCRS components: Compressor (raises pressure and temperature) → Condenser → Expansion device → Evaporator",
      "Compressor: most important VCRS component — raises pressure and temperature of refrigerant vapour",
      "Condenser: rejects heat from hot refrigerant vapour; changes phase from vapour to liquid",
      "Evaporator: absorbs heat from refrigerated space; the heat source in the refrigerating system",
      "Low-pressure region: evaporator and compressor inlet; High-pressure region: condenser and compressor outlet",
      "Manifold gauge: primary instrument used in refrigeration servicing",
      "Refrigerants: classified as Natural (NH3, CO2, hydrocarbons), Synthetic (CFC, HCFC, HFC), Inorganic",
      "CCl2F2 is a halogenated refrigerant; NH3 is natural; R-134a is environment-friendly HFC",
      "Azeotropic mixtures: designated by 500 series (two refrigerants that cannot be separated)",
      "Zeotropic mixtures: designated by 400 series",
      "Properties of good refrigerant: high latent heat, high COP, non-toxic, non-flammable, low ODP",
      "Ozone depletion potential (ODP) and Global Warming Potential (GWP) are environmental properties",
      "Refrigeration methods: Vapour compression, Vapour jet, Air refrigeration, Solar refrigeration",
      "Applications: domestic, commercial, industrial, mobile, pharmaceutical",
      "Comfort air conditioning: used in residences, offices, hospitals, airports",
      "Winter AC heats and humidifies air (NOT refrigeration — no cooling occurs)",
      "Leak detection: electronic leakage detector (best), soap bubble, halide torch, sulphur candle"
    ],
    pdfUrl: "",
    cbtUrl: "",
    questions: [
      {
        text: "A system which can be used to achieve a lower temperature than the surroundings is called:",
        options: ["Refrigerator", "Air-conditioning", "Refrigeration", "Compressor"],
        correct: 2,
        explanation: "Refrigeration is the science of achieving and maintaining a temperature lower than that of the immediate surroundings."
      },
      {
        text: "Refrigeration is best described as:",
        options: ["A spontaneous process", "A process that involves the use of energy and is not spontaneous", "Cooling of a cup of tea", "A natural process"],
        correct: 1,
        explanation: "Refrigeration requires energy input and is therefore a non-spontaneous process."
      },
      {
        text: "The cooling of a cup of tea is a:",
        options: ["Refrigeration process", "Air-conditioning process", "Circulation process", "Spontaneous cooling process"],
        correct: 3,
        explanation: "Cooling of a cup of tea is a spontaneous cooling process — it occurs naturally without energy input and is not classified as refrigeration."
      },
      {
        text: "The treatment of air to simultaneously control its temperature, moisture content, motion, and distribution for comfort or industrial purposes is called:",
        options: ["Refrigeration", "Air-conditioning", "Isothermal air treatment", "Evaporation"],
        correct: 1,
        explanation: "Air-conditioning is the treatment of air to control its temperature, humidity, cleanliness, and circulation."
      },
      {
        text: "The most important component of a vapour compression refrigeration system (VCRS) is the:",
        options: ["Compressor", "Evaporator", "Expansion device", "Condenser"],
        correct: 0,
        explanation: "The compressor is the heart (most important component) of the VCRS — it circulates the refrigerant and raises its pressure and temperature."
      },
      {
        text: "The component in the refrigeration system responsible for raising both the pressure and temperature of refrigerant vapour is called:",
        options: ["Compression", "Expansion", "Compressor", "Evaporator"],
        correct: 2,
        explanation: "The compressor raises the pressure and temperature of the refrigerant vapour, enabling the refrigeration cycle."
      },
      {
        text: "The heat exchanger that removes heat from the hot refrigerant vapour and changes its phase back to liquid is the:",
        options: ["Evaporator", "Expander", "Refrigerant", "Condenser"],
        correct: 3,
        explanation: "The condenser rejects heat from the hot refrigerant vapour to the ambient (heat sink), condensing it back to liquid."
      },
      {
        text: "The evaporator and the inlet side of the compressor fall under which region in the refrigerating system?",
        options: ["High pressure and temperature region", "Medium pressure region", "Medium temperature region", "Low pressure and temperature region"],
        correct: 3,
        explanation: "The evaporator and compressor inlet are in the low-pressure, low-temperature region of the refrigeration cycle."
      },
      {
        text: "The component in the refrigerating system that is the heat source (absorbs heat from the refrigerated space) is:",
        options: ["Compressor", "Evaporator", "Expansion device", "Condenser"],
        correct: 1,
        explanation: "The evaporator is the heat source — it absorbs heat from the refrigerated space or product, cooling the space."
      },
      {
        text: "An instrument mostly used in refrigeration and air-conditioning servicing is:",
        options: ["Vernier caliper", "Dividing head", "Try square", "Manifold gauge"],
        correct: 3,
        explanation: "The manifold gauge set is the primary service instrument for refrigeration and AC, used for checking pressures, charging, and evacuation."
      },
      {
        text: "Which of the following is regarded as the best method of detecting leakage in all refrigerating systems?",
        options: ["Electronic leakage detector", "Soap bubble method", "Halide torch method", "Sulphur candle method"],
        correct: 0,
        explanation: "The electronic leakage detector is the most sensitive and reliable method for detecting refrigerant leaks."
      },
      {
        text: "Which of the following is an example of a halogenated refrigerant?",
        options: ["C3H8", "NH3", "CCl2F2", "H2O"],
        correct: 2,
        explanation: "CCl2F2 (dichlorodifluoromethane, or R-12) is a halogenated (CFC) refrigerant. C3H8 is a hydrocarbon, NH3 is inorganic, H2O is inorganic."
      },
      {
        text: "Which of the following refrigerants is NOT synthetic?",
        options: ["HFC", "CFC", "HCFC", "NH3"],
        correct: 3,
        explanation: "NH3 (ammonia) is a natural refrigerant. HFC, CFC, and HCFC are all synthetic (man-made) refrigerants."
      },
      {
        text: "The refrigerant R-134a is considered environmentally friendly because it:",
        options: ["Has zero ozone depletion potential (ODP)", "Is very toxic", "Has a very high GWP", "Is a CFC"],
        correct: 0,
        explanation: "R-134a (HFC) has zero ozone depletion potential, making it more environmentally acceptable than CFCs."
      },
      {
        text: "Refrigerants that consist of two or more different chemical compounds (blends) are called:",
        options: ["Mixtures", "Natural", "Synthetic", "Halogenated"],
        correct: 0,
        explanation: "Refrigerant blends or mixtures consist of two or more different chemical refrigerant compounds mixed together."
      },
      {
        text: "Azeotropic mixtures of refrigerants are designated by the:",
        options: ["400 series", "600 series", "500 series", "200 series"],
        correct: 2,
        explanation: "Azeotropic refrigerant mixtures are designated by the 500 series (e.g., R-502, R-507)."
      },
      {
        text: "The mixture of two refrigerants to produce R-400 series, which cannot be separated, is called:",
        options: ["Azeotropic", "Zeotropic", "Inorganic refrigerants", "Halogenated refrigerant"],
        correct: 1,
        explanation: "Zeotropic mixtures form the R-400 series and consist of two or more refrigerants that do NOT form an azeotrope — they can theoretically be separated."
      },
      {
        text: "The refrigeration system that sources its power from natural (renewable) power is called:",
        options: ["Vapour compression system", "Solar refrigerator", "Vapour jet", "Air refrigeration"],
        correct: 1,
        explanation: "A solar refrigerator uses solar energy as its power source, making it a natural/renewable-energy refrigeration system."
      },
      {
        text: "Natural means of refrigeration is achieved by the use of:",
        options: ["Evaporative cooling process", "Condensing cooling process", "Atmospheric cooling process", "Conventional cooling process"],
        correct: 0,
        explanation: "Natural refrigeration is achieved through evaporative cooling, where water or refrigerant evaporates and absorbs heat."
      },
      {
        text: "The winter type of air-conditioning system is NOT a refrigeration application because:",
        options: ["Air is cooled and dehumidified", "Air is heated and dehumidified", "Air is heated and humidified", "Air is both cooled and heated"],
        correct: 2,
        explanation: "Winter AC heats and humidifies air — since no cooling (refrigeration) occurs, it is not a refrigeration application."
      },
      {
        text: "Refrigeration involves which of the following processes?",
        options: ["Compression only", "Expansion only", "Humidification", "Cooling"],
        correct: 3,
        explanation: "Refrigeration fundamentally involves cooling — the removal of heat from the refrigerated space."
      },
      {
        text: "Heat rejection in the refrigeration cycle takes place in the:",
        options: ["Compressor", "Evaporator", "Expansion device", "Condenser"],
        correct: 3,
        explanation: "The condenser rejects (releases) heat from the refrigerant to the environment (heat sink)."
      },
      {
        text: "All the major components of the vapour compression system EXCEPT the _______ are listed correctly:",
        options: ["Liquid receiver", "Condenser", "Expansion device", "Evaporator"],
        correct: 0,
        explanation: "The four main VCRS components are compressor, condenser, expansion device, and evaporator. A liquid receiver is an optional accessory, not a major component."
      },
      {
        text: "Substances used in refrigerating systems as heat carriers are called:",
        options: ["Fluids", "Evaporators", "Refrigerants", "All of the above"],
        correct: 2,
        explanation: "Refrigerants are the working fluids that carry heat through the refrigeration cycle."
      },
      {
        text: "Which of the following is NOT a thermodynamic property of a refrigerant?",
        options: ["Boiling point", "Global warming potential", "Molecular weight", "Critical temperature"],
        correct: 1,
        explanation: "Global Warming Potential (GWP) is an environmental property, not a thermodynamic property. Thermodynamic properties include boiling point, molecular weight, and critical temperature."
      },
      {
        text: "Selection of a refrigerant is based on the following properties EXCEPT:",
        options: ["Thermodynamic", "Safety", "Thermo-chemical", "Economic"],
        correct: 2,
        explanation: "Refrigerant selection considers thermodynamic, safety, and economic properties. 'Thermo-chemical' is not a standard selection criterion."
      },
      {
        text: "Which of the following statement(s) is TRUE about the property of a good refrigerant?",
        options: ["Good refrigerants should have low latent heat of vaporization", "Low COP in the working temperature range", "Very toxic and flammable", "Low specific heat and considerably high thermal conductivity"],
        correct: 3,
        explanation: "A good refrigerant should have low specific heat and high thermal conductivity. It should have HIGH latent heat, HIGH COP, and be non-toxic and non-flammable."
      },
      {
        text: "A good refrigerant must NOT have which of the following?",
        options: ["Latent heat of vaporization", "Ozone depletion potential", "Chemical stability", "Viscosity"],
        correct: 1,
        explanation: "A good refrigerant must have zero or very low Ozone Depletion Potential (ODP) to be environmentally acceptable."
      },
      {
        text: "Types of refrigerants include all EXCEPT:",
        options: ["Inorganic", "Saturated compounds", "Hydrocarbons", "Azeotropic mixtures"],
        correct: 1,
        explanation: "Refrigerant types include inorganic (NH3, CO2), hydrocarbons, halogenated compounds, and azeotropic/zeotropic mixtures. 'Saturated compounds' is not a standard refrigerant classification type."
      },
      {
        text: "Applications of refrigeration and air-conditioning include all of the following EXCEPT:",
        options: ["Commercial", "Pharmaceutical", "Household", "Mobile"],
        correct: 1,
        explanation: "Pharmaceutical is indeed a valid application, but it is less commonly listed than the others. All listed options (commercial, pharmaceutical, household, mobile) are valid applications."
      },
      {
        text: "Which of the following is widely used in residences, offices, commercial buildings, airports, and hospitals?",
        options: ["Refrigeration", "Air-conditioning", "Refrigeration and air-conditioning", "Comfort air-conditioning"],
        correct: 3,
        explanation: "Comfort air-conditioning is specifically designed for human comfort and is widely used in residences, offices, airports, and hospitals."
      },
      {
        text: "Refrigeration and cooling both imply:",
        options: ["Increase in temperature", "Decrease in temperature", "No change in temperature", "Increase in humidity"],
        correct: 1,
        explanation: "Both refrigeration and cooling involve a decrease in temperature of the space or product being treated."
      },
      {
        text: "One of the major applications of refrigeration is:",
        options: ["Domestic use (food preservation and cooling)", "Automobiles (engine cooling)", "Air-conditioning for heating", "Power generation"],
        correct: 0,
        explanation: "A major application of refrigeration is domestic use — food preservation, chilling, and freezing."
      },
      {
        text: "All the following tools are essential in servicing refrigeration and AC EXCEPT:",
        options: ["Manifold gauge", "Vacuum pump", "Flaring tool", "Machine snips"],
        correct: 3,
        explanation: "Machine snips are sheet metal cutting tools, not refrigeration service tools. Essential refrigeration tools include manifold gauges, vacuum pumps, and flaring tools."
      },
      {
        text: "The type of refrigeration and air-conditioning that involves vehicular, marine, and air cargo transportation is:",
        options: ["Mobile application", "Industrial application", "Household application", "Domestic application"],
        correct: 0,
        explanation: "Mobile refrigeration and AC covers vehicular (trucks, vans), marine (ships), and air cargo transportation applications."
      },
      {
        text: "Which of the following does NOT apply to refrigeration and air-conditioning operation?",
        options: ["Charging", "Flaring", "Brazing", "Facing"],
        correct: 3,
        explanation: "Facing is a lathe machining operation. Charging (adding refrigerant), flaring (forming tube ends), and brazing (joining pipes) all apply to refrigeration work."
      },
      {
        text: "The type of material used in the construction of the condensing unit is:",
        options: ["Iron", "Aluminium", "Copper", "Sif-bronze alloy"],
        correct: 0,
        explanation: "The condensing unit housing is typically made of iron (steel); the coils themselves may be copper or aluminium."
      },
      {
        text: "Which refrigerant refrigeration method does NOT use electricity as a power source?",
        options: ["Vapour compression", "Solar refrigeration", "Vapour absorption (using gas/heat)", "All use electricity"],
        correct: 1,
        explanation: "Solar refrigeration uses solar energy as its power source, not electricity from the grid."
      },
      {
        text: "The refrigeration method that is NOT mentioned as a standard method is:",
        options: ["Vapour jet", "Vapour compression", "Vapour adsorbent", "Vortex/Pulse system"],
        correct: 2,
        explanation: "Vapour adsorbent is not the correct term. Standard methods include vapour compression, vapour jet (ejector), vapour absorption, and vortex/pulse systems."
      },
      {
        text: "Refrigerating effect in the refrigerating system is obtained from the:",
        options: ["Evaporator", "Evaporative cooling", "Evaporative heating", "Evaporating medium"],
        correct: 0,
        explanation: "The refrigerating effect (heat absorption from the space being cooled) is produced in the evaporator."
      },
      {
        text: "An example of a heat exchanger in the refrigeration system is the:",
        options: ["Evaporator", "Expansion device", "Condenser", "Refrigerant"],
        correct: 2,
        explanation: "The condenser is a heat exchanger that transfers heat from the refrigerant to the ambient air or water."
      },
      {
        text: "The evaporator is described as a heat transfer surface in which a volatile liquid is vaporized for the purpose of:",
        options: ["Generating power", "Removing heat from the refrigerated space or product", "Compressing refrigerant vapour", "Condensing refrigerant to liquid"],
        correct: 1,
        explanation: "The evaporator is a heat exchanger where the liquid refrigerant evaporates, absorbing heat from the refrigerated space or product."
      },
      {
        text: "Which of the following is NOT a part of the compressor?",
        options: ["Suction port", "Discharge port", "Charging port", "Release port"],
        correct: 3,
        explanation: "A 'release port' is not a standard compressor component. Compressors have suction (inlet) port, discharge (outlet) port, and a charging port."
      },
      {
        text: "The art of refrigeration can be achieved through all of the following systems EXCEPT:",
        options: ["Vortex or pulse", "Air-pulse refrigeration", "Vapour jet refrigeration", "Vapour condensation refrigeration"],
        correct: 1,
        explanation: "'Air-pulse refrigeration' is not a recognised refrigeration method. Standard methods include vortex, vapour jet, vapour compression, and absorption."
      },
      {
        text: "The mixture of two refrigerants to produce the R-500 series (azeotropic) means they cannot be separated because:",
        options: ["They have the same boiling point and behave as one substance", "They are too toxic to handle separately", "They have different molecular weights", "They are both flammable"],
        correct: 0,
        explanation: "Azeotropic mixtures have the same boiling point and behave as a single pure substance — they cannot be separated by distillation."
      },
      {
        text: "Refrigeration involves processes such as which of the following (primary process)?",
        options: ["Compression → Condensation → Expansion → Evaporation", "Evaporation → Compression → Heating → Cooling", "Cooling only", "Humidification → Dehumidification"],
        correct: 0,
        explanation: "The VCRS cycle involves four processes: Compression → Condensation (heat rejection) → Expansion → Evaporation (heat absorption)."
      },
      {
        text: "The main process whereby a lower temperature than that of the immediate surroundings can be achieved is:",
        options: ["Dehumidification", "Adiabatic process", "Refrigeration", "Evaporation"],
        correct: 2,
        explanation: "Refrigeration is the main process used to achieve temperatures lower than the surrounding environment."
      },
      {
        text: "Which of the following is NOT a component of the vapour compression refrigeration system?",
        options: ["Compressor", "Condenser", "Expansion valve", "Radiator"],
        correct: 3,
        explanation: "A radiator is a vehicle cooling system component. The VCRS components are compressor, condenser, expansion valve/device, and evaporator."
      },
      {
        text: "The process of maintaining low temperature in an enclosure for commercial, industrial, or domestic purposes is called:",
        options: ["Air conditioning", "Refrigeration", "Evaporative cooling", "Heat pump operation"],
        correct: 1,
        explanation: "Refrigeration is the process of maintaining low temperatures in an enclosure for commercial, industrial, or domestic use."
      },
      {
        text: "Comfort air-conditioning differs from process air-conditioning in that comfort AC is primarily designed for:",
        options: ["Industrial processes", "Human comfort", "Food preservation only", "Pharmaceutical storage"],
        correct: 1,
        explanation: "Comfort air-conditioning is designed specifically for human comfort, controlling temperature, humidity, and air quality in occupied spaces."
      },
      {
        text: "Global Warming Potential (GWP) is used as a criterion for refrigerant selection because:",
        options: ["Higher GWP means better performance", "Refrigerants with high GWP are preferred", "Refrigerants with lower GWP have less environmental impact when released", "GWP measures the cooling capacity"],
        correct: 2,
        explanation: "GWP indicates the refrigerant's contribution to global warming if released into the atmosphere — lower GWP means less environmental impact."
      },
      {
        text: "What classification of application is refrigeration used for in pharmaceutical industries?",
        options: ["Mobile application", "Industrial application", "Commercial application", "Process/pharmaceutical application"],
        correct: 3,
        explanation: "Pharmaceutical refrigeration is a specialised process/industrial application used for storing medicines, vaccines, and biological samples at controlled temperatures."
      },
      {
        text: "The difference between a refrigerator and the refrigeration system is that:",
        options: ["A refrigerator is the equipment while refrigeration is the process/science", "A refrigerator is larger", "Refrigeration is older technology", "They are exactly the same thing"],
        correct: 0,
        explanation: "A refrigerator is the physical appliance/equipment, while refrigeration is the process or science of achieving and maintaining low temperatures."
      }
    ]
  }

]); // end PORTAL_INJECT for MEE 102
