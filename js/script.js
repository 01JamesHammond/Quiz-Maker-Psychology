const questionsList = [
    [ // Chapter 4
    "What is the title of Chapter 4?",
    "Which chapter discusses Nature, Nurture, and Human Diversity?",
    "What are genes?",
    "What percentage of DNA do all humans share with one another?",
    "What can slight variations in genes cause?",
    "What can activate genes?",
    "What is the major issue discussed in the Nature and Nurture slide?",
    "What is the extent of influence debated?",
    "For how many years was nature vs. nurture a major debate?",
    "What is now recognized about the extremes of nature and nurture?",
    "According to the nature side, what determines our behavior?",
    "According to the nurture side, what determines our behavior?",
    "What is the humorous remark about nature vs. nurture?",
    "What is the focus of the purely nature extreme?",
    "What was the prevailing 'scientific' attitude in the U.S. and other countries in the early 1900s?",
    "What did the focus on genetics lead to?",
    "Why was eugenics morally wrong?",
    "What led to a misunderstanding in the purely nature approach?",
    "Why is the purely nature extreme considered just bad science?",
    "Who said 'Men are built, not born...'?",
    "According to John B. Watson's quote, what can be made of a baby?",
    "What are the possibilities of shaping a baby according to Watson?",
    "What is the focus of the purely nurture extreme?",
    "Which groups promoted the purely nurture view?",
    "Who is an example of a behaviorist promoting nurture?",
    "Who is an example of a humanist promoting nurture?",
    "Is the purely nurture view considered good science?",
    "What can the purely nurture extreme lead to?",
    "What book is mentioned in the context of social engineering?",
    "What is the focus of behavioral genetics?",
    "What does behavioral genetics assume about genes and environment?",
    "How does behavioral genetics differ from molecular genetics?",
    "What are adoption studies designed to separate?",
    "What do adoption studies examine?",
    "How many families are required for adoption studies?",
    "What are twin studies designed to compare?",
    "How many twin pairs are required for twin studies?",
    "What do monozygotic twins share?",
    "What do dizygotic twins share?",
    "When identical twins are more alike, what is stronger?",
    "Who studied identical twins reared apart in 1990?",
    "How many sets of identical twins were studied by Bouchard and colleagues?",
    "How similar are identical twins reared apart compared to those raised together?",
    "What are some similarities in identical twins reared apart due to, according to Joseph (2001)?",
    "What is shared environment?",
    "What is the impact of shared environment on personality?",
    "What is nonshared environment?",
    "What are examples of nonshared environment?",
    "How can slight differences in treatment affect siblings?",
    "What are the three types of gene x environment interactions according to Sandra Scarr?",
    "What is the title of Chapter 5?",
    "What do developmental psychologists focus on?",
    "What is the starting point of developmental psychology?",
    "Approximately how many genes are inherited from parents?",
    "What is the end point of developmental psychology?",
    "Why do most people care about child wellbeing?",
    "What are some controversies mentioned related to child wellbeing?",
    "How can the science of developmental psychology help?",
    "What do twin studies and epigenetics show about nature and nurture?",
    "What is recognized about the interaction of gene and environment?",
    "What are the two views of the process of development?",
    "What is an example of a trait that changes as we develop?",
    "What is an example of a trait that remains relatively constant?",
    "What are the three major stages of prenatal development?",
    "What can transfer from the mother to the fetus along with nutrients?",
    "What are teratogens?",
    "What types of drugs can impair fetal development?",
    "What else can impair fetal development besides drugs?",
    "What is fetal alcohol syndrome?",
    "What can prenatal alcohol exposure cause?",
    "What is the approximate ratio of children exposed to alcohol who develop fetal alcohol syndrome?",
    "What are pre-programmed reactions right after birth?",
    "What are automatic reflexes?",
    "What is already present in sophisticated thought right after birth?",
    "What are the three types of development discussed in infancy and childhood?",
    "How many nerve cells develop per minute in the womb?",
    "Humans are born with most of their brain cells, approximately how many neurons?",
    "When do brain connections form rapidly?",
    "What becomes increasingly complex as we mature?",
    "From which book is the image of neural networks sourced?",
    "Who published the book Exploring Psychology, 11e?",
    "What is the copyright year of the book mentioned?",
    "What do enriched environments lead to?",
    "The data on enriched environments causing 7%-10% increase in brain weight comes from what?",
    "What is synaptic pruning?",
    "What are critical periods?",
    "What aids learning later in life?",
    "What is neuroplasticity?",
    "When is infants' memory testable?",
    "Who conducted the study involving a mobile and an infant's leg?",
    "What years are associated with Carolyn Rovee-Collier's work?",
    "What was tied from the mobile to the infant's leg?",
    "What did the infant learn in Rovee-Collier's experiment?",
    "What did Rovee-Collier’s work show about infants' memory?",
    "What is infantile amnesia?",
    "What is the average age for the first conscious memory?",
    "Who is primarily associated with the theory of cognitive development stages?",
    "What is cognition?",
    "What serves as the foundation for thought?",
    "What metaphor does Piaget use for children?",
    "Children are naturally what, according to Piaget?",
    "What do children develop to organize information about the world?",
    "What processes do children's theories undergo?",
    "When does reorganization occur in Piaget's theory?",
    "What do stages represent in Piaget's theory?",
    "How do stages progress in Piaget's theory?",
    "What is the age range for the sensorimotor stage?",
    "How does the sensorimotor stage begin?",
    "How does the sensorimotor stage end?",
    "What emerges during the sensorimotor stage?",
    "What is the topic of the video linked in the slide?",
    "What is the age range for the preoperational stage?",
    "What do children use in the preoperational stage to represent objects and events?",
    "What is egocentrism in the preoperational stage?",
    "What is animism in the preoperational stage?",
    "What is centration in the preoperational stage?",
    "What problem is mentioned in the preoperational stage slide?",
    "What is the topic of the video linked in the conservation tasks slide?",
    "What do children start to develop in the preoperational stage?",
    "What is theory of mind?",
    "What can children begin to do with theory of mind?",
    "What is the age range for the concrete operational stage?",
    "On what is thinking and problem-solving based in the concrete operational stage?",
    "How is thinking described in the concrete operational stage?",
    "What does thinking become in the concrete operational stage?",
    "What is the focus in the concrete operational stage?",
    "What is the age range for the formal operational stage?",
    "What kind of thinking occurs in the formal operational stage?",
    "What type of reasoning is used in the formal operational stage?",
    "Is Piaget's theory still highly influential?",
    "What is the modern view on the timing of Piaget's stages?",
    "How is development viewed in modern critiques of Piaget?",
    "What is said about the sequence of major milestones in Piaget's theory?",
    "According to Vygotsky, cognitive development is inseparable from what?",
    "What does the Zone of Proximal Development separate?",
    "When does optimal learning occur according to Vygotsky?",
    "What is scaffold learning?"
    ],
    [ // Chapter 6
    "What is the title of Chapter 6?",
    "What is sensation?",
    "What is perception?",
    "What is agnosia?",
    "What is prosopagnosia?",
    "Which part of the brain is damaged in prosopagnosia?",
    "What is bottom-up processing?",
    "What is top-down processing?",
    "What is transduction?",
    "What are the three steps of transduction?",
    "What is the absolute threshold?",
    "What is subliminal stimulation?",
    "What does signal detection theory explain?",
    "How does priming influence detection?",
    "What is the difference threshold?",
    "What is the just noticeable difference (JND)?",
    "What does Weber’s Law state?",
    "What is sensory adaptation?",
    "How does sensory adaptation affect our perception of the world?",
    "What is perceptual set?",
    "How do context effects influence perception?",
    "How do motivation and emotion affect perception?",
    "What is the source of color perception according to the chapter?",
    "What are light waves in terms of color?",
    "What determines the hue of light?",
    "What determines the intensity of light?",
    "What are photoreceptors?",
    "What are the two types of photoreceptors mentioned?",
    "How many rods are in the retina?",
    "What is the function of rods in vision?",
    "How many cones are in the retina?",
    "What is the function of cones in vision?",
    "Where are cones primarily located in the retina?",
    "What are the three kinds of cones?",
    "What is the Young-Helmholtz trichromatic theory?",
    "How does the Young-Helmholtz theory explain colorblindness?",
    "What is Hering’s Opponent-Process Theory?",
    "What are the opponent retinal processes in Hering’s theory?",
    "What causes an afterimage according to Hering’s theory?",
    "What is perceptual organization?",
    "What are the two types of processing involved in perceptual organization?",
    "What is the Gestalt principle of similarity?",
    "What is the Gestalt principle of proximity?",
    "What is the Gestalt principle of good continuation?",
    "What is contour saliency in Gestalt principles?",
    "How does good continuation help in perception?",
    "What is context-dependent perception?",
    "What is perceptual constancy?",
    "What is shape constancy?",
    "What is size constancy?",
    "What is color constancy?",
    "What is unconscious inference according to Helmholtz?",
    "What are saccades?",
    "What is the duration of saccades?",
    "What happens to visual processes during saccades?",
    "What are fixations?",
    "How many saccade-fixation cycles occur per second?"
    ],
    [ // Chapter 7
    "What is the title of Chapter 7?",
    "Who conducted the Little Albert experiment?",
    "What was the conditioned emotional response in the Little Albert experiment?",
    "What did John Watson claim he could do with a dozen healthy infants?",
    "What is learning according to the chapter?",
    "What is a key characteristic of learning?",
    "Which animals are capable of learning?",
    "What is the first step in the learning process?",
    "How do we determine if a stimulus is important?",
    "What is habituation?",
    "What are examples of habituation mentioned?",
    "What type of learning is habituation?",
    "What is associative learning?",
    "What is respondent behavior?",
    "What is classical conditioning?",
    "What is operant conditioning?",
    "Who conducted research on classical conditioning with dogs?",
    "What did Ivan Pavlov study in his experiments?",
    "What is the unconditioned stimulus (US) in Pavlov's experiment?",
    "What is the unconditioned response (UR) in Pavlov's experiment?",
    "What is the neutral stimulus (NS) in Pavlov's experiment?",
    "What happens when the bell is paired with food in Pavlov's experiment?",
    "What becomes the conditioned stimulus (CS) after pairing?",
    "What is the conditioned response (CR) in Pavlov's experiment?",
    "What is acquisition in classical conditioning?",
    "What does acquisition allow in terms of behavior?",
    "What is the neutral stimulus in the computer reboot sound example?",
    "What is the unconditioned stimulus (US) in the computer reboot sound example?",
    "What is the unconditioned response (UR) in the computer reboot sound example?",
    "What is the conditioned stimulus (CS) after acquisition in the computer reboot sound example?",
    "What is the conditioned response (CR) in the computer reboot sound example?",
    "What happens to the conditioned response (CR) after many presentations of CS without US?",
    "What is extinction in classical conditioning?",
    "What happens when CS and US co-occur again after extinction?",
    "What is spontaneous recovery in classical conditioning?",
    "What triggers spontaneous recovery?",
    "Is extinction the same as forgetting?"
    ]
];

const answersList = [
    [ // Chapter 4
    ["Nature, Nurture, and Human Diversity", "Infancy and Childhood", "Developing Through the Life Span", "Physical Development"],
    ["Chapter 4", "Chapter 5", "Chapter 6", "Chapter 7"],
    ["Basic unit of inheritance", "Cells", "Proteins", "Hormones"],
    ["Over 99%", "Over 90%", "Over 95%", "Over 80%"],
    ["Changes in traits", "No effect", "Diseases only", "Physical growth"],
    ["Environmental events", "Genetic mutations", "Age", "Diet"],
    ["Nature and Nurture", "Physical and Cognitive Development", "Socioemotional Development", "Brain Development"],
    ["Inheritance/environment influence", "Only genetics", "Only environment", "Neither"],
    ["Many years", "A few years", "One year", "Decades"],
    ["Neither extreme makes sense", "Nature is correct", "Nurture is correct", "Both extremes are valid"],
    ["Genetics", "Environment", "Upbringing", "Experience"],
    ["Environment", "Genetics", "Personality", "Talents"],
    ["Either way it's your parents' fault", "It's your fault", "It's society's fault", "No one's fault"],
    ["Genetics", "Environment", "Behavior", "Cognition"],
    ["Focus on genetics", "Focus on environment", "Balanced approach", "No focus"],
    ["The rise of eugenics", "Behaviorism", "Humanism", "Cognitive theory"],
    ["Morally wrong", "Morally right", "Neutral", "Not discussed"],
    ["Misunderstanding of genetics", "Understanding of environment", "Lack of data", "Focus on nurture"],
    ["Just bad science", "Good science", "Partial science", "Unproven"],
    ["John B. Watson", "Jean Piaget", "Lev Vygotsky", "B.F. Skinner"],
    ["Climb and use hands in constructing buildings, thief, gunman, or dope fiend", "Doctor, lawyer, artist", "Beggar-man, merchant-chief", "All of the above"],
    ["Almost endless", "Limited", "None", "Specific roles"],
    ["Environment", "Genetics", "Both", "Neither"],
    ["Behaviorists, Humanists", "Geneticists", "Psychologists", "Sociologists"],
    ["J. B. Watson", "Abraham Maslow", "Jean Piaget", "Carolyn Rovee-Collier"],
    ["Abraham Maslow", "J. B. Watson", "Lev Vygotsky", "John Locke"],
    ["No, still bad science", "Yes", "Maybe", "Partially"],
    ["Social engineering", "Eugenics", "Genetic research", "Cognitive development"],
    ["Brave New World Revisited by Aldous Huxley", "Exploring Psychology", "Behaviorism", "The Bell Curve"],
    ["The study of the relationship between genetic variations and individual traits", "Environmental impact", "Cognitive processes", "Social behavior"],
    ["Both genes and environment matter", "Only genes", "Only environment", "Neither"],
    ["Most traits studied are polygenic", "Focus on single genes", "Environmental focus", "Cognitive focus"],
    ["Genes (biological parents) from environment (adoptive parents)", "Genes from siblings", "Environment from peers", "None"],
    ["If child shares traits more closely with biological or adoptive parents", "Only biological parents", "Only adoptive parents", "Neither"],
    ["Hundreds of families", "Few families", "Thousands", "One family"],
    ["Concordance rates of a trait for monozygotic and dizygotic twins", "Only monozygotic", "Only dizygotic", "None"],
    ["Hundreds of twin pairs", "Few pairs", "Thousands", "One pair"],
    ["100% of genes", "50% of genes", "75%", "25%"],
    ["About 50% of genes", "100%", "75%", "25%"],
    ["Genetic influence", "Environmental influence", "Both equally", "Neither"],
    ["Bouchard and colleagues", "Jean Piaget", "John Watson", "Lev Vygotsky"],
    ["80 sets", "50 sets", "100 sets", "20 sets"],
    ["Less similar than identical raised together, but more similar than fraternal", "More similar than raised together", "Identical to fraternal", "Less similar than fraternal"],
    ["Uncontrolled variables other than genes", "Only genes", "Only environment", "Both genes and environment"],
    ["Factors common among siblings", "Unique individual factors", "Genetic factors", "Cognitive factors"],
    ["No clear impact on personality", "Strong impact", "Moderate impact", "Variable impact"],
    ["Differences among siblings", "Similarities among siblings", "Genetic similarities", "Environmental similarities"],
    ["Favoritism, birth order", "Genetics", "Shared environment", "Cognitive development"],
    ["May help magnify our differences", "No effect", "Reduces differences", "Increases similarities"],
    ["Passive, evocative, active", "Only passive", "Only evocative", "Only active"],
    ["Developing Through the Life Span", "Nature, Nurture, and Human Diversity", "Infancy and Childhood", "Cognitive Development"],
    ["How we develop", "How we learn", "How we behave", "How we think"],
    ["~20,000 genes", "10,000 genes", "50,000 genes", "100,000 genes"],
    ["No strict end point", "Birth", "Adolescence", "Old age"],
    ["Most people care about child wellbeing", "Adult wellbeing", "Education", "Health"],
    ["Education, day care, spanking, sleeping styles", "Only education", "Only spanking", "Only day care"],
    ["Can help guide families and social groups to make healthy choices", "No help", "Helps only families", "Helps only individuals"],
    ["Gene and environment interact", "Only genes", "Only environment", "Neither"],
    ["Both nature and nurture are important", "Only nature", "Only nurture", "Neither"],
    ["Smooth, slow transitions or sharp changes across stages", "Only smooth transitions", "Only sharp changes", "No transitions"],
    ["Cognitive skills", "Personality", "Temperament", "Physical traits"],
    ["Temperament becomes personality", "Cognitive skills", "Physical skills", "Emotional skills"],
    ["Zygote, Embryo, Fetus", "Infant, Child, Adult", "Prenatal, Postnatal", "None"],
    ["Teratogens", "Only nutrients", "Only oxygen", "Only hormones"],
    ["Chemicals or agents that impair fetal development", "Nutrients", "Oxygen", "Vitamins"],
    ["Prescription, over-the-counter, and illegal drugs", "Only illegal drugs", "Only prescription", "Only over-the-counter"],
    ["Environmental toxins", "Nutrients", "Oxygen", "Hormones"],
    ["Physical and cognitive impairment due to prenatal alcohol exposure", "Only physical", "Only cognitive", "No impairment"],
    ["Serious harm", "No harm", "Mild harm", "Temporary harm"],
    ["1 in ~700", "1 in 500", "1 in 1000", "1 in 200"],
    ["Pre-programmed reactions and development", "Only reflexes", "Only thought", "None"],
    ["Automatic reflexes", "Pre-programmed reactions", "Sophisticated thought", "None"],
    ["Sophisticated thought already present", "Only reflexes", "Only reactions", "None"],
    ["Physical Development, Cognitive Development, Socioemotional Development", "Nature, Nurture, Genetics", "Infancy, Childhood, Adolescence", "None"],
    ["¼ million", "1 million", "100,000", "500,000"],
    ["~100 billion neurons", "50 billion", "10 billion", "1 billion"],
    ["After birth", "Before birth", "During birth", "Never"],
    ["Neural networks in the cerebral cortex", "Dendrites", "Synapses", "Neurons"],
    ["Myers/DeWall, Exploring Psychology, 11e", "Piaget's Theory", "Vygotsky's Work", "Watson's Behaviorism"],
    ["Worth Publishers", "Penguin", "Random House", "Oxford"],
    ["2019", "2015", "2020", "2010"],
    ["More dendrite connections", "Increased brain size", "Fewer synapses", "No change"],
    ["Animal studies, not human", "Human studies", "Both", "None"],
    ["Shutting down unused connections", "Adding new connections", "No change", "Enhancing neurons"],
    ["Optimal period for experiences to shape development", "Periods of no growth", "Adult learning", "None"],
    ["Neuroplasticity", "Synaptic pruning", "Critical periods", "None"],
    ["The brain's ability to adapt, reorganize, and change", "Memory retention", "Reflex development", "None"],
    ["Soon after birth", "After 1 year", "After 5 years", "Never"],
    ["Carolyn Rovee-Collier", "Jean Piaget", "Lev Vygotsky", "John Watson"],
    ["1997, 1999", "1990, 1992", "2000, 2002", "1985, 1987"],
    ["A string", "A ribbon", "A rope", "A cord"],
    ["To kick to make mobile move", "To cry", "To laugh", "To sleep"],
    ["Events from the past are remembered, over time they may not recall", "Only short-term memory", "No memory", "Perfect recall"],
    ["Lack of memory for early life events", "Enhanced memory", "Adult amnesia", "Childhood recall"],
    ["Around 3.5 years", "2 years", "5 years", "1 year"],
    ["Jean Piaget", "Lev Vygotsky", "John Watson", "B.F. Skinner"],
    ["Mental activities associated with thinking, knowing, remembering, and communicating", "Physical activities", "Emotional responses", "Social interactions"],
    ["Cognition", "Genes", "Environment", "Behavior"],
    ["Child as scientist", "Child as blank slate", "Child as learner", "Child as observer"],
    ["Curious and create theories", "Passive", "Ignorant", "Inactive"],
    ["Schemas", "Theories", "Genes", "Memories"],
    ["Assimilation, accommodation", "Only assimilation", "Only accommodation", "Adaptation"],
    ["When children’s theories are wrong most of the time", "When correct", "Always", "Never"],
    ["Reorganization", "Growth", "Stability", "Change"],
    ["In same order across all children – no skipping", "Random order", "Skipping allowed", "Variable order"],
    ["Birth to approximately 2 years of age", "2 to 7 years", "7 to 11 years", "11 and older"],
    ["With reflexive responding", "With symbolic processing", "With abstract thinking", "With reasoning"],
    ["With using symbolic processing", "With reflexes", "With concrete operations", "With formal thought"],
    ["Object permanence", "Conservation", "Egocentrism", "Theory of mind"],
    ["Object Permanence", "Conservation Tasks", "Three Mountain Problem", "None"],
    ["2 to 7 years", "Birth to 2 years", "7 to 11 years", "11 and older"],
    ["Use of symbols to represent objects and events but with errors", "Reflexes", "Abstract thinking", "Concrete operations"],
    ["Difficulty seeing the world from another standpoint", "Seeing others' perspectives", "Focusing on one aspect", "Attributing life to objects"],
    ["Inanimate objects are 'lifelike'", "Objects are permanent", "Focus on one feature", "Predicting behavior"],
    ["Concentration on one aspect of a problem", "Seeing multiple aspects", "Attributing life", "Understanding others"],
    ["The Three Mountain Problem", "Conservation", "Object Permanence", "None"],
    ["Conservation Tasks", "Object Permanence", "Three Mountain Problem", "None"],
    ["Theory of mind", "Object permanence", "Conservation", "Egocentrism"],
    ["Ideas about others’ mental states, beliefs, attitudes, knowledge", "Own mental states", "Physical objects", "Emotions"],
    ["Begin to accurately predict behavior", "Forget past events", "Change schemas", "Adapt physically"],
    ["7 to 11 years", "2 to 7 years", "Birth to 2 years", "11 and older"],
    ["Reversible mental operations", "Symbols with errors", "Abstract thinking", "Reflexes"],
    ["More powerful (useful)", "Weak", "Erroneous", "Abstract"],
    ["Systematic", "Random", "Egocentric", "Hypothetical"],
    ["The real and concrete, not the abstract", "Abstract and hypothetical", "Symbolic", "Reflexive"],
    ["11 years and older", "7 to 11 years", "2 to 7 years", "Birth to 2 years"],
    ["Abstract and hypothetical thinking", "Concrete thinking", "Symbolic thinking", "Reflexive responding"],
    ["Deductive reasoning to draw conclusions", "Inductive reasoning", "No reasoning", "Centration"],
    ["Yes", "No", "Maybe", "Partially"],
    ["Timing a bit off (underestimated infants, overestimated adolescents)", "Accurate timing", "Too early", "Too late"],
    ["More continuous than in theory", "Strictly staged", "Discontinuous", "Static"],
    ["Sequence of major milestones still observed", "Not observed", "Changed", "Ignored"],
    ["Social contexts", "Genetic factors", "Physical development", "Cognitive stages"],
    ["What a learner can do alone vs. with assistance", "Easy vs. difficult tasks", "Nature vs. nurture", "Stages vs. continuity"],
    ["When material is in the sweet spot between too easy and too difficult", "When too easy", "When too difficult", "Always"],
    ["Temporary support for developing higher levels of thinking", "Permanent support", "No support", "Constant guidance"]
    ],
    [ // Chapter 6
    ["Sensation and Perception", "Color Processing", "Perceptual Organization", "Transduction"],
    ["The reception of stimulation from the environment and its encoding into the nervous system", "The process of interpreting sensory information", "The detection of light", "The creation of images"],
    ["The process of interpreting and understanding sensory information", "The reception of stimulation", "The conversion of energy", "The detection of thresholds"],
    ["Failure or deficit in recognizing objects", "Disruption of face recognition", "Loss of sensory adaptation", "Change in perceptual constancy"],
    ["Disruption of face recognition", "Failure to recognize objects", "Loss of color vision", "Change in thresholds"],
    ["Fusiform gyrus in the ventral stream (‘what’ pathway)", "Occipital lobe", "Parietal lobe", "Temporal lobe"],
    ["Sensory receptors detect stimulus, works up to higher levels of processing", "Use of experience to interpret", "Conversion of energy", "Detection of minimum stimulus"],
    ["Use of experience and expectations to draw meaning from stimulus", "Sensory detection", "Energy transformation", "Neural delivery"],
    ["Converting one form of energy into another that our brain can recognize", "Interpreting sensory data", "Detecting stimuli", "Organizing perceptions"],
    ["Receive sensory stimulation, Transform that stimulation into neural impulses, Deliver the neural info to the brain", "Detect, Encode, Interpret", "Convert, Process, Create", "Receive, Adapt, Perceive"],
    ["Minimum amount of energy needed to detect a stimulus 50% of the time", "Maximum energy", "Energy below detection", "Energy for difference"],
    ["Below 50% threshold of detection", "Above threshold", "Equal to threshold", "Minimum difference"],
    ["How we detect a stimulus amid background information", "How we interpret data", "How we adapt", "How we organize"],
    ["Unconscious activation of concepts", "Conscious influence", "Change in thresholds", "Adaptation"],
    ["Minimum difference needed to detect a difference between 2 stimuli", "Maximum difference", "Energy for absolute threshold", "Constant stimulation"],
    ["Minimum difference needed to detect a difference between 2 stimuli 50% of time", "Maximum detectable difference", "Energy below threshold", "Constant input"],
    ["Detection of difference depends on the percent change", "Depends on absolute difference", "Depends on constant stimulation", "Depends on priming"],
    ["Diminished detection with constant stimulation", "Enhanced detection", "Loss of constancy", "Increase in threshold"],
    ["We see the world as it is important for perception, not as it is", "We see all details", "We adapt to all", "We perceive constants"],
    ["Expectations influence perception", "Context changes perception", "Motivation alters perception", "Sensory adaptation"],
    ["The context of the stimulus can change perceived information", "Expectations influence", "Motivation alters", "Sensory adaptation"],
    ["Your internal state alters perception of outside events", "Context changes", "Expectations influence", "Sensory adaptation"],
    ["Color is created in the brain", "Light waves are colored", "Perception is direct", "Cones detect hue"],
    ["Light waves are not colored", "Light waves create color", "Waves are constant", "Waves adapt"],
    ["Wavelength", "Amplitude", "Intensity", "Frequency"],
    ["Intensity", "Wavelength", "Hue", "Distance"],
    ["Cells in the retina that detect light", "Neurons in the brain", "Sound receptors", "Touch cells"],
    ["Rods and Cones", "Neurons and Cells", "Rods only", "Cones only"],
    ["~120 million", "~60 million", "~6 million", "~200 million"],
    ["Sensitive enough for vision in dark", "Provide color vision", "High acuity", "Detect brightness"],
    ["~6 million", "~120 million", "~60 million", "~200 million"],
    ["Allow color vision", "Vision in dark", "Low acuity", "Detect motion"],
    ["Primarily found in the fovea of the retina", "Spread across retina", "In optic nerve", "In brain"],
    ["Red, Green, Blue", "Yellow, Blue, White", "Red, Yellow, Black", "Green, White, Black"],
    ["Red, green, blue cones provide color perception", "Opponent processes", "Rods detect color", "Brain creates all"],
    ["Can explain colorblindness", "Cannot explain perception", "Only explains afterimages", "Applies to rods"],
    ["Opponent retinal processes explain color perception", "Trichromatic theory", "Rods detect color", "Brain creates all"],
    ["Red-Green, yellow-blue, white-black", "Red, green, blue", "Yellow, white, black", "Green, blue, white"],
    ["Afterimage results from exhausted color receptors", "Cones create afterimages", "Rods cause them", "Brain suppresses"],
    ["Piecing the world together", "Interpreting data", "Detecting thresholds", "Adapting stimuli"],
    ["Bottom-up/top-down processing", "Only bottom-up", "Only top-down", "Sensory adaptation"],
    ["The same-colored dots create a pattern of blue and white rows", "Dots create columns", "Dots form a circle", "No pattern"],
    ["The dots are closer in columns, creating a perception of columns", "Dots form rows", "Dots create a circle", "No perception"],
    ["Line segments are linked when collinear", "Lines form random patterns", "Lines create circles", "No linkage"],
    ["A smooth contour pops out, jagged fades", "Jagged pops out", "All contours fade", "No effect"],
    ["Good continuation helps see continuity in objects", "Creates jagged contours", "Fades objects", "Disrupts perception"],
    ["The four squares have the same luminance", "Squares differ in luminance", "Only two match", "No squares match"],
    ["Perceive constant properties despite changing sensory info", "Changes with stimuli", "Adapts to input", "Ignores properties"],
    ["Perceive constant shape despite angle changes", "Changes with angle", "Ignores shape", "Adapts shape"],
    ["Perceive constant size despite distance", "Changes with distance", "Ignores size", "Adapts size"],
    ["Top surfaces of cubes are the same color", "Cubes differ in color", "Only one matches", "No constancy"],
    ["Inference of relationship between distance and size of retinal image", "Direct size perception", "Constant shape", "Color perception"],
    ["Movement from one fixation point to another", "Pauses in gathering", "Constant input", "Neural adaptation"],
    ["25 – 125 ms", "100 – 200 ms", "10 – 50 ms", "200 – 300 ms"],
    ["Suppression of visual processes during saccades", "Enhancement", "No effect", "Constant processing"],
    ["Pauses where visual information is gathered", "Movements between points", "Constant input", "Neural suppression"],
    ["3 to 4", "5 to 6", "1 to 2", "7 to 8"]
    ],
    [ // Chapter 7
    ["Learning", "Sensation and Perception", "Classical Conditioning", "Operant Conditioning"],
    ["John Watson", "Ivan Pavlov", "B.F. Skinner", "Edward Thorndike"],
    ["Generalization of fear", "Salivation", "Reduced response", "Holding out hand"],
    ["Train any one to become any type of specialist", "Raise them naturally", "Teach basic skills", "Study their behavior"],
    ["Acquisition of knowledge, skill, attitudes, or understanding as a result of experience", "Innate behavior change", "Temporary response", "Physical growth"],
    ["Long-lasting change in behavior", "Short-term change", "Immediate reaction", "No change"],
    ["All animals", "Only humans", "Only mammals", "Only birds"],
    ["Begins with detection of a stimulus", "Begins with response", "Begins with habituation", "Begins with association"],
    ["Determine if important or not", "Respond to all", "Ignore all", "Adapt to all"],
    ["Ignoring unimportant stimulus", "Responding to all", "Learning new skills", "Changing behavior"],
    ["Ringing bell at a store/coffee shop, Backup camera warning", "Food, Bell", "Salivation, Hand", "None"],
    ["Form of Non-Associative Learning", "Associative Learning", "Classical Conditioning", "Operant Conditioning"],
    ["Associative learning happens when two events occur together", "Learning from one event", "Innate response", "Habituation"],
    ["Associate stimuli with automatic response", "Associate response with consequence", "Reduce response", "Adapt to environment"],
    ["Associate a response with its consequence", "Associate stimuli with response", "Reduce stimulus response", "Learn from experience"],
    ["Ivan Pavlov", "John Watson", "B.F. Skinner", "Edward Thorndike"],
    ["Work with dogs and study their responses to food", "Study human emotions", "Research operant behavior", "Analyze memory"],
    ["Food", "Bell", "Salivation", "Hand movement"],
    ["Salivation", "Bell ringing", "Food presentation", "Fear"],
    ["Bell", "Food", "Salivation", "Hand"],
    ["Pairing of bell with food", "Bell alone", "Food alone", "No pairing"],
    ["Bell", "Food", "Salivation", "Hand"],
    ["Salivation", "Fear", "Hand movement", "No response"],
    ["Appearance of conditioned response to the conditioned stimulus", "Reduction of response", "Initial response", "No change"],
    ["Adaptive behavior that allows predictive responses", "Random behavior", "Innate response", "No adaptation"],
    ["Computer Reboot Sound", "Altoid", "Holding out hand", "Salivation"],
    ["Altoid (food)", "Reboot Sound", "Holding out hand", "Salivation"],
    ["Ready to consume Altoid (Holding out hand)", "Reboot Sound", "Salivation", "No response"],
    ["Reboot Sound", "Altoid", "Holding out hand", "Salivation"],
    ["Ready to consume Altoid (Holding out hand)", "Reboot Sound", "Salivation", "No response"],
    ["Weaker CR", "Stronger CR", "No change", "Extinction"],
    ["Presentation of CS without US results in weaker CR", "CS with US strengthens CR", "No effect", "Immediate forgetting"],
    ["CR returns faster than during initial acquisition", "CR does not return", "CR weakens", "No change"],
    ["Spontaneous Recovery", "Extinction", "Acquisition", "Habituation"],
    ["After no presentation of CS or US for a while", "Immediate CS", "Continuous US", "No trigger"],
    ["No", "Yes", "Maybe", "Sometimes"]
]
];

const answerKeyList = [
    [ // Chapter 4
    "Nature, Nurture, and Human Diversity",
    "Chapter 4",
    "Basic unit of inheritance",
    "Over 99%",
    "Changes in traits",
    "Environmental events",
    "Nature and Nurture",
    "Inheritance/environment influence",
    "Many years",
    "Neither extreme makes sense",
    "Genetics",
    "Environment",
    "Either way it's your parents' fault",
    "Genetics",
    "Focus on genetics",
    "The rise of eugenics",
    "Morally wrong",
    "Misunderstanding of genetics",
    "Just bad science",
    "John B. Watson",
    "Climb and use hands in constructing buildings, thief, gunman, or dope fiend",
    "Almost endless",
    "Environment",
    "Behaviorists, Humanists",
    "J. B. Watson",
    "Abraham Maslow",
    "No, still bad science",
    "Social engineering",
    "Brave New World Revisited by Aldous Huxley",
    "The study of the relationship between genetic variations and individual traits",
    "Both genes and environment matter",
    "Most traits studied are polygenic",
    "Genes (biological parents) from environment (adoptive parents)",
    "If child shares traits more closely with biological or adoptive parents",
    "Hundreds of families",
    "Concordance rates of a trait for monozygotic and dizygotic twins",
    "Hundreds of twin pairs",
    "100% of genes",
    "About 50% of genes",
    "Genetic influence",
    "Bouchard and colleagues",
    "80 sets",
    "Less similar than identical raised together, but more similar than fraternal",
    "Uncontrolled variables other than genes",
    "Factors common among siblings",
    "No clear impact on personality",
    "Differences among siblings",
    "Favoritism, birth order",
    "May help magnify our differences",
    "Passive, evocative, active",
    "Developing Through the Life Span",
    "How we develop",
    "~20,000 genes",
    "No strict end point",
    "Most people care about child wellbeing",
    "Education, day care, spanking, sleeping styles",
    "Can help guide families and social groups to make healthy choices",
    "Gene and environment interact",
    "Both nature and nurture are important",
    "Smooth, slow transitions or sharp changes across stages",
    "Cognitive skills",
    "Temperament becomes personality",
    "Zygote, Embryo, Fetus",
    "Teratogens",
    "Chemicals or agents that impair fetal development",
    "Prescription, over-the-counter, and illegal drugs",
    "Environmental toxins",
    "Physical and cognitive impairment due to prenatal alcohol exposure",
    "Serious harm",
    "1 in ~700",
    "Pre-programmed reactions and development",
    "Automatic reflexes",
    "Sophisticated thought already present",
    "Physical Development, Cognitive Development, Socioemotional Development",
    "¼ million",
    "~100 billion neurons",
    "After birth",
    "Neural networks in the cerebral cortex",
    "Myers/DeWall, Exploring Psychology, 11e",
    "Worth Publishers",
    "2019",
    "More dendrite connections",
    "Animal studies, not human",
    "Shutting down unused connections",
    "Optimal period for experiences to shape development",
    "Neuroplasticity",
    "The brain's ability to adapt, reorganize, and change",
    "Soon after birth",
    "Carolyn Rovee-Collier",
    "1997, 1999",
    "A string",
    "To kick to make mobile move",
    "Events from the past are remembered, over time they may not recall",
    "Lack of memory for early life events",
    "Around 3.5 years",
    "Jean Piaget",
    "Mental activities associated with thinking, knowing, remembering, and communicating",
    "Cognition",
    "Child as scientist",
    "Curious and create theories",
    "Schemas",
    "Assimilation, accommodation",
    "When children’s theories are wrong most of the time",
    "Reorganization",
    "In same order across all children – no skipping",
    "Birth to approximately 2 years of age",
    "With reflexive responding",
    "With using symbolic processing",
    "Object permanence",
    "Object Permanence",
    "2 to 7 years",
    "Use of symbols to represent objects and events but with errors",
    "Difficulty seeing the world from another standpoint",
    "Inanimate objects are 'lifelike'",
    "Concentration on one aspect of a problem",
    "The Three Mountain Problem",
    "Conservation Tasks",
    "Theory of mind",
    "Ideas about others’ mental states, beliefs, attitudes, knowledge",
    "Begin to accurately predict behavior",
    "7 to 11 years",
    "Reversible mental operations",
    "More powerful (useful)",
    "Systematic",
    "The real and concrete, not the abstract",
    "11 years and older",
    "Abstract and hypothetical thinking",
    "Deductive reasoning to draw conclusions",
    "Yes",
    "Timing a bit off (underestimated infants, overestimated adolescents)",
    "More continuous than in theory",
    "Sequence of major milestones still observed",
    "Social contexts",
    "What a learner can do alone vs. with assistance",
    "When material is in the sweet spot between too easy and too difficult",
    "Temporary support for developing higher levels of thinking"
    ],
    [ // Chapter 6
    "Sensation and Perception",
    "The reception of stimulation from the environment and its encoding into the nervous system",
    "The process of interpreting and understanding sensory information",
    "Failure or deficit in recognizing objects",
    "Disruption of face recognition",
    "Fusiform gyrus in the ventral stream (‘what’ pathway)",
    "Sensory receptors detect stimulus, works up to higher levels of processing",
    "Use of experience and expectations to draw meaning from stimulus",
    "Converting one form of energy into another that our brain can recognize",
    "Receive sensory stimulation, Transform that stimulation into neural impulses, Deliver the neural info to the brain",
    "Minimum amount of energy needed to detect a stimulus 50% of the time",
    "Below 50% threshold of detection",
    "How we detect a stimulus amid background information",
    "Unconscious activation of concepts",
    "Minimum difference needed to detect a difference between 2 stimuli",
    "Minimum difference needed to detect a difference between 2 stimuli 50% of time",
    "Detection of difference depends on the percent change",
    "Diminished detection with constant stimulation",
    "We see the world as it is important for perception, not as it is",
    "Expectations influence perception",
    "The context of the stimulus can change perceived information",
    "Your internal state alters perception of outside events",
    "Color is created in the brain",
    "Light waves are not colored",
    "Wavelength",
    "Intensity",
    "Cells in the retina that detect light",
    "Rods and Cones",
    "~120 million",
    "Sensitive enough for vision in dark",
    "~6 million",
    "Allow color vision",
    "Primarily found in the fovea of the retina",
    "Red, Green, Blue",
    "Red, green, blue cones provide color perception",
    "Can explain colorblindness",
    "Opponent retinal processes explain color perception",
    "Red-Green, yellow-blue, white-black",
    "Afterimage results from exhausted color receptors",
    "Piecing the world together",
    "Bottom-up/top-down processing",
    "The same-colored dots create a pattern of blue and white rows",
    "The dots are closer in columns, creating a perception of columns",
    "Line segments are linked when collinear",
    "A smooth contour pops out, jagged fades",
    "Good continuation helps see continuity in objects",
    "The four squares have the same luminance",
    "Perceive constant properties despite changing sensory info",
    "Perceive constant shape despite angle changes",
    "Perceive constant size despite distance",
    "Top surfaces of cubes are the same color",
    "Inference of relationship between distance and size of retinal image",
    "Movement from one fixation point to another",
    "25 – 125 ms",
    "Suppression of visual processes during saccades",
    "Pauses where visual information is gathered",
    "3 to 4"
    ],
    [ // Chapter 7
    "Learning",
    "John Watson",
    "Generalization of fear",
    "Train any one to become any type of specialist",
    "Acquisition of knowledge, skill, attitudes, or understanding as a result of experience",
    "Long-lasting change in behavior",
    "All animals",
    "Begins with detection of a stimulus",
    "Determine if important or not",
    "Ignoring unimportant stimulus",
    "Ringing bell at a store/coffee shop, Backup camera warning",
    "Form of Non-Associative Learning",
    "Associative learning happens when two events occur together",
    "Associate stimuli with automatic response",
    "Associate a response with its consequence",
    "Ivan Pavlov",
    "Work with dogs and study their responses to food",
    "Food",
    "Salivation",
    "Bell",
    "Pairing of bell with food",
    "Bell",
    "Salivation",
    "Appearance of conditioned response to the conditioned stimulus",
    "Adaptive behavior that allows predictive responses",
    "Computer Reboot Sound",
    "Altoid (food)",
    "Ready to consume Altoid (Holding out hand)",
    "Reboot Sound",
    "Ready to consume Altoid (Holding out hand)",
    "Weaker CR",
    "Presentation of CS without US results in weaker CR",
    "CR returns faster than during initial acquisition",
    "Spontaneous Recovery",
    "After no presentation of CS or US for a while",
    "No"
    ]
];

let chaptersList = [
    "Chapter 4 & 5",
    "Chapter 6",
    "Chapter 7"
];





// these will need to be properly declared in a function. So they can constantly allow a new chosen chapter
let updatedListOfQuestions;
let newListOfAnswers;
let newAnswerKeyList
let currentQuestionIndex = 0;
let currentAnswerList = [];
let totalNumberOfQuestions = 0; // This will keep track of how many elements are left in the array updatedListOfQuestions.
let totalRight = 0;
let totalQuestions;
let parentClassName = "myFeedbackasdf container d-none flex-coloumn justify-content-center";


displayChaptersSidebar();
function main(){
    startingQuestionsAndAnswers();
};




// This starts off the quiz at a random question
function startingQuestionsAndAnswers(){
    if(totalNumberOfQuestions !== 0){
        console.log("currentQuestionIndex: " + currentQuestionIndex);
        // This variable chooses a random index from the list of total list of questinos.
        currentQuestionIndex = Math.floor(Math.random() * totalNumberOfQuestions);
        // Questions Displayed
        questionDisplayed.textContent = updatedListOfQuestions[currentQuestionIndex];
        //questionDisplayed.textContent = questionsList[0][currentQuestionIndex];
        // Answers Displayed
        currentAnswerList = newListOfAnswers[currentQuestionIndex];
        //currentAnswerList = newListOfAnswers[currentQuestionIndex];
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
    // DELETE TO GO TO RANDOM
    //currentQuestionIndex++;
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
        displayedFeedbackParent = document.querySelectorAll(".myFeedback");
        displayedFeedback = document.querySelectorAll(".myFeedbackasdf");
        parentClassName = "myFeedbackasdf container d-flex flex-coloumn justify-content-center";
        displayedFeedback.forEach(function(feedback) {
            feedback.className = parentClassName;

        })

    });
});

let hideResultsButton = document.querySelectorAll('.hide-results-btn');
hideResultsButton.forEach(function(button) {
    button.addEventListener("click", function() {
        console.log("The hideResultsButton was clicked!");
        displayedFeedback = document.querySelectorAll(".myFeedbackasdf");
        parentClassName = "myFeedbackasdf container d-none flex-coloumn justify-content-center";
        displayedFeedback.forEach(function(feedback) {
            feedback.className = parentClassName;

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
        totalRight++;
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
    clonedContainer.className = parentClassName;
    
    const questionNumberElement = clonedContainer.querySelector('.questionNumberText');
    const CorrectOrIncorrectElement = clonedContainer.querySelector('.correctOrIncorrect');
    const questionDisplayedElement = clonedContainer.querySelector('.displayedQuestionFinal');
    const scoreDisplayedAsFractionElement = clonedContainer.querySelector('.scoreAsFraction');
    const scoreDisplayedElement = clonedContainer.querySelector('.displayedTotalScoreSoFar');
    
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
            let finalScoreUpToPoint = (totalRight/totalQuestions)* 100;
            finalScoreUpToPoint = (finalScoreUpToPoint).toFixed(2); // Convert to percentage and round to 2 decimal places
            scoreDisplayedAsFractionElement.textContent = (totalRight) + "/" + (totalQuestions);
            scoreDisplayedElement.textContent = "Score: " + (finalScoreUpToPoint) + "%";
            
            parentElement.insertBefore(clonedContainer, parentElement.firstChild);
            //parentElement.appendChild(clonedContainer);
            
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
        totalQuestions = totalNumberOfQuestions;
        console.log("The chapterButtonsSidebar was pressed!"); 
        console.log(questionsList[0].length);
        main();
    });
});



//MINI PROJECTS THAT NEED TO BE ADDED
//Submit questions and answers for specific chapters
//Submit question and answer corrections
//Submit feature requests
