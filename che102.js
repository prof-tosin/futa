/**
 * courses/bio102.js — BIO 102: General Biology II
 * Level: 100 Level, 2nd Semester
 * Department of Biology, FUTA
 *
 * Structure: 6 chapters based on the official course synopsis.
 * Each chapter has a summary, keyPoints, pdfUrl, cbtUrl, and questions array.
 * The quiz engine should display 25 randomly shuffled questions per trial
 * from a pool of 60+ questions per chapter.
 *
 * This file must be loaded in index.html BEFORE data.js and app.js.
 */

PORTAL_INJECT("BIO 102", [

  // ─────────────────────────────────────────────────────────────────────────────
  {
    number: 1,
    title: "Survey of the Animal Kingdom & Classification",
    questionLimit: 40,
    timeLimit: 15,
    summary: "The Animal Kingdom (Kingdom Animalia) is the largest and most diverse kingdom of multicellular eukaryotes. Animals are classified based on body symmetry, number of germ layers, presence or absence of a coelom, embryonic development pattern, and other structural features. Major phyla include Porifera, Cnidaria, Platyhelminthes, Nematoda, Annelida, Arthropoda, Mollusca, Echinodermata, and Chordata. Key concepts include diploblasty vs. triploblasty, acoelomate vs. pseudocoelomate vs. coelomate, and protostome vs. deuterostome development.",
    keyPoints: [
      "Diploblastic: two germ layers (ectoderm + endoderm) — e.g. Cnidaria, Porifera",
      "Triploblastic: three germ layers (ectoderm, mesoderm, endoderm) — all higher animals",
      "Acoelomate: no body cavity (Platyhelminthes); Pseudocoelomate: false coelom (Nematoda); Coelomate: true coelom (Annelida, Arthropoda, Mollusca, Chordata)",
      "Protostomes: blastopore → mouth (Annelida, Arthropoda, Mollusca); Deuterostomes: blastopore → anus (Echinodermata, Chordata)",
      "Radial symmetry: Cnidaria, Echinodermata; Bilateral symmetry: most other phyla",
      "Parazoa (no true tissues): Porifera; Eumetazoa (true tissues): all others",
      "Morula → Blastula → Gastrula: early embryonic developmental stages",
      "Schizocoel: coelom forms by splitting of mesoderm (Annelida, Mollusca); Enterocoel: coelom from gut pouches (Echinodermata, Chordata)"
    ],
    pdfUrl: "",
    cbtUrl: "",
    questions: [
      // ── Germ layers & symmetry ──
      {
        text: "Animals with only two germ layers are described as:",
        options: ["Triploblastic", "Diploblastic", "Monoblastic", "Pseudocoelomate"],
        correct: 1,
        explanation: "Diploblastic animals (e.g. Cnidaria) have only ectoderm and endoderm; triploblastic animals have a third layer, the mesoderm."
      },
      {
        text: "Which of the following phyla is diploblastic?",
        options: ["Annelida", "Platyhelminthes", "Cnidaria", "Nematoda"],
        correct: 2,
        explanation: "Cnidarians (jellyfish, Hydra, corals) are diploblastic, possessing only ectoderm and endoderm separated by mesoglea."
      },
      {
        text: "The first stage of animal development after cleavage begins is the:",
        options: ["Blastula", "Morula", "Gastrula", "Planula"],
        correct: 1,
        explanation: "Cleavage of the zygote produces a solid ball of cells called the morula, which then hollows to form the blastula."
      },
      {
        text: "Other than Radiata (Cnidaria), eumetazoans are:",
        options: ["Diploblastic", "Triploblastic", "Monoblastic", "Acoelous"],
        correct: 1,
        explanation: "All eumetazoans except the radially symmetrical Cnidaria are triploblastic — they possess ectoderm, mesoderm, and endoderm."
      },
      {
        text: "Animals with NO body cavity between the body wall and digestive tract are called:",
        options: ["Coelomates", "Pseudocoelomates", "Acoelomates", "Eucoelomata"],
        correct: 2,
        explanation: "Acoelomates (e.g. Platyhelminthes) have solid bodies with no fluid-filled cavity; mesoderm fills the space between ectoderm and endoderm."
      },
      {
        text: "A pseudocoelom is a body cavity found between the:",
        options: ["Ectoderm and mesoderm", "Endoderm and mesoderm", "Two layers of mesoderm", "Mesoderm and ectoderm only"],
        correct: 1,
        explanation: "A pseudocoelom (false coelom) is derived from the blastocoel and lies between the endoderm and mesoderm — characteristic of Nematoda."
      },
      {
        text: "Which phylum exhibits a TRUE coelom lined entirely by mesoderm?",
        options: ["Platyhelminthes", "Nematoda", "Annelida", "Cnidaria"],
        correct: 2,
        explanation: "Annelida possesses a true eucoelomate body plan — the coelom is fully lined by mesodermal peritoneum."
      },
      {
        text: "In protostome development, the blastopore eventually becomes the:",
        options: ["Anus", "Mouth", "Coelom", "Notochord"],
        correct: 1,
        explanation: "In protostomes (e.g. Annelida, Arthropoda, Mollusca), the blastopore (first opening in the embryo) becomes the mouth."
      },
      {
        text: "In deuterostome development, the blastopore becomes the:",
        options: ["Mouth", "Notochord", "Anus", "Coelom"],
        correct: 2,
        explanation: "In deuterostomes (Echinodermata, Chordata), the blastopore becomes the anus; the mouth forms secondarily."
      },
      {
        text: "Schizocoelic phyla include:",
        options: ["Protozoa, Porifera, and Cnidaria", "Platyhelminthes and Aschelminthes", "Annelida, Arthropoda, and Mollusca", "Arthropoda, Mollusca, and Echinodermata"],
        correct: 2,
        explanation: "Schizocoel forms by splitting of mesoderm — characteristic of Annelida, Arthropoda, and Mollusca (lophotrochozoa and ecdysozoa)."
      },
      // ── Symmetry & organization ──
      {
        text: "Radial symmetry is characteristic of which phyla?",
        options: ["Porifera and Annelida", "Cnidaria and Echinodermata", "Platyhelminthes and Nematoda", "Arthropoda and Mollusca"],
        correct: 1,
        explanation: "Cnidarians (radially symmetrical throughout life) and Echinoderms (secondarily radially symmetrical as adults) both show radial symmetry."
      },
      {
        text: "The subkingdom Parazoa includes organisms that:",
        options: ["Have true tissues and organs", "Lack true tissues", "Are triploblastic", "Have bilateral symmetry"],
        correct: 1,
        explanation: "Parazoa (Porifera — sponges) lack true tissues; their cells are loosely organised without definite tissue layers."
      },
      {
        text: "Animals with the simplest tissue level of organization are described as:",
        options: ["Triploblastic", "Monoblastic", "Diploblastic", "Mesoblastic"],
        correct: 2,
        explanation: "Diploblastic animals (Cnidaria) represent the simplest tissue-grade organisation among Eumetazoa."
      },
      {
        text: "Which of the following phyla were discovered most recently?",
        options: ["Cycliophora", "Cnidaria", "Porifera", "Nematoda"],
        correct: 0,
        explanation: "Cycliophora was discovered in 1995 on the lips of lobsters — it is one of the most recently described animal phyla."
      },
      {
        text: "The eumetazoan phylum sometimes called 'wheel animals' because of their feeding mechanism is:",
        options: ["Porifera", "Rotifera", "Nematoda", "Anthozoa"],
        correct: 1,
        explanation: "Rotifera ('wheel bearers') possess a ciliated corona that creates a wheel-like appearance during feeding."
      },
      // ── Embryology & development ──
      {
        text: "In which of the following do the regulatory signals in the egg become evenly distributed during cleavage and the blastopore becomes the anus?",
        options: ["Arthropoda", "Nematoda", "Annelida", "Echinodermata"],
        correct: 3,
        explanation: "Echinoderms are deuterostomes with radial, regulative cleavage; the blastopore forms the anus — classic deuterostome characteristics."
      },
      {
        text: "The outer covering and nervous system of eumetazoans develop from the:",
        options: ["Mesoderm", "Endoderm", "Ectoderm", "Notochord"],
        correct: 2,
        explanation: "The ectoderm gives rise to the integument (skin) and the nervous system in all triploblastic animals."
      },
      {
        text: "Which group of organisms has the simplest level of multicellular organisation but NO true tissues?",
        options: ["Cnidaria", "Porifera", "Platyhelminthes", "Nematoda"],
        correct: 1,
        explanation: "Sponges (Porifera) are multicellular but parazoan — their cells are differentiated but not organised into true tissues."
      },
      {
        text: "The phylum of the simplest animals to possess a complete digestive system (mouth + anus) is:",
        options: ["Nemertea", "Rotifera", "Platyhelminthes", "Cnidaria"],
        correct: 0,
        explanation: "Nemerteans (ribbon worms) are the simplest animals with a complete, one-way digestive tract."
      },
      {
        text: "The phylum of the simplest animal to have a blood-filled circulatory system is:",
        options: ["Annelida", "Nemertea", "Arthropoda", "Mollusca"],
        correct: 1,
        explanation: "Nemertea (ribbon worms) possess the most primitive closed circulatory system among invertebrates."
      },
      // ── Classification examples ──
      {
        text: "Of the Eumetazoa listed below, which are generally considered the most primitive?",
        options: ["Chordata", "Rotifera", "Onychophora", "Ctenophora"],
        correct: 3,
        explanation: "Ctenophora (comb jellies) are considered among the most basal (primitive) eumetazoans, possibly more ancient than Cnidaria."
      },
      {
        text: "Which of the following have a one-way digestive system?",
        options: ["Flukes", "Tapeworms", "Ctenophorans", "Cnidarians"],
        correct: 2,
        explanation: "Ctenophorans (comb jellies) are unique among 'primitive' animals in possessing a complete, one-way gut."
      },
      {
        text: "Sponges belong to the subkingdom:",
        options: ["Eumetazoa", "Parazoa", "Metaphyta", "Protozoa"],
        correct: 1,
        explanation: "Porifera belong to Parazoa — they are multicellular but lack true tissues, distinguishing them from Eumetazoa."
      },
      {
        text: "Which of the following correctly pairs a phylum with its body cavity type?",
        options: ["Platyhelminthes — pseudocoelomate", "Nematoda — acoelomate", "Annelida — eucoelomate", "Cnidaria — eucoelomate"],
        correct: 2,
        explanation: "Annelida are eucoelomates (true coelom); Platyhelminthes are acoelomates; Nematoda are pseudocoelomates."
      },
      {
        text: "Animals that exhibit bilateral symmetry include:",
        options: ["Only chordates", "Vertebrates only", "Vertebrates, annelids, and arthropods", "Cnidaria and Echinodermata"],
        correct: 2,
        explanation: "Bilateral symmetry is found in Vertebrates, Annelida, Arthropoda, Mollusca, Platyhelminthes, Nematoda, and more — but NOT in adult Echinoderms or Cnidaria."
      },
      // ── Additional questions ──
      {
        text: "Which term describes the evolutionary trend of animals having a distinct head with concentrated sense organs?",
        options: ["Metamerism", "Cephalisation", "Coelomation", "Segmentation"],
        correct: 1,
        explanation: "Cephalisation is the evolutionary development of a distinct head region with concentrated nervous tissue and sense organs."
      },
      {
        text: "Metamerism refers to:",
        options: ["The presence of three germ layers", "Repeated body segments along the anterior-posterior axis", "The development of a true coelom", "Radial division of the body"],
        correct: 1,
        explanation: "Metamerism (segmentation) is the serial repetition of body units, best seen in Annelida and Arthropoda."
      },
      {
        text: "Which of the following phyla is exclusively marine?",
        options: ["Platyhelminthes", "Nematoda", "Echinodermata", "Annelida"],
        correct: 2,
        explanation: "All Echinoderms (sea stars, sea urchins, sea cucumbers) are exclusively marine — there are no freshwater or terrestrial forms."
      },
      {
        text: "A 'tube within a tube' body plan (alimentary canal running through body) is first seen in:",
        options: ["Cnidaria", "Porifera", "Nematoda", "Platyhelminthes"],
        correct: 2,
        explanation: "Nematodes have a complete, tube-within-a-tube body plan with a distinct mouth and anus — the first phylum in the 'worm' lineage to achieve this."
      },
      {
        text: "Which of the following are invertebrate deuterostomes?",
        options: ["Arthropoda and Mollusca", "Annelida and Nematoda", "Echinodermata and Hemichordata", "Platyhelminthes and Rotifera"],
        correct: 2,
        explanation: "Echinodermata and Hemichordata are invertebrate deuterostomes — they share embryological affinities with Chordata."
      },
      {
        text: "The non-living jelly-like layer between the two body layers of a cnidarian is called:",
        options: ["Mesoderm", "Mesoglea", "Mesenchyme", "Mesohyl"],
        correct: 1,
        explanation: "Mesoglea is the gelatinous matrix between the ectoderm and endoderm in cnidarians; it is not a true tissue layer."
      },
      {
        text: "Which of the following animals would be classified as a coelomate?",
        options: ["Hydra", "Planaria", "Ascaris", "Earthworm"],
        correct: 3,
        explanation: "The earthworm (Annelida) is a true coelomate — its body cavity is fully lined by mesoderm. Ascaris is pseudocoelomate; Planaria is acoelomate; Hydra is diploblastic."
      },
      {
        text: "The phylum Nematoda is the largest phylum of:",
        options: ["Coelomates", "Pseudocoelomates", "Acoelomates", "Protostomes"],
        correct: 1,
        explanation: "Nematoda is the largest phylum of pseudocoelomates, with enormous species diversity and ecological importance."
      },
      {
        text: "Key innovations of bilateral animals over radially symmetrical animals include bilateral symmetry and:",
        options: ["A coelom", "Internal organs", "A one-way digestive tract", "A body cavity"],
        correct: 1,
        explanation: "Bilateral symmetry enabled cephalisation and the development of internal organs — a major evolutionary advance over radially symmetrical animals."
      },
      {
        text: "Which of the following is NOT a characteristic of all animals?",
        options: ["Multicellularity", "Heterotrophy", "Ability to photosynthesize", "Eukaryotic cells"],
        correct: 2,
        explanation: "Animals are heterotrophs; they cannot synthesise their own food through photosynthesis. All animals are multicellular eukaryotes."
      },
      {
        text: "Which characteristic is shared by ALL members of the Animal Kingdom?",
        options: ["Presence of a coelom", "Motility at some stage of life", "Radial symmetry", "Presence of a backbone"],
        correct: 1,
        explanation: "All animals exhibit motility (movement) at some stage of their life cycle, even sessile animals like sponges have motile larvae."
      },
      {
        text: "The correct sequence of early embryonic development after fertilization is:",
        options: ["Zygote → Gastrula → Morula → Blastula", "Zygote → Blastula → Morula → Gastrula", "Zygote → Morula → Blastula → Gastrula", "Zygote → Gastrula → Blastula → Morula"],
        correct: 2,
        explanation: "Development proceeds: Zygote → cleavage → Morula (solid ball) → Blastula (hollow ball) → Gastrula (infolding to form germ layers)."
      },
      {
        text: "Animals in which the coelom forms from pouches of the gut (archenteron) are called:",
        options: ["Schizocoelous", "Enterocoelous", "Acoelous", "Pseudocoelous"],
        correct: 1,
        explanation: "Enterocoelous development (pouching of the gut wall) is characteristic of deuterostomes — Echinodermata and Chordata."
      },
      {
        text: "Pronounced cephalisation is a characteristic feature of which phylum?",
        options: ["Echinodermata", "Annelida", "Mollusca", "Arthropoda"],
        correct: 3,
        explanation: "Arthropods show pronounced cephalisation with a well-developed head bearing complex eyes, antennae, and mouthparts."
      },
      {
        text: "Which of the following animals would be described as having a haemocoelic body cavity?",
        options: ["Ascaris (roundworm)", "Leech", "Cockroach", "Earthworm"],
        correct: 2,
        explanation: "Arthropods (e.g. cockroach) have a haemocoel — blood fills the body cavity directly bathing the organs, unlike a true coelom."
      },
      {
        text: "An unsegmented, coelomate animal with a head, foot, and visceral mass is characteristic of:",
        options: ["Echinodermata", "Arthropoda", "Mollusca", "Annelida"],
        correct: 2,
        explanation: "The combination of head, foot, and visceral mass enclosed in a mantle is the diagnostic body plan of phylum Mollusca."
      },
      {
        text: "In the Animal Kingdom, which feature first distinguishes Annelida from Nematoda?",
        options: ["Presence of a complete digestive system", "Presence of a true coelom", "Bilateral symmetry", "Triploblastic organisation"],
        correct: 1,
        explanation: "Annelida have a true coelom (eucoelomate); Nematoda have only a pseudocoelom. Both are triploblastic with complete digestive systems and bilateral symmetry."
      },
      {
        text: "Spicules in Porifera are produced by which cells?",
        options: ["Archaeocytes", "Choanocytes", "Sclerocytes", "Pinacocytes"],
        correct: 2,
        explanation: "Sclerocytes (also called spongocytes/scleroblasts) are specialised amoeboid cells responsible for secreting the spicules that form the sponge skeleton."
      },
      {
        text: "Which term refers to organisms that derive their body cavity from the blastocoel?",
        options: ["Eucoelomates", "Pseudocoelomates", "Acoelomates", "Hemicoelomates"],
        correct: 1,
        explanation: "Pseudocoelomates (e.g. Nematoda) retain a body cavity derived from the embryonic blastocoel — it is not lined by mesoderm."
      },
      {
        text: "Schizocoely (coelom formation by splitting mesoderm) is characteristic of which grouping?",
        options: ["Deuterostomes", "Protostomes", "Both protostomes and deuterostomes", "Diploblastic animals"],
        correct: 1,
        explanation: "Most protostomes (Annelida, Arthropoda, Mollusca) form their coelom by schizocoely — splitting of the mesodermal band."
      },
      {
        text: "Coral reef-forming animals belong to which phylum?",
        options: ["Porifera", "Cnidaria", "Mollusca", "Echinodermata"],
        correct: 1,
        explanation: "Corals are cnidarians (class Anthozoa) that secrete calcium carbonate skeletons, forming coral reefs."
      },
      {
        text: "The study of classification and naming of organisms is called:",
        options: ["Ecology", "Taxonomy", "Morphology", "Physiology"],
        correct: 1,
        explanation: "Taxonomy is the science of classification, including describing, identifying, naming, and organising organisms into a hierarchical system."
      },
      {
        text: "The hierarchical classification of animals from broadest to most specific is:",
        options: ["Kingdom → Phylum → Class → Order → Family → Genus → Species", "Species → Genus → Family → Order → Class → Phylum → Kingdom", "Kingdom → Class → Phylum → Order → Family → Genus → Species", "Phylum → Kingdom → Class → Order → Family → Genus → Species"],
        correct: 0,
        explanation: "The standard Linnaean hierarchy (broadest to most specific): Kingdom → Phylum → Class → Order → Family → Genus → Species."
      },
      {
        text: "Which of the following represents the correct phylum for the earthworm?",
        options: ["Nematoda", "Arthropoda", "Annelida", "Platyhelminthes"],
        correct: 2,
        explanation: "Earthworms belong to phylum Annelida (class Oligochaeta) — they are segmented, coelomate worms."
      },
      {
        text: "Which animals exhibit pentaradial (five-part) symmetry in the adult form?",
        options: ["Porifera", "Cnidaria", "Echinodermata", "Arthropoda"],
        correct: 2,
        explanation: "Adult echinoderms (starfish, sea urchins, brittle stars) are pentaradially symmetrical, though they evolved from bilaterally symmetrical ancestors."
      },
      {
        text: "Which major phylum lacks a head, has an external shell in many species, and includes snails, clams, and octopuses?",
        options: ["Annelida", "Arthropoda", "Echinodermata", "Mollusca"],
        correct: 3,
        explanation: "Mollusca includes gastropods (snails), bivalves (clams), and cephalopods (octopus) — all characterised by a mantle, foot, and visceral mass."
      },
      {
        text: "True metameric segmentation (serially repeated body units) is found in which phyla?",
        options: ["Annelida and Arthropoda", "Mollusca and Echinodermata", "Cnidaria and Porifera", "Nematoda and Platyhelminthes"],
        correct: 0,
        explanation: "True metamerism (repeated body segments) is a defining feature of Annelida and Arthropoda."
      },
      {
        text: "Nematocysts are characteristic of which phylum?",
        options: ["Porifera", "Platyhelminthes", "Cnidaria", "Annelida"],
        correct: 2,
        explanation: "Nematocysts are stinging organelles housed in cnidocytes — they are unique to phylum Cnidaria."
      },
      {
        text: "Which of the following is the correct statement about Porifera?",
        options: ["They possess a nervous system", "They have true tissues", "They belong to subkingdom Eumetazoa", "They lack true tissues and organs"],
        correct: 3,
        explanation: "Sponges (Porifera) lack true tissues and organs — they are parazoan and belong to subkingdom Parazoa."
      },
      {
        text: "Which of the following correctly describes an echinoderm?",
        options: ["Bilaterally symmetrical, marine, with jointed appendages", "Radially symmetrical, exclusively marine, with a water vascular system", "Segmented worm with true coelom and setae", "Unsegmented with a mantle and muscular foot"],
        correct: 1,
        explanation: "Echinoderms are exclusively marine, pentaradially symmetrical in adult form, and uniquely possess a water vascular system for locomotion and feeding."
      },
      {
        text: "Among invertebrates, the largest and most diverse phylum is:",
        options: ["Annelida", "Mollusca", "Arthropoda", "Nematoda"],
        correct: 2,
        explanation: "Arthropoda is the largest phylum in the Animal Kingdom, containing over 80% of all known animal species."
      },
      {
        text: "The presence of jointed appendages and an exoskeleton made of chitin is characteristic of:",
        options: ["Annelida", "Echinodermata", "Arthropoda", "Mollusca"],
        correct: 2,
        explanation: "Jointed appendages and a chitinous exoskeleton are the defining synapomorphies (shared derived characters) of phylum Arthropoda."
      },
      {
        text: "Planula larva is characteristic of which phylum?",
        options: ["Porifera", "Cnidaria", "Echinodermata", "Platyhelminthes"],
        correct: 1,
        explanation: "The planula is the free-swimming, ciliated larva characteristic of cnidarians (jellyfishes, corals, sea anemones, and hydrozoans)."
      },
      {
        text: "The water vascular system is a unique feature of which phylum?",
        options: ["Arthropoda", "Mollusca", "Annelida", "Echinodermata"],
        correct: 3,
        explanation: "The water vascular system — used for locomotion, feeding, and gas exchange — is unique to and diagnostic of phylum Echinodermata."
      },
      {
        text: "Which of the following organisms is CORRECTLY classified as an invertebrate?",
        options: ["Frog", "Lizard", "Starfish", "Whale"],
        correct: 2,
        explanation: "Starfish (Echinodermata) are invertebrates — they lack a vertebral column. Frogs, lizards, and whales are all vertebrates."
      },
      {
        text: "Tube feet in echinoderms are primarily locomotory organs that operate via:",
        options: ["Muscular contraction and chitin", "Hydraulic (water vascular) pressure", "Cilia beating", "Jet propulsion"],
        correct: 1,
        explanation: "Tube feet (podia) are extensions of the water vascular system; hydraulic pressure forces them to extend and adhere to surfaces."
      },
      {
        text: "The main classification criterion that distinguishes Chordata from all other phyla is the possession of a:",
        options: ["Vertebral column", "Notochord at some stage of development", "Brain and sense organs", "Endoskeleton of bone"],
        correct: 1,
        explanation: "The defining chordate feature is a notochord (present at least in the embryo). Not all chordates have vertebral columns (e.g. lancelets and tunicates lack one)."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────────
  {
    number: 2,
    title: "Phylum Porifera (Sponges) & Phylum Cnidaria (Coelenterata)",
    questionLimit: 40,
    timeLimit: 15,
    summary: "Porifera (sponges) are the simplest multicellular animals; they are parazoan, lack true tissues, and are filter feeders with a unique canal system. Cnidaria (jellyfish, Hydra, coral, sea anemones) are diploblastic eumetazoans with radial symmetry, nematocysts (stinging cells), and a gastrovascular cavity. Cnidarians alternate between a sessile polyp form and a free-swimming medusa form. There are three main classes: Hydrozoa (Hydra, Obelia), Scyphozoa (true jellyfish), and Anthozoa (sea anemones, corals).",
    keyPoints: [
      "Porifera: pore-bearing; canal system (ostia → spongocoel → osculum); filter feeders",
      "Cell types in sponges: pinacocytes (outer wall), choanocytes/collar cells (water circulation and digestion), amoebocytes/archaeocytes (nutrient transport), sclerocytes (spicule formation)",
      "Sponge body plans: Asconoid → Syconoid → Leuconoid (increasing complexity)",
      "Sponge reproduction: asexual (budding, gemmules) and sexual (sperm + egg → amphiblastula larva)",
      "Cnidaria: nematocysts in cnidocytes; gastrovascular cavity; mesoglea between ectoderm and endoderm",
      "Hydra: Hydrozoa; hermaphrodite; prevents self-fertilisation by being protandrous",
      "Cnidarian classes: Hydrozoa (Hydra, Obelia), Scyphozoa (Aurelia — true jellyfish), Anthozoa (sea anemone, coral)",
      "Planula larva: free-swimming ciliated larva of cnidarians; settles to form polyp"
    ],
    pdfUrl: "",
    cbtUrl: "",
    questions: [
      // ── Porifera ──
      {
        text: "A sponge can be distinguished from other animals by the presence of:",
        options: ["Hollow body", "Coelenteron", "Choanocytes (collar cells)", "Dermal papillae"],
        correct: 2,
        explanation: "Choanocytes (collar cells) are unique to sponges — they bear flagella and create water currents that drive filter feeding."
      },
      {
        text: "Animals of phylum Porifera are characterised by their:",
        options: ["Diploblastic organisation", "Canal system", "Coelom", "Coelenteron"],
        correct: 1,
        explanation: "The defining feature of sponges is the canal system through which water flows, driven by flagellated choanocytes."
      },
      {
        text: "The larva of a sponge is known as:",
        options: ["Planula larva", "Trochophore larva", "Glochidium larva", "Amphiblastula larva"],
        correct: 3,
        explanation: "The amphiblastula is the free-swimming larva of most calcareous sponges; some sponges produce a parenchymula larva."
      },
      {
        text: "Gemmules in sponges are helpful in:",
        options: ["Digestion", "Sexual reproduction", "Secretion of spicules", "Survival during unfavourable conditions (drought)"],
        correct: 3,
        explanation: "Gemmules are internal buds packed with archaeocytes and nutrients, enabling sponges to survive drought, cold, or other harsh conditions."
      },
      {
        text: "Choanocytes in sponges are present on:",
        options: ["The external body surface", "Lining the spongocoel and canals", "The mesodermal layer", "Between the outer and inner layers only"],
        correct: 1,
        explanation: "Choanocytes line the spongocoel (internal cavity) and canals of sponges, driving water flow with their flagella."
      },
      {
        text: "Sycon belongs to the class:",
        options: ["Calcarea", "Demospongiae", "Hexactinellida", "Porifera"],
        correct: 0,
        explanation: "Sycon (a small, vase-shaped sponge) belongs to class Calcarea — its spicules are made of calcium carbonate."
      },
      {
        text: "The bath sponge (Euspongia) belongs to the class:",
        options: ["Calcarea", "Demospongiae", "Hexactinellida", "Anthozoa"],
        correct: 1,
        explanation: "Commercial bath sponges like Euspongia and Hippospongia belong to class Demospongiae, which includes the majority of living sponge species."
      },
      {
        text: "The most common method of reproduction in sponges is:",
        options: ["Binary fission", "Budding", "Multiple fission", "Conjugation"],
        correct: 1,
        explanation: "Budding is the most common asexual reproductive method in sponges; buds may be external or internal (gemmules)."
      },
      {
        text: "The only freshwater species of sponge is:",
        options: ["Scypha", "Euspongia", "Spongilla", "Oscarella"],
        correct: 2,
        explanation: "Spongilla is the best-known freshwater sponge genus; most other sponges are marine."
      },
      {
        text: "Venus's flower basket (Euplectella) is a:",
        options: ["Sea anemone resembling a flower basket", "Sponge made of glass-like siliceous spicules", "Glass rope sponge of class Calcarea", "Ornamental mollusc"],
        correct: 1,
        explanation: "Euplectella (Venus's flower basket) is a hexactinellid (glass sponge) with a beautiful lattice of silica spicules, found in deep-sea waters."
      },
      {
        text: "Digestion in sponges is:",
        options: ["Extracellular only", "Intercellular", "Intracellular (within cells)", "Both extra- and intracellular"],
        correct: 2,
        explanation: "Sponges digest food intracellularly — food particles are engulfed by choanocytes and amoebocytes and digested within food vacuoles."
      },
      {
        text: "Which structure allows water to exit a sponge?",
        options: ["Ostia", "Spongocoel", "Osculum", "Mesohyl"],
        correct: 2,
        explanation: "Water exits the sponge through the large apical opening called the osculum after passing through the canal system."
      },
      {
        text: "Porifera are classified as:",
        options: ["Triploblastic", "Diploblastic", "Without tissue layers", "Pseudocoelomate"],
        correct: 2,
        explanation: "Sponges are parazoan — they lack true tissue layers (not diploblastic or triploblastic in the eumetazoan sense)."
      },
      {
        text: "Which type of cells lines the interior (spongocoel) of a sponge?",
        options: ["Pinacocytes", "Choanocytes", "Porocytes", "Mesenchymal cells"],
        correct: 1,
        explanation: "Choanocytes (collar cells) line the spongocoel and flagellated chambers, creating water currents and capturing food."
      },
      {
        text: "Sponges lack which of the following systems?",
        options: ["Nervous system only", "Digestive system only", "Circulatory system only", "All of the above (nervous, digestive, and circulatory systems)"],
        correct: 3,
        explanation: "Sponges possess none of these organ systems — they rely on diffusion, intracellular digestion, and water currents for all basic functions."
      },
      {
        text: "The skeleton of a sponge is produced by which cells?",
        options: ["Pinacocytes", "Thesocytes", "Choanocytes", "Sclerocytes"],
        correct: 3,
        explanation: "Sclerocytes are amoeboid cells that secrete spicules (CaCO₃ or silica), forming the sponge's skeletal framework."
      },
      {
        text: "What is the primary role of amoebocytes in sponges?",
        options: ["Feeding and nutrient transport", "Water circulation", "Structural support", "Sexual reproduction only"],
        correct: 0,
        explanation: "Amoebocytes (archaeocytes) transport nutrients from choanocytes to other cells, and can differentiate into any other cell type — they are totipotent."
      },
      {
        text: "The term 'Porifera' literally means:",
        options: ["Filter feeders", "Pore bearers", "Hollow animals", "Colonial organisms"],
        correct: 1,
        explanation: "'Porifera' is derived from Latin porus (pore) + ferre (to bear) — referring to the numerous pores (ostia) on the sponge body."
      },
      // ── Cnidaria ──
      {
        text: "Nematocysts are the specialised stinging cells found in members of the phylum:",
        options: ["Cnidaria", "Porifera", "Annelida", "Mollusca"],
        correct: 0,
        explanation: "Nematocysts are coiled, hollow threads housed in cnidocytes — they are unique to phylum Cnidaria and used for prey capture and defence."
      },
      {
        text: "Hydra is placed under phylum Cnidaria because it has:",
        options: ["Cnidoblasts (cnidocytes)", "Tentacles", "A hypostome", "Interstitial cells"],
        correct: 0,
        explanation: "The defining cnidarian character is the cnidoblast (cnidocyte) containing nematocysts — not tentacles, which occur in other phyla too."
      },
      {
        text: "The poisonous fluid present in the nematocysts of Hydra is called:",
        options: ["Toxin", "Hypnotoxin", "Venom", "Haematin"],
        correct: 1,
        explanation: "The nematocyst of Hydra contains hypnotoxin, a paralytic venom that immobilises small prey."
      },
      {
        text: "Nematocysts are the organs of:",
        options: ["Sensation", "Reproduction", "Defence and offence (prey capture)", "Respiration"],
        correct: 2,
        explanation: "Nematocysts serve in prey capture (offence) and protection from predators (defence) — they are not sense organs."
      },
      {
        text: "Hydra prevents self-fertilisation by being:",
        options: ["Protogynous (female first)", "Hermaphroditic only", "Protandrous (male first)", "Dioecious (separate sexes)"],
        correct: 2,
        explanation: "Hydra is protandrous — testes mature before ovaries, preventing simultaneous self-fertilisation while remaining hermaphroditic."
      },
      {
        text: "The planula larva is found in the life history of:",
        options: ["Hydrozoans only", "Anthozoans only", "Scyphozoans only", "All Cnidarians"],
        correct: 3,
        explanation: "The planula is the ciliated larva produced by all cnidarian classes; it settles on a substrate and metamorphoses into a polyp."
      },
      {
        text: "Polymorphic cnidarians (showing polyp and medusa forms) are members of the class:",
        options: ["Hydrozoa", "Scyphozoa", "Anthozoa", "Cubozoa"],
        correct: 0,
        explanation: "Hydrozoans exhibit the greatest polymorphism — many colonial species (e.g. Obelia) have specialised feeding polyps, defensive polyps, and medusae."
      },
      {
        text: "Coral reef-forming coelenterates belong to the class:",
        options: ["Hydrozoa", "Scyphozoa", "Anthozoa", "Cubozoa"],
        correct: 2,
        explanation: "Corals are anthozoans — they are exclusively polypoid and secrete calcium carbonate exoskeletons that build coral reefs."
      },
      {
        text: "Among cnidarians, medusoid individuals are ABSENT in members of the class:",
        options: ["Anthozoa", "Hydrozoa", "Scyphozoa", "Cubozoa"],
        correct: 0,
        explanation: "Anthozoans (sea anemones, corals) exist only as polyps — they have no medusa stage in their life cycle."
      },
      {
        text: "Ephyra is the larval form of:",
        options: ["Sea anemone", "Aurelia (moon jellyfish)", "Obelia", "Hydra"],
        correct: 1,
        explanation: "Ephyra is the juvenile medusa of scyphozoans; it is produced by strobilation of the scyphistoma polyp — as seen in Aurelia."
      },
      {
        text: "Six septa (mesenteries) are characteristic of:",
        options: ["Aurelia", "Hydra", "Obelia", "Sea anemone"],
        correct: 3,
        explanation: "Sea anemones (Anthozoa) have six or multiples of six mesenteries (septa) dividing the gastrovascular cavity — the hexamerous plan."
      },
      {
        text: "Sea anemone is best described as a:",
        options: ["Diploblastic, radially symmetrical animal", "Diploblastic, bilaterally symmetrical animal", "Triploblastic, radially symmetrical animal", "Triploblastic, bilaterally symmetrical animal"],
        correct: 0,
        explanation: "Sea anemones are diploblastic (ectoderm + endoderm + mesoglea) and radially symmetrical — they are anthozoans in phylum Cnidaria."
      },
      {
        text: "The first invertebrate to possess musculo-epithelial cells and nerve cells is:",
        options: ["Sycon (sponge)", "Spongilla (sponge)", "Fasciola (fluke)", "Hydra"],
        correct: 3,
        explanation: "Hydra is the most primitive animal with musculo-epithelial cells (dual function) and a nerve net — representing the origin of animal neuromuscular systems."
      },
      {
        text: "The first invertebrates to develop a true nervous system are:",
        options: ["Flatworms", "Sponges", "Coelenterates (Cnidaria)", "Annelids"],
        correct: 2,
        explanation: "Cnidarians possess the most primitive nervous system — a diffuse nerve net without a central ganglion."
      },
      {
        text: "The tentacles of Hydra help in:",
        options: ["Locomotion only", "Food capture only", "Both locomotion and food capture", "Respiration"],
        correct: 2,
        explanation: "Hydra's tentacles serve for both prey capture (using nematocysts) and locomotion (somersaulting or gliding)."
      },
      {
        text: "Cnidarian digestion occurs in the gastrovascular cavity and is described as:",
        options: ["Internal and extracellular only", "Internal and intracellular only", "Internal, both extracellular and intracellular", "External and intracellular"],
        correct: 2,
        explanation: "Cnidarian digestion begins extracellularly in the gastrovascular cavity; then food fragments are engulfed by gastrodermal cells for intracellular digestion."
      },
      {
        text: "The layer between ectoderm and endoderm in cnidarians is called:",
        options: ["Mesohyl", "Mesoderm", "Mesoglea", "Pseudocoelom"],
        correct: 2,
        explanation: "Mesoglea is the non-cellular, gelatinous matrix between the ectoderm and endoderm of cnidarians; it is not a true mesoderm."
      },
      {
        text: "The planulae of Anthozoa develop into:",
        options: ["Both polyps and medusae", "Medusae only", "Polyps only", "Free-swimming adults"],
        correct: 2,
        explanation: "Anthozoan planulae settle and develop into polyps only — there is no medusa stage in the Anthozoa life cycle."
      },
      {
        text: "Scyphozoans are called jellyfish because of their:",
        options: ["Mesoderm", "Mesoglea", "Mesenchyme", "Mesentery"],
        correct: 1,
        explanation: "The large volume of mesoglea (jelly-like material) in scyphozoan medusae gives jellyfish their characteristic translucent, gelatinous appearance."
      },
      {
        text: "Which of the following is NOT a member of phylum Cnidaria?",
        options: ["Jellyfish", "Comb jelly", "Hydra", "Coral"],
        correct: 1,
        explanation: "Comb jellies belong to phylum Ctenophora — not Cnidaria. Ctenophores lack nematocysts and possess comb rows of fused cilia for locomotion."
      },
      {
        text: "Cnidarians are:",
        options: ["Asymmetrical", "Bilaterally symmetrical", "Radially symmetrical", "Trisymmetrical"],
        correct: 2,
        explanation: "Cnidarians are radially symmetrical — their body parts are arranged around a central axis, allowing them to detect stimuli from all directions."
      },
      {
        text: "A cnidocyte is a specialised cell used for:",
        options: ["Sensing light", "Digesting food", "Capturing food (prey)", "Sensing movement"],
        correct: 2,
        explanation: "Cnidocytes contain nematocysts that fire when triggered, injecting venom or entangling prey — primarily used for prey capture."
      },
      {
        text: "Which cnidarian class lacks a medusa stage?",
        options: ["Hydrozoa", "Scyphozoa", "Anthozoa", "Cubozoa"],
        correct: 2,
        explanation: "Anthozoa (sea anemones, corals) exist only as polyps — there is no free-swimming medusa stage in this class."
      },
      {
        text: "The free-swimming larval stage of cnidarians is the:",
        options: ["Planula", "Trochophore", "Amphiblastula", "Nauplius"],
        correct: 0,
        explanation: "The planula is the free-swimming, solid, ciliated larva of cnidarians; it eventually settles and metamorphoses into a polyp."
      },
      {
        text: "Which of the following cnidarians exhibits a symbiotic relationship with zooxanthellae (photosynthetic algae)?",
        options: ["Hydra", "Jellyfish (Aurelia)", "Coral (Anthozoa)", "Sea anemone"],
        correct: 2,
        explanation: "Reef-building corals harbour symbiotic dinoflagellates called zooxanthellae within their gastrodermal cells — providing nutrients and the vivid colours."
      },
      {
        text: "Which of the following statements about nematocysts is INCORRECT?",
        options: ["Stings from nematocysts may be fatal", "The osmotic pressure of a nematocyst may exceed 100 atmospheres", "Nematocysts turn inside out when fired", "Nematocysts are used only by cnidarians"],
        correct: 3,
        explanation: "Nematocysts are NOT unique to cnidarians in the strictest sense — some nudibranchs (sea slugs) ingest cnidarians and store unfired nematocysts (kleptocnidae) for their own defence. However, nematocysts are only PRODUCED by cnidarians."
      },
      {
        text: "Which of the following cnidarians has a prominent medusa stage with four oral arms?",
        options: ["Hydra", "Obelia", "Aurelia aurita (moon jellyfish)", "Millepora"],
        correct: 2,
        explanation: "Aurelia aurita is a scyphozoan with a distinctive medusa bearing four horseshoe-shaped gonads and four oral arms — the classic 'moon jellyfish.'"
      },
      // ── Extra Porifera & Cnidaria questions ──
      {
        text: "In sponges, water enters through small pores called:",
        options: ["Osculum", "Ostia (incurrent pores)", "Spongocoel", "Choanocytes"],
        correct: 1,
        explanation: "Ostia are the tiny incurrent pores on the sponge body through which water enters; it then passes through canals to the spongocoel and exits via the osculum."
      },
      {
        text: "Which of the following statements about sponges is FALSE?",
        options: ["They are capable of filter feeding", "They can regenerate lost parts", "They lack true tissues", "They are incapable of any movement throughout their life"],
        correct: 3,
        explanation: "Although adult sponges are sessile, they can make slow movements and their larvae are free-swimming — they are NOT completely immobile throughout life."
      },
      {
        text: "Sponges reproduce sexually through:",
        options: ["Binary fission", "Budding", "Production of gametes (sperm + egg)", "Regeneration only"],
        correct: 2,
        explanation: "Most sponges are hermaphroditic — they produce both sperm and eggs; fertilisation is usually cross-fertilisation between different individuals."
      },
      {
        text: "The canal system of sponges functions primarily for:",
        options: ["Locomotion", "Filter feeding and gas exchange (water circulation)", "Reproduction", "Excretion of solid waste"],
        correct: 1,
        explanation: "The canal system creates a continuous water current through the sponge, enabling filter feeding (capturing food particles) and gas exchange by diffusion."
      },
      {
        text: "Which sponge body plan represents the most complex organisation with many flagellated chambers?",
        options: ["Asconoid", "Syconoid", "Leuconoid", "Calcarea"],
        correct: 2,
        explanation: "Leuconoid is the most complex sponge body plan — the spongocoel is reduced and replaced by numerous small flagellated chambers for increased water processing efficiency."
      },
      {
        text: "Sponges are most commonly found in which environment?",
        options: ["Freshwater rivers", "Terrestrial soil", "Marine habitats", "Desert sand"],
        correct: 2,
        explanation: "The vast majority of sponges (~98%) are marine organisms; only family Spongillidae contains freshwater species."
      },
      {
        text: "The Parazoa includes sponges because they:",
        options: ["Have complex organs", "Have true tissues and nerves", "Lack true tissues and organs", "Are diploblastic like cnidarians"],
        correct: 2,
        explanation: "Sponges are parazoan — their cells are specialised but not organised into the definite tissues and organs seen in Eumetazoa."
      },
      {
        text: "In cnidarians, gas exchange occurs through:",
        options: ["Specialised gills", "Diffusion across body surfaces", "Book lungs", "Tracheae"],
        correct: 1,
        explanation: "Cnidarians lack specialised respiratory organs — gas exchange occurs entirely by diffusion across the thin body wall and gastrodermal surfaces."
      },
      {
        text: "The cnidarian body form that is sessile and vase-shaped with the mouth facing upwards is the:",
        options: ["Medusa", "Polyp", "Planula", "Ephyra"],
        correct: 1,
        explanation: "The polyp is the sessile body form — cylindrical, with the mouth and tentacles facing upward; it is attached to the substrate at its aboral end."
      },
      {
        text: "The body form of a jellyfish (umbrella-shaped, free-swimming) is called the:",
        options: ["Polyp", "Planula", "Medusa", "Cyst"],
        correct: 2,
        explanation: "The medusa is the free-swimming, bell- or umbrella-shaped body form of cnidarians; the mouth faces downward and tentacles hang below."
      },
      {
        text: "Strobilation — the production of ephyrae — is a form of asexual reproduction in which class of Cnidaria?",
        options: ["Hydrozoa", "Anthozoa", "Scyphozoa", "Cubozoa"],
        correct: 2,
        explanation: "Strobilation occurs in scyphozoans — the polyp stage (scyphistoma) segments transversely, producing a stack of juvenile medusae (ephyrae) that break off and swim free."
      },
      {
        text: "Colonial hydrozoans like the Portuguese Man-of-War (Physalia) represent which type of organisation?",
        options: ["Monomorphic — all members identical", "Polymorphic — specialised zooids for feeding, defence, reproduction, and floatation", "Single polyp with many tentacles", "Free-living medusae only"],
        correct: 1,
        explanation: "Physalia is a siphonophore — a polymorphic hydrozoan colony with highly specialised zooids: the pneumatophore (float), dactylozooids (defence), gastrozooids (feeding), and gonozooids (reproduction)."
      },
      {
        text: "Which of the following is the correct description of Obelia?",
        options: ["Solitary hydrozoan polyp", "Colonial hydrozoan with both feeding polyps (hydranths) and reproductive polyps (gonangia)", "Scyphozoan medusa", "Anthozoan polyp without medusa stage"],
        correct: 1,
        explanation: "Obelia is a colonial hydrozoan with two types of polyp: hydranths (for feeding) and gonangia (for producing free-swimming medusae that release gametes)."
      },
      {
        text: "The gastrovascular cavity in cnidarians serves which dual function?",
        options: ["Digestion and gas exchange only", "Digestion and reproduction only", "Digestion and distribution of nutrients (acting like a circulatory system)", "Respiration and excretion"],
        correct: 2,
        explanation: "The single gastrovascular cavity in cnidarians performs both digestion and distribution of nutrients to all cells — there is no separate circulatory system."
      },
      {
        text: "In sponge taxonomy, class Hexactinellida (glass sponges) have spicules made of:",
        options: ["Calcium carbonate (CaCO₃)", "Silica (SiO₂)", "Chitin", "Keratin-like spongin"],
        correct: 1,
        explanation: "Hexactinellida (e.g. Euplectella) have six-rayed spicules made of silica (hydrated silicon dioxide) — giving them a glass-like appearance."
      },
      {
        text: "The mesohyl (middle layer) of sponges corresponds functionally to which structure in cnidarians?",
        options: ["Endoderm", "Ectoderm", "Mesoglea", "Gastrovascular cavity"],
        correct: 2,
        explanation: "Both mesohyl (sponge) and mesoglea (cnidarian) are the non-cellular jelly-like middle layers — though mesohyl contains many more amoeboid cells."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────────
  {
    number: 3,
    title: "Platyhelminthes, Nematoda & Annelida",
    questionLimit: 40,
    timeLimit: 15,
    summary: "Platyhelminthes (flatworms) are triploblastic, acoelomate, bilaterally symmetrical worms. Classes include Turbellaria (free-living), Trematoda (flukes), and Cestoda (tapeworms). Nematoda (roundworms) are pseudocoelomate, bilaterally symmetrical, and possess a cuticle and complete digestive system. Annelida are the first coelomate worm-like animals; their defining feature is true metamerism. Classes include Polychaeta (marine bristle worms), Oligochaeta (earthworms), and Hirudinea (leeches).",
    keyPoints: [
      "Platyhelminthes: triploblastic, acoelomate; flame cells for excretion; ladder-type nervous system; hermaphroditic",
      "Fasciola hepatica (liver fluke): endoparasite of sheep liver; intermediate host = Limnaea truncatula (snail); infective stage to sheep = encysted metacercaria",
      "Taenia solium (pork tapeworm) — pig host; Taenia saginata (beef tapeworm) — cattle host; attach via scolex; no alimentary canal (saprozic feeding)",
      "Schistosoma = blood fluke of man; Miracidium larva swims with cilia",
      "Nematoda: pseudocoelomate; complete gut; cuticle; excretion via renette cells; Ascaris, Wuchereria (elephantiasis), Trichinella spiralis (trichinosis)",
      "Annelida: true coelom; metamerism; nephridia; closed circulatory system; advances over Nematoda",
      "Earthworm (Lumbricus): cutaneous respiration; nephridia; typhlosole increases absorptive surface; haemoglobin dissolved in plasma",
      "Leech (Hirudinea): secretes hirudin (anticoagulant); sanguinivorous; lacks setae"
    ],
    pdfUrl: "",
    cbtUrl: "",
    questions: [
      // ── Platyhelminthes ──
      {
        text: "Platyhelminthes are best described as:",
        options: ["Flatworms, triploblastic, acoelomate animals", "Flatworms, diploblastic, acoelomates", "Flatworms, triploblastic, coelomates", "Flatworms, triploblastic, pseudocoelomates"],
        correct: 0,
        explanation: "Platyhelminthes are triploblastic (three germ layers), acoelomate (no body cavity), and dorsoventrally flattened."
      },
      {
        text: "An important character which Platyhelminthes share with cnidarians is:",
        options: ["Diploblastic condition", "Single cavity communicating with the exterior (gastrovascular cavity)", "Three germ layers and no coelom", "Presence of a complicated reproductive system"],
        correct: 1,
        explanation: "Both Platyhelminthes and Cnidaria have an incomplete (blind-ended) gastrovascular cavity — a single opening serves as both mouth and anus."
      },
      {
        text: "Free-living Platyhelminthes belong to the class:",
        options: ["Cestoda", "Trematoda", "Turbellaria", "Nematoda"],
        correct: 2,
        explanation: "Turbellaria includes free-living flatworms such as Planaria. Trematoda (flukes) and Cestoda (tapeworms) are parasitic."
      },
      {
        text: "In helminths, flame cells are components of the:",
        options: ["Reproductive system", "Excretory (protonephridial) system", "Nervous system", "Respiratory system"],
        correct: 1,
        explanation: "Flame cells (solenocytes) are the functional unit of the protonephridial excretory system in Platyhelminthes; their beating cilia resemble a flickering flame."
      },
      {
        text: "Fasciola hepatica is an endoparasite that lives in the:",
        options: ["Liver of sheep", "Blood of sheep", "Spleen of sheep", "Intestine of sheep"],
        correct: 0,
        explanation: "Fasciola hepatica (liver fluke) lives in the bile ducts of the sheep liver (and occasionally other mammals, including humans)."
      },
      {
        text: "The intermediate host in the life cycle of Taenia saginata (beef tapeworm) is:",
        options: ["Pig", "Goat", "Dog", "Cattle (cow)"],
        correct: 3,
        explanation: "Cattle are the intermediate host of Taenia saginata — humans become infected by eating undercooked beef containing cysticerci."
      },
      {
        text: "Taenia solium lacks an alimentary canal because:",
        options: ["It does not require any food", "It lives in the intestine", "It has a saprozoic (absorptive) mode of feeding", "None of the above"],
        correct: 2,
        explanation: "Tapeworms absorb pre-digested nutrients directly through their tegument (body surface) — they have no need for a digestive system."
      },
      {
        text: "Which of the following is called the 'blood fluke' of man?",
        options: ["Taenia", "Paragonimus", "Fasciola", "Schistosoma"],
        correct: 3,
        explanation: "Schistosoma (schistosomiasis/bilharzia) lives in the blood vessels of the human mesenteric veins — hence the name 'blood fluke.'"
      },
      {
        text: "Rhabdites are present in the cells of the epidermis in:",
        options: ["Cestoda", "Trematoda", "Turbellaria", "None of these"],
        correct: 2,
        explanation: "Rhabdites are rod-shaped secretory bodies unique to the epidermis of turbellarians; they may help in mucus secretion or prey capture."
      },
      {
        text: "Cilia help in locomotion over solid surfaces in:",
        options: ["Miracidium larva of Fasciola", "Planaria", "Hydra", "Turbellaria"],
        correct: 3,
        explanation: "Turbellarians (e.g. Planaria) glide over surfaces using ventral cilia combined with muscular waves — cilia are the primary locomotory mechanism."
      },
      {
        text: "Which of the following swim by ciliary action?",
        options: ["Adult Fasciola", "Miracidium, redia, and cercaria of Fasciola", "Miracidium larva of Fasciola only", "Redia larva of Fasciola"],
        correct: 2,
        explanation: "The miracidium is the only free-swimming, ciliated larval stage of Fasciola — redia and cercaria are not ciliated."
      },
      {
        text: "In the life cycle of the liver fluke, sheep become infected when they ingest:",
        options: ["Encysted cercariae (metacercariae)", "Miracidia", "Sporocysts", "Rediae"],
        correct: 0,
        explanation: "Cercariae encyst on vegetation as metacercariae — sheep ingest these while grazing. This is the infective stage for the definitive host."
      },
      {
        text: "A well-developed nervous system and sense organs are present in members of the class:",
        options: ["Turbellaria", "Cestoda", "Trematoda", "Hirudinea"],
        correct: 0,
        explanation: "Turbellarians (free-living flatworms) have the most developed nervous system among Platyhelminthes, including an anterior brain ganglion and sense organs."
      },
      {
        text: "Miracidium is a larval stage in the development of:",
        options: ["Taenia solium", "Fasciola hepatica", "Ascaris", "Echinococcus"],
        correct: 1,
        explanation: "The miracidium is the first free-swimming larval stage of Fasciola hepatica; it hatches from eggs and infects the snail intermediate host."
      },
      {
        text: "The intermediate host of Fasciola hepatica is:",
        options: ["Limnaea truncatula (freshwater snail)", "Pila globosa", "Lamellidens", "Helix (garden snail)"],
        correct: 0,
        explanation: "The mud snail Limnaea truncatula (also known as Galba truncatula) is the specific intermediate host of Fasciola hepatica."
      },
      {
        text: "Sexually, most flatworms are:",
        options: ["Parthenogenic", "Asexual", "Hermaphroditic", "Amorphous"],
        correct: 2,
        explanation: "Nearly all flatworms are hermaphroditic — they possess both male and female reproductive organs in the same individual."
      },
      {
        text: "The attachment organ of a tapeworm used for anchoring to the host's intestines is the:",
        options: ["Proglottid", "Scolex", "Cyst", "Seta"],
        correct: 1,
        explanation: "The scolex is the head-like attachment organ of tapeworms, bearing suckers and sometimes hooks (rostellum) for anchoring to the intestinal wall."
      },
      {
        text: "The segments of a tapeworm that contain reproductive organs are called:",
        options: ["Scolex", "Proglottids", "Setae", "Flame cells"],
        correct: 1,
        explanation: "Proglottids are the repeated segments of a tapeworm's strobila, each containing a complete set of male and female reproductive organs."
      },
      {
        text: "In humans, the infective stage of the liver fluke is the:",
        options: ["Sporocyst", "Redia", "Miracidium", "Metacercaria"],
        correct: 3,
        explanation: "Metacercaria (encysted cercaria on vegetation) is the infective stage for humans and sheep — ingested by eating contaminated watercress or water."
      },
      {
        text: "The parasite that infects people who eat undercooked pork is:",
        options: ["Clonorchis sinensis", "Schistosoma", "Trichinella spiralis", "Dugesia (Planaria)"],
        correct: 2,
        explanation: "Trichinella spiralis (a nematode) and Taenia solium (a tapeworm) are both transmitted through undercooked pork — Trichinella causes trichinosis."
      },
      // ── Nematoda ──
      {
        text: "Nematodes are commonly known as:",
        options: ["Flatworms", "Roundworms", "Segmented worms", "Ribbon worms"],
        correct: 1,
        explanation: "Nematodes are called roundworms due to their cylindrical, unsegmented, circular cross-section body shape."
      },
      {
        text: "The body cavity of Nematoda is a:",
        options: ["True coelom", "Pseudocoelom", "Acoelom", "Haemocoel"],
        correct: 1,
        explanation: "Nematodes have a pseudocoelom — a fluid-filled body cavity between endoderm and mesoderm derived from the blastocoel."
      },
      {
        text: "The outer body covering of a nematode is called the:",
        options: ["Cuticle", "Epidermis", "Shell", "Mesoderm"],
        correct: 0,
        explanation: "Nematodes are covered by a tough, non-cellular cuticle that provides protection and must be shed (moulted) four times during development."
      },
      {
        text: "Which nematode causes the disease Elephantiasis?",
        options: ["Ascaris lumbricoides", "Trichinella spiralis", "Wuchereria bancrofti", "Hookworm"],
        correct: 2,
        explanation: "Wuchereria bancrofti is a filarial nematode transmitted by mosquitoes that blocks lymphatic vessels, causing the massive limb swelling of elephantiasis."
      },
      {
        text: "The excretory system in nematodes consists of:",
        options: ["Nephridia", "Flame cells", "Renette cells", "Kidneys"],
        correct: 2,
        explanation: "Renette cells (gland cells) form the excretory system in nematodes; in more advanced species these form an H-shaped canal system."
      },
      {
        text: "Which disease is caused by the nematode Trichinella spiralis?",
        options: ["Malaria", "Trichinosis", "Filariasis", "Schistosomiasis"],
        correct: 1,
        explanation: "Trichinosis (trichinellosis) is a parasitic disease caused by eating undercooked meat (especially pork) infected with Trichinella spiralis larvae."
      },
      {
        text: "The process of moulting (shedding of cuticle) in nematodes is called:",
        options: ["Metamorphosis", "Ecdysis", "Strobilation", "Regeneration"],
        correct: 1,
        explanation: "Ecdysis — shedding of the cuticle — occurs four times during nematode development (L1→L2→L3→L4→Adult)."
      },
      {
        text: "The best-known free-living nematode used as a model organism in genetics is:",
        options: ["Hookworm", "Ascaris", "Caenorhabditis elegans", "Trichinella"],
        correct: 2,
        explanation: "C. elegans is a transparent, free-living soil nematode whose complete cell lineage is known; it is a crucial model in developmental biology and genetics."
      },
      // ── Annelida ──
      {
        text: "Annelids show advancement over Nematoda in having:",
        options: ["Metamerism (segmentation)", "True coelom", "Closed circulatory system", "All of the above"],
        correct: 3,
        explanation: "Annelids advance over nematodes in: true metamerism, true eucoelomate coelom, a closed circulatory system, and nephridia."
      },
      {
        text: "The anticoagulant secreted by a leech is:",
        options: ["Heparin", "Hirudin", "Haematin", "Haemoglobin"],
        correct: 1,
        explanation: "Hirudin is secreted by salivary glands of leeches; it inhibits thrombin and prevents blood clotting at the feeding site."
      },
      {
        text: "Leech belongs to the class:",
        options: ["Oligochaeta", "Hirudinea", "Polychaeta", "Chaetopoda"],
        correct: 1,
        explanation: "Leeches belong to class Hirudinea — they are annelids that lack setae and have suckers at both anterior and posterior ends."
      },
      {
        text: "Totally marine annelids belong to the class:",
        options: ["Oligochaeta", "Hirudinea", "Polychaeta", "Chaetopoda"],
        correct: 2,
        explanation: "Polychaeta (bristle worms, e.g. Nereis, Aphrodite) are predominantly marine annelids bearing parapodia with numerous setae."
      },
      {
        text: "The mode of respiration in the earthworm is:",
        options: ["Cutaneous (through moist skin)", "Through gills", "Pulmonary", "Through book lungs"],
        correct: 0,
        explanation: "Earthworms breathe by cutaneous respiration — oxygen diffuses through the moist body wall and CO₂ is expelled the same way."
      },
      {
        text: "The excretory units of Annelida are:",
        options: ["Uriniferoustubules", "Flame cells", "Nephridia", "Nephrostomes only"],
        correct: 2,
        explanation: "Nephridia are the segmentally repeated excretory organs of annelids; each nephridium opens internally via a nephrostome and exits through a nephridiopore."
      },
      {
        text: "The role of the typhlosole in the intestine of an earthworm is to:",
        options: ["Increase absorptive surface area", "Control flow of blood", "Produce digestive enzymes", "Kill bacteria"],
        correct: 0,
        explanation: "The typhlosole is a dorsal fold of the intestine wall that increases the surface area for absorption of digested nutrients."
      },
      {
        text: "Haemoglobin in earthworms is dissolved in:",
        options: ["Plasma (blood)", "Corpuscles (blood cells)", "Coelomic fluid", "Nephridial fluid"],
        correct: 0,
        explanation: "Earthworm haemoglobin is dissolved directly in the plasma (erythrochlorin) — unlike vertebrate haemoglobin which is contained within red blood cells."
      },
      {
        text: "Which of the following is commonly called 'Nature's ploughman'?",
        options: ["Nereis (ragworm)", "Cattle leech", "Earthworm", "Polygordius"],
        correct: 2,
        explanation: "Earthworms are called nature's ploughmen because they tunnel through soil, aerating and mixing it, improving soil fertility and structure."
      },
      {
        text: "The mode of feeding in leeches is described as:",
        options: ["Herbivorous", "Carnivorous", "Omnivorous", "Sanguinivorous (blood-feeding)"],
        correct: 3,
        explanation: "Leeches are sanguinivorous — they feed on blood of vertebrates using muscular suckers and secrete hirudin to keep blood flowing."
      },
      {
        text: "A common feature between cockroach and earthworm is:",
        options: ["Nephridia", "Ommatidia", "Cocoon formation", "Ventral nerve cord"],
        correct: 3,
        explanation: "Both earthworms (Annelida) and cockroaches (Arthropoda) have a ventral nerve cord as part of their central nervous system."
      },
      {
        text: "Chromophil cells in earthworms are concerned with the secretion of:",
        options: ["Amylase", "Protease", "Lipases", "Cocoon material"],
        correct: 1,
        explanation: "Chromophil cells (protein cells) in the earthworm's digestive glands secrete proteolytic enzymes (proteases) for protein digestion."
      },
      {
        text: "Nereis is commonly called:",
        options: ["Earthworm", "Calmworm", "Ragworm (clam worm)", "Roundworm"],
        correct: 2,
        explanation: "Nereis (Neanthes) is a polychaete annelid commonly called a ragworm or clamworm — it is carnivorous and found in marine environments."
      },
      {
        text: "In the earthworm, fertilisation occurs in the:",
        options: ["Oviduct", "Water (external)", "Cocoon", "Ootheca"],
        correct: 0,
        explanation: "In earthworms, sperm from a mating partner are stored in spermathecae; fertilisation occurs in the oviduct as eggs and sperm are deposited in the cocoon."
      },
      {
        text: "In earthworms, nephridiia WITHOUT nephrostomes are called:",
        options: ["Integumentary nephridia", "Pharyngeal nephridia", "Septal nephridia", "Both integumentary and pharyngeal"],
        correct: 0,
        explanation: "Integumentary nephridia (found on the inner body wall) lack nephrostomes (internal openings) — they discharge waste directly through the skin."
      },
      {
        text: "The first body segment of an earthworm is called the:",
        options: ["Peristome", "Peristomium", "Prostomium", "Protostome"],
        correct: 2,
        explanation: "The prostomium is the pre-oral lobe of the earthworm — it overhangs the mouth and is technically not a true segment."
      },
      {
        text: "Flatworms respire primarily through:",
        options: ["Gills", "Lungs", "Body surface (diffusion)", "Spiracles"],
        correct: 2,
        explanation: "Platyhelminthes have no specialised respiratory organs — their flat body maximises surface area for direct diffusion of gases through the body wall."
      },
      {
        text: "The nervous system in Platyhelminthes is best described as:",
        options: ["A nerve net (diffuse)", "A nerve ladder (two longitudinal cords + cross-connectives)", "A nerve chord", "A nerve ring"],
        correct: 1,
        explanation: "Flatworms have a ladder-type nervous system — two ventral longitudinal cords connected by transverse commissures (rungs of a ladder)."
      },
      {
        text: "Which class of Annelida is exclusively marine and bears parapodia?",
        options: ["Oligochaeta", "Hirudinea", "Polychaeta", "Cestoda"],
        correct: 2,
        explanation: "Polychaeta are marine annelids with parapodia (paddle-like appendages) bearing numerous setae (chaetae) for locomotion."
      },
      {
        text: "Tapeworms attach to the intestinal lining of the host by means of their:",
        options: ["Proglottids", "Stylets", "Osculum", "Scolex"],
        correct: 3,
        explanation: "The scolex bears suckers (and hooks in armed species) for firm attachment to the mucosa of the host's small intestine."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────────
  {
    number: 4,
    title: "Arthropoda, Mollusca & Echinodermata",
    questionLimit: 40,
    timeLimit: 15,
    summary: "Arthropoda is the largest phylum, characterised by jointed appendages, a chitinous exoskeleton, and a haemocoel. Major classes: Insecta, Arachnida, Crustacea, Myriapoda. Mollusca have a mantle, foot, and visceral mass; classes include Gastropoda, Bivalvia, and Cephalopoda. Echinodermata are exclusively marine, pentaradially symmetrical adults with a water vascular system and internal calcareous skeleton.",
    keyPoints: [
      "Arthropoda: jointed appendages, chitinous exoskeleton, haemocoelic cavity, metamorphosis (complete = holometabolous; incomplete = hemimetabolous)",
      "Insecta: three body regions (head, thorax, abdomen); three pairs of legs; compound eyes with ommatidia",
      "Cockroach: nitrogenous waste = uric acid; Malpighian tubules float in haemolymph; taste organs in palps and epipharynx",
      "Arachnida: book lungs for respiration; 4 pairs walking legs; e.g. spiders, scorpions, ticks",
      "Mollusca: mantle secretes shell; radula for feeding (except bivalves); open circulatory system (except Cephalopoda)",
      "Cephalopoda: most advanced molluscs; ink glands; closed circulatory system; e.g. Sepia, Octopus, Loligo",
      "Echinodermata: exclusively marine; pentaradial symmetry; water vascular system; tube feet; no excretory organs",
      "Echinoderm larvae: bipinnaria (starfish), echinopluteus (sea urchin), auricularia (sea cucumber)"
    ],
    pdfUrl: "",
    cbtUrl: "",
    questions: [
      // ── Arthropoda ──
      {
        text: "Metamerically segmented, bilaterally symmetrical animals bearing jointed appendages are characteristic of:",
        options: ["Helminthes", "Annelida", "Mollusca", "Arthropoda"],
        correct: 3,
        explanation: "Jointed appendages (arthropoda = 'jointed feet'), bilateral symmetry, and metamerism are the defining features of phylum Arthropoda."
      },
      {
        text: "Pronounced cephalisation is a characteristic of:",
        options: ["Echinodermata", "Annelida", "Mollusca", "Arthropoda"],
        correct: 3,
        explanation: "Arthropods show pronounced cephalisation — the head is highly developed with compound eyes, antennae, and specialised mouthparts."
      },
      {
        text: "A hemocoelic body cavity is characteristic of:",
        options: ["Ascaris", "Leech", "Cockroach", "Snails"],
        correct: 2,
        explanation: "Arthropods (e.g. cockroach) have a haemocoel — blood fills the body cavity, bathing organs directly rather than circulating in closed vessels."
      },
      {
        text: "Division of the body into head, thorax, and abdomen is a characteristic of:",
        options: ["Insecta", "Insecta and Arachnida", "Insecta and Crustacea", "Insecta and Myriapoda"],
        correct: 0,
        explanation: "Three distinct body regions (head, thorax, abdomen) are diagnostic of class Insecta — the only arthropod class with this plan."
      },
      {
        text: "The most primitive arthropods belong to the class:",
        options: ["Arachnida", "Insecta", "Onychophora (velvet worms)", "Myriapoda"],
        correct: 2,
        explanation: "Onychophora (velvet worms) are often considered the most primitive/ancestral arthropods — they retain soft, unsclerotised bodies and simple legs."
      },
      {
        text: "Book lungs are the respiratory organs of:",
        options: ["Insects", "Crustaceans", "Arachnids (spiders)", "Peripatus"],
        correct: 2,
        explanation: "Book lungs — stacked lamellae in abdominal cavities — are the primary respiratory organs of arachnids (spiders and scorpions)."
      },
      {
        text: "The organs of taste in cockroach are present in:",
        options: ["Epipharynx only", "Hypopharynx", "Pharynx", "Palps and epipharynx"],
        correct: 3,
        explanation: "Taste (contact chemoreceptors) in the cockroach are concentrated on the palps (appendages near the mouthparts) and the epipharynx."
      },
      {
        text: "The distal parts of Malpighian tubules in cockroach:",
        options: ["Open into haemolymph", "Open into the coelomic cavity", "Float freely in haemolymph", "Are attached to the alimentary canal"],
        correct: 2,
        explanation: "The distal (blind) ends of Malpighian tubules float freely in the haemolymph, absorbing uric acid; the proximal ends open into the hindgut."
      },
      {
        text: "The nitrogenous waste in cockroach is mainly excreted as:",
        options: ["Urea", "Uric acid", "Ammonia", "Urea and uric acid"],
        correct: 1,
        explanation: "Uric acid is the primary nitrogenous excretory product of insects (including cockroach) — it is insoluble and can be excreted with minimal water loss."
      },
      {
        text: "True and complete metamorphosis (holometabolism: egg → larva → pupa → adult) is found in:",
        options: ["Silverfish", "Grasshopper", "Cockroach", "Moth and mosquito"],
        correct: 3,
        explanation: "Moths and mosquitoes undergo holometabolism (complete metamorphosis). Silverfish have no metamorphosis; grasshoppers and cockroaches have incomplete (hemimetabolous) metamorphosis."
      },
      {
        text: "Communication in bees by special body movements (waggle dance) was discovered by:",
        options: ["T.H. Morgan", "Karl von Frisch", "Robert Koch", "I. Pavlov"],
        correct: 1,
        explanation: "Karl von Frisch (Nobel Prize 1973) decoded the bee waggle dance and demonstrated that it communicates the direction and distance of food sources."
      },
      {
        text: "The photosensitive part of an insect ommatidium is the:",
        options: ["Crystalline cone", "Pigment cells", "Rhabdome", "Sensory neuron"],
        correct: 2,
        explanation: "The rhabdome is the fused photoreceptive structure at the centre of each ommatidium in an insect compound eye — analogous to the retinal rod/cone layer."
      },
      {
        text: "The mouthparts of a housefly are of the:",
        options: ["Piercing and sucking type", "Biting and chewing type", "Sucking and sponging type", "Biting, sucking, and lapping type"],
        correct: 2,
        explanation: "The housefly has sponging-type mouthparts (labellum with pseudotracheae) — it secretes saliva to dissolve food and sponges up the liquid."
      },
      {
        text: "The male and female cockroach can be distinguished by their:",
        options: ["Size", "Wings", "Anal styles", "Colour"],
        correct: 2,
        explanation: "Male cockroaches possess a pair of anal styles (cerci-associated structures) — females lack these. Both sexes have wings and similar colouring."
      },
      {
        text: "Incomplete metamorphosis (hemimetabolism: egg → nymph → adult) is found in:",
        options: ["Butterfly", "Housefly", "Cockroach", "Beetle"],
        correct: 2,
        explanation: "Cockroaches undergo hemimetabolism (incomplete metamorphosis) — nymphs resemble adults but lack wings; there is no pupal stage."
      },
      // ── Mollusca ──
      {
        text: "The combination of head, foot, and visceral mass is diagnostic of phylum:",
        options: ["Echinodermata", "Arthropoda", "Mollusca", "Annelida"],
        correct: 2,
        explanation: "The molluscan body plan: a muscular foot for locomotion, a head bearing sense organs (absent in bivalves), and a visceral mass covered by the mantle."
      },
      {
        text: "An internal shell is present in:",
        options: ["Pila (apple snail)", "Sepia (cuttlefish)", "Chiton", "Lamellidens (freshwater mussel)"],
        correct: 1,
        explanation: "The cuttlebone in Sepia (Cephalopoda) is an internal shell — cuttlefish are one of the few molluscs with a fully internal shell."
      },
      {
        text: "The larva present only in members of Gastropoda is the:",
        options: ["Trochophore", "Veliger", "Glochidium", "Müller's larva"],
        correct: 1,
        explanation: "The veliger larva (with a ciliated velum for swimming) is characteristic of gastropods and bivalves; the glochidium is unique to freshwater mussels."
      },
      {
        text: "Osphradium in molluscs is used to:",
        options: ["Taste food", "Test the purity/chemistry of water", "Secrete mucus", "Excrete nitrogenous waste"],
        correct: 1,
        explanation: "The osphradium is a chemosensory organ near the mantle cavity gill — it detects chemical and sediment content in incoming water."
      },
      {
        text: "Sepia is commonly known as:",
        options: ["Starfish", "Jellyfish", "Cuttlefish", "Silverfish"],
        correct: 2,
        explanation: "Sepia is the cuttlefish — a cephalopod mollusc known for its ability to change colour and for the cuttlebone (internal shell)."
      },
      {
        text: "Ink glands as a means of escape from predators are present in:",
        options: ["Pila (Gastropoda)", "Unio (Pelecypoda)", "Sepia (Cephalopoda)", "Dentalium (Scaphopoda)"],
        correct: 2,
        explanation: "Ink sacs (containing melanin-based ink) are found in cephalopods (Sepia, Loligo, Octopus) — ink clouds confuse predators allowing escape."
      },
      {
        text: "Pearls of commercial value are produced by which genus?",
        options: ["Pinctada (pearl oyster)", "Unio", "Anodonta", "Ostrea (edible oyster)"],
        correct: 0,
        explanation: "Pinctada (the pearl oyster) secretes nacre (mother of pearl) around an irritant to form valuable natural pearls."
      },
      {
        text: "The 'pearl mother layer' (nacre) in a mollusc shell is the:",
        options: ["Prismatic layer", "Periostracum", "Nacreous layer", "Mantle"],
        correct: 2,
        explanation: "The nacreous layer (inner layer) is composed of aragonite crystals and gives pearls and the inside of shells their iridescent appearance."
      },
      {
        text: "The largest invertebrate is:",
        options: ["Octopus vulgaris", "Loligo (squid)", "Sepia (cuttlefish)", "Architeuthis (giant squid)"],
        correct: 3,
        explanation: "Architeuthis (the giant squid) is the largest invertebrate, with mantle lengths over 2 m and total body lengths exceeding 13 m."
      },
      {
        text: "Devil fish is the common name of:",
        options: ["Sepia", "Loligo", "Octopus", "Teredo"],
        correct: 2,
        explanation: "Octopus is commonly called the 'devil fish' or 'devilfish' because of its eight arms, ink-squirting ability, and fearsome historical reputation."
      },
      {
        text: "The most advanced molluscs belong to the class:",
        options: ["Cephalopoda", "Gastropoda", "Amphineura", "Monoplacophora"],
        correct: 0,
        explanation: "Cephalopoda (octopus, squid, cuttlefish, nautilus) are the most advanced molluscs — they have a closed circulatory system, complex eyes, and a large brain."
      },
      // ── Echinodermata ──
      {
        text: "Which of the following systems is found in Echinoderms?",
        options: ["Nervous system", "Excretory system", "Respiratory system", "System of internal (endoskeleton) calcium carbonate plates"],
        correct: 3,
        explanation: "Echinoderms have an internal skeleton (endoskeleton) of calcium carbonate ossicles — they possess no specialised excretory organs."
      },
      {
        text: "The locomotory organs of Echinoderms are called:",
        options: ["Parapodia", "Pseudopodia", "Tube feet (podia)", "Setae"],
        correct: 2,
        explanation: "Tube feet (podia) are hydraulic appendages of the water vascular system, used for locomotion, prey capture, and gas exchange in echinoderms."
      },
      {
        text: "Echinoderms are related to chordates by their similarity in the development of their:",
        options: ["Gut", "Nervous system", "Heart", "Coelom (enterocoelic)"],
        correct: 3,
        explanation: "Both Echinodermata and Chordata are deuterostomes — they share enterocoelic coelom formation and similar larval body plans (evidence of common ancestry)."
      },
      {
        text: "Aristotle's lantern is a characteristic feature of:",
        options: ["Starfishes", "Sea urchins", "Brittle stars", "Holothurians"],
        correct: 1,
        explanation: "Aristotle's lantern is the complex jaw apparatus of sea urchins (Echinoidea) — a set of five teeth for scraping algae from rocks."
      },
      {
        text: "Auricularia is the larva of:",
        options: ["Echinoidea", "Asteroidea", "Ophiuroidea", "Holothuroidea (sea cucumber)"],
        correct: 3,
        explanation: "Auricularia larva is characteristic of Holothuroidea (sea cucumbers) — it is a ciliated, bilaterally symmetrical larva."
      },
      {
        text: "Which of the following is a living fossil among Echinodermata?",
        options: ["Holothuria (sea cucumber)", "Antedon (feather star/sea lily)", "Ophiothrix (brittle star)", "Echinus (sea urchin)"],
        correct: 1,
        explanation: "Antedon and other crinoids (feather stars and sea lilies) are considered living fossils — they closely resemble ancient Paleozoic crinoids."
      },
      {
        text: "Which of the following is NOT true of Echinoderms?",
        options: ["Exclusively marine habitat", "Schizocoelic coelom", "No excretory organs", "Water vascular system"],
        correct: 1,
        explanation: "Echinoderms are enterocoelomates (coelom from gut pouches) — NOT schizocoelous. All other options are correct characteristics."
      },
      {
        text: "Bipinnaria larva is found in the development of:",
        options: ["Sea lily", "Starfish (Asteroidea)", "Sea cucumber", "Brittle star"],
        correct: 1,
        explanation: "The bipinnaria is the first free-swimming larva of starfishes (Asteroidea); it subsequently develops into a brachiolaria larva."
      },
      {
        text: "Pedicellariae in echinoderms are modified:",
        options: ["Tube feet", "Integumentary structures", "Spines", "Ossicles"],
        correct: 2,
        explanation: "Pedicellariae are pincer-like structures derived from modified spines; they keep the body surface clean and may help capture small prey."
      },
      {
        text: "Starfishes are:",
        options: ["Herbivorous", "Carnivorous", "Filter feeders", "Omnivorous"],
        correct: 1,
        explanation: "Starfishes are carnivorous — they evert their cardiac stomach out of their mouth to digest prey (especially bivalves) externally."
      },
      {
        text: "The larva that occurs in the development of sea urchin is:",
        options: ["Auricularia", "Echinopluteus", "Bipinnaria", "Pluteus"],
        correct: 1,
        explanation: "The echinopluteus is the pluteus larva specific to sea urchins (Echinoidea), bearing long arms supported by calcareous rods."
      },
      {
        text: "A sausage-shaped body form is characteristic of:",
        options: ["Echinoidea", "Asteroidea", "Ophiuroidea", "Holothuroidea (sea cucumbers)"],
        correct: 3,
        explanation: "Sea cucumbers (Holothuroidea) have an elongated, soft, sausage-like body oriented along the oral-aboral axis — very different from other echinoderms."
      },
      {
        text: "Madreporite is associated with which system?",
        options: ["Haemal system", "Digestive system", "Ambulacral (water vascular) system", "Reproductive system"],
        correct: 2,
        explanation: "The madreporite is the sieve-like opening (on the aboral surface in most echinoderms) through which seawater enters the water vascular system."
      },
      {
        text: "The main difference between starfishes and brittle stars is in the:",
        options: ["Number of arms", "Tube feet", "Structure of the ambulacral groove", "Pedicellariae"],
        correct: 2,
        explanation: "In brittle stars (Ophiuroidea), the ambulacral groove is closed (covered); in starfishes (Asteroidea), it is open (exposed) on the oral surface of each arm."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────────
  {
    number: 5,
    title: "Phylum Chordata: Protochordates & Vertebrates",
    questionLimit: 40,
    timeLimit: 15,
    summary: "Chordates are defined by four key features at some stage of development: a notochord, a dorsal hollow nerve cord, pharyngeal gill slits, and a post-anal tail. Protochordates (invertebrate chordates) include Urochordata (tunicates/sea squirts) and Cephalochordata (lancelets/Amphioxus). Vertebrates possess a vertebral column and include Agnatha (jawless fish), Chondrichthyes (cartilaginous fish), Osteichthyes (bony fish), Amphibia, Reptilia, Aves (birds), and Mammalia.",
    keyPoints: [
      "Four chordate hallmarks: notochord, dorsal hollow nerve cord, pharyngeal gill slits, post-anal tail",
      "Cephalochordata (Amphioxus/Branchiostoma): notochord persists throughout life; lacks true brain and heart; filter feeding with endostyle",
      "Urochordata (tunicates/sea squirts): adult is sessile, larva has all four chordate features; tunic (cellulose-like covering)",
      "Fish: Chondrichthyes (placoid scales, cartilage, no swim bladder) vs Osteichthyes (bony skeleton, operculum, swim bladder)",
      "Amphibia: external fertilisation; metamorphosis; moist skin for cutaneous respiration; three-chambered heart",
      "Reptilia: dry scaly skin; amniotic egg; internal fertilisation; uric acid excretion; ectothermic",
      "Aves: hollow bones; feathers; four-chambered heart; air sacs + lungs; warm-blooded (endothermic); keel for flight muscle attachment",
      "Mammalia: mammary glands; hair/fur; endothermic; diaphragm; Monotremes (egg-laying), Marsupials (pouch), Placentals"
    ],
    pdfUrl: "",
    cbtUrl: "",
    questions: [
      // ── Chordate fundamentals ──
      {
        text: "Which of the following structures is present in ALL chordates at some stage of their development?",
        options: ["Cranium", "Notochord", "Spinal cord", "Vertebral column"],
        correct: 1,
        explanation: "The notochord is the defining synapomorphy of phylum Chordata — all chordates possess it at least in the embryonic stage."
      },
      {
        text: "Three germ layers (ectoderm, endoderm, mesoderm) are found in:",
        options: ["All chordates only", "All chordates except protochordates", "All chordates and higher invertebrates", "Higher chordates and higher invertebrates only"],
        correct: 2,
        explanation: "All triploblastic animals — including all chordates AND many higher invertebrates (Annelida, Arthropoda, etc.) — have three germ layers."
      },
      {
        text: "Which of the following organisms NEITHER has a notochord NOR a vertebral column in the adult stage?",
        options: ["Cephalochordates (Amphioxus)", "Herdmania (tunicate)", "Petromyzon (lamprey)", "Bdellostoma"],
        correct: 1,
        explanation: "In Herdmania (a urochordate/tunicate), the adult is sessile and lacks both notochord and nerve cord — these are only present in the larval stage."
      },
      {
        text: "Pharyngeal gill slits are described as a unique chordate characteristic because they are:",
        options: ["Found only in fish", "Found in all chordates at some stage and in no other phylum originally", "Found in higher invertebrates and vertebrates", "Not found in protochordates"],
        correct: 1,
        explanation: "Pharyngeal gill slits (or their embryonic remnants) are found in ALL chordates — including terrestrial vertebrates in embryonic life — and are unique to Chordata."
      },
      {
        text: "Paired segmental nerves with dorsal and ventral roots are found in:",
        options: ["Annelids", "Arthropods", "Vertebrates", "All of these"],
        correct: 2,
        explanation: "The dorsal (sensory) and ventral (motor) roots of spinal nerves merging to form mixed segmental nerves is a characteristic unique to vertebrates."
      },
      {
        text: "The term 'head' in vertebrate morphology includes the brain, skull, sense organs, jaws, and:",
        options: ["Brain and its protective coverings only", "Brain, protective coverings, and major sense organs only", "Brain, skull, sense organs, and jaws only", "Brain, skull, sense organs, jaws, and pharyngeal skeleton"],
        correct: 3,
        explanation: "The vertebrate head includes all cranial structures: brain + skull + sense organs + jaws + pharyngeal skeleton (derived from neural crest cells)."
      },
      {
        text: "In which of the following is the heart NOT ventral in position?",
        options: ["Fish", "Frog", "Lamprey", "Crabs"],
        correct: 3,
        explanation: "In vertebrates, the heart is ventral; in crustaceans (Crustacea, e.g. crabs), the heart is dorsal — located above the gut in the haemocoel."
      },
      // ── Protochordata ──
      {
        text: "The term 'Protochordata' is generally used to describe organisms from which subphyla?",
        options: ["Mollusca and Echinodermata", "Cephalochordata and Urochordata", "Arthropoda and Annelida", "Porifera and Cnidaria"],
        correct: 1,
        explanation: "Protochordates are invertebrate chordates — the two subphyla are Urochordata (tunicates) and Cephalochordata (lancelets/Amphioxus)."
      },
      {
        text: "In Cephalochordates (Amphioxus), the notochord:",
        options: ["Is replaced by a vertebral column in the adult", "Is absent in the adult", "Extends from head to tail throughout life", "Is only present in the larval stage"],
        correct: 2,
        explanation: "In Amphioxus (Branchiostoma), the notochord persists throughout life and extends the full length of the body — unlike vertebrates where it is replaced by vertebrae."
      },
      {
        text: "In Urochordates (tunicates), the adult stage is mostly:",
        options: ["Free-swimming", "Sessile (attached)", "Parasitic", "Planktonic"],
        correct: 1,
        explanation: "Adult tunicates (sea squirts) are sessile — they lose the notochord and dorsal nerve cord during metamorphosis from the free-swimming larva."
      },
      {
        text: "The larval stage of Urochordates resembles vertebrates because it possesses:",
        options: ["Jointed appendages", "A notochord and dorsal nerve cord", "A developed brain and eyes", "Pharyngeal jaws"],
        correct: 1,
        explanation: "The tadpole larva of tunicates has all four chordate features (notochord, dorsal nerve cord, gill slits, post-anal tail) — linking them to vertebrate ancestors."
      },
      {
        text: "Which function does the endostyle perform in Protochordates?",
        options: ["Movement", "Secretion of mucus to trap food particles", "Excretion of waste", "Respiration"],
        correct: 1,
        explanation: "The endostyle is a ciliated groove in the floor of the pharynx that secretes mucus to trap food particles — it is homologous to the vertebrate thyroid gland."
      },
      {
        text: "Cephalochordates differ from vertebrates in that they:",
        options: ["Lack a notochord", "Have an exoskeleton", "Lack a true brain and heart", "Have jointed limbs"],
        correct: 2,
        explanation: "Amphioxus lacks a true brain (only an enlarged anterior nerve tube), has no heart (blood moves by contracting vessels), and has no paired eyes."
      },
      {
        text: "Hemichordates share which chordate feature?",
        options: ["Presence of a notochord", "Pharyngeal gill slits", "Post-anal tail", "Dorsal nerve cord"],
        correct: 1,
        explanation: "Hemichordates (acorn worms) have pharyngeal gill slits but the 'notochord-like' stomochord in the proboscis is not homologous to the true notochord."
      },
      // ── Fish ──
      {
        text: "A characteristic feature of Osteichthyes (bony fish) is:",
        options: ["Cartilaginous skeleton", "Swim bladder for buoyancy control", "No jaws", "Placoid scales"],
        correct: 1,
        explanation: "The swim bladder (gas bladder) is a defining feature of most bony fish — it adjusts buoyancy by altering gas content."
      },
      {
        text: "In Chondrichthyes (cartilaginous fish), the skeleton is made primarily of:",
        options: ["Bone", "Cartilage", "Chitin", "Calcium carbonate"],
        correct: 1,
        explanation: "Chondrichthyes (sharks, rays, skates) have a fully cartilaginous endoskeleton — bone is absent, replaced by calcified cartilage."
      },
      {
        text: "Placoid scales are a distinguishing feature of:",
        options: ["Osteichthyes", "Chondrichthyes (sharks and rays)", "Amphibia", "Reptilia"],
        correct: 1,
        explanation: "Placoid scales (dermal denticles) — tooth-like, enamel-covered scales — are unique to Chondrichthyes and give shark skin its rough texture."
      },
      {
        text: "The lateral line system in fish is used to detect:",
        options: ["Light", "Sound", "Electrical fields only", "Water vibrations and pressure changes"],
        correct: 3,
        explanation: "The lateral line system detects low-frequency vibrations and pressure changes in water — crucial for schooling behaviour and predator/prey detection."
      },
      // ── Amphibia ──
      {
        text: "Amphibians typically reproduce by:",
        options: ["Internal fertilisation and laying shelled eggs", "External fertilisation and laying unshelled eggs in water", "Parthenogenesis", "Live birth only"],
        correct: 1,
        explanation: "Amphibians (frogs, salamanders) typically reproduce with external fertilisation in water; eggs lack shells and must remain moist."
      },
      {
        text: "A characteristic feature of amphibians is:",
        options: ["Dry, scaly skin", "Lungs for breathing in all life stages", "Moist, permeable skin used for gas exchange", "A four-chambered heart"],
        correct: 2,
        explanation: "Amphibian skin is moist and highly vascularised, allowing significant cutaneous respiration — essential since their lungs are simple sac-like structures."
      },
      {
        text: "Amphibians undergo which process during development from larva (tadpole) to adult?",
        options: ["Regeneration", "Metamorphosis", "Ecdysis", "Parthenogenesis"],
        correct: 1,
        explanation: "Metamorphosis — a dramatic developmental transformation — converts the aquatic tadpole (with gills, tail, no limbs) into the terrestrial adult frog."
      },
      {
        text: "The tadpole larva of a frog breathes through:",
        options: ["Skin", "Gills", "Lungs", "Spiracles"],
        correct: 1,
        explanation: "Tadpoles breathe through internal gills in early stages, then through external gills; adult frogs develop lungs and also use cutaneous respiration."
      },
      {
        text: "The three-chambered heart is a feature of which vertebrate groups?",
        options: ["Mammals and birds", "Reptiles and amphibians", "Fish and mammals", "Birds and reptiles"],
        correct: 1,
        explanation: "Reptiles (except crocodilians) and amphibians have a three-chambered heart (two atria + one ventricle) — allowing some mixing of oxygenated and deoxygenated blood."
      },
      // ── Reptilia ──
      {
        text: "Reptiles are characterised by:",
        options: ["Moist skin and external fertilisation", "Dry, scaly skin and amniotic eggs", "Gills for respiration", "Presence of feathers"],
        correct: 1,
        explanation: "Key reptile features: dry, keratinised scaly skin (waterproof), internal fertilisation, amniotic eggs (or live birth), and ectothermy."
      },
      {
        text: "Reptiles excrete nitrogenous waste primarily as:",
        options: ["Ammonia", "Urea", "Uric acid", "Creatinine"],
        correct: 2,
        explanation: "Uric acid excretion (uricotely) conserves water — critical for terrestrial and desert-dwelling reptiles, as uric acid can be excreted as a paste."
      },
      {
        text: "The amniotic egg — which protects the developing embryo with extraembryonic membranes — is an adaptation seen in:",
        options: ["Amphibians", "Reptiles, birds, and mammals", "Fish and amphibians", "Reptiles and amphibians"],
        correct: 1,
        explanation: "The amniotic egg (with amnion, chorion, allantois, yolk sac) evolved in reptiles and was inherited by birds and mammals — enabling full terrestrial reproduction."
      },
      // ── Aves ──
      {
        text: "Birds (Aves) are unique among vertebrates because they have:",
        options: ["Hollow bones and feathers", "Moist skin for respiration", "A three-chambered heart", "External fertilisation"],
        correct: 0,
        explanation: "Hollow (pneumatised) bones reduce weight for flight, and feathers provide insulation and lift — unique avian adaptations."
      },
      {
        text: "Birds differ from reptiles mainly because they:",
        options: ["Are cold-blooded (ectothermic)", "Have a four-chambered heart", "Lay eggs in water", "Use gills for respiration"],
        correct: 1,
        explanation: "Birds are endothermic and have a fully four-chambered heart (complete separation of oxygenated/deoxygenated blood) — shared only with mammals among tetrapods."
      },
      {
        text: "The keel (carina) found in the sternum of birds is an adaptation for:",
        options: ["Swimming", "Flight (attachment of flight muscles)", "Running", "Burrowing"],
        correct: 1,
        explanation: "The keel is a large, blade-like projection of the sternum that provides a large surface area for the attachment of powerful flight muscles (pectoralis major)."
      },
      {
        text: "Birds have which type of respiratory system?",
        options: ["Simple sac-like lungs only", "Air sacs connected to lungs for unidirectional airflow", "Gills and lungs", "Tracheae (like insects)"],
        correct: 1,
        explanation: "The avian respiratory system uses air sacs (9 in total) to create a one-way flow of air through the lungs — far more efficient than the tidal breathing of mammals."
      },
      // ── Mammalia ──
      {
        text: "The characteristic feature of mammals is the presence of:",
        options: ["Feathers", "Mammary glands and hair/fur", "External gills", "Placoid scales"],
        correct: 1,
        explanation: "Mammary glands (for nursing offspring) and hair/fur (for insulation) are the two synapomorphies that define class Mammalia."
      },
      {
        text: "Which mammals lay eggs (monotremes)?",
        options: ["Whales and dolphins", "Platypus and echidna", "Kangaroo and koala", "Bats and moles"],
        correct: 1,
        explanation: "Monotremes — the platypus (Ornithorhynchus) and echidnas (Tachyglossus) — are the only egg-laying mammals; they still nurse young with milk."
      },
      {
        text: "Marsupial mammals are characterised by:",
        options: ["Laying eggs", "Carrying young in a pouch (marsupium) after very short gestation", "Internal development of offspring in a placenta", "Lack of mammary glands"],
        correct: 1,
        explanation: "Marsupials (kangaroos, koalas, wombats) give birth to underdeveloped young that continue development in the mother's pouch while nursing."
      },
      {
        text: "Placental mammals are characterised by:",
        options: ["Laying eggs", "External development of offspring", "Internal development of offspring nourished through a placenta", "Giving birth to underdeveloped young"],
        correct: 2,
        explanation: "Eutherian (placental) mammals nourish the foetus through the placenta — a vascular organ connecting maternal and foetal circulations — allowing extended internal development."
      },
      {
        text: "The diaphragm — a muscle used in breathing — is found exclusively in:",
        options: ["Amphibians", "Birds", "Reptiles", "Mammals"],
        correct: 3,
        explanation: "The diaphragm is a uniquely mammalian structure — a dome-shaped muscular sheet separating the thoracic and abdominal cavities, essential for tidal breathing."
      },
      {
        text: "Which vertebrate classes are endothermic (warm-blooded)?",
        options: ["Reptilia and Mammalia", "Amphibia and Aves", "Aves and Mammalia", "Chondrichthyes and Reptilia"],
        correct: 2,
        explanation: "Birds (Aves) and Mammals are the only endothermic vertebrates — they maintain a constant internal body temperature through metabolic heat generation."
      },
      {
        text: "In which animal does the heart NOT have separate left and right auricles?",
        options: ["Cartilaginous and bony fishes", "Frogs and toads", "Lizards and snakes", "Crocodiles and alligators"],
        correct: 0,
        explanation: "Fish have a two-chambered heart (one atrium + one ventricle) — there are no separate left and right auricles. Frogs have two atria; reptiles and birds/mammals have two atria + ventricles."
      },
      {
        text: "Centrum, pre- and post-zygapophysis, and transverse process are parts of a:",
        options: ["Skull of frog", "Vertebra of frog", "Sternum of frog", "Pectoral girdle of frog"],
        correct: 1,
        explanation: "These are all components of a vertebra: the centrum (body), pre- and post-zygapophyses (articulating processes), and transverse processes (lateral projections)."
      },
      {
        text: "In which of the following animals does the notochord NOT persist throughout life?",
        options: ["Amphioxus", "Tunicates (Urochordata)", "Petromyzon (lamprey)", "Myxine (hagfish)"],
        correct: 1,
        explanation: "In tunicates (Urochordata), the notochord is only present in the larval tail; it is absent in the sessile adult, which retains none of the larval chordate features."
      },
      {
        text: "Hepatic portal system is present in:",
        options: ["Amniotes only", "Anamniotes only", "Both amniotes and anamniotes", "Amphibians and mammals only"],
        correct: 2,
        explanation: "The hepatic portal system (carrying blood from the intestines to the liver) is present in ALL vertebrates — both amniotes (reptiles, birds, mammals) and anamniotes (fish, amphibia)."
      },
      {
        text: "Which of the following is a vertebrate organism?",
        options: ["Cuttlefish", "Crayfish", "Globefish (puffer fish)", "Devilfish (octopus)"],
        correct: 2,
        explanation: "Globefish (puffer fish, Fugu) is a true vertebrate — a member of Osteichthyes. Cuttlefish and octopus are molluscs; crayfish is a crustacean."
      },
      {
        text: "Mammals are able to maintain a constant body temperature due to:",
        options: ["The presence of feathers", "Endothermic metabolism and insulation from fur or hair", "Moist skin used for gas exchange", "A three-chambered heart"],
        correct: 1,
        explanation: "Mammalian endothermy is maintained by a high metabolic rate generating heat, with insulation provided by fur/hair and subcutaneous fat."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────────
  {
    number: 6,
    title: "Introduction to Ecology",
    questionLimit: 40,
    timeLimit: 15,
    summary: "Ecology is the scientific study of interactions between organisms and their environment. Key concepts include abiotic (physical) and biotic (living) factors, habitat, niche, population, community, ecosystem, and biome. Feeding relationships (food chains, food webs, trophic levels) and biogeochemical cycles (carbon, nitrogen, water, phosphorus) describe the flow of energy and materials. Ecological adaptations allow organisms to survive in specific environments — terrestrial, aquatic (freshwater and marine), arboreal, and desert.",
    keyPoints: [
      "Ecology levels: individual → population → community → ecosystem → biosphere",
      "Abiotic factors: temperature, light, humidity, rainfall, soil pH, salinity, wind",
      "Biotic factors: predation, competition, symbiosis (mutualism, commensalism, parasitism), decomposition",
      "Food chain: Producer → Primary consumer → Secondary consumer → Tertiary consumer; energy decreases at each trophic level (10% rule)",
      "Biogeochemical cycles: Carbon cycle (photosynthesis, respiration, decomposition, combustion); Nitrogen cycle (fixation, nitrification, denitrification); Water cycle; Phosphorus cycle",
      "Ecological adaptations: xerophytes (desert plants), xerocoles (desert animals), hydrophytes (aquatic plants)",
      "Population ecology: natality, mortality, immigration, emigration; logistic vs exponential growth; carrying capacity (K)",
      "Symbiosis: mutualism (both benefit), commensalism (one benefits, other unaffected), parasitism (one benefits, other harmed)"
    ],
    pdfUrl: "",
    cbtUrl: "",
    questions: [
      // ── Basic ecology ──
      {
        text: "Ecology is best defined as the study of:",
        options: ["Fossils and ancient life", "Interactions between organisms and their environment", "The classification of living things", "The structure and function of cells"],
        correct: 1,
        explanation: "Ecology (from Greek oikos = house) is the branch of biology studying the relationships between organisms and their physical and biological environment."
      },
      {
        text: "The physical, non-living components of an environment (e.g. temperature, light, water) are called:",
        options: ["Biotic factors", "Abiotic factors", "Trophic factors", "Edaphic factors"],
        correct: 1,
        explanation: "Abiotic factors are all the physical and chemical non-living components of an environment that affect organisms."
      },
      {
        text: "The living components of an ecosystem (plants, animals, decomposers) are called:",
        options: ["Abiotic factors", "Edaphic factors", "Biotic factors", "Climatic factors"],
        correct: 2,
        explanation: "Biotic factors include all living organisms in an ecosystem and their interactions (predation, competition, mutualism, decomposition)."
      },
      {
        text: "The specific place where an organism lives within an ecosystem is its:",
        options: ["Niche", "Habitat", "Biome", "Community"],
        correct: 1,
        explanation: "A habitat is the physical environment where an organism lives — providing food, water, shelter, and space. The niche is the organism's functional role."
      },
      {
        text: "An organism's ecological niche refers to its:",
        options: ["Physical location in the environment", "Functional role and position in the ecosystem", "Preferred food source only", "Body size relative to other species"],
        correct: 1,
        explanation: "The ecological niche encompasses where an organism lives, what it eats, when it is active, and how it interacts with other species — its full functional role."
      },
      {
        text: "A group of individuals of the same species occupying the same area at the same time is called a:",
        options: ["Community", "Ecosystem", "Population", "Biome"],
        correct: 2,
        explanation: "A population is a group of conspecific (same species) individuals living in the same geographic area and capable of interbreeding."
      },
      {
        text: "All the populations of different species living together in the same area form a:",
        options: ["Population", "Ecosystem", "Community", "Biosphere"],
        correct: 2,
        explanation: "A community (biotic community) is all the populations of different species interacting in the same area — the biotic component of an ecosystem."
      },
      {
        text: "An ecosystem consists of:",
        options: ["Only the living organisms in an area", "Only the physical environment of an area", "A community of living organisms together with their physical environment", "A single population in its habitat"],
        correct: 2,
        explanation: "An ecosystem = community (all living organisms) + abiotic environment — including the flows of energy and matter between them."
      },
      {
        text: "The largest ecological unit encompassing all of Earth's ecosystems and all living things is the:",
        options: ["Biome", "Ecosystem", "Community", "Biosphere"],
        correct: 3,
        explanation: "The biosphere is the global ecological unit — the zone of Earth (land, water, atmosphere) that supports life."
      },
      // ── Food chains & energy flow ──
      {
        text: "In a food chain, organisms that make their own food through photosynthesis are called:",
        options: ["Primary consumers", "Secondary consumers", "Producers (autotrophs)", "Decomposers"],
        correct: 2,
        explanation: "Producers (autotrophs) — mainly green plants and algae — form the base of every food chain by converting solar energy to chemical energy through photosynthesis."
      },
      {
        text: "The correct sequence of a typical terrestrial food chain is:",
        options: ["Herbivore → Plant → Carnivore → Decomposer", "Plant → Herbivore → Carnivore → Decomposer", "Carnivore → Herbivore → Plant → Decomposer", "Decomposer → Plant → Herbivore → Carnivore"],
        correct: 1,
        explanation: "Energy flows from producers (plants) → primary consumers (herbivores) → secondary consumers (carnivores) → tertiary consumers → decomposers."
      },
      {
        text: "According to the 10% energy rule in ecology, when energy is transferred from one trophic level to the next:",
        options: ["100% of energy is passed on", "Only about 10% of energy is available to the next level", "50% of energy is lost", "All energy is stored in biomass"],
        correct: 1,
        explanation: "Approximately 90% of energy is lost as heat at each trophic level — only about 10% is available to be incorporated into the biomass of the next level."
      },
      {
        text: "Organisms that feed on dead organic matter and break it down are called:",
        options: ["Producers", "Consumers", "Decomposers (saprotrophic organisms)", "Parasites"],
        correct: 2,
        explanation: "Decomposers (bacteria and fungi) break down dead organic matter, recycling nutrients back into the ecosystem."
      },
      {
        text: "A food web differs from a food chain in that it:",
        options: ["Shows a single pathway of energy flow", "Shows all interconnected feeding relationships in an ecosystem", "Only includes plants and herbivores", "Excludes decomposers"],
        correct: 1,
        explanation: "A food web is a more realistic representation showing all the interconnected food chains — most organisms feed on multiple species and are eaten by multiple predators."
      },
      {
        text: "Herbivores occupy which trophic level?",
        options: ["First trophic level (producers)", "Second trophic level (primary consumers)", "Third trophic level (secondary consumers)", "Fourth trophic level (tertiary consumers)"],
        correct: 1,
        explanation: "Herbivores (plant-eaters) are primary consumers occupying the second trophic level, directly above the producers."
      },
      // ── Biogeochemical cycles ──
      {
        text: "The process by which plants absorb carbon dioxide from the atmosphere to produce glucose is called:",
        options: ["Respiration", "Decomposition", "Photosynthesis", "Combustion"],
        correct: 2,
        explanation: "Photosynthesis removes CO₂ from the atmosphere and fixes it into organic compounds (glucose) using light energy — the primary entry point of carbon into the biotic cycle."
      },
      {
        text: "Which process releases CO₂ back into the atmosphere in the carbon cycle?",
        options: ["Photosynthesis only", "Nitrogen fixation", "Respiration, decomposition, and combustion", "Denitrification"],
        correct: 2,
        explanation: "CO₂ is returned to the atmosphere through: cellular respiration (by all organisms), decomposition (by microbes), and combustion (burning of fossil fuels and biomass)."
      },
      {
        text: "The conversion of atmospheric nitrogen (N₂) into ammonia (NH₃) by bacteria is called:",
        options: ["Nitrification", "Denitrification", "Nitrogen fixation", "Ammonification"],
        correct: 2,
        explanation: "Nitrogen fixation is carried out by N₂-fixing bacteria (e.g. Rhizobium in root nodules, Azotobacter in soil) — converting unreactive N₂ into bioavailable NH₃."
      },
      {
        text: "Which bacteria convert ammonia (NH₃) to nitrate (NO₃⁻) in soil?",
        options: ["Denitrifying bacteria (e.g. Pseudomonas)", "Nitrifying bacteria (e.g. Nitrosomonas, Nitrobacter)", "Nitrogen-fixing bacteria (e.g. Rhizobium)", "Decomposing bacteria"],
        correct: 1,
        explanation: "Nitrifying bacteria: Nitrosomonas converts NH₃ → nitrite (NO₂⁻); Nitrobacter converts NO₂⁻ → nitrate (NO₃⁻) — making nitrogen available for plant uptake."
      },
      {
        text: "Denitrification returns nitrogen to the atmosphere by converting:",
        options: ["N₂ to NH₃", "NO₃⁻ to N₂ (or N₂O)", "NH₃ to NO₃⁻", "Organic N to NH₃"],
        correct: 1,
        explanation: "Denitrifying bacteria (e.g. Pseudomonas) reduce nitrate → nitrite → N₂ gas, releasing nitrogen back into the atmosphere and completing the nitrogen cycle."
      },
      {
        text: "The water cycle involves which of the following processes?",
        options: ["Photosynthesis and respiration only", "Evaporation, transpiration, condensation, precipitation, and runoff", "Nitrogen fixation and denitrification", "Combustion and decomposition"],
        correct: 1,
        explanation: "The hydrological (water) cycle includes: evaporation from water bodies + transpiration from plants → condensation → precipitation → surface runoff and infiltration."
      },
      // ── Adaptations ──
      {
        text: "Organisms that are adapted to live in very dry (arid) environments are called:",
        options: ["Hydrophytes", "Mesophytes", "Xerophytes (or xerocoles for animals)", "Epiphytes"],
        correct: 2,
        explanation: "Xerophytes (plants) and xerocoles (animals) have structural, physiological, and behavioural adaptations to survive in arid environments with minimal water."
      },
      {
        text: "Which of the following is an adaptation of desert animals to reduce water loss?",
        options: ["Producing large amounts of dilute urine", "Excreting concentrated uric acid and being nocturnal", "Having thin, moist skin", "Living near water sources only"],
        correct: 1,
        explanation: "Desert animals conserve water by: excreting concentrated nitrogenous waste (uric acid), being nocturnal (avoiding daytime heat), and having impermeable skin."
      },
      {
        text: "Plants adapted to aquatic environments are called:",
        options: ["Xerophytes", "Mesophytes", "Halophytes", "Hydrophytes"],
        correct: 3,
        explanation: "Hydrophytes are plants adapted to living in water or waterlogged soils — they have aerenchyma (air spaces), reduced roots, and often floating leaves."
      },
      {
        text: "Camouflage as a form of ecological adaptation primarily helps animals:",
        options: ["Attract mates", "Regulate body temperature", "Avoid predators (or ambush prey) through concealment", "Conserve water"],
        correct: 2,
        explanation: "Camouflage (cryptic colouration) is a defensive/offensive adaptation that makes an organism difficult to detect against its background."
      },
      {
        text: "Deep-sea animals often have bioluminescence as an adaptation for:",
        options: ["Photosynthesis in the dark", "Communication, prey attraction, and mate recognition in the dark", "Defence against UV radiation", "Buoyancy regulation"],
        correct: 1,
        explanation: "Bioluminescence in deep-sea organisms (fish, squid, jellyfish) serves functions including luring prey (e.g. anglerfish), communication, and species/mate recognition in the aphotic zone."
      },
      // ── Symbiosis & interactions ──
      {
        text: "A relationship where both organisms benefit is called:",
        options: ["Commensalism", "Parasitism", "Mutualism", "Predation"],
        correct: 2,
        explanation: "Mutualism is a symbiotic relationship in which both partners derive benefit — e.g. nitrogen-fixing Rhizobium bacteria in legume root nodules."
      },
      {
        text: "A relationship where one organism benefits and the other is neither helped nor harmed is called:",
        options: ["Mutualism", "Parasitism", "Commensalism", "Predation"],
        correct: 2,
        explanation: "Commensalism: one species benefits while the host is unaffected — e.g. barnacles attached to whale skin, or epiphytic plants on tree branches."
      },
      {
        text: "An organism that lives in or on another organism (the host) and derives benefit at the host's expense is called a:",
        options: ["Mutualist", "Commensalist", "Parasite", "Predator"],
        correct: 2,
        explanation: "A parasite benefits from its host (for nutrition, shelter, or reproduction) while harming the host — but typically does not kill it immediately."
      },
      {
        text: "Competition between individuals of the same species for the same resources is called:",
        options: ["Interspecific competition", "Intraspecific competition", "Coevolution", "Amensalism"],
        correct: 1,
        explanation: "Intraspecific competition (within a species) is generally more intense than interspecific competition because individuals have identical resource needs."
      },
      // ── Population ecology ──
      {
        text: "The maximum number of individuals of a species that an environment can support indefinitely is called its:",
        options: ["Population density", "Birth rate", "Carrying capacity (K)", "Biotic potential"],
        correct: 2,
        explanation: "Carrying capacity (K) is the maximum population size sustainable by available resources in the long term — it determines the plateau of logistic growth."
      },
      {
        text: "Which of the following factors can INCREASE a population's size?",
        options: ["Increased mortality and emigration", "Natality (birth rate) and immigration", "Predation and disease", "Resource depletion"],
        correct: 1,
        explanation: "Population growth is driven by natality (births) + immigration; it is reduced by mortality (deaths) + emigration."
      },
      {
        text: "The type of growth where a population increases rapidly without resource limitation (J-shaped curve) is called:",
        options: ["Logistic growth", "Exponential (geometric) growth", "Equilibrium growth", "Stationary growth"],
        correct: 1,
        explanation: "Exponential (biotic potential) growth occurs when resources are unlimited — the population doubles at regular intervals, producing a J-shaped growth curve."
      },
      // ── Terrestrial & aquatic habitats ──
      {
        text: "Tropical rainforests are characterised by:",
        options: ["Low biodiversity and seasonal drought", "High biodiversity, high rainfall, and high temperatures year-round", "Low temperatures and permafrost", "Open grassland with scattered trees"],
        correct: 1,
        explanation: "Tropical rainforests receive >2000mm rainfall annually, are hot year-round, and harbour the greatest terrestrial biodiversity (~50% of all species)."
      },
      {
        text: "The zone in a lake where light penetration supports photosynthesis is called the:",
        options: ["Profundal zone", "Benthic zone", "Photic (euphotic) zone", "Aphotic zone"],
        correct: 2,
        explanation: "The photic (euphotic) zone is the upper layer of a water body where sufficient sunlight penetrates for photosynthesis — typically the upper 200 m of ocean."
      },
      {
        text: "Mangrove forests are an example of which type of ecosystem?",
        options: ["Freshwater ecosystem", "Desert ecosystem", "Coastal/estuarine ecosystem", "Deep-sea ecosystem"],
        correct: 2,
        explanation: "Mangroves are coastal, intertidal forest ecosystems at the interface of land and sea — they are highly productive nursery habitats in tropical and subtropical regions."
      },
      {
        text: "The process by which nutrient enrichment of a water body leads to excessive algal growth and oxygen depletion is called:",
        options: ["Desertification", "Eutrophication", "Leaching", "Salinisation"],
        correct: 1,
        explanation: "Eutrophication occurs when excess nutrients (especially nitrogen and phosphorus from agriculture/sewage) cause algal blooms that deplete dissolved oxygen, killing fish."
      },
      {
        text: "Which of the following best describes the concept of a 'climax community'?",
        options: ["A community in early stages of ecological succession", "A pioneer community that first colonises bare rock", "A stable, mature community that represents the endpoint of ecological succession", "A community disrupted by a natural disaster"],
        correct: 2,
        explanation: "A climax community is the relatively stable, self-sustaining end-point of ecological succession — it changes little unless disturbed."
      },
      {
        text: "The relationship between a clownfish and sea anemone (where the fish is protected by the anemone and the anemone benefits from nutrients in the fish's waste) is an example of:",
        options: ["Parasitism", "Commensalism", "Mutualism", "Predation"],
        correct: 2,
        explanation: "The clownfish–sea anemone relationship is mutualistic — the fish gains protection from the nematocyst-armed tentacles; the anemone gains nutrients and defense from the fish."
      },
      {
        text: "Biotic factors that control population growth are collectively called:",
        options: ["Abiotic resistance", "Environmental resistance", "Density-dependent factors", "Carrying capacity"],
        correct: 2,
        explanation: "Density-dependent factors (predation, disease, competition) become more intense as population density increases — they are key biotic regulators of population size."
      },
      {
        text: "The term 'biodiversity' refers to:",
        options: ["The total number of individuals in an ecosystem", "The variety of life at genetic, species, and ecosystem levels", "Only the number of plant species in an area", "The total biomass of an ecosystem"],
        correct: 1,
        explanation: "Biodiversity encompasses genetic diversity (within species), species diversity (number and variety of species), and ecosystem diversity (variety of habitats and ecological processes)."
      },
      {
        text: "Photosynthesis and respiration together form the basis of which biogeochemical cycle?",
        options: ["Nitrogen cycle", "Water cycle", "Carbon cycle", "Phosphorus cycle"],
        correct: 2,
        explanation: "Photosynthesis (CO₂ fixation) and respiration (CO₂ release) are the two primary biological processes that drive the carbon cycle."
      },
      {
        text: "Which of the following correctly describes the phosphorus cycle?",
        options: ["It has a significant atmospheric reservoir like carbon", "It involves nitrogen fixation by bacteria", "It has no significant atmospheric phase — phosphorus cycles through rocks, soil, water, and organisms", "It is driven primarily by combustion"],
        correct: 2,
        explanation: "The phosphorus cycle has no significant atmospheric component — phosphorus moves from rock (weathering) → soil → plants → animals → back to soil via decomposition."
      },
      {
        text: "An ecological pyramid of numbers shows:",
        options: ["The amount of energy at each trophic level", "The number of organisms at each trophic level", "The total biomass at each trophic level", "The flow of nutrients between trophic levels"],
        correct: 1,
        explanation: "A pyramid of numbers shows the relative number of individual organisms at each trophic level — it can be inverted (e.g. many insects on one tree)."
      },
      {
        text: "The process by which pioneer species modify the environment, allowing subsequent communities to establish, is called:",
        options: ["Eutrophication", "Ecological succession", "Evolution", "Coevolution"],
        correct: 1,
        explanation: "Ecological succession is the directional, predictable change in community composition over time as species modify the environment, facilitating colonisation by other species."
      },
      {
        text: "An example of a terrestrial biome characterised by extreme cold, low precipitation, and no trees is the:",
        options: ["Temperate deciduous forest", "Tropical rainforest", "Tundra", "Savanna"],
        correct: 2,
        explanation: "The tundra biome is characterised by permafrost, very short growing seasons, low temperatures, low precipitation, and an absence of trees — found at high latitudes and altitudes."
      }
    ]
  }

]); // end PORTAL_INJECT for BIO 102
