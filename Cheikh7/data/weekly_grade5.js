// Weekly Ohio-aligned curriculum for a 5th grader.
// Ohio Learning Standards use CCSS-style codes for math/ELA (e.g. 5.NBT.1, RL.5.2);
// plausible Ohio codes are used for science/social studies.
// Shape: { week, title, subjects:[math, ela, science, social] }
// Each subject: { s, concept, std, video, sprint, problems:[[q,a]...], qc:[{q,choices[4],a}...] }
const WEEKLY_G5 = [
  {
    week: 1, title: "Place Value & Ecosystems Week", subjects: [
      {
        s: "math", concept: "Place Value & Powers of 10", std: "Ohio 5.NBT.1",
        video: "https://www.khanacademy.org/math/cc-fifth-grade-math/imp-place-value-and-decimals",
        sprint: "Build a place-value chart and show how a digit grows 10x each spot it moves left, like leveling up.",
        problems: [["In 3.482, the 8 is in the ___ place", "hundredths"], ["10 x 10 x 10 = ?", "1000"], ["45 x 10 = ?", "450"], ["Write 10³ as a number.", "1000"]],
        qc: [
          { q: "A digit one place to the left is worth how much more?", choices: ["10 times", "2 times", "100 times", "the same"], a: "10 times" },
          { q: "10² equals...", choices: ["100", "20", "10", "1000"], a: "100" }
        ]
      },
      {
        s: "ela", concept: "Main Idea", std: "Ohio RI.5.2",
        video: "https://www.youtube.com/results?search_query=main+idea+5th+grade",
        sprint: "Read one page and write the main idea in a single sentence, then list 2 details that support it.",
        problems: [["The central point of a text is the ___", "main idea"], ["Facts that back the main idea are ___", "details"], ["Where is the main idea often found?", "topic sentence"], ["Write a main idea for a paragraph about dogs.", "sample answer"]],
        qc: [
          { q: "The main idea is...", choices: ["what the text is mostly about", "the first word", "a picture", "the page number"], a: "what the text is mostly about" },
          { q: "Supporting details are...", choices: ["facts and examples", "the title", "opinions only", "page numbers"], a: "facts and examples" }
        ]
      },
      {
        s: "science", concept: "Ecosystems & Food Webs", std: "Ohio 5.LS.1",
        video: "https://www.youtube.com/results?search_query=food+web+ecosystem+5th+grade",
        sprint: "Draw a food web with the Sun, a plant, an insect, a bird, and a decomposer, with energy arrows.",
        problems: [["Organisms that make their own food are ___", "producers"], ["Animals that eat other organisms are ___", "consumers"], ["Things that break down dead matter are ___", "decomposers"], ["Most energy starts from the ___", "sun"]],
        qc: [
          { q: "A plant in a food web is a...", choices: ["producer", "consumer", "decomposer", "predator"], a: "producer" },
          { q: "Food web arrows show...", choices: ["energy flow", "wind", "rain", "roads"], a: "energy flow" }
        ]
      },
      {
        s: "social", concept: "Maps of the Western Hemisphere", std: "Ohio 5.GEO.1",
        video: "https://www.youtube.com/results?search_query=western+hemisphere+map+for+kids",
        sprint: "Label a Western Hemisphere map with North America, South America, and the equator.",
        problems: [["The half of Earth west of the prime meridian is the ___ Hemisphere", "Western"], ["Two continents in the Western Hemisphere are ___", "North and South America"], ["The imaginary line at 0° latitude is the ___", "equator"], ["A map key is also called a ___", "legend"]],
        qc: [
          { q: "The Western Hemisphere includes...", choices: ["the Americas", "Asia", "Africa", "Australia"], a: "the Americas" },
          { q: "A map legend explains the map's...", choices: ["symbols", "title only", "author", "price"], a: "symbols" }
        ]
      }
    ]
  },
  {
    week: 2, title: "Decimals & Native American Cultures Week", subjects: [
      {
        s: "math", concept: "Decimal Operations", std: "Ohio 5.NBT.7",
        video: "https://www.khanacademy.org/math/cc-fifth-grade-math/5th-decimal-place-value",
        sprint: "Pretend to shop with a $10 budget. Add and subtract prices with decimals to find your change.",
        problems: [["2.5 + 1.3 = ?", "3.8"], ["4.0 - 1.75 = ?", "2.25"], ["0.6 + 0.45 = ?", "1.05"], ["Round 3.482 to the nearest tenth.", "3.5"]],
        qc: [
          { q: "1.2 + 0.8 = ?", choices: ["2.0", "1.1", "10", "0.4"], a: "2.0" },
          { q: "5.5 - 2.25 = ?", choices: ["3.25", "3.75", "2.75", "7.75"], a: "3.25" }
        ]
      },
      {
        s: "ela", concept: "Theme & Summary", std: "Ohio RL.5.2",
        video: "https://www.youtube.com/results?search_query=theme+and+summary+5th+grade",
        sprint: "Watch a short story clip, write the theme in one sentence, and summarize it in three sentences.",
        problems: [["The lesson of a story is the ___", "theme"], ["A short retelling of key events is a ___", "summary"], ["Theme is supported by story ___", "details"], ["Give a theme for a story about honesty.", "sample answer"]],
        qc: [
          { q: "A theme is...", choices: ["a life lesson", "the setting", "a character name", "the cover"], a: "a life lesson" },
          { q: "A summary should be...", choices: ["short and in your words", "every detail", "copied exactly", "opinions"], a: "short and in your words" }
        ]
      },
      {
        s: "science", concept: "Light", std: "Ohio 5.PS.1",
        video: "https://www.youtube.com/results?search_query=light+reflection+5th+grade+science",
        sprint: "Use a flashlight and a mirror to bounce light. Draw how the light travels and where it reflects.",
        problems: [["Light travels in straight ___", "lines"], ["Light bouncing off a surface is ___", "reflection"], ["We see objects when light ___ off them into our eyes", "reflects"], ["A shadow forms when light is ___", "blocked"]],
        qc: [
          { q: "Light bouncing off a mirror is called...", choices: ["reflection", "shadow", "gravity", "sound"], a: "reflection" },
          { q: "A shadow forms when an object...", choices: ["blocks light", "makes light", "eats light", "reflects fully"], a: "blocks light" }
        ]
      },
      {
        s: "social", concept: "Native American Cultures", std: "Ohio 5.HIS.1",
        video: "https://www.youtube.com/results?search_query=native+american+cultures+regions+for+kids",
        sprint: "Match 3 Native American groups to their region and one way they used their environment.",
        problems: [["Native peoples used local ___ to meet their needs", "resources"], ["Plains groups often hunted the ___", "buffalo"], ["Homes and food often depended on the ___", "environment"], ["People living somewhere first are called ___ peoples", "indigenous"]],
        qc: [
          { q: "Native American ways of life were shaped by their...", choices: ["environment", "phones", "cars", "money"], a: "environment" },
          { q: "Plains peoples relied heavily on the...", choices: ["buffalo", "whale", "camel", "penguin"], a: "buffalo" }
        ]
      }
    ]
  },
  {
    week: 3, title: "Adding Fractions & Explorers Week", subjects: [
      {
        s: "math", concept: "Add & Subtract Fractions", std: "Ohio 5.NF.1",
        video: "https://www.khanacademy.org/math/cc-fifth-grade-math/imp-fractions-2",
        sprint: "Double a recipe: add 1/3 cup + 1/3 cup and 3/4 cup + 1/4 cup, showing the model.",
        problems: [["1/2 + 1/4 = ?", "3/4"], ["2/3 + 1/6 = ?", "5/6"], ["3/4 - 1/4 = ?", "1/2"], ["To add unlike fractions, first find a common ___", "denominator"]],
        qc: [
          { q: "1/4 + 1/4 = ?", choices: ["1/2", "2/8", "1/8", "4/4"], a: "1/2" },
          { q: "To add 1/2 + 1/3 you need a common...", choices: ["denominator", "numerator", "whole", "decimal"], a: "denominator" }
        ]
      },
      {
        s: "ela", concept: "Context Clues", std: "Ohio RL.5.4",
        video: "https://www.youtube.com/results?search_query=context+clues+5th+grade",
        sprint: "Pick 5 hard words from a book. Guess each meaning from clues, then check a dictionary.",
        problems: [["Words around an unknown word that give hints are ___", "context clues"], ["The prefix 're-' means ___", "again"], ["A synonym for 'happy' is ___", "joyful"], ["Use 'curious' in a sentence.", "sample answer"]],
        qc: [
          { q: "Context clues help you find a word's...", choices: ["meaning", "spelling only", "page number", "font"], a: "meaning" },
          { q: "The prefix 'un-' means...", choices: ["not", "again", "before", "under"], a: "not" }
        ]
      },
      {
        s: "science", concept: "Sound", std: "Ohio 5.PS.2",
        video: "https://www.youtube.com/results?search_query=sound+vibrations+5th+grade+science",
        sprint: "Make a rubber-band 'guitar' and test how tighter bands change the pitch. Record what you hear.",
        problems: [["Sound is made by ___", "vibrations"], ["Sound needs a ___ to travel through", "medium"], ["How high or low a sound is called ___", "pitch"], ["How loud a sound is called its ___", "volume"]],
        qc: [
          { q: "Sound is caused by...", choices: ["vibrations", "light", "gravity", "heat only"], a: "vibrations" },
          { q: "Pitch describes how ___ a sound is.", choices: ["high or low", "loud or soft", "fast or slow", "hot or cold"], a: "high or low" }
        ]
      },
      {
        s: "social", concept: "European Explorers", std: "Ohio 5.HIS.2",
        video: "https://www.youtube.com/results?search_query=european+explorers+for+kids",
        sprint: "Trace one explorer's route on a map and note what they were looking for.",
        problems: [["Explorers crossed the ___ Ocean to reach the Americas", "Atlantic"], ["Columbus sailed for ___ in 1492", "Spain"], ["Explorers searched for new trade ___", "routes"], ["Meeting of two worlds' plants and animals is the Columbian ___", "Exchange"]],
        qc: [
          { q: "Many explorers were searching for a route to...", choices: ["Asia", "the Moon", "Antarctica", "space"], a: "Asia" },
          { q: "Columbus sailed in the year...", choices: ["1492", "1776", "2000", "1200"], a: "1492" }
        ]
      }
    ]
  },
  {
    week: 4, title: "Multiplying Fractions & Solar System Week", subjects: [
      {
        s: "math", concept: "Multiply Fractions", std: "Ohio 5.NF.4",
        video: "https://www.khanacademy.org/math/cc-fifth-grade-math/imp-multiply-fractions",
        sprint: "Draw an area model to show 1/2 x 1/3 as part of a part, like shading a game grid.",
        problems: [["1/2 x 1/3 = ?", "1/6"], ["2 x 3/5 = ?", "6/5"], ["3/4 x 4 = ?", "3"], ["Multiply fractions: multiply tops and multiply ___", "bottoms"]],
        qc: [
          { q: "1/3 x 1/2 = ?", choices: ["1/6", "2/5", "1/5", "3/2"], a: "1/6" },
          { q: "Multiplying by a fraction less than 1 makes a number...", choices: ["smaller", "bigger", "the same", "negative"], a: "smaller" }
        ]
      },
      {
        s: "ela", concept: "Text Structure", std: "Ohio RI.5.5",
        video: "https://www.youtube.com/results?search_query=text+structure+5th+grade",
        sprint: "Read an article and decide its structure: sequence, cause/effect, compare/contrast, or problem/solution.",
        problems: [["Steps in order is the ___ structure", "sequence"], ["Likenesses and differences is ___ structure", "compare and contrast"], ["Why something happens is ___ structure", "cause and effect"], ["An issue and its fix is ___ structure", "problem and solution"]],
        qc: [
          { q: "'First, next, last' signals...", choices: ["sequence", "compare", "cause", "problem"], a: "sequence" },
          { q: "'Alike and different' signals...", choices: ["compare and contrast", "sequence", "cause", "solution"], a: "compare and contrast" }
        ]
      },
      {
        s: "science", concept: "Solar System", std: "Ohio 5.ESS.1",
        video: "https://www.youtube.com/results?search_query=solar+system+planets+5th+grade",
        sprint: "Put the 8 planets in order from the Sun and label which are rocky and which are gas giants.",
        problems: [["The star at the center of our system is the ___", "Sun"], ["The closest planet to the Sun is ___", "Mercury"], ["The planet we live on is ___", "Earth"], ["Objects that orbit planets are ___", "moons"]],
        qc: [
          { q: "How many planets are in our solar system?", choices: ["8", "5", "10", "3"], a: "8" },
          { q: "The Sun is a...", choices: ["star", "planet", "moon", "comet"], a: "star" }
        ]
      },
      {
        s: "social", concept: "Colonial Settlement", std: "Ohio 5.HIS.3",
        video: "https://www.youtube.com/results?search_query=13+colonies+for+kids",
        sprint: "Sort 3 facts into New England, Middle, or Southern colonies on a quick chart.",
        problems: [["Early settlements set up by another country are ___", "colonies"], ["The first lasting English colony was ___", "Jamestown"], ["Colonists came for freedom and ___", "opportunity"], ["The three colonial regions were New England, Middle, and ___", "Southern"]],
        qc: [
          { q: "A colony is a settlement controlled by...", choices: ["another country", "no one", "the Moon", "a river"], a: "another country" },
          { q: "The first lasting English colony was...", choices: ["Jamestown", "Chicago", "Denver", "Miami"], a: "Jamestown" }
        ]
      }
    ]
  },
  {
    week: 5, title: "Dividing Fractions & US Government Week", subjects: [
      {
        s: "math", concept: "Divide Fractions with Whole Numbers", std: "Ohio 5.NF.7",
        video: "https://www.khanacademy.org/math/cc-fifth-grade-math/imp-divide-fractions",
        sprint: "Share 3 pizzas among 6 friends and cut 1/2 into pieces. Draw the pieces to show the division.",
        problems: [["1/2 ÷ 3 = ?", "1/6"], ["4 ÷ 1/2 = ?", "8"], ["1/4 ÷ 2 = ?", "1/8"], ["Dividing by 1/2 is the same as multiplying by ___", "2"]],
        qc: [
          { q: "6 ÷ 1/3 = ?", choices: ["18", "2", "9", "3"], a: "18" },
          { q: "1/3 ÷ 2 = ?", choices: ["1/6", "2/3", "6", "1/2"], a: "1/6" }
        ]
      },
      {
        s: "ela", concept: "Opinion Writing", std: "Ohio W.5.1",
        video: "https://www.youtube.com/results?search_query=opinion+writing+5th+grade",
        sprint: "Write your opinion on the best recess game and give 2 reasons with a strong closing sentence.",
        problems: [["The view you argue for is your ___", "opinion"], ["Facts that back your opinion are ___", "reasons"], ["The last sentence that wraps up is the ___", "conclusion"], ["Write an opinion sentence about homework.", "sample answer"]],
        qc: [
          { q: "An opinion piece needs...", choices: ["reasons and examples", "no support", "only questions", "a title only"], a: "reasons and examples" },
          { q: "'I believe' signals a...", choices: ["opinion", "fact", "map", "graph"], a: "opinion" }
        ]
      },
      {
        s: "science", concept: "Force & Motion", std: "Ohio 5.PS.3",
        video: "https://www.youtube.com/results?search_query=force+and+motion+5th+grade",
        sprint: "Roll a toy car and test how a bigger push changes its speed and distance. Record your results.",
        problems: [["A push or pull is a ___", "force"], ["A force that slows sliding objects is ___", "friction"], ["The force pulling objects down is ___", "gravity"], ["A bigger force usually makes a bigger ___", "change in motion"]],
        qc: [
          { q: "A push or a pull is a...", choices: ["force", "color", "sound", "shape"], a: "force" },
          { q: "Gravity pulls objects...", choices: ["down", "up", "sideways only", "randomly"], a: "down" }
        ]
      },
      {
        s: "social", concept: "US Government Basics", std: "Ohio 5.GOV.1",
        video: "https://www.youtube.com/results?search_query=three+branches+of+government+for+kids",
        sprint: "Draw the 3 branches of government and write one job for each branch.",
        problems: [["The branch that makes laws is the ___", "legislative"], ["The branch that carries out laws is the ___", "executive"], ["The branch that decides if laws are fair is the ___", "judicial"], ["The plan for the US government is the ___", "Constitution"]],
        qc: [
          { q: "The President leads which branch?", choices: ["executive", "legislative", "judicial", "state"], a: "executive" },
          { q: "Congress belongs to the ___ branch.", choices: ["legislative", "executive", "judicial", "royal"], a: "legislative" }
        ]
      }
    ]
  },
  {
    week: 6, title: "Volume & Sun and Stars Week", subjects: [
      {
        s: "math", concept: "Volume", std: "Ohio 5.MD.5",
        video: "https://www.khanacademy.org/math/cc-fifth-grade-math/imp-volume",
        sprint: "Build a box out of unit cubes (or graph paper) that is 4 by 3 by 2 and count the cubes inside.",
        problems: [["Volume of a box 4 by 3 by 2?", "24"], ["Volume = length x width x ___", "height"], ["Volume is measured in ___ units", "cubic"], ["Volume of a cube with side 3?", "27"]],
        qc: [
          { q: "Volume of a 5 by 2 by 4 box?", choices: ["40", "11", "20", "80"], a: "40" },
          { q: "Volume is measured in...", choices: ["cubic units", "square units", "inches only", "degrees"], a: "cubic units" }
        ]
      },
      {
        s: "ela", concept: "Figurative Language", std: "Ohio RL.5.4",
        video: "https://www.youtube.com/results?search_query=figurative+language+5th+grade",
        sprint: "Find or invent one simile, one metaphor, and one example of personification about the weather.",
        problems: [["'Quiet as a mouse' is a ___", "simile"], ["'The stars are diamonds' is a ___", "metaphor"], ["'The sun smiled' is ___", "personification"], ["Write your own simile using 'like'.", "sample answer"]],
        qc: [
          { q: "A metaphor says one thing IS another without...", choices: ["like or as", "a period", "a noun", "an adjective"], a: "like or as" },
          { q: "Giving human traits to objects is...", choices: ["personification", "simile", "rhyme", "alliteration"], a: "personification" }
        ]
      },
      {
        s: "science", concept: "Sun & Stars", std: "Ohio 5.ESS.2",
        video: "https://www.youtube.com/results?search_query=why+stars+look+small+5th+grade+science",
        sprint: "Explain why the Sun looks bigger than other stars by comparing a nearby lamp to a faraway one.",
        problems: [["The Sun is the closest ___ to Earth", "star"], ["Stars look small because they are very ___", "far away"], ["The Sun gives Earth light and ___", "heat"], ["A group of stars forming a pattern is a ___", "constellation"]],
        qc: [
          { q: "Why does the Sun look bigger than other stars?", choices: ["it is closer", "it is hotter only", "it is a planet", "it is a moon"], a: "it is closer" },
          { q: "The Sun is a...", choices: ["star", "planet", "moon", "comet"], a: "star" }
        ]
      },
      {
        s: "social", concept: "Latitude, Longitude & Regions", std: "Ohio 5.GEO.2",
        video: "https://education.nationalgeographic.org/resource/mapmaker-latitude-longitude/",
        sprint: "Use a map grid to find 3 cities using latitude and longitude, like reading game coordinates.",
        problems: [["Lines that run east-west measuring north/south are ___", "latitude"], ["Lines that run north-south measuring east/west are ___", "longitude"], ["0° latitude is the ___", "equator"], ["An area with common features is a ___", "region"]],
        qc: [
          { q: "Latitude lines run...", choices: ["east-west", "north-south", "diagonally", "in circles only"], a: "east-west" },
          { q: "A region is an area with common...", choices: ["features", "names only", "prices", "letters"], a: "features" }
        ]
      }
    ]
  },
  {
    week: 7, title: "Coordinate Plane & Trade Week", subjects: [
      {
        s: "math", concept: "Coordinate Plane", std: "Ohio 5.G.1",
        video: "https://www.khanacademy.org/math/cc-fifth-grade-math/5th-coordinate-plane",
        sprint: "Plot 4 points on a grid to draw a shape, writing each as an (x, y) pair like a treasure map.",
        problems: [["The horizontal line on a graph is the ___-axis", "x"], ["The vertical line on a graph is the ___-axis", "y"], ["Plot the point (3, 2): go right 3, then up ___", "2"], ["The point (0, 0) is called the ___", "origin"]],
        qc: [
          { q: "In (4, 7), the 4 tells you to move...", choices: ["right 4", "up 4", "left 4", "down 4"], a: "right 4" },
          { q: "The origin is at...", choices: ["(0, 0)", "(1, 1)", "(5, 5)", "(0, 1)"], a: "(0, 0)" }
        ]
      },
      {
        s: "ela", concept: "Comparing Texts", std: "Ohio RI.5.9",
        video: "https://www.youtube.com/results?search_query=comparing+two+texts+5th+grade",
        sprint: "Read two short texts on the same topic and list 1 thing they agree on and 1 way they differ.",
        problems: [["Reading two texts on one topic lets you ___ them", "compare"], ["Showing how texts differ is finding the ___", "difference"], ["Facts both texts share are ___", "similarities"], ["Write one way two stories could be different.", "sample answer"]],
        qc: [
          { q: "Comparing texts means looking at what is...", choices: ["alike and different", "the same page", "the title only", "the price"], a: "alike and different" },
          { q: "Using two sources gives you a fuller...", choices: ["understanding", "grade", "length", "font"], a: "understanding" }
        ]
      },
      {
        s: "science", concept: "Producers, Consumers, Decomposers", std: "Ohio 5.LS.2",
        video: "https://www.youtube.com/results?search_query=producers+consumers+decomposers+5th+grade",
        sprint: "Sort 6 organisms into producer, consumer, or decomposer piles and explain each choice.",
        problems: [["Organisms that make their own food are ___", "producers"], ["Organisms that eat others are ___", "consumers"], ["Organisms that break down dead matter are ___", "decomposers"], ["A mushroom is a ___", "decomposer"]],
        qc: [
          { q: "A rabbit that eats grass is a...", choices: ["consumer", "producer", "decomposer", "star"], a: "consumer" },
          { q: "Producers get their energy from the...", choices: ["sun", "moon", "soil only", "wind"], a: "sun" }
        ]
      },
      {
        s: "social", concept: "Goods, Services & Trade", std: "Ohio 5.ECO.1",
        video: "https://www.youtube.com/results?search_query=goods+services+trade+for+kids",
        sprint: "List 5 things around you and label each as a good or a service, then name one trade you make.",
        problems: [["Things you can touch and buy are ___", "goods"], ["Work someone does for you is a ___", "service"], ["Exchanging goods or money is ___", "trade"], ["A haircut is a ___", "service"]],
        qc: [
          { q: "A toy is a...", choices: ["good", "service", "map", "graph"], a: "good" },
          { q: "A doctor's checkup is a...", choices: ["service", "good", "region", "resource"], a: "service" }
        ]
      }
    ]
  },
  {
    week: 8, title: "Order of Operations & Review Week", subjects: [
      {
        s: "math", concept: "Order of Operations", std: "Ohio 5.OA.1",
        video: "https://www.khanacademy.org/math/cc-fifth-grade-math/5th-order-of-operations",
        sprint: "Solve 4 mixed problems using the PEMDAS combo order, showing one step at a time.",
        problems: [["Solve 2 + 3 x 4", "14"], ["Solve (2 + 3) x 4", "20"], ["Solve 12 ÷ (2 + 1)", "4"], ["In PEMDAS, what comes first?", "parentheses"]],
        qc: [
          { q: "Solve 5 + 2 x 3:", choices: ["11", "21", "17", "13"], a: "11" },
          { q: "PEMDAS says do ___ before adding.", choices: ["multiplication", "subtraction only", "nothing", "reading"], a: "multiplication" }
        ]
      },
      {
        s: "ela", concept: "Narrative Writing", std: "Ohio W.5.3",
        video: "https://www.youtube.com/results?search_query=narrative+writing+5th+grade",
        sprint: "Write the opening of your own adventure story with a hook, a setting, and a character.",
        problems: [["The exciting opening is the ___", "hook"], ["Where and when a story happens is the ___", "setting"], ["Words characters speak are ___", "dialogue"], ["Write one sentence of dialogue with quotation marks.", "sample answer"]],
        qc: [
          { q: "Dialogue uses...", choices: ["quotation marks", "brackets", "parentheses", "hashtags"], a: "quotation marks" },
          { q: "A narrative's main job is to...", choices: ["tell a story", "argue", "list facts", "define terms"], a: "tell a story" }
        ]
      },
      {
        s: "science", concept: "Designing Investigations", std: "Ohio 5.SI.1",
        video: "https://www.youtube.com/results?search_query=designing+a+science+investigation+5th+grade",
        sprint: "Plan a fair test: write a question, one thing you'll change, and one thing you'll keep the same.",
        problems: [["A test that changes only one thing at a time is a ___ test", "fair"], ["A testable idea is a ___", "hypothesis"], ["The thing you change is the ___ variable", "independent"], ["Things you keep the same are ___", "constants"]],
        qc: [
          { q: "A fair test changes...", choices: ["one variable at a time", "everything", "nothing", "the tester"], a: "one variable at a time" },
          { q: "A hypothesis is a...", choices: ["testable prediction", "final answer", "guess with no reason", "conclusion"], a: "testable prediction" }
        ]
      },
      {
        s: "social", concept: "Western Hemisphere Review", std: "Ohio 5.GEO.3",
        video: "https://www.youtube.com/results?search_query=western+hemisphere+review+for+kids",
        sprint: "Label a Western Hemisphere map with 2 continents, 2 oceans, and the equator from memory.",
        problems: [["The two continents in the Western Hemisphere are ___", "North and South America"], ["The ocean to the east of the Americas is the ___", "Atlantic"], ["The ocean to the west of the Americas is the ___", "Pacific"], ["0° latitude is the ___", "equator"]],
        qc: [
          { q: "Which ocean is west of the Americas?", choices: ["Pacific", "Atlantic", "Indian", "Arctic"], a: "Pacific" },
          { q: "The Western Hemisphere is mostly made up of the...", choices: ["Americas", "Asia", "Europe", "Africa"], a: "Americas" }
        ]
      }
    ]
  }
];
