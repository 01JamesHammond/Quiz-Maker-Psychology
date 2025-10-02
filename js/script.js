const questionsListAAA = [
    [ // Chapter 1: JavaScript Basics
        "What is JavaScript?",
        "How do you declare a variable in JavaScript?",
        "What does the `if` statement do?",
        "What is a function?",
        "What does `console.log()` do?"
    ],
    [ // Chapter 2: HTML Basics
        "What is HTML used for?",
        "What does the `<div>` tag represent?",
        "How do you add a hyperlink in HTML?",
        "What is the difference between `<ul>` and `<ol>`?",
        "What does the `<img>` tag do?"
    ],
    [ // Chapter 3: CSS Basics
        "What is CSS used for?",
        "How do you change text color in CSS?",
        "What is a CSS class selector?",
        "What does `display: flex` do?",
        "How do you apply a background color in CSS?"
    ]
];

const answersListAAA = [
    [ // Chapter 1: JavaScript
        ["A programming language", "A database", "A markup language", "A spreadsheet tool"],
        ["let x = 5;", "var: 5 = x;", "create x = 5;", "int x = 5;"],
        ["Checks a condition", "Prints output", "Declares a function", "Creates a loop"],
        ["A reusable block of code", "A browser plugin", "An HTML element", "A CSS property"],
        ["Outputs messages to the console", "Defines a function", "Adds a variable", "Creates a loop"]
    ],
    [ // Chapter 2: HTML
        ["To structure web pages", "To program robots", "To design logos", "To write emails"],
        ["A generic container", "A table row", "A heading", "A link"],
        ["Using the <a> tag", "Using the <div> tag", "Using the <img> tag", "Using the <p> tag"],
        ["<ul> is unordered, <ol> is ordered", "They are the same", "Both are for images", "They are CSS styles"],
        ["Displays an image", "Adds a link", "Creates a video", "Styles the text"]
    ],
    [ // Chapter 3: CSS
        ["To style web pages", "To send emails", "To write backend logic", "To manage databases"],
        ["color: red;", "text-color: red;", "font-color: red;", "paint: red;"],
        [".classname", "#classname", "$classname", "classname:"],
        ["Creates a flexible layout", "Adds spacing", "Changes color", "Adds a border"],
        ["background-color: blue;", "color: background-blue;", "bg: blue;", "set-background: blue;"]
    ]
];

const answerKeyListAAA = [
    [ // Chapter 1 answers (correct texts)
        "A programming language",
        "let x = 5;",
        "Checks a condition",
        "A reusable block of code",
        "Outputs messages to the console"
    ],
    [ // Chapter 2 answers
        "To structure web pages",
        "A generic container",
        "Using the <a> tag",
        "<ul> is unordered, <ol> is ordered",
        "Displays an image"
    ],
    [ // Chapter 3 answers
        "To style web pages",
        "color: red;",
        ".classname",
        "Creates a flexible layout",
        "background-color: blue;"
    ]
];

let chaptersListAAA = [
  "Chapter 1", "Chapter 2", "Chapter 3"
];

const questionsList = [
  // Chapter 4: Nature, Nurture, and Human Diversity
    [ // Chapter 4
        "What is defined as the basic unit of inheritance in the chapter?",
        "What percentage of DNA do all humans share with one another?",
        "How do slight variations in genes contribute to human differences?",
        "According to the chapter, what can activate genes?",
        "In psychological studies, what do variations in genes contribute to, as observed in traits like intelligence or decision-making?",
        "What shapes what humans can achieve or do later in life, but often depends on external stimuli for activation?",
        "What is the major debate discussed in the chapter regarding nature and nurture?",
        "Why is asking if a behavior is driven solely by genes or environment considered the wrong question?",
        "After decades of research, how are most observed behaviors shaped?",
        "What was the prevailing 'scientific' attitude in the U.S. and other countries in the early 1900s regarding human development?",
        "What movement arose from the purely nature perspective in the early 1900s?",
        "Why was the eugenics movement considered morally wrong?",
        "What misunderstanding of genetics did scientists have in the early 1900s regarding parental intelligence and offspring?",
        "From an evolutionary perspective, why is homogenizing genes considered dangerous?",
        "On what does the classification of a gene as 'good' or 'bad' depend?",
        "Who famously stated, 'Men are built, not born.... Give me the baby, and I'll make it climb and use its hands in constructing buildings of stone or wood.... I'll make it a thief, a gunman or a dope fiend'?",
        "What does the purely nurture extreme focus on?",
        "Which groups promoted the purely nurture perspective?",
        "Who is an example of a behaviorist associated with the nurture view?",
        "What did J.B. Watson emphasize in his approach to behavior?",
        "Who is an example of a humanist associated with the nurture view?",
        "Why is the purely nurture perspective still considered bad science?",
        "What can the purely nurture view lead to, in terms of manipulating environments?",
        "What does behavioral genetics study?",
        "What assumption does behavioral genetics make about genes and environment?",
        "From which fields does behavioral genetics draw contributions?",
        "How does behavioral genetics differ from molecular genetics?",
        "What does 'polygenic' mean in the context of traits studied in behavioral genetics?",
        "What is the purpose of adoption studies in behavioral genetics?",
        "In adoption studies, what do children carry from their biological parents but experience from adoptive parents?",
        "What do adoption studies examine regarding a child's traits?",
        "What methods do adoption studies use to separate genetic and environmental influences?",
        "Why do adoption studies require hundreds of families?",
        "What do twin studies compare to estimate genetic influence?",
        "How much genetic material do monozygotic twins share?",
        "How are monozygotic twins formed?",
        "How much genetic material do dizygotic twins share on average?",
        "How are dizygotic twins formed?",
        "Why do dizygotic twins provide a useful comparison in twin studies?",
        "In twin studies, when is genetic influence considered stronger for a trait?",
        "According to data in the chapter, for which disorders do monozygotic twins show higher concordance rates?",
        "Who studied 80 sets of identical twins reared apart in 1990?",
        "What was a key finding from the study of identical twins reared apart?",
        "What is the IQ correlation for identical twins raised together, as mentioned?",
        "Why does the IQ correlation drop for identical twins raised apart?",
        "According to Joseph (2001), what might cause some similarities in twins reared apart besides genes?",
        "What is shared environment in the context of siblings?",
        "What impact does shared environment have on personality, according to the chapter?",
        "What is nonshared environment?",
        "Give an example of a nonshared environmental factor mentioned in the chapter.",
        "What role do slight differences in treatment among siblings play?",
        "Who is associated with describing gene x environment interactions?",
        "What are passive gene x environment interactions?",
        "Provide an example of passive gene x environment interactions from the chapter.",
        "What are evocative gene x environment interactions?",
        "Provide an example of evocative gene x environment interactions.",
        "What are active gene x environment interactions?",
        "Provide an example of active gene x environment interactions."
    ],
    [ // Chapter 5
        "What do developmental psychologists focus on?",
        "How do developmental psychologists examine development?",
        "Approximately how many genes do humans inherit from their parents?",
        "How do inherited genes interact with the environment?",
        "What is the scope of developmental psychology in terms of lifespan?",
        "As lifespans extend, what new research focus might emerge in developmental psychology?",
        "Why do most people care about child wellbeing according to the chapter?",
        "What concept highlights why young brains adapt better, such as in language acquisition?",
        "What controversies are mentioned in relation to child-rearing issues?",
        "How might parenting styles affect emotional regulation?",
        "How can the science of developmental psychology guide families?",
        "What insights from puppet tests are mentioned?",
        "In the major issue of nature and nurture, what methods are used to study inheritance and environment?",
        "Why are both nature and nurture considered important?",
        "What is the major issue regarding continuity and stages in development?",
        "How is development described in terms of continuity and stages?",
        "How might individual timing vary in development?",
        "What is the major issue of stability and change?",
        "What example is given of traits that change as we develop?",
        "What example is given of traits that remain relatively constant?",
        "How might childhood traits change due to environmental factors?",
        "What are the three major stages of prenatal development?",
        "What can influence later traits like height or immune strength during prenatal development?",
        "What are teratogens?",
        "What types of substances can act as teratogens?",
        "What example is given of environmental toxins as teratogens?",
        "What harm can prenatal alcohol exposure cause?",
        "What is the approximate rate of children developing fetal alcohol syndrome from alcohol exposure?",
        "What might mild alcohol exposure cause?",
        "What are pre-programmed reactions in infants right after birth?",
        "What are examples of automatic reflexes in infants?",
        "What does the Moro reflex do?",
        "What sophisticated thought is present in infants?",
        "What areas of development are covered in infancy and childhood?",
        "What happens in physical development during infancy?",
        "What rate of nerve cell production occurs in the womb?",
        "How many neurons are humans born with approximately?",
        "What forms rapidly after birth in brain development?",
        "How do neural networks in the cerebral cortex change as we mature?",
        "What benefits do enriched environments provide for brain development?",
        "What is synaptic pruning?",
        "What are critical periods in brain development?",
        "How does neuroplasticity aid learning later in life?",
        "When is infants' memory testable?",
        "Who conducted research on infant memory using a mobile and string?",
        "What did Rovee-Collier's work show about infant memory?",
        "What is infantile amnesia?",
        "What is the average age of the first conscious memory?",
        "Who is a key figure in cognitive development theory?",
        "What is cognition?",
        "What metaphor did Piaget use for children?",
        "What processes do children's theories go through according to Piaget?",
        "When do stages occur in Piaget's theory?",
        "Do stages progress in the same order for all children?",
        "What is the sensorimotor stage?",
        "What emerges in the sensorimotor stage?",
        "What is the preoperational stage?",
        "What errors occur in the preoperational stage?",
        "What is egocentrism?",
        "What is animism?",
        "What is centration?",
        "What begins to develop in the preoperational stage?",
        "What is a false-belief problem example?",
        "What is the concrete operational stage?",
        "What type of thinking occurs in the concrete operational stage?",
        "What is the formal operational stage?",
        "What abilities develop in the formal operational stage?",
        "According to the modern view, what is off about Piaget's theory?",
        "Is development more continuous or staged according to modern views?",
        "Do the sequence of major milestones in Piaget's theory still hold?",
        "Who emphasized cognitive development in social contexts?",
        "What is the zone of proximal development?",
        "What is scaffolding in learning?",
        "In the personal notes, what debate is mentioned about raising children?",
        "What do infants discern based on puppet tests?",
        "How is development described in terms of continuity and stages in notes?",
        "What traits change and what remain constant across lifespan?",
        "What environmental effects are noted in prenatal development?",
        "What reflexes are listed in the notes?",
        "What principle explains why a red apple looks red?",
        "What is the Stroop effect testing?",
        "How many neurons are we born with approximately?",
        "What do enriched environments do to neurons?",
        "What is an example of a critical period?",
        "How was infant memory tested with a mobile?",
        "What does infantile amnesia refer to?",
        "What fun fact is given about brain size?",
        "In the sensorimotor stage, what is critical to develop?",
        "What are examples of errors in preoperational stage?",
        "What do children struggle with in concrete operational stage?",
        "What do teens ponder in formal operational stage?"
    ]
];

const answersList = [
    [ // Chapter 4
        ["Chromosomes", "Genes", "DNA sequences", "Alleles"],
        ["Over 50%", "Over 75%", "Over 90%", "Over 99%"],
        ["They have no effect on traits", "They cause changes in traits like behaviors and personalities", "They only affect physical appearance", "They determine environmental preferences exclusively"],
        ["Internal thoughts alone", "Genetic mutations", "Environmental events", "Aging processes"],
        ["Uniformity in populations", "Individual differences in behaviors and personalities", "Cultural norms", "Social hierarchies"],
        ["Chromosomes", "RNA", "DNA", "Proteins"],
        ["The extent of genetic vs. environmental influence on behaviors", "The role of culture in development", "The impact of education on IQ", "The differences between species"],
        ["It oversimplifies by ignoring polygenic traits", "It dichotomizes the issue into only two categories when both interact", "It focuses too much on animal studies", "It ignores historical contexts"],
        ["Purely by genetics", "Purely by environment", "By a mix of genetic and environmental factors", "By random chance"],
        ["Emphasis on environment", "Balance of nature and nurture", "Focus on genetics", "Rejection of inheritance"],
        ["Social Darwinism", "Eugenics", "Behaviorism", "Humanism"],
        ["It promoted diversity", "It implied some people were unworthy of parenthood based on perceived genetic quality", "It encouraged adoption", "It focused on environmental improvements"],
        ["They assumed environment determined outcomes", "They misinterpreted correlations as solely genetic", "They ignored parental influence", "They overemphasized mutations"],
        ["It increases species survival", "It reduces diversity, which is dangerous for survival in varying environments", "It enhances genetic mutations", "It promotes homogenization benefits"],
        ["Universal standards", "Context and testing methods", "Evolutionary history alone", "Cultural biases"],
        ["Abraham Maslow", "Sandra Scarr", "John B. Watson", "Thomas Bouchard"],
        ["Genetics exclusively", "The environment", "Internal cognition", "Evolutionary factors"],
        ["Geneticists and biologists", "Behaviorists and humanists", "Eugenicists and evolutionists", "Molecular geneticists and psychologists"],
        ["Abraham Maslow", "Sandra Scarr", "Thomas Bouchard", "J. B. Watson"],
        ["Genetic sequencing", "Classical and operant conditioning to train behaviors", "Cognitive therapy", "Psychoanalysis"],
        ["J. B. Watson", "John B. Watson", "Abraham Maslow", "Sandra Scarr"],
        ["It fully accounts for genes", "It ignores genes and internal cognition", "It overemphasizes animal experiments", "It rejects conditioning"],
        ["Genetic enhancement", "Social engineering", "Molecular research", "Twin studies"],
        ["The molecular structure of DNA", "The relationship between genetic variations and individual traits", "Environmental impacts on culture", "Neurotransmitter functions"],
        ["Genes matter more than environment", "Environment overrides genes", "Both genes and environment matter", "Neither influences traits"],
        ["Only psychology", "Psychology and biology", "Sociology and anthropology", "Physics and chemistry"],
        ["It focuses on single genes vs. polygenic traits", "It studies polygenic traits vs. single genes", "It ignores genetics entirely", "It emphasizes environment only"],
        ["Traits influenced by a single gene", "Traits influenced by multiple genes", "Traits from mitochondrial DNA", "Traits with no genetic basis"],
        ["To combine genes and environment", "To separate genes from environment", "To study parenting styles", "To evaluate cultural effects"],
        ["Environment from biological, genes from adoptive", "Genes from biological, environment from adoptive", "Both from biological", "Both from adoptive"],
        ["Similarity to peers", "Closeness to biological vs. adoptive parents", "Differences from siblings", "Impact of schooling"],
        ["Simple observations", "Sophisticated statistical modeling", "Qualitative interviews", "Genetic sequencing"],
        ["To reduce costs", "For statistical reliability", "To focus on rare cases", "For ethical reasons"],
        ["Concordance rates between MZ and DZ twins", "Height differences", "Educational levels", "Income correlations"],
        ["About 50%", "75%", "100%", "25%"],
        ["From two eggs fertilized simultaneously", "From a single fertilized egg that splits", "From genetic cloning", "From environmental mimicry"],
        ["100%", "75%", "About 50%", "0%"],
        ["From a single egg that splits", "From two eggs fertilized simultaneously", "From artificial insemination", "From gene editing"],
        ["They have identical environments with no age gap effects", "They share 100% genes", "They are always opposite sexes", "They provide genetic uniformity"],
        ["When DZ twins are more alike", "When MZ twins are more alike than DZ", "When no differences exist", "When environment is controlled"],
        ["Reading disability, ADHD, autism, Alzheimer's, schizophrenia, alcoholism", "Only physical traits like height", "Cultural preferences", "Temporary moods"],
        ["Sandra Scarr", "Abraham Maslow", "John B. Watson", "Bouchard and colleagues"],
        ["Less similar than raised together, but more similar than fraternal", "More similar than raised together", "No similarities at all", "Identical in all traits"],
        ["0.50", "0.75", "0.86", "0.95"],
        ["Due to genetic drift", "Showing environmental influence", "Because of measurement errors", "Indicating no genetic role"],
        ["Uncontrolled variables other than genes", "Perfect environmental matching", "Complete genetic isolation", "Random chance alone"],
        ["Unique experiences like hobbies", "Factors common among siblings", "Genetic mutations", "Cultural norms"],
        ["Strong positive impact", "No clear impact", "Negative impact", "Determines it entirely"],
        ["Common factors like family income", "Differences among siblings", "Genetic traits", "Shared hobbies"],
        ["Favoritism, birth order", "Hair color", "Blood type", "Family size"],
        ["Reduce individual differences", "Magnify differences", "Have no effect", "Equalize personalities"],
        ["John B. Watson", "Abraham Maslow", "Thomas Bouchard", "Sandra Scarr"],
        ["Genes shape chosen environments", "Genetic makeup stays dormant without opportunity", "Traits evoke environmental responses", "Environment alters genes directly"],
        ["Outgoing person seeks risks", "Smiling baby gets positive responses", "Genes for cognitive potential in enriched education", "Crying baby gets attention"],
        ["Genes remain dormant without activation", "Gene expression shapes received environment", "Traits determine chosen environments", "Environment evokes genes"],
        ["Genes for high IQ in adverse setting", "Outgoing seeks exciting activities", "Genes dormant without opportunity", "Cognitive potential thrives with education"],
        ["Genes evoke responses from environment", "Environment shapes gene expression passively", "Traits from genes determine chosen environments", "Genes stay dormant"],
        ["Smiling baby evokes smiles", "Cognitive potential in enriched setting", "Crying baby gets more attention", "Risk-taking person seeks danger"]
    ],
    [ // Chapter 5
        ["Genetic mutations over time", "How we grow, develop, and change over time", "Only adult behaviors", "Environmental impacts exclusively"],
        ["Only during childhood", "The entire lifespan", "Prenatal stages alone", "Adolescence to old age"],
        ["~10,000", "~20,000", "~50,000", "~100,000"],
        ["They remain static", "They interact dynamically, influencing traits like resilience", "They override environmental factors", "They are irrelevant to traits"],
        ["Only childhood", "From birth to old age", "Prenatal to adolescence", "Adulthood only"],
        ["Child education methods", "Managing cognitive decline in the 90s", "Teenage rebellion", "Infant nutrition"],
        ["It has no long-term effects", "Early influences shape later life", "Only genetics matter", "Adults are unaffected"],
        ["Synaptic pruning", "Neuroplasticity", "Critical periods", "Temperament stability"],
        ["Vaccination schedules", "Education, day care, spanking, sleeping styles", "Toy preferences", "Clothing choices"],
        ["No effect on anxiety", "Gentle parenting could reduce anxiety compared to strict methods", "Strict methods reduce anxiety", "All styles lead to dependency"],
        ["By ignoring controversies", "To make healthy choices", "Through genetic testing only", "By promoting extremes"],
        ["Infants prefer helpful figures", "Infants ignore puppets", "Puppets have no effect", "Infants prefer harmful figures"],
        ["Animal experiments", "Twin studies/epigenetics", "Surveys only", "Historical analysis"],
        ["Nature overrides nurture", "Their combined effect is crucial", "Nurture is irrelevant", "Only nature matters"],
        ["Whether development is smooth or in stages", "Genetic vs environmental dominance", "Trait stability", "Prenatal influences"],
        ["Purely smooth transitions", "Blends continuity and stages", "Only sharp changes", "No changes at all"],
        ["All children develop identically", "A child might walk early but talk later", "Timing is fixed", "Stages can be skipped"],
        ["Whether traits change or stay constant across lifespan", "Nature vs nurture", "Continuity vs stages", "Prenatal vs postnatal"],
        ["Temperament", "Cognitive skills", "Physical height", "Hair color"],
        ["Cognitive skills", "Temperament becomes personality", "Motor skills", "Vision acuity"],
        ["They always remain stable", "A naturally outgoing child might become reserved if bullied", "Environment has no impact", "Traits are purely genetic"],
        ["Infancy, childhood, adulthood", "Zygote, embryo, fetus", "Sensorimotor, preoperational, concrete", "Prenatal, natal, postnatal"],
        ["Paternal genes only", "Maternal nutrition", "Postnatal care", "Adult diet"],
        ["Nutrients from the mother", "Substances causing birth defects", "Genetic mutations", "Environmental enrichments"],
        ["Only illegal drugs", "Prescription, over-the-counter, and illegal drugs", "Vitamins only", "Food additives"],
        ["Air pollution", "Lead exposure", "Noise levels", "Light exposure"],
        ["No harm at all", "Physical and cognitive impairment", "Enhanced development", "Only physical growth"],
        ["1 in ~100", "1 in ~700", "1 in ~1000", "1 in ~2000"],
        ["No effects", "Subtler fetal alcohol spectrum disorders", "Improved cognition", "Physical strength"],
        ["Learned behaviors", "Innate behaviors like turning toward a sound", "Cultural responses", "Delayed reactions"],
        ["Voluntary movements", "Moro, grasp reflexes", "Abstract thinking", "Language skills"],
        ["Triggers a startle response", "Causes grasping", "Initiates crawling", "Promotes stepping"],
        ["Preference for helpful characters in puppet experiments", "Complex math", "Verbal communication", "Hypothetical reasoning"],
        ["Only physical", "Physical, cognitive, socioemotional", "Genetic only", "Environmental alone"],
        ["Brain stagnation", "Growth in motor skills like crawling to walking", "Cognitive decline", "Emotional isolation"],
        ["1,000 per minute", "¼ million per minute", "1 million per minute", "10,000 per minute"],
        ["~10 billion", "~100 billion", "~1 trillion", "~50 billion"],
        ["Neural connections", "Muscle fibers", "Bone density", "Hair follicles"],
        ["Remain simple", "Become increasingly complex", "Prune completely", "Stop forming"],
        ["No changes", "More dendrite connections and 7%-10% increase in brain weight", "Reduced weight", "Fewer connections"],
        ["Forming new neurons", "Shutting down unused connections", "Increasing cell production", "Expanding cortex size"],
        ["Periods of no development", "Optimal periods for experiences to shape development", "Times of regression", "Adult learning phases"],
        ["Prevents any learning", "Allows recovery like after strokes", "Causes pruning", "Stops development"],
        ["Only after 2 years", "Soon after birth", "In adolescence", "In adulthood"],
        ["Jean Piaget", "Carolyn Rovee-Collier", "Lev Vygotsky", "Sandra Scarr"],
        ["Events from the past are remembered", "No memory exists", "Only visual memory", "Memory fades instantly"],
        ["Full recall of early events", "Lack of memory for early life events", "Enhanced early memory", "Selective forgetting"],
        ["1 year", "3.5 years", "5 years", "7 years"],
        ["Lev Vygotsky", "Jean Piaget", "Carolyn Rovee-Collier", "Abraham Maslow"],
        ["Physical growth", "Mental activities like thinking, knowing, remembering", "Emotional regulation", "Social bonding"],
        ["Child as artist", "Child as scientist", "Child as blank slate", "Child as mimic"],
        ["Only assimilation", "Assimilation and accommodation", "Pruning and growth", "Stability and change"],
        ["When theories are mostly correct", "When theories are wrong most of the time", "At random intervals", "Only in infancy"],
        ["Order varies by culture", "Progress in same order, no skipping", "Stages can be skipped", "Reversible order"],
        ["2-7 years", "Birth to approximately 2 years", "7-11 years", "11+ years"],
        ["Object permanence", "Abstract thinking", "Egocentrism", "Deductive reasoning"],
        ["Birth-2 years", "2 to 7 years", "7-11 years", "11+ years"],
        ["No errors", "Use of symbols but with errors", "Abstract hypotheses", "Reversible operations"],
        ["Seeing multiple viewpoints", "Difficulty seeing from another's standpoint", "Abstract thinking", "Object permanence"],
        ["Objects are lifeless", "Inanimate objects are lifelike", "Centering on problems", "False beliefs"],
        ["Focusing on multiple aspects", "Concentration on one aspect of a problem", "Symbolic representation", "Hypothetical thinking"],
        ["Theory of mind", "Object permanence", "Deductive reasoning", "Conservation"],
        ["Smarties task", "Mobile string test", "Stroop effect", "Puppet preference"],
        ["Birth-2 years", "2-7 years", "7 to 11 years", "11+ years"],
        ["Abstract hypotheses", "Reversible mental operations on real things", "Symbolic errors", "Reflexive responding"],
        ["Birth-2 years", "2-7 years", "7-11 years", "11 years and older"],
        ["Concrete operations", "Abstract and hypothetical thinking", "Egocentrism", "Object permanence"],
        ["Timing of stages", "No influence at all", "Overestimated infants", "Underestimated adolescents only"],
        ["Purely staged", "More continuous than in theory", "No continuity", "Sharp jumps only"],
        ["No longer observed", "Still observed", "Reversed", "Culturally variable"],
        ["Jean Piaget", "Lev Vygotsky", "Carolyn Rovee-Collier", "John B. Watson"],
        ["What learner can do alone vs with assistance", "Critical periods", "Synaptic pruning", "Object permanence"],
        ["Permanent structure", "Temporary support for higher thinking", "Genetic foundation", "Environmental toxin"],
        ["Nature vs nurture", "Strict vs gentle parenting", "Continuity vs stages", "Stability vs change"],
        ["Good vs bad", "Helpful vs harmful", "Big vs small", "Fast vs slow"],
        ["Sharp stages only", "Mix between smooth and sharp", "Smooth only", "No development"],
        ["All change", "Cognitive skills change, temperament stable", "All stable", "Temperament changes, cognitive stable"],
        ["Genes only", "Alcohol, smoking, food eaten", "Postnatal only", "No effects"],
        ["Moro, grasp, step", "Abstract, hypothetical", "Cognitive, emotional", "Physical, social"],
        ["Absorbs all light", "Reflects red light, absorbs others", "Emits light", "Changes color"],
        ["Memory retention", "Competition of responses", "Visual acuity", "Motor skills"],
        ["10 billion", "100 billion", "1 trillion", "50 billion"],
        ["Reduce connections", "Enhance dendrite connections", "Prune all", "Stop growth"],
        ["Language learning", "Abstract math", "Hypothetical reasoning", "Emotional regulation"],
        ["Tying string to leg", "Puppet shows", "Stroop tasks", "Conservation tests"],
        ["Memory after 2 years", "Can't remember before first two years", "Enhanced recall", "Selective memory"],
        ["Men's larger, no intelligence correlation", "Women's larger", "Size correlates with IQ", "No difference"],
        ["Theory of mind", "Object permanence", "Egocentrism", "Abstract thinking"],
        ["Egocentrism, animism, centration", "Reversible operations", "Hypotheticals", "Object permanence"],
        ["Concrete ideas", "Non-concrete ideas like philosophy", "Symbolic errors", "Reflexes"],
        ["Real events only", "Hypothetical futures", "Past memories", "Current facts"]
    ]
];

const answerKeyList = [
    [ // Chapter 4
        "Genes",
        "Over 99%",
        "They cause changes in traits like behaviors and personalities",
        "Environmental events",
        "Individual differences in behaviors and personalities",
        "DNA",
        "The extent of genetic vs. environmental influence on behaviors",
        "It dichotomizes the issue into only two categories when both interact",
        "By a mix of genetic and environmental factors",
        "Focus on genetics",
        "Eugenics",
        "It implied some people were unworthy of parenthood based on perceived genetic quality",
        "They misinterpreted correlations as solely genetic",
        "It reduces diversity, which is dangerous for survival in varying environments",
        "Context and testing methods",
        "John B. Watson",
        "The environment",
        "Behaviorists and humanists",
        "J. B. Watson",
        "Classical and operant conditioning to train behaviors",
        "Abraham Maslow",
        "It ignores genes and internal cognition",
        "Social engineering",
        "The relationship between genetic variations and individual traits",
        "Both genes and environment matter",
        "Psychology and biology",
        "It studies polygenic traits vs. single genes",
        "Traits influenced by multiple genes",
        "To separate genes from environment",
        "Genes from biological, environment from adoptive",
        "Closeness to biological vs. adoptive parents",
        "Sophisticated statistical modeling",
        "For statistical reliability",
        "Concordance rates between MZ and DZ twins",
        "100%",
        "From a single fertilized egg that splits",
        "About 50%",
        "From two eggs fertilized simultaneously",
        "They have identical environments with no age gap effects",
        "When MZ twins are more alike than DZ",
        "Reading disability, ADHD, autism, Alzheimer's, schizophrenia, alcoholism",
        "Bouchard and colleagues",
        "Less similar than raised together, but more similar than fraternal",
        "0.86",
        "Showing environmental influence",
        "Uncontrolled variables other than genes",
        "Factors common among siblings",
        "No clear impact",
        "Differences among siblings",
        "Favoritism, birth order",
        "Magnify differences",
        "Sandra Scarr",
        "Genetic makeup stays dormant without opportunity",
        "Genes for cognitive potential in enriched education",
        "Gene expression shapes received environment",
        "Smiling baby gets positive responses",
        "Traits from genes determine chosen environments",
        "Risk-taking person seeks danger"
    ],
    [ // Chapter 5
        "How we grow, develop, and change over time",
        "The entire lifespan",
        "~20,000",
        "They interact dynamically, influencing traits like resilience",
        "From birth to old age",
        "Managing cognitive decline in the 90s",
        "Early influences shape later life",
        "Neuroplasticity",
        "Education, day care, spanking, sleeping styles",
        "Gentle parenting could reduce anxiety compared to strict methods",
        "To make healthy choices",
        "Infants prefer helpful figures",
        "Twin studies/epigenetics",
        "Their combined effect is crucial",
        "Whether development is smooth or in stages",
        "Blends continuity and stages",
        "A child might walk early but talk later",
        "Whether traits change or stay constant across lifespan",
        "Cognitive skills",
        "Temperament becomes personality",
        "A naturally outgoing child might become reserved if bullied",
        "Zygote, embryo, fetus",
        "Maternal nutrition",
        "Substances causing birth defects",
        "Prescription, over-the-counter, and illegal drugs",
        "Lead exposure",
        "Physical and cognitive impairment",
        "1 in ~700",
        "Subtler fetal alcohol spectrum disorders",
        "Innate behaviors like turning toward a sound",
        "Moro, grasp reflexes",
        "Triggers a startle response",
        "Preference for helpful characters in puppet experiments",
        "Physical, cognitive, socioemotional",
        "Growth in motor skills like crawling to walking",
        "¼ million per minute",
        "~100 billion",
        "Neural connections",
        "Become increasingly complex",
        "More dendrite connections and 7%-10% increase in brain weight",
        "Shutting down unused connections",
        "Optimal periods for experiences to shape development",
        "Allows recovery like after strokes",
        "Soon after birth",
        "Carolyn Rovee-Collier",
        "Events from the past are remembered",
        "Lack of memory for early life events",
        "3.5 years",
        "Jean Piaget",
        "Mental activities like thinking, knowing, remembering",
        "Child as scientist",
        "Assimilation and accommodation",
        "When theories are wrong most of the time",
        "Progress in same order, no skipping",
        "Birth to approximately 2 years",
        "Object permanence",
        "2 to 7 years",
        "Use of symbols but with errors",
        "Difficulty seeing from another's standpoint",
        "Inanimate objects are lifelike",
        "Concentration on one aspect of a problem",
        "Theory of mind",
        "Smarties task",
        "7 to 11 years",
        "Reversible mental operations on real things",
        "11 years and older",
        "Abstract and hypothetical thinking",
        "Timing of stages",
        "More continuous than in theory",
        "Still observed",
        "Lev Vygotsky",
        "What learner can do alone vs with assistance",
        "Temporary support for higher thinking",
        "Strict vs gentle parenting",
        "Good vs bad",
        "Mix between smooth and sharp",
        "Cognitive skills change, temperament stable",
        "Alcohol, smoking, food eaten",
        "Moro, grasp, step",
        "Reflects red light, absorbs others",
        "Competition of responses",
        "100 billion",
        "Enhance dendrite connections",
        "Language learning",
        "Tying string to leg",
        "Can't remember before first two years",
        "Men's larger, no intelligence correlation",
        "Object permanence",
        "Egocentrism, animism, centration",
        "Non-concrete ideas like philosophy",
        "Hypothetical futures"
    ]
];

let chaptersList = [
  "Chapter 4",
  "Chapter 5"
];



// these will need to be properly declared in a function. So they can constantly allow a new chosen chapter
let updatedListOfQuestions;
let newListOfAnswers;
let newAnswerKeyList
let currentQuestionIndex = 0;
let currentAnswerList = [];
let totalNumberOfQuestions = 0; // This will keep track of how many elements are left in the array updatedListOfQuestions.



displayChaptersSidebar();
function main(){
    startingQuestionsAndAnswers();
};




// This starts off the quiz at a random question
function startingQuestionsAndAnswers(){
    if(totalNumberOfQuestions !== 0){
        // This variable chooses a random index from the list of total list of questinos.
        currentQuestionIndex = Math.floor(Math.random() * totalNumberOfQuestions);
        
        // Questions Displayed
        questionDisplayed.textContent = updatedListOfQuestions[currentQuestionIndex];
        
        // Answers Displayed
        currentAnswerList = newListOfAnswers[currentQuestionIndex];
        currentAnswerList = shuffleTheList(currentAnswerList);
        answerButtons.forEach((button, index) => {
            button.innerText = currentAnswerList[index]; // Set button text to the corresponding answer
        });
    }
    else{
        console.log("This has reached zero!");
        gettingEndDisplay.className = "the-end-display"
        gettingDisplayReady.className = "d-none the-displayed-question-and-answers";
    };
}

function shuffleTheList(currentAnswerList){
    let shuffledList = [];
    let max = currentAnswerList.length;
    let currentAnswerIndex = 0;
    for (let i = 0; i < 4; i++){
        currentAnswerIndex = Math.floor(Math.random() * max);
        max--;
        //console.log("currentAnswerIndex: " + currentAnswerIndex);
        shuffledList.push(currentAnswerList[currentAnswerIndex]);
        currentAnswerList = currentAnswerList.filter(question => question !== currentAnswerList[currentAnswerIndex]);
    };
    //console.log("ShuffledList: " + shuffledList);
    return shuffledList;
};


// Everytime one of the answersButtons is clicked, it will call a function to update the potential answers
// displayed to a new list of potential answers from the array answersList.
// This variable holds all the buttons that contain the answers.
let answerButtons = document.querySelectorAll('.answer-btn');
answerButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        if(totalNumberOfQuestions !== 0){
            determineAnswerStatus(button);
            addingHiddenGradesAndFeedback(button);
            // Everytime the user chooses an answer, we must update the screen to the next question and answers.
            UpdatingQuestionsAndAnswers(button);
            startingQuestionsAndAnswers();
        };
    });
});



let successButton = document.querySelectorAll('.show-result-btn');
successButton.forEach(function(button) {
    button.addEventListener("click", function() {
        console.log("The successButton was clicked!");
        displayedFeedback = document.querySelectorAll(".myFeedbackasdf");
        displayedFeedback.forEach(function(feedback) {
            feedback.className = "myFeedbackasdf container d-flex flex-coloumn justify-content-center"

        })

    });
});

let hideResultsButton = document.querySelectorAll('.hide-results-btn');
hideResultsButton.forEach(function(button) {
    button.addEventListener("click", function() {
        console.log("The hideResultsButton was clicked!");
        displayedFeedback = document.querySelectorAll(".myFeedbackasdf");
        displayedFeedback.forEach(function(feedback) {
            feedback.className = "myFeedbackasdf container d-none flex-coloumn justify-content-center"

        })

    });
});



// This function is responsible for updating the answerStatus variable.
// This variable is later used to display if the answer is correct or incorrect on screen.
let userResponseIndex; // This variable will hold the index from the user response, and it is used to determine the useResponse
let userReponse; // This variable will hold the answer that the user chose, it is used to help determine the answerStatus.
let answerStatus; // this variable will hold either "INCORRECT" or "CORRECT" depending on the chosen answer.
function determineAnswerStatus(button){
    userResponseIndex = Number(button.dataset.answer);
    userResponse = currentAnswerList[userResponseIndex];
    if (newAnswerKeyList[currentQuestionIndex] === userResponse){
        answerStatus = "CORRECT";
    }
    else{
        answerStatus = "INCORRECT";
    }
};


function UpdatingQuestionsAndAnswers(button) {
    // This removes the used question from the array I then updated the totalNumberOfQuestions to be accurate.
    updatedListOfQuestions = updatedListOfQuestions.filter(question => question !== updatedListOfQuestions[currentQuestionIndex]);
    totalNumberOfQuestions--;
    // This removes the used answers corresponding to the updatedListOfQuestions array.
    newListOfAnswers = newListOfAnswers.filter((row, index) => index !== currentQuestionIndex);
    // This removes the used answer key corresponding to the updatedListOfQuestion array.
    newAnswerKeyList = newAnswerKeyList.filter((row, index) => index !== currentQuestionIndex);
};


let questionDisplayed = document.getElementById("Page_Question");
let theTitle = document.getElementById("randomTitle");
let questionNumberTicker = 1;
function addingHiddenGradesAndFeedback(){
    //clonedContainer.style.display = 'flex';
    //parentElement.style.display = 'flex';
    //parentElement.className = "container d-flex flex-coloumn justify-content-center theParentContainer";
    const originalContainer = document.querySelector('.myFeedback'); // This is a copy of the feedback div, the original
    
    let clonedContainer = originalContainer.cloneNode(true); // true for deep clone (includes children). This is a copy of the feedback div, that I will place in the parent div
    let parentElement = document.querySelector('.theParentContainer'); // This is the parent div, where I will place the copy of the original feedback div
    clonedContainer.className = "myFeedbackasdf container d-none flex-coloumn justify-content-center";
    
    const questionNumberElement = clonedContainer.querySelector('.questionNumberText');
    const CorrectOrIncorrectElement = clonedContainer.querySelector('.correctOrIncorrect');
    const questionDisplayedElement = clonedContainer.querySelector('.displayedQuestionFinal');
    
    let allBulletPoints = clonedContainer.querySelectorAll('.testingThisOut');
    allBulletPoints.forEach((currentBulletPoint, index) => {
        currentBulletPoint.textContent = currentAnswerList[index];
        // If the answer is correct, and if the current index is the same as the users response, we will change the bullet to lightgreen.
        //if (tempShuffle[index] === newAnswerKeyList[currentQuestionIndex]){
            //    testingElement[index].style.backgroundColor = 'lightgreen';
            //}
            //if (answerStatus === "INCORRECT" && userResponseIndex === index){
                //    testingElement[index].style.backgroundColor = 'red';
                //}
                
                // Marks the answer green if the user response equals the answer
                // and
                // if
                if (currentAnswerList[index] === newAnswerKeyList[currentQuestionIndex]) {
                    currentBulletPoint.style.background = 'lightgreen';
                    //console.log("newAnswerKeyList[currentQuestionIndex]: " + newAnswerKeyList[currentQuestionIndex]);
                }
                
                // If user's answer is incorrect, mark their chosen answer red
                if (answerStatus === "INCORRECT" && index == userResponseIndex) {
                    currentBulletPoint.style.background = 'red';
                }
                
            });
            
            questionNumberElement.textContent = `Question ${questionNumberTicker}`;
            CorrectOrIncorrectElement.textContent = answerStatus;
            questionDisplayedElement.textContent = updatedListOfQuestions[currentQuestionIndex];
            
            parentElement.appendChild(clonedContainer);
            
            questionNumberTicker++;
        };

        
// This function adds the buttons to the sidebars that the users can choose. I did it this way so the buttons will be added automatically as I add chapters and questions to the lists.
function displayChaptersSidebar(){
    const originalChapterButtonElement = document.querySelector('.chapters-btn');
    const originalchapterParentElement = document.querySelector('.chapters-parent-element');
    for (let i = 0; i < chaptersList.length; i++){
        let clonedChapterButtonElement = originalChapterButtonElement.cloneNode(true); // true for deep clone (includes children). This is a copy of the feedback div, that I will place in the parent div
        clonedChapterButtonElement.className = "btn btn-success mb-4 chapter-buttons-sidebar";
        clonedChapterButtonElement.textContent = chaptersList[i];
        originalchapterParentElement.appendChild(clonedChapterButtonElement);
        clonedChapterButtonElement.setAttribute("data-answer", i); // or use chaptersList[i] if more appropriate
    };
};
        
        
//This will allow this user to choose a chapter that they want to work on. Once a chapter is chosen, the main function will be called to start the program. This also allows the user to change the chapter whenever needed.
let chapterButtonsSidebar = document.querySelectorAll('.chapter-buttons-sidebar');
let gettingDisplayReady = document.querySelector(".the-displayed-question-and-answers");
let gettingOtherDisplayReady = document.querySelector(".the-start-display");
let gettingEndDisplay = document.querySelector(".the-end-display");

chapterButtonsSidebar.forEach(function(button) {
    button.addEventListener("click", function() {

        let imgsToDelete = document.querySelectorAll(".myFeedbackasdf");
        imgsToDelete.forEach((img) => {
        img.remove();
        })
        questionNumberTicker = 1;
        gettingOtherDisplayReady.className = "d-none the-start-display";
        gettingEndDisplay.className = "d-none the-end-display"
        gettingDisplayReady.className = "the-displayed-question-and-answers";
        chapterIndexChosenByUser = Number(button.dataset.answer);
        const titleDisplayedElement = document.querySelector(".randomTitle");
        titleDisplayedElement.textContent = chaptersList[chapterIndexChosenByUser];


        NumberTicker = 1;

        updatedListOfQuestions = questionsList[chapterIndexChosenByUser];
        newListOfAnswers = answersList[chapterIndexChosenByUser];
        newAnswerKeyList = answerKeyList[chapterIndexChosenByUser];
        currentQuestionIndex = 0;
        currentAnswerList = [];
        totalNumberOfQuestions = answersList[chapterIndexChosenByUser].length; // This will keep track of how many elements are left in the array updatedListOfQuestions.
        console.log("The chapterButtonsSidebar was pressed!"); 
        console.log(questionsList[0].length);
        main();
    });
});



//MINI PROJECTS THAT NEED TO BE ADDED
//Submit questions and answers for specific chapters
//Submit question and answer corrections
//Submit feature requests
