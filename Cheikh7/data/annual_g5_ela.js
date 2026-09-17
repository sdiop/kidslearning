// Explicit Ohio Grade 5 ELA lessons for weeks 9-36.
const ANNUAL_G5_ELA = [
  { s: 'ela', concept: 'Quote Accurately from a Text', std: 'Ohio RL.5.1', video: 'https://www.readingrockets.org/reading-101/reading-101-learning-modules/course-modules/comprehension', sprint: 'Read each passage closely, copy exact evidence, and explain how the wording supports an answer.', problems: [
    ['Passage: “Before leaving, Lena packed rain gear that opens above her head.” What item did she pack?', 'an umbrella'],
    ['Passage: “Omar’s bicycle crossed a bridge built long ago.” Which exact words describe the bridge’s age?', 'built long ago'],
    ['Passage: “Mia used a quiet voice while a baby slept.” Why did she whisper?', 'the baby was asleep'],
    ['Passage: “Ken balanced the stones after two failed attempts.” How many attempts did he make in all?', 'three attempts']
  ], qc: [
    { q: 'Passage: “The fox hid beneath the fern.” Which quotation answers where the fox hid?', choices: ['“beneath the fern”', '“the fox ran”', '“a tall tree”', '“across the field”'], a: '“beneath the fern”' },
    { q: 'Passage: “Nora carried soup to her neighbor.” Which exact words show what Nora carried?', choices: ['“carried soup”', '“visited a store”', '“her blue coat”', '“walked quickly”'], a: '“carried soup”' }
  ] },
  { s: 'ela', concept: 'Infer Character Traits', std: 'Ohio RL.5.1', video: 'https://www.readingrockets.org/reading-101/reading-101-learning-modules/course-modules/comprehension', sprint: 'Use a character’s actions and words as evidence for a precise trait inference.', problems: [
    ['Passage: “Jae returned the library book early and reminded his sister about her due date.” What trait does Jae show?', 'responsible'],
    ['Passage: “Although the path was steep, Priya kept climbing until she reached the lookout.” What trait is shown?', 'perseverance'],
    ['Passage: “Luis noticed the new student eating alone and invited her to join his game.” What trait does Luis show?', 'kindness'],
    ['Passage: “Mara admitted she had broken the vase, even though no one had seen her.” What trait fits Mara?', 'honesty']
  ], qc: [
    { q: 'Passage: “Tess gave her last snack to a hungry classmate.” Which trait best describes Tess?', choices: ['generous', 'careless', 'impatient', 'secretive'], a: 'generous' },
    { q: 'Passage: “Ben checked the map twice before leading the group.” What quality does this action suggest?', choices: ['careful', 'boastful', 'reckless', 'jealous'], a: 'careful' }
  ] },
  { s: 'ela', concept: 'Theme from Story Details', std: 'Ohio RL.5.2', video: 'https://www.readingrockets.org/reading-101/reading-101-learning-modules/course-modules/comprehension', sprint: 'Connect repeated actions and outcomes to state a story’s theme in a complete sentence.', problems: [
    ['Passage: “Niko practiced the trumpet each morning. At the concert, he played the difficult song smoothly.” What theme is supported?', 'Practice leads to improvement.'],
    ['Passage: “Ava shared seeds with neighbors, and together they grew a garden for the block.” State the theme.', 'Generosity strengthens a community.'],
    ['Passage: “Sam ignored the warning sign, lost the trail, and wished he had listened.” What lesson does this suggest?', 'Listening to good advice prevents trouble.'],
    ['Passage: “The team argued until each player listened; then they combined their ideas and solved the puzzle.” Give the theme.', 'Cooperation helps people solve problems.']
  ], qc: [
    { q: 'A story shows a child returning each day to repair a damaged nest until the birds are safe. Which theme fits?', choices: ['Persistence can solve difficult problems.', 'Winning matters more than helping.', 'Mistakes should always be hidden.', 'Nature should never be observed.'], a: 'Persistence can solve difficult problems.' },
    { q: 'A tale describes neighbors sharing tools to rebuild one family’s fence. What central lesson is most likely?', choices: ['Helping others builds community.', 'Work should always be avoided.', 'Neighbors should compete constantly.', 'Tools are more important than people.'], a: 'Helping others builds community.' }
  ] },
  { s: 'ela', concept: 'Compare Characters and Settings', std: 'Ohio RL.5.3', video: 'https://www.readingrockets.org/reading-101/reading-101-learning-modules/course-modules/comprehension', sprint: 'Compare how characters respond to settings and support comparisons with story details.', problems: [
    ['Story A has Lina solving a problem alone in a city apartment; Story B has Wes asking friends for help on a farm. Name one character difference.', 'Lina works alone, while Wes asks for help.'],
    ['In one story, a child crosses a noisy bridge; in another, a child explores a quiet cave. How do the settings differ?', 'The bridge is noisy, while the cave is quiet.'],
    ['Both Ana and Cole face storms, but Ana prepares supplies and Cole leaves without a plan. Who is more prepared?', 'Ana is more prepared.'],
    ['A mountain village relies on neighbors, while a busy city story shows quick individual decisions. Give one setting effect.', 'The village setting encourages cooperation.']
  ], qc: [
    { q: 'Mina solves riddles by asking her cousins, while Theo studies clues by himself. What comparison is accurate?', choices: ['Mina is collaborative; Theo is independent.', 'Both characters refuse to think.', 'Mina lives in a city; Theo lives at sea.', 'Theo asks more people than Mina.'], a: 'Mina is collaborative; Theo is independent.' },
    { q: 'Story A occurs beside a frozen lake; Story B occurs in a warm desert. Which statement compares their settings?', choices: ['The first setting is colder and wetter.', 'Both settings have identical weather.', 'The second setting has frozen water.', 'The first setting is warmer and drier.'], a: 'The first setting is colder and wetter.' }
  ] },
  { s: 'ela', concept: 'Poetry and Figurative Language', std: 'Ohio RL.5.4', video: 'https://www.readingrockets.org/reading-101/reading-101-learning-modules/course-modules/vocabulary', sprint: 'Interpret imagery and figurative language by explaining what each comparison means.', problems: [
    ['In “The moon was a silver coin above the trees,” what does the metaphor compare?', 'The moon to a silver coin.'],
    ['In “The wind whispered through the grass,” what human action is given to the wind?', 'whispering'],
    ['In “The snow glittered like tiny diamonds,” what does like signal?', 'a simile'],
    ['In “The angry thunder stomped across the sky,” what action is given to the thunder?', 'Thunder is described as angrily moving.']
  ], qc: [
    { q: 'In “The river danced around the rocks,” which technique gives the river a human action?', choices: ['personification', 'rhyme', 'alliteration', 'literal definition'], a: 'personification' },
    { q: 'What image is created by “The blanket of fog covered the road”?', choices: ['Fog is compared to a covering blanket.', 'The road is made of cloth.', 'A blanket is driving a car.', 'The fog is bright sunlight.'], a: 'Fog is compared to a covering blanket.' }
  ] },
  { s: 'ela', concept: 'Narrator Point of View', std: 'Ohio RL.5.6', video: 'https://www.readingrockets.org/reading-101/reading-101-learning-modules/course-modules/comprehension', sprint: 'Identify narrator perspective from pronouns and explain which experiences the narrator can report.', problems: [
    ['“I tucked the map into my pocket before we left.” What point of view is used?', 'first person'],
    ['“They watched the parade from the balcony.” What point of view is used?', 'third person'],
    ['A narrator says, “We felt nervous before our turn.” Who can the narrator directly describe feeling nervous?', 'the narrator and the group'],
    ['“She opened the letter and smiled.” Which pronoun signals the perspective?', 'she']
  ], qc: [
    { q: 'Which sentence is written in first-person point of view?', choices: ['I heard thunder outside.', 'The children heard thunder.', 'Maya heard thunder.', 'They heard thunder outside.'], a: 'I heard thunder outside.' },
    { q: 'A narrator uses “he” and “they” to tell about a girl’s journey. What perspective is this?', choices: ['third person', 'second person', 'first person', 'dialogue only'], a: 'third person' }
  ] },
  { s: 'ela', concept: 'Compare Stories in a Genre', std: 'Ohio RL.5.9', video: 'https://www.readingrockets.org/reading-101/reading-101-learning-modules/course-modules/comprehension', sprint: 'Compare plot patterns, characters, and settings across stories that share a genre.', problems: [
    ['Mystery A uses a missing key; Mystery B uses a missing painting. What genre feature do they share?', 'Both involve solving a mystery.'],
    ['Two fables feature animals and end with lessons. How are they alike?', 'Both use animal characters and teach a lesson.'],
    ['A science-fiction story visits Mars while another visits a space station. Name one setting difference.', 'One is set on Mars and the other in a space station.'],
    ['A fairy tale has a helpful dragon; another has a clever fox. What character feature differs?', 'Their helpful characters are different animals.']
  ], qc: [
    { q: 'Two mysteries both hide clues before a detective solves a theft. What do they share?', choices: ['a clue-based investigation', 'a realistic weather report', 'a historical timeline', 'a recipe with measurements'], a: 'a clue-based investigation' },
    { q: 'Two fables end with animals learning from mistakes. What common feature is present?', choices: ['a moral lesson', 'a scientific experiment', 'a news interview', 'a map legend'], a: 'a moral lesson' }
  ] },
  { s: 'ela', concept: 'Main Ideas and Key Details', std: 'Ohio RI.5.2', video: 'https://www.readingrockets.org/reading-101/reading-101-learning-modules/course-modules/comprehension', sprint: 'State an informational passage’s main idea and select details that directly support it.', problems: [
    ['Passage: “Recycling paper saves trees. It also uses less energy than making paper from new wood.” What is the main idea?', 'Recycling paper conserves resources.'],
    ['Passage: “Bees carry pollen between flowers. This helps plants make seeds.” What key detail explains their importance?', 'Bees help plants make seeds.'],
    ['Passage: “Sleep helps the brain store learning and gives the body time to recover.” State the main idea.', 'Sleep supports learning and recovery.'],
    ['Passage: “Mangroves protect juvenile fish and reduce coastal erosion.” Name one supporting detail.', 'Mangroves shelter young fish.']
  ], qc: [
    { q: 'A paragraph explains that trees provide shade, hold soil, and make oxygen. Which is its main idea?', choices: ['Trees benefit environments in several ways.', 'Trees only grow in deserts.', 'Shade always harms soil.', 'Oxygen is made by rocks.'], a: 'Trees benefit environments in several ways.' },
    { q: 'A text says bicycles reduce fuel use and provide exercise. Which detail supports its main idea about benefits?', choices: ['They reduce fuel use.', 'They require ocean water.', 'They are made only of paper.', 'They prevent all travel.'], a: 'They reduce fuel use.' }
  ] },
  { s: 'ela', concept: 'Explain Relationships in History', std: 'Ohio RI.5.3', video: 'https://www.readingrockets.org/reading-101/reading-101-learning-modules/course-modules/comprehension', sprint: 'Explain cause, effect, and sequence relationships in historical informational texts.', problems: [
    ['Passage: “Boats carried crops to distant markets after a new waterway became available.” What caused the increased shipping?', 'The canal opened.'],
    ['“The invention of the printing press made books faster to produce.” What was the effect?', 'Books were produced faster.'],
    ['“First settlers built homes; next they grew food; finally they traded it.” What happened second?', 'They planted crops.'],
    ['“A drought reduced harvests, so families looked for land elsewhere.” What was the consequence of the drought?', 'Families searched for new farmland.']
  ], qc: [
    { q: 'A history text says a new road connected villages, and merchants began visiting more often. What relationship is shown?', choices: ['The road led to increased trade.', 'Trade caused the road to disappear.', 'Villages became farther apart.', 'Merchants stopped traveling.'], a: 'The road led to increased trade.' },
    { q: 'Which event happened first in this sequence: “The bridge was built, then wagons crossed it”?', choices: ['The bridge was built.', 'Wagons crossed it.', 'The bridge was painted later.', 'Travel ended.'], a: 'The bridge was built.' }
  ] },
  { s: 'ela', concept: 'Academic Vocabulary', std: 'Ohio RI.5.4', video: 'https://www.readingrockets.org/reading-101/reading-101-learning-modules/course-modules/vocabulary', sprint: 'Use context clues and domain knowledge to determine the meaning of academic words.', problems: [
    ['“The arid region received only two inches of rain.” What does arid mean?', 'dry'],
    ['“The scientist recorded a precise measurement, not an estimate.” What does precise mean?', 'exact'],
    ['“The bridge was sturdy, so it held the heavy truck.” What does sturdy mean?', 'strong'],
    ['“The author contrasts city life with rural life.” What does contrasts mean?', 'shows differences']
  ], qc: [
    { q: 'In “The fragile glass cracked when dropped,” what does fragile mean?', choices: ['easily broken', 'very heavy', 'brightly colored', 'hard to find'], a: 'easily broken' },
    { q: 'In “The habitat provides shelter and food for deer,” what does habitat mean?', choices: ['the place where an organism lives', 'a type of weather', 'a tool for measuring rain', 'a plant’s seed'], a: 'the place where an organism lives' }
  ] },
  { s: 'ela', concept: 'Informational Text Structure', std: 'Ohio RI.5.5', video: 'https://www.readingrockets.org/reading-101/reading-101-learning-modules/course-modules/comprehension', sprint: 'Identify how headings, signal words, and paragraph organization reveal text structure.', problems: [
    ['“First mix flour; next add water; finally bake.” Which structure is used?', 'sequence'],
    ['“Because the storm flooded roads, buses arrived late.” Which structure is shown?', 'cause and effect'],
    ['“Owls have large eyes, while hawks have hooked beaks.” Which structure compares?', 'compare and contrast'],
    ['A passage names a problem with plastic waste and proposes reusable containers. Which structure is used?', 'problem and solution']
  ], qc: [
    { q: 'A paragraph lists reasons a river is polluted and explains the results. Which structure fits?', choices: ['cause and effect', 'chronological sequence', 'compare and contrast', 'description of a recipe'], a: 'cause and effect' },
    { q: 'Words such as “both,” “unlike,” and “similar” usually signal which organization?', choices: ['compare and contrast', 'problem and solution', 'sequence', 'cause only'], a: 'compare and contrast' }
  ] },
  { s: 'ela', concept: 'Multiple Accounts of an Event', std: 'Ohio RI.5.6', video: 'https://www.readingrockets.org/reading-101/reading-101-learning-modules/course-modules/comprehension', sprint: 'Compare what different witnesses emphasize and distinguish perspective from fact.', problems: [
    ['A reporter says the parade was loud; a child says the bright floats were exciting. What differs?', 'They emphasize sound versus visual excitement.'],
    ['A diary says the storm felt frightening; a weather log records 40-mph winds. What does the log add?', 'A measured wind speed.'],
    ['A coach calls the final play risky; a player calls it brave. What differs?', 'Their opinions about the play differ.'],
    ['Two accounts agree that a signal sounded at midday but disagree about the crowd’s mood. What is consistent?', 'The bell rang at noon.']
  ], qc: [
    { q: 'A sailor reports calm seas, while a passenger describes feeling nervous. What explains the difference?', choices: ['They describe different perspectives.', 'One account gives a map scale.', 'Both statements are measurements.', 'The event happened in two centuries.'], a: 'They describe different perspectives.' },
    { q: 'A museum label gives the date of an event, while a letter describes the writer’s fear. What does the letter mainly provide?', choices: ['a personal response', 'a precise map distance', 'a recipe sequence', 'a population total'], a: 'a personal response' }
  ] },
  { s: 'ela', concept: 'Use Multiple Sources', std: 'Ohio RI.5.7', video: 'https://www.readingrockets.org/reading-101/reading-101-learning-modules/course-modules/comprehension', sprint: 'Integrate a diagram, map, chart, or photograph with prose to build understanding.', problems: [
    ['A paragraph says volcanoes release lava; a diagram labels the lava flowing from a vent. What does the diagram add?', 'It shows where lava exits.'],
    ['A map places a wetland beside a river, while text explains wetlands filter water. What connection can you make?', 'The mapped wetland is positioned to filter river water.'],
    ['A chart shows 12 bird species in spring and 7 in winter. What information does the chart provide?', 'Spring has five more species than winter.'],
    ['A photograph shows terraced fields and text explains farming on steep slopes. What do they show together?', 'Terraces make steep-slope farming possible.']
  ], qc: [
    { q: 'A text describes a museum’s rooms, and a floor plan shows their positions. What does the plan contribute?', choices: ['spatial location', 'the author’s opinion', 'a character’s dialogue', 'a sound recording'], a: 'spatial location' },
    { q: 'A table lists rainfall for four months. What can a reader obtain directly from it?', choices: ['monthly rainfall amounts', 'the farmer’s feelings', 'a fictional plot', 'the color of clouds'], a: 'monthly rainfall amounts' }
  ] },
  { s: 'ela', concept: 'Reasons and Evidence', std: 'Ohio RI.5.8', video: 'https://www.readingrockets.org/reading-101/reading-101-learning-modules/course-modules/comprehension', sprint: 'Identify a claim, its reasons, and the evidence that makes those reasons convincing.', problems: [
    ['Claim: “The school should add shade trees.” Reason: students need cooler play areas. What evidence would support it?', 'Playground temperatures are high in summer.'],
    ['Claim: “Walking to school is healthy.” Reason: it adds exercise. What evidence fits?', 'Walking provides daily physical activity.'],
    ['A writer claims gardens help bees and cites counts of bees before and after flowers were planted. What is the evidence?', 'The before-and-after bee counts.'],
    ['Claim: “Our town needs a recycling bin.” The writer points to discarded recyclable paper. Identify the reason.', 'Much recyclable paper is thrown away.']
  ], qc: [
    { q: 'Which detail is evidence for the claim that library hours should increase?', choices: ['Twenty students studied there after school.', 'The library walls are blue.', 'A student likes soccer.', 'The librarian owns a bicycle.'], a: 'Twenty students studied there after school.' },
    { q: 'A writer says helmets protect riders and cites injury data. What role does the data play?', choices: ['It supports the reason.', 'It changes the topic to weather.', 'It introduces a fictional character.', 'It disproves every safety claim.'], a: 'It supports the reason.' }
  ] },
  { s: 'ela', concept: 'Integrate Information from Texts', std: 'Ohio RI.5.9', video: 'https://www.readingrockets.org/reading-101/reading-101-learning-modules/course-modules/comprehension', sprint: 'Combine details from two texts and explain how each source contributes to a conclusion.', problems: [
    ['Text A explains that bees carry pollen; Text B says pollination produces fruit. What combined conclusion follows?', 'Bees help plants produce fruit through pollination.'],
    ['One text describes solar panels; another reports a school’s lower electric bill after installing them. What do they show together?', 'Solar panels can reduce purchased electricity.'],
    ['A map shows a city beside a river; a history text says river ports aided trade. What inference is supported?', 'The city’s river location supported trade.'],
    ['Text A lists drought-resistant crops; Text B explains a dry climate. Why are the sources useful together?', 'They connect crop choice to climate.']
  ], qc: [
    { q: 'Text 1 says wetlands absorb floodwater; Text 2 shows homes spared during a wetland flood. What conclusion is supported?', choices: ['Wetlands can reduce flood damage.', 'Homes cause all rainfall.', 'Floods never affect wetlands.', 'Wetlands are built from metal.'], a: 'Wetlands can reduce flood damage.' },
    { q: 'A diagram shows a bee touching flower pollen, and a paragraph explains seed formation. What idea do both support?', choices: ['Bee activity can help plants reproduce.', 'Flowers cannot make seeds.', 'Bees make sunlight.', 'Seeds form only in diagrams.'], a: 'Bee activity can help plants reproduce.' }
  ] },
  { s: 'ela', concept: 'Opinion Writing', std: 'Ohio W.5.1', video: 'https://www.readingrockets.org/reading-101/reading-101-learning-modules/course-modules/writing', sprint: 'Plan an opinion with a clear claim, ordered reasons, evidence, and a concluding statement.', problems: [
    ['Which sentence is a clear opinion claim about recess?', 'Recess should be ten minutes longer.'],
    ['Claim: “The cafeteria should offer local fruit.” Give one relevant reason.', 'Local fruit can support nearby farmers.'],
    ['Which evidence best supports a claim for more library seating?', 'The library has 30 seats for 50 students at lunch.'],
    ['Write a conclusion for an argument that school gardens teach responsibility.', 'For these reasons, the school should maintain a garden.']
  ], qc: [
    { q: 'Which opening states an arguable claim?', choices: ['Our class should adopt a reading hour.', 'The clock is round.', 'Yesterday was Tuesday.', 'Water freezes at zero degrees Celsius.'], a: 'Our class should adopt a reading hour.' },
    { q: 'What belongs in an opinion paragraph after a reason?', choices: ['supporting evidence', 'an unrelated fact', 'a new alphabet', 'only a greeting'], a: 'supporting evidence' }
  ] },
  { s: 'ela', concept: 'Informative Writing', std: 'Ohio W.5.2', video: 'https://www.readingrockets.org/reading-101/reading-101-learning-modules/course-modules/writing', sprint: 'Organize factual information with a topic, linked details, precise words, and a conclusion.', problems: [
    ['Write a topic sentence for a paragraph explaining how shadows form.', 'Shadows form when an object blocks light.'],
    ['Which detail belongs in an informative paragraph about erosion?', 'Moving water can carry soil away.'],
    ['Choose a precise word: “The thermometer showed a ___ temperature of 18°C.”', 'measured'],
    ['Write a concluding sentence for a paragraph about the water cycle.', 'Water continually moves through Earth’s systems.']
  ], qc: [
    { q: 'Which sentence best introduces an informative paragraph about bees?', choices: ['Bees help flowering plants reproduce.', 'Bees are my favorite animal.', 'Please bring me a bee.', 'I wonder if bees dream.'], a: 'Bees help flowering plants reproduce.' },
    { q: 'Which detail is factual support for a paragraph about evaporation?', choices: ['Liquid water can change into water vapor.', 'Evaporation sounds like a song.', 'I dislike hot puddles.', 'Water should wear a hat.'], a: 'Liquid water can change into water vapor.' }
  ] },
  { s: 'ela', concept: 'Narrative Writing', std: 'Ohio W.5.3', video: 'https://www.readingrockets.org/reading-101/reading-101-learning-modules/course-modules/writing', sprint: 'Craft a narrative with a setting, characters, sequence, dialogue, and sensory details.', problems: [
    ['Which opening establishes a setting for a story?', 'At dawn, fog covered the quiet harbor.'],
    ['Add capitalization and dialogue punctuation: Maya said I found the missing key', 'Maya said, “I found the missing key.”'],
    ['Which detail creates sensory imagery for a campfire?', 'Smoke stung Eli’s eyes as logs crackled.'],
    ['In a story where a child follows paw prints to find a lost puppy, what event resolves the problem?', 'The child follows paw prints to the puppy’s safe hiding place.']
  ], qc: [
    { q: 'Which sentence introduces both a character and a problem?', choices: ['Nia found a flat tire before the race.', 'The sky was blue.', 'Races can be exciting.', 'Nia likes the color green.'], a: 'Nia found a flat tire before the race.' },
    { q: 'Which line uses dialogue correctly?', choices: ['“Wait for me!” shouted Carlos.', '“Wait for me”! shouted Carlos.', 'Wait for me,” shouted Carlos.', '“Wait for me” shouted Carlos!'], a: '“Wait for me!” shouted Carlos.' }
  ] },
  { s: 'ela', concept: 'Plan, Revise, and Edit', std: 'Ohio W.5.5', video: 'https://www.readingrockets.org/reading-101/reading-101-learning-modules/course-modules/writing', sprint: 'Use planning, revision, and editing to improve meaning, organization, word choice, and correctness.', problems: [
    ['Revise “The dog ran” to add precise details about the dog and movement.', 'The nervous dog sprinted across the wet yard.'],
    ['What should a writer do before drafting three organized paragraphs?', 'make a plan'],
    ['Edit “The birds sings in spring.”', 'The birds sing in spring.'],
    ['Why replace “nice” with “generous” in a sentence about sharing?', 'The precise word clarifies the trait.']
  ], qc: [
    { q: 'A draft has ideas in a confusing order. Which revision helps most?', choices: ['Rearrange details into a logical sequence.', 'Change every noun to a color.', 'Delete all supporting details.', 'Add unrelated characters.'], a: 'Rearrange details into a logical sequence.' },
    { q: 'Which edit corrects the sentence “She walk to school yesterday”?', choices: ['She walked to school yesterday.', 'She walking to school yesterday.', 'She walks to school yesterday.', 'She walk school yesterday.'], a: 'She walked to school yesterday.' }
  ] },
  { s: 'ela', concept: 'Research and Note-Taking', std: 'Ohio W.5.7', video: 'https://www.readingrockets.org/reading-101/reading-101-learning-modules/course-modules/writing', sprint: 'Ask focused questions, record paraphrased notes, and identify sources during research.', problems: [
    ['What focused research question could guide a report about coral reefs?', 'How do coral reefs support ocean life?'],
    ['Paraphrase: “The National Park Service says bats eat many insects.”', 'National Park Service: bats consume insects.'],
    ['What source information should accompany a research note?', 'the source name'],
    ['Which note is relevant to a report on wind energy?', 'Wind turbines use moving air to make electricity.']
  ], qc: [
    { q: 'Which question is narrow enough to research about local trees?', choices: ['How do oak trees help our town?', 'What is everything about Earth?', 'Why is all nature interesting?', 'Can I write about anything?'], a: 'How do oak trees help our town?' },
    { q: 'Source: “A frog takes in water directly through its skin.” Which note accurately paraphrases the source?', choices: ['Frogs can absorb water through skin tissue.', 'Frogs drink all water through their mouths.', '“A frog takes in water directly through its skin.”', 'Frogs cannot take in water.'], a: 'Frogs can absorb water through skin tissue.' }
  ] },
  { s: 'ela', concept: 'Summarize Sources', std: 'Ohio W.5.8', video: 'https://www.readingrockets.org/reading-101/reading-101-learning-modules/course-modules/writing', sprint: 'Summarize a source with its central point and essential evidence without inserting personal opinion.', problems: [
    ['Source: “Compost turns food scraps into soil nutrients.” Write its central point.', 'Composting returns nutrients to soil.'],
    ['Source: “Public transportation carries many riders and reduces the number of cars.” Give one key detail.', 'Buses carry many riders.'],
    ['Which sentence is an objective summary of a text about migration?', 'The text explains why animals move seasonally.'],
    ['What should a summary leave out?', 'personal opinions']
  ], qc: [
    { q: 'A source explains that insulation keeps homes warmer and lowers heating use. Which summary is best?', choices: ['Insulation saves heat and energy in homes.', 'I think insulation is fascinating.', 'Homes should all be blue.', 'The author dislikes winter.'], a: 'Insulation saves heat and energy in homes.' },
    { q: 'Which information belongs in a summary of a three-step experiment?', choices: ['the purpose and major result', 'every repeated word', 'the reader’s favorite color', 'an unrelated joke'], a: 'the purpose and major result' }
  ] },
  { s: 'ela', concept: 'Collaborative Discussion', std: 'Ohio SL.5.1', video: 'https://www.readingrockets.org/reading-101/reading-101-learning-modules/course-modules/speaking-listening', sprint: 'Build on classmates’ ideas, ask relevant questions, and cite evidence respectfully in discussion.', problems: [
    ['A classmate says gardens help pollinators. Give a response that cites a detail.', 'I agree because flowers provide nectar for bees.'],
    ['What question would deepen a discussion about school uniforms?', 'How would uniforms affect students’ costs?'],
    ['How can you disagree respectfully with a claim?', 'I see it differently because the data shows another result.'],
    ['A chart shows 12 birds near trees. What should a speaker do with that evidence?', 'cite the chart when explaining the claim']
  ], qc: [
    { q: 'Which response builds on a classmate’s point about recycling?', choices: ['I agree, and sorting paper makes recycling easier.', 'You are wrong; stop talking.', 'I want to discuss lunch instead.', 'That is unrelated to the chart.'], a: 'I agree, and sorting paper makes recycling easier.' },
    { q: 'Which behavior supports a productive discussion?', choices: ['listen and ask relevant questions', 'interrupt every speaker', 'ignore all evidence', 'repeat one sentence loudly'], a: 'listen and ask relevant questions' }
  ] },
  { s: 'ela', concept: 'Present Ideas Clearly', std: 'Ohio SL.5.4', video: 'https://www.readingrockets.org/reading-101/reading-101-learning-modules/course-modules/speaking-listening', sprint: 'Present an organized claim with appropriate volume, pacing, precise language, and useful visual evidence.', problems: [
    ['What should a speaker state near the beginning of a presentation about clean water?', 'the main claim'],
    ['Why label the axes on a data chart?', 'to explain what the values represent'],
    ['What speaking choice helps an audience understand a complex point?', 'pause between important ideas'],
    ['Which visual best supports a presentation about monthly rainfall?', 'a labeled rainfall graph']
  ], qc: [
    { q: 'Which presentation opening is clearest?', choices: ['Today I will explain how wetlands reduce flooding.', 'Um, maybe wetlands are something.', 'I brought a random picture.', 'Everyone already knows my topic.'], a: 'Today I will explain how wetlands reduce flooding.' },
    { q: 'What makes a chart useful during an oral report?', choices: ['clear labels and readable values', 'tiny unlabeled numbers', 'decorative unrelated pictures', 'hidden evidence'], a: 'clear labels and readable values' }
  ] },
  { s: 'ela', concept: 'Conventions and Verb Tense', std: 'Ohio L.5.1', video: 'https://www.readingrockets.org/reading-101/reading-101-learning-modules/course-modules/grammar', sprint: 'Maintain correct agreement and consistent verb tense when writing and revising sentences.', problems: [
    ['Edit for agreement: “The dogs runs across the field.”', 'The dogs run across the field.'],
    ['Change to past tense: “She walks home after practice.”', 'She walked home after practice.'],
    ['Choose the correct verb: “The basket of apples ___ heavy.”', 'is'],
    ['Make the tenses consistent: “Yesterday, I visit the museum and see fossils.”', 'Yesterday, I visited the museum and saw fossils.']
  ], qc: [
    { q: 'Which sentence has correct subject-verb agreement?', choices: ['The birds fly south.', 'The birds flies south.', 'The bird fly south.', 'The birds flying south.'], a: 'The birds fly south.' },
    { q: 'Which sentence keeps past tense consistent?', choices: ['Mia opened the door and looked outside.', 'Mia opens the door and looked outside.', 'Mia opened the door and looks outside.', 'Mia opening the door and looked outside.'], a: 'Mia opened the door and looked outside.' }
  ] },
  { s: 'ela', concept: 'Punctuation and Spelling', std: 'Ohio L.5.2', video: 'https://www.readingrockets.org/reading-101/reading-101-learning-modules/course-modules/grammar', sprint: 'Apply commas, quotation marks, end punctuation, and accurate spelling when editing sentences.', problems: [
    ['Add the missing end mark: Where is the nearest library', 'question mark'],
    ['Correct the spelling in “The rabbit hopped through the forrest.”', 'The rabbit hopped through the forest.'],
    ['A speaker says the words Yes I finished. Which punctuation marks belong around and between those spoken words?', 'quotation marks and a comma'],
    ['A sentence begins with the phrase After lunch and says that seeds were planted. Where should the comma go?', 'after the introductory phrase']
  ], qc: [
    { q: 'Which sentence uses a comma correctly after an introductory phrase?', choices: ['Before sunrise, the hikers left.', 'Before sunrise the, hikers left.', 'Before, sunrise the hikers left.', 'Before sunrise the hikers, left.'], a: 'Before sunrise, the hikers left.' },
    { q: 'Which word is spelled correctly?', choices: ['necessary', 'neccessary', 'necessery', 'nessesary'], a: 'necessary' }
  ] },
  { s: 'ela', concept: 'Greek and Latin Roots', std: 'Ohio L.4', video: 'https://www.readingrockets.org/reading-101/reading-101-learning-modules/course-modules/vocabulary', sprint: 'Use common Greek and Latin roots, prefixes, and suffixes to unlock unfamiliar word meanings.', problems: [
    ['The root geo means earth. What does geography study?', 'Earth and its places.'],
    ['The root bio means life. What does biology study?', 'living things'],
    ['The prefix re- means again. What does reread mean?', 'read again'],
    ['The root aqua means water. What is an aquatic animal?', 'an animal that lives in water']
  ], qc: [
    { q: 'Knowing that tele means far helps define telescope. What does it help you infer?', choices: ['an instrument for viewing far objects', 'a tool for measuring heat', 'a place for growing roots', 'a sound made by water'], a: 'an instrument for viewing far objects' },
    { q: 'The prefix un- usually means not. What does unsafe mean?', choices: ['not safe', 'safe again', 'very safe', 'a safety tool'], a: 'not safe' }
  ] },
  { s: 'ela', concept: 'Word Relationships', std: 'Ohio L.5.5', video: 'https://www.readingrockets.org/reading-101/reading-101-learning-modules/course-modules/vocabulary', sprint: 'Use synonyms, antonyms, and related words to clarify meaning and choose precise vocabulary.', problems: [
    ['Give a synonym for enormous.', 'huge'],
    ['Give an antonym for ancient.', 'modern'],
    ['Which word is more precise for “looked”: “The scientist ___ at the slide”?', 'examined'],
    ['How are joyful and delighted related?', 'They are synonyms.']
  ], qc: [
    { q: 'Which word is an antonym of scarce?', choices: ['abundant', 'limited', 'rare', 'missing'], a: 'abundant' },
    { q: 'Which word best replaces “went” in “The horse went quickly”?', choices: ['galloped', 'existed', 'rested', 'waited'], a: 'galloped' }
  ] },
  { s: 'ela', concept: 'Grade 5 Literacy Synthesis', std: 'Ohio RL.5.2', video: 'https://www.readingrockets.org/reading-101/reading-101-learning-modules/course-modules/comprehension', sprint: 'Synthesize theme, evidence, vocabulary, and craft in a concise response to a literary passage.', problems: [
    ['Passage: “Inez practiced the difficult dance, encouraged her partner, and performed confidently.” State a supported theme.', 'Practice and encouragement build success.'],
    ['In “The stars were glittering jewels,” identify the figurative comparison.', 'The stars are compared to jewels.'],
    ['Passage: “We crossed the bridge before sunrise.” Identify the point of view.', 'first person'],
    ['Passage: “The fox returned the tool, so the farmer trusted him.” What character trait is shown?', 'honesty']
  ], qc: [
    { q: 'A story shows a child solving a problem after listening to advice and practicing. Which theme is best?', choices: ['Learning from others and practicing can bring success.', 'Advice always prevents effort.', 'Problems disappear without action.', 'Practice makes people less helpful.'], a: 'Learning from others and practicing can bring success.' },
    { q: 'Which response best uses evidence to explain a story’s theme?', choices: ['The theme is cooperation because the friends combine their skills.', 'The theme is happiness because stories are fun.', 'The theme is weather because rain appears.', 'The theme is mystery because I like mysteries.'], a: 'The theme is cooperation because the friends combine their skills.' }
  ] }
];

if (ANNUAL_G5_ELA.length !== 28 || ANNUAL_G5_ELA.some(l => l.problems.length !== 4 || l.qc.length !== 2)) {
  throw new Error('ANNUAL_G5_ELA must contain 28 lessons with four problems and two checks each');
}