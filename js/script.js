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
    "What twin studies and epigenetics show about nature and nurture?",
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
    "What processes do children's theories go through?",
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
    ]
];

const answersList = [
    [ // Chapter 4
    ["Nature, Nurture, and Human Diversity", "Human Behavior and Genetics", "Cognitive Development in Children", "Physical Development in Infancy"],
    ["Chapter 3", "Chapter 4", "Chapter 5", "Chapter 6"],
    ["Basic unit of inheritance", "Building blocks of proteins", "Type of cells", "Environmental factors"],
    ["Over 90%", "Over 95%", "Over 99%", "Over 80%"],
    ["Changes in traits", "No effect", "Major diseases only", "Environmental changes"],
    ["Environmental events", "Only genetic factors", "Nothing", "Age"],
    ["Nature and Nurture", "Physical Development", "Cognitive Development", "Socioemotional Development"],
    ["Inheritance/environment", "Only inheritance", "Only environment", "Neither"],
    ["Many years", "Few years", "One year", "No debate"],
    ["Neither extreme makes sense", "Nature is correct", "Nurture is correct", "Both extremes are correct"],
    ["Our genetics", "Our environment", "Our upbringing", "Life experiences"],
    ["Our environment, upbringing, and life experiences", "Our genetics", "Personality traits", "Abilities"],
    ["Either way It's your parents fault", "It's your fault", "It's society's fault", "No one's fault"],
    ["Genetics", "Environment", "Both", "Neither"],
    ["Focus on genetics", "Focus on environment", "Balanced view", "No attitude"],
    ["The rise of eugenics", "The rise of behaviorism", "The rise of humanism", "Nothing"],
    ["Morally wrong", "Morally right", "Neutral", "Not mentioned"],
    ["Misunderstanding of genetics", "Understanding of genetics", "Ignore genetics", "Environmental focus"],
    ["Just bad science", "Good science", "Average science", "No science"],
    ["John B. Watson", "Jean Piaget", "Lev Vygotsky", "Abraham Maslow"],
    ["A builder who climbs and uses hands in constructing buildings", "A thief, a gunman or a dope fiend", "All of the above", "Nothing"],
    ["Almost endless", "Limited", "None", "Only positive"],
    ["Environment", "Genetics", "Both", "Neither"],
    ["Behaviorists", "Humanists", "Both", "Neither"],
    ["J. B. Watson", "Abraham Maslow", "Jean Piaget", "Lev Vygotsky"],
    ["Abraham Maslow", "J. B. Watson", "Carolyn Rovee-Collier", "Myers"],
    ["No, still bad science", "Yes", "Maybe", "Not mentioned"],
    ["Social engineering", "Eugenics", "Neuroplasticity", "Object permanence"],
    ["Brave New World Revisited by Aldous Huxley", "Exploring Psychology", "Behaviorism", "Humanism"],
    ["The study of the relationship between genetic variations and individual traits", "The study of environmental effects", "The study of cognitive development", "The study of socioemotional development"],
    ["Both genes and environment matter", "Only genes matter", "Only environment matters", "Neither matters"],
    ["Most traits studied are polygenic", "Focus on single genes", "Focus on environment only", "Focus on cognition"],
    ["Genes (biological parents) from environment (adoptive parents)", "Genes from cognition", "Environment from genes", "None"],
    ["If child shares traits more closely with biological or adoptive parents", "If child shares traits with siblings", "If child shares traits with peers", "None"],
    ["Hundreds of families", "Few families", "One family", "Thousands of families"],
    ["Concordance rates of a trait for monozygotic and dizygotic twins", "Only monozygotic twins", "Only dizygotic twins", "None"],
    ["Hundreds of twin pairs", "Few twin pairs", "One twin pair", "Thousands of twin pairs"],
    ["100% of genes", "50% of genes", "75% of genes", "25% of genes"],
    ["About 50% of genes", "100% of genes", "75% of genes", "25% of genes"],
    ["Genetic influence", "Environmental influence", "Both", "Neither"],
    ["Bouchard and colleagues", "Jean Piaget", "Lev Vygotsky", "John Watson"],
    ["80 sets", "50 sets", "100 sets", "20 sets"],
    ["Less similar than identical raised together, but more similar than fraternal", "More similar than identical raised together", "Less similar than fraternal", "Identical to fraternal"],
    ["Uncontrolled variables other than genes", "Only genes", "Only environment", "None"],
    ["Factors common among siblings", "Factors unique to individuals", "Both", "Neither"],
    ["No clear impact on personality", "Strong impact on personality", "Moderate impact", "None"],
    ["Differences among siblings", "Similarities among siblings", "Both", "Neither"],
    ["Favoritism, birth order, etc.", "Genetics", "Environment", "Cognition"],
    ["May help magnify our differences", "No effect", "Reduce differences", "None"],
    ["Passive, evocative, active", "Only passive", "Only evocative", "Only active"],
    ["Developing Through the Life Span", "Nature, Nurture, and Human Diversity", "Infancy and Childhood", "Cognitive Development"],
    ["How we develop", "How we learn", "How we behave", "How we grow physically"],
    ["~20,000 genes", "10,000 genes", "50,000 genes", "100,000 genes"],
    ["No strict end point", "At birth", "At 18 years", "At 60 years"],
    ["Most people care about child wellbeing", "Most people care about adult wellbeing", "Most people care about education", "Most people care about work"],
    ["Education, day care, spanking, sleeping styles, etc.", "Only education", "Only day care", "Only spanking"],
    ["Can help guide families and social groups to make healthy choices", "Cannot help", "Helps only families", "Helps only social groups"],
    ["Gene and environment interact", "Only genes matter", "Only environment matters", "Neither"],
    ["Both nature and nurture are important", "Only nature", "Only nurture", "Neither"],
    ["Smooth, slow transitions across time? Sharp changes across separable stages of development?", "Only smooth transitions", "Only sharp changes", "No transitions"],
    ["Cognitive skills", "Personality", "Temperament", "Physical skills"],
    ["Temperament becomes personality", "Cognitive skills", "Physical skills", "Emotional skills"],
    ["Zygote", "Embryo", "Fetus", "All of the above"],
    ["Teratogens", "Only nutrients", "Only oxygen", "Only water"],
    ["Chemicals or other agents that pass through the placenta to the fetus and impair development", "Nutrients", "Oxygen", "Water"],
    ["Prescription, over-the-counter, and illegal drugs", "Only prescription drugs", "Only illegal drugs", "Only over-the-counter drugs"],
    ["Environmental toxins", "Only nutrients", "Only oxygen", "Only water"],
    ["Physical and cognitive impairment due to prenatal alcohol exposure", "Only physical impairment", "Only cognitive impairment", "No impairment"],
    ["Serious harm", "No harm", "Mild harm", "Temporary harm"],
    ["1 in ~700", "1 in ~500", "1 in ~1000", "1 in ~200"],
    ["Pre-programmed reactions and development", "Only reflexes", "Only thought", "None"],
    ["Automatic reflexes", "Pre-programmed reactions", "Sophisticated thought", "None"],
    ["Sophisticated thought already present", "Only reflexes", "Only reactions", "None"],
    ["Physical Development", "Cognitive Development", "Socioemotional Development", "All of the above"],
    ["¼ million", "1 million", "100 thousand", "500 thousand"],
    ["~100 billion neurons", "50 billion", "200 billion", "10 billion"],
    ["After birth", "Before birth", "During birth", "Never"],
    ["Neural networks in the cerebral cortex", "Dendrites", "Synapses", "Neurons"],
    ["Myers/DeWall, Exploring Psychology, 11e", "Watson's Behaviorism", "Vygotsky's Theory", "Piaget's Stages"],
    ["Worth Publishers", "Random House", "Penguin", "xAI"],
    ["2019", "1997", "2025", "1900"],
    ["More dendrite connections", "7%-10% increase in brain weight", "Both", "None"],
    ["Animal studies, not human", "Human studies", "Both", "None"],
    ["Shutting down unused connections", "Adding connections", "No change", "Destroying neurons"],
    ["Optimal period for experiences to shape development", "Periods of crisis", "Adult periods", "None"],
    ["Neuroplasticity", "Synaptic pruning", "Object permanence", "Theory of mind"],
    ["The brain's ability to adapt, reorganize, and change its structure and function", "Ability to forget", "Ability to grow new neurons only", "None"],
    ["Soon after birth", "After 2 years", "After 7 years", "Never"],
    ["Carolyn Rovee-Collier", "Jean Piaget", "Lev Vygotsky", "John Watson"],
    ["1997,1999", "1900,1901", "2019,2020", "1970,1971"],
    ["A string", "A toy", "A bell", "Nothing"],
    ["To kick to make mobile move", "To cry", "To sleep", "To eat"],
    ["Events from the past are remembered", "Over time, they may not recall", "Both", "None"],
    ["Lack of memory for early life events", "Amnesia in adults", "No amnesia", "Memory boost"],
    ["Around 3.5 years", "1 year", "5 years", "10 years"],
    ["Jean Piaget", "Lev Vygotsky", "John Watson", "Abraham Maslow"],
    ["Mental activities associated with thinking, knowing, remembering, and communicating", "Physical activities", "Emotional activities", "Social activities"],
    ["Cognition", "Genes", "Environment", "Nurture"],
    ["Child as scientist", "Child as blank slate", "Child as adult", "Child as animal"],
    ["Curious and create theories", "Lazy", "Ignorant", "Happy"],
    ["Schemas", "Genes", "Neurons", "Memories"],
    ["Assimilation", "Accommodation", "Both", "None"],
    ["When children’s theories are wrong most of the time", "When correct", "Always", "Never"],
    ["Reorganization", "Theories", "Schemas", "Periods"],
    ["In same order across all children – no skipping", "Different orders", "Skipping allowed", "Random"],
    ["Birth to approximately 2 years of age", "2 to 7", "7 to 11", "11 and older"],
    ["With reflexive responding", "With symbols", "With abstract thinking", "With deduction"],
    ["With using symbolic processing", "With reflexive", "With concrete", "With formal"],
    ["Object permanence", "Theory of mind", "Conservation", "Deductive reasoning"],
    ["Object Permanence", "Conservation Tasks", "Three Mountain Problem", "Mobile experiment"],
    ["2 to 7 years", "Birth to 2", "7 to 11", "11+"],
    ["Symbols to represent objects and events but with errors", "Reflexes", "Abstract thinking", "Deductive"],
    ["Difficulty seeing the world from another standpoint", "Seeing from others", "Centration", "Animism"],
    ["Inanimate objects are “lifelike”", "Objects permanent", "Concentration on one aspect", "Predict behavior"],
    ["Concentration of one aspect of a problem", "Difficulty seeing other views", "Lifelike objects", "Theory of mind"],
    ["The Three Mountain Problem", "Mobile problem", "Conservation", "Object permanence"],
    ["Conservation Tasks", "Object Permanence", "Three Mountain", "Memory"],
    ["Theory of mind", "Object permanence", "Deductive reasoning", "Reversible operations"],
    ["Ideas about others’ mental states, beliefs, attitudes, knowledge", "About own mind", "About physical", "About emotions"],
    ["Accurately predict behavior from these assumptions", "Forget events", "Prune synapses", "Adapt brain"],
    ["7 to 11 years", "2-7", "Birth-2", "11+"],
    ["Reversible mental operations", "Symbols with errors", "Reflexes", "Abstract"],
    ["More powerful (useful)", "Weak", "Erroneous", "Hypothetical"],
    ["Systematic", "Random", "Egocentric", "Animistic"],
    ["The real and concrete, not the abstract", "Abstract and hypothetical", "Symbols", "Reflexes"],
    ["11 years and older", "7-11", "2-7", "Birth-2"],
    ["Abstract and hypothetical thinking", "Concrete", "Symbolic with errors", "Reflexive"],
    ["Deductive reasoning to draw appropriate conclusions from facts", "Inductive", "No reasoning", "Centration"],
    ["Yes", "No", "Maybe", "Not mentioned"],
    ["A bit off (underestimated infants and overestimated adolescents)", "Accurate", "Too early", "Too late"],
    ["More continuous than in theory", "Staged", "Discontinuous", "Static"],
    ["Still observed", "Not observed", "Changed", "Ignored"],
    ["Social contexts", "Genetic factors", "Physical development", "Memory"],
    ["What a learner can do on their own and what a learner can do with assistance", "Critical period", "Stage of Piaget", "Amnesia"],
    ["When material is in the sweet spot between too easy and too difficult", "Too easy", "Too difficult", "Any level"],
    ["Temporary support for developing higher levels of thinking", "Permanent support", "No support", "Pruning"]
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
    "Inheritance/environment",
    "Many years",
    "Neither extreme makes sense",
    "Our genetics",
    "Our environment, upbringing, and life experiences",
    "Either way It's your parents fault",
    "Genetics",
    "Focus on genetics",
    "The rise of eugenics",
    "Morally wrong",
    "Misunderstanding of genetics",
    "Just bad science",
    "John B. Watson",
    "A builder who climbs and uses hands in constructing buildings",
    "Almost endless",
    "Environment",
    "Both",
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
    "Favoritism, birth order, etc.",
    "May help magnify our differences",
    "Passive, evocative, active",
    "Developing Through the Life Span",
    "How we develop",
    "~20,000 genes",
    "No strict end point",
    "Most people care about child wellbeing",
    "Education, day care, spanking, sleeping styles, etc.",
    "Can help guide families and social groups to make healthy choices",
    "Gene and environment interact",
    "Both nature and nurture are important",
    "Smooth, slow transitions across time? Sharp changes across separable stages of development?",
    "Cognitive skills",
    "Temperament becomes personality",
    "All of the above",
    "Teratogens",
    "Chemicals or other agents that pass through the placenta to the fetus and impair development",
    "Prescription, over-the-counter, and illegal drugs",
    "Environmental toxins",
    "Physical and cognitive impairment due to prenatal alcohol exposure",
    "Serious harm",
    "1 in ~700",
    "Pre-programmed reactions and development",
    "Automatic reflexes",
    "Sophisticated thought already present",
    "All of the above",
    "¼ million",
    "~100 billion neurons",
    "After birth",
    "Neural networks in the cerebral cortex",
    "Myers/DeWall, Exploring Psychology, 11e",
    "Worth Publishers",
    "2019",
    "Both",
    "Animal studies, not human",
    "Shutting down unused connections",
    "Optimal period for experiences to shape development",
    "Neuroplasticity",
    "The brain's ability to adapt, reorganize, and change its structure and function",
    "Soon after birth",
    "Carolyn Rovee-Collier",
    "1997,1999",
    "A string",
    "To kick to make mobile move",
    "Both",
    "Lack of memory for early life events",
    "Around 3.5 years",
    "Jean Piaget",
    "Mental activities associated with thinking, knowing, remembering, and communicating",
    "Cognition",
    "Child as scientist",
    "Curious and create theories",
    "Schemas",
    "Both",
    "When children’s theories are wrong most of the time",
    "Reorganization",
    "In same order across all children – no skipping",
    "Birth to approximately 2 years of age",
    "With reflexive responding",
    "With using symbolic processing",
    "Object permanence",
    "Object Permanence",
    "2 to 7 years",
    "Symbols to represent objects and events but with errors",
    "Difficulty seeing the world from another standpoint",
    "Inanimate objects are “lifelike”",
    "Concentration of one aspect of a problem",
    "The Three Mountain Problem",
    "Conservation Tasks",
    "Theory of mind",
    "Ideas about others’ mental states, beliefs, attitudes, knowledge",
    "Accurately predict behavior from these assumptions",
    "7 to 11 years",
    "Reversible mental operations",
    "More powerful (useful)",
    "Systematic",
    "The real and concrete, not the abstract",
    "11 years and older",
    "Abstract and hypothetical thinking",
    "Deductive reasoning to draw appropriate conclusions from facts",
    "Yes",
    "A bit off (underestimated infants and overestimated adolescents)",
    "More continuous than in theory",
    "Still observed",
    "Social contexts",
    "What a learner can do on their own and what a learner can do with assistance",
    "When material is in the sweet spot between too easy and too difficult",
    "Temporary support for developing higher levels of thinking"
    ]
];

let chaptersList = [
    "Chapter 4"
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
    clonedContainer.className = "myFeedbackasdf container d-none flex-coloumn justify-content-center";
    
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
