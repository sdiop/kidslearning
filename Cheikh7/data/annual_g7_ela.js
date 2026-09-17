// Hand-authored Grade 7 ELA extension for weeks 9–36.
const ANNUAL_G7_ELA = [
  { s: 'ela', concept: 'Cite Several Pieces of Evidence', std: 'Ohio RL.7.1', video: 'https://owl.purdue.edu/owl/general_writing/academic_writing/establishing_arguments/index.html', sprint: 'Read, mark two details, and explain how each supports an inference.', problems: [
    ['In “The bridge shook, so Maya gripped the rail,” what detail signals danger?', 'The shaking bridge'],
    ['A paragraph says Omar packed a flashlight and checked the weather before hiking. What inference is supported by both details?', 'Omar expects uncertain conditions'],
    ['Which punctuation should surround the exact words copied from a story?', 'Quotation marks'],
    ['A reader claims a character is generous. The character gives away lunch and lends a coat. How many supporting details are provided?', 'Two']
  ], qc: [
    { q: 'What makes evidence strong for a reading inference?', choices: ['It directly relates to the inference', 'It is the longest sentence', 'It uses the fanciest word', 'It appears in the title'], a: 'It directly relates to the inference' },
    { q: 'Which citation practice identifies copied wording?', choices: ['Use quotation marks and name the source', 'Change every verb to past tense', 'Remove the author’s name', 'Put the quote in a heading'], a: 'Use quotation marks and name the source' }
  ] },
  { s: 'ela', concept: 'Analyze Theme Development', std: 'Ohio RL.7.2', video: 'https://owl.purdue.edu/owl/general_writing/academic_writing/establishing_arguments/index.html', sprint: 'Track a character’s choices and state the message those choices develop.', problems: [
    ['Lena practices daily after failing a tryout and later succeeds. What message develops?', 'Persistence can lead to growth'],
    ['Why is “perseverance” alone incomplete as a theme statement?', 'It names a topic, not a message'],
    ['At first, Eli hides his mistake; later, he admits it and repairs the damage. What change develops the theme?', 'Honesty restores trust'],
    ['A story ends with neighbors sharing tools after solving a problem together. Which value is emphasized?', 'Cooperation']
  ], qc: [
    { q: 'Which sentence states a theme rather than a topic?', choices: ['Patience helps people solve difficult problems', 'Patience', 'A patient child', 'Waiting'], a: 'Patience helps people solve difficult problems' },
    { q: 'What best shows that a theme develops across a narrative?', choices: ['Characters’ repeated choices reveal a message', 'The title has two words', 'Every paragraph has dialogue', 'The setting never changes'], a: 'Characters’ repeated choices reveal a message' }
  ] },
  { s: 'ela', concept: 'Story Elements Interact', std: 'Ohio RL.7.3', video: 'https://owl.purdue.edu/owl/general_writing/academic_writing/establishing_arguments/index.html', sprint: 'Map setting, conflict, and character choice in a short narrative.', problems: [
    ['A child hides a library book from a storm. When it is reported missing, the librarian suspects the child took it. What conflict results?', 'a misunderstanding between the child and librarian'],
    ['How can a dangerous setting affect a character’s decision to cross a river?', 'It can make the choice riskier'],
    ['A proud runner loses a race, asks for coaching, and improves. Which trait changes?', 'Pride becomes teachability'],
    ['In a story, a power outage causes a family to play board games together. What event changes the family’s actions?', 'the power outage']
  ], qc: [
    { q: 'What is the relationship between setting and plot?', choices: ['Place and time can create pressures that move events', 'Setting is always the narrator', 'Plot only describes weather', 'Place determines every character thought'], a: 'Place and time can create pressures that move events' },
    { q: 'Which action most clearly reveals a character trait?', choices: ['Returning a lost wallet despite needing money', 'Standing beside a blue wall', 'Reading a chapter title', 'Watching clouds change'], a: 'Returning a lost wallet despite needing money' }
  ] },
  { s: 'ela', concept: 'Word Choice and Tone', std: 'Ohio RL.7.4', video: 'https://owl.purdue.edu/owl/general_writing/academic_writing/establishing_arguments/index.html', sprint: 'Compare connotations and describe the mood created by precise diction.', problems: [
    ['Which verb better conveys anger when a character walks with force?', 'Stomped'],
    ['In “Rain hung like a silver curtain,” what tone is suggested by the soft, quiet imagery?', 'Reflective calm'],
    ['Replace “the meal was good” with a word meaning highly pleasing to taste.', 'Delicious'],
    ['A narrator calls a crowded room “a buzzing hive.” What image does this diction emphasize?', 'Busy activity']
  ], qc: [
    { q: 'Which word has the most positive connotation?', choices: ['Confident', 'Arrogant', 'Bossy', 'Pushy'], a: 'Confident' },
    { q: 'What tone is suggested by “whispered” rather than “shouted”?', choices: ['Quiet and restrained', 'Furious and explosive', 'Careless and comic', 'Formal and official'], a: 'Quiet and restrained' }
  ] },
  { s: 'ela', concept: 'Drama and Poetry Structure', std: 'Ohio RL.7.5', video: 'https://owl.purdue.edu/owl/subject_specific_writing/writing_in_literature/drama/index.html', sprint: 'Annotate dialogue, stage directions, stanzas, and line patterns.', problems: [
    ['A script says “[Lights dim]” before two actors enter. What kind of text feature is this?', 'Stage direction'],
    ['How many lines does a sonnet traditionally contain?', 'Fourteen'],
    ['What is the function of a stanza in a poem?', 'It groups lines'],
    ['A play contains only characters’ spoken words and directions, with no narrator. How is information delivered?', 'Through dialogue and action']
  ], qc: [
    { q: 'Which feature tells an actor how to move?', choices: ['Stage direction', 'Rhyme scheme', 'Narrator summary', 'Chapter heading'], a: 'Stage direction' },
    { q: 'What does a stanza organize?', choices: ['A group of poetic lines', 'A list of stage props', 'A speaker’s biography', 'A sequence of chapters'], a: 'A group of poetic lines' }
  ] },
  { s: 'ela', concept: 'Analyze Point of View', std: 'Ohio RL.7.6', video: 'https://owl.purdue.edu/owl/general_writing/academic_writing/establishing_arguments/index.html', sprint: 'Identify pronouns and compare what different narrators can reveal.', problems: [
    ['“I tucked the note beneath my desk” uses which narrative perspective?', 'First person'],
    ['What can an omniscient narrator report that a limited narrator may not?', 'Several characters’ thoughts'],
    ['A narrator describes only what she sees, not what others think. What limitation is present?', 'Restricted knowledge'],
    ['Rewrite “I feared the storm” from third person using the character name Sam.', 'Sam feared the storm']
  ], qc: [
    { q: 'Which pronoun most strongly signals first-person narration?', choices: ['I', 'They', 'You', 'She'], a: 'I' },
    { q: 'What is a possible effect of a limited narrator?', choices: ['Readers discover information as one character does', 'Readers know every character’s secret', 'Events are presented only as stage directions', 'The story has no point of view'], a: 'Readers discover information as one character does' }
  ] },
  { s: 'ela', concept: 'Compare Text and Media', std: 'Ohio RL.7.7', video: 'https://owl.purdue.edu/owl/general_writing/academic_writing/establishing_arguments/index.html', sprint: 'Compare how written and visual or audio choices communicate an idea.', problems: [
    ['A documentary image shows a shrinking glacier while narration gives dates. What does the image add?', 'Visible evidence of change'],
    ['A written account describes a storm slowly; a film uses dark music and quick cuts. What changes?', 'The film creates urgency'],
    ['A map and a paragraph both explain migration. Which medium shows routes most directly?', 'The map'],
    ['Why might a video interview communicate emotion more immediately than a transcript?', 'Viewers hear the speaker’s voice']
  ], qc: [
    { q: 'What can an image provide that a paragraph may not?', choices: ['Immediate visual evidence', 'A complete bibliography', 'A narrator’s private thoughts', 'A guaranteed unbiased claim'], a: 'Immediate visual evidence' },
    { q: 'Which film choice can heighten suspense?', choices: ['Rapid cuts during a dangerous moment', 'A blank screen for every scene', 'Removing all sound from dialogue', 'Showing the ending first every time'], a: 'Rapid cuts during a dangerous moment' }
  ] },
  { s: 'ela', concept: 'Compare Historical Fiction', std: 'Ohio RL.7.9', video: 'https://owl.purdue.edu/owl/general_writing/academic_writing/establishing_arguments/index.html', sprint: 'Compare historical accuracy, invented details, and source perspective.', problems: [
    ['A diary written during a battle and a novel about that battle both mention the same date. Which is firsthand?', 'The diary'],
    ['What spoken exchange may a historical novelist invent while keeping a real setting?', 'Dialogue'],
    ['Two accounts describe a victory differently. To understand their differing aims, what should a reader compare?', 'Authors’ purposes'],
    ['A novel places an imaginary family in a documented city. What does the setting contribute?', 'Historical context']
  ], qc: [
    { q: 'Which source is usually primary for an event witnessed by its writer?', choices: ['A diary from that time', 'A textbook written centuries later', 'A modern encyclopedia', 'A fictional retelling'], a: 'A diary from that time' },
    { q: 'What should remain consistent in responsible historical fiction?', choices: ['Verified time and place', 'Every conversation ever recorded', 'Only invented characters', 'The author’s modern slang'], a: 'Verified time and place' }
  ] },
  { s: 'ela', concept: 'Central Ideas', std: 'Ohio RI.7.2', video: 'https://owl.purdue.edu/owl/general_writing/academic_writing/establishing_arguments/index.html', sprint: 'Name an informational text’s central idea and connect supporting details.', problems: [
    ['An article explains that bees pollinate crops and lists several affected foods. What is its central idea?', 'Pollinators support food production'],
    ['A repeated statistic about crop yields serves what role?', 'Supporting evidence'],
    ['A paragraph lists sleep benefits, then gives study results. What idea do both details develop?', 'Sleep improves health'],
    ['How can a reader distinguish a central idea from an isolated fact?', 'The idea unifies multiple details']
  ], qc: [
    { q: 'Which statement is broad enough to be a central idea?', choices: ['Wetlands protect communities from floods', 'One frog lives near the pond', 'The article has four paragraphs', 'Tuesday was rainy'], a: 'Wetlands protect communities from floods' },
    { q: 'What makes a detail support an informational idea?', choices: ['It explains or proves part of that idea', 'It changes the subject completely', 'It appears only in a caption', 'It repeats the title without information'], a: 'It explains or proves part of that idea' }
  ] },
  { s: 'ela', concept: 'Interactions among Ideas', std: 'Ohio RI.7.3', video: 'https://owl.purdue.edu/owl/general_writing/academic_writing/establishing_arguments/index.html', sprint: 'Trace causes, effects, and connections among ideas in an article.', problems: [
    ['A dam slows a river and creates a reservoir. What relationship links these ideas?', 'Cause and effect'],
    ['A city plants trees; later, shaded sidewalks are cooler. What caused the cooler sidewalks?', 'The planted trees'],
    ['A text says drought reduces harvests, which raises food prices. What is the second effect?', 'Higher food prices'],
    ['How does a solution relate to a problem in an informational text?', 'It addresses the problem']
  ], qc: [
    { q: 'Which signal most often introduces an effect?', choices: ['As a result', 'For example', 'In contrast', 'Meanwhile'], a: 'As a result' },
    { q: 'If a factory filters smoke and air quality improves, what is the filter?', choices: ['A cause of the improvement', 'An unrelated detail', 'The final effect', 'A comparison'], a: 'A cause of the improvement' }
  ] },
  { s: 'ela', concept: 'Technical Vocabulary', std: 'Ohio RI.7.4', video: 'https://owl.purdue.edu/owl/general_writing/academic_writing/establishing_arguments/index.html', sprint: 'Use context, roots, and domain clues to determine precise meanings.', problems: [
    ['In “Photosynthesis uses light to make food,” what does photosynthesis name?', 'A plant food-making process'],
    ['The sentence says an arid desert receives little rain. What does arid mean?', 'Very dry'],
    ['What does the root photo suggest in photograph?', 'Light'],
    ['In a science passage, “orbit” describes a moon’s path around a planet. What domain uses this term?', 'Astronomy']
  ], qc: [
    { q: 'Which clue best helps define an unfamiliar technical word?', choices: ['A nearby definition or example', 'The number of letters', 'The font color alone', 'The author’s first name'], a: 'A nearby definition or example' },
    { q: 'What does the root geo contribute to geology?', choices: ['Earth', 'Water', 'Sound', 'Life'], a: 'Earth' }
  ] },
  { s: 'ela', concept: 'Informational Text Structure', std: 'Ohio RI.7.5', video: 'https://owl.purdue.edu/owl/general_writing/academic_writing/establishing_arguments/index.html', sprint: 'Use headings and transitions to identify how an author organizes information.', problems: [
    ['Headings read “Problem,” “Causes,” “Effects,” and “Solutions.” What structure is signaled?', 'Problem and solution'],
    ['“First, next, finally” organizes steps in what pattern?', 'Sequence'],
    ['A paragraph compares electric and gas cars by cost and emissions. What structure is used?', 'Compare and contrast'],
    ['What structure links a storm to damaged roofs and power lines?', 'Cause and effect']
  ], qc: [
    { q: 'Which heading most likely signals chronological organization?', choices: ['Steps in the Process', 'Similarities and Differences', 'Reasons for the Change', 'The Problem Today'], a: 'Steps in the Process' },
    { q: 'Which transition most clearly signals contrast?', choices: ['However', 'Therefore', 'Before', 'For instance'], a: 'However' }
  ] },
  { s: 'ela', concept: 'Author Purpose and Viewpoint', std: 'Ohio RI.7.6', video: 'https://owl.purdue.edu/owl/general_writing/academic_writing/establishing_arguments/index.html', sprint: 'Infer purpose and viewpoint from claims, emphasis, and word choice.', problems: [
    ['An article emphasizes endangered habitats and urges protection. What viewpoint is shown?', 'Concern for conservation'],
    ['How does the word “only” in “only careless drivers text” affect viewpoint?', 'It makes the judgment stronger'],
    ['A brochure lists benefits but no drawbacks of a product. What limitation may it have?', 'One-sided presentation'],
    ['An author explains recycling steps without urging action. What is the likely purpose?', 'To inform']
  ], qc: [
    { q: 'Which purpose fits a text that gives steps for planting tomatoes?', choices: ['To instruct', 'To entertain with fantasy', 'To criticize a character', 'To narrate a war'], a: 'To instruct' },
    { q: 'What can strongly reveal an author’s viewpoint?', choices: ['Loaded or approving word choice', 'The page number', 'The paragraph count alone', 'The paper size'], a: 'Loaded or approving word choice' }
  ] },
  { s: 'ela', concept: 'Evaluate Arguments', std: 'Ohio RI.7.8', video: 'https://owl.purdue.edu/owl/general_writing/academic_writing/establishing_arguments/index.html', sprint: 'Test claims for relevant evidence, reasoning, and fair treatment of counterclaims.', problems: [
    ['A claim says a school garden improves students’ nutrition. Which evidence is most relevant?', 'A before-and-after student nutrition survey'],
    ['Why does acknowledging counterevidence strengthen an argument?', 'It shows fair reasoning'],
    ['A writer says walking is healthy because one friend enjoys it. What is weak?', 'The evidence is too limited'],
    ['Which evidence best supports a claim that later starts improve sleep?', 'A study measuring student sleep']
  ], qc: [
    { q: 'What should evidence for a claim be?', choices: ['Relevant and reliable', 'Unrelated but entertaining', 'Only emotional', 'Impossible to check'], a: 'Relevant and reliable' },
    { q: 'What is a counterclaim?', choices: ['A reasonable opposing position', 'The author’s title', 'A repeated definition', 'A concluding greeting'], a: 'A reasonable opposing position' }
  ] },
  { s: 'ela', concept: 'Compare Authors Evidence', std: 'Ohio RI.7.9', video: 'https://owl.purdue.edu/owl/general_writing/academic_writing/establishing_arguments/index.html', sprint: 'Compare how authors use accuracy, relevance, and reasoning to support conclusions.', problems: [
    ['Two authors cite the same river study but reach different conclusions. What should readers inspect?', 'Their reasoning'],
    ['One author uses a current government report; another uses an anonymous comment. Which source is more credible?', 'The government report'],
    ['Why can the same statistic support different claims?', 'Authors may interpret it differently'],
    ['A writer cites a study about adults to make a claim about children. What concern arises?', 'The evidence may not apply']
  ], qc: [
    { q: 'Which comparison best evaluates two authors’ support?', choices: ['Check each source’s relevance and accuracy', 'Count each author’s adjectives', 'Choose the longer article', 'Prefer the author with more headings'], a: 'Check each source’s relevance and accuracy' },
    { q: 'What makes cited evidence relevant?', choices: ['It directly bears on the claim', 'It comes from a fictional speaker', 'It is repeated without explanation', 'It changes the topic'], a: 'It directly bears on the claim' }
  ] },
  { s: 'ela', concept: 'Argument Writing', std: 'Ohio W.7.1', video: 'https://owl.purdue.edu/owl/general_writing/academic_writing/establishing_arguments/index.html', sprint: 'Plan a claim, reasons, evidence, counterclaim, and logical conclusion.', problems: [
    ['Name the missing part in this plan: claim, two reasons, evidence, opposing view, ____.', 'Rebuttal'],
    ['A writer argues for later school starts and admits buses run early. What does that admission do?', 'Addresses an opposing concern'],
    ['Which evidence best supports a claim that students use the library regularly?', 'Checkout data from the school library'],
    ['What should a conclusion do after reasons and evidence?', 'Reinforce the claim']
  ], qc: [
    { q: 'Which sentence is a debatable claim?', choices: ['Schools should provide daily quiet reading time', 'The library has shelves', 'A book has pages', 'Tuesday follows Monday'], a: 'Schools should provide daily quiet reading time' },
    { q: 'What connects evidence to a claim in an argument?', choices: ['Reasoning that explains its significance', 'A decorative border', 'A new unrelated topic', 'A list of greetings'], a: 'Reasoning that explains its significance' }
  ] },
  { s: 'ela', concept: 'Informative Writing', std: 'Ohio W.7.2', video: 'https://owl.purdue.edu/owl/general_writing/academic_writing/establishing_arguments/index.html', sprint: 'Organize an explanation with definitions, facts, examples, and transitions.', problems: [
    ['An informative paragraph defines erosion and gives a riverbank example. What writing mode is used?', 'Explanation'],
    ['Which transition best connects a cause to its effect?', 'As a result'],
    ['What should a writer do before explaining a technical process?', 'Define key terms'],
    ['A paragraph about compost lists steps in order. What organization helps readers?', 'Sequence']
  ], qc: [
    { q: 'What is the main goal of informative writing?', choices: ['Explain a topic clearly', 'Hide the topic from readers', 'Win through insults', 'Create a fictional narrator'], a: 'Explain a topic clearly' },
    { q: 'Which detail would clarify erosion?', choices: ['Moving water carrying soil away', 'A character’s favorite song', 'A random phone number', 'An unrelated recipe'], a: 'Moving water carrying soil away' }
  ] },
  { s: 'ela', concept: 'Narrative Technique', std: 'Ohio W.7.3', video: 'https://owl.purdue.edu/owl/general_writing/academic_writing/establishing_arguments/index.html', sprint: 'Use pacing, sensory detail, dialogue, and reflection to develop a narrative.', problems: [
    ['Why might a writer use short sentences during a tense scene?', 'To quicken the pace'],
    ['“The icy handle bit her palm” uses which technique?', 'Sensory detail'],
    ['How can dialogue reveal fear without naming the emotion?', 'A character can speak hesitantly'],
    ['A narrator pauses to explain a past mistake. What technique is this?', 'Reflection']
  ], qc: [
    { q: 'Which choice slows a suspenseful moment?', choices: ['Detailed description of each careful movement', 'A string of rapid actions', 'A sudden one-word sentence', 'Skipping directly to the ending'], a: 'Detailed description of each careful movement' },
    { q: 'What can dialogue reveal?', choices: ['Character motives and relationships', 'Only the weather forecast', 'The page’s font size', 'A source’s publication date'], a: 'Character motives and relationships' }
  ] },
  { s: 'ela', concept: 'Revise for Purpose and Audience', std: 'Ohio W.7.5', video: 'https://owl.purdue.edu/owl/general_writing/academic_writing/establishing_arguments/index.html', sprint: 'Revise wording, order, and detail for a defined reader and purpose.', problems: [
    ['For a formal report about enrolled learners, which noun is the appropriate label?', 'Students'],
    ['A paragraph hides its main point until the last line. What revision improves clarity?', 'Move the claim earlier'],
    ['A poster for young children uses long technical sentences. What should revision address?', 'Audience readability'],
    ['What should a writer check after changing a paragraph’s order?', 'Logical flow']
  ], qc: [
    { q: 'Which revision best fits a formal audience?', choices: ['Please submit the completed form by Friday', 'Gimme the form Friday', 'Hand it over, okay?', 'You better bring that thing'], a: 'Please submit the completed form by Friday' },
    { q: 'What does revising primarily improve?', choices: ['Ideas, organization, and clarity', 'The number of paper clips', 'The author’s handwriting only', 'The date on the calendar'], a: 'Ideas, organization, and clarity' }
  ] },
  { s: 'ela', concept: 'Short Research Projects', std: 'Ohio W.7.7', video: 'https://owl.purdue.edu/owl/research_and_citation/conducting_research/index.html', sprint: 'Narrow a question, gather notes, and synthesize findings without copying.', problems: [
    ['Compare a broad environmental question with one limited to a local stream. Which is narrower?', 'How does runoff affect our creek?'],
    ['Why should notes use a researcher’s own words?', 'To avoid accidental copying'],
    ['What makes a research question workable in one week?', 'A focused scope'],
    ['A student records a source title beside each note. What benefit follows?', 'Sources can be traced']
  ], qc: [
    { q: 'Which is a focused research question?', choices: ['How does shade affect our school garden?', 'What is everything about plants?', 'Why is the world interesting?', 'What facts exist?'], a: 'How does shade affect our school garden?' },
    { q: 'What should notes preserve besides ideas?', choices: ['The source information', 'Every word in the article', 'Only the page color', 'The writer’s favorite snack'], a: 'The source information' }
  ] },
  { s: 'ela', concept: 'Assess Source Credibility', std: 'Ohio W.7.8', video: 'https://owl.purdue.edu/owl/research_and_citation/conducting_research/evaluating_sources/index.html', sprint: 'Check authorship, date, evidence, purpose, and corroboration.', problems: [
    ['Which source has stronger credibility indicators: an anonymous post or a dated report naming its researcher?', 'The dated research report'],
    ['Why does a publication date matter for a claim about current technology?', 'Information can become outdated'],
    ['A website links to data and corrects an earlier error. What quality does this show?', 'Transparency'],
    ['What should a researcher do when two trustworthy sources disagree?', 'Compare their evidence']
  ], qc: [
    { q: 'Which feature supports source credibility?', choices: ['Named author and verifiable evidence', 'Anonymous rumor', 'All-capital headings only', 'A dramatic background image'], a: 'Named author and verifiable evidence' },
    { q: 'Why consult more than one reliable source?', choices: ['To corroborate information', 'To make the topic disappear', 'To avoid recording citations', 'To guarantee identical wording'], a: 'To corroborate information' }
  ] },
  { s: 'ela', concept: 'Collaborative Discussion', std: 'Ohio SL.7.1', video: 'https://owl.purdue.edu/owl/general_writing/academic_writing/establishing_arguments/index.html', sprint: 'Build on peers’ ideas, ask for evidence, and disagree respectfully.', problems: [
    ['“I agree because the chart shows 42%” performs what discussion move?', 'Adds evidence'],
    ['Write a respectful question challenging an unsupported claim about homework.', 'What evidence supports that claim?'],
    ['Why should a speaker paraphrase a peer before responding?', 'To show accurate understanding'],
    ['What should a participant do after noticing a quieter classmate has not spoken?', 'Invite the classmate’s view']
  ], qc: [
    { q: 'Which response builds on a peer’s idea?', choices: ['Your point connects to the survey result', 'You are wrong, stop talking', 'I have nothing to add', 'The bell is loud'], a: 'Your point connects to the survey result' },
    { q: 'What makes disagreement productive?', choices: ['Addressing ideas with reasons and respect', 'Interrupting every speaker', 'Attacking a person’s character', 'Changing the subject'], a: 'Addressing ideas with reasons and respect' }
  ] },
  { s: 'ela', concept: 'Analyze Main Ideas in Media', std: 'Ohio SL.7.2', video: 'https://owl.purdue.edu/owl/general_writing/academic_writing/establishing_arguments/index.html', sprint: 'Identify a media message and evaluate how images, sound, and omissions shape it.', problems: [
    ['A news video repeatedly shows traffic jams while discussing congestion. What does the image support?', 'The congestion claim'],
    ['If a report shows cars but never pedestrians, what bias may result?', 'Pedestrians are overlooked'],
    ['A narrator’s urgent music accompanies a calm statistic. What effect can this create?', 'A sense of alarm'],
    ['What should viewers compare when evaluating a media message?', 'Words, images, and omissions']
  ], qc: [
    { q: 'What is an omission in media?', choices: ['Relevant information left out', 'A caption repeated twice', 'A speaker’s exact quote', 'A clearly labeled source'], a: 'Relevant information left out' },
    { q: 'Which element can communicate a message without words?', choices: ['An image', 'A citation list', 'A paragraph number', 'A dictionary entry'], a: 'An image' }
  ] },
  { s: 'ela', concept: 'Present Claims and Findings', std: 'Ohio SL.7.4', video: 'https://owl.purdue.edu/owl/general_writing/academic_writing/establishing_arguments/index.html', sprint: 'Present a clear claim with organized evidence, visuals, and accessible terms.', problems: [
    ['A recycling claim is followed by a graph and explanation. What supports the claim?', 'The visual evidence'],
    ['Why should a presenter define “contamination” for a general audience?', 'To make the finding accessible'],
    ['What belongs at the beginning of a research presentation?', 'The central claim'],
    ['A speaker reads every word from crowded slides. What delivery revision helps listeners?', 'Use brief slide points']
  ], qc: [
    { q: 'Which visual best supports a claim about monthly recycling totals?', choices: ['A labeled bar graph', 'A decorative cartoon', 'A blank slide', 'An unrelated map'], a: 'A labeled bar graph' },
    { q: 'What makes an oral presentation easy to follow?', choices: ['Clear organization and explained evidence', 'Unrelated anecdotes only', 'Unreadable text', 'A claim with no support'], a: 'Clear organization and explained evidence' }
  ] },
  { s: 'ela', concept: 'Phrases and Clauses', std: 'Ohio L.7.1', video: 'https://owl.purdue.edu/owl/general_writing/grammar/index.html', sprint: 'Identify independent and dependent clauses and combine them accurately.', problems: [
    ['In “Although it rained, the game continued,” what grammatical unit can stand alone?', 'Independent clause'],
    ['What type of clause begins with “because” and cannot stand alone?', 'Dependent clause'],
    ['Combine “The soil was dry” and “we watered it” using the subordinating word “because.”', 'Because the soil was dry, we watered it'],
    ['What does a phrase lack that an independent clause requires?', 'A complete subject-verb idea']
  ], qc: [
    { q: 'Which group is an independent clause?', choices: ['The birds nested', 'When the birds nested', 'After the storm', 'Under the bridge'], a: 'The birds nested' },
    { q: 'Which word commonly introduces a dependent clause?', choices: ['Although', 'And', 'Or', 'Yet'], a: 'Although' }
  ] },
  { s: 'ela', concept: 'Language Conventions', std: 'Ohio L.7.2', video: 'https://owl.purdue.edu/owl/general_writing/grammar/index.html', sprint: 'Edit commas, agreement, and sentence boundaries in precise prose.', problems: [
    ['Add needed punctuation after the opening phrase in “After lunch we tested the soil.”', 'Comma after introduction'],
    ['Choose the correct verb: “The results show/shows a pattern.”', 'show'],
    ['What punctuation can join two related independent clauses?', 'A semicolon'],
    ['Correct the sentence: “The dogs runs across the yard.”', 'The dogs run across the yard.']
  ], qc: [
    { q: 'Which sentence uses a comma after an introductory phrase?', choices: ['Before dawn, the hikers left', 'The hikers left at dawn', 'The hikers, left before dawn', 'The hikers left before sunrise'], a: 'Before dawn, the hikers left' },
    { q: 'Which sentence has correct subject-verb agreement?', choices: ['The results show a pattern', 'The results shows a pattern', 'The result show a pattern', 'The results showing a pattern'], a: 'The results show a pattern' }
  ] },
  { s: 'ela', concept: 'Greek and Latin Roots', std: 'Ohio L.7.4', video: 'https://owl.purdue.edu/owl/general_writing/grammar/commonly_confused_words/index.html', sprint: 'Use roots and affixes to infer meanings of unfamiliar academic words.', problems: [
    ['The root geo means earth. What does geography study?', 'Earth and places'],
    ['What meaning does trans- contribute in transport?', 'Across'],
    ['If bio means life, what does biology concern?', 'Living things'],
    ['Use the root aqua to infer aquaculture’s topic.', 'Water-based growing']
  ], qc: [
    { q: 'Which word contains a root meaning “across”?', choices: ['Transfer', 'Biology', 'Geology', 'Aquarium'], a: 'Transfer' },
    { q: 'What can a familiar root help a reader do?', choices: ['Infer an unfamiliar word’s meaning', 'Determine the author’s age', 'Count the paragraphs', 'Identify the publication date'], a: 'Infer an unfamiliar word’s meaning' }
  ] },
  { s: 'ela', concept: 'Grade 7 Literacy Synthesis', std: 'Ohio RI.7.9', video: 'https://owl.purdue.edu/owl/general_writing/academic_writing/establishing_arguments/index.html', sprint: 'Synthesize claims across texts, compare evidence, and write a supported conclusion.', problems: [
    ['Article A says drought limits crops; Article B reports farmers using drip irrigation. What shared issue connects them?', 'Water and food production'],
    ['One article uses rainfall records and another uses an interview. What difference should a synthesis mention?', 'Evidence type'],
    ['What must a source-based conclusion avoid?', 'Unsupported new opinions'],
    ['Two texts agree that wetlands reduce flooding but cite different regions. What can a reader synthesize?', 'A shared claim with varied evidence']
  ], qc: [
    { q: 'What does synthesis do across two texts?', choices: ['Combines shared ideas and meaningful differences', 'Copies one paragraph twice', 'Ignores all evidence', 'Lists titles without connections'], a: 'Combines shared ideas and meaningful differences' },
    { q: 'Study A reports tree-lined streets are cooler, and Study B finds the same pattern in another city. Which conclusion is best supported?', choices: ['Both studies link trees with cooler streets, though their cities differ', 'Trees solve every climate problem', 'The studies prove a new unrelated claim', 'No evidence matters'], a: 'Both studies link trees with cooler streets, though their cities differ' }
  ] }
];

// Local contract checks for this explicit artifact.
const _normEla = value => String(value).toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
if (ANNUAL_G7_ELA.length !== 28) throw new Error('ELA extension must contain 28 lessons');
for (const lesson of ANNUAL_G7_ELA) {
  if (lesson.problems.length !== 4 || lesson.qc.length !== 2) throw new Error('ELA lesson counts are invalid');
  for (const [question, answer] of lesson.problems) {
    const a = _normEla(answer);
    if (a.length > 4 && _normEla(question).includes(a)) throw new Error(`ELA answer leaked: ${question}`);
  }
  for (const check of lesson.qc) {
    if (new Set(check.choices.map(_normEla)).size !== 4 || !check.choices.includes(check.a)) throw new Error('ELA choices are invalid');
  }
}