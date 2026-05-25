PORTAL_INJECT("EEE 102", [

  /* ============================================================
     CHAPTER 1 — Introduction to Software Applications in EEE
  ============================================================ */
  {
    number: 1,
    title: "Introduction to Software Applications in EEE",
    questionLimit: 40,
    timeLimit: 20,
    summary: "Software applications have transformed Electrical and Electronics Engineering (EEE) by enabling computer-aided design (CAD), circuit simulation, and virtual experimentation. Tools like MATLAB, Proteus, Multisim, SPICE, AutoCAD Electrical, LabVIEW, and Simulink have made it possible to implement software-based versions of real-world instruments, reduce hardware costs, minimize error-prone manual operations, and greatly increase versatility. Understanding these tools and the principles of software development—including algorithms, pseudocode, and the Software Development Life Cycle (SDLC)—is foundational to modern EEE practice.",
    keyPoints: [
      "Software applications in EEE include MATLAB/Simulink, Proteus, Multisim, PSPICE, AutoCAD Electrical, SolidWorks Electrical, LabVIEW, PSIM, TINA Pro, and Electrical CADD",
      "CAD (Computer-Aided Design) is the process of designing new products or circuits using computer software — it moves ideas from the mind into a 3D model environment, giving products market staying power",
      "Software-based versions of real-world instruments which are initially prone to errors can now be implemented with greater precision and reliability",
      "Circuit visualization and simulation is now possible without physical components, reducing cost and risk in the laboratory",
      "Parameters which may not be readily available in hardware can be derived through simulation software",
      "EEE software typically provides: a directory with design tools, symbol library, and compliance management features; a wealth of reusable templates such as flow charts, online diagrams, entity relation diagrams, and design tables; collaboration tools for sharing projects; and a content rendering system that saves projects to a library on your PC",
      "Simulation is the process of creating a model that mimics a real circuit or system to predict behavior without building it physically — it allows engineers to test, modify, and optimize designs before committing to hardware",
      "A virtual component is a software representation of a real-world component, existing only in simulation; a real component is a physical device that can be connected in an actual circuit",
      "Grounding in simulation is essential to provide a reference voltage (0V) for the circuit; without it, the simulator cannot calculate voltages correctly and many simulators will refuse to run",
      "Software Development Life Cycle (SDLC) includes: Problem Statement → Development of Algorithm → Actual Programming → Testing → Debugging → Documentation → Launching → Maintenance",
      "An algorithm is a sequence of steps (or instructions) followed by a computer to solve a problem — it is the set of basic rules to be followed by a computer to obtain an expected output from a given input",
      "Pseudocode is a shorthand way of describing a program using general words to represent the specific syntax of a computer code (language) so it can be easily understood by a non-programmer",
      "Two types of software are: (1) Application System Softwares — direct the basic functions of the computer, always developed and installed by the manufacturer; and (2) Application Softwares — direct advanced functionalities, always installed by the user",
      "A function in MATLAB is a mathematical process containing two variables: the dependent variable and the independent variable — it is a mapping system whose domain is the set of real numbers",
      "Input arguments refer to the syntax of code used to pass information into a programming software or computer; output arguments are the syntax of code written by the computer to return results or outputs based on the input function",
      "A parameter is a special kind of variable used in a function to refer to one of the pieces of data provided in that function; arguments refer to values in a function and can be input or output",
      "Common softwares used in EEE include Multisim, Proteus, MATLAB/Simulink, PSPICE, AutoCAD Electrical, SolidWorks Electrical, LabVIEW, PSIM, TINA Pro, and Electrical CADD among others",
      "Proteus Design Suite is a proprietary software used for electronic design visualization, automation, and simulation — it was developed/released in 1988 in Yorkshire, England by Labcenter Electronics and rendered in up to three languages including English, Spanish, French, and Chinese",
      "Proteus was designed for schematic capture, simulation, and PCB layout design; it also has a 3D visualization interface; Proteus interface operates by switching the mode to perform an operation",
      "Multisim is a widely used circuit simulation software that supports virtual instruments for oscilloscopes, multimeters, function generators, and spectrum analyzers, making it suitable for EEE laboratory work",
      "The importance of software-based laboratory work includes: reducing physical component costs, enabling parameter derivation that is not readily measurable in hardware, enabling visualization of circuit operation in real time, and supporting remote learning scenarios",
      "MATLAB stands for MATrix LABoratory — it was originally written to provide easy access to matrix software developed by LINPACK (Linear Systems Packaging) and EISPACK (Eigen System Packaging)",
      "MATLAB is a high-performance language for technical computing that integrates computation, visualization, and programming environment; it has sophisticated data structures, built-in editing and debugging tools, and supports object-oriented programming",
      "Strengths of MATLAB: it may behave as a calculator or as a programming language; it combines calculation and graphic plotting; it is relatively easy to learn; it is interpreted (not compiled) so errors are easy to fix; it is optimized for matrix operations; it has some object-oriented elements",
      "Weaknesses of MATLAB: it is not a general purpose programming language like C, C++, or FORTRAN; it is designed for scientific computing and not well-suited for other applications; it is interpreted (slower than compiled languages like C++); most commands are specific to MATLAB and do not have direct equivalents in other languages",
      "Competitors of MATLAB include Mathematica (popular among physicists for superior symbolic manipulation), Scilab, GNU Octave, and Rlab — MATLAB is more convenient for numerical analysis and linear algebra, frequently used in the engineering community"
    ],
    pdfUrl: "",
    cbtUrl: "",
    questions: [
      {
        text: "What does the acronym CAD stand for in the context of EEE software?",
        options: ["Computer Aided Drafting", "Computer Aided Design", "Circuit Aided Drawing", "Computer Application Development"],
        correct: 1,
        explanation: "CAD stands for Computer-Aided Design — it is the process of designing new products or circuits using computer software, moving ideas from the mind into a 3D model environment."
      },
      {
        text: "Which of the following is NOT listed as a common software used in EEE?",
        options: ["Multisim", "Proteus", "Microsoft Excel", "LabVIEW"],
        correct: 2,
        explanation: "Microsoft Excel is a general-purpose spreadsheet tool, not an EEE-specific software. Common EEE softwares include Multisim, Proteus, MATLAB, LabVIEW, PSPICE, AutoCAD Electrical, etc."
      },
      {
        text: "What is simulation as it relates to electrical circuits?",
        options: ["Building a physical circuit and testing it", "Creating a model that mimics a real circuit to predict behavior without building it physically", "Drawing circuit diagrams on paper", "Replacing all components with virtual ones permanently"],
        correct: 1,
        explanation: "Simulation is the process of creating a model that mimics a real circuit or system to predict its behavior without building it physically, allowing engineers to test and optimize designs."
      },
      {
        text: "What is the key difference between a virtual and a real component in electrical circuits?",
        options: ["Virtual components are cheaper to buy", "Virtual components exist only in software simulation while real components are physical devices", "Real components are more accurate than virtual ones", "Virtual components can only simulate DC circuits"],
        correct: 1,
        explanation: "A virtual component is a software representation existing only in simulation; a real component is a physical device that can be connected in an actual circuit."
      },
      {
        text: "Why is grounding important in simulation procedures?",
        options: ["To increase the voltage of the circuit", "To provide a reference voltage (0V) so the simulator can calculate voltages correctly", "To add resistance to the circuit", "To connect multiple circuits together"],
        correct: 1,
        explanation: "Grounding in simulation provides a reference voltage of 0V. Without it, the simulator cannot calculate voltages correctly and many simulators will refuse to run."
      },
      {
        text: "Proteus Design Suite was developed by which company?",
        options: ["MathWorks Inc.", "National Instruments", "Labcenter Electronics", "Cadence Design Systems"],
        correct: 2,
        explanation: "Proteus Design Suite was developed (released in 1988) in Yorkshire, England by Labcenter Electronics."
      },
      {
        text: "In which year was Proteus Design Suite first released?",
        options: ["1975", "1984", "1988", "1995"],
        correct: 2,
        explanation: "Proteus was initially released in 1988 in Yorkshire, England by Labcenter Electronics."
      },
      {
        text: "Which of the following best describes an algorithm?",
        options: ["A programming language used in EEE", "A sequence of steps followed by a computer to solve a problem", "A type of circuit diagram", "A simulation software for electronics"],
        correct: 1,
        explanation: "An algorithm is a sequence of processes (instructions) followed by a computer to solve a problem — it is the set of basic rules followed to obtain an expected output from a given input."
      },
      {
        text: "What is pseudocode?",
        options: ["A type of programming language", "A shorthand way of describing a program using general words so it can be understood by a non-programmer", "A faulty code with errors", "A code used only in simulation software"],
        correct: 1,
        explanation: "Pseudocode is a shorthand way of describing a program using general words to represent the specific syntax of a computer code so it can be easily understood by a non-programmer."
      },
      {
        text: "Which of the following is the first step in the Software Development Life Cycle (SDLC)?",
        options: ["Testing", "Debugging", "Problem Statement", "Documentation"],
        correct: 2,
        explanation: "The SDLC begins with the Problem Statement — this is when the developer identifies what problems they intend to solve by developing such applications."
      },
      {
        text: "What does MATLAB stand for?",
        options: ["Mathematical Application Tool and Logic", "MATrix LABoratory", "Mathematical Analysis Tool and Library", "Matrix Application and Logic Base"],
        correct: 1,
        explanation: "MATLAB stands for MATrix LABoratory. It was originally written to provide easy access to matrix software developed by LINPACK and EISPACK."
      },
      {
        text: "LINPACK and EISPACK stand for:",
        options: ["Linear Systems Packaging and Eigen System Packaging", "Linear Systems Program and Electronic System Package", "Logic Integration Package and Electronic Signal Package", "None of the above"],
        correct: 0,
        explanation: "LINPACK stands for Linear Systems Packaging and EISPACK stands for Eigen System Packaging — these were the original matrix software projects that MATLAB was designed to access."
      },
      {
        text: "Which of the following is a strength of MATLAB?",
        options: ["It is faster than compiled languages like C++", "It combines calculation and graphic plotting nicely", "It is a general purpose programming language", "It is best suited for non-scientific applications"],
        correct: 1,
        explanation: "A major strength of MATLAB is that it combines calculation and graphic plotting nicely, making visualization of results immediately available."
      },
      {
        text: "Which of the following is a weakness of MATLAB?",
        options: ["It cannot perform matrix operations", "It has no graphing capabilities", "It is an interpreted language, making it slower than compiled languages like C++", "It does not support object-oriented programming"],
        correct: 2,
        explanation: "A weakness of MATLAB is that it is an interpreted (not compiled) language, making it slower than compiled languages like C++."
      },
      {
        text: "Which software is considered MATLAB's major competitor and is more popular among physicists?",
        options: ["Proteus", "Mathematica", "LabVIEW", "Multisim"],
        correct: 1,
        explanation: "Mathematica is MATLAB's major competitor and is popular among physicists due to its superior symbolic manipulation capabilities."
      },
      {
        text: "What type of software is always developed and installed by the manufacturer of a computer?",
        options: ["Application Software", "Application System Software", "Simulation Software", "Programming Software"],
        correct: 1,
        explanation: "Application System Softwares direct the basic functions of the computer and are always developed and installed by the manufacturer."
      },
      {
        text: "What type of software is always installed on the computer by the user?",
        options: ["Application System Software", "Operating System", "Application Software", "Firmware"],
        correct: 2,
        explanation: "Application Softwares direct advanced functionalities of the computer and are always installed by the user."
      },
      {
        text: "In the SDLC, what is debugging?",
        options: ["Writing the first version of the code", "The process of finding and fixing errors in a program", "Releasing software to the market", "Testing the code for the first time"],
        correct: 1,
        explanation: "Debugging is the process of finding and fixing errors in a program. If during testing the computer returns an error, the programmer must find, analyze, and fix those errors."
      },
      {
        text: "Which SDLC phase involves making the software market-fit and releasing it for installation by users?",
        options: ["Testing", "Documentation", "Maintenance", "Launching"],
        correct: 3,
        explanation: "Launching is when a software or program is made market-fit and is released by the programmer for installation by users."
      },
      {
        text: "What does the Maintenance phase of the SDLC involve?",
        options: ["Writing the algorithm for the program", "The series of activities carried out to keep the software in good working condition, including updates", "Testing the software before release", "Finding errors in the code"],
        correct: 1,
        explanation: "Maintenance refers to the series of activities carried out to keep the software in good working condition — this may also include updating the software to add new functions."
      },
      {
        text: "Which of the following is an importance of software applications in EEE?",
        options: ["They make hardware components unnecessary forever", "They enable circuit visualization and simulation without physical components", "They replace all laboratory experiments", "They only work for digital circuits"],
        correct: 1,
        explanation: "One key importance of software in EEE is that circuit visualization and simulation is now possible — engineers can test designs virtually before building physically."
      },
      {
        text: "An input argument in MATLAB/programming refers to:",
        options: ["The output returned by the function", "The syntax of code used to pass information into a programming software or computer", "An error message generated by the code", "A variable defined outside the function"],
        correct: 1,
        explanation: "Input arguments refer to the syntax of code used to pass information into a programming software or computer — they are the lines of code written to command the computer to perform an operation."
      },
      {
        text: "An output argument in MATLAB/programming refers to:",
        options: ["Variables given as input to a function", "Syntax of code written by the computer to return results based on the input function", "The pseudocode of a program", "The debugging report"],
        correct: 1,
        explanation: "Output arguments are the syntax of code written by the computer to return results or outputs based on the input function — they are simply the results obtained from the computer."
      },
      {
        text: "A parameter in a function is best described as:",
        options: ["A random number generated by MATLAB", "A special kind of variable used in a function to refer to one of the pieces of data provided in that function", "The name of the function itself", "The output of the function"],
        correct: 1,
        explanation: "A parameter is a special kind of variable used in a function to refer to one of the pieces of data provided in that function."
      },
      {
        text: "Which EEE software is used primarily for PCB layout design and schematic capture?",
        options: ["MATLAB", "Multisim", "Proteus", "Scilab"],
        correct: 2,
        explanation: "Proteus Design Suite is designed for schematic capture, simulation, and PCB layout design — it also has a 3D visualization interface."
      },
      {
        text: "The Development of Algorithm in SDLC involves:",
        options: ["Writing the actual lines of code", "The programmer developing the sequence of processes to be taken by the computer in solving the problem", "Testing the final software product", "Documenting user manuals"],
        correct: 1,
        explanation: "Development of Algorithm is when the programmer develops the sequence of processes to be taken by the computer in solving the problem at hand."
      },
      {
        text: "Which of these is NOT a feature typically provided by EEE software applications?",
        options: ["A directory with design tools and symbol library", "A wealth of reusable templates including flow charts and diagrams", "Automatic physical component procurement", "A collaboration tool for sharing projects"],
        correct: 2,
        explanation: "EEE software provides design tools, templates, collaboration features, and content rendering — but it does not automatically procure physical components."
      },
      {
        text: "MATLAB was commercially available since:",
        options: ["1970", "1984", "1990", "2000"],
        correct: 1,
        explanation: "The MATLAB software package has been commercially available since 1984 and is now considered a standard tool at most universities and industries worldwide."
      },
      {
        text: "Which of the following best describes Multisim?",
        options: ["A PCB layout tool only", "A circuit simulation software supporting virtual instruments like oscilloscopes and multimeters", "A 3D mechanical design software", "A word processing application for engineers"],
        correct: 1,
        explanation: "Multisim is a circuit simulation software that supports virtual instruments including oscilloscopes, multimeters, function generators, and spectrum analyzers."
      },
      {
        text: "In programming, what is a function?",
        options: ["A line of code that assigns a value to a variable", "A mathematical process containing two variables (dependent and independent) — it is a mapping system whose domain is the set of real numbers", "A type of loop structure", "A debugging tool"],
        correct: 1,
        explanation: "A function is a mathematical process containing two variables: the dependent and the independent variable. It is a mapping system whose domain is the set of real numbers."
      },
      {
        text: "Which of the following is NOT a competitor of MATLAB?",
        options: ["Scilab", "GNU Octave", "Rlab", "Proteus"],
        correct: 3,
        explanation: "Proteus is a circuit simulation/PCB design tool — it is not a mathematical computing competitor of MATLAB. MATLAB's competitors include Scilab, GNU Octave, Rlab, and Mathematica."
      },
      {
        text: "The process of Actual Programming in SDLC refers to:",
        options: ["Launching the application to users", "When the programmer develops the lines of code that enable the computer to solve the problem", "Testing the developed program", "Writing the algorithm in plain English"],
        correct: 1,
        explanation: "Actual Programming is when the programmer develops the lines of code that enable the computer to solve the earlier stated problem."
      },
      {
        text: "What is meant by 'circuit visualization' in EEE software?",
        options: ["Drawing circuits freehand on paper", "The ability to see circuit operation in real time on a computer without physical components", "3D printing of circuit boards", "Using magnifying glasses on real circuits"],
        correct: 1,
        explanation: "Circuit visualization means being able to see and observe circuit operation in real time through software simulation without physical components."
      },
      {
        text: "Documentation in SDLC refers to:",
        options: ["The actual writing of code", "The development of instructive materials designed to ease interaction between the user and the program, including user manuals and how-to guides", "The testing phase of the software", "The final launch of the software"],
        correct: 1,
        explanation: "Documentation refers to the development of instructive materials designed to ease interaction between the user and the program — it may include user manuals and how-to guides."
      },
      {
        text: "Which language was MATLAB rewritten in during the 1980s to expand its functionality?",
        options: ["FORTRAN", "C", "Python", "Java"],
        correct: 1,
        explanation: "MATLAB was rewritten in C in the 1980s with more functionality, including plotting routines, which greatly expanded its capabilities."
      },
      {
        text: "Proteus interface operates by:",
        options: ["Writing commands in a command window", "Switching the mode to perform an operation", "Using only keyboard shortcuts", "Dragging and dropping only"],
        correct: 1,
        explanation: "Proteus interface operates by switching the mode to perform an operation — it has different modes for schematic capture, simulation, and PCB layout."
      },
      {
        text: "Testing in the SDLC is when:",
        options: ["The programmer writes the code", "The programmer launches the software", "The programmer examines the code to find out whether or not the code is sufficient to enable the computer solve the problem", "The programmer documents the software"],
        correct: 2,
        explanation: "Testing is when the programmer examines the code to find out whether or not it is sufficient to enable the computer solve the problem."
      },
      {
        text: "Which of the following is true about MATLAB's data element structure?",
        options: ["It requires explicit dimensioning of arrays", "Its basic data element is an array that does not require dimensioning", "It only supports scalar variables", "Arrays must be pre-declared with fixed sizes"],
        correct: 1,
        explanation: "MATLAB is an interactive system whose basic data element is an array that does not require dimensioning — this makes it very flexible for numerical computation."
      },
      {
        text: "Which MATLAB competitor is particularly popular for numerical analysis and linear algebra in the engineering community?",
        options: ["Mathematica", "MATLAB itself", "Scilab", "GNU Octave"],
        correct: 1,
        explanation: "MATLAB is more convenient for numerical analysis and linear algebra and is frequently used in the engineering community — Mathematica is popular among physicists for symbolic manipulation."
      },
      {
        text: "Which of the following correctly describes MATLAB's history?",
        options: ["It was developed by MathWorks from the beginning", "It was developed primarily by Cleve Moler in the 1970s, derived from FORTRAN subroutines LINPACK and EISPACK, and MathWorks Inc. was created in 1984 to market it", "It was created in 1990 as a Python extension", "It was originally developed in Germany"],
        correct: 1,
        explanation: "MATLAB was developed primarily by Cleve Moler in the 1970s, derived from FORTRAN subroutines LINPACK and EISPACK. MathWorks Inc. was created in 1984 to market and continue its development."
      },
      {
        text: "Which of the following describes 'parameters which may not be readily available' being derivable through simulation?",
        options: ["Physical parameters that cannot be measured without destructive testing can be obtained through simulation", "Parameters are always available in hardware and simulation adds no value", "Simulation can only compute resistance values", "Only voltage parameters are derivable through simulation"],
        correct: 0,
        explanation: "One advantage of simulation is that parameters which may not be readily available in hardware (e.g., internal fields, transient values, or parameters requiring destructive testing) can be derived through software simulation."
      },
      {
        text: "Proteus supports design in up to how many languages?",
        options: ["One language only", "Two languages", "Three languages including English, Spanish, French and Chinese", "All languages of the world"],
        correct: 2,
        explanation: "Proteus was rendered in up to three languages including English, Spanish, French, and Chinese."
      },
      {
        text: "Which of the following tools is known for virtual instruments such as oscilloscopes and spectrum analyzers in circuit simulation?",
        options: ["AutoCAD Electrical", "Multisim", "SolidWorks Electrical", "TINA Pro"],
        correct: 1,
        explanation: "Multisim is a widely used circuit simulation software that supports virtual instruments including oscilloscopes, multimeters, function generators, and spectrum analyzers."
      },
      {
        text: "The MathWorks Inc. was created in which year?",
        options: ["1970", "1980", "1984", "1990"],
        correct: 2,
        explanation: "The MathWorks Inc. was created in 1984 to market and continue the development of MATLAB."
      },
      {
        text: "What is the purpose of an EEE software's symbol library?",
        options: ["To store circuit board designs only", "To provide standardized graphical symbols for components used in circuit design and schematics", "To store mathematical equations", "To generate random circuit designs"],
        correct: 1,
        explanation: "A symbol library in EEE software provides standardized graphical symbols for electrical and electronic components used in creating circuit diagrams and schematics."
      },
      {
        text: "Which of the following is true about software-based instruments vs. hardware instruments?",
        options: ["Hardware instruments are always more accurate", "Software-based instruments can implement real-world instruments that were initially prone to errors with greater reliability", "Software instruments cannot measure electrical quantities", "Hardware instruments are preferred in all modern labs"],
        correct: 1,
        explanation: "It is possible to implement software-based versions of real-world instruments which are initially prone to errors, making software instruments reliable and versatile alternatives."
      },
      {
        text: "In the context of EEE, what does 'compliance management' refer to in software design tools?",
        options: ["Managing employee attendance", "Ensuring designs meet specified standards, regulations, and engineering requirements", "Compiling code automatically", "Testing circuit components physically"],
        correct: 1,
        explanation: "Compliance management features in EEE software ensure that designs meet specified standards, regulations, and engineering requirements."
      },
      {
        text: "Boolean logic in pseudocode uses which basic operations?",
        options: ["ADD, SUBTRACT, MULTIPLY", "AND, OR, NOT", "IF, ELSE, ENDIF", "FOR, WHILE, DO"],
        correct: 1,
        explanation: "Boolean logic uses AND (values of A and B taken together), OR (value of A or B or both), and NOT (not values of A) as basic operations."
      },
      {
        text: "Which of the following is a valid reason why engineers prefer simulation over pure hardware prototyping?",
        options: ["Simulation is always 100% accurate", "Simulation reduces cost, saves time, enables parameter derivation, and allows risk-free testing", "Simulation does not require any engineering knowledge", "Simulation can replace all physical testing permanently"],
        correct: 1,
        explanation: "Simulation is preferred because it reduces cost, saves time, enables derivation of parameters not readily available in hardware, and allows risk-free testing of designs."
      },
      {
        text: "Which of the following softwares is associated with PCB layout alongside schematic capture?",
        options: ["MATLAB", "Proteus", "Multisim", "GNU Octave"],
        correct: 1,
        explanation: "Proteus Design Suite supports schematic capture, simulation, and PCB layout design — the PCB layout capability is a key differentiator."
      },
      {
        text: "What are the MATLAB command prompts for the full and educational versions respectively?",
        options: [">>" and "EDU>", "MATLAB>" and "STUDENT>", ">> and <<", "CMD> and EDU>"],
        correct: 0,
        explanation: "The MATLAB prompt is >> for the full version and EDU> for the educational version."
      },
      {
        text: "The development of MATLAB gained popularity initially through:",
        options: ["Aggressive marketing by MathWorks", "Word of mouth, because it was not officially distributed", "Government mandate for all engineering universities", "A series of television advertisements"],
        correct: 1,
        explanation: "MATLAB gained its popularity through word of mouth, because it was not officially distributed in its early years."
      },
      {
        text: "Which of the following best explains why software applications have become an important preoccupation for universities globally?",
        options: ["They replace all physical laboratory work", "They enhance a large variety of courses and give teachers the opportunity to develop new educational approaches using commercial technologies", "They are cheaper than hiring professors", "They are mandatory for all university accreditation globally"],
        correct: 1,
        explanation: "Software applications have grown in importance because they enhance a large variety of courses and give teachers the opportunity to develop new educational approaches using commercial technologies."
      },
      {
        text: "Types of functions in MATLAB include:",
        options: ["Polynomial, Rational, Absolute, Trigonometric, and Exponential functions", "Input, Output, Script, and Debug functions only", "Plot, Graph, Matrix, and Vector functions only", "None of the above"],
        correct: 0,
        explanation: "Types of functions in MATLAB include Polynomial (Σ aₙxⁿ), Rational, Absolute, Trigonometric, and Exponential functions, among others."
      },
      {
        text: "What is the basic idea behind the introduction of software-based circuit development?",
        options: ["To eliminate all electronics engineers", "Software-based circuit development makes circuit development and design easier and more versatile with minimal cost", "To replace physics with computer science entirely", "To remove the need for electricity in experiments"],
        correct: 1,
        explanation: "The basic idea is that the introduction of software-based circuit systems has made circuit development easier generally — reducing cost, increasing versatility, and enabling virtual prototyping."
      },
      {
        text: "In pseudocode, AND-gate behavior is described as:",
        options: ["Value of A or B or both", "Not values of A", "Values of A and B taken together", "Values only when A equals B"],
        correct: 2,
        explanation: "In Boolean pseudocode, AND produces values of A and B taken together — both inputs must be true for the output to be true."
      },
      {
        text: "What is the primary advantage of using AutoCAD Electrical in EEE?",
        options: ["It is used only for PCB layout", "It provides CAD tools specifically for electrical design, allowing creation of new electrical diagrams and circuits with compliance features", "It is a simulation-only tool", "It replaces the need for MATLAB"],
        correct: 1,
        explanation: "AutoCAD Electrical provides CAD tools specifically for electrical design, allowing engineers to create new electrical diagrams and circuits while incorporating symbol libraries and compliance management."
      },
      {
        text: "Which of the following is an example of an Application System Software?",
        options: ["MATLAB", "Microsoft Word", "Proteus", "An operating system like Windows"],
        correct: 3,
        explanation: "Application System Softwares direct the basic functions of the computer and are always developed and installed by the manufacturer — operating systems like Windows are examples."
      },
      {
        text: "How does simulation reduce errors compared to physical prototyping?",
        options: ["By making all components perfect", "By allowing engineers to find and fix design errors in software before committing to physical hardware, avoiding costly mistakes", "By removing the need for testing", "By automatically generating error-free designs"],
        correct: 1,
        explanation: "Simulation reduces errors by allowing engineers to find and fix design flaws in software before building physical hardware, avoiding costly rework and component damage."
      },
      {
        text: "Which EEE software is described as being used for data computation and data analysis in addition to circuit work?",
        options: ["Proteus", "MATLAB", "Multisim", "TINA Pro"],
        correct: 1,
        explanation: "MATLAB can be used for data computation and data analysis in addition to matrix operations, plotting, and programming — it is a versatile technical computing environment."
      },
      {
        text: "The statement 'It is possible to implement software-based versions of real-world instruments which are initially prone to errors' refers to which importance of software in EEE?",
        options: ["CAD possibility", "Circuit visualization", "Software-based instrument reliability", "Parameter derivation"],
        correct: 2,
        explanation: "This statement refers to the importance that software-based instruments can implement versions of real-world instruments with greater reliability, overcoming the error-prone nature of early hardware instruments."
      },
      {
        text: "Which term describes the series of events that involves ideation, implementation, development, debugging, and landing of a computer program or software?",
        options: ["Algorithm", "Pseudocode", "Software Development Life Cycle (SDLC)", "Debugging Process"],
        correct: 2,
        explanation: "The Software Development Life Cycle (SDLC) refers to the series of events that involves the ideation, implementation, development, debugging, and landing of a computer program or software."
      },
      {
        text: "A 'content rendering system that allows you save your project to a library on your PC' is a feature of:",
        options: ["Only MATLAB", "EEE software applications generally", "Only Proteus", "Only AutoCAD"],
        correct: 1,
        explanation: "EEE software applications generally provide a content rendering system that allows you to save your project to a library on your PC — this is one of the common features listed."
      },
      {
        text: "What distinguishes MATLAB from languages like C or FORTRAN for solving technical problems?",
        options: ["MATLAB is faster in execution", "MATLAB has powerful built-in routines, does not require array dimensioning, has easy-to-use graphics, and integrates computation and visualization", "MATLAB is a lower-level language", "MATLAB can only solve matrix problems"],
        correct: 1,
        explanation: "MATLAB has many advantages over conventional languages: powerful built-in routines, arrays that don't require dimensioning, easy-to-use graphics, and it integrates computation and visualization in one environment."
      },
      {
        text: "In the SDLC, which phase comes immediately after 'Development of Algorithm'?",
        options: ["Testing", "Launching", "Actual Programming", "Documentation"],
        correct: 2,
        explanation: "The SDLC order is: Problem Statement → Development of Algorithm → Actual Programming → Testing → Debugging → Documentation → Launching → Maintenance."
      },
      {
        text: "PSIM is used primarily in which field of EEE?",
        options: ["PCB layout only", "Power electronics and motor drive simulation", "Audio signal processing only", "Fiber optic design"],
        correct: 1,
        explanation: "PSIM is primarily used for power electronics simulation and motor drive design, making it a specialist tool in the power electronics subfield of EEE."
      },
      {
        text: "Which of the following correctly identifies where Proteus was developed?",
        options: ["Silicon Valley, USA", "Tokyo, Japan", "Yorkshire, England", "Berlin, Germany"],
        correct: 2,
        explanation: "Proteus was developed and released in 1988 in Yorkshire, England by Labcenter Electronics."
      },
      {
        text: "LabVIEW is primarily used for:",
        options: ["PCB layout", "Data acquisition, instrument control, and laboratory automation in EEE", "Circuit schematic drawing only", "Matrix computation"],
        correct: 1,
        explanation: "LabVIEW (Laboratory Virtual Instrument Engineering Workbench) is primarily used for data acquisition, instrument control, and laboratory automation — it is widely used in EEE labs."
      },
      {
        text: "A 'collaboration tool which helps you share your project with friends' is a feature of:",
        options: ["Only MATLAB", "EEE software applications", "Only Proteus", "Only Microsoft Office"],
        correct: 1,
        explanation: "EEE software applications provide a collaboration tool which helps you share your project with friends — this is one of the features listed for EEE softwares."
      },
      {
        text: "Which of the following statements about software-based circuit design is FALSE?",
        options: ["It reduces the need for expensive physical components during design phases", "It enables simulation before hardware prototyping", "It completely replaces the need for all physical laboratory experiments permanently", "It allows visualization of circuit operation"],
        correct: 2,
        explanation: "Software does not completely replace all physical laboratory experiments permanently — physical testing is still required for final validation. Software reduces but does not eliminate the need for hardware work."
      },
      {
        text: "GNU Octave is best described as:",
        options: ["A PCB design tool", "An open-source alternative to MATLAB for numerical computation", "A circuit simulation platform", "A hardware description language"],
        correct: 1,
        explanation: "GNU Octave is an open-source alternative to MATLAB for numerical computation — it is listed as one of MATLAB's competitors."
      },
      {
        text: "Which of the following best describes TINA Pro?",
        options: ["A word processor for engineers", "A circuit simulation software used in EEE for electronic circuit analysis and design", "A project management tool", "A 3D mechanical CAD application"],
        correct: 1,
        explanation: "TINA Pro is a circuit simulation software used in EEE for electronic circuit analysis, design, and educational purposes — it is listed among common EEE softwares."
      },
      {
        text: "The MATLAB environment includes toolboxes for which of the following?",
        options: ["Signal processing, symbolic computation, control theory, simulation, and optimization", "Only matrix operations", "Only graphical plotting", "Word processing and spreadsheets"],
        correct: 0,
        explanation: "MATLAB toolboxes are available for signal processing, symbolic computation, control theory, simulation, optimization, and several other fields of applied science and engineering."
      },
      {
        text: "The 'directory with design tools, symbol library, and compliance management features' in EEE software gives the ability to:",
        options: ["Create new electrical diagrams and circuits", "Play video files", "Design mechanical structures only", "Write programming code only"],
        correct: 0,
        explanation: "The directory with design tools, symbol library, and compliance management features gives engineers the ability to create new electrical diagrams and circuits following standards."
      },
      {
        text: "In MATLAB's history, J. H. Wilkinson, George Forsythe, and John Todd played important roles in:",
        options: ["Marketing MATLAB commercially", "The origins of MATLAB as noted by Cleve Moler", "Writing MATLAB's GUI", "Creating the MathWorks company"],
        correct: 1,
        explanation: "According to Cleve Moler, J. H. Wilkinson, George Forsythe, and John Todd played important roles in the origins of MATLAB."
      },
      {
        text: "The authors of LINPACK (which influenced MATLAB) include:",
        options: ["Cleve Moler, Jack Dongara, Pete Steward, Jim Bunch", "Bill Gates, Steve Jobs, and Alan Turing", "Newton, Leibniz, and Euler", "James Watt and Michael Faraday"],
        correct: 0,
        explanation: "The authors of LINPACK include Jack Dongara, Pete Steward, Jim Bunch, and Cleve Moler — LINPACK was one of the key software packages that MATLAB was designed to access."
      },
      {
        text: "LAPACK was designed to:",
        options: ["Replace MATLAB", "Supersede LINPACK and EISPACK as a more advanced Linear Algebra Package", "Compete with Proteus in circuit simulation", "Replace Python programming language"],
        correct: 1,
        explanation: "LAPACK (Linear Algebra Package) was designed to supersede LINPACK and EISPACK — it is a more advanced linear algebra package that builds on the foundations those packages established."
      },
      {
        text: "SolidWorks Electrical is primarily used for:",
        options: ["Matrix computation", "Electrical design within the SolidWorks CAD environment, useful for electromechanical integration", "Web development", "Signal processing only"],
        correct: 1,
        explanation: "SolidWorks Electrical is used for electrical design within the SolidWorks CAD environment — it is particularly useful for electromechanical integration in engineering projects."
      },
      {
        text: "Which of the following is NOT a stage in the SDLC as described in EEE 102?",
        options: ["Problem Statement", "Development of Algorithm", "Hardware Procurement", "Documentation"],
        correct: 2,
        explanation: "Hardware Procurement is not a stage in the SDLC. The SDLC stages are: Problem Statement, Algorithm Development, Actual Programming, Testing, Debugging, Documentation, Launching, and Maintenance."
      },
      {
        text: "The statement 'MATLAB gained its popularity through word of mouth' indicates that:",
        options: ["MATLAB was heavily advertised on television", "MATLAB spread organically among users and researchers before it was officially marketed", "Word processing helped spread MATLAB", "MATLAB was first used only in spoken communication"],
        correct: 1,
        explanation: "MATLAB gained its popularity through word of mouth because it was not officially distributed initially — users shared it informally among academic and research communities."
      },
      {
        text: "Electrical CADD refers to:",
        options: ["Electrical Computer-Aided Drafting and Design software used for electrical engineering drawings", "A type of battery technology", "An algorithm for signal processing", "A standard for electrical safety testing"],
        correct: 0,
        explanation: "Electrical CADD refers to Electrical Computer-Aided Drafting and Design software — it is a specialized EEE tool for creating technical electrical drawings and designs."
      }
    ]
  },

  /* ============================================================
     CHAPTER 2 — MATLAB Basics: Interface, Variables & Arithmetic
  ============================================================ */
  {
    number: 2,
    title: "MATLAB Basics: Interface, Variables & Arithmetic",
    questionLimit: 40,
    timeLimit: 20,
    summary: "MATLAB operates through a desktop environment comprising several windows. The Command Window is where operations are performed and results are displayed. Other windows include the Command History, Workspace, Current Directory, Help Browser, and Start Button. MATLAB variables are created through assignment statements, and all arithmetic follows strict precedence rules (BODMAS/BEDMAS). Understanding how to suppress output with semicolons, manage the workspace, control floating-point display with `format`, and use basic commands like `clear`, `clc`, `who`, and `whos` is foundational to working effectively in MATLAB.",
    keyPoints: [
      "The MATLAB desktop contains: Command Window (where functions are inputted and results displayed), Command History (seen by pressing ↑ key — gives history of commands), Workspace (gives detailed information about all variables in the command window), Current Folder/Directory (shows all folders and repositories in the MATLAB workspace), Help Browser, and Start Button",
      "MATLAB has two command prompts: >> for the full (free) version and EDU> for the educational version",
      "MATLAB variables are created with an assignment statement: variable_name = a value (or an expression); expressions can involve manual entry, built-in functions, or user-defined functions",
      "Once a variable has been created, it can be reassigned (overwritten); placing a semicolon (;) at the end of a line suppresses the output display — MATLAB still executes the command but doesn't print the result",
      "If an expression is entered incorrectly, MATLAB returns an error message; a previously typed command can be recalled with the up-arrow key (↑) and then modified and executed",
      "MATLAB hierarchy of arithmetic operations (BODMAS): (1st) Parentheses — innermost first; (2nd) Exponentials — left to right; (3rd) Multiplication and Division — left to right; (4th) Addition and Subtraction — left to right",
      "For operators of equal precedence, evaluation is from left to right; parentheses can always be used to overrule priority — their use is recommended in complex expressions to avoid ambiguity",
      "MATLAB by default displays only 4 decimal places (format short); to see all 15 digits use 'format long'; to return to standard format use 'format short' or simply 'format'",
      "Key workspace management commands: 'clear' or 'clear all' removes all variables from the workspace and frees memory; 'clc' clears only the Command Window display; 'who' lists variables currently in memory; 'whos' gives more details including size, space allocation, and class of variables",
      "The 'diary' command records everything done during a MATLAB session: 'diary' or 'diary FileName' starts recording, 'diary off' stops, 'diary on' resumes; the file created is a simple text file that can be edited",
      "Multiple statements can be entered per line using commas (,) which allow multiple statements without suppressing output, or semicolons (;) which suppress output between statements",
      "Miscellaneous commands: 'clc' clears Command Window; 'ctrl-c' aborts a MATLAB computation; '...' (ellipsis) continues a line to the next line",
      "To get help: 'help Command' gives information about a specific command; 'lookfor keyword' searches all help entries for a match; 'doc function' opens the online help manual; 'help elfun' lists elementary functions; 'help specfun' lists special functions",
      "The difference between 'help' and 'lookfor': help searches for an exact function name match; lookfor searches the quick summary information in each function for a match — useful when you don't know the exact function name",
      "Basic arithmetic operators: + (Addition), - (Subtraction), * (Multiplication), / (Division right), ^ (Power/Exponentiation)",
      "MATLAB stores numerical results in double precision (15 significant digits) even when displaying fewer decimal places; the variable 'ans' stores the result of the most recent unassigned calculation",
      "The workspace is the repository of variables in the MATLAB software; contents of the workspace persist between executions of separate commands — use 'clear' at the start of each new independent calculation to avoid unintended carryover",
      "Example of precedence: 1+2*3 = 7 (multiplication first), but (1+2)*3 = 9 (parentheses change order); 1/(2+3^2)+4/5*6/7 = 0.7766 vs 1/2+3^2+4/5*6/7 = 10.1857",
      "Format options include: 'format short' (4 decimal places, default), 'format long' (15 significant digits), 'format short eng' (engineering format, ≥5 digits, power multiple of 3), 'format long eng' (16 significant digits, power multiple of 3)",
      "The 'ans' variable: when you do not specify an output variable, MATLAB uses 'ans' (short for answer) as a default variable to store the results of the current calculation; this variable is created or overwritten with each unassigned calculation"
    ],
    pdfUrl: "",
    cbtUrl: "",
    questions: [
      {
        text: "Which window in the MATLAB interface is where you perform operations and see simulation results?",
        options: ["Command History", "Workspace", "Command Window", "Current Directory"],
        correct: 2,
        explanation: "The Command Window is where you perform operations and simulations. Functions are inputted here and results are displayed here."
      },
      {
        text: "How is the Command History accessed in MATLAB?",
        options: ["By clicking File menu", "By pressing the ↑ (up-arrow) key on the keyboard", "By typing 'history' in the command window", "By clicking the Start button"],
        correct: 1,
        explanation: "The Command History is seen by pressing the ↑ (up-arrow) key on the keyboard — it gives a history of commands that have been performed."
      },
      {
        text: "What does the MATLAB Workspace window provide?",
        options: ["A history of commands typed", "Detailed information about all variables currently in the Command Window", "A list of available toolboxes", "The current directory listing"],
        correct: 1,
        explanation: "The Workspace (Commands Workspace) gives detailed information about all variables in the commands window, including their values, sizes, and types."
      },
      {
        text: "What is the MATLAB command prompt for the full (free) version?",
        options: ["MATLAB>", "EDU>", ">>", "CMD>"],
        correct: 2,
        explanation: "The command prompt for the full MATLAB version is >>. The educational version uses EDU>."
      },
      {
        text: "How are MATLAB variables created?",
        options: ["Using a 'var' keyword before the variable name", "Using an assignment statement: variable_name = value or expression", "By declaring them in a separate declaration block", "Using the 'dim' keyword"],
        correct: 1,
        explanation: "MATLAB variables are created with an assignment statement: variable_name = a value (or an expression). No type declaration is needed."
      },
      {
        text: "What does placing a semicolon (;) at the end of a MATLAB statement do?",
        options: ["Ends the MATLAB session", "Suppresses the output display while still executing the command", "Causes an error", "Creates a new variable named 'ans'"],
        correct: 1,
        explanation: "Placing a semicolon (;) at the end of a line suppresses the numerical output — MATLAB executes the command but does not display the result."
      },
      {
        text: "What is the default variable MATLAB uses when you don't specify an output variable?",
        options: ["result", "output", "ans", "temp"],
        correct: 2,
        explanation: "When you do not specify an output variable, MATLAB uses 'ans' (short for answer) as a default variable to store the results of the current calculation."
      },
      {
        text: "In MATLAB's hierarchy of arithmetic operations, what is evaluated first?",
        options: ["Addition and Subtraction", "Multiplication and Division", "Exponentials", "Parentheses (innermost first)"],
        correct: 3,
        explanation: "According to MATLAB's operator precedence (BODMAS), the contents of all parentheses are evaluated first, starting from the innermost parentheses and working outward."
      },
      {
        text: "In MATLAB's hierarchy of operations, what is evaluated second (after parentheses)?",
        options: ["Addition", "Multiplication and Division", "All exponentials, working from left to right", "Subtraction"],
        correct: 2,
        explanation: "After parentheses, all exponentials are evaluated, working from left to right."
      },
      {
        text: "What is the result of >> 1+2*3 in MATLAB?",
        options: ["9", "7", "6", "8"],
        correct: 1,
        explanation: "MATLAB evaluates 1+2*3 as 1+(2*3) = 1+6 = 7, because multiplication has higher precedence than addition."
      },
      {
        text: "What is the result of >> (1+2)*3 in MATLAB?",
        options: ["7", "9", "6", "12"],
        correct: 1,
        explanation: "(1+2)*3: parentheses are evaluated first, giving 3*3 = 9."
      },
      {
        text: "Which MATLAB command removes ALL variables from the workspace?",
        options: ["clc", "clear or clear all", "whos", "diary off"],
        correct: 1,
        explanation: "The 'clear' or 'clear all' command removes all variables from the workspace, freeing up system memory."
      },
      {
        text: "Which command clears only the MATLAB Command Window display?",
        options: ["clear", "whos", "clc", "diary off"],
        correct: 2,
        explanation: "'clc' clears the Command Window display — it does not remove variables from the workspace."
      },
      {
        text: "Which command lists all variables currently in the MATLAB workspace?",
        options: ["dir", "whos", "who", "list"],
        correct: 2,
        explanation: "'who' lists all the variables currently in the workspace. 'whos' gives more details including size, space allocation, and class."
      },
      {
        text: "Which command gives detailed information about workspace variables including size and class?",
        options: ["who", "list", "whos", "dir"],
        correct: 2,
        explanation: "'whos' lists all variables in the workspace alongside their size, space allocation, matrix size, and class of variable — providing more detail than 'who'."
      },
      {
        text: "What does 'format long' do in MATLAB?",
        options: ["Displays output in 4 decimal places", "Displays output in at least 15 significant digits", "Changes the font size", "Makes the output appear in a new window"],
        correct: 1,
        explanation: "'format long' displays output in at least 15 significant digits after the decimal point, showing MATLAB's full double-precision accuracy."
      },
      {
        text: "How many decimal places does MATLAB display by default (format short)?",
        options: ["2 decimal places", "4 decimal places", "8 decimal places", "15 decimal places"],
        correct: 1,
        explanation: "MATLAB by default displays only 4 decimal places in the result of calculations (format short)."
      },
      {
        text: "How do you recall a previously typed command in the MATLAB Command Window?",
        options: ["Press Ctrl+Z", "Press the ↑ (up-arrow) key", "Type 'recall'", "Click File > History"],
        correct: 1,
        explanation: "A previously typed command can be recalled with the up-arrow key (↑). When the command is displayed, it can be modified if needed and executed."
      },
      {
        text: "What does MATLAB's 'diary' command do?",
        options: ["Opens a calendar", "Records all input and output during a MATLAB session to a text file", "Lists all variables", "Clears the workspace"],
        correct: 1,
        explanation: "The 'diary' command keeps track of everything done during a MATLAB session, saving all input and output to a simple text file that can be edited later."
      },
      {
        text: "How do you stop the diary recording in MATLAB?",
        options: ["Type 'diary stop'", "Type 'diary off'", "Close MATLAB", "Type 'clear diary'"],
        correct: 1,
        explanation: "To stop the diary recording, type 'diary off'. To start recording again, type 'diary on'."
      },
      {
        text: "Multiple statements can be entered per line in MATLAB using:",
        options: ["Commas (,) or semicolons (;)", "Colons (:) only", "Pipes (|) only", "Ampersands (&) only"],
        correct: 0,
        explanation: "Multiple statements per line are entered using commas (,) which allow output display, or semicolons (;) which suppress output between statements."
      },
      {
        text: "What does >> help Command do in MATLAB?",
        options: ["Opens a browser window", "Provides information about the specified command from MATLAB documentation", "Lists all available commands", "Debugs the command"],
        correct: 1,
        explanation: "'help Command' provides information about the specified command, displaying the command's description and usage directly in the Command Window."
      },
      {
        text: "What is the key difference between 'help' and 'lookfor' in MATLAB?",
        options: ["'help' is faster", "'help' searches for an exact function name match; 'lookfor' searches help summaries for a keyword — useful when you don't know the exact function name", "'lookfor' only works for built-in functions", "'help' requires internet access"],
        correct: 1,
        explanation: "'help' searches for an exact function name match, while 'lookfor' searches the quick summary information in each function for a match — useful when you know a keyword but not the exact function name."
      },
      {
        text: "What does 'ctrl-c' do in MATLAB?",
        options: ["Copies selected text", "Aborts a MATLAB computation that is running", "Clears the Command Window", "Creates a new script"],
        correct: 1,
        explanation: "Ctrl-C aborts a MATLAB computation — useful when a long computation is running and you want to stop it."
      },
      {
        text: "What does the ellipsis '...' do in MATLAB?",
        options: ["Inserts a comment", "Signals continuation — allows you to continue input on the next line", "Ends the program", "Creates a range"],
        correct: 1,
        explanation: "The ellipsis (...) signals continuation — it allows you to continue typing a long input on the next line when it is not possible to type the entire input on one line."
      },
      {
        text: "What is the result of evaluating 1/(2+3^2)+4/5*6/7 in MATLAB?",
        options: ["10.1857", "0.7766", "1.5", "0.5"],
        correct: 1,
        explanation: "Following BODMAS: 3^2=9, 2+9=11, 1/11≈0.0909; 4/5=0.8, 0.8*6=4.8, 4.8/7≈0.6857; total ≈ 0.7766."
      },
      {
        text: "What is the result of 1/2+3^2+4/5*6/7 in MATLAB?",
        options: ["0.7766", "10.1857", "5.0", "3.5"],
        correct: 1,
        explanation: "Without parentheses: 3^2=9; 1/2=0.5; 4/5*6/7≈0.6857; total = 0.5+9+0.6857 ≈ 10.1857 — demonstrating how parentheses dramatically change results."
      },
      {
        text: "What precision does MATLAB use for numerical calculations internally?",
        options: ["4 decimal places", "8 decimal places", "Double precision — 15 significant digits", "Single precision — 7 significant digits"],
        correct: 2,
        explanation: "MATLAB performs numerical calculations in double precision (15 significant digits) even when displaying fewer digits by default."
      },
      {
        text: "What is the MATLAB command to exit/quit the software?",
        options: ["exit", "close", "quit or File → Exit MATLAB", "stop"],
        correct: 2,
        explanation: "To end a MATLAB session, type 'quit' in the Command Window, or select File → Exit MATLAB in the desktop main menu."
      },
      {
        text: "Why should 'clear' be used at the start of each new independent calculation in MATLAB?",
        options: ["To make MATLAB run faster", "To prevent results of one problem from affecting the next, since workspace contents persist between commands", "To update MATLAB to the latest version", "To clear the screen display"],
        correct: 1,
        explanation: "Workspace contents persist between executions of separate commands. Using 'clear' prevents results from one problem from having unintended effects on the next calculation."
      },
      {
        text: "What does >> 4*x produce if x was previously set to 7?",
        options: ["ans = 7", "ans = 28", "ans = 11", "Error: x not defined"],
        correct: 1,
        explanation: "If x = 7, then 4*x = 4×7 = 28. MATLAB displays 'ans = 28.0000' since the result is not assigned to a named variable."
      },
      {
        text: "Which of the following demonstrates creating a variable in MATLAB?",
        options: ["let x = 5", "x = 1+2*3", "dim x as integer = 7", "var x := 7"],
        correct: 1,
        explanation: "x = 1+2*3 is the correct MATLAB syntax for creating a variable. MATLAB does not use 'let', 'dim', or 'var' keywords."
      },
      {
        text: "The 'format short eng' display option shows:",
        options: ["4 decimal places only", "Output in engineering format with at least 5 digits and a power that is a multiple of three", "Scientific notation only", "Fractions instead of decimals"],
        correct: 1,
        explanation: "'format short eng' displays output in engineering format that has at least 5 digits and a power that is a multiple of three, useful for working with engineering unit prefixes."
      },
      {
        text: "The 'format long eng' display option shows:",
        options: ["4 decimal places in engineering format", "16 significant digits with a power that is a multiple of three", "Only integer results", "Hexadecimal output"],
        correct: 1,
        explanation: "'format long eng' displays output in engineering format that has 16 significant digits and a power that is a multiple of three."
      },
      {
        text: "What does the '^' operator do in MATLAB?",
        options: ["Division", "Bitwise XOR", "Power or exponentiation", "Square root"],
        correct: 2,
        explanation: "The '^' operator performs power or exponentiation in MATLAB. For example, 3^2 = 9 and 2^10 = 1024."
      },
      {
        text: "In MATLAB, the '/' operator performs:",
        options: ["Integer division only", "Right division", "Matrix inverse", "Left division"],
        correct: 1,
        explanation: "The '/' operator in MATLAB performs (right) division, e.g., 2/3 gives 0.6667."
      },
      {
        text: "What happens when you type a MATLAB expression incorrectly?",
        options: ["MATLAB ignores the error and continues", "MATLAB automatically corrects the error", "MATLAB returns an error message", "MATLAB crashes"],
        correct: 2,
        explanation: "If an expression is entered incorrectly, MATLAB returns an error message. For example, missing the * sign causes: ??? Error: Unexpected MATLAB expression."
      },
      {
        text: "What information does the Current Folder/Directory window in MATLAB show?",
        options: ["A list of all MATLAB functions", "All the folders and repositories in the MATLAB workspace", "The current variable values", "A history of all commands"],
        correct: 1,
        explanation: "The Current Folder/Directory shows all the folders and repositories in the MATLAB workspace — it allows navigation to different directories."
      },
      {
        text: "To display a variable's value after suppressing output with a semicolon, you:",
        options: ["Must restart MATLAB", "Type the variable name alone at the prompt and press Enter", "Use the 'print' command", "Use the 'disp' command only"],
        correct: 1,
        explanation: "To display a suppressed variable's value, type its name alone at the prompt (e.g., >> x) and press Enter. MATLAB will then display its value."
      },
      {
        text: "Which statement about MATLAB's arithmetic operator precedence is CORRECT?",
        options: ["Addition is evaluated before multiplication", "Exponentiation is evaluated before multiplication", "Subtraction is evaluated before division", "Parentheses are evaluated last"],
        correct: 1,
        explanation: "Exponentiation (^) has higher precedence than multiplication and division, which have higher precedence than addition and subtraction. Parentheses always have highest priority."
      },
      {
        text: "Entering >> a=7; b=cos(a), c=cosh(a) in MATLAB will:",
        options: ["Display only a's value", "Display b and c but suppress a", "Cause an error because multiple statements are not allowed", "Display all three variables"],
        correct: 1,
        explanation: "The semicolon after a=7 suppresses its display. The commas allow b=cos(a) and c=cosh(a) to display their results. So b and c are displayed, but a is suppressed."
      },
      {
        text: "For operators of equal precedence in MATLAB, evaluation proceeds:",
        options: ["Right to left", "Left to right", "Randomly", "Outer to inner"],
        correct: 1,
        explanation: "For operators of equal precedence, MATLAB evaluates from left to right."
      },
      {
        text: "What does 'doc plot' do in MATLAB?",
        options: ["Runs a plot command", "Opens the online version of the help manual for the 'plot' function", "Deletes a plot", "Lists all plot types"],
        correct: 1,
        explanation: "The 'doc' function opens the online version of the help manual — 'doc plot' opens the detailed documentation for the plot command, very helpful for complex commands."
      },
      {
        text: "The MATLAB command 'help elfun' displays:",
        options: ["Help for element-wise functions only", "A full list of elementary functions", "Help for the 'elf' toolbox", "Nothing — it is not a valid command"],
        correct: 1,
        explanation: "Typing 'help elfun' in MATLAB calls up a full list of elementary functions — 'elfun' stands for elementary functions."
      },
      {
        text: "The command 'help specfun' in MATLAB displays:",
        options: ["Help for spectral analysis", "A full list of special functions", "Help for specification functions", "Special MATLAB features"],
        correct: 1,
        explanation: "Typing 'help specfun' calls up a full list of special functions in MATLAB — 'specfun' stands for special functions."
      },
      {
        text: "What is the result of x = 10; 5x in MATLAB?",
        options: ["ans = 50", "x = 50", "Error: Unexpected MATLAB expression", "5"],
        correct: 2,
        explanation: "The multiplication sign * must be explicitly written: 5*x. Writing 5x without the * causes: ??? Error: Unexpected MATLAB expression."
      },
      {
        text: "The statement >> t = 5; t = t+1 will result in t =",
        options: ["5", "6", "Error", "10"],
        correct: 1,
        explanation: "First t is set to 5 (semicolon suppresses display). Then t = t+1 = 5+1 = 6, and since there is no semicolon, MATLAB displays t = 6."
      }
    ]
  },

  /* ============================================================
     CHAPTER 3 — MATLAB Mathematical Functions & Plotting
  ============================================================ */
  {
    number: 3,
    title: "MATLAB Mathematical Functions & Plotting",
    questionLimit: 40,
    timeLimit: 20,
    summary: "MATLAB offers a rich set of predefined mathematical functions for technical computing. Elementary functions include trigonometric functions (sin, cos, tan, acos, asin, atan), exponential and logarithmic functions (exp, log, log10), and utility functions (abs, sqrt, round, ceil, floor, rem, max, min). Predefined constants include pi (π), i/j (imaginary unit, √−1), Inf (∞), and NaN. Basic 2D plotting uses the plot(x,y) command with vectors of x and y coordinates. Graphs can be labelled using xlabel, ylabel, and title. Multiple functions can be plotted on one graph using a single plot() call with multiple (x,y) pairs, different line styles, and a legend.",
    keyPoints: [
      "MATLAB offers many predefined mathematical functions — 'help elfun' and 'help specfun' call up full lists of elementary and special functions respectively",
      "Elementary trigonometric functions: cos(x) — Cosine; sin(x) — Sine; tan(x) — Tangent; acos(x) — Arc cosine; asin(x) — Arc sine; atan(x) — Arc tangent",
      "Exponential and logarithmic functions: exp(x) — Exponential (eˣ); log(x) — Natural logarithm (ln); log10(x) — Common logarithm (base 10); sqrt(x) — Square root",
      "Utility functions: abs(x) — Absolute value; sign(x) — Signum function; max(x) — Maximum value; min(x) — Minimum value; ceil(x) — Round towards +∞; floor(x) — Round towards −∞; round(x) — Round to nearest integer; rem(x) — Remainder after division; angle(x) — Phase angle; conj(x) — Complex conjugate",
      "Predefined constants: pi = 3.14159...; i or j = imaginary unit (√−1); Inf = infinity (∞); NaN = Not a Number; eps = floating-point relative accuracy",
      "Important note: only use built-in functions on the right-hand side of an expression — reassigning a value to a built-in function can create problems. Also: i and j are pre-assigned to √−1 but are often used as loop indices — use ii or jj instead to avoid confusion",
      "Example: y = e^(-a)*sin(x) + 10*sqrt(y), for a=5, x=2, y=8: >> a=5; x=2; y=8; >> y = exp(-a)*sin(x)+10*sqrt(y) gives y = 28.2904",
      "The difference between log(x) and log10(x): log(x) is the natural logarithm (base e), while log10(x) is the common logarithm (base 10) — a critical distinction in MATLAB",
      "Basic 2D plotting: the MATLAB command is plot(x,y) where x and y are vectors of equal length; x and y must be both row arrays or both column arrays of the same length",
      "plot(y) alone produces a graph of the elements of y versus their index; plot(x,y) produces a graph of y versus x",
      "Creating a simple sine plot: x = 0:pi/100:2*pi; y = sin(x); plot(x,y). The colon notation 0:pi/100:2*pi creates a vector that starts at 0, increments by π/100, and stops at 2π",
      "Adding labels and title: xlabel('label text'); ylabel('label text'); title('title text'). The character \\pi creates the symbol π in labels",
      "Line colors: by default MATLAB uses blue; specify other colors with a third argument: plot(x,y,'r') for red. Colors: k=Black, r=Red, b=Blue, g=Green, c=Cyan, m=Magenta, y=Yellow",
      "Line styles: '-' Solid (default), '--' Dashed, ':' Dotted, '-.' Dash-dot, 'none' No line",
      "Markers: '+' Plus sign, 'o' Circle, '*' Asterisk, '.' Point, 'x' Cross, 's' Square, 'd' Diamond",
      "Multiple datasets in one plot: plot(x,y1,'--',x,y2,'-',x,y3,':') plots three curves with different styles; use legend('label1','label2','label3') to identify them",
      "The style, color, and marker are specified together as a triplet: plot(x,y,'style_color_marker') e.g. plot(x,y,'r--o') for red dashed line with circle markers",
      "axis([xmin xmax ymin ymax]) sets the axis limits; e.g. axis([0 2*pi -3 3]) sets x from 0 to 2π and y from -3 to 3",
      "The colon operator in creating plot vectors: x = 0:step:end creates evenly spaced values; if no increment is specified, MATLAB automatically increments by 1; linspace(a,b,n) creates n evenly spaced points between a and b",
      "For multiple simultaneous plots of the same system (e.g. two lines of y+3x=4 and 2x+3y=7): define x as a range, express y1 and y2 in terms of x, then plot(x,y1,'--',x,y2,'-') with xlabel, ylabel, legend, and title commands"
    ],
    pdfUrl: "",
    cbtUrl: "",
    questions: [
      {
        text: "Which MATLAB function computes the natural logarithm (base e)?",
        options: ["log10(x)", "ln(x)", "log(x)", "loge(x)"],
        correct: 2,
        explanation: "log(x) in MATLAB computes the natural logarithm (base e). This is important to note as many other programming contexts use 'ln' for this operation."
      },
      {
        text: "Which MATLAB function computes the common logarithm (base 10)?",
        options: ["log(x)", "log10(x)", "log2(x)", "ln(x)"],
        correct: 1,
        explanation: "log10(x) computes the common (base 10) logarithm in MATLAB. Note that log(x) is the natural logarithm, not base 10."
      },
      {
        text: "What is the MATLAB predefined constant for the imaginary unit (√−1)?",
        options: ["sqrt(-1)", "im", "i or j", "imag"],
        correct: 2,
        explanation: "In MATLAB, i and j are both pre-assigned to √−1 (the imaginary unit). However, they are often used as loop indices, so ii or jj are recommended to avoid confusion."
      },
      {
        text: "What is the MATLAB predefined constant 'NaN'?",
        options: ["Negative and Number", "Not a Number — result of undefined operations like 0/0", "Nano (10⁻⁹)", "Natural Number"],
        correct: 1,
        explanation: "NaN stands for 'Not a Number' — it is returned by MATLAB for undefined mathematical operations such as 0/0 or Inf−Inf."
      },
      {
        text: "The MATLAB function ceil(x) rounds x towards:",
        options: ["−∞ (towards negative infinity)", "0 (towards zero)", "+∞ (towards positive infinity)", "The nearest integer"],
        correct: 2,
        explanation: "ceil(x) rounds towards +∞ (ceiling). For example, ceil(2.3) = 3 and ceil(-2.3) = -2."
      },
      {
        text: "The MATLAB function floor(x) rounds x towards:",
        options: ["+∞", "The nearest integer", "0", "−∞ (towards negative infinity)"],
        correct: 3,
        explanation: "floor(x) rounds towards −∞ (floor). For example, floor(2.7) = 2 and floor(-2.3) = -3."
      },
      {
        text: "What is the MATLAB command to compute e^10?",
        options: ["e^10", "e(10)", "exp(10)", "pow(e,10)"],
        correct: 2,
        explanation: "In MATLAB, the exponential function eˣ is computed using exp(x). So e^10 is computed as exp(10), which gives approximately 2.2026×10⁴."
      },
      {
        text: "Which MATLAB function computes the square root of x?",
        options: ["root(x)", "sqrt(x)", "sq(x)", "x^0.5 only"],
        correct: 1,
        explanation: "sqrt(x) is the MATLAB function for square root. Note that x^0.5 also works, but sqrt(x) is the dedicated built-in function."
      },
      {
        text: "The MATLAB function rem(x) computes:",
        options: ["The round of x", "The remainder after division", "The complex conjugate of x", "The absolute value of x"],
        correct: 1,
        explanation: "rem(x) (or more commonly rem(x,y)) computes the remainder after division — it is MATLAB's equivalent of the modulo operation."
      },
      {
        text: "What does sin(pi/4) return in MATLAB?",
        options: ["1.0", "0.5", "0.7071", "0.8660"],
        correct: 2,
        explanation: "sin(π/4) = sin(45°) = 1/√2 ≈ 0.7071. In MATLAB: >> sin(pi/4) gives ans = 0.7071."
      },
      {
        text: "The MATLAB command plot(x,y) requires that:",
        options: ["x and y must be scalars", "x and y are both row arrays or column arrays of the same length", "y must be longer than x", "x must always start from 0"],
        correct: 1,
        explanation: "For plot(x,y), x and y must be in identical array form — both row arrays or both column arrays of the same length."
      },
      {
        text: "What does the command x = 0:pi/100:2*pi create?",
        options: ["A scalar value", "A vector starting at 0, incrementing by π/100, stopping at 2π", "A matrix", "An error"],
        correct: 1,
        explanation: "This colon notation creates a row vector that starts at 0, takes steps of π/100, and stops when 2π is reached — resulting in 201 evenly spaced points."
      },
      {
        text: "If you omit the increment in the colon operator (e.g., x = 1:5), MATLAB increments by:",
        options: ["0.1", "0.5", "1", "The previous step size"],
        correct: 2,
        explanation: "If the increment is omitted, MATLAB automatically increments by 1. So x = 1:5 gives [1, 2, 3, 4, 5]."
      },
      {
        text: "Which command adds a title to a MATLAB plot?",
        options: ["heading('text')", "title('text')", "caption('text')", "label('text')"],
        correct: 1,
        explanation: "title('text') adds a title to the current MATLAB plot."
      },
      {
        text: "Which command adds a label to the x-axis of a MATLAB plot?",
        options: ["xaxis('label')", "xlabel('label')", "xlabel('label')", "xlab('label')"],
        correct: 2,
        explanation: "xlabel('label') adds a label to the x-axis of a MATLAB plot."
      },
      {
        text: "In a MATLAB plot command, which character code creates the π symbol in labels?",
        options: ["\\pi", "/pi", "{pi}", "#pi"],
        correct: 0,
        explanation: "The character \\pi in MATLAB plot labels and titles creates the symbol π."
      },
      {
        text: "How do you plot a red line in MATLAB?",
        options: ["plot(x,y,color='red')", "plot(x,y,'r')", "plot(x,y,red)", "setcolor(plot(x,y),'red')"],
        correct: 1,
        explanation: "The desired color is indicated by a third argument in single quotes: plot(x,y,'r') plots in red. Single quotes are required around the color specifier."
      },
      {
        text: "What does the '--' line style specifier produce in MATLAB plots?",
        options: ["Solid line", "Dashed line", "Dotted line", "Dash-dot line"],
        correct: 1,
        explanation: "'--' specifies a dashed line style in MATLAB plots."
      },
      {
        text: "What does the ':' line style specifier produce in MATLAB plots?",
        options: ["Dashed line", "Solid line", "Dotted line", "Dash-dot line"],
        correct: 2,
        explanation: "':' specifies a dotted line style in MATLAB plots."
      },
      {
        text: "How do you add a legend to a MATLAB plot with three curves?",
        options: ["legend = ['curve1','curve2','curve3']", "legend('label1','label2','label3')", "addlegend(1,2,3)", "plot.legend('a','b','c')"],
        correct: 1,
        explanation: "legend('label1','label2','label3') adds a legend to the plot, identifying each curve with its corresponding label."
      },
      {
        text: "The command axis([0 2*pi -3 3]) does what in MATLAB?",
        options: ["Creates a new axis object", "Sets the x-axis from 0 to 2π and y-axis from -3 to 3", "Rotates the plot by 3 degrees", "Adds axis labels"],
        correct: 1,
        explanation: "axis([xmin xmax ymin ymax]) sets the axis limits. axis([0 2*pi -3 3]) sets x from 0 to 2π and y from -3 to 3."
      },
      {
        text: "The command plot(x,y1,'--',x,y2,'-',x,y3,':') plots:",
        options: ["Three separate figures", "Three curves on one graph with dashed, solid, and dotted styles", "Only the first curve y1", "An error — you cannot use multiple styles in one plot call"],
        correct: 1,
        explanation: "Multiple (x,y) pairs in a single plot() call create multiple graphs. This plots y1 as dashed, y2 as solid, and y3 as dotted, all on one graph."
      },
      {
        text: "What is the default color of a plotted curve in MATLAB when no color is specified?",
        options: ["Red", "Green", "Black", "Blue"],
        correct: 3,
        explanation: "By default, MATLAB uses blue as the color of a single curve when no color is specified."
      },
      {
        text: "Which MATLAB function generates n linearly spaced points between a and b?",
        options: ["linrange(a,b,n)", "linspace(a,b,n)", "spacing(a,b,n)", "range(a,b,n)"],
        correct: 1,
        explanation: "linspace(a,b,n) generates a row vector of n linearly spaced points between and including a and b."
      },
      {
        text: "linspace(0,2*pi,101) creates:",
        options: ["100 points between 0 and 2π", "101 points linearly spaced between 0 and 2π, dividing the interval into 100 equal subintervals", "101 random points", "A matrix of size 101×101"],
        correct: 1,
        explanation: "linspace(0,2*pi,101) creates 101 evenly spaced points between 0 and 2π, dividing the interval into 100 equal subintervals."
      },
      {
        text: "What does plot(y) do in MATLAB (without an x argument)?",
        options: ["Produces an error", "Plots y versus the indices of the elements of y", "Plots y against zero", "Plots y against pi"],
        correct: 1,
        explanation: "plot(y) alone produces a piecewise linear graph of the elements of y versus the index of the elements of y (1, 2, 3, ...)."
      },
      {
        text: "The MATLAB function conj(x) computes:",
        options: ["The magnitude of x", "The complex conjugate of x", "The conjugate transpose", "The conjugate gradient"],
        correct: 1,
        explanation: "conj(x) computes the complex conjugate of x — for a complex number a+bi, its conjugate is a-bi."
      },
      {
        text: "The MATLAB function angle(x) computes:",
        options: ["The angle in a triangle", "The phase angle of a complex number", "The angle between two vectors", "The arc tangent of x"],
        correct: 1,
        explanation: "angle(x) computes the phase angle (argument) of a complex number x in radians."
      },
      {
        text: "Which MATLAB function is used for Arc tangent?",
        options: ["arctan(x)", "tan^-1(x)", "atan(x)", "atn(x)"],
        correct: 2,
        explanation: "atan(x) is the MATLAB function for Arc tangent. Similarly, acos(x) is Arc cosine and asin(x) is Arc sine."
      },
      {
        text: "To compute the value of y = e^(−a)*sin(x) + 10*sqrt(y) for a=5, x=2, y=8 in MATLAB, the correct code is:",
        options: ["y = e^(-5)*sin(2)+10*sqrt(8)", "y = exp(-a)*sin(x)+10*sqrt(y) after setting a=5; x=2; y=8;", "y = EXP(-a)*SIN(x)+10*SQRT(y)", "y = exp[-a]*sin[x]+10*sqrt[y]"],
        correct: 1,
        explanation: "After setting a=5; x=2; y=8; the expression is y = exp(-a)*sin(x)+10*sqrt(y), giving y = 28.2904."
      },
      {
        text: "Why should you avoid using i or j as loop indices in MATLAB?",
        options: ["They are reserved for matrix operations only", "They are pre-assigned to √−1 (imaginary unit) and using them as loop indices can cause confusion and unexpected behavior", "They are not valid variable names", "They cause MATLAB to crash"],
        correct: 1,
        explanation: "i and j are pre-assigned to √−1 in MATLAB. Using them as loop indices can overwrite this value and cause confusion. Using ii or jj instead is recommended."
      },
      {
        text: "Why should built-in functions only appear on the right-hand side of an expression?",
        options: ["MATLAB syntax requires it", "Reassigning a value to a built-in function name can create problems — the function would no longer work as expected", "Left-hand side expressions are always errors", "Built-in functions are read-only by design"],
        correct: 1,
        explanation: "Reassigning a value to a built-in function name (e.g., sin = 5) can create problems — 'sin' would then be a variable, not the function, causing errors when you try to use it."
      },
      {
        text: "Which of the following correctly plots the sine function on [0, 2π] in MATLAB?",
        options: ["x=0:pi/100:2*pi; y=sin(x); plot(x,y)", "plot(sin(0:2*pi))", "draw(sin,0,2*pi)", "plot(x,sin) for x in range(0,2*pi)"],
        correct: 0,
        explanation: "The correct sequence is: x=0:pi/100:2*pi; (create x vector) y=sin(x); (compute y values) plot(x,y) (plot the result)."
      },
      {
        text: "To add an x-axis label saying 'x = 0:2π' in a MATLAB plot, you type:",
        options: ["xlabel(x = 0:2pi)", "xlabel('x = 0:2\\pi')", "xLabel('x = 0:2pi')", "label_x('x=0:2pi')"],
        correct: 1,
        explanation: "xlabel('x = 0:2\\pi') adds the label with \\pi rendering as the π symbol. Single quotes are required for string arguments."
      },
      {
        text: "The 's' marker specifier in MATLAB plot produces:",
        options: ["Star markers", "Square markers", "Slash markers", "Scatter plot"],
        correct: 1,
        explanation: "'s' is the square marker specifier in MATLAB — it places a square at each data point."
      },
      {
        text: "The 'd' marker specifier in MATLAB plot produces:",
        options: ["Dot markers", "Double line", "Diamond markers", "Dash markers"],
        correct: 2,
        explanation: "'d' is the diamond marker specifier in MATLAB — it places a diamond symbol at each data point."
      },
      {
        text: "The 'k' color specifier in MATLAB plot produces:",
        options: ["Khaki color", "Blue", "Black", "Dark green"],
        correct: 2,
        explanation: "'k' represents black in MATLAB plot color specifiers. The mnemonic is 'k' for bla-k (since 'b' is already used for blue)."
      },
      {
        text: "The 'g' color specifier in MATLAB plot produces:",
        options: ["Grey", "Gold", "Green", "Gradient"],
        correct: 2,
        explanation: "'g' represents green in MATLAB plot color specifiers."
      },
      {
        text: "The 'c' color specifier in MATLAB plot produces:",
        options: ["Chocolate", "Coral", "Cyan", "Charcoal"],
        correct: 2,
        explanation: "'c' represents cyan in MATLAB plot color specifiers."
      },
      {
        text: "The 'm' color specifier in MATLAB plot produces:",
        options: ["Maroon", "Magenta", "Mint", "Mushroom"],
        correct: 1,
        explanation: "'m' represents magenta in MATLAB plot color specifiers."
      },
      {
        text: "What does eps represent in MATLAB?",
        options: ["Exponential precision symbol", "Floating-point relative accuracy (machine epsilon)", "End of program statement", "Ellipsis placeholder symbol"],
        correct: 1,
        explanation: "eps is the floating-point relative accuracy (machine epsilon) — it represents the smallest difference between two numbers that MATLAB can distinguish."
      },
      {
        text: "The sign(x) function in MATLAB returns:",
        options: ["The absolute value of x", "The signum function: +1 if x>0, -1 if x<0, 0 if x=0", "The square root of x", "The sine of x"],
        correct: 1,
        explanation: "sign(x) is the signum function — it returns +1 if x is positive, -1 if x is negative, and 0 if x equals zero."
      },
      {
        text: "To plot three cosine functions y1=2cos(x), y2=cos(x), y3=0.5cos(x) on the same graph with labels and legend, which approach is correct?",
        options: ["Create three separate plot() calls", "Use plot(x,y1,'--',x,y2,'-',x,y3,':') followed by xlabel, ylabel, legend, and title commands", "Sum all three and plot the result", "Use subplots only"],
        correct: 1,
        explanation: "Multiple (x,y) pairs in a single plot() call with style specifiers, followed by xlabel, ylabel, legend, and title, is the correct approach for plotting multiple functions on one graph."
      },
      {
        text: "What is the result of >> log(142) in MATLAB?",
        options: ["2.1523", "4.9558", "142", "5.5491"],
        correct: 1,
        explanation: "log(142) computes the natural logarithm of 142 ≈ 4.9558. Note that log10(142) ≈ 2.1523 — the two logarithm functions give different results."
      },
      {
        text: "What is the result of >> log10(142) in MATLAB?",
        options: ["4.9558", "2.1523", "1.4200", "142"],
        correct: 1,
        explanation: "log10(142) computes the base-10 logarithm of 142 ≈ 2.1523. This is different from log(142) which gives the natural logarithm ≈ 4.9558."
      },
      {
        text: "Which of the following would plot the graph of 2y+3x = 1/4 for x in {-5,-2,-1,0,3,7} in MATLAB?",
        options: ["x=[-5,-2,-1,0,3,7]; y=(1/4-3*x)/2; plot(x,y)", "plot(2y+3x=1/4)", "x=-5:7; plot(x, 1/4-3*x/2)", "draw(2y+3x,1/4)"],
        correct: 0,
        explanation: "Rearranging: y = (1/4 - 3x)/2. Set x as the vector, compute y, then plot(x,y). MATLAB code: x=[-5,-2,-1,0,3,7]; y=(1/4-3*x)/2; plot(x,y)."
      },
      {
        text: "What does ylabel('y function') do in a MATLAB plot?",
        options: ["Sets the y-axis scale", "Adds the text 'y function' as a label on the y-axis", "Creates a second y-axis", "Colors the y-axis"],
        correct: 1,
        explanation: "ylabel('y function') adds the text 'y function' as a label on the y-axis of the current MATLAB plot."
      }
    ]
  },

  /* ============================================================
     CHAPTER 4 — Vectors & Matrix Generation in MATLAB
  ============================================================ */
  {
    number: 4,
    title: "Vectors & Matrix Generation in MATLAB",
    questionLimit: 40,
    timeLimit: 20,
    summary: "Matrices and vectors are the fundamental building blocks of MATLAB. A matrix is a two-dimensional array with m rows and n columns. A row vector is a 1×n matrix; a column vector is an m×1 matrix. Vectors are entered with square brackets, rows separated by spaces or commas, columns by semicolons. MATLAB provides powerful tools for creating, indexing, slicing, transposing, concatenating, and manipulating matrices. Special matrix generators include zeros(), ones(), eye() (identity), rand(), and special matrices like magic, hilb, and pascal.",
    keyPoints: [
      "A matrix is a two-dimensional array consisting of m rows and n columns; a column vector is an m×1 array (n=1); a row vector is a 1×n array (m=1)",
      "To enter a row vector: v = [1 4 7 10 13] — elements separated by spaces or commas; to enter a column vector: w = [1;4;7;10;13] — elements separated by semicolons",
      "A row vector is converted to a column vector using the transpose operator (apostrophe or single quote '): w = v' transposes v",
      "Vector indexing: v(1) is first element; v(2) is second; v(end) is last element; v(1:3) accesses first three elements; v(3:end) accesses from third to last",
      "v(:) produces a column vector from v; v(1:end) produces a row vector from v",
      "To enter matrix A: A = [1 2 3; 4 5 6; 7 8 9] — rows separated by semicolons, elements within a row separated by spaces or commas",
      "Matrix indexing: A(i,j) refers to the element in row i, column j; A(2,1) is the element in row 2, column 1; zero or negative subscripts are not supported",
      "Correcting a matrix entry: A(3,3) = 0 replaces the element at row 3, column 3 with 0",
      "Colon operator in matrices: A(2,:) gives all elements in row 2; A(:,2:3) gives all rows but only columns 2 and 3; A(p:q,r:s) gives submatrix from rows p to q and columns r to s",
      "A(:) creates a column vector of all elements of A; A(m:n,k:l) specifies rows m to n and columns k to l",
      "To delete a row or column of a matrix, set it to an empty vector []: A(:,2)=[] deletes column 2; A(3,:)=[] deletes row 3",
      "Creating a sub-matrix: B = A([2 3],[1 2]) extracts rows 2 and 3, columns 1 and 2; C = A([2 1 3],:) reorders rows",
      "Transpose operation: A' flips a matrix about its main diagonal; it interchanges rows and columns — an m×n matrix becomes an n×m matrix",
      "Matrix size: size(A) returns [m n] for an m×n matrix; [m,n]=size(A) assigns separately to m and n; size alone gives both dimensions",
      "Continuation with ellipsis: use ... at end of a line to continue on the next line",
      "Matrix concatenation: B = [A 10*A; -A eye(3)] creates a block matrix from sub-matrices — dimensions must be compatible",
      "Elementary matrix generators: eye(m,n) — identity-like matrix; eye(n) — n×n identity; zeros(m,n) — matrix of zeros; ones(m,n) — matrix of ones; diag(A) — diagonal of A; rand(m,n) — random matrix",
      "Special matrices: hilb (Hilbert matrix), invhilb (Inverse Hilbert), magic (Magic square — rows, columns, diagonals sum equally), pascal (Pascal matrix), toeplitz (Toeplitz matrix), vander (Vandermonde matrix), wilkinson (Wilkinson's eigenvalue test matrix)",
      "A(end,:) picks out the last row of A; A(:,end) picks out the last column; the keyword 'end' denotes the last index in the specified dimension",
      "To restore a deleted row: A = [A(1,:);A(2,:);[7 8 0]] concatenates existing rows with a new row",
      "Colon operator standalone v(:) vs range v(1:end): v(:) always gives a column vector; v(1:end) gives a row vector",
      "randn generates matrices of pseudo-random numbers drawn from a standard normal distribution, using the same syntax as eye — useful alongside rand for statistical simulations"
    ],
    pdfUrl: "",
    cbtUrl: "",
    questions: [
      {
        text: "What is a matrix in MATLAB?",
        options: ["A list of function names", "A two-dimensional array consisting of m rows and n columns", "A single numerical value", "A type of plot"],
        correct: 1,
        explanation: "A matrix is a two-dimensional array consisting of m rows and n columns. Special cases are column vectors (n=1) and row vectors (m=1)."
      },
      {
        text: "How do you enter a row vector v = [1, 4, 7, 10, 13] in MATLAB?",
        options: ["v = {1, 4, 7, 10, 13}", "v = (1 4 7 10 13)", "v = [1 4 7 10 13]", "v = <1, 4, 7, 10, 13>"],
        correct: 2,
        explanation: "Row vector elements are enclosed in square brackets and separated by spaces or commas: v = [1 4 7 10 13]."
      },
      {
        text: "How do you create a column vector in MATLAB?",
        options: ["Using commas between elements: w = [1, 4, 7]", "Using semicolons between elements: w = [1;4;7]", "Using colons: w = [1:4:7]", "Using parentheses: w = (1;4;7)"],
        correct: 1,
        explanation: "Column vectors use semicolons to separate components: w = [1;4;7;10;13]. The semicolon tells MATLAB to go to the next row."
      },
      {
        text: "How do you transpose a row vector to a column vector in MATLAB?",
        options: ["Using the T() function", "Using the transpose() command only", "Using the apostrophe or single quote: w = v'", "Using the flip() command"],
        correct: 2,
        explanation: "The transpose operation is denoted by an apostrophe or single quote ('): w = v' converts the row vector v to a column vector."
      },
      {
        text: "How do you access the first three elements of vector v in MATLAB?",
        options: ["v(1,3)", "v{1:3}", "v(1:3)", "v[1:3]"],
        correct: 2,
        explanation: "v(1:3) uses MATLAB's colon notation to access elements 1 through 3 of vector v."
      },
      {
        text: "In MATLAB, what does v(end) refer to?",
        options: ["An error — 'end' is not valid inside indexing", "The last element of vector v", "The length of vector v", "v times the end variable"],
        correct: 1,
        explanation: "The keyword 'end' in indexing denotes the last index. So v(end) accesses the last element of vector v."
      },
      {
        text: "How do you enter the matrix A = [1 2 3; 4 5 6; 7 8 9] in MATLAB?",
        options: ["A = {1,2,3},{4,5,6},{7,8,9}", "A = [1 2 3 | 4 5 6 | 7 8 9]", "A = [1 2 3; 4 5 6; 7 8 9]", "A = [[1,2,3],[4,5,6],[7,8,9]]"],
        correct: 2,
        explanation: "To enter a matrix in MATLAB: use square brackets, separate row elements with spaces or commas, and separate rows with semicolons."
      },
      {
        text: "What does A(2,1) refer to in a matrix A?",
        options: ["First row, second column", "Second row, first column", "All elements in column 1", "The 2×1 submatrix"],
        correct: 1,
        explanation: "A(i,j) refers to the element in row i, column j. A(2,1) is the element in the second row and first column."
      },
      {
        text: "In the matrix A = [1 2 3; 4 5 6; 7 8 9], what is A(2,1)?",
        options: ["1", "4", "2", "7"],
        correct: 1,
        explanation: "A(2,1) is the element in row 2, column 1. In A = [1 2 3; 4 5 6; 7 8 9], the second row starts with 4."
      },
      {
        text: "What does A(2,:) return in MATLAB for a 3×3 matrix?",
        options: ["The element at row 2", "All elements in column 2", "All elements in row 2", "A 2×3 submatrix"],
        correct: 2,
        explanation: "A(2,:) returns all elements in row 2 — the colon (:) alone as a column specifier covers all columns."
      },
      {
        text: "What does A(:,2:3) return?",
        options: ["Rows 2 and 3 of A", "Columns 2 and 3 of A (all rows)", "The element at row 2, column 3", "A scalar value"],
        correct: 1,
        explanation: "A(:,2:3) returns all rows but only columns 2 and 3 — this is a sub-matrix with the last two columns of A (for a 3-column matrix)."
      },
      {
        text: "How do you delete column 2 from matrix A in MATLAB?",
        options: ["A(:,2) = null", "delete A(:,2)", "A(:,2) = []", "remove(A,2)"],
        correct: 2,
        explanation: "Setting a row or column to the null/empty vector [] deletes it: A(:,2) = [] deletes column 2 from matrix A."
      },
      {
        text: "What does A(3,:) = [] do to matrix A?",
        options: ["Sets row 3 to all zeros", "Deletes row 3 from matrix A", "Inserts an empty row at position 3", "Causes an error"],
        correct: 1,
        explanation: "A(3,:) = [] deletes row 3 from matrix A by setting it to the empty vector."
      },
      {
        text: "The command B = A([2 3],[1 2]) extracts:",
        options: ["Rows 2 and 3 and all columns", "Rows 2 and 3, columns 1 and 2 as a submatrix", "Rows 1 and 2, columns 2 and 3", "Elements A(2) and A(3)"],
        correct: 1,
        explanation: "B = A([2 3],[1 2]) creates a submatrix consisting of rows 2 and 3 and columns 1 and 2 of matrix A."
      },
      {
        text: "What does C = A([2 1 3],:) do to matrix A?",
        options: ["Extracts only rows 2, 1, and 3 as separate vectors", "Creates a new matrix where rows are reordered: row 2 first, then row 1, then row 3", "Deletes row 3", "Concatenates rows 2 and 1"],
        correct: 1,
        explanation: "C = A([2 1 3],:) reorders the rows of A — row 2 becomes first, row 1 becomes second, row 3 stays third."
      },
      {
        text: "What does size(A) return for a 3×4 matrix A?",
        options: ["3", "4", "[3 4]", "12"],
        correct: 2,
        explanation: "size(A) returns a row vector [m n] where m is the number of rows and n the number of columns. For a 3×4 matrix: [3 4]."
      },
      {
        text: "How do you generate a 3×3 identity matrix in MATLAB?",
        options: ["identity(3)", "I = eye(3)", "I = ones(3)", "I = diag(3)"],
        correct: 1,
        explanation: "eye(n) returns an n×n square identity matrix — all diagonal elements are 1, all off-diagonal elements are 0. eye(3) creates a 3×3 identity matrix."
      },
      {
        text: "What does zeros(m,n) return in MATLAB?",
        options: ["A matrix of ones", "An m×n identity matrix", "An m×n matrix of all zeros", "A random m×n matrix"],
        correct: 2,
        explanation: "zeros(m,n) returns an m×n matrix where all elements are 0."
      },
      {
        text: "What does ones(m,n) return in MATLAB?",
        options: ["An m×n matrix of all ones", "An identity matrix", "A random matrix", "An m×n matrix of zeros"],
        correct: 0,
        explanation: "ones(m,n) returns an m×n matrix where all elements are 1."
      },
      {
        text: "What does rand(m,n) return in MATLAB?",
        options: ["A matrix of integer random numbers", "An m×n matrix of uniformly distributed random numbers between 0 and 1", "A random permutation matrix", "A matrix of normally distributed random numbers"],
        correct: 1,
        explanation: "rand(m,n) returns an m×n matrix of pseudo-random numbers drawn from a uniform distribution between 0 and 1."
      },
      {
        text: "What does diag(A) do for a matrix A?",
        options: ["Returns the diagonal elements of A as a vector", "Creates a diagonal matrix from scratch", "Transposes A", "Finds the eigenvalues of A"],
        correct: 0,
        explanation: "diag(A) extracts the diagonal elements of matrix A and returns them as a vector."
      },
      {
        text: "What is the MATLAB command to create a 2×3 matrix of all zeros?",
        options: ["zeros(3,2)", "zero(2,3)", "zeros(2,3)", "null(2,3)"],
        correct: 2,
        explanation: "zeros(m,n) creates an m×n matrix of zeros. For a 2×3 matrix: zeros(2,3)."
      },
      {
        text: "The command A(:) converts a matrix A to:",
        options: ["A row vector", "A column vector containing all elements of A", "A diagonal matrix", "A square matrix"],
        correct: 1,
        explanation: "A(:) creates a column vector version of matrix A by stacking all columns of A on top of each other."
      },
      {
        text: "The transpose operation A' does what to an m×n matrix A?",
        options: ["Returns A unchanged", "Returns an n×m matrix — rows and columns of A are interchanged", "Multiplies each element by -1", "Computes the matrix inverse"],
        correct: 1,
        explanation: "A' flips A about its main diagonal and interchanges rows and columns — an m×n matrix becomes an n×m matrix (denoted Aᵀ in linear algebra)."
      },
      {
        text: "What does x = 0:0.1:5 create in MATLAB?",
        options: ["A single value", "A column vector from 0 to 5 in steps of 0.1", "A row vector of 51 elements from 0 to 5 in steps of 0.1", "A matrix with elements 0, 0.1, and 5"],
        correct: 2,
        explanation: "x = 0:0.1:5 creates a row vector starting at 0, incrementing by 0.1, and ending at 5 — this gives 51 elements."
      },
      {
        text: "Which MATLAB special matrix has the property that rows, columns, and main diagonals all sum to the same value?",
        options: ["hilb", "magic", "pascal", "toeplitz"],
        correct: 1,
        explanation: "magic(n) creates a magic square where every row, column, and main diagonal sums to the same value."
      },
      {
        text: "The matrix concatenation B = [A 10*A; -A eye(3)] creates what?",
        options: ["An error — matrices cannot be concatenated this way", "A block matrix combining A, 10*A, -A, and a 3×3 identity matrix", "A 3×3 matrix only", "The product of A and the identity matrix"],
        correct: 1,
        explanation: "B = [A 10*A; -A eye(3)] creates a 6×6 block matrix — the top half contains [A | 10*A] and the bottom half contains [-A | I₃]."
      },
      {
        text: "What does the command [m,n] = size(A) do?",
        options: ["Creates a matrix of size m×n", "Assigns the number of rows to m and number of columns to n separately", "Computes the product m*n", "Finds the maximum element"],
        correct: 1,
        explanation: "[m,n] = size(A) assigns the number of rows to m and the number of columns to n, providing separate access to each dimension."
      },
      {
        text: "What does A(2:3,2:3) return for A = [1 2 3; 4 5 6; 7 8 9]?",
        options: ["[2 3; 8 9]", "[5 6; 8 9]", "[4 5; 7 8]", "[1 2; 4 5]"],
        correct: 1,
        explanation: "A(2:3,2:3) extracts the submatrix from rows 2-3 and columns 2-3: [[5 6]; [8 9]]."
      },
      {
        text: "What does A(end:-1:1,end) return for A = [1 2 3; 4 5 6; 7 8 9]?",
        options: ["[1; 4; 7]", "[3; 6; 9]", "[9; 6; 3]", "[7; 8; 9]"],
        correct: 2,
        explanation: "A(end:-1:1,end) selects the last column (column 3) from the last row to the first row: A(3,3)=9, A(2,3)=6, A(1,3)=3 → [9; 6; 3]."
      },
      {
        text: "Which MATLAB special matrix is associated with eigenvalue problems?",
        options: ["magic", "pascal", "wilkinson", "vander"],
        correct: 2,
        explanation: "wilkinson is Wilkinson's eigenvalue test matrix — it has interesting properties useful for testing eigenvalue algorithms."
      },
      {
        text: "The hilb function creates:",
        options: ["A Hilbert transform matrix", "The Hilbert matrix — a square matrix with elements H(i,j) = 1/(i+j-1)", "A random Hermitian matrix", "A matrix of Hilbert-space vectors"],
        correct: 1,
        explanation: "hilb creates the Hilbert matrix, where each element is H(i,j) = 1/(i+j-1). It is a classic example of an ill-conditioned matrix."
      },
      {
        text: "To create a 4×4 matrix of ones in MATLAB, you type:",
        options: ["ones(4)", "ones(4,4)", "Both A and B are correct", "onesmatrix(4)"],
        correct: 2,
        explanation: "Both ones(4) and ones(4,4) create a 4×4 matrix of all ones — ones(n) is equivalent to ones(n,n) for square matrices."
      },
      {
        text: "The command A([1 3],[2 3]) for A = [1 2 3; 4 5 6; 7 8 9] returns:",
        options: ["[2 3; 8 9]", "[1 3; 7 9]", "[4 5; 7 8]", "[5 6; 8 9]"],
        correct: 0,
        explanation: "A([1 3],[2 3]) extracts rows 1 and 3, columns 2 and 3: row 1 = [2 3], row 3 = [8 9] → [[2 3]; [8 9]]."
      },
      {
        text: "The command x = v(1:2:end) with v = [1 4 7 10 13] returns:",
        options: ["[1 4 7 10 13]", "[1 7 13]", "[4 10]", "[1 4]"],
        correct: 1,
        explanation: "v(1:2:end) accesses every other element starting from index 1: v(1)=1, v(3)=7, v(5)=13 → [1 7 13]."
      },
      {
        text: "What does eye(m,n) return?",
        options: ["An m×n matrix with ones only on the main diagonal", "An identity matrix of the larger dimension", "An m×n matrix of all ones", "An m×n random matrix"],
        correct: 0,
        explanation: "eye(m,n) returns an m×n matrix with 1s on the main diagonal and 0s elsewhere — it extends the concept of a square identity matrix to rectangular dimensions."
      },
      {
        text: "For a 3×3 matrix A, A(end,:) selects:",
        options: ["The first row", "The last column", "The last row", "The middle row"],
        correct: 2,
        explanation: "A(end,:) picks out the last row of A — 'end' denotes the last index in the specified dimension (row dimension here)."
      },
      {
        text: "How do you create a block matrix D from C=[1 2;3 4] with a 2×2 zero block and two 2×2 identity blocks in MATLAB?",
        options: ["D = [C zeros(2); ones(2) eye(2)]", "D = block(C,0,1,1)", "D = concat(C,zeros,eye)", "D = [C|zeros|ones|eye]"],
        correct: 0,
        explanation: "D = [C zeros(2); ones(2) eye(2)] creates a 4×4 block matrix with C in the top-left, zeros in the top-right, ones in the bottom-left, and the identity in the bottom-right."
      },
      {
        text: "A row vector is a matrix with dimensions:",
        options: ["m×m (square)", "m×1 (column vector)", "1×n (single row)", "n×n (any size)"],
        correct: 2,
        explanation: "A row vector is a matrix with dimension 1×n — it has exactly one row and n columns."
      },
      {
        text: "What is MATLAB's notation for the submatrix comprising the intersection of rows p to q and columns r to s?",
        options: ["A[p:q,r:s]", "A{p:q,r:s}", "A(p:q,r:s)", "A(p-q,r-s)"],
        correct: 2,
        explanation: "A(p:q,r:s) specifies the submatrix at the intersection of rows p through q and columns r through s."
      },
      {
        text: "What does randn generate in MATLAB?",
        options: ["Random integers only", "Pseudo-random numbers from a standard normal (Gaussian) distribution", "Random binary values", "Randomly spaced linspace values"],
        correct: 1,
        explanation: "randn generates matrices of pseudo-random numbers drawn from a standard normal (Gaussian) distribution — distinct from rand which uses a uniform distribution."
      },
      {
        text: "To create a 1×8 row vector of consecutive integers from 1 to 8 in MATLAB, you type:",
        options: ["v = [1:8]", "v = 1:8", "v = linspace(1,8,8)", "All of the above are valid"],
        correct: 3,
        explanation: "All three notations create the same 1×8 row vector [1 2 3 4 5 6 7 8] — v=1:8, v=[1:8], and linspace(1,8,8) are all valid."
      },
      {
        text: "What does v(3:end) return for v = [1 4 7 10 13]?",
        options: ["[1 4]", "[7 10 13]", "[7]", "[10 13]"],
        correct: 1,
        explanation: "v(3:end) accesses all elements from the third through the last: v(3)=7, v(4)=10, v(5)=13 → [7 10 13]."
      },
      {
        text: "If A is 3×3 and you type A(:,2:3), you get:",
        options: ["All columns of A", "Rows 2 and 3 of A", "All rows, columns 2 and 3 only", "A 2×3 matrix error"],
        correct: 2,
        explanation: "A(:,2:3) selects all rows (:) and columns 2 through 3 — for a 3×3 matrix, this gives a 3×2 submatrix of the last two columns."
      },
      {
        text: "The pascal matrix created by MATLAB's pascal(n) function contains:",
        options: ["Random Pascal numbers", "Pascal's triangle elements arranged in a symmetric matrix", "The eigenvalues of the identity matrix", "Prime numbers in Pascal's arrangement"],
        correct: 1,
        explanation: "pascal(n) creates a matrix whose elements are based on Pascal's triangle — it has interesting mathematical properties and positive integer entries."
      }
    ]
  },

  /* ============================================================
     CHAPTER 5 — Array Operations & Solving Linear Equations
  ============================================================ */
  {
    number: 5,
    title: "Array Operations & Solving Linear Equations",
    questionLimit: 40,
    timeLimit: 20,
    summary: "MATLAB supports two types of arithmetic operations: matrix operations and array (element-wise) operations. The period (.) before an operator distinguishes array operations from matrix operations — for example, .* for element-wise multiplication vs * for matrix multiplication. Array operations apply the operation element-by-element. Solving systems of linear equations Ax = b is a central MATLAB application — the solution is x = A⁻¹b, computed either via the matrix inverse (inv) or more efficiently using the backslash (\\) operator (Gaussian elimination). MATLAB also provides matrix analysis functions like det, rank, eig, norm, and lu.",
    keyPoints: [
      "MATLAB has two types of arithmetic operations: matrix arithmetic operations and array arithmetic operations",
      "Matrix operations: A+B and B+A are valid if A and B are the same size; A*B is valid if A's number of columns equals B's number of rows; A^2 is valid if A is square and equals A*A; α*A or A*α multiplies each element of A by the scalar α",
      "Array operations use the period character (.) to distinguish from matrix operations: .* element-by-element multiplication; ./ element-by-element division (right); .^ element-by-element exponentiation; .\\ element-by-element left division",
      "Since matrix and array operations are the same for addition (+) and subtraction (−), the character pairs (.+) and (.-) are not used",
      "C = A.*B produces a matrix C where each element cᵢⱼ = aᵢⱼ × bᵢⱼ — element-wise multiplication, not matrix multiplication",
      "For vectors U and V: U.*V produces [u₁v₁ u₂v₂ ... uₙvₙ]; U./V produces [u₁/v₁ u₂/v₂ ... uₙ/vₙ]; U.^V produces [u₁^v₁ u₂^v₂ ... uₙ^vₙ]",
      "A.^2 squares each element of A individually; for scalar power use 10^2; matrix power A^2 = A*A (only for square matrices)",
      "Solving linear equations: the system Ax = b (where A is n×n, b is n×1, x is n×1) has solution x = A⁻¹b when A is invertible",
      "Method 1 — Matrix inverse: x = inv(A)*b; inv(A) computes A⁻¹ directly",
      "Method 2 — Backslash operator: x = A\\b; this uses Gaussian elimination — it is numerically more reliable and computationally more efficient than computing the inverse explicitly",
      "The backslash (\\) operator is preferred for solving linear systems because it is numerically stable (uses Gaussian elimination) and faster — the matrix inverse method is less efficient for large systems",
      "Example: for A=[1 2 3;4 5 6;7 8 0] and b=[1;1;1], x = inv(A)*b or x = A\\b both give x = [-1.0000; 1.0000; -0.0000]",
      "Matrix inverse: inv(A) computes A⁻¹; for a 3×3 matrix, the manual calculation gives specific fraction results; in MATLAB: >> A = [1 2 3; 4 5 6; 7 8 0]; >> inv(A) gives the numerical result",
      "Matrix determinant: det(A) computes the determinant; for A=[1 2 3;4 5 6;7 8 0], det(A) = 27; a matrix is invertible if and only if its determinant is non-zero",
      "Summary of matrix vs array operations: Addition(+/+), Subtraction(-/-), Multiplication(*/.*), Division(/./ ), Left Division(\\.\\), Exponentiation(^/.^)",
      "Matrix functions available in MATLAB: det (Determinant), diag (Diagonal matrices), eig (Eigenvalues and eigenvectors), inv (Matrix inverse), norm (Matrix and vector norms), rank (Number of linearly independent rows or columns)",
      "For systems of equations in the form Ax=b: A is the coefficient matrix, x is the variable vector, b is the constant vector (RHS values); the solution x = A⁻¹b or x = A\\b gives the values of the variables",
      "Solving algebraic equations with roots(): for polynomial p (e.g. x²+3x-3=0 → p=[1 3 -3]), roots(p) gives all roots including complex ones",
      "Application example — Kirchhoff's Law: I₁+2I₂+3I₃=14, 2I₁-I₂+I₃=3, 3I₁+I₂-0I₃=2 → A=[1 2 3;2 -1 1;3 1 -1], b=[14;3;2], x=inv(A)*b gives I₁=1, I₂=2, I₃=3",
      "For 2×2 system: 2x+y=3, 2x+3y=7 → A=[1 2;3 4], b=[4;5] (rewritten form), x=inv(A)*b or x=A\\b",
      "The linsolve function (added in later MATLAB versions) solves Ax=b with user's choice of algorithm, in addition to the backslash x=A\\b which uses a default algorithm"
    ],
    pdfUrl: "",
    cbtUrl: "",
    questions: [
      {
        text: "What is the key difference between matrix multiplication (*) and array multiplication (.*) in MATLAB?",
        options: ["They are the same operation", "* performs standard matrix multiplication (row×column); .* performs element-by-element multiplication", ".* is faster than *", "* is for scalars only; .* is for matrices"],
        correct: 1,
        explanation: "* performs standard matrix multiplication (the inner product of rows and columns); .* performs element-by-element multiplication where each element cᵢⱼ = aᵢⱼ × bᵢⱼ."
      },
      {
        text: "What does the period (.) before an arithmetic operator signify in MATLAB?",
        options: ["A decimal point only", "Element-wise (array) operation as opposed to matrix operation", "An error indicator", "A comment character"],
        correct: 1,
        explanation: "The period (.) distinguishes array operations from matrix operations. .* means element-by-element multiplication, ./ means element-by-element division, etc."
      },
      {
        text: "If A and B are two 3×3 matrices, what does C = A.*B compute?",
        options: ["Standard matrix product (dot product of rows and columns)", "Element-by-element product — each element C(i,j) = A(i,j) × B(i,j)", "The outer product of A and B", "The transpose of A times B"],
        correct: 1,
        explanation: "C = A.*B produces a matrix of the same size where each element Cᵢⱼ = Aᵢⱼ × Bᵢⱼ — element-by-element multiplication."
      },
      {
        text: "For which operators are matrix operations and array operations the same in MATLAB?",
        options: ["Multiplication and Division", "Addition (+) and Subtraction (−)", "Power and Division", "All operators"],
        correct: 1,
        explanation: "Matrix and array operations are the same for addition (+) and subtraction (−). That is why .+ and .- are not used — there is no distinction needed for these operators."
      },
      {
        text: "What does A.^2 compute in MATLAB?",
        options: ["Matrix A squared (A*A)", "The square root of each element", "Each element of A raised to the power 2 (element-wise)", "The determinant squared"],
        correct: 2,
        explanation: "A.^2 is an array operation — it squares each individual element of A. This is different from A^2 which computes the matrix product A*A."
      },
      {
        text: "When is A*B valid in MATLAB (matrix multiplication)?",
        options: ["When A and B have the same dimensions", "When A's number of columns equals B's number of rows", "When A and B are both square", "When A equals B"],
        correct: 1,
        explanation: "Matrix multiplication A*B is valid when the number of columns of A equals the number of rows of B — standard matrix multiplication rule."
      },
      {
        text: "When is A^2 valid in MATLAB?",
        options: ["For any matrix A", "Only when A is a 2×2 matrix", "Only when A is square (m=n), since it equals A*A", "Only when A has positive elements"],
        correct: 2,
        explanation: "A^2 (matrix power) is valid only when A is square, since it represents A*A — matrix multiplication requires inner dimensions to match."
      },
      {
        text: "For U = [2 4 6] and V = [1 2 3], what does U.*V return?",
        options: ["[2 8 18]", "[3 6 9]", "[2 6 9]", "A scalar (dot product)"],
        correct: 0,
        explanation: "U.*V performs element-by-element multiplication: [2×1, 4×2, 6×3] = [2, 8, 18]."
      },
      {
        text: "For U = [4 9 16] and V = [2 3 4], what does U./V return?",
        options: ["[8 27 64]", "[2 3 4]", "[2 3 4] — element-wise division", "[6 12 20]"],
        correct: 2,
        explanation: "U./V performs element-by-element division: [4/2, 9/3, 16/4] = [2, 3, 4]."
      },
      {
        text: "In the equation Ax = b, what does each variable represent?",
        options: ["A is the answer, x is the matrix, b is the right-hand side", "A is the coefficient matrix (n×n), x is the unknown column vector (n×1), b is the given column vector (n×1)", "A is a scalar, x is a vector, b is a matrix", "A is the determinant, x is the inverse, b is the product"],
        correct: 1,
        explanation: "In the system Ax = b: A is the coefficient matrix (square, n×n), x is the unknown column vector of n components, and b is the given column vector of n components."
      },
      {
        text: "What is the solution to Ax = b in terms of matrix algebra?",
        options: ["x = A*b", "x = b/A", "x = A⁻¹b", "x = A − b"],
        correct: 2,
        explanation: "The solution to Ax = b is x = A⁻¹b, where A⁻¹ is the inverse of A — assuming A is invertible (non-singular)."
      },
      {
        text: "Which MATLAB command computes the solution using the matrix inverse?",
        options: ["x = A/b", "x = inv(A)*b", "x = b*inv(A)", "x = solve(A,b)"],
        correct: 1,
        explanation: "x = inv(A)*b computes the solution by first finding the matrix inverse inv(A), then multiplying it by b."
      },
      {
        text: "Which MATLAB command uses the backslash operator to solve Ax = b?",
        options: ["x = b\\A", "x = A/b", "x = A\\b", "x = b/A"],
        correct: 2,
        explanation: "x = A\\b uses the backslash operator — MATLAB's most efficient method for solving linear systems, using Gaussian elimination numerically."
      },
      {
        text: "Why is the backslash operator (A\\b) preferred over inv(A)*b for solving linear systems?",
        options: ["It gives a different (better) answer", "It is numerically more reliable (uses Gaussian elimination) and computationally more efficient", "inv(A)*b doesn't work for large systems", "The backslash always gives integer answers"],
        correct: 1,
        explanation: "The backslash operator uses a well-known process of Gaussian elimination — it is numerically more reliable and computationally more efficient than computing the matrix inverse explicitly."
      },
      {
        text: "For A = [1 2 3; 4 5 6; 7 8 0] and b = [1; 1; 1], what is x = A\\b?",
        options: ["x = [1; 2; 3]", "x = [-1.0000; 1.0000; -0.0000]", "x = [0; 0; 0]", "Error — A is singular"],
        correct: 1,
        explanation: "For A = [1 2 3; 4 5 6; 7 8 0] and b = [1; 1; 1], both inv(A)*b and A\\b give x = [-1.0000; 1.0000; -0.0000]."
      },
      {
        text: "What does det(A) compute in MATLAB?",
        options: ["The determinant of matrix A", "The diagonal elements of A", "The eigenvalues of A", "The trace of A"],
        correct: 0,
        explanation: "det(A) computes the determinant of matrix A — a scalar value that is non-zero if and only if A is invertible."
      },
      {
        text: "For A = [1 2 3; 4 5 6; 7 8 0], what is det(A)?",
        options: ["0", "9", "27", "−27"],
        correct: 2,
        explanation: "For A = [1 2 3; 4 5 6; 7 8 0], det(A) = 27. Since det(A) ≠ 0, the matrix is invertible."
      },
      {
        text: "What does eig(A) compute in MATLAB?",
        options: ["The element-wise inverse of A", "The eigenvalues and eigenvectors of matrix A", "The 'eigen' special matrix", "The largest element of A"],
        correct: 1,
        explanation: "eig(A) computes the eigenvalues and eigenvectors of matrix A — fundamental in stability analysis, vibration problems, and many engineering applications."
      },
      {
        text: "What does norm(A) compute in MATLAB?",
        options: ["The normalized version of A", "Matrix or vector norms — a measure of the 'size' of A", "The normal distribution applied to A", "The inverse of A"],
        correct: 1,
        explanation: "norm(A) computes matrix or vector norms — a measure of the magnitude or 'size' of a matrix or vector, with different types available (1-norm, 2-norm, inf-norm, Frobenius)."
      },
      {
        text: "What does rank(A) compute in MATLAB?",
        options: ["The position of A in memory", "The number of linearly independent rows or columns of A", "The sum of all elements", "A ranked list of elements"],
        correct: 1,
        explanation: "rank(A) returns the number of linearly independent rows or columns of A — the rank indicates the dimension of the column space."
      },
      {
        text: "For solving x+2y+3z=1, 4x+5y+6z=1, 7x+8y+0z=1 in MATLAB, the coefficient matrix A is:",
        options: ["[1 2 3; 4 5 6; 7 8 0]", "[1 4 7; 2 5 8; 3 6 0]", "[1; 1; 1]", "[x; y; z]"],
        correct: 0,
        explanation: "The coefficient matrix A contains the coefficients of x, y, z from each equation in order: A = [1 2 3; 4 5 6; 7 8 0]."
      },
      {
        text: "For solving x+2y+3z=1, 4x+5y+6z=1, 7x+8y+0z=1 in MATLAB, the vector b is:",
        options: ["[1 1 1]", "[1; 1; 1]", "[x; y; z]", "[1 4 7; 2 5 8; 3 6 0]"],
        correct: 1,
        explanation: "b is the column vector of right-hand side values: b = [1; 1; 1]. It must be a column vector for x = A\\b or x = inv(A)*b."
      },
      {
        text: "Which MATLAB function gives the LU factorization of a matrix?",
        options: ["lu(A)", "lufact(A)", "factor(A)", "decomp(A)"],
        correct: 0,
        explanation: "lu(A) gives the LU factorization of matrix A — it decomposes A into lower triangular (L) and upper triangular (U) factors."
      },
      {
        text: "For vectors U = [u₁ u₂ u₃] and V = [v₁ v₂ v₃], U.^V produces:",
        options: ["[u₁+v₁, u₂+v₂, u₃+v₃]", "[u₁^v₁, u₂^v₂, u₃^v₃]", "[u₁*v₁, u₂*v₂, u₃*v₃]", "A matrix product"],
        correct: 1,
        explanation: "U.^V performs element-wise exponentiation: each element of U is raised to the power of the corresponding element of V: [u₁^v₁, u₂^v₂, u₃^v₃]."
      },
      {
        text: "In MATLAB, what does α*A compute (where α is a scalar)?",
        options: ["Only valid if A is a scalar too", "Multiplies each element of matrix A by the scalar α", "The inner product of α and A", "Concatenates α with A"],
        correct: 1,
        explanation: "α*A or A*α multiplies each element of A by the scalar α — scalar-matrix multiplication is defined element-wise."
      },
      {
        text: "For the Kirchhoff's Law problem I₁+2I₂+3I₃=14, 2I₁-I₂+I₃=3, 3I₁+I₂-I₃=2, what is the coefficient matrix A?",
        options: ["[1 2 3; 2 -1 1; 3 1 -1]", "[14; 3; 2]", "[I₁; I₂; I₃]", "[1 2 3 14; 2 -1 1 3; 3 1 -1 2]"],
        correct: 0,
        explanation: "The coefficient matrix A contains the coefficients of I₁, I₂, I₃: A = [1 2 3; 2 -1 1; 3 1 -1]."
      },
      {
        text: "If the solution to the Kirchhoff problem I₁+2I₂+3I₃=14, 2I₁-I₂+I₃=3, 3I₁+I₂-I₃=2 gives m = [1.0000; 2.0000; 3.0000], then:",
        options: ["I₁=2A, I₂=1A, I₃=3A", "I₁=1A, I₂=2A, I₃=3A", "I₁=3A, I₂=2A, I₃=1A", "I₁=0A, I₂=1A, I₃=2A"],
        correct: 1,
        explanation: "The solution vector corresponds to the variables in order: I₁=1A, I₂=2A, I₃=3A."
      },
      {
        text: "The MATLAB function roots(p) where p = [1 2 0] computes:",
        options: ["The integral of the polynomial", "The roots of the polynomial x² + 2x + 0 = 0", "The derivative of the polynomial", "The coefficients of the polynomial"],
        correct: 1,
        explanation: "roots(p) finds the roots of a polynomial whose coefficients are given in descending order in vector p. p = [1 2 0] represents x² + 2x + 0 = 0."
      },
      {
        text: "For the polynomial x² + 2x = 0, what is p and what does roots(p) return?",
        options: ["p = [1 2]; roots = [0; -2]", "p = [1 2 0]; roots = [0; -2]", "p = [2 1 0]; roots = [1; 2]", "p = [1 0 2]; roots = [-2; 0]"],
        correct: 1,
        explanation: "x²+2x = x²+2x+0 = 0 → p = [1 2 0]. roots(p) gives [0; -2]."
      },
      {
        text: "The result of A.*B for A = [1 2; 3 4] and B = [5 6; 7 8] is:",
        options: ["[23 34; 31 46] (matrix product)", "[5 12; 21 32] (element-wise)", "[6 8; 10 12] (addition)", "[4 4; 4 4] (subtraction)"],
        correct: 1,
        explanation: "A.*B performs element-by-element multiplication: [[1×5, 2×6]; [3×7, 4×8]] = [[5, 12]; [21, 32]]."
      },
      {
        text: "What is the MATLAB command to compute A*B (standard matrix product) for A = [1 3 2; 4 6 5; 8 1 8] and B = [1 5 6; 8 7 2; 3 0 8]?",
        options: ["C = A.*B", "C = A*B", "C = A^B", "C = dot(A,B)"],
        correct: 1,
        explanation: "Standard matrix multiplication in MATLAB uses C = A*B — not A.*B which would be element-wise."
      },
      {
        text: "In MATLAB, which command was introduced in later versions to solve Ax=b with user-selected algorithm?",
        options: ["solve(A,b)", "linsolve(A,b)", "linsys(A,b)", "mldivide(A,b)"],
        correct: 1,
        explanation: "linsolve(A,b) was introduced to solve Ax=b with the user's choice of algorithm, in addition to the backslash x=A\\b which uses a default algorithm."
      },
      {
        text: "The operation U./V for U=[10 6 8] and V=[2 3 4] gives:",
        options: ["[20 18 32]", "[8 3 4]", "[5 2 2]", "[12 9 12]"],
        correct: 2,
        explanation: "U./V performs element-by-element division: [10/2, 6/3, 8/4] = [5, 2, 2]."
      },
      {
        text: "To solve the system 2x-y+5x=8, 4x+6y=10, x+y+2z=4 using MATLAB's backslash, you write:",
        options: ["x = b\\A", "x = A\\b where A is the coefficient matrix and b = [8;10;4]", "x = inv(b)*A", "x = solve(A,b)"],
        correct: 1,
        explanation: "x = A\\b where A is the coefficient matrix of the system and b is the right-hand side column vector [8; 10; 4]."
      },
      {
        text: "What does A^2 compute for a square matrix A?",
        options: ["Each element of A squared", "A times A (matrix multiplication)", "The square root of A", "The inverse of A squared"],
        correct: 1,
        explanation: "A^2 computes the matrix product A*A — matrix exponentiation. This is different from A.^2 which squares each element."
      },
      {
        text: "Which of these correctly distinguishes array division (./) from matrix right division (/) in MATLAB?",
        options: ["They are identical operations", "./ divides each element by the corresponding element; / solves the linear system A/B = A*B⁻¹ for matrices", "/ is faster than ./", "./ only works for vectors"],
        correct: 1,
        explanation: "./ performs element-by-element division; / (matrix right division) computes A*B⁻¹ for matrix arguments — two fundamentally different operations."
      },
      {
        text: "To compute y = e^(−10)*cosec(x) + x! − ⁹√p for x=π, p=8 in MATLAB:",
        options: ["y = e(-10)*cosec(pi)+factorial(pi)-(p)^(1/9)", "y = exp(-10)*csc(pi)+factorial(pi)-(8)^(1/9) is close but pi! is undefined for non-integers", "y = e^(-10)/sin(x)+x!-p^(1/9)", "y = exp(-10)*(1/sin(x))+factorial(x)-(p^(1/9))"],
        correct: 3,
        explanation: "cosec(x) = 1/sin(x); in MATLAB: exp(-10)*(1/sin(x))+factorial(x)-(p^(1/9)). Note that factorial requires integer input."
      },
      {
        text: "For a 3×3 matrix A where det(A) = 0, what can you conclude?",
        options: ["A has an inverse", "A is singular — it has no inverse and Ax=b may have no unique solution", "All elements are zero", "A is the identity matrix"],
        correct: 1,
        explanation: "If det(A) = 0, the matrix is singular — it has no inverse. The system Ax=b either has no solution or infinitely many solutions, but no unique solution."
      },
      {
        text: "The MATLAB function trace in matrix analysis computes:",
        options: ["The path of the matrix", "The sum of the diagonal elements of a matrix", "The matrix determinant", "The inverse of the matrix"],
        correct: 1,
        explanation: "trace computes the sum of diagonal elements of a matrix — equal to the sum of eigenvalues for square matrices."
      },
      {
        text: "What does rref(A) compute in MATLAB?",
        options: ["The Reduced Row Echelon Form of matrix A", "The rank of A", "The reverse of A", "A random version of A"],
        correct: 0,
        explanation: "rref(A) computes the Reduced Row Echelon Form of matrix A — useful for solving systems of equations and finding the rank and null space."
      },
      {
        text: "The null space command null(A) in MATLAB returns:",
        options: ["An empty matrix always", "A matrix whose columns form an orthonormal basis for the null space of A", "The zero vector only", "The determinant of A"],
        correct: 1,
        explanation: "null(A) returns a matrix whose columns form an orthonormal basis for the null space (kernel) of A — the set of vectors x such that Ax = 0."
      },
      {
        text: "For the system 2x+y=3, 2x+3y=7 (rewritten as linear system), solving in MATLAB gives:",
        options: ["x=1, y=1", "x=0.5, y=2", "x=1, y=2", "x=2, y=1"],
        correct: 1,
        explanation: "From 2x+y=3 and 2x+3y=7: subtracting gives 2y=4, y=2; then 2x=3-2=1, x=0.5. In MATLAB: A=[2 1;2 3]; b=[3;7]; x=A\\b gives [0.5; 2]."
      }
    ]
  },

  /* ============================================================
     CHAPTER 6 — MATLAB Programming: Scripts, Functions & Control Flow
  ============================================================ */
  {
    number: 6,
    title: "MATLAB Programming: Scripts, Functions & Control Flow",
    questionLimit: 40,
    timeLimit: 20,
    summary: "MATLAB is a full programming language with M-file scripts and M-file functions. Scripts are sequences of MATLAB commands saved in .m files that execute when called. Functions are M-files that accept input arguments and return output arguments, with their own workspace. Control flow structures include if...end, if...else...end, if...elseif...else...end, for loops, while loops, break, continue, and switch. MATLAB supports inline function definitions, output commands (disp and fprintf), and file output (fopen/fprintf/fclose). Debugging tools help identify syntax errors and run-time errors.",
    keyPoints: [
      "A script file is an external file containing a sequence of MATLAB statements with the .m extension (M-file); scripts are often called M-files; they can be run by typing the script name (without .m) in the Command Window",
      "Script side-effects: all variables created in a script are added to the workspace — existing variables may be overwritten; for complex applications, function M-files are preferable to avoid these side-effects",
      "M-File functions accept input arguments and return output arguments; each function M-file has its own workspace separate from the MATLAB base workspace",
      "Anatomy of a function M-file: (1) function definition line — 'function [outputs] = function_name(inputs)'; (2) H1 line — one-line summary description; (3) Help text — detailed description; (4) Function body — actual computations",
      "Function name must begin with a letter and must be no longer than 63 characters; the text file is saved as function_name.m",
      "Difference between scripts and functions: scripts do not accept input/output arguments and share the base workspace; functions accept arguments and have their own internal workspace; scripts automate commands; functions extend MATLAB",
      "Input command: 'input('prompt string')' prompts the user to enter a value when the script executes; useful for interactive scripts",
      "Output commands: 'disp' is simple to use but provides limited control; 'fprintf' is slightly more complex but provides total control over output appearance including formatting",
      "The 'if...end' structure: if expression; statements; end. Variants: if...else...end and if...elseif...else...end. No semicolon needed at end of if/else/end lines; indentation improves readability",
      "'elseif' is one word (no space between else and if); the 'end' statement is always required to close an if block",
      "The 'for...end' loop: for variable = expression; statements; end. Usually expression is a vector of the form i:s:j. Multiple for loops can be nested; indentation helps readability",
      "The 'while...end' loop: while expression; statements; end. The loop continues as long as the expression is true; if the condition is never false, the loop runs indefinitely — use Ctrl+C to stop",
      "The 'break' statement terminates a while or for loop early, passing control to the statement after 'end'; 'continue' skips remaining statements in the current iteration and moves to the next",
      "Relational operators: > (Greater than), < (Less than), >= (Greater than or equal), <= (Less than or equal), == (Equal to), ~= (Not equal to). Note: == tests equality; = is the assignment operator",
      "Logical operators: & (AND), | (OR), ~ (NOT); also short-circuit: && (AND), || (OR)",
      "Complete operator precedence (highest to lowest): (1) Parentheses (); (2) Transpose (.') and Powers (.^, ^); (3) Unary plus (+), unary minus (-), NOT (~); (4) Multiplication (.*,.* ,*), Division (./,./,/,\\); (5) Addition (+), Subtraction (-); (6) Colon (:); (7) Relational operators (<,<=,>,>=,==,~=); (8) Element-wise AND (&); (9) Element-wise OR (|)",
      "Saving output to a file: (1) op = fopen('filename.txt','wt') — open file; (2) fprintf(op,'text\\n') — write to file; (3) fclose(op) — close file. The 'wt' mode means write in text format",
      "Inline function definition: f = inline('expression','variable') — creates a function object; e.g. f = inline('x^2+3*x+1','x') creates f(x) = x²+3x+1; evaluate with f(1), f(2), f(-3)",
      "To calculate derivatives symbolically: diff(f(x),x) computes df/dx; 'diff' is a symbolic differentiation command",
      "Control flow structures make it possible to skip commands or execute specific groups of commands conditionally or repeatedly",
      "The MATLAB editor is both a text editor specialized for creating M-files and a graphical MATLAB debugger — it uses color coding to differentiate code elements and performs simple checks",
      "The 'switch' statement is another control flow structure useful for branching on multiple discrete values, similar to a multi-way if-elseif chain",
      "Function examples: myTriangle(b,h) = inline('1/2*b*h','b','h') computes triangle area; Celsius = inline('5/9*(F-32)','F') converts Fahrenheit to Celsius; Area = inline('pi*r^2','r') computes circle area",
      "Parameters vs Arguments: a parameter is a variable identifier provided as input to a function; an argument refers to a value in a function that can be input or output"
    ],
    pdfUrl: "",
    cbtUrl: "",
    questions: [
      {
        text: "What is an M-file script in MATLAB?",
        options: ["A binary executable file", "An external file with .m extension containing a sequence of MATLAB statements that can be saved and run multiple times", "A matrix file format", "A MATLAB help documentation file"],
        correct: 1,
        explanation: "A script file is an external file containing a sequence of MATLAB statements with a .m extension — it can be saved and run multiple times, unlike commands typed in the Command Window which are not saved."
      },
      {
        text: "How do you run a MATLAB script file named 'example1.m' from the Command Window?",
        options: ["run('example1.m')", "execute example1", "example1", "open example1.m"],
        correct: 2,
        explanation: "To run a script file in MATLAB, type the filename without the .m extension at the command prompt: >> example1. MATLAB finds and executes example1.m."
      },
      {
        text: "What is a key disadvantage (side-effect) of MATLAB script files?",
        options: ["They run slower than functions", "All variables created in a script are added to the shared workspace — existing variables may be overwritten and the script's execution can be affected by workspace state", "Scripts cannot use built-in functions", "Scripts cannot be saved"],
        correct: 1,
        explanation: "Script side-effects: all variables created in a script are added to the shared workspace — existing variables may be overwritten, and state variables in the workspace may affect script execution."
      },
      {
        text: "What is the first line of a MATLAB function M-file?",
        options: ["% Function name", "clear all", "function [outputs] = function_name(inputs)", "start function"],
        correct: 2,
        explanation: "The first line of a function M-file starts with the keyword 'function' and defines the function name, output arguments, and input arguments."
      },
      {
        text: "What is the H1 line in a MATLAB function M-file?",
        options: ["The first executable code line", "A one-line summary description of the function, displayed when you request Help", "The header of a for loop", "The line that defines input arguments"],
        correct: 1,
        explanation: "The H1 line is a one-line summary description of the function (the first comment line after the function definition). It is the text displayed when you use 'help function_name'."
      },
      {
        text: "Where are variables stored in a function M-file workspace?",
        options: ["In the MATLAB base workspace shared with scripts", "In a workspace internal to the function — separate from the base workspace", "In a global variable pool", "On disk in a temporary file"],
        correct: 1,
        explanation: "Each M-file function has its own area of workspace, separated from the MATLAB base workspace. This prevents function variables from interfering with the base workspace."
      },
      {
        text: "What is the maximum length of a MATLAB function name?",
        options: ["8 characters", "32 characters", "63 characters", "Unlimited"],
        correct: 2,
        explanation: "A function name must begin with a letter and must be no longer than 63 characters. The .m file is saved with the function's name as the filename."
      },
      {
        text: "The general syntax of a MATLAB function with multiple inputs and outputs is:",
        options: ["def function_name(inputs) returns outputs", "function [outputs] = function_name(inputs)", "function(inputs) = function_name[outputs]", "outputs = function(inputs)"],
        correct: 1,
        explanation: "The general form is: function [outputs] = function_name(inputs). The output arguments are listed inside brackets on the left; input arguments are inside parentheses."
      },
      {
        text: "Which of these correctly writes a function header for computing area A of a triangle given base b and height h?",
        options: ["function area = myTriangle(b,h)", "function [A] = myTriangle(b,h)", "Both A and B are correct — one uses 'area' and the other uses [A] as output variable name", "function myTriangle = area(b,h)"],
        correct: 2,
        explanation: "Both are valid syntax: function area = myTriangle(b,h) and function [A] = myTriangle(b,h) are both correct function definitions — the output variable name is chosen by the programmer."
      },
      {
        text: "The 'input' command in a MATLAB script does what?",
        options: ["Reads data from a file", "Prompts the user to enter a value when the script executes", "Sets input arguments to a function", "Reads command-line arguments"],
        correct: 1,
        explanation: "The 'input' command prompts the user to assign a value to a variable in the Command Window when the script is executed: game1 = input('Enter points scored in the first game ')."
      },
      {
        text: "What is the difference between 'disp' and 'fprintf' for output in MATLAB?",
        options: ["disp only works for numbers; fprintf for text", "disp is simple but provides limited control over output appearance; fprintf is more complex but provides total control over formatting", "fprintf is faster than disp", "They are identical commands"],
        correct: 1,
        explanation: "disp is simple to use but provides limited control over output appearance; fprintf is slightly more complex but provides total control over the appearance of output, including format specifiers."
      },
      {
        text: "In the if...end structure, which lines do NOT require a semicolon at the end?",
        options: ["All lines require semicolons", "The statements inside the if block", "Lines containing 'if', 'else', and 'end'", "No lines require semicolons at all"],
        correct: 2,
        explanation: "No semicolon (;) is needed at the end of lines containing if, else, elseif, or end. The semicolons go in the statement lines inside the block if you want to suppress output."
      },
      {
        text: "In MATLAB, 'elseif' (as part of the if-elseif-else-end structure) must be written as:",
        options: ["else if (two words)", "elsif", "elseif (one word, no space)", "elif"],
        correct: 2,
        explanation: "In MATLAB, 'elseif' is one word — there is no space between 'else' and 'if'. Writing 'else if' (two words) would be interpreted differently."
      },
      {
        text: "What is the syntax of a for loop in MATLAB?",
        options: ["for i from 1 to n do...done", "for variable = expression; statements; end", "loop variable = 1:n; statements; endloop", "for(i=1; i<=n; i++){ statements }"],
        correct: 1,
        explanation: "MATLAB for loop syntax: for variable = expression; statements; end. Usually expression is a vector like i:s:j or 1:n."
      },
      {
        text: "What does the following loop print? for ii=1:5; x=ii*ii; end",
        options: ["1, 2, 3, 4, 5", "1, 4, 9, 16, 25 (displays each)", "Only 25 (the final value)", "Nothing — the semicolons suppress all output"],
        correct: 3,
        explanation: "The semicolon after x=ii*ii suppresses display of each iteration. The loop runs 5 times computing x = 1,4,9,16,25 but displaying nothing."
      },
      {
        text: "The 'while' loop in MATLAB continues executing as long as:",
        options: ["A fixed number of iterations is reached", "The expression (condition) is TRUE", "The expression is FALSE", "The user types 'stop'"],
        correct: 1,
        explanation: "The while loop continues executing its statements as long as the expression (condition) evaluates to true. When the condition becomes false, execution passes to the statement after 'end'."
      },
      {
        text: "What happens if the condition in a while loop never becomes false?",
        options: ["MATLAB automatically terminates the loop after 1000 iterations", "The loop runs indefinitely — use Ctrl+C to abort", "The loop runs once then stops", "MATLAB displays an error immediately"],
        correct: 1,
        explanation: "If the condition inside a while loop never becomes false, the loop runs indefinitely. Press Ctrl+C to stop execution."
      },
      {
        text: "What does the 'break' statement do inside a for or while loop?",
        options: ["Skips the current iteration and continues the loop", "Terminates the loop and passes control to the first statement after the corresponding 'end'", "Pauses the loop temporarily", "Resets the loop variable to its initial value"],
        correct: 1,
        explanation: "The 'break' statement terminates the entire loop and passes control to the first statement after the corresponding 'end'. It can exit both for and while loops."
      },
      {
        text: "What does the 'continue' statement do inside a loop?",
        options: ["Terminates the loop entirely", "Passes immediately to the next iteration of the loop, skipping remaining statements in the current iteration", "Continues to the next function call", "Repeats the current iteration"],
        correct: 1,
        explanation: "The 'continue' statement skips the remaining statements in the current iteration and passes immediately to the next iteration of the loop."
      },
      {
        text: "In MATLAB, the '==' operator is used for:",
        options: ["Variable assignment", "Testing equality in a relational expression", "Matrix element assignment", "String concatenation"],
        correct: 1,
        explanation: "The '==' operator tests for equality in relational expressions — it returns true if both sides are equal. '=' is the assignment operator. They are completely different."
      },
      {
        text: "The '~=' operator in MATLAB means:",
        options: ["Approximately equal", "Not equal to", "Bitwise NOT", "Less than or equal to"],
        correct: 1,
        explanation: "~= is the 'not equal to' relational operator in MATLAB. The ~ is MATLAB's NOT symbol."
      },
      {
        text: "In MATLAB operator precedence, which has higher priority: relational operators or logical AND (&)?",
        options: ["They have equal priority", "Logical AND (&) has higher priority", "Relational operators have higher priority", "It depends on the expression"],
        correct: 2,
        explanation: "In MATLAB's precedence, relational operators (<, <=, >, >=, ==, ~=) are evaluated before element-wise AND (&), which is before element-wise OR (|)."
      },
      {
        text: "To save output to a text file in MATLAB, the sequence of commands is:",
        options: ["write(), print(), save()", "fopen(), fprintf(), fclose()", "open(), write(), close()", "createfile(), addtext(), closefile()"],
        correct: 1,
        explanation: "To save output to a file: (1) open with fopen('filename','wt'); (2) write with fprintf(fileID,'text'); (3) close with fclose(fileID)."
      },
      {
        text: "What does 'wt' mean in fopen('weekdays.txt','wt')?",
        options: ["Write type", "Width and tabs", "Write in text format", "Web text"],
        correct: 2,
        explanation: "'wt' in fopen means write in text format — 'w' creates a new file or overwrites an existing one, 't' specifies text mode."
      },
      {
        text: "An inline function in MATLAB is defined using:",
        options: ["inline('expression','variable')", "def f(x) = expression", "f = @(x) expression (also valid in modern MATLAB)", "Both A and C are valid ways to create inline/anonymous functions"],
        correct: 3,
        explanation: "Both inline('expression','variable') and the anonymous function f = @(x) expression create callable function objects. The @(x) syntax is the modern preferred approach."
      },
      {
        text: "To define f(x) = x² + 3x + 1 as an inline function in MATLAB:",
        options: ["f = 'x^2+3*x+1'", "f = inline('x^2+3*x+1','x')", "function f = x^2+3*x+1", "def f(x): x**2+3*x+1"],
        correct: 1,
        explanation: "f = inline('x^2+3*x+1','x') creates an inline function object. You can then evaluate it as f(1) which gives 5, f(2) gives 11, f(-3) gives 1."
      },
      {
        text: "To define the Celsius conversion function C = 5/9*(F-32) as an inline function:",
        options: ["C = '5/9*(F-32)'", "C = inline('5/9*(F-32)','F')", "function C = Celsius(F) = 5/9*(F-32)", "Celsius = function(F) 5/9*(F-32)"],
        correct: 1,
        explanation: "C = inline('5/9*(F-32)','F') correctly defines the Celsius conversion as an inline function with F as the input variable."
      },
      {
        text: "To differentiate f(x) = x³ + 3x² symbolically in MATLAB:",
        options: ["derivative(f,x)", "d/dx(f)", "diff(f,x)", "gradient(f)"],
        correct: 2,
        explanation: "diff(f,x) computes the symbolic derivative of f with respect to x. For f(x) = x^3+3*x^2, diff gives 3x²+6x."
      },
      {
        text: "What does the MATLAB Editor do that makes it preferred for writing M-files?",
        options: ["It runs MATLAB faster", "It performs simple checks, uses color to differentiate code elements, and serves as both a text editor and graphical debugger", "It automatically fixes all bugs", "It generates M-files automatically from diagrams"],
        correct: 1,
        explanation: "The MATLAB editor performs simple checks, uses color coding to differentiate code elements (keywords, strings, comments), and serves as both a text editor specialized for M-files and a graphical MATLAB debugger."
      },
      {
        text: "How do you open the MATLAB Editor for a new file?",
        options: [">> new", ">> edit (or File → New → M-file)", ">> open_editor", ">> notepad"],
        correct: 1,
        explanation: "Type 'edit' or 'edit filename.m' in the Command Window, or select File → New → M-file from the menu to open the MATLAB Editor."
      },
      {
        text: "In MATLAB, which relational operator checks if two values are equal?",
        options: ["=", "equals()", "==", "~="],
        correct: 2,
        explanation: "== is the equality relational operator in MATLAB. Note that = is the assignment operator — confusing the two is a common programming error."
      },
      {
        text: "The colon operator (:) appears at which level in MATLAB's operator precedence table?",
        options: ["Highest priority (level 1)", "Level 6 — after addition/subtraction but before relational operators", "Lowest priority (level 9)", "Same level as multiplication"],
        correct: 1,
        explanation: "In MATLAB's precedence table: (1) Parentheses, (2) Transpose/Power, (3) Unary, (4) Mult/Div, (5) Add/Sub, (6) Colon (:), (7) Relational, (8) AND, (9) OR."
      },
      {
        text: "A MATLAB script that calculates the average of points scored in three games would use which command to prompt for user input?",
        options: ["read('prompt')", "input('prompt')", "get('prompt')", "scanf('prompt')"],
        correct: 1,
        explanation: "The input('prompt') command prompts the user to assign a value at the command prompt. Example: game1 = input('Enter the points scored in the first game ')."
      },
      {
        text: "Variables in a MATLAB function M-file after execution:",
        options: ["Remain available in the base workspace", "Are added to the shared workspace", "Remain internal to the function and do not appear in the base workspace", "Are deleted immediately"],
        correct: 2,
        explanation: "Function variables are stored in the function's own workspace and do not persist in or affect the base workspace after the function finishes executing."
      },
      {
        text: "For the nested for loop creating a symmetric 5×5 matrix, what is the role of the inner loop?",
        options: ["To iterate over columns while the outer loop iterates over rows", "To control the outer loop variable", "To display results", "To check stopping conditions"],
        correct: 0,
        explanation: "In a nested for loop for matrix generation (e.g., n=5; A=eye(n); for j=2:n; for i=1:j-1; ...), the inner loop iterates over rows (i) for each column (j) handled by the outer loop."
      },
      {
        text: "Which of the following is TRUE about the difference between scripts and functions?",
        options: ["Scripts can accept input arguments; functions cannot", "Functions have their own internal workspace; scripts share the base workspace", "Scripts are more powerful than functions", "Functions cannot call other functions"],
        correct: 1,
        explanation: "Key difference: functions have their own internal workspace (separate from base workspace); scripts share the base workspace. Functions accept arguments and return values; scripts do not."
      },
      {
        text: "What is pseudocode in the context of programming algorithms?",
        options: ["Fake code that doesn't execute", "A shorthand description of a program using general words instead of specific programming syntax — understandable by non-programmers", "A low-level assembly language", "Comments inside MATLAB code"],
        correct: 1,
        explanation: "Pseudocode is a shorthand way of describing a program using general words to represent the specific syntax of a computer code so it can be easily understood by a non-programmer."
      },
      {
        text: "The %{ and %} delimiters in MATLAB are used to:",
        options: ["Define a cell array", "Comment out an entire block of code without putting % at the beginning of each line", "Create a struct", "Define a function header"],
        correct: 1,
        explanation: "The %{ ... %} delimiters allow you to comment out a block of code without putting % at the beginning of each line. The delimiters must appear on lines by themselves."
      },
      {
        text: "The 'function handles' in MATLAB (created with @) allow:",
        options: ["Handling errors in functions", "Creating anonymous functions and passing functions as arguments to other functions", "Managing function M-files on disk", "Controlling which functions have access to the workspace"],
        correct: 1,
        explanation: "Function handles (created with @) allow creation of anonymous functions and passing functions as arguments to other functions. Example: x=@sin; x(pi) computes sin(pi)."
      },
      {
        text: "The 'feval' function in MATLAB:",
        options: ["Evaluates a formula from a string", "Is still supported for backward compatibility but is no longer needed with function handles", "Forces evaluation order", "Evaluates a function at a specified point"],
        correct: 1,
        explanation: "feval is no longer needed when working with function handles (in newer MATLAB versions), but still works for backward compatibility. Function handles are the modern approach."
      },
      {
        text: "In MATLAB, inline functions with more than one variable are defined as:",
        options: ["inline('expression') with variables listed separately", "inline('expression', 'var1', 'var2') — multiple variable names after the expression", "Only single-variable inline functions are supported", "inline('expression'; 'var1'; 'var2')"],
        correct: 1,
        explanation: "Inline functions with multiple variables: e.g., myTriangle = inline('1/2*b*h','b','h') or P = inline('(v^2)/R','v','R'). Each variable is listed as a separate string argument."
      },
      {
        text: "The 'mlint' command in MATLAB (introduced in R14SP2) is used to:",
        options: ["Format MATLAB code automatically", "Scan an M-file and show inefficiencies — such as unused variables, uninitialized arrays, etc.", "Run unit tests", "Merge multiple M-files"],
        correct: 1,
        explanation: "mlint scans an M-file and shows code inefficiencies: unused variables, failure to pre-allocate arrays, etc. These are common mistakes that produce runnable but inefficient code."
      },
      {
        text: "The factorial function in MATLAB is computed by:",
        options: ["fact(n)", "factorial(n)", "n!", "prod(1:n) or factorial(n) — both work"],
        correct: 3,
        explanation: "Both factorial(n) and prod(1:n) compute n! in MATLAB. The example M-file function shows: f = prod(1:n) to compute factorials."
      }
    ]
  },

  /* ============================================================
     CHAPTER 7 — Proteus ISIS & Circuit Simulation Tools
  ============================================================ */
  {
    number: 7,
    title: "Proteus ISIS & Circuit Simulation Tools",
    questionLimit: 40,
    timeLimit: 20,
    summary: "Proteus ISIS (Intelligent Schematic Input System) is a powerful EEE simulation tool used for circuit design, schematic capture, and PCB layout. It includes virtual measuring instruments such as voltmeters, ammeters, oscilloscopes, and signal generators. Default terminals in Proteus provide standardized connection points for power, ground, and signal lines. Understanding the practical use of Proteus alongside other simulation tools like Multisim is essential for EEE students. This chapter also covers measuring instruments, grounding, simulation principles, and the comparative features of major EEE software applications.",
    keyPoints: [
      "Proteus ISIS stands for Intelligent Schematic Input System — it is the schematic capture and simulation part of the Proteus Design Suite",
      "Proteus has three main modules: ISIS (schematic capture and simulation), ARES (PCB layout), and 3D Viewer (3D visualization of the PCB)",
      "Six measuring instruments available in Proteus ISIS include: Voltmeter (measures voltage), Ammeter (measures current), Oscilloscope (measures and displays waveforms), Wattmeter (measures power), Signal Generator (generates test signals), and Frequency Counter (measures frequency)",
      "Additional Proteus instruments include: AC/DC Voltmeter, AC/DC Ammeter, and the Virtual Terminal (for serial communication monitoring)",
      "Two reasons to use Default Terminals in Proteus: (1) They provide a clean, organized way to connect power and ground to multiple components without drawing wires all over the schematic — reducing clutter; (2) They allow a signal/voltage/ground point to be referenced at multiple locations in the circuit without physical wire routing, making the schematic easier to read and modify",
      "Default terminals in Proteus include: VCC/VDD (positive supply terminal), GND (ground/reference terminal), INPUT (signal input terminal), OUTPUT (signal output terminal), and BIDIR (bidirectional terminal)",
      "Using default terminals in Proteus: place a terminal from the Terminals mode, name it consistently (e.g., VCC on the power supply and VCC on the component), and Proteus will treat all same-named terminals as connected — even without visible wires",
      "Grounding in Proteus: the GND terminal provides the 0V reference that the simulator requires; without a ground reference, SPICE-based simulators cannot solve circuit equations and will report errors",
      "The importance of grounding in simulation: it establishes the voltage reference point (0V) for the entire circuit; all other voltages are measured relative to this reference; omitting it causes simulation failure",
      "Virtual components in Proteus are simulation models — they do not have a PCB footprint by default; real components have both a schematic symbol and a PCB footprint for manufacturing",
      "Simulation in Proteus works using SPICE (Simulation Program with Integrated Circuit Emphasis) models — each component has a SPICE model that defines its electrical behavior",
      "The Proteus simulation process: (1) Draw schematic in ISIS; (2) Add component models and values; (3) Add measuring instruments; (4) Press the Play button (▶) to start simulation; (5) Observe results on virtual instruments",
      "Proteus supports both analog and digital circuit simulation — analog uses SPICE; digital uses HDL (Hardware Description Language) or simplified logic models",
      "Multisim measuring instruments include: Multimeter (voltage, current, resistance, decibels), Oscilloscope (waveform display), Function Generator (signal source), Bode Plotter (frequency response), Logic Analyzer (digital signals), Spectrum Analyzer (frequency domain), and Wattmeter",
      "The difference between Proteus and Multisim: both are circuit simulation tools; Proteus has stronger PCB design capabilities (ARES module); Multisim is known for its extensive component library and user-friendly interface; Proteus supports microcontroller simulation (AVR, PIC) natively",
      "Software applications in EEE perform four key roles: (i) CAD is now possible; (ii) Software-based versions of real-world instruments can now be implemented; (iii) Circuit visualization and simulation is now possible; (iv) Parameters which may not be readily available can be derived",
      "PSPICE (Personal SPICE) is an analog circuit simulator based on SPICE — it is used for detailed analog and mixed-signal circuit analysis; it was one of the earliest EDA (Electronic Design Automation) tools",
      "LabVIEW (Laboratory Virtual Instrument Engineering Workbench) by National Instruments uses a graphical programming language (G language) for data acquisition, instrument control, and test automation — components in LabVIEW are called Virtual Instruments (VIs)",
      "Simulink is a MATLAB extension for model-based simulation of dynamic systems — it uses block diagrams instead of code; widely used for control systems, signal processing, and communications engineering",
      "PSIM is specialized for power electronics simulation — it is optimized for power converter circuits (DC-DC converters, inverters, rectifiers) and motor drives, with faster simulation than general-purpose SPICE tools",
      "AutoCAD Electrical extends the AutoCAD CAD environment for electrical design — it includes IEC and ANSI standard symbol libraries, automatic wire numbering, terminal strip management, and compliance checking",
      "Electrical CADD and SolidWorks Electrical are integrated electrical design tools used primarily in industrial electrical panel design and electromechanical product design respectively",
      "Key Proteus diagram: terminals are placed using the Terminal mode in the left toolbar; wire connections are made in Component mode; instruments are placed from the Virtual Instruments mode; simulation is controlled using the Play/Stop buttons at the bottom-left",
      "Common Proteus simulation errors and solutions: 'No ground in circuit' — add a GND terminal; 'SPICE model not found' — assign correct component model; 'Netlist error' — check for unconnected wire ends"
    ],
    pdfUrl: "",
    cbtUrl: "",
    questions: [
      {
        text: "What does ISIS stand for in Proteus ISIS?",
        options: ["Integrated Schematic and Input System", "Intelligent Schematic Input System", "Interactive Simulation Interface Software", "Integrated System for Instrument Simulation"],
        correct: 1,
        explanation: "ISIS stands for Intelligent Schematic Input System — it is the schematic capture and simulation component of the Proteus Design Suite."
      },
      {
        text: "How many measuring instruments are available in Proteus ISIS? List the standard ones.",
        options: ["3 instruments only", "6 instruments: Voltmeter, Ammeter, Oscilloscope, Wattmeter, Signal Generator, Frequency Counter", "10 instruments including spectrum analyzers", "2 instruments: Voltmeter and Ammeter only"],
        correct: 1,
        explanation: "6 standard measuring instruments in Proteus ISIS include: Voltmeter, Ammeter, Oscilloscope, Wattmeter, Signal Generator, and Frequency Counter."
      },
      {
        text: "What are the THREE main modules of the Proteus Design Suite?",
        options: ["ISIS, ARES, and 3D Viewer", "SPICE, CAD, and Simulation", "Schematic, PCB, and Gerber", "Design, Simulate, and Manufacture"],
        correct: 0,
        explanation: "Proteus has three main modules: ISIS (schematic capture and simulation), ARES (PCB layout design), and 3D Viewer (3D visualization of the PCB)."
      },
      {
        text: "What is the primary purpose of ARES in the Proteus Design Suite?",
        options: ["Schematic capture", "PCB (Printed Circuit Board) layout design", "3D visualization only", "Component library management"],
        correct: 1,
        explanation: "ARES is the PCB layout module of Proteus — it allows engineers to design the actual printed circuit board from the schematic created in ISIS."
      },
      {
        text: "Give ONE reason why Default Terminals are used in Proteus.",
        options: ["They make components more expensive", "They provide a clean, organized way to connect power and ground to multiple components without drawing wires everywhere — reducing schematic clutter", "They increase simulation speed", "They are required for all components to work"],
        correct: 1,
        explanation: "Default Terminals allow a signal/voltage/ground point to be referenced at multiple locations without physical wire routing, keeping schematics clean and organized."
      },
      {
        text: "Give a SECOND reason why Default Terminals are used in Proteus.",
        options: ["They automatically generate PCB footprints", "They allow same-named terminals to be treated as electrically connected without visible wires — making schematics easier to read and modify", "They increase component accuracy", "They reduce simulation errors automatically"],
        correct: 1,
        explanation: "A second reason: same-named default terminals in Proteus are treated as electrically connected by the simulator — allowing power/ground distribution without routing wires across the entire schematic."
      },
      {
        text: "Which instrument in Proteus ISIS displays voltage waveforms over time?",
        options: ["Ammeter", "Frequency Counter", "Oscilloscope", "Wattmeter"],
        correct: 2,
        explanation: "The Oscilloscope displays voltage waveforms over time — it shows how voltage varies with time, allowing engineers to observe signal shapes, frequencies, and amplitudes."
      },
      {
        text: "Which Proteus instrument measures the rate at which a signal repeats?",
        options: ["Voltmeter", "Frequency Counter", "Wattmeter", "Ammeter"],
        correct: 1,
        explanation: "The Frequency Counter measures frequency — the rate at which a periodic signal repeats, measured in Hertz (Hz)."
      },
      {
        text: "What does the GND (ground) terminal in Proteus provide?",
        options: ["Maximum voltage point", "Infinite resistance reference", "The 0V reference voltage needed by the SPICE simulator to solve circuit equations", "A connection to physical earth ground"],
        correct: 2,
        explanation: "The GND terminal provides the 0V reference voltage. Without it, SPICE-based simulators cannot calculate node voltages and will report errors or refuse to simulate."
      },
      {
        text: "What happens in Proteus if you attempt to simulate a circuit without a GND terminal?",
        options: ["The simulation runs normally", "MATLAB generates an error instead", "The simulator reports a 'No ground in circuit' error and cannot solve the circuit", "All voltages default to 5V"],
        correct: 2,
        explanation: "Without a GND terminal, Proteus reports a 'No ground in circuit' error — the SPICE engine requires at least one ground node (net 0) to set the voltage reference."
      },
      {
        text: "Which of the following is a DEFAULT TERMINAL type in Proteus?",
        options: ["RESISTOR", "VCC", "DIODE", "TRANSISTOR"],
        correct: 1,
        explanation: "VCC (or VDD) is a default terminal in Proteus — it represents the positive supply voltage connection point."
      },
      {
        text: "How does Proteus treat multiple terminals with the same name in different parts of a schematic?",
        options: ["As separate unconnected nodes", "As electrically connected nodes — they are treated as if they were joined by a wire", "As an error requiring correction", "As parallel components"],
        correct: 1,
        explanation: "In Proteus, all default terminals with the same name are treated as electrically connected by the simulator, even without physical wire routing between them."
      },
      {
        text: "Which simulation engine does Proteus use for analog circuit simulation?",
        options: ["MATLAB engine", "SPICE (Simulation Program with Integrated Circuit Emphasis)", "VHDL simulator", "LabVIEW engine"],
        correct: 1,
        explanation: "Proteus uses SPICE (Simulation Program with Integrated Circuit Emphasis) models for analog simulation — each component must have a SPICE model to simulate correctly."
      },
      {
        text: "What is a VIRTUAL component in Proteus?",
        options: ["A component that costs less", "A simulation-only component without a PCB footprint — it exists only in the simulator", "A component that is hidden", "A component from the internet"],
        correct: 1,
        explanation: "Virtual components in Proteus are simulation models only — they do not have a PCB footprint by default and are used purely for simulation purposes."
      },
      {
        text: "What is a REAL component in the context of Proteus?",
        options: ["A component available in hardware stores only", "A component with both a schematic symbol and a PCB footprint — it can be manufactured on a physical PCB", "A component with high power rating", "A component that costs more than virtual ones"],
        correct: 1,
        explanation: "Real components in Proteus have both a schematic symbol (for simulation) and a PCB footprint (for PCB layout) — they can be used in both simulation and physical manufacturing."
      },
      {
        text: "What is PSPICE and what is it primarily used for?",
        options: ["A PCB design tool", "Personal SPICE — an analog circuit simulator used for detailed analog and mixed-signal circuit analysis", "A power management tool", "A programming language for EEE"],
        correct: 1,
        explanation: "PSPICE (Personal SPICE) is an analog circuit simulator based on the SPICE standard — used for detailed analog and mixed-signal circuit analysis, one of the earliest EDA tools."
      },
      {
        text: "What unique capability does Proteus have over Multisim?",
        options: ["Better graphical interface", "Native support for microcontroller simulation (AVR, PIC, ARM) within the circuit", "More colors for wires", "Support for optical circuits"],
        correct: 1,
        explanation: "Proteus natively supports microcontroller simulation (AVR, PIC, ARM) — you can simulate firmware running on microcontrollers directly in the circuit. This is a key differentiator from Multisim."
      },
      {
        text: "In LabVIEW, what are individual programs/components called?",
        options: ["M-files", "Scripts", "Virtual Instruments (VIs)", "Modules"],
        correct: 2,
        explanation: "In LabVIEW, individual programs and components are called Virtual Instruments (VIs) — reflecting the laboratory instrumentation background of the software."
      },
      {
        text: "What programming paradigm does LabVIEW use?",
        options: ["Text-based procedural programming like C", "Object-oriented programming like Java", "Graphical programming (G language) using block diagrams and data flow", "Functional programming like Haskell"],
        correct: 2,
        explanation: "LabVIEW uses a graphical programming language called G language — programs are created by connecting visual blocks in a data flow diagram rather than writing text code."
      },
      {
        text: "Simulink is best described as:",
        options: ["A standalone simulation software", "A MATLAB extension using block diagrams to model and simulate dynamic systems", "A PCB design tool", "A SPICE-based analog simulator"],
        correct: 1,
        explanation: "Simulink is a MATLAB extension for model-based simulation of dynamic systems — it uses block diagrams instead of code, widely used for control systems, signal processing, and communications."
      },
      {
        text: "PSIM is specialized for simulation of which type of circuits?",
        options: ["Digital logic circuits", "RF/microwave circuits", "Power electronics circuits (converters, inverters, rectifiers) and motor drives", "Analog audio circuits"],
        correct: 2,
        explanation: "PSIM is specialized for power electronics simulation — optimized for power converter circuits (DC-DC converters, inverters, rectifiers) and motor drives, faster than general SPICE for this purpose."
      },
      {
        text: "AutoCAD Electrical includes which of the following specialized features for EEE?",
        options: ["Only basic CAD drawing tools", "IEC and ANSI standard symbol libraries, automatic wire numbering, terminal strip management, and compliance checking", "Microcontroller programming", "PCB routing only"],
        correct: 1,
        explanation: "AutoCAD Electrical extends AutoCAD with: IEC/ANSI symbol libraries, automatic wire numbering, terminal strip management, and compliance checking — all essential for electrical panel design."
      },
      {
        text: "In the Proteus simulation process, what does pressing the Play button (▶) do?",
        options: ["Plays a video tutorial", "Opens the PCB layout", "Starts the circuit simulation — SPICE solves the circuit and virtual instruments display results", "Exports the design"],
        correct: 2,
        explanation: "Pressing the Play button (▶) in Proteus starts the circuit simulation — the SPICE engine solves the circuit equations and virtual instruments display the results in real time."
      },
      {
        text: "Which Multisim instrument shows the frequency response of a circuit (gain vs. frequency)?",
        options: ["Oscilloscope", "Logic Analyzer", "Bode Plotter", "Spectrum Analyzer"],
        correct: 2,
        explanation: "The Bode Plotter in Multisim displays the frequency response of a circuit — it plots gain (in dB) and phase versus frequency, useful for filter and amplifier analysis."
      },
      {
        text: "Which Multisim instrument is used for analyzing digital signals?",
        options: ["Oscilloscope", "Logic Analyzer", "Spectrum Analyzer", "Wattmeter"],
        correct: 1,
        explanation: "The Logic Analyzer in Multisim captures and displays digital signals — it shows multiple digital channels simultaneously, useful for debugging digital circuits."
      },
      {
        text: "The Wattmeter instrument in simulation software measures:",
        options: ["Frequency", "Electrical power (P = V×I) consumed by or delivered to a component", "Resistance", "Capacitance"],
        correct: 1,
        explanation: "The Wattmeter measures electrical power — it computes P = V×I and displays the power consumed by or delivered to a circuit element."
      },
      {
        text: "What does the INPUT default terminal in Proteus represent?",
        options: ["A power supply connection", "A signal input point for test signals to enter the circuit", "A ground connection", "An output measurement point"],
        correct: 1,
        explanation: "The INPUT default terminal represents a signal input point — it is used to feed test signals into the circuit from external signal sources."
      },
      {
        text: "The BIDIR default terminal in Proteus is used for:",
        options: ["Bidirectional signal connections — lines that can carry signals in both directions", "Bifurcation of signals", "Binary digital signals only", "Bipolar transistor connections"],
        correct: 0,
        explanation: "BIDIR is a bidirectional terminal — used for connections where signals can flow in both directions, such as bus lines in microcontroller and memory interfaces."
      },
      {
        text: "A 'SPICE model not found' error in Proteus simulation indicates:",
        options: ["The schematic has too many components", "A component lacks the SPICE electrical model needed for simulation — you must assign the correct model", "The ground terminal is missing", "The circuit has a short circuit"],
        correct: 1,
        explanation: "'SPICE model not found' means a component doesn't have the electrical model needed for simulation. You must assign the correct SPICE model or use a component that has one built in."
      },
      {
        text: "What is the fundamental difference between simulation and emulation in EEE?",
        options: ["They are the same thing", "Simulation models the behavior of a system in software; emulation replicates the function of a target system on different hardware", "Emulation is less accurate", "Simulation requires physical components"],
        correct: 1,
        explanation: "Simulation models system behavior in software (mathematical models); emulation replicates the function of a target system on different hardware (functional replication) — both are used in EEE."
      },
      {
        text: "SolidWorks Electrical is primarily used in:",
        options: ["PCB layout design", "Electromechanical product design — integrating electrical wiring with 3D mechanical models", "Analog circuit simulation", "Microcontroller programming"],
        correct: 1,
        explanation: "SolidWorks Electrical is used for electromechanical product design — it integrates electrical wiring diagrams and schematics with 3D mechanical models in the SolidWorks environment."
      },
      {
        text: "In Proteus, which mode is used to place components from the component library?",
        options: ["Wire mode", "Component mode (P button for Pick component)", "Terminal mode", "Instrument mode"],
        correct: 1,
        explanation: "Components are placed from Component mode in Proteus — typically accessed by clicking the Component icon and using the P button to open the Pick Devices library."
      },
      {
        text: "In a Proteus schematic, if you need to connect VCC to 10 different components, the most efficient approach is:",
        options: ["Draw wires from a single VCC source to all 10 components", "Place a VCC default terminal at each component — all same-named terminals are automatically connected", "Use a single wire with 10 branches", "Add VCC as a component property"],
        correct: 1,
        explanation: "Placing a VCC default terminal at each component is most efficient — Proteus treats all same-named terminals as connected without physical wires, keeping the schematic clean."
      },
      {
        text: "Which of the following best describes Proteus's advantage in microcontroller-based projects?",
        options: ["It supports more components than any other tool", "It allows you to simulate the firmware/code running on microcontrollers (PIC, AVR, ARM) within the electronic circuit", "It generates code automatically", "It is cheaper than alternatives"],
        correct: 1,
        explanation: "Proteus uniquely allows simulation of firmware running on microcontrollers within the circuit — engineers can debug both hardware and software simultaneously in simulation."
      },
      {
        text: "The Signal Generator instrument in Proteus/Multisim is used to:",
        options: ["Measure signal strength", "Generate test signals (sine, square, triangle waves) at specified frequencies and amplitudes to test circuits", "Store signal data", "Analyze signal distortion"],
        correct: 1,
        explanation: "The Signal Generator (or Function Generator) produces test signals — sine, square, and triangle waves at specified frequencies and amplitudes — to test circuit responses."
      },
      {
        text: "How does the AC Voltmeter in Proteus differ from the DC Voltmeter?",
        options: ["They are identical", "The AC Voltmeter measures RMS voltage of alternating signals; the DC Voltmeter measures steady-state DC voltages", "The DC Voltmeter is more accurate", "The AC Voltmeter measures frequency"],
        correct: 1,
        explanation: "The AC Voltmeter measures RMS (Root Mean Square) voltage of alternating signals; the DC Voltmeter measures steady-state DC voltages. Proteus provides both types."
      },
      {
        text: "What does 'Netlist error' in Proteus indicate?",
        options: ["The internet connection is lost", "Unconnected wire ends or incorrectly connected components in the schematic — causing the netlist generation to fail", "Too many components in the design", "The simulation is taking too long"],
        correct: 1,
        explanation: "'Netlist error' indicates unconnected wire ends or incorrectly connected components — SPICE generates the netlist from the schematic connections, and any ambiguity causes this error."
      },
      {
        text: "Proteus supports simulation of which types of circuits?",
        options: ["Only analog circuits", "Only digital circuits", "Both analog (SPICE) and digital (HDL/logic models) circuits", "Only microcontroller circuits"],
        correct: 2,
        explanation: "Proteus supports both analog circuit simulation (using SPICE models) and digital circuit simulation (using HDL or simplified logic models) — and combinations of both."
      },
      {
        text: "What is the role of the Spectrum Analyzer in circuit simulation?",
        options: ["Displays time-domain waveforms", "Analyzes signal content in the frequency domain — showing amplitude at different frequencies", "Measures DC power", "Counts logic transitions"],
        correct: 1,
        explanation: "The Spectrum Analyzer analyzes signals in the frequency domain — it shows the amplitude content at different frequencies (the frequency spectrum), useful for analyzing distortion and harmonics."
      },
      {
        text: "Which EEE software is described in EEE 102 notes as being released in 1988 in Yorkshire, England?",
        options: ["MATLAB", "Multisim", "LabVIEW", "Proteus"],
        correct: 3,
        explanation: "Proteus was developed and released in 1988 in Yorkshire, England by Labcenter Electronics — this is specifically documented in EEE 102 course notes."
      },
      {
        text: "What does the Virtual Terminal instrument in Proteus display?",
        options: ["A virtual keyboard", "Serial communication data — data being transmitted and received over serial (UART) connections", "The component list", "3D circuit visualization"],
        correct: 1,
        explanation: "The Virtual Terminal in Proteus displays serial communication data — it monitors data being transmitted and received over UART/serial connections, essential for microcontroller debugging."
      },
      {
        text: "Why are there both an AC Ammeter and a DC Ammeter in Proteus?",
        options: ["They measure the same thing differently", "AC Ammeter measures RMS current of alternating signals; DC Ammeter measures steady-state direct current — different measurement algorithms are needed", "DC Ammeter is more accurate", "AC Ammeter measures voltage"],
        correct: 1,
        explanation: "AC and DC Ammeters use different measurement algorithms: AC measures RMS current for alternating signals; DC measures the mean (average) current. Both are needed for complete circuit analysis."
      }
    ]
  }

]);
