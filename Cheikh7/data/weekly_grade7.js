// Weekly Ohio-aligned curriculum for a rising 7th grader.
// Ohio Learning Standards use CCSS-style codes for math/ELA (e.g. 7.NS.1, RL.7.4);
// plausible Ohio codes are used for science/social studies.
// Shape: { week, title, subjects:[math, ela, science, social] }
// Each subject: { s, concept, std, video, sprint, problems:[[q,a]...], qc:[{q,choices[4],a}...] }
const WEEKLY_G7 = [
  {
    week: 1, title: "Integers & Figurative Language Week", subjects: [
      {
        s: "math", concept: "Adding & Subtracting Integers", std: "Ohio 7.NS.1",
        video: "https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-negative-numbers-add-and-subtract",
        sprint: "Draw a number line from -10 to 10 and make 5 hero jumps. Write the equation for each jump like a combo move.",
        problems: [["-3 + 7 = ?", "4"], ["5 - 9 = ?", "-4"], ["-6 + (-2) = ?", "-8"], ["-4 - (-9) = ?", "5"], ["The distance a number is from 0 is its ___", "absolute value"]],
        qc: [
          { q: "-8 + 3 = ?", choices: ["-5", "5", "-11", "11"], a: "-5" },
          { q: "|-7| equals...", choices: ["7", "-7", "0", "14"], a: "7" }
        ]
      },
      {
        s: "ela", concept: "Figurative Language", std: "Ohio RL.7.4",
        video: "https://www.youtube.com/results?search_query=figurative+language+middle+school+simile+metaphor",
        sprint: "Find 3 similes or metaphors in a song or game you love and screenshot or write them down.",
        problems: [["'Brave as a lion' is a ___", "simile"], ["'The wind whispered' is ___", "personification"], ["'I've told you a million times' is ___", "hyperbole"], ["Write your own metaphor about school.", "sample: School is a rollercoaster."]],
        qc: [
          { q: "'Time is a thief' is a...", choices: ["metaphor", "simile", "idiom", "alliteration"], a: "metaphor" },
          { q: "A simile uses...", choices: ["like or as", "opposites", "rhyme", "numbers"], a: "like or as" }
        ]
      },
      {
        s: "science", concept: "Characteristics of Life", std: "Ohio 7.LS.1",
        video: "https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/1.8/primary/lesson/characteristics-of-life-ms-ls/",
        sprint: "Score fire, a robot, and a mushroom against the 5 characteristics of life on a quick T-chart.",
        problems: [["Name two characteristics of living things.", "made of cells; use energy; grow; respond; reproduce"], ["Is a virus made of cells?", "no"], ["Keeping a stable internal state is called ___", "homeostasis"], ["Smallest unit of life?", "cell"]],
        qc: [
          { q: "All living things are made of...", choices: ["cells", "bones", "water only", "metal"], a: "cells" },
          { q: "Homeostasis means...", choices: ["stable internal state", "fast growth", "eating food", "sleeping"], a: "stable internal state" }
        ]
      },
      {
        s: "social", concept: "Latitude & Longitude", std: "Ohio 7.GEO.1",
        video: "https://education.nationalgeographic.org/resource/mapmaker-latitude-longitude/",
        sprint: "Find your city's coordinates, then pin 3 world cities on a map like map markers in a game.",
        problems: [["Latitude measures distance from the ___", "equator"], ["Longitude measures distance from the ___", "prime meridian"], ["0 degrees latitude is called the ___", "equator"], ["Which comes first in coordinates?", "latitude"]],
        qc: [
          { q: "0 degrees longitude is the...", choices: ["prime meridian", "equator", "tropic", "pole"], a: "prime meridian" },
          { q: "Latitude lines run...", choices: ["east-west", "north-south", "diagonally", "around poles only"], a: "east-west" }
        ]
      }
    ]
  },
  {
    week: 2, title: "Rational Number Ops & Evidence Week", subjects: [
      {
        s: "math", concept: "Multiply & Divide Rational Numbers", std: "Ohio 7.NS.2",
        video: "https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-negative-numbers-multiply-and-divide",
        sprint: "Make a sign-rules cheat card (like a spell list), then power through the problems.",
        problems: [["-6 x 4 = ?", "-24"], ["-8 x -3 = ?", "24"], ["-36 / 9 = ?", "-4"], ["-2.5 x 4 = ?", "-10"]],
        qc: [
          { q: "-7 x -2 = ?", choices: ["14", "-14", "9", "-9"], a: "14" },
          { q: "Negative divided by positive is...", choices: ["negative", "positive", "zero", "undefined"], a: "negative" }
        ]
      },
      {
        s: "ela", concept: "Main Idea & Text Evidence", std: "Ohio RI.7.1",
        video: "https://www.youtube.com/results?search_query=citing+text+evidence+middle+school",
        sprint: "Read one short article; collect 3 facts and note what each one proves, like gathering clues.",
        problems: [["The central point of a text is the ___", "main idea"], ["Facts and quotes that support a claim are ___", "evidence"], ["Restating a text briefly in your own words is a ___", "summary"], ["Write one sentence starting with 'According to the text...'", "sample answer"]],
        qc: [
          { q: "The best evidence is...", choices: ["a fact from the text", "your opinion", "a guess", "the title"], a: "a fact from the text" },
          { q: "A summary should be...", choices: ["short, in your own words", "longer than the text", "copied exactly", "only opinions"], a: "short, in your own words" }
        ]
      },
      {
        s: "science", concept: "Cells & Levels of Organization", std: "Ohio 7.LS.2",
        video: "https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:cells-and-organisms",
        sprint: "Draw a cell and label 4 parts, then build the level-up ladder: cell → tissue → organ → system.",
        problems: [["The control center of the cell is the ___", "nucleus"], ["Powerhouse of the cell?", "mitochondria"], ["Order: cell, tissue, organ, ___", "organ system"], ["Plant cells have a cell ___ that animal cells lack.", "wall"]],
        qc: [
          { q: "Which is largest?", choices: ["organ system", "cell", "tissue", "organ"], a: "organ system" },
          { q: "The nucleus...", choices: ["controls the cell", "makes energy", "stores water", "moves the cell"], a: "controls the cell" }
        ]
      },
      {
        s: "social", concept: "Factors Affecting Climate", std: "Ohio 7.GEO.3",
        video: "https://www.youtube.com/results?search_query=factors+that+affect+climate+middle+school",
        sprint: "Pick two cities and compare their latitude, elevation, and distance from water in a mini scoreboard.",
        problems: [["Higher elevation usually means temperature is ___", "cooler"], ["Places near the equator get more direct ___", "sunlight"], ["Being near a large body of water makes climate more ___", "mild"], ["Name one factor that affects climate.", "latitude, elevation, water, or wind"]],
        qc: [
          { q: "Closer to the equator generally means...", choices: ["warmer", "colder", "no change", "windier only"], a: "warmer" },
          { q: "Elevation affects climate because higher up is...", choices: ["cooler", "warmer", "wetter always", "flatter"], a: "cooler" }
        ]
      }
    ]
  },
  {
    week: 3, title: "Ratios & Ancient Greece Week", subjects: [
      {
        s: "math", concept: "Ratios & Proportional Relationships", std: "Ohio 7.RP.2",
        video: "https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-ratio-proportion",
        sprint: "If 3 potions need 6 herbs, build a table for 1, 2, 5, and 10 potions and find herbs per potion.",
        problems: [["3 bowls use 6 eggs. Eggs per bowl?", "2"], ["A rate with denominator 1 is a ___", "unit rate"], ["If 4 pens cost $8, one pen costs ___", "2"], ["Is 2/3 = 4/6 a proportion?", "yes"]],
        qc: [
          { q: "60 miles in 2 hours is how many mph?", choices: ["30", "120", "62", "58"], a: "30" },
          { q: "A proportion is...", choices: ["two equal ratios", "one number", "an angle", "a graph type"], a: "two equal ratios" }
        ]
      },
      {
        s: "ela", concept: "Context Clues", std: "Ohio RI.7.4",
        video: "https://www.youtube.com/results?search_query=context+clues+middle+school",
        sprint: "Pick 5 tricky words from a page. Guess each meaning using clues, then check a dictionary for the win.",
        problems: [["Words around an unknown word that help you infer meaning are ___", "context clues"], ["The prefix 'un-' means ___", "not"], ["A synonym for 'huge' is ___", "enormous"], ["Use 'reluctant' in a sentence.", "sample answer"]],
        qc: [
          { q: "Context clues are found...", choices: ["around the word", "in the title only", "in page numbers", "on the cover"], a: "around the word" },
          { q: "'Bio' as in biology means...", choices: ["life", "water", "earth", "sound"], a: "life" }
        ]
      },
      {
        s: "science", concept: "Energy Flow in Ecosystems", std: "Ohio 7.LS.3",
        video: "https://www.youtube.com/results?search_query=energy+flow+food+chain+middle+school",
        sprint: "Draw a 4-step energy comic: Sun → plant → animal → decomposer, with arrows showing energy flow.",
        problems: [["Most energy in an ecosystem starts from the ___", "sun"], ["Organisms that make their own food are ___", "producers"], ["Organisms that break down dead matter are ___", "decomposers"], ["Arrows in a food chain show the direction of ___", "energy"]],
        qc: [
          { q: "Plants are...", choices: ["producers", "consumers", "decomposers", "predators"], a: "producers" },
          { q: "Energy flows from...", choices: ["sun to plants to animals", "animals to sun", "rocks to plants", "water to sun"], a: "sun to plants to animals" }
        ]
      },
      {
        s: "social", concept: "Ancient Greece", std: "Ohio 7.HIS.2",
        video: "https://www.youtube.com/results?search_query=ancient+greece+for+kids+overview",
        sprint: "Design a mini city-state map with Athens and Sparta and label one thing each was famous for.",
        problems: [["Government by the people, invented in Athens, is ___", "democracy"], ["A Greek city-state was called a ___", "polis"], ["Sparta was famous for its strong ___", "military"], ["Name one Greek philosopher.", "Socrates, Plato, or Aristotle"]],
        qc: [
          { q: "Democracy means rule by...", choices: ["the people", "one king", "priests", "soldiers"], a: "the people" },
          { q: "Athens was known for...", choices: ["philosophy and democracy", "only farming", "no writing", "ice climates"], a: "philosophy and democracy" }
        ]
      }
    ]
  },
  {
    week: 4, title: "Percents & Ancient Rome Week", subjects: [
      {
        s: "math", concept: "Percents & Applications", std: "Ohio 7.RP.3",
        video: "https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-fractions-decimals-percentages",
        sprint: "Pretend a game item is 25% off. Find the discount and final price for three prices you pick.",
        problems: [["50% of 80 = ?", "40"], ["10% of 250 = ?", "25"], ["A $40 item at 25% off costs ___", "30"], ["Write 0.75 as a percent.", "75%"]],
        qc: [
          { q: "20% of 50 is...", choices: ["10", "20", "30", "5"], a: "10" },
          { q: "A 15% tip on $20 is...", choices: ["$3", "$1.50", "$5", "$15"], a: "$3" }
        ]
      },
      {
        s: "ela", concept: "Argument Writing", std: "Ohio W.7.1",
        video: "https://www.youtube.com/results?search_query=argumentative+writing+claim+evidence+middle+school",
        sprint: "Write a claim about the best video game and back it with 2 reasons and 1 counterargument.",
        problems: [["The main point you argue is your ___", "claim"], ["Reasons and facts that back a claim are ___", "evidence"], ["The other side's view you address is the ___", "counterargument"], ["Write a claim about school lunches.", "sample answer"]],
        qc: [
          { q: "A strong argument needs...", choices: ["a claim and evidence", "only feelings", "no reasons", "just questions"], a: "a claim and evidence" },
          { q: "A counterargument is...", choices: ["the opposing view", "your name", "the title", "a summary"], a: "the opposing view" }
        ]
      },
      {
        s: "science", concept: "Water & Carbon Cycles", std: "Ohio 7.ESS.1",
        video: "https://www.youtube.com/results?search_query=water+cycle+carbon+cycle+middle+school",
        sprint: "Draw the water cycle loop with labels: evaporation, condensation, precipitation, collection.",
        problems: [["Water turning to vapor is ___", "evaporation"], ["Vapor forming clouds is ___", "condensation"], ["Rain and snow are forms of ___", "precipitation"], ["Carbon moves from air to plants during ___", "photosynthesis"]],
        qc: [
          { q: "Clouds form during...", choices: ["condensation", "evaporation", "precipitation", "runoff"], a: "condensation" },
          { q: "Plants take carbon dioxide from the...", choices: ["air", "rocks", "ocean floor", "sun"], a: "air" }
        ]
      },
      {
        s: "social", concept: "Ancient Rome", std: "Ohio 7.HIS.3",
        video: "https://www.youtube.com/results?search_query=ancient+rome+for+kids+overview",
        sprint: "Build a timeline card: Roman Republic → Empire, and note one Roman invention still used today.",
        problems: [["Rome's early government where citizens elected leaders was the ___", "republic"], ["Rome's first emperor was ___", "Augustus"], ["Roman roads and ___ moved water to cities.", "aqueducts"], ["A written set of Roman laws was the Twelve ___", "Tables"]],
        qc: [
          { q: "A republic means leaders are...", choices: ["elected", "born into power", "chosen by priests", "random"], a: "elected" },
          { q: "Aqueducts carried...", choices: ["water", "soldiers", "gold", "mail"], a: "water" }
        ]
      }
    ]
  },
  {
    week: 5, title: "Expressions & Medieval Europe Week", subjects: [
      {
        s: "math", concept: "Expressions & Combining Like Terms", std: "Ohio 7.EE.1",
        video: "https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-variables-expressions",
        sprint: "Turn 'buy x swords and 3 shields' into an expression, then simplify a few like a loot calculator.",
        problems: [["Simplify 3x + 5x", "8x"], ["Simplify 2a + 4 + 3a", "5a + 4"], ["What is the coefficient in 7y?", "7"], ["Simplify 6 + 2x - 4", "2x + 2"]],
        qc: [
          { q: "Combine 4m + 3m:", choices: ["7m", "12m", "m", "7"], a: "7m" },
          { q: "A term without a variable is a...", choices: ["constant", "coefficient", "variable", "factor"], a: "constant" }
        ]
      },
      {
        s: "ela", concept: "Theme & Summary", std: "Ohio RL.7.2",
        video: "https://www.youtube.com/results?search_query=theme+and+summary+middle+school",
        sprint: "Watch a short episode and write the theme in one sentence plus a 3-sentence summary.",
        problems: [["The lesson or big idea of a story is the ___", "theme"], ["A short retelling of key events is a ___", "summary"], ["Theme should be supported by story ___", "details"], ["State a theme about friendship.", "sample answer"]],
        qc: [
          { q: "A theme is...", choices: ["a life lesson", "the setting", "a character's name", "the page count"], a: "a life lesson" },
          { q: "A good summary includes...", choices: ["key events only", "every detail", "your opinions", "the ending only"], a: "key events only" }
        ]
      },
      {
        s: "science", concept: "Weather vs Climate", std: "Ohio 7.ESS.2",
        video: "https://www.youtube.com/results?search_query=weather+vs+climate+middle+school",
        sprint: "Track today's weather, then describe your region's climate. Sort 5 statements into weather or climate.",
        problems: [["Day-to-day conditions are ___", "weather"], ["Long-term average conditions are ___", "climate"], ["A blizzard today is an example of ___", "weather"], ["'Deserts are hot and dry' describes ___", "climate"]],
        qc: [
          { q: "Climate is measured over...", choices: ["many years", "one hour", "one day", "one week"], a: "many years" },
          { q: "A sudden thunderstorm is...", choices: ["weather", "climate", "a season", "a biome"], a: "weather" }
        ]
      },
      {
        s: "social", concept: "Medieval Europe & Feudalism", std: "Ohio 7.HIS.4",
        video: "https://www.youtube.com/results?search_query=feudalism+middle+ages+for+kids",
        sprint: "Draw the feudal pyramid: king, lords, knights, peasants, and label each level's job.",
        problems: [["The system of land for loyalty was ___", "feudalism"], ["A warrior who served a lord was a ___", "knight"], ["Peasants who farmed the land were ___", "serfs"], ["A fortified home of a lord was a ___", "castle"]],
        qc: [
          { q: "At the top of the feudal pyramid was the...", choices: ["king", "peasant", "knight", "merchant"], a: "king" },
          { q: "Serfs mainly worked as...", choices: ["farmers", "kings", "priests", "sailors"], a: "farmers" }
        ]
      }
    ]
  },
  {
    week: 6, title: "Equations & Silk Road Week", subjects: [
      {
        s: "math", concept: "Equations & Inequalities", std: "Ohio 7.EE.4",
        video: "https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-equations-inequalities",
        sprint: "Solve 5 puzzle locks (equations) to open the vault, then graph one inequality on a number line.",
        problems: [["Solve x + 7 = 15", "8"], ["Solve 3x = 24", "8"], ["Solve 2x + 3 = 11", "4"], ["Solve x - 5 > 2 (x > ?)", "7"]],
        qc: [
          { q: "Solve x/4 = 6", choices: ["24", "10", "2", "1.5"], a: "24" },
          { q: "x > 3 means x can be...", choices: ["4", "3", "2", "0"], a: "4" }
        ]
      },
      {
        s: "ela", concept: "Text Structure", std: "Ohio RI.7.5",
        video: "https://www.youtube.com/results?search_query=text+structure+middle+school",
        sprint: "Read an article and label its structure: cause/effect, compare/contrast, sequence, or problem/solution.",
        problems: [["Order of events is the ___ structure", "sequence"], ["Showing likenesses and differences is ___ structure", "compare and contrast"], ["Why something happens uses ___ structure", "cause and effect"], ["Naming an issue and a fix is ___ structure", "problem and solution"]],
        qc: [
          { q: "'First, next, then' signals...", choices: ["sequence", "compare", "cause", "problem"], a: "sequence" },
          { q: "'Because' and 'as a result' signal...", choices: ["cause and effect", "sequence", "description", "compare"], a: "cause and effect" }
        ]
      },
      {
        s: "science", concept: "Photosynthesis & Respiration", std: "Ohio 7.LS.4",
        video: "https://www.youtube.com/results?search_query=photosynthesis+cellular+respiration+middle+school",
        sprint: "Draw a two-arrow loop showing photosynthesis and respiration swapping O2 and CO2.",
        problems: [["Plants make food using sunlight by ___", "photosynthesis"], ["Photosynthesis makes glucose and ___", "oxygen"], ["Cells release energy from food during ___", "respiration"], ["Respiration uses oxygen and gives off ___", "carbon dioxide"]],
        qc: [
          { q: "Photosynthesis releases...", choices: ["oxygen", "carbon dioxide", "nitrogen", "helium"], a: "oxygen" },
          { q: "Respiration happens in the...", choices: ["mitochondria", "nucleus", "cell wall", "vacuole"], a: "mitochondria" }
        ]
      },
      {
        s: "social", concept: "Silk Road Trade", std: "Ohio 7.ECO.1",
        video: "https://www.youtube.com/results?search_query=silk+road+trade+for+kids",
        sprint: "Map a Silk Road route and list 3 goods and 1 idea that traveled between East and West.",
        problems: [["The trade network linking Asia and Europe was the ___ Road", "Silk"], ["One famous good traded was ___", "silk"], ["Buying and selling across regions is ___", "trade"], ["Ideas and religion that spread along it show cultural ___", "diffusion"]],
        qc: [
          { q: "The Silk Road connected...", choices: ["East and West", "only cities in Rome", "two villages", "North and South Poles"], a: "East and West" },
          { q: "Besides goods, the Silk Road spread...", choices: ["ideas and religion", "nothing", "only gold", "only water"], a: "ideas and religion" }
        ]
      }
    ]
  },
  {
    week: 7, title: "Circles & World Religions Week", subjects: [
      {
        s: "math", concept: "Circles: Area & Circumference", std: "Ohio 7.G.4",
        video: "https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-geometry",
        sprint: "Trace a round game token, measure its diameter, and calculate its area and circumference.",
        problems: [["Circumference formula uses pi times ___", "diameter"], ["Area of a circle is pi times radius ___", "squared"], ["Radius of a circle with diameter 10?", "5"], ["Circumference of a circle with radius 7 (use pi≈3.14)", "about 43.96"]],
        qc: [
          { q: "Area of a circle formula is...", choices: ["πr²", "2πr", "πd", "r²"], a: "πr²" },
          { q: "The distance across through the center is the...", choices: ["diameter", "radius", "arc", "chord"], a: "diameter" }
        ]
      },
      {
        s: "ela", concept: "Narrative Writing", std: "Ohio W.7.3",
        video: "https://www.youtube.com/results?search_query=narrative+writing+middle+school",
        sprint: "Write the opening of an adventure story with a hook, a setting, and one line of dialogue.",
        problems: [["The exciting opening that grabs readers is the ___", "hook"], ["Where and when a story happens is the ___", "setting"], ["Words spoken by characters are ___", "dialogue"], ["Write one sentence of dialogue with quotation marks.", "sample answer"]],
        qc: [
          { q: "Dialogue is shown with...", choices: ["quotation marks", "parentheses", "brackets", "hashtags"], a: "quotation marks" },
          { q: "A narrative's job is to...", choices: ["tell a story", "argue a point", "list facts", "define words"], a: "tell a story" }
        ]
      },
      {
        s: "science", concept: "Human Body Systems", std: "Ohio 7.LS.5",
        video: "https://www.youtube.com/results?search_query=human+body+systems+middle+school",
        sprint: "Match 4 body systems to their main job in a quick game: circulatory, respiratory, digestive, skeletal.",
        problems: [["The system that pumps blood is the ___", "circulatory"], ["The system that takes in oxygen is the ___", "respiratory"], ["The system that breaks down food is the ___", "digestive"], ["The system that supports the body is the ___", "skeletal"]],
        qc: [
          { q: "The heart belongs to the...", choices: ["circulatory system", "digestive system", "skeletal system", "nervous system"], a: "circulatory system" },
          { q: "Lungs belong to the...", choices: ["respiratory system", "digestive system", "muscular system", "skeletal system"], a: "respiratory system" }
        ]
      },
      {
        s: "social", concept: "World Religions & Regions", std: "Ohio 7.GEO.4",
        video: "https://www.youtube.com/results?search_query=world+religions+overview+for+kids",
        sprint: "Make a quick chart matching 4 world religions to the region where each began.",
        problems: [["A religion that began in India is ___", "Hinduism or Buddhism"], ["A religion centered in Mecca is ___", "Islam"], ["Judaism, Christianity, and Islam all began in ___ Asia", "Southwest"], ["A belief in one god is called ___", "monotheism"]],
        qc: [
          { q: "Monotheism means belief in...", choices: ["one god", "many gods", "no gods", "nature only"], a: "one god" },
          { q: "Buddhism began in...", choices: ["Asia", "Europe", "Antarctica", "North America"], a: "Asia" }
        ]
      }
    ]
  },
  {
    week: 8, title: "Statistics & Economics Week", subjects: [
      {
        s: "math", concept: "Statistics & Probability", std: "Ohio 7.SP.5",
        video: "https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-probability-statistics",
        sprint: "Roll a die 12 times, tally the results, and compare your experimental probability to the expected 1/6.",
        problems: [["Probability of rolling a 3 on a die?", "1/6"], ["Probability of heads on a coin?", "1/2"], ["The middle value of an ordered list is the ___", "median"], ["The most frequent value is the ___", "mode"]],
        qc: [
          { q: "Probability of an impossible event is...", choices: ["0", "1", "1/2", "10"], a: "0" },
          { q: "The mean is the...", choices: ["average", "middle", "most common", "range"], a: "average" }
        ]
      },
      {
        s: "ela", concept: "Grammar: Clauses", std: "Ohio L.7.1",
        video: "https://www.youtube.com/results?search_query=independent+and+dependent+clauses+middle+school",
        sprint: "Write 3 sentences, then underline the independent clause and circle any dependent clause.",
        problems: [["A clause that can stand alone is ___", "independent"], ["A clause that cannot stand alone is ___", "dependent"], ["'Because it rained' is a ___ clause", "dependent"], ["A group of words with a subject and verb is a ___", "clause"]],
        qc: [
          { q: "An independent clause is a complete...", choices: ["sentence", "word", "phrase", "list"], a: "sentence" },
          { q: "'When the bell rang' is...", choices: ["a dependent clause", "an independent clause", "a noun", "a verb"], a: "a dependent clause" }
        ]
      },
      {
        s: "science", concept: "Scientific Method", std: "Ohio 7.SI.1",
        video: "https://www.youtube.com/results?search_query=scientific+method+steps+middle+school",
        sprint: "Design a mini experiment: write a question, hypothesis, and one variable you would change.",
        problems: [["A testable prediction is a ___", "hypothesis"], ["The factor you change is the ___ variable", "independent"], ["The factor you measure is the ___ variable", "dependent"], ["Steps you repeat to test are a ___", "procedure"]],
        qc: [
          { q: "A hypothesis is a...", choices: ["testable prediction", "final answer", "random guess", "conclusion"], a: "testable prediction" },
          { q: "The variable you change is the...", choices: ["independent", "dependent", "control", "constant"], a: "independent" }
        ]
      },
      {
        s: "social", concept: "Economics: Specialization & Trade", std: "Ohio 7.ECO.2",
        video: "https://www.youtube.com/results?search_query=specialization+and+trade+economics+for+kids",
        sprint: "Design a mini country: pick one thing it makes best and trade with a partner for what it lacks.",
        problems: [["Focusing on what you produce best is ___", "specialization"], ["Exchanging goods across borders is ___", "trade"], ["Goods a country sells to others are ___", "exports"], ["Goods a country buys from others are ___", "imports"]],
        qc: [
          { q: "Specialization means focusing on...", choices: ["what you make best", "everything at once", "nothing", "only imports"], a: "what you make best" },
          { q: "Exports are goods that are...", choices: ["sold to other countries", "bought from others", "thrown away", "hidden"], a: "sold to other countries" }
        ]
      }
    ]
  }
];
