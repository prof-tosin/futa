/**
 * courses/che102.js — CHE 102: General Chemistry II
 * Level: 100 Level, 2nd Semester
 *
 * 8 Study Sessions drawn from the CHE 102 Tutorial Manual (FUTA),
 * past exam papers, and the CHE 102 practice exercises.
 * Each chapter has 70+ questions; only 25 are shown per trial (shuffled).
 */

PORTAL_INJECT("CHE 102", [

  /* ============================================================
     CHAPTER 1 — Historic Background to Organic Chemistry & Nomenclature
  ============================================================ */
  {
    number: 1,
    title: "Historic Background to Organic Chemistry & Nomenclature",
    questionLimit: 40,
    timeLimit: 15,
    summary: "Organic chemistry is the study of carbon compounds. Carbon's unique ability to form four covalent bonds and bond with itself gives rise to millions of compounds. The field was formally named by Berzelius (1806) and transformed by Wöhler's synthesis of urea (1828), disproving the vital force theory. IUPAC nomenclature provides systematic rules for naming organic compounds based on their longest carbon chain, functional groups, and substituents.",
    keyPoints: [
      "Organic chemistry: study of carbon compounds; carbon forms 4 covalent bonds",
      "Vital force theory disproved by Friedrich Wöhler's urea synthesis (1828)",
      "Berzelius coined 'organic chemistry' in 1806",
      "IUPAC naming: find longest chain → number to give lowest locants → name substituents alphabetically",
      "Carbon prefixes: meth(1), eth(2), prop(3), but(4), pent(5), hex(6), hept(7), oct(8), non(9), dec(10)",
      "Suffixes: -ane (single bonds), -ene (double bond), -yne (triple bond)",
      "Functional group precedence: COOH > CHO > C=O > OH > NH2 > C=C > C≡C",
      "Homologous series: compounds differing by CH2 with same general formula and similar properties"
    ],
    pdfUrl: "",
    cbtUrl: "",
    questions: [
      {
        text: "Who first coined the term 'organic chemistry'?",
        options: ["Friedrich Wöhler", "Jons Jacob Berzelius", "Auguste Kekulé", "Robert Boyle"],
        correct: 1,
        explanation: "Jons Jacob Berzelius, a physician by trade, first coined the term 'organic chemistry' in 1806 for the study of compounds derived from biological sources."
      },
      {
        text: "Which scientist disproved the vital force theory by synthesizing urea from inorganic materials?",
        options: ["Berzelius", "Kekulé", "Friedrich Wöhler", "Lavoisier"],
        correct: 2,
        explanation: "Friedrich Wöhler synthesized urea (a biological compound) from silver cyanate and ammonium nitrate in 1828, disproving the vital force theory."
      },
      {
        text: "In what year did Wöhler's synthesis of urea overturn the vital force theory?",
        options: ["1806", "1865", "1828", "1834"],
        correct: 2,
        explanation: "Wöhler's landmark synthesis occurred in 1828, proving organic compounds could be made without a 'vital force'."
      },
      {
        text: "The vital force theory proposed that organic compounds:",
        options: [
          "Could only be synthesized in the laboratory",
          "Could only be formed under the influence of a life force in living organisms",
          "Were identical to inorganic compounds",
          "Could not be burned"
        ],
        correct: 1,
        explanation: "The vital force theory held that organic substances could only be formed by the 'vital force' present in living bodies of animals and plants."
      },
      {
        text: "Which of the following is the correct IUPAC name for CH3CH2CH2CH3?",
        options: ["Butene", "Butane", "Propane", "Butyne"],
        correct: 1,
        explanation: "CH3CH2CH2CH3 has 4 carbons with only single bonds, giving the IUPAC name butane."
      },
      {
        text: "The carbon prefix for a chain of 5 carbons is:",
        options: ["hex", "but", "pent", "prop"],
        correct: 2,
        explanation: "Pent- is the IUPAC prefix for 5 carbon atoms."
      },
      {
        text: "What suffix indicates a carbon-carbon double bond in IUPAC nomenclature?",
        options: ["-ane", "-yne", "-ol", "-ene"],
        correct: 3,
        explanation: "The suffix '-ene' indicates the presence of a carbon-carbon double bond."
      },
      {
        text: "What suffix indicates a carbon-carbon triple bond?",
        options: ["-ane", "-ene", "-yne", "-al"],
        correct: 2,
        explanation: "The suffix '-yne' indicates a carbon-carbon triple bond."
      },
      {
        text: "The IUPAC prefix for 7 carbons is:",
        options: ["hex", "oct", "hept", "non"],
        correct: 2,
        explanation: "Hept- is the prefix for 7 carbon atoms."
      },
      {
        text: "Which of the following represents a homologous series?",
        options: [
          "CH4, C2H4, C3H4",
          "CH4, C2H6, C3H8",
          "CH4, C2H2, C3H6",
          "CH3OH, C2H5COOH, C3H7NH2"
        ],
        correct: 1,
        explanation: "CH4, C2H6, C3H8 (methane, ethane, propane) form a homologous series — each member differs by CH2 and they share the general formula CnH2n+2."
      },
      {
        text: "A compound with the formula C5H12 belongs to which homologous series?",
        options: ["Alkenes", "Alkynes", "Alkanes", "Alkanols"],
        correct: 2,
        explanation: "C5H12 fits the general formula CnH2n+2 (5×2+2=12), indicating it is an alkane (pentane)."
      },
      {
        text: "What is the general formula for alkynes?",
        options: ["CnH2n+2", "CnH2n", "CnH2n−2", "CnH2n+1OH"],
        correct: 2,
        explanation: "Alkynes have the general formula CnH2n−2 due to the triple bond removing 4 hydrogen atoms."
      },
      {
        text: "The IUPAC name of CH3CH(CH3)CH2CH3 is:",
        options: ["2-methylbutane", "3-methylbutane", "2-methylpentane", "isopentane"],
        correct: 0,
        explanation: "The longest chain has 4 carbons (butane); the methyl branch is at carbon 2, giving 2-methylbutane."
      },
      {
        text: "In IUPAC nomenclature, when numbering the carbon chain, you should:",
        options: [
          "Always number from left to right",
          "Give the highest possible locants to substituents",
          "Give the lowest possible locants to substituents",
          "Number from the end nearest the middle of the chain"
        ],
        correct: 2,
        explanation: "The carbon chain is numbered to give the lowest possible locants (position numbers) to substituents and functional groups."
      },
      {
        text: "Which functional group has the highest priority in IUPAC nomenclature?",
        options: ["Alcohol (−OH)", "Aldehyde (−CHO)", "Carboxylic acid (−COOH)", "Amine (−NH2)"],
        correct: 2,
        explanation: "Carboxylic acid (−COOH) has the highest priority in IUPAC nomenclature functional group order."
      },
      {
        text: "The compound CH3CH2OH is correctly named:",
        options: ["Methanol", "Ethanol", "Propanol", "Ethane"],
        correct: 1,
        explanation: "CH3CH2OH has 2 carbons and a hydroxyl group; it is ethanol (ethyl alcohol)."
      },
      {
        text: "What is the IUPAC name for CH3COCH3?",
        options: ["Propanal", "Propanoic acid", "Propan-2-one", "Propan-1-ol"],
        correct: 2,
        explanation: "CH3COCH3 has a ketone group at C2 of a 3-carbon chain: propan-2-one (common name: acetone)."
      },
      {
        text: "Carbon atoms are unique among elements because they:",
        options: [
          "Can only form ionic bonds",
          "Form only two bonds",
          "Can bond with each other to form chains and rings, and form four covalent bonds",
          "Are always found in inorganic compounds"
        ],
        correct: 2,
        explanation: "Carbon's uniqueness stems from its ability to form four covalent bonds and to bond strongly with other carbon atoms, creating chains and rings."
      },
      {
        text: "How many structural isomers does C5H12 have?",
        options: ["2", "3", "4", "5"],
        correct: 1,
        explanation: "C5H12 (pentane) has 3 structural isomers: n-pentane, isopentane (2-methylbutane), and neopentane (2,2-dimethylpropane)."
      },
      {
        text: "The prefix 'di-' in a compound name means:",
        options: ["One substituent", "Two of the same substituent", "Three substituents", "Four substituents"],
        correct: 1,
        explanation: "The prefix 'di-' means two of the same substituent are present (e.g., dimethyl = two methyl groups)."
      },
      {
        text: "What is the IUPAC name for HCOOH?",
        options: ["Ethanoic acid", "Propanoic acid", "Methanoic acid", "Butanoic acid"],
        correct: 2,
        explanation: "HCOOH has one carbon and is the simplest carboxylic acid; its IUPAC name is methanoic acid (common name: formic acid)."
      },
      {
        text: "Which scientist proposed that isomerism was due to carbon's ability to form four bonds?",
        options: ["Wöhler", "Berzelius", "Lavoisier", "Auguste Kekulé"],
        correct: 3,
        explanation: "Auguste Kekulé was among the first to propose that isomerism was linked to carbon's proclivity to form four bonds."
      },
      {
        text: "The name 2,2-dimethylpropane describes a compound with:",
        options: [
          "5 carbons total with two methyl groups on C2",
          "3 carbons total with no substituents",
          "6 carbons total",
          "4 carbons with one methyl group"
        ],
        correct: 0,
        explanation: "2,2-dimethylpropane has a 3-carbon propane chain with two methyl groups on C2, giving 5 carbons total — this is neopentane."
      },
      {
        text: "The hydroxyl group (−OH) when attached to a benzene ring is called:",
        options: ["Alcohol", "Phenol", "Ether", "Ester"],
        correct: 1,
        explanation: "When the −OH group is directly attached to a benzene (aromatic) ring, the compound is called a phenol."
      },
      {
        text: "In the name '3-methylhex-2-ene', what does '2' specify?",
        options: [
          "Position of the methyl group",
          "Number of double bonds",
          "Position of the double bond",
          "Number of carbon atoms"
        ],
        correct: 2,
        explanation: "In '3-methylhex-2-ene', the '2' specifies the position of the carbon-carbon double bond (between C2 and C3)."
      },
      {
        text: "Which of the following is NOT an organic compound?",
        options: ["CH4", "C2H5OH", "CO2", "C6H12O6"],
        correct: 2,
        explanation: "CO2 (carbon dioxide) is considered an inorganic compound despite containing carbon. Organic compounds are characterized by C−H bonds."
      },
      {
        text: "The compound CH3CH2CHO is named:",
        options: ["Propanal", "Propanone", "Propan-1-ol", "Propanoic acid"],
        correct: 0,
        explanation: "CH3CH2CHO has 3 carbons ending in an aldehyde group (−CHO); it is propanal."
      },
      {
        text: "Which of the following correctly lists carbon prefixes in order from 1 to 4 carbons?",
        options: [
          "Eth-, meth-, prop-, but-",
          "Meth-, eth-, prop-, but-",
          "Prop-, meth-, but-, eth-",
          "But-, prop-, eth-, meth-"
        ],
        correct: 1,
        explanation: "The correct order is: meth-(1), eth-(2), prop-(3), but-(4)."
      },
      {
        text: "A compound with only carbon-carbon single bonds is described as:",
        options: ["Unsaturated", "Saturated", "Aromatic", "Cyclic"],
        correct: 1,
        explanation: "A compound with only single bonds between carbons is saturated — it cannot incorporate more hydrogen atoms."
      },
      {
        text: "The IUPAC suffix for a ketone functional group is:",
        options: ["-ol", "-al", "-one", "-oic acid"],
        correct: 2,
        explanation: "The IUPAC suffix for a ketone is '-one' (e.g., propan-2-one for acetone)."
      },
      {
        text: "What is the IUPAC name for CH3COOH?",
        options: ["Methanoic acid", "Ethanoic acid", "Propanoic acid", "Butanoic acid"],
        correct: 1,
        explanation: "CH3COOH has 2 carbons and a carboxylic acid group; it is ethanoic acid (common name: acetic acid)."
      },
      {
        text: "Organic compounds generally have:",
        options: [
          "High melting points and are ionic",
          "Low melting points and are predominantly covalent",
          "Very high water solubility",
          "No carbon-hydrogen bonds"
        ],
        correct: 1,
        explanation: "Most organic compounds are covalent and have relatively low melting points compared to ionic inorganic compounds."
      },
      {
        text: "The name 'isopropyl alcohol' corresponds to the IUPAC name:",
        options: ["Propan-1-ol", "Propan-2-ol", "Butan-2-ol", "Methanol"],
        correct: 1,
        explanation: "Isopropyl alcohol has the OH group on C2 of propane: propan-2-ol (also called 2-propanol)."
      },
      {
        text: "Which of the following has the molecular formula CnH2n?",
        options: ["Alkanes", "Alkynes", "Alkenes", "Alkanols"],
        correct: 2,
        explanation: "Alkenes (acyclic) have the general formula CnH2n due to the presence of one double bond."
      },
      {
        text: "The compound CH2=CHCH3 is named:",
        options: ["Propyne", "Propane", "Propene", "But-1-ene"],
        correct: 2,
        explanation: "CH2=CHCH3 has 3 carbons with a double bond at C1; it is propene (propylene)."
      },
      {
        text: "In alphabetical ordering of substituents in IUPAC names, 'ethyl' comes:",
        options: [
          "After 'methyl' alphabetically",
          "Before 'methyl' alphabetically",
          "Before 'dimethyl' but is considered after it",
          "In the same position as 'diethyl'"
        ],
        correct: 1,
        explanation: "Alphabetically, 'e' in 'ethyl' comes before 'm' in 'methyl', so ethyl is listed first. Multiplying prefixes like 'di-' are not considered in alphabetical ordering."
      },
      {
        text: "The compound HC≡CH is called:",
        options: ["Ethene", "Ethane", "Ethyne (acetylene)", "Methane"],
        correct: 2,
        explanation: "HC≡CH is ethyne, commonly known as acetylene — the simplest alkyne with a triple bond."
      },
      {
        text: "Which of the following contains a carbonyl group?",
        options: ["CH3OH", "CH3OCH3", "CH3CHO", "CH3CH3"],
        correct: 2,
        explanation: "CH3CHO (ethanal/acetaldehyde) contains a carbonyl group (C=O) as part of the aldehyde functional group."
      },
      {
        text: "How many structural isomers can be written for C4H10?",
        options: ["1", "2", "3", "4"],
        correct: 1,
        explanation: "C4H10 has 2 structural isomers: n-butane (straight chain) and isobutane (2-methylpropane)."
      },
      {
        text: "The reaction of alcohols with carboxylic acids to form esters is called:",
        options: ["Hydrolysis", "Esterification", "Fermentation", "Saponification"],
        correct: 1,
        explanation: "Esterification is the reaction between a carboxylic acid and an alcohol to produce an ester and water."
      },
      {
        text: "The correct IUPAC name for (CH3)3CCH2CH3 is:",
        options: [
          "2,2-dimethylbutane",
          "3,3-dimethylbutane",
          "2-ethyl-2-methylpropane",
          "2,2-dimethylpentane"
        ],
        correct: 0,
        explanation: "(CH3)3CCH2CH3 has a 4-carbon chain (butane) with two methyl groups on C2: 2,2-dimethylbutane."
      },
      {
        text: "Among the following, which is a secondary alcohol?",
        options: ["CH3CH2OH", "CH3CH(OH)CH3", "(CH3)3COH", "CH3OH"],
        correct: 1,
        explanation: "CH3CH(OH)CH3 (propan-2-ol) is a secondary alcohol because the carbon bearing the OH is bonded to two other carbons."
      },
      {
        text: "Organic chemistry is important primarily because:",
        options: [
          "All organic compounds are derived from petroleum",
          "It covers the chemistry of carbon compounds, which are the basis of all life and most industrial materials",
          "Organic reactions are always slow",
          "Organic compounds cannot be synthesized in a laboratory"
        ],
        correct: 1,
        explanation: "Organic chemistry is central because carbon compounds form the molecular basis of life, medicines, fuels, plastics, and countless materials."
      },
      {
        text: "The IUPAC name for CH3CH2COOH is:",
        options: ["Ethanoic acid", "Butanoic acid", "Propanoic acid", "Methanoic acid"],
        correct: 2,
        explanation: "CH3CH2COOH has 3 carbons (including the carboxyl carbon); it is propanoic acid."
      },
      {
        text: "A compound containing only carbon and hydrogen atoms is called a:",
        options: ["Carbohydrate", "Hydrocarbon", "Organic acid", "Ether"],
        correct: 1,
        explanation: "Hydrocarbons are compounds containing only carbon and hydrogen atoms."
      },
      {
        text: "The compound with formula C6H6 belongs to which class?",
        options: ["Alkanes", "Alkenes", "Alkynes", "Aromatic hydrocarbons"],
        correct: 3,
        explanation: "C6H6 is benzene, the simplest aromatic hydrocarbon with a delocalized ring of π electrons."
      },
      {
        text: "In IUPAC nomenclature, the 'parent chain' is:",
        options: [
          "Any carbon chain in the molecule",
          "The shortest carbon chain",
          "The longest continuous carbon chain containing the principal functional group",
          "The chain with the most branches"
        ],
        correct: 2,
        explanation: "The parent chain (principal chain) is the longest continuous carbon chain that contains the principal functional group."
      },
      {
        text: "The compound CH3NH2 belongs to which class?",
        options: ["Alcohol", "Aldehyde", "Amine", "Ether"],
        correct: 2,
        explanation: "CH3NH2 (methylamine) is an amine — it contains a nitrogen atom bonded to carbon."
      },
      {
        text: "Wöhler's synthesis involved mixing which two reagents?",
        options: [
          "Sodium chloride and water",
          "Silver or lead cyanate with ammonium nitrate",
          "Carbon dioxide and water",
          "Methane and chlorine"
        ],
        correct: 1,
        explanation: "Wöhler mixed silver or lead cyanate with ammonium nitrate, expecting ammonium cyanate but obtaining urea instead."
      },
      {
        text: "The compound (CH3CH2)2O is classified as a(n):",
        options: ["Alcohol", "Ether", "Ester", "Aldehyde"],
        correct: 1,
        explanation: "(CH3CH2)2O is diethyl ether — an ether, with an oxygen atom bonded between two alkyl groups."
      },
      {
        text: "The suffix '-oic acid' in IUPAC nomenclature indicates:",
        options: [
          "A ketone functional group",
          "A carboxylic acid functional group",
          "An aldehyde functional group",
          "An ester functional group"
        ],
        correct: 1,
        explanation: "The suffix '-oic acid' indicates a carboxylic acid group (−COOH)."
      },
      {
        text: "Which statement about organic compounds is FALSE?",
        options: [
          "There are more organic than inorganic compounds",
          "Organic compounds are always derived from living sources",
          "Carbon-carbon bonds are usually strong and covalent",
          "Organic compounds can contain nitrogen, oxygen, and other elements"
        ],
        correct: 1,
        explanation: "Organic compounds are NOT always derived from living sources; Wöhler's synthesis (1828) proved they can be made in the laboratory from inorganic materials."
      },
      {
        text: "Glycol refers to an alcohol with how many hydroxyl groups?",
        options: ["One", "Two", "Three", "Four"],
        correct: 1,
        explanation: "A glycol is a diol — an alcohol containing two hydroxyl (−OH) groups. Example: ethylene glycol (ethane-1,2-diol)."
      },
      {
        text: "The IUPAC name for the amine with formula CH3CH2NH2 is:",
        options: ["Methylamine", "Ethanamine", "Propylamine", "Dimethylamine"],
        correct: 1,
        explanation: "CH3CH2NH2 has 2 carbons and a primary amine group; IUPAC name is ethanamine (common name: ethylamine)."
      },
      {
        text: "The combustion of any hydrocarbon always produces:",
        options: [
          "Only water",
          "Only carbon dioxide",
          "Carbon dioxide and water",
          "Sulfur dioxide and water"
        ],
        correct: 2,
        explanation: "Complete combustion of any hydrocarbon produces CO2 and H2O as the mandatory products."
      },
      {
        text: "Which of these compounds is aromatic?",
        options: ["Cyclohexane", "Benzene", "Cyclohexene", "Hexane"],
        correct: 1,
        explanation: "Benzene is the archetypal aromatic compound, characterized by a planar ring with delocalized π electrons following Hückel's rule."
      },
      {
        text: "The number of π bonds in a triple bond is:",
        options: ["0", "1", "2", "3"],
        correct: 2,
        explanation: "A triple bond consists of one σ (sigma) bond and two π (pi) bonds."
      },
      {
        text: "The compound with structure CH3−O−CH2CH3 is named:",
        options: [
          "Ethoxyethane",
          "Methoxypropane",
          "Methoxyethane",
          "Ethoxyethanol"
        ],
        correct: 2,
        explanation: "CH3−O−CH2CH3 has a methyl group (OCH3) connected to an ethyl group; it is methoxyethane (methyl ethyl ether)."
      },
      {
        text: "The prefix for 8 carbon atoms in IUPAC nomenclature is:",
        options: ["sept", "hept", "oct", "non"],
        correct: 2,
        explanation: "Oct- is the IUPAC prefix for 8 carbon atoms (e.g., octane)."
      },
      {
        text: "Isomers are defined as compounds that:",
        options: [
          "Have the same physical and chemical properties",
          "Have the same molecular formula but different structural arrangements",
          "Have different molecular formulas",
          "Are always optically active"
        ],
        correct: 1,
        explanation: "Isomers have the same molecular formula but differ in the arrangement of atoms — structural or spatial."
      },
      {
        text: "The compound CH3CH=CHCH3 is named:",
        options: ["But-1-ene", "But-2-ene", "Butane", "But-2-yne"],
        correct: 1,
        explanation: "CH3CH=CHCH3 has 4 carbons with a double bond between C2 and C3: but-2-ene."
      },
      {
        text: "In naming branched alkanes, after finding the longest chain, substituent positions are numbered to give:",
        options: [
          "The highest possible sum of locants",
          "The lowest possible locant to the first-named substituent",
          "Locants that are always even numbers",
          "The lowest possible sum of locants"
        ],
        correct: 3,
        explanation: "The IUPAC rule is to number the chain so the substituents receive the lowest possible set of locants (lowest sum)."
      },
      {
        text: "Which of the following is a tertiary alcohol?",
        options: [
          "CH3CH2OH",
          "CH3CH(OH)CH3",
          "(CH3)3COH",
          "CH3CH2CH2OH"
        ],
        correct: 2,
        explanation: "(CH3)3COH (tert-butanol) is a tertiary alcohol — the carbon bearing OH is bonded to three other carbon atoms."
      },
      {
        text: "The IUPAC name for glycerol (propane-1,2,3-triol) indicates it has:",
        options: ["One OH group", "Two OH groups", "Three OH groups", "Four OH groups"],
        correct: 2,
        explanation: "The '-triol' suffix and positions 1,2,3 indicate three hydroxyl groups on the three carbons of the propane chain."
      },
      {
        text: "Which of the following compounds has the highest number of structural isomers for the formula C4H8?",
        options: [
          "4 isomers (3 alkenes + 1 cycloalkane)",
          "3 isomers",
          "2 isomers",
          "5 isomers"
        ],
        correct: 0,
        explanation: "C4H8 has 4 structural isomers: but-1-ene, but-2-ene (cis and trans are stereoisomers, not structural), 2-methylpropene, and cyclobutane."
      },
      {
        text: "A carboxyl group (−COOH) is the functional group of:",
        options: ["Alcohols", "Aldehydes", "Esters", "Carboxylic acids"],
        correct: 3,
        explanation: "The carboxyl group (−COOH) is the defining functional group of carboxylic acids."
      },
      {
        text: "The compound CH3CH2C≡CH is named:",
        options: ["But-1-ene", "But-1-yne", "But-2-yne", "Propyne"],
        correct: 1,
        explanation: "CH3CH2C≡CH has 4 carbons with a triple bond starting at C1: but-1-yne."
      },
      {
        text: "Which of the following is the IUPAC name for ethyl alcohol?",
        options: ["Methanol", "Propan-1-ol", "Ethanol", "Butan-1-ol"],
        correct: 2,
        explanation: "Ethyl alcohol (C2H5OH) is named ethanol in IUPAC nomenclature."
      },
      {
        text: "Multiple bonds between carbon atoms arise because carbon:",
        options: [
          "Has only two valence electrons",
          "Can share more than one pair of electrons with another atom",
          "Always forms ionic bonds",
          "Cannot bond with itself"
        ],
        correct: 1,
        explanation: "Carbon can share two or three pairs of electrons with another atom, forming double or triple bonds."
      },
      {
        text: "The 'octane number' in petroleum refers to:",
        options: [
          "The percentage of octane in gasoline",
          "A measure of fuel's resistance to knocking, based on comparison with isooctane",
          "The number of carbons in all fuel molecules",
          "The boiling point of the fuel"
        ],
        correct: 1,
        explanation: "The octane number measures a fuel's antiknock performance, using isooctane (2,2,4-trimethylpentane) as the 100 reference."
      },
      {
        text: "The suffix '-amine' in IUPAC nomenclature indicates:",
        options: [
          "A compound with a carbonyl group",
          "A nitrogen-containing compound derived from ammonia",
          "A sulfur-containing compound",
          "A halogen-containing compound"
        ],
        correct: 1,
        explanation: "The suffix '-amine' indicates the presence of an amino group (−NH2), derived from ammonia by replacing hydrogen with organic groups."
      },
      {
        text: "What type of bond is found between carbon atoms in benzene?",
        options: [
          "Alternating single and double bonds",
          "All triple bonds",
          "Delocalized bonds intermediate between single and double",
          "Ionic bonds"
        ],
        correct: 2,
        explanation: "Benzene has delocalized π electrons; all C−C bonds are equivalent, intermediate in length and strength between single and double bonds."
      },
      {
        text: "The IUPAC prefix for 10 carbon atoms is:",
        options: ["non", "dec", "undec", "dodec"],
        correct: 1,
        explanation: "Dec- is the IUPAC prefix for 10 carbon atoms (e.g., decane, C10H22)."
      },
      {
        text: "Homologous series members have similar chemical properties because they:",
        options: [
          "Have the same molecular mass",
          "Contain the same functional group",
          "Have identical boiling points",
          "Are always gases"
        ],
        correct: 1,
        explanation: "Members of a homologous series share the same functional group, which governs chemical reactivity; they differ only in chain length."
      },
      {
        text: "The IUPAC name for wood spirit (the simplest alcohol) is:",
        options: ["Ethanol", "Propanol", "Methanol", "Butanol"],
        correct: 2,
        explanation: "Wood spirit is the common name for methanol (CH3OH), the simplest alcohol, named methanol in IUPAC."
      },
      {
        text: "A functional group isomer of an alcohol could be:",
        options: ["A different alcohol", "An ether", "Another alkane", "An alkene"],
        correct: 1,
        explanation: "Alcohols (R−OH) and ethers (R−O−R') are functional group isomers — same molecular formula, different functional groups."
      }
    ]
  },

  /* ============================================================
     CHAPTER 2 — Purification of Organic Compounds
  ============================================================ */
  {
    number: 2,
    title: "Purification and Qualitative Analysis of Organic Compounds",
    questionLimit: 40,
    timeLimit: 15,
    summary: "Organic compounds obtained from natural sources or laboratory reactions are often impure. Purification methods exploit differences in physical properties such as melting point, boiling point, and solubility. Key techniques include crystallisation, distillation (simple, fractional, steam, vacuum), sublimation, and chromatography. Qualitative analysis identifies elements (Lassaigne's test for N, S, halogens) and functional groups using specific chemical tests.",
    keyPoints: [
      "Crystallisation: purifies solids by dissolving in hot solvent and cooling slowly",
      "Sublimation: solid → vapour without melting; used for compounds like iodine, naphthalene",
      "Simple distillation: separates liquids with non-volatile impurities or large boiling point difference (>25°C)",
      "Fractional distillation: separates liquids with similar boiling points using a fractionating column",
      "Steam distillation: purifies high-boiling compounds immiscible with water without decomposition",
      "Chromatography: separates mixtures based on differential affinity for stationary and mobile phases",
      "Lassaigne's (sodium fusion) test detects N, S, and halogens in organic compounds",
      "Melting point purity: a pure compound has a sharp, reproducible melting point; impurities lower and broaden it"
    ],
    pdfUrl: "",
    cbtUrl: "",
    questions: [
      {
        text: "Which purification technique is best for separating a solid organic compound from soluble impurities?",
        options: ["Distillation", "Sublimation", "Crystallisation", "Chromatography"],
        correct: 2,
        explanation: "Crystallisation exploits differences in solubility at different temperatures to obtain pure crystals from an impure solution."
      },
      {
        text: "Sublimation is the process by which a substance:",
        options: [
          "Passes from liquid to gas",
          "Passes directly from solid to vapour without melting",
          "Crystallises from solution",
          "Separates based on polarity"
        ],
        correct: 1,
        explanation: "Sublimation is the direct conversion of a solid to vapour (and back to solid) without passing through the liquid phase."
      },
      {
        text: "Which of the following compounds is purified by sublimation?",
        options: ["Ethanol", "Naphthalene", "Sodium chloride", "Glucose"],
        correct: 1,
        explanation: "Naphthalene (and iodine, benzoic acid, camphor) are purified by sublimation because they sublime readily."
      },
      {
        text: "Simple distillation is used to separate:",
        options: [
          "Two liquids with close boiling points",
          "A liquid from a non-volatile solid impurity",
          "Enantiomers",
          "Isomers with different functional groups"
        ],
        correct: 1,
        explanation: "Simple distillation separates a liquid from non-volatile dissolved solids, or mixtures with a very large boiling point difference (>25°C)."
      },
      {
        text: "Fractional distillation is most appropriate when separating liquids with:",
        options: [
          "Very different boiling points (>100°C apart)",
          "Similar boiling points (close together)",
          "Identical boiling points",
          "Non-volatile impurities only"
        ],
        correct: 1,
        explanation: "Fractional distillation uses a fractionating column to separate liquids with similar boiling points by repeated vaporisation and condensation."
      },
      {
        text: "Steam distillation is particularly useful for compounds that:",
        options: [
          "Are completely miscible with water",
          "Have very low boiling points",
          "Are high-boiling and immiscible with water, and would decompose at their normal boiling point",
          "Are already pure solids"
        ],
        correct: 2,
        explanation: "Steam distillation allows high-boiling, water-immiscible compounds to be distilled at a lower temperature (below 100°C) without decomposition."
      },
      {
        text: "In thin layer chromatography (TLC), the stationary phase is typically:",
        options: [
          "A liquid solvent moving up the plate",
          "A solid adsorbent (e.g., silica gel) coated on a plate",
          "A gas carrier",
          "Water"
        ],
        correct: 1,
        explanation: "In TLC, the stationary phase is a solid adsorbent (commonly silica gel or alumina) coated on a plate; the mobile phase is a solvent that moves up by capillary action."
      },
      {
        text: "The Rf value in chromatography is defined as:",
        options: [
          "Distance travelled by solvent / distance travelled by compound",
          "Distance travelled by compound / distance travelled by solvent front",
          "Mass of compound / mass of solvent",
          "Boiling point of compound / boiling point of solvent"
        ],
        correct: 1,
        explanation: "Rf (retardation factor) = distance travelled by the compound spot ÷ distance travelled by the solvent front."
      },
      {
        text: "A pure organic compound is characterised by:",
        options: [
          "A broad melting point range",
          "A sharp, reproducible melting point",
          "Multiple melting points",
          "A melting point that varies with sample size"
        ],
        correct: 1,
        explanation: "Pure compounds melt sharply over a very narrow range (usually 0.5–1°C); impurities lower and broaden the melting point range."
      },
      {
        text: "The presence of nitrogen in an organic compound is confirmed by Lassaigne's test using:",
        options: [
          "Silver nitrate solution",
          "Sodium nitroprusside",
          "Freshly prepared ferric chloride with ferrous sulphate (Prussian blue test)",
          "Lead acetate paper"
        ],
        correct: 2,
        explanation: "In Lassaigne's test for nitrogen, the sodium fusion extract is treated with ferrous sulphate and ferric chloride; formation of Prussian blue (iron(III) hexacyanoferrate) confirms nitrogen."
      },
      {
        text: "In Lassaigne's test, the organic compound is fused with:",
        options: ["Potassium", "Calcium", "Sodium", "Magnesium"],
        correct: 2,
        explanation: "Lassaigne's test fuses the organic compound with sodium metal to convert organic N, S, and halogens into soluble inorganic ions (NaCN, Na2S, NaX)."
      },
      {
        text: "The presence of sulphur in an organic compound (Lassaigne's test) is detected by:",
        options: [
          "Prussian blue formation",
          "Black precipitate with sodium nitroprusside or lead acetate",
          "White precipitate with silver nitrate",
          "Violet colour with KMnO4"
        ],
        correct: 1,
        explanation: "Sulphur is detected by adding sodium nitroprusside (purple colour) or lead acetate (black PbS precipitate) to the sodium fusion extract."
      },
      {
        text: "Halogens (Cl, Br, I) in an organic compound are confirmed in Lassaigne's test by:",
        options: [
          "Prussian blue colour",
          "Bright red precipitate with NaOH",
          "White/pale yellow precipitate with silver nitrate after acidification",
          "Evolution of colourless gas"
        ],
        correct: 2,
        explanation: "Halogens are detected by adding silver nitrate solution to the acidified sodium fusion extract: white (AgCl), pale yellow (AgBr), or yellow (AgI) precipitates form."
      },
      {
        text: "Paper chromatography separates compounds based on:",
        options: [
          "Molecular mass alone",
          "Differential migration rates due to different affinities for stationary and mobile phases",
          "Boiling point differences",
          "Electrical charge"
        ],
        correct: 1,
        explanation: "Chromatography (including paper chromatography) separates compounds based on their relative affinities for the stationary and mobile phases, giving different migration rates."
      },
      {
        text: "Which technique would you use to separate the components of petroleum?",
        options: [
          "Simple distillation",
          "Crystallisation",
          "Fractional distillation",
          "Sublimation"
        ],
        correct: 2,
        explanation: "Petroleum contains many hydrocarbons with similar but different boiling points; fractional distillation on an industrial scale (in fractionating columns) is used."
      },
      {
        text: "Vacuum distillation (distillation under reduced pressure) is used for compounds that:",
        options: [
          "Have very low boiling points",
          "Are volatile at room temperature",
          "Decompose before reaching their boiling point at atmospheric pressure",
          "Are completely insoluble in all solvents"
        ],
        correct: 2,
        explanation: "Reducing pressure lowers the boiling point, allowing heat-sensitive compounds to be distilled without decomposing."
      },
      {
        text: "The process of dissolving an impure solid in hot solvent and cooling to obtain pure crystals is:",
        options: ["Filtration", "Recrystallisation", "Evaporation", "Extraction"],
        correct: 1,
        explanation: "Recrystallisation (also called crystallisation) purifies solids by exploiting temperature-dependent solubility differences."
      },
      {
        text: "What does a mixed melting point determination tell you?",
        options: [
          "The exact molecular weight of a compound",
          "Whether two samples are the same compound (identical mp of mixture confirms identity)",
          "The purity of a liquid",
          "The number of functional groups"
        ],
        correct: 1,
        explanation: "If two samples are identical, mixing them gives no depression of the melting point. If the mp of the mixture is depressed, the compounds are different."
      },
      {
        text: "In column chromatography, the compound that travels fastest through the column is the one that:",
        options: [
          "Has the strongest affinity for the stationary phase",
          "Has the weakest affinity for the stationary phase (most affinity for mobile phase)",
          "Has the highest molecular weight",
          "Is most polar when silica is the stationary phase"
        ],
        correct: 1,
        explanation: "The compound with least affinity for the stationary phase (most affinity for the mobile phase) moves fastest and elutes first."
      },
      {
        text: "Which of the following is NOT a method of purifying organic compounds?",
        options: [
          "Distillation",
          "Crystallisation",
          "Titration",
          "Sublimation"
        ],
        correct: 2,
        explanation: "Titration is an analytical technique used to determine concentration; it is not a purification method."
      },
      {
        text: "Gas-liquid chromatography (GLC) is mainly used to separate:",
        options: [
          "High-boiling solids",
          "Inorganic salts",
          "Volatile organic compounds",
          "Ionic compounds in solution"
        ],
        correct: 2,
        explanation: "GLC is ideal for separating and analysing volatile organic compounds; the mobile phase is a carrier gas (N2 or He)."
      },
      {
        text: "What is the role of the fractionating column in fractional distillation?",
        options: [
          "To heat the mixture",
          "To provide a surface for repeated vaporisation and condensation, effectively separating components",
          "To cool the vapour only",
          "To filter solid impurities"
        ],
        correct: 1,
        explanation: "The fractionating column provides many theoretical plates for repeated vaporisation-condensation cycles, progressively enriching the vapour in the lower-boiling component."
      },
      {
        text: "Solvent extraction uses which principle to separate compounds?",
        options: [
          "Differences in boiling points",
          "Differences in solubility in two immiscible solvents",
          "Differences in melting points",
          "Differences in molecular size"
        ],
        correct: 1,
        explanation: "Solvent extraction (liquid-liquid extraction) distributes a compound between two immiscible solvents based on its relative solubility in each."
      },
      {
        text: "The sodium fusion test is also known as:",
        options: [
          "Fehling's test",
          "Tollens' test",
          "Lassaigne's test",
          "Baeyer's test"
        ],
        correct: 2,
        explanation: "The sodium fusion test is named after Lassaigne and is used to detect the presence of N, S, and halogens in organic compounds."
      },
      {
        text: "Which property is exploited in solvent extraction (liquid-liquid extraction)?",
        options: [
          "Vapour pressure",
          "Density difference between two immiscible solvents",
          "Melting point",
          "Boiling point"
        ],
        correct: 1,
        explanation: "In a separating funnel, the two immiscible layers (e.g., water and organic solvent) are separated by their density difference after the compound partitions between them."
      },
      {
        text: "The boiling point of a pure liquid is:",
        options: [
          "Variable depending on the amount present",
          "Always below 100°C",
          "A fixed, characteristic value at a given pressure",
          "Always the same as the melting point"
        ],
        correct: 2,
        explanation: "The boiling point is a physical constant characteristic of a pure substance at a specified pressure (usually 1 atm)."
      },
      {
        text: "What is the stationary phase in gas chromatography?",
        options: [
          "The carrier gas (helium or nitrogen)",
          "A high-boiling liquid or solid coated on a column packing",
          "The organic solvent",
          "The detector"
        ],
        correct: 1,
        explanation: "In GC, the stationary phase is a non-volatile liquid (or sometimes a solid) that coats the inner surface of the column; the mobile phase is a carrier gas."
      },
      {
        text: "Which method of purification is used to separate a dye into its component colours?",
        options: [
          "Distillation",
          "Crystallisation",
          "Chromatography",
          "Sublimation"
        ],
        correct: 2,
        explanation: "Chromatography (e.g., paper or TLC) separates dye mixtures into individual coloured components based on their different affinities for the stationary and mobile phases."
      },
      {
        text: "Adding impurities to a pure substance generally:",
        options: [
          "Raises and sharpens its melting point",
          "Has no effect on melting point",
          "Lowers and broadens its melting point range",
          "Changes its molecular formula"
        ],
        correct: 2,
        explanation: "Impurities cause melting point depression (lower mp) and broadening of the melting range — a key criterion for purity."
      },
      {
        text: "The separation of oxygen from liquid air is an example of:",
        options: [
          "Simple distillation",
          "Fractional distillation",
          "Sublimation",
          "Crystallisation"
        ],
        correct: 1,
        explanation: "Liquid air is separated into its components (N2, O2, Ar) by fractional distillation, exploiting their different boiling points."
      },
      {
        text: "A compound that can be purified by sublimation includes:",
        options: [
          "Sucrose",
          "Sodium chloride",
          "Iodine",
          "Ethanol"
        ],
        correct: 2,
        explanation: "Iodine sublimes readily — it converts directly from solid to purple vapour, which can then be condensed on a cool surface, leaving non-sublimable impurities behind."
      },
      {
        text: "What does a sharp melting point of a solid indicate?",
        options: [
          "The compound is impure",
          "The compound has a high molecular weight",
          "The compound is pure",
          "The compound is aromatic"
        ],
        correct: 2,
        explanation: "A sharp melting point (narrow range, often 0.5°C) indicates a pure compound. Impurities broaden and depress the melting range."
      },
      {
        text: "In steam distillation, the mixture boils when:",
        options: [
          "Only the organic compound reaches its boiling point",
          "Only water reaches 100°C",
          "The sum of the vapour pressures of water and the organic compound equals atmospheric pressure",
          "The organic compound fully dissolves in water"
        ],
        correct: 2,
        explanation: "The mixture distils when the combined vapour pressure of water and the immiscible organic compound equals atmospheric pressure, which occurs at a temperature lower than each component's individual boiling point."
      },
      {
        text: "Which separation technique is based on differences in adsorption on a solid surface?",
        options: [
          "Distillation",
          "Chromatography",
          "Crystallisation",
          "Steam distillation"
        ],
        correct: 1,
        explanation: "Chromatography separates compounds based on their differential adsorption (or interaction) with the solid stationary phase relative to the mobile phase."
      },
      {
        text: "The Rf value of a compound in TLC is always:",
        options: [
          "Greater than 1",
          "Between 0 and 1",
          "Equal to 1 for pure compounds",
          "Negative for polar compounds"
        ],
        correct: 1,
        explanation: "Rf values are always between 0 and 1 because a compound cannot travel further than the solvent front (Rf = 1 max)."
      },
      {
        text: "Which is the simplest and most direct evidence that two substances are identical?",
        options: [
          "They have the same colour",
          "Their melting points are both above 100°C",
          "The mixed melting point of the two substances shows no depression",
          "They react with the same reagents"
        ],
        correct: 2,
        explanation: "If the mixed melting point of two suspected identical compounds shows no depression (same sharp mp as each pure sample), they are the same compound."
      },
      {
        text: "Qualitative analysis of organic compounds aims to:",
        options: [
          "Determine the exact mass of each component",
          "Identify which elements and functional groups are present",
          "Determine the percentage purity",
          "Separate the compound from impurities"
        ],
        correct: 1,
        explanation: "Qualitative analysis identifies what elements and functional groups are present in a compound, without measuring exact quantities."
      },
      {
        text: "Chlorine in an organic compound gives a _______ precipitate with silver nitrate solution:",
        options: [
          "Yellow",
          "Pale yellow",
          "White",
          "Red"
        ],
        correct: 2,
        explanation: "AgCl (silver chloride) forms a white precipitate that is insoluble in dilute HNO3 but soluble in ammonia solution."
      },
      {
        text: "Which type of chromatography is commonly used for separating amino acids?",
        options: [
          "Gas chromatography",
          "Paper chromatography",
          "Vacuum distillation",
          "Steam distillation"
        ],
        correct: 1,
        explanation: "Paper chromatography and TLC are both commonly used for separating and identifying amino acids (which are non-volatile)."
      },
      {
        text: "During recrystallisation, what happens when the hot solution is cooled slowly?",
        options: [
          "Impurities crystallise first",
          "The desired pure compound crystallises, leaving impurities in solution",
          "Both compound and impurities crystallise together",
          "The solvent evaporates"
        ],
        correct: 1,
        explanation: "When cooled slowly, the desired compound crystallises out in a pure form because its solubility decreases more than that of trace impurities that remain in the mother liquor."
      },
      {
        text: "The partition of a solute between two immiscible solvents is described by:",
        options: [
          "Boyle's law",
          "The partition coefficient (distribution coefficient)",
          "Henry's law",
          "Raoult's law"
        ],
        correct: 1,
        explanation: "The partition (distribution) coefficient K = concentration in organic solvent / concentration in water. It is the basis of solvent extraction."
      },
      {
        text: "Why is activated charcoal sometimes added during recrystallisation?",
        options: [
          "To speed up crystallisation",
          "To adsorb coloured impurities from the solution",
          "To increase the solubility of the compound",
          "To lower the melting point"
        ],
        correct: 1,
        explanation: "Activated charcoal is added to the hot solution before filtering; its large surface area adsorbs coloured impurities, giving colourless crystals."
      },
      {
        text: "The analytical technique used to determine the molecular formula of an unknown organic compound is:",
        options: [
          "Recrystallisation",
          "Combustion analysis (elemental analysis)",
          "Steam distillation",
          "Sublimation"
        ],
        correct: 1,
        explanation: "Combustion (elemental) analysis burns the compound and measures the CO2 and H2O produced to find the percentages of C, H, and N, establishing the empirical and molecular formula."
      },
      {
        text: "In paper chromatography, the stationary phase is:",
        options: [
          "The organic solvent",
          "Water adsorbed on the cellulose fibres of the paper",
          "Air",
          "Silica gel"
        ],
        correct: 1,
        explanation: "In paper chromatography, the stationary phase is water held within the cellulose fibres of the paper; the mobile phase is the organic solvent mixture."
      }
    ]
  },

  /* ============================================================
     CHAPTER 3 — Isomerism
  ============================================================ */
  {
    number: 3,
    title: "Determination of Structures: Isomerism",
    questionLimit: 40,
    timeLimit: 15,
    summary: "Isomers are compounds with the same molecular formula but different structural arrangements. Structural (constitutional) isomers differ in the connectivity of atoms and include chain, position, functional group, chain-cycle, metamerism, and tautomerism. Stereoisomers have the same connectivity but different spatial arrangements; they include geometric (cis/trans or E/Z) isomers and optical isomers (enantiomers and diastereomers). A chiral centre (stereogenic centre) is a carbon bonded to four different groups.",
    keyPoints: [
      "Structural isomers: same formula, different connectivity (chain, position, functional group, chain-cycle, metamerism, tautomerism)",
      "Geometric isomers (cis/trans): restricted rotation about C=C; requires two different groups on each sp2 carbon",
      "E/Z notation: based on Cahn-Ingold-Prelog priority rules (Z = same priority groups on same side)",
      "Optical isomers: chiral centre (4 different groups on sp3 carbon); enantiomers are non-superimposable mirror images",
      "Enantiomers rotate plane-polarised light equally but in opposite directions (+/−)",
      "Diastereomers: stereoisomers that are not mirror images; different physical properties",
      "Meso compound: has chiral centres but is achiral due to internal plane of symmetry",
      "Maximum stereoisomers = 2ⁿ where n = number of chiral centres"
    ],
    pdfUrl: "",
    cbtUrl: "",
    questions: [
      {
        text: "Isomers are compounds that have:",
        options: [
          "The same structural formula",
          "The same molecular formula but different structural arrangements",
          "Different molecular formulas",
          "Identical physical and chemical properties"
        ],
        correct: 1,
        explanation: "Isomers share the same molecular formula but differ in the arrangement of atoms — either connectivity (structural) or spatial arrangement (stereoisomers)."
      },
      {
        text: "Chain isomers differ in:",
        options: [
          "The nature of their functional group",
          "The position of their functional group",
          "The arrangement of the carbon skeleton (chain branching)",
          "Their optical activity"
        ],
        correct: 2,
        explanation: "Chain (skeleton) isomers have the same molecular formula but differ in the bonding arrangement of the carbon chain — i.e., in the degree of branching."
      },
      {
        text: "Butanol and diethyl ether (C4H10O) are examples of:",
        options: [
          "Chain isomers",
          "Position isomers",
          "Functional group isomers",
          "Geometric isomers"
        ],
        correct: 2,
        explanation: "Butanol (an alcohol, −OH) and diethyl ether (an ether, −O−) have the same molecular formula C4H10O but different functional groups — they are functional group isomers."
      },
      {
        text: "1-bromopropane and 2-bromopropane are examples of:",
        options: [
          "Chain isomers",
          "Position isomers",
          "Functional group isomers",
          "Optical isomers"
        ],
        correct: 1,
        explanation: "They have the same molecular formula and functional group (Br), but the halogen is on different carbons — they are position isomers."
      },
      {
        text: "Geometric (cis/trans) isomerism occurs due to:",
        options: [
          "Rotation about a single C−C bond",
          "Restricted rotation about a C=C double bond",
          "The presence of a chiral centre",
          "Keto-enol equilibrium"
        ],
        correct: 1,
        explanation: "Geometric isomerism arises from restricted rotation about a double bond (or ring), requiring each doubly bonded carbon to have two different substituents."
      },
      {
        text: "In cis-but-2-ene, the two methyl groups are:",
        options: [
          "On opposite sides of the double bond",
          "On the same side of the double bond",
          "At right angles to each other",
          "Connected by a single bond"
        ],
        correct: 1,
        explanation: "In the cis isomer, the same groups (here, both CH3) are on the same side of the double bond."
      },
      {
        text: "A chiral centre (stereogenic centre) is a carbon atom bonded to:",
        options: [
          "Two identical groups",
          "Four identical groups",
          "Four different groups",
          "Three different groups"
        ],
        correct: 2,
        explanation: "A chiral (asymmetric) carbon is one bonded to four different atoms or groups, making it a stereogenic centre."
      },
      {
        text: "Enantiomers are stereoisomers that are:",
        options: [
          "Superimposable mirror images of each other",
          "Non-superimposable mirror images of each other",
          "Identical in all physical properties including optical rotation",
          "Different in connectivity"
        ],
        correct: 1,
        explanation: "Enantiomers are non-superimposable mirror images — like a left and right hand. They are identical in all physical properties except the direction they rotate plane-polarised light."
      },
      {
        text: "An optical isomer (enantiomer) rotates plane-polarised light. The one that rotates it to the right is designated:",
        options: ["(−) or levorotatory", "(+) or dextrorotatory", "meso", "racemic"],
        correct: 1,
        explanation: "The (+) enantiomer (or d-form) is dextrorotatory — it rotates plane-polarised light clockwise (to the right)."
      },
      {
        text: "A racemic mixture contains:",
        options: [
          "Only the (+) enantiomer",
          "Only the (−) enantiomer",
          "Equal amounts of (+) and (−) enantiomers",
          "A meso compound only"
        ],
        correct: 2,
        explanation: "A racemic (racemate) mixture contains equal amounts of both enantiomers; it shows zero net optical rotation."
      },
      {
        text: "A meso compound is one that:",
        options: [
          "Has no chiral centres",
          "Has chiral centres but is achiral due to an internal plane of symmetry",
          "Is always optically active",
          "Has identical physical properties to its enantiomer"
        ],
        correct: 1,
        explanation: "A meso compound contains chiral centres but possesses an internal plane of symmetry, making the molecule as a whole achiral and optically inactive."
      },
      {
        text: "How many stereoisomers does a compound with 3 chiral centres have (maximum)?",
        options: ["4", "6", "8", "16"],
        correct: 2,
        explanation: "The maximum number of stereoisomers = 2ⁿ where n = number of chiral centres. For n = 3: 2³ = 8."
      },
      {
        text: "Tautomers are a type of isomer in which two forms are:",
        options: [
          "In rapid equilibrium with each other by proton transfer",
          "Fixed and unable to interconvert",
          "Mirror images of each other",
          "Geometric isomers"
        ],
        correct: 0,
        explanation: "Tautomers (e.g., keto-enol tautomers) rapidly interconvert through a proton transfer; the two forms are in dynamic equilibrium."
      },
      {
        text: "Keto-enol tautomerism involves:",
        options: [
          "Rotation about a double bond",
          "Migration of a proton from carbon to oxygen (or vice versa)",
          "Formation of a mirror image",
          "Change in molecular formula"
        ],
        correct: 1,
        explanation: "In keto-enol tautomerism, a proton migrates from the α-carbon of the keto form to the oxygen, giving the enol form."
      },
      {
        text: "Which of the following can exhibit geometric (cis/trans) isomerism?",
        options: [
          "CH3CH3",
          "CH2=CH2",
          "CH3CH=CHCH3",
          "CH2=CH2 (ethene)"
        ],
        correct: 2,
        explanation: "CH3CH=CHCH3 (but-2-ene) has two different groups on each doubly bonded carbon (CH3 and H), allowing cis and trans isomers. Ethene does not (identical groups)."
      },
      {
        text: "Diastereomers are stereoisomers that:",
        options: [
          "Are mirror images of each other",
          "Are not mirror images of each other",
          "Have identical physical properties",
          "Differ only in connectivity"
        ],
        correct: 1,
        explanation: "Diastereomers are stereoisomers that are not enantiomers — they are not mirror images and have different physical properties (unlike enantiomers)."
      },
      {
        text: "An optical isomer has all of the following EXCEPT:",
        options: [
          "A chiral centre",
          "The ability to rotate plane-polarised light",
          "A mirror image",
          "Is superimposable on its mirror image"
        ],
        correct: 3,
        explanation: "An optical isomer (enantiomer) is NOT superimposable on its mirror image — that is the defining characteristic of chirality."
      },
      {
        text: "The E/Z nomenclature for geometric isomers is based on:",
        options: [
          "Whether the compound rotates light left or right",
          "Cahn-Ingold-Prelog (CIP) priority rules for the substituents",
          "The molecular weight of substituents",
          "The alphabetical order of substituents"
        ],
        correct: 1,
        explanation: "E/Z assignments use CIP priority rules: Z (zusammen = together) when higher-priority groups are on the same side; E (entgegen = opposite) when on opposite sides."
      },
      {
        text: "Hexene and 2-hexene are examples of:",
        options: [
          "Functional group isomers",
          "Chain isomers",
          "Position isomers",
          "Optical isomers"
        ],
        correct: 2,
        explanation: "1-hexene and 2-hexene have the same molecular formula and functional group (C=C) but differ in the position of the double bond — position isomers."
      },
      {
        text: "Cyclobutane (C4H8) and but-1-ene (C4H8) are examples of:",
        options: [
          "Position isomers",
          "Chain-cycle isomers",
          "Functional group isomers",
          "Geometric isomers"
        ],
        correct: 1,
        explanation: "A cycloalkane and an alkene with the same formula are chain-cycle isomers — one is cyclic, the other is an open chain."
      },
      {
        text: "Metamerism is a type of isomerism found in:",
        options: [
          "Alkenes",
          "Compounds of the same functional group class where alkyl groups on either side of the functional group differ",
          "Optical isomers",
          "Geometric isomers"
        ],
        correct: 1,
        explanation: "Metamerism occurs in compounds with the same functional group but different alkyl groups attached on either side (e.g., CH3OCH2CH3 vs CH3CH2OCH3 — but these are the same compound; true examples involve longer chains)."
      },
      {
        text: "Which compound shows optical isomerism?",
        options: [
          "CH3CH2CH2CH3",
          "CH3CH(Cl)CH2CH3",
          "CH3CH2CH3",
          "CH2=CH2"
        ],
        correct: 1,
        explanation: "CH3CH(Cl)CH2CH3 (2-chlorobutane) has a chiral centre at C2 (bonded to CH3, Cl, H, and CH2CH3 — four different groups), giving optical isomers."
      },
      {
        text: "How many structural isomers can be drawn for C5H12?",
        options: ["2", "3", "4", "5"],
        correct: 1,
        explanation: "C5H12 has 3 structural isomers: pentane (n-pentane), 2-methylbutane (isopentane), and 2,2-dimethylpropane (neopentane)."
      },
      {
        text: "The compound 2-chloro-2-methylpropane will NOT show optical activity because:",
        options: [
          "It contains chlorine",
          "Its C2 carbon is bonded to three methyl groups (not four different groups)",
          "It is a tertiary compound",
          "It has no double bonds"
        ],
        correct: 1,
        explanation: "2-chloro-2-methylpropane [(CH3)3CCl] has C2 bonded to three identical methyl groups — C2 is not a chiral centre, so it shows no optical activity."
      },
      {
        text: "Which of the following is a necessary condition for geometric (cis/trans) isomerism?",
        options: [
          "Presence of a chiral centre",
          "Each sp2 carbon of the double bond must carry two different substituents",
          "The compound must be cyclic",
          "The compound must have four different groups"
        ],
        correct: 1,
        explanation: "Geometric isomerism requires that each carbon of the C=C (or ring junction) carries two different substituents; if either carbon has two identical groups, no geometric isomers exist."
      },
      {
        text: "Lactic acid (2-hydroxypropanoic acid) is optically active because:",
        options: [
          "It contains an OH group",
          "Its C2 has four different substituents: H, OH, CH3, and COOH",
          "It is a carboxylic acid",
          "It has two carbon atoms"
        ],
        correct: 1,
        explanation: "C2 of lactic acid is bonded to H, OH, CH3, and COOH — four different groups — making it a chiral centre and the molecule optically active."
      },
      {
        text: "Functional group isomers of C3H6O include:",
        options: [
          "Propan-1-ol and propan-2-ol",
          "Propanal and propan-2-one",
          "Propanoic acid and methyl ethanoate",
          "Propane and cyclopropane"
        ],
        correct: 1,
        explanation: "Propanal (CH3CH2CHO, an aldehyde) and propan-2-one (CH3COCH3, a ketone) have the same formula C3H6O but different functional groups — they are functional group isomers."
      },
      {
        text: "The maximum number of stereoisomers of glucose (which has 4 chiral centres) is:",
        options: ["8", "16", "4", "32"],
        correct: 1,
        explanation: "With 4 chiral centres, the maximum number of stereoisomers = 2⁴ = 16."
      },
      {
        text: "In the Z configuration (using CIP rules):",
        options: [
          "Higher-priority groups are on opposite sides of the double bond",
          "Higher-priority groups are on the same side of the double bond",
          "Lower-priority groups are on the same side",
          "The compound is always cis"
        ],
        correct: 1,
        explanation: "Z (from German 'zusammen' = together) means the two higher-priority substituents are on the same side of the double bond."
      },
      {
        text: "Cyclopentane and pent-1-ene (both C5H10) are related as:",
        options: [
          "Enantiomers",
          "Geometric isomers",
          "Chain-cycle isomers",
          "Position isomers"
        ],
        correct: 2,
        explanation: "Cyclopentane (cyclic) and pent-1-ene (open-chain alkene) share the formula C5H10; they are chain-cycle isomers."
      },
      {
        text: "The phenomenon of tautomerism is most commonly observed as:",
        options: [
          "Aldehyde-ketone equilibrium",
          "Keto-enol equilibrium",
          "Acid-alcohol equilibrium",
          "Amine-amide equilibrium"
        ],
        correct: 1,
        explanation: "Keto-enol tautomerism is the most common form, where the keto form (carbonyl) and enol form (vinyl alcohol) interconvert rapidly by proton migration."
      },
      {
        text: "2-methylpropane (isobutane) and butane are:",
        options: [
          "Position isomers",
          "Chain isomers",
          "Functional group isomers",
          "Enantiomers"
        ],
        correct: 1,
        explanation: "Butane (straight chain) and 2-methylpropane (branched) have the same molecular formula C4H10 but different carbon skeletons — they are chain isomers."
      },
      {
        text: "Which of the following pairs are enantiomers?",
        options: [
          "n-pentane and 2-methylbutane",
          "But-1-ene and but-2-ene",
          "R-2-bromobutane and S-2-bromobutane",
          "Propanal and propan-2-one"
        ],
        correct: 2,
        explanation: "R-2-bromobutane and S-2-bromobutane are non-superimposable mirror images at the same chiral centre — they are enantiomers."
      },
      {
        text: "For a molecule to exhibit chirality, it must:",
        options: [
          "Have a plane of symmetry",
          "Contain only carbon and hydrogen",
          "Lack any plane, axis, or centre of symmetry",
          "Have a double bond"
        ],
        correct: 2,
        explanation: "A chiral molecule has no plane of symmetry, no centre of inversion, and no improper rotation axis — it is non-superimposable on its mirror image."
      },
      {
        text: "Which of the following has the greatest number of structural isomers?",
        options: ["C3H8", "C4H10", "C5H12", "C2H6"],
        correct: 2,
        explanation: "As molecular formula grows, the number of structural isomers increases dramatically: C5H12 has 3 isomers vs C4H10 (2) and C3H8 (1)."
      },
      {
        text: "A compound that is superimposable on its mirror image is:",
        options: ["Chiral", "Achiral", "A racemate", "Optically active"],
        correct: 1,
        explanation: "An achiral compound is superimposable on its mirror image; it cannot exist as enantiomers and has no optical activity."
      },
      {
        text: "The isomer of ethanol (C2H5OH) that has the same molecular formula but a different functional group is:",
        options: ["Methanol", "Propanol", "Dimethyl ether", "Diethyl ether"],
        correct: 2,
        explanation: "Dimethyl ether (CH3OCH3) has the formula C2H6O, same as ethanol — they are functional group isomers (alcohol vs ether)."
      },
      {
        text: "In stereochemistry, a pair of stereoisomers that are not mirror images of each other are called:",
        options: ["Enantiomers", "Diastereomers", "Constitutional isomers", "Tautomers"],
        correct: 1,
        explanation: "Diastereomers are stereoisomers that are not mirror images — they differ in the configuration at one or more (but not all) stereocentres."
      },
      {
        text: "The interconversion between the keto and enol forms of acetone is an example of:",
        options: ["Geometric isomerism", "Tautomerism", "Optical isomerism", "Chain isomerism"],
        correct: 1,
        explanation: "The keto (CH3COCH3) and enol (CH3C(OH)=CH2) forms of acetone interconvert by proton migration — this is keto-enol tautomerism."
      },
      {
        text: "Which property distinguishes enantiomers from each other?",
        options: [
          "Melting point",
          "Boiling point",
          "Direction of rotation of plane-polarised light",
          "Solubility in water"
        ],
        correct: 2,
        explanation: "Enantiomers are identical in nearly all physical properties but rotate plane-polarised light in opposite directions (+/−)."
      },
      {
        text: "Which of these is a chain-cycle isomer pair?",
        options: [
          "1-butene and 2-butene",
          "Cyclopropane and propene",
          "Methanol and dimethyl ether",
          "Butane and 2-methylpropane"
        ],
        correct: 1,
        explanation: "Cyclopropane (C3H6, cyclic) and propene (C3H6, open chain with double bond) are chain-cycle isomers — same formula, one cyclic and one acyclic."
      },
      {
        text: "How many chiral centres does 2-bromobutane have?",
        options: ["0", "1", "2", "3"],
        correct: 1,
        explanation: "In 2-bromobutane (CH3CHBrCH2CH3), C2 has four different groups: H, Br, CH3, and CH2CH3 — one chiral centre."
      }
    ]
  },

  /* ============================================================
     CHAPTER 4 — Electronic Theory in Organic Chemistry
  ============================================================ */
  {
    number: 4,
    title: "Electronic Theory in Organic Chemistry",
    questionLimit: 40,
    timeLimit: 15,
    summary: "Electronic theory explains organic reactions through bond polarity, resonance, and electron movement. Carbon uses hybridisation (sp, sp2, sp3) to form different types of bonds. Lewis structures show lone pairs and formal charges. Reactive intermediates include carbocations (electrophiles), carbanions (nucleophiles), free radicals, and carbenes. Inductive and resonance effects explain the reactivity and stability of organic compounds.",
    keyPoints: [
      "sp3 hybridisation: 4 equivalent hybrid orbitals, tetrahedral geometry (109.5°), e.g. methane, alkanes",
      "sp2 hybridisation: 3 hybrid orbitals + 1 unhybridised p orbital, trigonal planar (120°), e.g. alkenes, carbonyls",
      "sp hybridisation: 2 hybrid orbitals, linear geometry (180°), e.g. alkynes, CO2",
      "Lewis structure: shows all valence electrons; formal charge = valence e⁻ − lone pair e⁻ − ½(bonding e⁻)",
      "Carbocation: positively charged carbon; stability order: 3° > 2° > 1° > methyl",
      "Nucleophile: electron-rich species that donates electrons (e.g. OH⁻, NH3, CN⁻)",
      "Electrophile: electron-deficient species that accepts electrons (e.g. H⁺, Lewis acids)",
      "Resonance: delocalisation of π electrons over two or more atoms; resonance structures differ only in electron arrangement"
    ],
    pdfUrl: "",
    cbtUrl: "",
    questions: [
      {
        text: "The hybridisation of carbon in methane (CH4) is:",
        options: ["sp", "sp2", "sp3", "spd"],
        correct: 2,
        explanation: "In methane, carbon is sp3 hybridised, forming 4 equivalent σ bonds in a tetrahedral geometry with bond angles of 109.5°."
      },
      {
        text: "The hybridisation of carbon atoms in ethene (CH2=CH2) is:",
        options: ["sp", "sp2", "sp3", "sp3d"],
        correct: 1,
        explanation: "Each carbon in ethene is sp2 hybridised: three sp2 orbitals form σ bonds and one unhybridised p orbital forms the π bond of the double bond."
      },
      {
        text: "The hybridisation of carbon in ethyne (HC≡CH) is:",
        options: ["sp3", "sp2", "sp", "sp3d2"],
        correct: 2,
        explanation: "In alkynes, each carbon is sp hybridised: two sp orbitals form σ bonds (linear, 180°) and two unhybridised p orbitals form two π bonds."
      },
      {
        text: "Diamond has which hybridisation?",
        options: ["sp", "sp2", "sp3", "spd"],
        correct: 2,
        explanation: "In diamond, each carbon atom is sp3 hybridised and bonded to four other carbon atoms in a rigid tetrahedral network."
      },
      {
        text: "Graphite has which hybridisation?",
        options: ["sp3", "sp2", "sp", "spd"],
        correct: 1,
        explanation: "In graphite, carbon is sp2 hybridised; the remaining p orbital on each carbon forms delocalized π bonds within each layer."
      },
      {
        text: "The geometry around an sp3 hybridised carbon is:",
        options: ["Linear", "Trigonal planar", "Tetrahedral", "Trigonal bipyramidal"],
        correct: 2,
        explanation: "sp3 hybridisation gives four equivalent bonds arranged tetrahedrally around the carbon, with bond angles of 109.5°."
      },
      {
        text: "The bond angle in an sp2 hybridised carbon (as in ethene) is approximately:",
        options: ["90°", "109.5°", "120°", "180°"],
        correct: 2,
        explanation: "sp2 carbons adopt a trigonal planar geometry with bond angles of approximately 120°."
      },
      {
        text: "A carbocation is:",
        options: [
          "A carbon atom with a negative charge",
          "A carbon atom with a positive charge and an empty orbital",
          "A carbon atom with an unpaired electron",
          "A carbon atom with a full octet and no charge"
        ],
        correct: 1,
        explanation: "A carbocation is a carbon species with a positive charge (a carbon atom with only 6 valence electrons and an empty p orbital)."
      },
      {
        text: "The stability order of carbocations is:",
        options: [
          "Methyl > 1° > 2° > 3°",
          "3° > 2° > 1° > methyl",
          "1° > 2° > 3° > methyl",
          "All equally stable"
        ],
        correct: 1,
        explanation: "Carbocations are stabilised by adjacent alkyl groups (hyperconjugation and induction); therefore 3° > 2° > 1° > methyl in stability."
      },
      {
        text: "Carbocations are stabilised by adjacent groups that:",
        options: [
          "Withdraw electrons from the carbocation",
          "Donate electrons to the carbocation",
          "Have no interaction with the carbocation",
          "Form double bonds with the carbocation"
        ],
        correct: 1,
        explanation: "Electron-donating groups (alkyl groups) stabilise carbocations by donating electron density, dispersing the positive charge."
      },
      {
        text: "A nucleophile is a species that:",
        options: [
          "Accepts a pair of electrons (Lewis acid)",
          "Donates a pair of electrons to form a bond (Lewis base)",
          "Has a positive charge",
          "Does not involve electrons"
        ],
        correct: 1,
        explanation: "A nucleophile ('nucleus lover') is an electron-rich species that donates an electron pair to an electrophile to form a covalent bond."
      },
      {
        text: "Which of the following is a nucleophile?",
        options: ["H⁺", "BF3", "AlCl3", "CN⁻"],
        correct: 3,
        explanation: "CN⁻ (cyanide ion) is an electron-rich nucleophile with a lone pair available to donate. H⁺, BF3, and AlCl3 are electrophiles."
      },
      {
        text: "An electrophile is a species that:",
        options: [
          "Donates electrons",
          "Accepts a pair of electrons from a nucleophile",
          "Is always negatively charged",
          "Only reacts with metals"
        ],
        correct: 1,
        explanation: "An electrophile ('electron lover') is an electron-deficient species that accepts an electron pair from a nucleophile."
      },
      {
        text: "Which of the following is an electrophile?",
        options: ["OH⁻", "NH3", "H2O", "BF3"],
        correct: 3,
        explanation: "BF3 (boron trifluoride) is a Lewis acid electrophile — boron has only 6 valence electrons and accepts an electron pair."
      },
      {
        text: "The formal charge on an atom in a Lewis structure is calculated as:",
        options: [
          "Number of valence electrons in a free atom × number of bonds",
          "Valence electrons − (lone pair electrons + ½ bonding electrons)",
          "Total electrons in the molecule / number of atoms",
          "Number of bonds × 2"
        ],
        correct: 1,
        explanation: "Formal charge = (valence electrons in free atom) − (non-bonding electrons) − ½(bonding electrons)."
      },
      {
        text: "The Lewis structure of a chlorine atom in Cl2 shows how many lone pairs per chlorine?",
        options: ["1", "2", "3", "4"],
        correct: 2,
        explanation: "Chlorine has 7 valence electrons; in Cl2, each Cl forms one bond (using 1 electron) and has 3 lone pairs (6 non-bonding electrons)."
      },
      {
        text: "Resonance structures differ from each other only in:",
        options: [
          "The positions of atoms",
          "The molecular formula",
          "The arrangement of electrons",
          "The hybridisation of all atoms"
        ],
        correct: 2,
        explanation: "Resonance structures (canonical forms) have the same arrangement of atoms but differ in the positions of electrons (π bonds and lone pairs)."
      },
      {
        text: "In the inductive effect, electron withdrawal is due to:",
        options: [
          "Resonance in π system",
          "The electronegativity difference along σ bonds causing electron drift",
          "Radical formation",
          "Hyperconjugation"
        ],
        correct: 1,
        explanation: "The inductive effect operates through σ bonds: electronegative atoms (like Cl, F) withdraw electron density along the chain via their electronegativity."
      },
      {
        text: "Which of the following is a free radical?",
        options: ["H⁺", "CH3⁻", "CH3•", "CH3⁺"],
        correct: 2,
        explanation: "A free radical has one unpaired electron. CH3• (methyl radical) is formed by homolytic cleavage of a C−H bond."
      },
      {
        text: "Homolytic bond cleavage produces:",
        options: [
          "Ions (cations and anions)",
          "Two species each with one unpaired electron (radicals)",
          "Neutral molecules only",
          "Carbanions only"
        ],
        correct: 1,
        explanation: "Homolysis cleaves a bond so each atom retains one electron, producing two radicals."
      },
      {
        text: "Heterolytic bond cleavage produces:",
        options: [
          "Two radicals",
          "One cation and one anion",
          "Only neutral molecules",
          "Electron pairs shared equally"
        ],
        correct: 1,
        explanation: "Heterolysis cleaves a bond so one atom retains both electrons, producing an ion pair (cation and anion)."
      },
      {
        text: "VSEPR theory is used to predict:",
        options: [
          "The colour of compounds",
          "The molecular geometry based on electron pair repulsion",
          "Reaction rates",
          "Optical activity"
        ],
        correct: 1,
        explanation: "The Valence Shell Electron Pair Repulsion (VSEPR) theory predicts molecular shapes based on the repulsion between electron pairs around the central atom."
      },
      {
        text: "The Lewis structure of water (H2O) shows the oxygen atom with how many lone pairs?",
        options: ["0", "1", "2", "3"],
        correct: 2,
        explanation: "Oxygen has 6 valence electrons; in H2O it forms 2 bonds (using 2 electrons) and has 2 lone pairs (4 non-bonding electrons)."
      },
      {
        text: "A carbanion is a species with:",
        options: [
          "A positively charged carbon",
          "A negatively charged carbon with a lone pair",
          "An uncharged carbon radical",
          "A double bond to oxygen"
        ],
        correct: 1,
        explanation: "A carbanion has a negatively charged carbon with a lone pair of electrons (the carbon has 8 electrons including the lone pair)."
      },
      {
        text: "The Markovnikov rule states that in addition to HX across a double bond, the hydrogen adds to the carbon with:",
        options: [
          "The least number of hydrogen atoms",
          "The greatest number of hydrogen atoms already attached",
          "An equal number of hydrogen atoms",
          "No hydrogen atoms"
        ],
        correct: 1,
        explanation: "Markovnikov's rule: in addition of HX to an alkene, H attaches to the carbon that already has more hydrogen atoms (forming the more stable carbocation intermediate)."
      },
      {
        text: "Benzene is resistant to addition reactions because:",
        options: [
          "It has no pi bonds",
          "Its double bonds are isolated and unreactive",
          "Its delocalized π electrons provide extra stability (aromatic stabilisation)",
          "Benzene is a gas at room temperature"
        ],
        correct: 2,
        explanation: "Benzene's 6 delocalized π electrons give it extra stability (aromatic stabilisation energy ~150 kJ/mol); addition reactions would disrupt this and are thermodynamically unfavourable."
      },
      {
        text: "In an SN1 reaction, the rate-determining step involves:",
        options: [
          "Attack of the nucleophile",
          "Loss of the leaving group to form a carbocation",
          "Formation of the product",
          "Proton transfer"
        ],
        correct: 1,
        explanation: "In SN1 (substitution nucleophilic unimolecular), the slow step is ionisation to form a carbocation; the nucleophile then attacks rapidly."
      },
      {
        text: "Which of the following has the greatest stability as a carbocation?",
        options: [
          "CH3⁺ (methyl carbocation)",
          "CH3CH2⁺ (ethyl/1° carbocation)",
          "(CH3)2CH⁺ (isopropyl/2° carbocation)",
          "(CH3)3C⁺ (tert-butyl/3° carbocation)"
        ],
        correct: 3,
        explanation: "The tertiary carbocation (CH3)3C⁺ is most stable because three alkyl groups donate electron density to the positively charged carbon."
      },
      {
        text: "The concept of electronegativity is important in organic chemistry because:",
        options: [
          "It determines molecular mass",
          "More electronegative atoms create bond polarity and influence reactivity",
          "It predicts crystal structure",
          "It measures the size of atoms"
        ],
        correct: 1,
        explanation: "Electronegativity differences between atoms create polar bonds, making certain atoms sites for nucleophilic or electrophilic attack."
      },
      {
        text: "A σ (sigma) bond is formed by:",
        options: [
          "Lateral overlap of parallel p orbitals",
          "End-to-end overlap of orbitals along the bond axis",
          "Delocalisation of electrons",
          "Ionic interaction"
        ],
        correct: 1,
        explanation: "A σ bond is formed by end-to-end (head-on) overlap of orbitals along the bond axis; it allows free rotation about the bond."
      },
      {
        text: "A π (pi) bond is formed by:",
        options: [
          "End-to-end overlap",
          "Lateral (side-by-side) overlap of parallel p orbitals",
          "Electrostatic attraction",
          "Ionic interaction"
        ],
        correct: 1,
        explanation: "A π bond is formed by lateral (sideways) overlap of parallel p orbitals above and below the bond axis; rotation about a π bond is restricted."
      },
      {
        text: "The inductive effect of an electron-withdrawing group on a carboxylic acid:",
        options: [
          "Decreases acidity",
          "Has no effect on acidity",
          "Increases acidity by stabilising the carboxylate anion",
          "Converts it to an ester"
        ],
        correct: 2,
        explanation: "Electron-withdrawing groups (like −Cl) withdraw electron density by induction, stabilising the negative charge of the carboxylate anion and thus increasing the acidity of the COOH."
      },
      {
        text: "Chloroacetic acid (ClCH2COOH) is more acidic than acetic acid (CH3COOH) due to:",
        options: [
          "Resonance effect",
          "Inductive effect of the chlorine atom",
          "Greater molecular weight",
          "Steric effect"
        ],
        correct: 1,
        explanation: "The electronegative Cl atom exerts an electron-withdrawing inductive effect, dispersing the negative charge on the carboxylate and stabilising it, thus increasing acidity."
      },
      {
        text: "A lone pair of electrons on nitrogen in ammonia (NH3) makes it act as a:",
        options: ["Electrophile", "Lewis acid", "Nucleophile/Lewis base", "Free radical"],
        correct: 2,
        explanation: "The lone pair on nitrogen in NH3 can be donated to electron-deficient species; NH3 is a nucleophile (Lewis base)."
      },
      {
        text: "Which of the following is NOT a reactive intermediate in organic chemistry?",
        options: ["Carbocation", "Carbanion", "Free radical", "Alkane"],
        correct: 3,
        explanation: "Alkanes are stable compounds, not reactive intermediates. Carbocations, carbanions, and free radicals are all reactive intermediates."
      },
      {
        text: "Hyperconjugation involves the interaction of:",
        options: [
          "Two π bonds",
          "σ C−H bonds adjacent to a p orbital or π system",
          "Lone pairs with σ bonds",
          "Two lone pairs on adjacent atoms"
        ],
        correct: 1,
        explanation: "Hyperconjugation is the delocalisation of electrons from adjacent σ C−H bonds into an empty p orbital (carbocation) or π system, stabilising the species."
      },
      {
        text: "The VSEPR prediction for CO2 (central carbon, 2 double bonds, no lone pairs) gives:",
        options: ["Bent", "Trigonal planar", "Tetrahedral", "Linear"],
        correct: 3,
        explanation: "CO2 has 2 regions of electron density around C (two double bonds); VSEPR predicts linear geometry (180°)."
      },
      {
        text: "The most stable form of a resonance structure is the one with:",
        options: [
          "The most formal charges",
          "Negative formal charge on the more electronegative atom and minimum formal charges",
          "Positive charge on electronegative atoms",
          "Maximum number of bonds broken"
        ],
        correct: 1,
        explanation: "The most stable (most contributing) resonance structure has the fewest formal charges, with any negative charge on the most electronegative atom."
      },
      {
        text: "The bond angle in acetylene (HC≡CH) is:",
        options: ["90°", "109.5°", "120°", "180°"],
        correct: 3,
        explanation: "In alkynes (sp hybridisation), the C−C≡C−H arrangement is linear with bond angles of 180°."
      }
    ]
  },

  /* ============================================================
     CHAPTER 5 — Hydrocarbons (Alkanes, Alkenes, Alkynes, Aromatics)
  ============================================================ */
  {
    number: 5,
    title: "Hydrocarbons: Alkanes, Alkenes, Alkynes & Aromatics",
    questionLimit: 40,
    timeLimit: 15,
    summary: "Hydrocarbons contain only carbon and hydrogen. Alkanes (CnH2n+2) are saturated and undergo substitution and combustion reactions. Alkenes (CnH2n) and alkynes (CnH2n−2) are unsaturated and undergo addition reactions including hydrogenation, halogenation, and Markovnikov addition of HX. Benzene and aromatic compounds undergo electrophilic aromatic substitution (halogenation, nitration, sulfonation, Friedel-Crafts reactions). Cycloalkanes form ring systems.",
    keyPoints: [
      "Alkanes: CnH2n+2; combustion and free-radical substitution (halogenation with light)",
      "Alkenes: CnH2n; addition of H2 (hydrogenation), Br2, HX (Markovnikov), H2O (hydration)",
      "Alkynes: CnH2n−2; similar to alkenes but two additions possible; terminal alkynes acidic (pKa ~25)",
      "Benzene: does not decolourise Br2/H2O; undergoes electrophilic aromatic substitution (EAS)",
      "Friedel-Crafts: acylation gives ketone; alkylation gives alkylbenzene; both need Lewis acid catalyst (AlCl3)",
      "Halogenation of benzene: Ar−H + Cl2 →(AlCl3) Ar−Cl + HCl",
      "Cycloalkanes: ring strain in cyclopropane and cyclobutane; cyclohexane most stable (chair conformation)",
      "Ozonolysis: alkene reacts with O3 followed by reductive (Zn/H2O) or oxidative workup to give carbonyls/acids"
    ],
    pdfUrl: "",
    cbtUrl: "",
    questions: [
      {
        text: "The general formula for alkanes is:",
        options: ["CnH2n", "CnH2n+2", "CnH2n−2", "CnH2n+1OH"],
        correct: 1,
        explanation: "Alkanes (saturated hydrocarbons) have the general formula CnH2n+2."
      },
      {
        text: "Which of the following will NOT give an addition reaction?",
        options: ["Propene", "Propyne", "Propane", "Benzene does not give addition in normal conditions"],
        correct: 2,
        explanation: "Propane is a saturated alkane; it cannot undergo addition reactions. Alkenes, alkynes, and (with forcing conditions) benzene can undergo addition."
      },
      {
        text: "Alkanes react with halogens in the presence of UV light by:",
        options: ["Addition", "Elimination", "Free-radical substitution", "Nucleophilic substitution"],
        correct: 2,
        explanation: "Alkanes react with halogens (e.g., Cl2) under UV light via a free-radical chain mechanism: initiation, propagation, termination."
      },
      {
        text: "The product of the complete combustion of a hydrocarbon is:",
        options: ["CO + H2O", "CO2 + H2O", "CO2 + H2", "C + H2O"],
        correct: 1,
        explanation: "Complete combustion of hydrocarbons in excess oxygen produces CO2 and H2O."
      },
      {
        text: "Ethene (CH2=CH2) reacts with HBr according to Markovnikov's rule to give:",
        options: [
          "1,2-dibromoethane",
          "Bromoethane (CH3CH2Br)",
          "1,1-dibromoethane",
          "Ethanol"
        ],
        correct: 1,
        explanation: "Ethene + HBr gives bromoethane (CH3CH2Br). For ethene specifically (symmetrical), both ends are equivalent, giving one product."
      },
      {
        text: "The addition of water (hydration) to propene in the presence of H2SO4 gives:",
        options: [
          "1-propanol (anti-Markovnikov)",
          "2-propanol (Markovnikov product)",
          "Propanoic acid",
          "Propanal"
        ],
        correct: 1,
        explanation: "Acid-catalysed hydration of propene follows Markovnikov's rule: H⁺ adds to C1 (more H's), giving a secondary carbocation at C2, then OH⁻ attacks → 2-propanol."
      },
      {
        text: "Hydroboration-oxidation of alkenes gives:",
        options: [
          "Markovnikov alcohol",
          "Anti-Markovnikov alcohol",
          "Carboxylic acid",
          "Aldehyde"
        ],
        correct: 1,
        explanation: "Hydroboration (BH3, then H2O2/NaOH) is anti-Markovnikov and syn addition, placing the OH on the less-substituted carbon."
      },
      {
        text: "Benzene does NOT decolourise bromine water because:",
        options: [
          "Benzene is a gas",
          "Benzene lacks the reactivity of a simple alkene; it undergoes substitution, not addition, with bromine",
          "Bromine does not react with carbon",
          "Benzene has no double bonds at all"
        ],
        correct: 1,
        explanation: "Benzene's aromatic stability means it prefers EAS (substitution, needing a Lewis acid catalyst) over addition; it does not react with Br2(aq) and so does not decolourise it."
      },
      {
        text: "Friedel-Crafts acylation of benzene produces:",
        options: [
          "An alkylbenzene",
          "A nitrobenzene",
          "An aromatic ketone",
          "Phenol"
        ],
        correct: 2,
        explanation: "Friedel-Crafts acylation introduces an acyl group (RCO−) onto benzene, forming an aromatic ketone (e.g., benzene + CH3COCl → acetophenone)."
      },
      {
        text: "The catalyst used in Friedel-Crafts reactions is:",
        options: ["NaOH", "Concentrated H2SO4", "Anhydrous AlCl3 (Lewis acid)", "Pd/C"],
        correct: 2,
        explanation: "Anhydrous AlCl3 (a Lewis acid) is the classic catalyst for Friedel-Crafts alkylation and acylation."
      },
      {
        text: "Ozonolysis of an alkene followed by reductive workup (Zn/H2O) gives:",
        options: [
          "Carboxylic acids",
          "Aldehydes and/or ketones",
          "Alcohols",
          "Alkanes"
        ],
        correct: 1,
        explanation: "Reductive ozonolysis (O3 then Zn/H2O) cleaves the C=C double bond to give aldehydes and/or ketones."
      },
      {
        text: "Ozonolysis of cyclopentene gives:",
        options: [
          "Cyclopentanone",
          "Two molecules of formaldehyde",
          "Pentanedial (one product — a dialdehyde)",
          "Cyclopentadiene"
        ],
        correct: 2,
        explanation: "Ozonolysis of cyclopentene opens the ring, giving one molecule of pentanedial (OHC−(CH2)3−CHO, glutaraldehyde)."
      },
      {
        text: "Which of the following alkynes is acidic enough to react with NaNH2?",
        options: [
          "2-butyne (internal alkyne)",
          "But-1-yne (terminal alkyne)",
          "Benzene",
          "Propene"
        ],
        correct: 1,
        explanation: "Terminal alkynes (R−C≡C−H) have acidic protons (pKa ~25) and react with NaNH2 (a strong base) to form sodium acetylide salts."
      },
      {
        text: "The reaction of 1-butyne with NaNH2 gives:",
        options: ["CH3CH2C≡CNH2", "CH3CH2C≡CNa", "CH3CH2CH=CH2", "CH3CH2CH2CH3"],
        correct: 1,
        explanation: "NaNH2 deprotonates the terminal alkyne: CH3CH2C≡CH + NaNH2 → CH3CH2C≡CNa + NH3."
      },
      {
        text: "Cyclopropane is the most reactive cycloalkane because:",
        options: [
          "It has the most hydrogen atoms",
          "It has significant ring strain due to the nearly 60° bond angles (vs ideal 109.5°)",
          "It is a gas at room temperature",
          "It contains a double bond"
        ],
        correct: 1,
        explanation: "Cyclopropane's internal angles (~60°) are far from the ideal tetrahedral angle (109.5°), causing high angle strain that makes it unusually reactive for a cycloalkane."
      },
      {
        text: "The reaction of benzene + Cl2 in the presence of anhydrous AlCl3 gives:",
        options: [
          "Addition product 1,2-dichlorocyclohexane",
          "Chlorobenzene + HCl",
          "Benzene dichloride",
          "No reaction"
        ],
        correct: 1,
        explanation: "With AlCl3 catalyst, Cl2 reacts with benzene by EAS: C6H6 + Cl2 → C6H5Cl + HCl (chlorobenzene)."
      },
      {
        text: "An ortho/para-directing group in electrophilic aromatic substitution is:",
        options: ["−NO2", "−COOH", "−NH2", "−SO3H"],
        correct: 2,
        explanation: "−NH2 (amino group) is an activating, ortho/para-director. −NO2, −COOH, and −SO3H are deactivating meta-directors."
      },
      {
        text: "A meta-directing group deactivates the ring and directs incoming electrophiles to the meta position. Which is a meta-director?",
        options: ["−OH", "−CH3", "−NO2", "−Cl"],
        correct: 2,
        explanation: "The nitro group (−NO2) is an electron-withdrawing deactivating group and a meta-director in EAS."
      },
      {
        text: "Hydrogenation of benzene requires more forcing conditions than hydrogenation of cyclohexene because:",
        options: [
          "Benzene has no pi bonds",
          "Benzene's aromatic stabilisation (delocalisation energy ~150 kJ/mol) must be overcome",
          "Hydrogen does not react with ring compounds",
          "Benzene has a higher boiling point"
        ],
        correct: 1,
        explanation: "Benzene's aromatic stability (resonance energy) means that addition (which would break aromaticity) requires high pressure, temperature, and a metal catalyst (Pt, Pd, Ni)."
      },
      {
        text: "Which of the following is the product of reacting ethene with Br2 in CCl4?",
        options: [
          "Bromoethane",
          "1,2-dibromoethane",
          "1,1-dibromoethane",
          "Ethane"
        ],
        correct: 1,
        explanation: "Br2 adds across the double bond of ethene: CH2=CH2 + Br2 → BrCH2CH2Br (1,2-dibromoethane, ethylene dibromide)."
      },
      {
        text: "The product of the reaction of propyne with 2 equivalents of HBr is:",
        options: [
          "2-bromopropene",
          "1,1-dibromopropane",
          "2,2-dibromopropane",
          "1,2-dibromopropane"
        ],
        correct: 2,
        explanation: "First addition of HBr gives 2-bromopropene (Markovnikov); second addition of HBr to the vinyl halide gives the geminal dihalide 2,2-dibromopropane."
      },
      {
        text: "The Birch reduction converts benzene to:",
        options: [
          "Cyclohexane",
          "Cyclohexadiene (1,4-cyclohexadiene)",
          "Phenol",
          "Toluene"
        ],
        correct: 1,
        explanation: "The Birch reduction (Na in liquid NH3/alcohol) partially reduces benzene to 1,4-cyclohexadiene, not the fully saturated cyclohexane."
      },
      {
        text: "Which catalyst is used for hydrogenation of alkenes?",
        options: ["AlCl3", "H2SO4", "Pd/C or Ni (Raney Ni)", "NaOH"],
        correct: 2,
        explanation: "Alkene hydrogenation uses heterogeneous metal catalysts such as Pd on carbon, PtO2 (Adam's catalyst), or Raney Nickel."
      },
      {
        text: "In free-radical bromination of alkanes, the most reactive position is:",
        options: [
          "Primary (1°) carbon",
          "Secondary (2°) carbon",
          "Tertiary (3°) carbon",
          "All positions equally"
        ],
        correct: 2,
        explanation: "Bromine radical is selective; it preferentially abstracts H from the 3° position because the 3° carbon radical formed is most stable."
      },
      {
        text: "Diol synthesis from an alkene can be achieved by reaction with:",
        options: [
          "Br2 in CCl4",
          "H2SO4/H2O",
          "OsO4 (cold, dilute KMnO4) — syn addition",
          "O3 then Zn/H2O"
        ],
        correct: 2,
        explanation: "OsO4 (or cold dilute KMnO4) dihydroxylates alkenes by syn addition to give a cis-diol."
      },
      {
        text: "How can benzene be distinguished from a simple alkene experimentally?",
        options: [
          "Benzene burns with a sooty flame only; alkenes do not burn",
          "Benzene does not decolourise bromine water, but alkenes do",
          "Benzene reacts with NaOH; alkenes do not",
          "Alkenes give a white precipitate with AgNO3; benzene does not"
        ],
        correct: 1,
        explanation: "Alkenes rapidly decolourise Br2(aq) by addition, while benzene (lacking addition reactivity under these conditions) does not — this bromination test distinguishes them."
      },
      {
        text: "The first three members of the alkane series (CH4, C2H6, C3H8) are gases at room temperature. At what carbon number do alkanes first become liquid?",
        options: ["C4", "C5", "C6", "C8"],
        correct: 1,
        explanation: "C1 to C4 alkanes are gases at room temperature; C5 (pentane) is the first liquid alkane."
      },
      {
        text: "The reaction of acetylene (ethyne) with water in the presence of H2SO4 and HgSO4 gives:",
        options: [
          "Ethanol",
          "Ethanal (acetaldehyde)",
          "Ethanoic acid",
          "Ethene"
        ],
        correct: 1,
        explanation: "Hydration of acetylene (Markovnikov) via an enol intermediate gives acetaldehyde (ethanal, CH3CHO)."
      },
      {
        text: "Acetophenone (methyl phenyl ketone) can be prepared by:",
        options: [
          "Friedel-Crafts alkylation of benzene with ethyl chloride",
          "Friedel-Crafts acylation of benzene with acetyl chloride",
          "Nitration of benzene",
          "Halogenation of toluene"
        ],
        correct: 1,
        explanation: "Friedel-Crafts acylation: benzene + CH3COCl → (AlCl3) → acetophenone (C6H5COCH3) + HCl."
      },
      {
        text: "Which of the following is NOT a method for preparing alkenes?",
        options: [
          "Dehydration of alcohols with conc. H2SO4/170°C",
          "Dehydrohalogenation of alkyl halides with alcoholic KOH",
          "Hydrogenation of alkynes",
          "Hydrogenation of alkenes"
        ],
        correct: 3,
        explanation: "Hydrogenation of alkenes produces alkanes, not alkenes. The other options are all standard preparations of alkenes."
      },
      {
        text: "The boiling points of straight-chain alkenes are _______ their corresponding isomeric branched-chain compounds:",
        options: ["Lower than", "Higher than", "The same as", "Impossible to predict relative to"],
        correct: 1,
        explanation: "Straight-chain alkanes/alkenes have greater surface area and stronger van der Waals interactions, giving higher boiling points than their branched isomers."
      },
      {
        text: "Propane does NOT undergo which of the following reactions?",
        options: [
          "Combustion",
          "Halogenation (with UV light)",
          "Addition of Br2",
          "Thermal cracking"
        ],
        correct: 2,
        explanation: "Propane is saturated and cannot undergo addition reactions like addition of Br2 across a double bond."
      },
      {
        text: "The ozonolysis of 2,3-dimethyl-2-butene gives:",
        options: [
          "Two different ketones",
          "One ketone only (acetone) as two moles",
          "Two different aldehydes",
          "One ketone and one aldehyde"
        ],
        correct: 1,
        explanation: "(CH3)2C=C(CH3)2 gives (CH3)2C=O (acetone) × 2 upon ozonolysis because both C=C carbons carry two methyl groups."
      },
      {
        text: "Which of the following reactions involves syn addition to an alkene?",
        options: [
          "Halogenation with Br2 (anti addition)",
          "Hydroboration-oxidation",
          "Acid-catalysed hydration",
          "Free-radical addition of HBr"
        ],
        correct: 1,
        explanation: "Hydroboration-oxidation is a syn addition — both the B and H add to the same face of the double bond."
      },
      {
        text: "The hydrogenation of 1 mole of benzene requires:",
        options: ["1 mole H2", "2 moles H2", "3 moles H2", "6 moles H2"],
        correct: 2,
        explanation: "Complete hydrogenation of benzene (to cyclohexane) requires 3 moles of H2 (one for each 'double bond equivalent' in the ring system)."
      },
      {
        text: "Which of the following is a product of the catalytic cracking of alkanes?",
        options: [
          "Only CO2 and H2O",
          "Shorter-chain alkanes and alkenes",
          "Benzene only",
          "Only hydrogen gas"
        ],
        correct: 1,
        explanation: "Catalytic cracking breaks long-chain alkanes into shorter-chain alkanes and alkenes, which are more useful as fuels and chemical feedstocks."
      },
      {
        text: "The Ziegler-Natta catalyst is used to produce:",
        options: [
          "Aromatic compounds",
          "Stereoregular polymers from alkenes (e.g., isotactic polypropylene)",
          "Alkynes from alkenes",
          "Benzene from cyclohexane"
        ],
        correct: 1,
        explanation: "Ziegler-Natta catalysts (TiCl4/AlR3) enable the stereospecific polymerisation of alkenes, producing isotactic or syndiotactic polymers."
      },
      {
        text: "Which of these is a test to distinguish between cyclohexane and cyclohexene?",
        options: [
          "Reaction with sodium",
          "Reaction with dilute H2SO4",
          "Decolorisation of bromine in CCl4",
          "Combustion test"
        ],
        correct: 2,
        explanation: "Cyclohexene decolourises Br2/CCl4 by addition; cyclohexane does not react under these conditions — bromine remains orange."
      }
    ]
  },

  /* ============================================================
     CHAPTER 6 — Organic Functional Groups: Alcohols, Ethers, Carbonyls, Carboxylic Acids
  ============================================================ */
  {
    number: 6,
    title: "Organic Functional Groups: Alcohols, Ethers, Carbonyls & Carboxylic Acids",
    questionLimit: 40,
    timeLimit: 15,
    summary: "Functional groups determine the chemical and physical properties of organic compounds. Alcohols (R−OH) are classified as primary, secondary, or tertiary and can be oxidised, dehydrated, or converted to esters. Ethers (R−O−R) are relatively unreactive. Aldehydes and ketones (carbonyl compounds) undergo nucleophilic addition. Carboxylic acids (RCOOH) are weak acids that form esters, amides, acid chlorides, and anhydrides. Grignard reagents and hydride reducing agents (LAH, NaBH4) are key tools for functional group interconversion.",
    keyPoints: [
      "Grain alcohol = ethanol; wood spirit = methanol; glycol = diol; glycerol = triol",
      "Alcohols have higher bp than alkanes due to hydrogen bonding via −OH",
      "Primary alcohols → PCC → aldehydes; primary alcohols → K2Cr2O7/H⁺ → carboxylic acids",
      "Secondary alcohols → oxidation → ketones; tertiary alcohols → no oxidation product",
      "NaBH4 reduces aldehydes/ketones in protic solvents; LAH reduces esters, acids, amides too",
      "Grignard (RMgX) + aldehyde → 2° alcohol; + ketone → 3° alcohol; + HCHO → 1° alcohol",
      "Carboxylic acids: higher bp due to dimerisation via H-bonding; acidic due to carboxylate resonance",
      "Nucleophilic addition to carbonyls: CN⁻ (cyanohydrin), alcohol (hemiacetal → acetal), water (hydrate)"
    ],
    pdfUrl: "",
    cbtUrl: "",
    questions: [
      {
        text: "Ethanol is otherwise known as:",
        options: ["Wood spirit", "Grain alcohol", "Rubbing alcohol", "Industrial alcohol"],
        correct: 1,
        explanation: "Ethanol (C2H5OH) is known as grain alcohol because it is produced by fermentation of grain sugars."
      },
      {
        text: "Which alcohol is known as wood spirit?",
        options: ["Ethanol", "Propanol", "Methanol", "Butanol"],
        correct: 2,
        explanation: "Methanol (CH3OH) is known as wood spirit because it was originally obtained by the destructive distillation of wood."
      },
      {
        text: "Alcohols have higher boiling points than alkanes of similar molecular weight because:",
        options: [
          "Alcohols are larger molecules",
          "Hydrogen bonding between alcohol molecules via the OH group",
          "Alcohols contain oxygen which is heavier",
          "Alcohols undergo ionic dissociation"
        ],
        correct: 1,
        explanation: "The OH group of alcohols forms intermolecular hydrogen bonds, requiring more energy to overcome — hence higher boiling points."
      },
      {
        text: "A secondary alcohol contains the OH group on a carbon that is bonded to:",
        options: ["One other carbon", "Two other carbons", "Three other carbons", "No other carbon"],
        correct: 1,
        explanation: "A secondary (2°) alcohol has the OH-bearing carbon bonded to exactly two other carbon atoms."
      },
      {
        text: "Which of the following is a secondary alcohol?",
        options: ["CH3OH", "CH3CH2OH", "CH3CH(OH)CH3", "(CH3)3COH"],
        correct: 2,
        explanation: "CH3CH(OH)CH3 (propan-2-ol/isopropanol) is a secondary alcohol — the central carbon (bearing OH) is bonded to two CH3 groups."
      },
      {
        text: "Oxidation of a primary alcohol with PCC (pyridinium chlorochromate) gives:",
        options: ["A ketone", "A carboxylic acid", "An aldehyde", "An ether"],
        correct: 2,
        explanation: "PCC is a mild oxidising agent that converts primary alcohols to aldehydes without further oxidation to carboxylic acids."
      },
      {
        text: "Oxidation of a primary alcohol with acidic dichromate (Cr2O7²⁻/H⁺) gives:",
        options: ["Aldehyde", "Carboxylic acid", "Ketone", "Ether"],
        correct: 1,
        explanation: "Acidic dichromate oxidises primary alcohols fully to carboxylic acids (the intermediate aldehyde is oxidised further)."
      },
      {
        text: "Oxidation of a secondary alcohol gives:",
        options: ["Aldehyde", "Carboxylic acid", "Ketone", "Ether"],
        correct: 2,
        explanation: "Secondary alcohols (R2CHOH) are oxidised to ketones (R2C=O) by Cr2O7²⁻, KMnO4, or PCC."
      },
      {
        text: "What is the product of oxidising a tertiary alcohol with chromic acid?",
        options: ["Ketone only", "No reaction", "Aldehyde only", "Carboxylic acid"],
        correct: 1,
        explanation: "Tertiary alcohols have no α-hydrogen and cannot be oxidised by Cr2O7²⁻ or KMnO4 under normal conditions — no oxidation product is obtained."
      },
      {
        text: "The reducing agent that converts both aldehydes AND esters to alcohols is:",
        options: ["NaBH4", "H2/Ni", "LAH (LiAlH4)", "PCC"],
        correct: 2,
        explanation: "LAH (lithium aluminium hydride) is a powerful reducing agent that reduces aldehydes, ketones, esters, carboxylic acids, and amides. NaBH4 is milder and only reduces aldehydes and ketones."
      },
      {
        text: "NaBH4 differs from LAH in that NaBH4:",
        options: [
          "Is a stronger reducing agent",
          "Reduces esters and carboxylic acids",
          "Is a milder agent and selectively reduces aldehydes and ketones only",
          "Requires inert solvents like ether"
        ],
        correct: 2,
        explanation: "NaBH4 is milder and more selective than LAH; it reduces only aldehydes and ketones and can be used in protic solvents."
      },
      {
        text: "Why must reactions with LAH be carried out in inert (dry ether) solvents?",
        options: [
          "LAH is not soluble in other solvents",
          "LAH reacts vigorously with protic solvents (water, alcohols) having acidic protons",
          "LAH gives better yields in ether",
          "Ether stabilises the product"
        ],
        correct: 1,
        explanation: "LAH reacts with solvents containing acidic protons (water, alcohols) — it must be used in dry, aprotic solvents like diethyl ether or THF."
      },
      {
        text: "Grignard reagent (RMgX) reacts with formaldehyde (HCHO) followed by H3O⁺ to give:",
        options: ["A tertiary alcohol", "A secondary alcohol", "A primary alcohol", "A carboxylic acid"],
        correct: 2,
        explanation: "RMgX + HCHO → after hydrolysis → R−CH2OH, a primary alcohol (one more carbon than the Grignard reagent)."
      },
      {
        text: "Grignard reagent reacts with a ketone to give (after H3O⁺ workup):",
        options: ["Primary alcohol", "Secondary alcohol", "Tertiary alcohol", "Aldehyde"],
        correct: 2,
        explanation: "RMgX + R'COR'' → after H3O⁺ → tertiary alcohol R'R''R(OH) — the Grignard carbon attacks the ketone carbonyl."
      },
      {
        text: "The function of H3O⁺ (aqueous acid) in Grignard reactions is:",
        options: [
          "To oxidise the product",
          "To convert the magnesium alkoxide intermediate into the alcohol product",
          "To activate the Grignard reagent",
          "To remove the solvent"
        ],
        correct: 1,
        explanation: "After nucleophilic addition of RMgX, the product is a magnesium alkoxide; H3O⁺ protonates it to give the free alcohol."
      },
      {
        text: "A terminal ketone is otherwise known as a(n):",
        options: ["Ester", "Aldehyde", "Carboxylic acid", "Ether"],
        correct: 1,
        explanation: "An aldehyde has the carbonyl group at the terminal (end) carbon — it is a 'terminal ketone' in older terminology."
      },
      {
        text: "The carbonyl group is capable of undergoing all of the following EXCEPT:",
        options: ["Oxidation", "Reduction", "Nucleophilic addition", "Elimination"],
        correct: 3,
        explanation: "The C=O of aldehydes/ketones does not typically undergo elimination under normal conditions; it undergoes oxidation, reduction, and nucleophilic addition."
      },
      {
        text: "The acid-catalysed addition of 2 moles of alcohol to 1 mole of aldehyde gives:",
        options: ["A hemiacetal", "An acetal", "A ketal", "A hydrate"],
        correct: 1,
        explanation: "1 mole alcohol + aldehyde → hemiacetal (reversible); 2 moles alcohol → acetal (with loss of water, acid-catalysed)."
      },
      {
        text: "Silver ion (Ag⁺) in Tollens' reagent reacts with aldehydes to give:",
        options: ["A red precipitate", "A silver mirror on the flask wall", "A blue solution", "No reaction"],
        correct: 1,
        explanation: "Tollens' test: aldehyde reduces Ag⁺ to Ag⁰, which deposits as a silver mirror on the glass (positive test for aldehyde)."
      },
      {
        text: "Fehling's solution is reduced by aldehydes to give:",
        options: [
          "Silver mirror",
          "Blue precipitate",
          "Brick-red precipitate of Cu2O",
          "Green precipitate"
        ],
        correct: 2,
        explanation: "Fehling's solution (Cu²⁺ complex) is reduced by aldehydes (but not ketones) to give a brick-red precipitate of Cu2O."
      },
      {
        text: "Carboxylic acids have unusually high boiling points compared to alcohols of similar molecular weight because:",
        options: [
          "They are ionic compounds",
          "They exist as hydrogen-bonded dimers",
          "They have a carbonyl and hydroxyl group each forming H-bonds independently",
          "They are all solid at room temperature"
        ],
        correct: 1,
        explanation: "Carboxylic acids form stable H-bonded dimers through both O−H···O=C and C=O···H−O interactions, significantly raising their boiling points."
      },
      {
        text: "The esterification reaction involves:",
        options: [
          "Reduction of an acid",
          "Reaction of a carboxylic acid with an alcohol to form an ester and water",
          "Oxidation of an alcohol to an acid",
          "Addition of HX to an alkene"
        ],
        correct: 1,
        explanation: "Esterification: RCOOH + R'OH ⇌ RCOOR' + H2O (reversible; acid-catalysed by conc. H2SO4)."
      },
      {
        text: "The cyanide ion (CN⁻) reacts with an aldehyde or ketone to give:",
        options: ["An amine", "An acetal", "A cyanohydrin", "An imine"],
        correct: 2,
        explanation: "CN⁻ is a nucleophile that adds to the carbonyl of aldehydes/ketones; the product is a cyanohydrin (α-hydroxy nitrile)."
      },
      {
        text: "The reaction of ammonia (NH3) with an aldehyde gives:",
        options: ["An acetal", "An amine", "An imine (Schiff base)", "An amide"],
        correct: 2,
        explanation: "Ammonia (or primary amines) reacts with aldehydes/ketones by nucleophilic addition-elimination to give imines (C=N), also called Schiff bases."
      },
      {
        text: "Which reagent oxidises primary alcohols directly to aldehydes (preventing over-oxidation)?",
        options: ["K2Cr2O7/H2SO4", "KMnO4", "PCC (pyridinium chlorochromate)", "O3"],
        correct: 2,
        explanation: "PCC is a selective mild oxidant for primary → aldehyde conversion; stronger agents (K2Cr2O7, KMnO4) over-oxidise to carboxylic acid."
      },
      {
        text: "The Wittig reaction converts a ketone or aldehyde into:",
        options: ["An alcohol", "An alkene", "A carboxylic acid", "An ether"],
        correct: 1,
        explanation: "The Wittig reagent (phosphorus ylide, R2P=CR2) reacts with C=O to give an alkene (C=C) and triphenylphosphine oxide."
      },
      {
        text: "Glycerol (propane-1,2,3-triol) is recommended for a person with dry skin because:",
        options: [
          "It is an antiseptic",
          "It is hygroscopic and acts as a moisturiser",
          "It contains a triple bond",
          "It reacts with skin oils"
        ],
        correct: 1,
        explanation: "Glycerol is a humectant — it attracts and retains moisture from the environment, making it useful in skin care products for dry skin."
      },
      {
        text: "The green engine coolant in automobile radiators likely contains:",
        options: [
          "Glycerol (propane-1,2,3-triol)",
          "Ethane-1,2-diol (ethylene glycol)",
          "Ethanol",
          "2-propanol"
        ],
        correct: 1,
        explanation: "Ethylene glycol (ethane-1,2-diol) is the main ingredient in antifreeze/engine coolant because it depresses the freezing point of water."
      },
      {
        text: "The preservative used for biological specimens (formalin) contains:",
        options: ["Ethanol", "Methanal (formaldehyde)", "Formic acid", "Benzene"],
        correct: 1,
        explanation: "Formalin is a 37% aqueous solution of methanal (formaldehyde, HCHO), used as a biological preservative and disinfectant."
      },
      {
        text: "Acetone (propan-2-one) is used in organic laboratories for cleaning glassware because:",
        options: [
          "It is very cheap",
          "It is highly volatile and polar, dissolving many organic residues and evaporating quickly",
          "It is colourless and non-viscous",
          "It reacts with grease"
        ],
        correct: 1,
        explanation: "Acetone's polarity dissolves both polar and many non-polar compounds, and its low boiling point (56°C) means it evaporates rapidly, leaving glassware clean and dry."
      },
      {
        text: "What is responsible for the relatively high boiling points of aldehydes and ketones compared to alkanes of similar molecular weight?",
        options: [
          "Hydrogen bonding between carbonyl molecules",
          "Polar interactions (dipole-dipole) between the C=O groups",
          "Dispersion forces only",
          "Ionic bonding"
        ],
        correct: 1,
        explanation: "Aldehydes/ketones cannot H-bond with each other (no O−H), but their polar C=O dipoles interact via dipole-dipole forces, raising their boiling points above alkanes."
      },
      {
        text: "Which of the following has the highest boiling point?",
        options: ["Butane", "Butanal", "Butanone", "Butanol"],
        correct: 3,
        explanation: "Butanol has the highest boiling point because alcohols can form strong O−H···O hydrogen bonds between molecules."
      },
      {
        text: "The Hell-Volhard-Zelinsky (HVZ) reaction involves:",
        options: [
          "Halogenation of the alpha-hydrogen of a carboxylic acid using Br2 and red phosphorus",
          "Reduction of a carboxylic acid to an alcohol",
          "Nitration of benzene",
          "Esterification of an acid"
        ],
        correct: 0,
        explanation: "The HVZ reaction selectively replaces the α-hydrogen of carboxylic acids with a halogen (usually Br) using Br2 and a catalytic amount of red phosphorus."
      },
      {
        text: "An alkoxide ion (RO⁻) is formed when:",
        options: [
          "An alcohol reacts with a base (e.g., Na) to lose H⁺ from the OH",
          "An alcohol is oxidised to an aldehyde",
          "An ester is hydrolysed",
          "An ether is formed"
        ],
        correct: 0,
        explanation: "Alcohols react with active metals (Na, K) to release H2 and form alkoxide ions: 2 ROH + 2 Na → 2 RONa + H2↑."
      },
      {
        text: "Which of the following carboxylic acid derivatives is the most reactive toward nucleophilic substitution?",
        options: ["Ester", "Amide", "Acid chloride (acyl chloride)", "Anhydride"],
        correct: 2,
        explanation: "Acid chlorides (acyl chlorides) are the most reactive carboxylic acid derivatives because Cl⁻ is an excellent leaving group and the C=O is highly electrophilic."
      },
      {
        text: "Aldehydes are more reactive than ketones towards nucleophilic addition because:",
        options: [
          "Aldehydes are smaller molecules",
          "The carbonyl carbon of aldehydes is less sterically hindered and more electrophilic",
          "Ketones have no carbonyl group",
          "Aldehydes contain a terminal position"
        ],
        correct: 1,
        explanation: "Aldehydes (RCHO) have the carbonyl carbon bearing only one alkyl group (less steric hindrance, more electrophilic C) compared to ketones (R2CO), making them more reactive to nucleophiles."
      },
      {
        text: "Transesterification is the process of:",
        options: [
          "Converting an acid to an ester",
          "Converting an alcohol to an ester",
          "Exchanging the alkyl group of an ester with that of a different alcohol",
          "Hydrolysing an ester to an acid and alcohol"
        ],
        correct: 2,
        explanation: "Transesterification exchanges the R' group of an ester (RCOOR') with the R'' group from a different alcohol (R''OH), catalysed by acid or base."
      }
    ]
  },

  /* ============================================================
     CHAPTER 7 — Periodicity of Elements
  ============================================================ */
  {
    number: 7,
    title: "Periodicity of Elements",
    questionLimit: 40,
    timeLimit: 15,
    summary: "The periodic table arranges elements in order of increasing atomic number (Moseley's law), with elements in the same group sharing similar electronic configurations and properties. Periodic trends include: atomic radius decreases across a period and increases down a group; ionisation energy increases across a period and decreases down a group; electronegativity increases across a period and decreases down a group. Key groups include alkali metals (Group 1), alkaline earth metals (Group 2), halogens (Group 17), and noble gases (Group 18).",
    keyPoints: [
      "Mendeleev arranged by atomic mass; Moseley (modern) by atomic number (√ν = a(Z−b))",
      "Atomic radius: decreases → across a period; increases ↓ down a group",
      "Ionisation energy: increases → across a period; decreases ↓ down a group",
      "Electronegativity: increases → across a period; decreases ↓ down a group",
      "Group 1 (alkali metals): Li, Na, K, Rb, Cs, Fr — low ionisation energy, highly electropositive",
      "Group 2 (alkaline earth metals): Be, Mg, Ca, Sr, Ba, Ra",
      "Group 17 (halogens): F, Cl, Br, I, At — high electron affinity; most electronegative elements",
      "Group 18 (noble gases): He, Ne, Ar, Kr, Xe, Rn — full outer shells, chemically inert",
      "Transition metals: partially filled d-orbitals; lanthanides and actinides: partially filled f-orbitals"
    ],
    pdfUrl: "",
    cbtUrl: "",
    questions: [
      {
        text: "The modern periodic table arranges elements according to:",
        options: ["Atomic mass", "Atomic number", "Molecular mass", "Melting point"],
        correct: 1,
        explanation: "The modern periodic table (Moseley's arrangement) orders elements by increasing atomic number (Z), correcting Mendeleev's mass-based table."
      },
      {
        text: "Mendeleev's periodic table was based on:",
        options: ["Atomic number", "Atomic mass", "Ionisation energy", "Atomic radius"],
        correct: 1,
        explanation: "Mendeleev arranged elements in order of increasing atomic mass; Moseley later showed atomic number is the correct basis."
      },
      {
        text: "Moseley's equation for X-ray emission is:",
        options: ["E = mc²", "√ν = a(Z−b)", "PV = nRT", "ΔG = ΔH − TΔS"],
        correct: 1,
        explanation: "Moseley's law: √ν = a(Z−b), where ν is the frequency of characteristic X-rays, Z is the atomic number, and a, b are constants."
      },
      {
        text: "Atomic radius generally _______ across a period from left to right:",
        options: ["Increases", "Decreases", "Remains constant", "First increases then decreases"],
        correct: 1,
        explanation: "Across a period, the nuclear charge increases (more protons) while electrons are added to the same shell, pulling them closer — atomic radius decreases."
      },
      {
        text: "Atomic radius generally _______ down a group:",
        options: ["Decreases", "Increases", "Remains constant", "Varies randomly"],
        correct: 1,
        explanation: "Down a group, electrons are added to progressively higher energy shells (further from nucleus), increasing atomic radius."
      },
      {
        text: "Ionisation energy generally _______ across a period:",
        options: ["Decreases", "Increases", "Remains constant", "First decreases then increases"],
        correct: 1,
        explanation: "Across a period, increasing nuclear charge holds electrons more tightly — more energy is needed to remove an electron (IE increases)."
      },
      {
        text: "Ionisation energy generally _______ down a group:",
        options: ["Increases", "Decreases", "Remains constant", "Varies erratically"],
        correct: 1,
        explanation: "Down a group, outer electrons are further from the nucleus and more shielded — less energy is needed to remove them (IE decreases)."
      },
      {
        text: "Electronegativity generally _______ across a period:",
        options: ["Decreases", "Increases", "Remains constant", "Is unrelated to position"],
        correct: 1,
        explanation: "Electronegativity increases across a period (left to right) as nuclear charge increases, pulling shared electrons more strongly."
      },
      {
        text: "Alkali metals (Group 1) are highly reactive because they:",
        options: [
          "Have high ionisation energies",
          "Have full outer shells",
          "Easily lose their single outermost electron (low ionisation energy)",
          "Have high electronegativity"
        ],
        correct: 2,
        explanation: "Alkali metals have one loosely held outer electron (low IE); they readily lose it to form 1+ ions, making them highly electropositive and reactive."
      },
      {
        text: "Which of the following is NOT an alkali metal?",
        options: ["Lithium (Li)", "Sodium (Na)", "Barium (Ba)", "Caesium (Cs)"],
        correct: 2,
        explanation: "Barium (Ba) is an alkaline earth metal (Group 2). Alkali metals are Group 1: Li, Na, K, Rb, Cs, Fr."
      },
      {
        text: "Which of the following is NOT an alkaline earth metal?",
        options: ["Magnesium (Mg)", "Calcium (Ca)", "Palladium (Pd)", "Barium (Ba)"],
        correct: 2,
        explanation: "Palladium (Pd) is a transition metal (Group 10). Alkaline earth metals are Group 2: Be, Mg, Ca, Sr, Ba, Ra."
      },
      {
        text: "Halogens (Group 17) are highly reactive because they:",
        options: [
          "Have full outer electron shells",
          "Have low electronegativity",
          "Have high electron affinity and need only one electron to complete their outer shell",
          "Are always gases"
        ],
        correct: 2,
        explanation: "Halogens need one more electron to achieve a noble gas configuration; their high electron affinity makes them strongly oxidising."
      },
      {
        text: "Which of the following is NOT a halogen?",
        options: ["Fluorine (F)", "Chlorine (Cl)", "Hydrogen (H)", "Iodine (I)"],
        correct: 2,
        explanation: "Hydrogen is NOT a halogen; it has unique properties and is placed in Group 1 (sometimes also Group 17 in some tables) but is not a halogen."
      },
      {
        text: "Noble gases (Group 18) are chemically inert because:",
        options: [
          "They have very low atomic masses",
          "They have completely filled outer s and p orbitals (no vacancies)",
          "They are all gases",
          "They have low melting points"
        ],
        correct: 1,
        explanation: "Noble gases have completely filled outer shells (He: 1s²; others: ns²np⁶), with no vacancies to accept or tendency to lose electrons."
      },
      {
        text: "Which group in the periodic table contains He, Ne, Ar, Kr, Xe?",
        options: ["Group 1", "Group 2", "Group 17", "Group 18"],
        correct: 3,
        explanation: "He, Ne, Ar, Kr, Xe (and Rn) are the noble gases, placed in Group 18 (also called Group 0 in older notation)."
      },
      {
        text: "Transition metals are characterised by having:",
        options: [
          "Completely filled d-orbitals",
          "Partially filled d-orbitals",
          "No d-orbitals",
          "Only s and p electrons"
        ],
        correct: 1,
        explanation: "Transition metals (d-block) are characterized by partially filled d-orbitals, which explain their variable oxidation states, colour, and catalytic properties."
      },
      {
        text: "Lanthanides and actinides are characterised by having:",
        options: [
          "Partially filled d-orbitals",
          "Partially filled f-orbitals",
          "Completely filled shells",
          "Only s-orbital electrons"
        ],
        correct: 1,
        explanation: "Lanthanides and actinides (f-block elements) are characterised by partially filled f-orbitals."
      },
      {
        text: "When metals ionise, they become cations with:",
        options: ["Larger sizes", "Smaller sizes", "The same size", "Variable sizes"],
        correct: 1,
        explanation: "When metals lose electrons to form cations, the remaining electrons are held more tightly by the same nuclear charge, resulting in a smaller ionic size."
      },
      {
        text: "The element that will liberate hydrogen from cold water among these is:",
        options: ["Phosphorus", "Sulphur", "Iron", "Potassium"],
        correct: 3,
        explanation: "Potassium (and other Group 1 metals) is reactive enough to displace hydrogen from cold water: 2K + 2H2O → 2KOH + H2↑."
      },
      {
        text: "Which element will displace hydrogen from cold water? (Group 2 context)",
        options: ["Magnesium", "Calcium", "Beryllium", "All equally"],
        correct: 1,
        explanation: "Calcium (Ca) readily reacts with cold water to give Ca(OH)2 + H2. Mg only reacts with hot water/steam; Be does not react readily."
      },
      {
        text: "Members of the same group have similar chemical properties because they have:",
        options: [
          "The same atomic mass",
          "Similar outer electron configurations",
          "The same number of neutrons",
          "The same physical state at room temperature"
        ],
        correct: 1,
        explanation: "Elements in the same group have the same number of outer (valence) electrons in similar configurations, governing their chemical behaviour."
      },
      {
        text: "The reactivity of alkali metals _______ down the group:",
        options: ["Decreases", "Increases", "Remains constant", "First increases then decreases"],
        correct: 1,
        explanation: "Alkali metal reactivity increases down the group as ionisation energy decreases (outer electron is easier to remove), making them progressively better reducing agents."
      },
      {
        text: "Isotopes are atoms of the same element that have:",
        options: [
          "The same mass number but different atomic number",
          "The same atomic number but different mass numbers (different numbers of neutrons)",
          "The same number of neutrons but different protons",
          "Identical chemical and physical properties"
        ],
        correct: 1,
        explanation: "Isotopes have the same atomic number (same element) but different numbers of neutrons, giving different mass numbers."
      },
      {
        text: "The number of periods in the modern periodic table is:",
        options: ["6", "7", "8", "9"],
        correct: 1,
        explanation: "There are 7 periods (horizontal rows) in the modern periodic table, corresponding to the filling of shells n = 1 to 7."
      },
      {
        text: "Period 1 contains which elements?",
        options: [
          "Li and Be",
          "H and He",
          "H and Li",
          "He and Ne"
        ],
        correct: 1,
        explanation: "Period 1 contains only hydrogen (H) and helium (He) — the two elements with electrons only in the first shell (n=1)."
      },
      {
        text: "Which of these elements is NOT a transition metal?",
        options: ["Iron (Fe)", "Manganese (Mn)", "Zinc (Zn) (borderline)", "Fluorine (F)"],
        correct: 3,
        explanation: "Fluorine is a halogen (Group 17, p-block); it is definitely not a transition metal."
      },
      {
        text: "The alkaline earth metals are found in which group?",
        options: ["Group 1", "Group 2", "Group 3", "Group 17"],
        correct: 1,
        explanation: "Alkaline earth metals (Be, Mg, Ca, Sr, Ba, Ra) occupy Group 2 of the periodic table."
      },
      {
        text: "Sodium chloride (NaCl) is an ionic compound because:",
        options: [
          "Na and Cl share electrons equally",
          "Ions are held in a crystal lattice by electrostatic attraction",
          "It has a low melting point",
          "Both Na and Cl are metals"
        ],
        correct: 1,
        explanation: "In NaCl, Na⁺ and Cl⁻ ions occupy a crystal lattice; the strong electrostatic attraction between oppositely charged ions constitutes the ionic bond."
      },
      {
        text: "The products of 2Na + 2H2O → are:",
        options: ["Na2O + H2", "2NaOH + H2", "NaH + H2O", "2Na2O + 4H2"],
        correct: 1,
        explanation: "Sodium reacts vigorously with water: 2Na + 2H2O → 2NaOH + H2↑"
      },
      {
        text: "Which of the following best describes why elements in Period 7 are often unstable?",
        options: [
          "They are all metals",
          "They have been synthetically produced and have short half-lives (radioactive)",
          "They have very high boiling points",
          "They are noble gases"
        ],
        correct: 1,
        explanation: "Many Period 7 elements are synthetic (transuranium elements) with short half-lives; even naturally occurring ones like Fr and Ra are radioactive."
      },
      {
        text: "The products of pyrolysis (thermal decomposition) of 2NaNO3 are:",
        options: ["2NaCl + O2", "2NaNO2 + O2", "Na2O + N2 + O2", "Na2O2 + NO2"],
        correct: 1,
        explanation: "2NaNO3 →(heat)→ 2NaNO2 + O2 — sodium nitrate decomposes to sodium nitrite and oxygen."
      },
      {
        text: "Potassium sulphate and phosphate salts are widely used as:",
        options: [
          "Battery electrolytes",
          "Electrodes",
          "Fertilizers",
          "Preservatives"
        ],
        correct: 2,
        explanation: "Potassium salts (K2SO4, K3PO4) supply essential potassium and phosphorus nutrients; they are used as fertilizers in agriculture."
      },
      {
        text: "Radium is unstable because it is:",
        options: [
          "A very light element",
          "Radioactive with a short half-life",
          "Chemically inert",
          "A gas at room temperature"
        ],
        correct: 1,
        explanation: "Radium (Ra) is a radioactive element; it decays by emitting alpha particles, making it inherently unstable."
      },
      {
        text: "The major source of francium (Fr) is:",
        options: [
          "Nuclear reactors (produced artificially)",
          "Nitrogen gas",
          "Gallium ores",
          "Natural seawater"
        ],
        correct: 0,
        explanation: "Francium is extremely rare in nature and is primarily obtained from nuclear reactors via neutron bombardment of radium."
      },
      {
        text: "Lithium salts are used medically for:",
        options: [
          "Treatment of certain mental disorders (bipolar disorder)",
          "Battery acid",
          "Fertilizers",
          "Anaesthesia"
        ],
        correct: 0,
        explanation: "Lithium carbonate and lithium chloride are used as mood stabilisers in the treatment of bipolar disorder."
      },
      {
        text: "Which element is the most abundant in the earth's crust?",
        options: ["Silicon", "Aluminium", "Oxygen", "Iron"],
        correct: 2,
        explanation: "Oxygen is the most abundant element in the earth's crust (~46% by mass), mostly as oxide minerals and silicates."
      },
      {
        text: "Calcium carbide (CaC2) is used to produce:",
        options: [
          "Nitrogen gas",
          "Acetylene (ethyne) for welding",
          "Carbon dioxide",
          "Calcium hydroxide only"
        ],
        correct: 1,
        explanation: "CaC2 + 2H2O → C2H2↑ + Ca(OH)2 — calcium carbide reacts with water to produce acetylene (used in oxy-acetylene welding)."
      },
      {
        text: "Baryte (BaSO4) is the principal ore of which element?",
        options: ["Strontium", "Barium", "Silver", "Gold"],
        correct: 1,
        explanation: "Baryte (heavy spar, BaSO4) is the principal mineral source of barium."
      },
      {
        text: "The products of Zn + 2HCl → are:",
        options: ["ZnO + H2", "ZnCl2 + H2", "ZnOH + HCl", "Zn(OH)2 + Cl2"],
        correct: 1,
        explanation: "Zinc dissolves in dilute hydrochloric acid: Zn + 2HCl → ZnCl2 + H2↑"
      },
      {
        text: "Sodium and potassium are best prepared by:",
        options: [
          "Reduction of their oxides with carbon",
          "Electrolysis of their molten chlorides (eutectic mixtures)",
          "Hydrolysis of their salts",
          "Reaction of their salts with hydrogen"
        ],
        correct: 1,
        explanation: "Na and K are extracted by electrolysis of their molten salts (Down's process for Na: molten NaCl; Castner process for K uses KCl eutectic)."
      }
    ]
  },

  /* ============================================================
     CHAPTER 8 — Valence Forces and Structure of Solids
  ============================================================ */
  {
    number: 8,
    title: "Valence Forces and Structure of Solids",
    questionLimit: 40,
    timeLimit: 15,
    summary: "Chemical bonding and intermolecular forces determine the structure and properties of solids. Ionic bonds form by electron transfer (electrovalent compounds); covalent bonds form by electron sharing. Van der Waals forces (London dispersion, dipole-dipole, hydrogen bonds) hold molecular crystals together. Solids are classified as: ionic crystals, covalent (network) crystals, molecular crystals, and metallic crystals. Diamond (sp3, very hard) and graphite (sp2, soft, conducts electricity) are important allotropes of carbon.",
    keyPoints: [
      "Ionic (electrovalent) bond: complete transfer of electrons; giant ionic lattice; high mp; conducts when molten/dissolved",
      "Covalent bond: sharing of electrons; can form simple molecules (low mp) or giant networks (high mp)",
      "Metallic bond: sea of delocalised electrons around cation lattice; conducts electricity and heat",
      "Hydrogen bond: X−H···Y (X, Y = F, O, N); responsible for high bp of H2O, HF",
      "Van der Waals (London dispersion) forces: between non-polar molecules; increase with molecular size",
      "Ionic crystal: NaCl lattice; Covalent crystal: diamond, graphite, SiO2 (quartz); Molecular crystal: ice, I2, naphthalene; Metallic crystal: Na, Cu, Fe",
      "Diamond: sp3, tetrahedral, hard, non-conductor; Graphite: sp2, layered, soft, conducts (mobile π electrons)",
      "Amorphous solids (e.g., glass) lack long-range order; crystalline solids have regular lattice arrangements"
    ],
    pdfUrl: "",
    cbtUrl: "",
    questions: [
      {
        text: "Ionic (electrovalent) bonds are formed by:",
        options: [
          "Sharing of electrons between atoms",
          "Complete transfer of electrons from one atom to another",
          "Metallic delocalisation of electrons",
          "Hydrogen bonding"
        ],
        correct: 1,
        explanation: "Ionic bonds form by the complete transfer of one or more electrons from a metal (which becomes a cation) to a non-metal (which becomes an anion)."
      },
      {
        text: "Covalent bonds are formed by:",
        options: [
          "Complete transfer of electrons",
          "Sharing of electron pairs between atoms",
          "Electrostatic attraction between ions",
          "Sea of delocalised electrons"
        ],
        correct: 1,
        explanation: "Covalent bonds involve the sharing of one or more pairs of electrons between two atoms."
      },
      {
        text: "The force holding atoms together in a metallic crystal is:",
        options: [
          "Ionic attraction",
          "Covalent bonding",
          "Attraction between positive metal ions and a sea of delocalised electrons",
          "Van der Waals forces only"
        ],
        correct: 2,
        explanation: "In metals, cations are surrounded by a 'sea' (cloud) of delocalised valence electrons; the electrostatic attraction between cations and electrons is the metallic bond."
      },
      {
        text: "The ability of metals to conduct electricity is due to:",
        options: [
          "Their smooth surfaces",
          "Presence of free, mobile delocalised electrons",
          "High melting points",
          "Ionic character"
        ],
        correct: 1,
        explanation: "Metals conduct because their delocalised electrons are free to move through the lattice, carrying charge."
      },
      {
        text: "Graphite conducts electricity because:",
        options: [
          "It has a rigid 3D structure",
          "It contains free, mobile π (pi) electrons within each layer",
          "It is sp3 hybridised",
          "It is a metallic solid"
        ],
        correct: 1,
        explanation: "In graphite, each sp2 carbon contributes one electron to a delocalised π system within each layer; these mobile electrons allow electrical conduction."
      },
      {
        text: "Diamond is an electrical insulator because:",
        options: [
          "It contains no carbon",
          "All four valence electrons per carbon are used in sp3 σ bonds — no free electrons",
          "It has no carbon-carbon bonds",
          "It is amorphous"
        ],
        correct: 1,
        explanation: "In diamond, every carbon is sp3 hybridised and uses all 4 valence electrons in σ bonds; there are no free electrons to conduct electricity."
      },
      {
        text: "Which hybridisation does carbon have in diamond?",
        options: ["sp", "sp2", "sp3", "spd"],
        correct: 2,
        explanation: "In diamond, every carbon is sp3 hybridised and bonded tetrahedrally to four other carbons, creating a hard, 3D covalent network."
      },
      {
        text: "Which hybridisation does carbon have in graphite?",
        options: ["sp3", "sp2", "sp", "spd"],
        correct: 1,
        explanation: "In graphite, carbon is sp2 hybridised; three sp2 orbitals form the hexagonal layers and the fourth p electron is delocalised."
      },
      {
        text: "Diamond and graphite are both allotropes of carbon. This means they are:",
        options: [
          "Different elements",
          "The same element in different structural forms",
          "Compounds of carbon",
          "Isotopes"
        ],
        correct: 1,
        explanation: "Allotropes are different structural forms of the same element in the same physical state (here, solid carbon)."
      },
      {
        text: "The principal use of diamond is as:",
        options: ["Electrode material", "Lubricant", "Jewelry and cutting tools", "Lead pencil core"],
        correct: 2,
        explanation: "Diamond's extreme hardness makes it valuable for jewelry (gemstone) and as an abrasive/cutting tool in industry."
      },
      {
        text: "The principal use of graphite is as:",
        options: ["Jewelry", "Electrode material and in pencils", "Cutting tools", "Catalyst"],
        correct: 1,
        explanation: "Graphite is used as electrodes (in batteries, electrolytic cells), as pencil 'lead' (pencil cores), and as a lubricant."
      },
      {
        text: "Can graphite be converted to diamond?",
        options: ["Yes, under high temperature and pressure", "No, they are different elements", "Only at room temperature", "Only with a chemical reaction"],
        correct: 0,
        explanation: "Graphite can be converted to diamond at very high pressures (~100,000 atm) and high temperatures (~1500°C), and this is how industrial diamonds are made."
      },
      {
        text: "A crystal is defined as:",
        options: [
          "Any solid material",
          "A solid with lattice points regularly occupied by ions, atoms, or molecules",
          "A glassy, amorphous solid",
          "A liquid at room temperature"
        ],
        correct: 1,
        explanation: "A crystal is a solid whose constituents (ions, atoms, or molecules) are arranged in a highly ordered, repeating lattice structure."
      },
      {
        text: "Glass is an example of a(n):",
        options: ["Ionic crystal", "Metallic crystal", "Amorphous solid", "Covalent crystal"],
        correct: 2,
        explanation: "Glass is an amorphous solid — it lacks the long-range periodic ordering of a crystal; it has a disordered, liquid-like structure."
      },
      {
        text: "Which of the following is an amorphous solid?",
        options: ["Sodium chloride", "Diamond", "Glass", "Quartz (SiO2 crystal)"],
        correct: 2,
        explanation: "Glass is amorphous (no regular crystal lattice). NaCl, diamond, and crystalline quartz are all crystalline solids."
      },
      {
        text: "Ionic crystals are held together by:",
        options: [
          "Van der Waals forces",
          "Covalent bonds",
          "Metallic bonds",
          "Electrostatic (ionic/electrovalent) forces between oppositely charged ions"
        ],
        correct: 3,
        explanation: "Ionic crystals are held by strong electrostatic attraction between cations and anions arranged in a crystal lattice."
      },
      {
        text: "Covalent (network) crystals (e.g., diamond, quartz) have:",
        options: [
          "Low melting points",
          "High melting points due to many strong covalent bonds throughout the lattice",
          "Good electrical conductivity",
          "Weak intermolecular forces"
        ],
        correct: 1,
        explanation: "Giant covalent structures (network solids) require breaking many strong covalent bonds to melt — hence very high melting points."
      },
      {
        text: "Molecular crystals (e.g., ice, iodine, naphthalene) are characterised by:",
        options: [
          "Very high melting points",
          "Low melting points (usually below 100°C) due to weak intermolecular forces",
          "Electrical conduction in the solid state",
          "Giant ionic lattices"
        ],
        correct: 1,
        explanation: "Molecular crystals are held by weak van der Waals or hydrogen bond forces; they melt at low temperatures (often below 100°C)."
      },
      {
        text: "Examples of molecular crystals include:",
        options: [
          "NaCl, CaCO3, MgO",
          "Diamond, graphite, quartz",
          "Ice (H2O), iodine (I2), sulphur, naphthalene",
          "Cu, Fe, Na"
        ],
        correct: 2,
        explanation: "Ice, iodine, sulphur, and naphthalene are molecular crystals — their lattice points are occupied by discrete molecules held by van der Waals forces or H-bonds."
      },
      {
        text: "Why does sodium chloride (NaCl) not conduct electricity in the solid state?",
        options: [
          "It has no ions",
          "Its ions are fixed in the crystal lattice and cannot move",
          "It is covalently bonded",
          "Sodium is a non-metal"
        ],
        correct: 1,
        explanation: "In solid NaCl, the Na⁺ and Cl⁻ ions are locked in a rigid lattice and cannot move — electrical conduction requires mobile charge carriers."
      },
      {
        text: "NaCl conducts electricity when:",
        options: [
          "Dissolved in an organic solvent",
          "Dissolved in water or melted (molten state)",
          "In the solid state at high temperature",
          "Mixed with sand"
        ],
        correct: 1,
        explanation: "When NaCl dissolves in water or is melted, the ions become free to move and can carry electrical current."
      },
      {
        text: "The process of using electrical current to decompose ionic compounds is called:",
        options: ["Crystallisation", "Electrolysis", "Distillation", "Sublimation"],
        correct: 1,
        explanation: "Electrolysis uses electrical current to drive non-spontaneous chemical reactions, decomposing electrolytes into their constituent elements."
      },
      {
        text: "Electrolysis of water produces:",
        options: ["Hydrogen and oxygen", "Nitrogen and coke", "CO2 and H2", "Na and Cl2"],
        correct: 0,
        explanation: "Electrolysis of water: 2H2O → 2H2 + O2 — hydrogen evolves at the cathode, oxygen at the anode."
      },
      {
        text: "Which substance has a simple molecular structure among solids at room temperature?",
        options: ["Sodium (Na)", "Carbon (diamond)", "Iodine (I2)", "Silicon dioxide (SiO2)"],
        correct: 2,
        explanation: "Iodine (I2) is a molecular solid with weak van der Waals forces between I2 molecules — it has a simple molecular structure and a low melting point."
      },
      {
        text: "Silicon dioxide (SiO2, quartz) has a high melting point because:",
        options: [
          "It is ionic",
          "It has a giant covalent structure with strong Si−O covalent bonds throughout",
          "It has hydrogen bonds",
          "It is a metallic crystal"
        ],
        correct: 1,
        explanation: "SiO2 has a giant 3D covalent network — each Si is bonded to 4 O atoms and each O to 2 Si atoms — requiring high energy to break."
      },
      {
        text: "Complete transfer of electrons between two atoms constitutes forming a(n):",
        options: ["Covalent bond", "Ionic bond", "Metallic bond", "Hydrogen bond"],
        correct: 1,
        explanation: "An ionic (electrovalent) bond is formed by the complete transfer of one or more electrons from a metal to a non-metal."
      },
      {
        text: "The lattice points of ionic crystals are occupied by:",
        options: ["Atoms", "Molecules", "Charged ions (cations and anions)", "Delocalised electrons"],
        correct: 2,
        explanation: "In ionic crystals, the lattice points are occupied by oppositely charged ions arranged in a regular repeating pattern."
      },
      {
        text: "Metallic crystals contain:",
        options: [
          "Discrete neutral atoms only",
          "Positive metal cations surrounded by a sea (cloud) of delocalised electrons",
          "Covalent bonds between all atoms",
          "Hydrogen bonds"
        ],
        correct: 1,
        explanation: "The metallic bond consists of positive metal cations embedded in a sea of delocalised valence electrons."
      },
      {
        text: "Which of the following is NOT a covalent crystal?",
        options: ["Diamond", "Graphite", "Quartz (SiO2)", "Copper (Cu)"],
        correct: 3,
        explanation: "Copper is a metallic crystal (metallic bonding). Diamond, graphite, and quartz are all network covalent crystals."
      },
      {
        text: "Hydrogen bonding is responsible for water's unusually high boiling point because:",
        options: [
          "O−H bonds are very short",
          "Each water molecule can form up to 4 hydrogen bonds with neighbours",
          "Water is a large molecule",
          "Oxygen has a high atomic mass"
        ],
        correct: 1,
        explanation: "Water molecules can form up to 4 hydrogen bonds each (2 as donor, 2 as acceptor); this extensive H-bonding network gives water its anomalously high boiling point (100°C)."
      },
      {
        text: "An alloy is defined as:",
        options: [
          "A pure metal",
          "A compound of a metal and a non-metal",
          "A miscible mixture of two or more metals in their molten states",
          "A ceramic material"
        ],
        correct: 2,
        explanation: "An alloy is a mixture (not a compound) of two or more metals (or a metal and non-metal like carbon in steel) formed by mixing in the molten state."
      },
      {
        text: "Which type of solid would have the property of 'melting at below 100°C'?",
        options: ["Ionic crystal", "Metallic crystal", "Covalent (network) crystal", "Molecular crystal"],
        correct: 3,
        explanation: "Molecular crystals have weak intermolecular forces (van der Waals or H-bonds) and melt at low temperatures, usually below 100°C."
      },
      {
        text: "The hardness of diamond results from:",
        options: [
          "Its dark colour",
          "Its layered structure",
          "Every carbon being sp3 bonded to four other carbons in an extended 3D covalent network",
          "Its high electrical conductivity"
        ],
        correct: 2,
        explanation: "Diamond's extreme hardness arises from its 3D network of strong, directional C−C covalent bonds (sp3) in all directions — it is the hardest natural substance."
      },
      {
        text: "Graphite is soft and used as a lubricant because:",
        options: [
          "It has a 3D tetrahedral structure",
          "Its layers are weakly held by van der Waals forces and can slide over each other",
          "It is ionic",
          "It is amorphous"
        ],
        correct: 1,
        explanation: "Graphite's layers are held by weak van der Waals forces, allowing them to slide over each other easily — this gives graphite its lubricating properties."
      },
      {
        text: "Lithium hydride (LiH) is an example of a(n):",
        options: ["Covalent hydride", "Ionic hydride", "Interstitial hydride", "Metallic hydride"],
        correct: 1,
        explanation: "LiH is an ionic hydride — Li⁺ and H⁻ ions are held in an ionic lattice. (Note: some sources occasionally debate this, but LiH is considered ionic.)"
      },
      {
        text: "CaC2 reacts with N2 at high temperature to give:",
        options: ["CaCO3", "Ca(CN)2 (calcium cyanamide)", "CaO + CO2", "Ca3N2 + C"],
        correct: 1,
        explanation: "CaC2 + N2 →(high temp)→ CaCN2 (calcium cyanamide) + C — calcium carbide reacts with nitrogen to form calcium cyanamide, used as a fertilizer."
      },
      {
        text: "Which of the following is NOT a hydride?",
        options: ["Methane (CH4)", "LiH", "MgH2", "CaCl2"],
        correct: 3,
        explanation: "CaCl2 is a halide (chloride), not a hydride. Hydrides contain hydrogen bonded to another element."
      },
      {
        text: "The reaction Ca + 2C → gives:",
        options: ["CO2 + Ca", "CaC2 (calcium carbide)", "CaCO3", "Ca2C"],
        correct: 1,
        explanation: "Calcium metal heated with carbon (coke) gives calcium carbide: Ca + 2C → CaC2."
      },
      {
        text: "When an anion (negative ion) is formed, its size compared to the parent atom:",
        options: ["Decreases", "Increases", "Stays the same", "Depends on the element"],
        correct: 1,
        explanation: "Anions are larger than their parent atoms because the same nuclear charge now holds more electrons — electron-electron repulsion increases the size."
      },
      {
        text: "The structure normally associated with ionic bonding is:",
        options: [
          "Simple discrete molecules",
          "A giant ionic lattice",
          "A covalent network",
          "A regular arrangement of ions surrounded by a sea of electrons"
        ],
        correct: 1,
        explanation: "Ionic compounds form giant lattice structures where each cation is surrounded by anions and vice versa, in an extended three-dimensional crystal."
      }
    ]
  }

]); // end PORTAL_INJECT for CHE 102
