// Hand-authored Grade 7 Social Studies lessons for weeks 9–36.
const ANNUAL_G7_SOCIAL = [
  {
    s: 'social', concept: 'Historical Perspective', std: 'Ohio Social Studies 7.1',
    video: 'https://education.nationalgeographic.org/resource/historical-map/',
    sprint: 'Read a primary source, identify its author and audience, then explain how those details shape its account.',
    problems: [
      ['A Roman law code and a soldier’s letter describe a border dispute. What should a historian check first to compare their viewpoints?', 'author, date, audience, and purpose'],
      ['A merchant praises a ruler in a letter written for the palace. What interest may shape the description?', 'the merchant may want royal favor'],
      ['A participant’s account written during an event is called what kind of source?', 'a primary source'],
      ['Two accounts disagree about a battle. Name one way to test their reliability.', 'compare their evidence, purpose, and audience']
    ],
    qc: [
      { q: 'A diary written during a migration is best classified as what?', choices: ['primary source', 'secondary source', 'fictional setting', 'geographic model'], a: 'primary source' },
      { q: 'Why might two eyewitnesses describe one event differently?', choices: ['their perspectives and purposes differ', 'the event had no participants', 'all evidence is identical', 'maps determine every memory'], a: 'their perspectives and purposes differ' }
    ]
  },
  {
    s: 'social', concept: 'Greek and Roman Legacies', std: 'Ohio Social Studies 7.2',
    video: 'https://education.nationalgeographic.org/resource/ancient-greece/',
    sprint: 'Make a two-column chart linking one Greek and one Roman institution to a modern example.',
    problems: [
      ['Who could vote in the Athenian assembly?', 'eligible citizens'],
      ['Name one Roman achievement that helped connect the empire.', 'roads'],
      ['What principle does a law code make more predictable?', 'rules for resolving disputes'],
      ['A modern elected legislature resembles which Roman political idea?', 'a republic']
    ],
    qc: [
      { q: 'Athens practiced which form of government when citizens voted directly?', choices: ['direct democracy', 'hereditary monarchy', 'theocracy', 'feudalism'], a: 'direct democracy' },
      { q: 'Which Roman contribution continues to influence many legal systems?', choices: ['written law', 'oracle readings', 'pharaoh worship', 'nomadic clans'], a: 'written law' }
    ]
  },
  {
    s: 'social', concept: 'Rome’s Collapse and Feudalism', std: 'Ohio Social Studies 7.3',
    video: 'https://education.nationalgeographic.org/resource/ancient-rome/',
    sprint: 'Sequence three pressures on Rome and diagram the land-for-service relationship in medieval Europe.',
    problems: [
      ['Name two pressures that weakened the western Roman Empire.', 'invasions and political instability'],
      ['In feudalism, what did a lord commonly grant in return for service?', 'land'],
      ['What protection did a vassal receive from a lord?', 'military protection'],
      ['Why did local lords become important after central Roman authority weakened?', 'they provided local protection and order']
    ],
    qc: [
      { q: 'Which condition contributed to the western empire’s decline?', choices: ['political instability', 'steam factories', 'Atlantic colonies', 'printing newspapers'], a: 'political instability' },
      { q: 'The central exchange in feudalism connected land with what?', choices: ['service and protection', 'ocean navigation', 'coin minting only', 'religious conversion only'], a: 'service and protection' }
    ]
  },
  {
    s: 'social', concept: 'Mongols and Asian States', std: 'Ohio Social Studies 7.4',
    video: 'https://education.nationalgeographic.org/resource/mongol-empire/',
    sprint: 'Trace a Mongol route across Asia and explain one benefit and one cost of imperial expansion.',
    problems: [
      ['Which regions were connected by Mongol-controlled routes?', 'China, Central Asia, and Europe'],
      ['Who founded the Yuan dynasty in China?', 'Kublai Khan'],
      ['How could protected routes affect merchants?', 'they made long-distance travel safer'],
      ['What political change occurred when Mongols ruled China?', 'a foreign dynasty governed China']
    ],
    qc: [
      { q: 'The Yuan dynasty was established in China by which leader?', choices: ['Kublai Khan', 'Martin Luther', 'Mansa Musa', 'Julius Caesar'], a: 'Kublai Khan' },
      { q: 'Protected routes across the Mongol Empire most directly encouraged what?', choices: ['long-distance trade', 'isolated villages', 'lower communication', 'the end of travel'], a: 'long-distance trade' }
    ]
  },
  {
    s: 'social', concept: 'Islamic Achievements and Renaissance Influence', std: 'Ohio Social Studies 7.5',
    video: 'https://education.nationalgeographic.org/resource/islamic-golden-age/',
    sprint: 'Connect a scholar’s work in Baghdad to a later European use of mathematics or numerals.',
    problems: [
      ['What did Muslim scholars in Baghdad do with Greek mathematics?', 'translated and expanded it'],
      ['Which number system later influenced European learning?', 'Arabic numerals'],
      ['What mathematical field did scholars systematize through the study of equations?', 'algebra'],
      ['Why did translation preserve knowledge for later learners?', 'texts became available to scholars in other languages']
    ],
    qc: [
      { q: 'Which center became known for translating scholarship during the Islamic Golden Age?', choices: ['Baghdad', 'Sparta', 'Tenochtitlan', 'London'], a: 'Baghdad' },
      { q: 'Which mathematical idea reached Europe through Arabic scholarship?', choices: ['algebra', 'feudal tribute', 'hieroglyph writing', 'triangular trade'], a: 'algebra' }
    ]
  },
  {
    s: 'social', concept: 'Decline of Feudalism and Nation-States', std: 'Ohio Social Studies 7.6',
    video: 'https://education.nationalgeographic.org/resource/nation-state/',
    sprint: 'Create a cause-and-effect chain from town growth to stronger central monarchies.',
    problems: [
      ['How did growing towns challenge manorial obligations?', 'trade gave people alternatives to manor service'],
      ['What kind of government developed as monarchs centralized authority?', 'a nation-state'],
      ['Name one economic activity that expanded in growing towns.', 'trade'],
      ['Why could a strong monarch reduce the power of local lords?', 'central authority controlled more territory and resources']
    ],
    qc: [
      { q: 'Which development weakened the manorial system?', choices: ['growing towns and trade', 'fewer markets', 'less travel', 'smaller populations everywhere'], a: 'growing towns and trade' },
      { q: 'A nation-state has centralized authority over what?', choices: ['a defined territory', 'only one marketplace', 'an ungoverned ocean', 'a single household'], a: 'a defined territory' }
    ]
  },
  {
    s: 'social', concept: 'The Protestant Reformation', std: 'Ohio Social Studies 7.7',
    video: 'https://education.nationalgeographic.org/resource/protestant-reformation/',
    sprint: 'Build a timeline with Luther’s criticism, printing, and the spread of reform ideas.',
    problems: [
      ['What church practice did Martin Luther criticize in 1517?', 'the sale of indulgences'],
      ['Which technology helped reform arguments reach many readers?', 'the printing press'],
      ['What broad religious movement followed Luther’s criticism?', 'the Protestant Reformation'],
      ['Why did printed pamphlets speed religious debate?', 'copies could reach a wider audience']
    ],
    qc: [
      { q: 'Martin Luther’s 1517 criticism helped begin which movement?', choices: ['Protestant Reformation', 'Scientific Revolution', 'Mongol expansion', 'Crusader kingdom'], a: 'Protestant Reformation' },
      { q: 'What made reform writings easier to distribute?', choices: ['printing press', 'stone roads', 'camel saddles', 'manorial courts'], a: 'printing press' }
    ]
  },
  {
    s: 'social', concept: 'African and Asian Trade-Route Empires', std: 'Ohio Social Studies 7.8',
    video: 'https://education.nationalgeographic.org/resource/indian-ocean/',
    sprint: 'Annotate a trade map showing West African and Indian Ocean connections, then label traded goods.',
    problems: [
      ['What trade helped Mali become wealthy?', 'West African gold-salt trade'],
      ['Which regions were connected by Indian Ocean commerce?', 'East Africa, Arabia, India, and Southeast Asia'],
      ['Why did merchants exchange goods across regions?', 'different regions had different resources'],
      ['What geographic feature made sea travel central to Indian Ocean trade?', 'the Indian Ocean']
    ],
    qc: [
      { q: 'Mali gained wealth especially by controlling which exchange?', choices: ['gold and salt', 'silk and porcelain only', 'fur and timber', 'tea and sugar only'], a: 'gold and salt' },
      { q: 'Indian Ocean routes connected East Africa with which area?', choices: ['Southeast Asia', 'the Arctic only', 'the Andes only', 'northern Scandinavia'], a: 'Southeast Asia' }
    ]
  },
  {
    s: 'social', concept: 'Trans-Saharan Slave Trade', std: 'Ohio Social Studies 7.9',
    video: 'https://education.nationalgeographic.org/resource/trans-saharan-slave-trade/',
    sprint: 'Map a caravan route across the Sahara and distinguish voluntary trade from forced movement.',
    problems: [
      ['Which animals made long desert caravans practical?', 'camels'],
      ['What goods commonly traveled across the Sahara?', 'gold and salt'],
      ['What does enslavement mean in this historical context?', 'forcibly removing people from freedom'],
      ['How did the forced trade affect communities?', 'it harmed and displaced people']
    ],
    qc: [
      { q: 'What transport animal was adapted to Sahara caravans?', choices: ['camel', 'elephant', 'reindeer', 'llama'], a: 'camel' },
      { q: 'The trans-Saharan slave trade involved what action?', choices: ['forced movement of people', 'equal exchange of citizens', 'voluntary tourism', 'sharing maps'], a: 'forced movement of people' }
    ]
  },
  {
    s: 'social', concept: 'European Exploration and Colonization', std: 'Ohio Social Studies 7.10',
    video: 'https://education.nationalgeographic.org/resource/age-exploration/',
    sprint: 'Plot an Atlantic voyage and evaluate how navigation enabled both contact and conquest.',
    problems: [
      ['Which 1492 voyage crossed the Atlantic under European sponsorship?', 'Columbus’s voyage'],
      ['Name one improvement that supported long voyages.', 'improved ships'],
      ['What happened to political control in many Indigenous regions?', 'European powers took control'],
      ['How did colonization affect Indigenous peoples?', 'it exploited communities and their resources']
    ],
    qc: [
      { q: 'Which development made Atlantic voyages more feasible?', choices: ['improved navigation', 'closed borders', 'fewer maps', 'shorter rivers'], a: 'improved navigation' },
      { q: 'A major consequence of European colonization was the transfer of what?', choices: ['political control', 'ocean tides', 'seasonal sunlight', 'mountain height'], a: 'political control' }
    ]
  },
  {
    s: 'social', concept: 'The Columbian Exchange', std: 'Ohio Social Studies 7.11',
    video: 'https://education.nationalgeographic.org/resource/columbian-exchange/',
    sprint: 'Draw two Atlantic arrows for crops and two for disease, then explain one benefit and one harm.',
    problems: [
      ['Which crop moved from the Americas to Europe?', 'maize'],
      ['Which crop moved from Europe to the Americas?', 'wheat'],
      ['What disease caused catastrophic losses among Indigenous Americans?', 'smallpox'],
      ['Name two systems changed by Atlantic exchange.', 'diets and populations']
    ],
    qc: [
      { q: 'Which food traveled from the Americas across the Atlantic?', choices: ['maize', 'wheat', 'rye', 'barley'], a: 'maize' },
      { q: 'Which introduced disease caused catastrophic Indigenous population loss after European contact?', choices: ['smallpox', 'seasonal allergies', 'motion sickness', 'scurvy'], a: 'smallpox' }
    ]
  },
  {
    s: 'social', concept: 'Maps and Settlement Patterns', std: 'Ohio Social Studies 7.12',
    video: 'https://education.nationalgeographic.org/resource/map/',
    sprint: 'Compare a river map with a rail map and predict where a new settlement would cluster.',
    problems: [
      ['A map displays rivers and rail lines. What pattern can it help explain?', 'where settlements developed'],
      ['Why do many settlements cluster near navigable water?', 'water supports travel and trade'],
      ['What map feature shows distance between places?', 'scale'],
      ['A town lies beside a navigable river and a rail line. What advantage does this location provide for merchants?', 'access to transportation and trade']
    ],
    qc: [
      { q: 'Which location most often supports a transportation-centered settlement?', choices: ['a navigable river crossing', 'an inaccessible cliff top', 'a trackless desert center', 'a frozen lake year-round'], a: 'a navigable river crossing' },
      { q: 'Which map element helps compare actual distance?', choices: ['scale', 'legend color only', 'title font', 'border decoration'], a: 'scale' }
    ]
  },
  {
    s: 'social', concept: 'Geography and Human Movement', std: 'Ohio Social Studies 7.13',
    video: 'https://education.nationalgeographic.org/resource/migration/',
    sprint: 'Label physical barriers, opportunities, and hazards on a migration map.',
    problems: [
      ['How can a mountain range affect migration?', 'it can slow movement'],
      ['Why do people move toward fertile land?', 'it can support farming'],
      ['Give one factor that pushes people away from a place.', 'conflict'],
      ['What kind of geographic feature often provides a movement route?', 'a river valley']
    ],
    qc: [
      { q: 'Which condition is a pull factor for migration?', choices: ['available jobs', 'armed conflict', 'a severe hazard', 'forced removal'], a: 'available jobs' },
      { q: 'Which landform can obstruct a migration route?', choices: ['mountain range', 'river valley', 'coastal plain', 'open grassland'], a: 'mountain range' }
    ]
  },
  {
    s: 'social', concept: 'Trade Routes and Cultural Diffusion', std: 'Ohio Social Studies 7.14',
    video: 'https://education.nationalgeographic.org/resource/silk-road/',
    sprint: 'Trace a Silk Road segment and mark where goods, beliefs, and technology changed hands.',
    problems: [
      ['What goods traveled along the Silk Road?', 'silk and spices'],
      ['Name one religion spread by contact along trade routes.', 'Buddhism'],
      ['What is cultural diffusion?', 'the spread of ideas or practices between regions'],
      ['Why did traders carry technologies as well as goods?', 'contact allowed people to share useful knowledge']
    ],
    qc: [
      { q: 'Which route is famous for carrying silk between regions?', choices: ['Silk Road', 'Appian Way only', 'Panama Canal', 'Oregon Trail'], a: 'Silk Road' },
      { q: 'The spread of a religion through merchant contact is an example of what?', choices: ['cultural diffusion', 'erosion', 'isolation', 'depopulation'], a: 'cultural diffusion' }
    ]
  },
  {
    s: 'social', concept: 'Transport, Communication, and Diffusion', std: 'Ohio Social Studies 7.15',
    video: 'https://education.nationalgeographic.org/resource/cultural-diffusion/',
    sprint: 'Compare a road, ship, and printing network; explain which kind of diffusion each accelerates.',
    problems: [
      ['How did the compass help long-distance exchange?', 'it improved navigation'],
      ['What network spread written information quickly?', 'printing'],
      ['A ship carries a crop to another region. What process follows?', 'diffusion'],
      ['Why do roads affect the movement of ideas?', 'they connect communities and travelers']
    ],
    qc: [
      { q: 'Which invention directly improved navigation at sea?', choices: ['compass', 'printing press', 'water wheel', 'plow'], a: 'compass' },
      { q: 'A technology reaching a distant community through contact demonstrates what?', choices: ['diffusion', 'isolation', 'erosion', 'urban decline'], a: 'diffusion' }
    ]
  },
  {
    s: 'social', concept: 'Perspectives and Civic Engagement', std: 'Ohio Social Studies 7.16',
    video: 'https://education.nationalgeographic.org/resource/civic-engagement/',
    sprint: 'Hold a mini town meeting: state a claim, cite evidence, listen to another view, and propose an action.',
    problems: [
      ['What can residents do at a town meeting?', 'use evidence and public comment'],
      ['Why might two residents favor different plans?', 'their experiences and interests differ'],
      ['A council considers a new park. What evidence could residents present?', 'local data about recreation needs'],
      ['What is one respectful way to challenge a speaker?', 'ask for supporting evidence']
    ],
    qc: [
      { q: 'Which action is civic engagement?', choices: ['speaking at a public meeting', 'ignoring every issue', 'destroying public records', 'hiding a vote'], a: 'speaking at a public meeting' },
      { q: 'A respectful disagreement should focus on what?', choices: ['evidence and reasons', 'personal insults', 'rumors', 'interruptions'], a: 'evidence and reasons' }
    ]
  },
  {
    s: 'social', concept: 'Greek Democracy and Roman Republic', std: 'Ohio Social Studies 7.17',
    video: 'https://education.nationalgeographic.org/resource/democracy/',
    sprint: 'Create a comparison chart for direct voting in Athens and representation in Rome.',
    problems: [
      ['How did eligible Athenians participate in government?', 'they voted in the assembly'],
      ['How did citizens participate in the Roman republic?', 'they elected representatives'],
      ['What is the key difference between direct and representative democracy?', 'citizens decide directly versus through elected officials'],
      ['Name one modern institution influenced by these classical systems.', 'a representative legislature']
    ],
    qc: [
      { q: 'Athens is remembered for which type of participation?', choices: ['direct voting', 'hereditary rule', 'military dictatorship', 'feudal service'], a: 'direct voting' },
      { q: 'The Roman republic relied especially on what?', choices: ['elected representatives', 'oracle priests', 'absolute kings', 'merchant caravans'], a: 'elected representatives' }
    ]
  },
  {
    s: 'social', concept: 'Nation-States', std: 'Ohio Social Studies 7.18',
    video: 'https://education.nationalgeographic.org/resource/nation-state/',
    sprint: 'Map a territory and list the shared identity and authority that make it a nation-state.',
    problems: [
      ['What two features combine in a nation-state?', 'national identity and territorial authority'],
      ['Which countries developed centralized governments in this period?', 'France and England'],
      ['How did rulers expand control over a territory?', 'they reduced local feudal independence'],
      ['Why does a defined territory matter to a state?', 'it sets the area governed by its authority']
    ],
    qc: [
      { q: 'A nation-state joins a national identity with what?', choices: ['authority over territory', 'a nomadic camp', 'a single trade good', 'an unruled ocean'], a: 'authority over territory' },
      { q: 'Which development helped nation-states grow?', choices: ['centralized government', 'weaker communication', 'more independent lords', 'fewer defined borders'], a: 'centralized government' }
    ]
  },
  {
    s: 'social', concept: 'Cost-Benefit Decisions', std: 'Ohio Social Studies 7.19',
    video: 'https://education.nationalgeographic.org/resource/decision-making/',
    sprint: 'Make a gain-and-sacrifice table for a ruler deciding whether to fund a campaign.',
    problems: [
      ['What does a cost-benefit analysis compare?', 'expected gains and sacrifices'],
      ['A ruler expects 100 coins in revenue but spends 70 coins on troops. What is the net monetary gain?', '30 coins'],
      ['Name one nonmonetary cost of a military campaign.', 'loss of soldiers'],
      ['Why should a decision-maker consider opportunity cost?', 'choosing one action gives up another option']
    ],
    qc: [
      { q: 'A benefit is best described as what?', choices: ['an expected gain', 'a required sacrifice', 'an unrelated fact', 'a map symbol'], a: 'an expected gain' },
      { q: 'If a campaign costs more than its expected return, which result is likely?', choices: ['a net loss', 'a guaranteed surplus', 'no trade-off', 'automatic peace'], a: 'a net loss' }
    ]
  },
  {
    s: 'social', concept: 'Resource Distribution and Trade', std: 'Ohio Social Studies 7.20',
    video: 'https://education.nationalgeographic.org/resource/trade/',
    sprint: 'Build a two-region trade model showing specialization, exchange, and interdependence.',
    problems: [
      ['Why does unequal resource distribution encourage trade?', 'regions need goods they lack'],
      ['A port has textiles but no spices. What can its merchants do?', 'trade textiles for spices'],
      ['What does specialization mean in an economy?', 'focusing on producing particular goods'],
      ['When regions rely on each other’s products, what relationship results?', 'interdependence']
    ],
    qc: [
      { q: 'A region with abundant salt but little grain is likely to do what?', choices: ['trade salt for grain', 'stop all exchange', 'discard its salt', 'produce no goods'], a: 'trade salt for grain' },
      { q: 'Interdependence means regions do what?', choices: ['rely on one another', 'avoid every market', 'share one climate', 'have identical resources'], a: 'rely on one another' }
    ]
  },
  {
    s: 'social', concept: 'Cities, Empires, and Monetary Markets', std: 'Ohio Social Studies 7.21',
    video: 'https://education.nationalgeographic.org/resource/urbanization/',
    sprint: 'Diagram how protected routes, coins, and marketplaces supported the growth of an imperial city.',
    problems: [
      ['What did merchants use to exchange goods in growing marketplaces?', 'coins'],
      ['How did empires support larger markets?', 'they protected routes and standardized money'],
      ['Why did cities grow near trade routes?', 'merchants and customers gathered there'],
      ['What economic function does a marketplace provide?', 'exchange between producers and consumers']
    ],
    qc: [
      { q: 'Which object standardized value in many marketplaces?', choices: ['coins', 'mountain passes', 'weather charts', 'farm fences'], a: 'coins' },
      { q: 'Protected routes most directly helped what activity?', choices: ['trade', 'isolation', 'crop failure', 'border closure'], a: 'trade' }
    ]
  },
  {
    s: 'social', concept: 'Historical Evidence and Perspective', std: 'Ohio Social Studies 7.1',
    video: 'https://education.nationalgeographic.org/resource/primary-source/',
    sprint: 'Compare two conflicting sources for purpose, evidence, audience, and possible bias.',
    problems: [
      ['What may a primary source reveal besides events?', 'the author’s bias and viewpoint'],
      ['Two sources disagree. Which three features should be compared?', 'purpose, evidence, and audience'],
      ['A royal proclamation praises a tax. What question tests its perspective?', 'who benefited from the tax?'],
      ['Why is a source’s audience important?', 'it can influence what the author emphasizes']
    ],
    qc: [
      { q: 'A source’s likely preference or slant is its what?', choices: ['bias', 'latitude', 'currency', 'migration'], a: 'bias' },
      { q: 'When sources conflict, historians should first compare their what?', choices: ['purpose and evidence', 'paper color', 'length only', 'alphabetical order'], a: 'purpose and evidence' }
    ]
  },
  {
    s: 'social', concept: 'Classical Legacies in Modern Government', std: 'Ohio Social Studies 7.17',
    video: 'https://education.nationalgeographic.org/resource/ancient-rome/',
    sprint: 'Identify one Greek and one Roman civic legacy in a modern constitution or city council.',
    problems: [
      ['What Roman practice limits one official’s power through other institutions?', 'republican checks'],
      ['What Greek practice lets citizens vote on public decisions?', 'citizen voting'],
      ['Define a historical legacy.', 'an idea or institution transmitted from an earlier society'],
      ['A city council uses elections and written laws. Which classical influences appear?', 'Greek voting and Roman law']
    ],
    qc: [
      { q: 'Which is a Roman republican legacy?', choices: ['checks on government power', 'divine kingship', 'camel caravans', 'manorial dues'], a: 'checks on government power' },
      { q: 'A legacy is something that is what?', choices: ['transmitted from an earlier society', 'invented without precedent', 'limited to geography', 'always a natural resource'], a: 'transmitted from an earlier society' }
    ]
  },
  {
    s: 'social', concept: 'Comparing Nation-State Growth', std: 'Ohio Social Studies 7.18',
    video: 'https://education.nationalgeographic.org/resource/nation-state/',
    sprint: 'Compare France and England in a chart of monarchy, representative institutions, and feudal change.',
    problems: [
      ['What did France and England both develop?', 'centralized governments'],
      ['Which English institution limited royal power through representation?', 'Parliament'],
      ['How did nation-states change local lordship?', 'rulers reduced local feudal independence'],
      ['Why can two nation-states follow different growth paths?', 'their institutions and historical conditions differ']
    ],
    qc: [
      { q: 'Which English institution represented subjects in government?', choices: ['Parliament', 'the Yuan court', 'the Athenian agora only', 'a caravan guild'], a: 'Parliament' },
      { q: 'Nation-state growth generally increased the power of whom?', choices: ['central rulers', 'isolated manors', 'foreign merchants only', 'unorganized villages'], a: 'central rulers' }
    ]
  },
  {
    s: 'social', concept: 'Trade and Interdependence Synthesis', std: 'Ohio Social Studies 7.20',
    video: 'https://education.nationalgeographic.org/resource/trade/',
    sprint: 'Use a port-city case to connect resource distribution, specialization, producers, and consumers.',
    problems: [
      ['A port exports textiles and imports spices. What economic idea does this illustrate?', 'specialization and interdependence'],
      ['Who makes goods for a market?', 'producers'],
      ['Who purchases goods in a market?', 'consumers'],
      ['If a region loses its only source of grain, what may happen?', 'it must find another supplier or face shortage']
    ],
    qc: [
      { q: 'A port exchanging cloth for spices demonstrates what production pattern?', choices: ['specialization', 'complete isolation', 'resource equality', 'political collapse'], a: 'specialization' },
      { q: 'A region dependent on imported grain is connected to its supplier by what?', choices: ['interdependence', 'absolute independence', 'cultural silence', 'physical erosion'], a: 'interdependence' }
    ]
  },
  {
    s: 'social', concept: 'Exploration and Exchange Synthesis', std: 'Ohio Social Studies 7.11',
    video: 'https://education.nationalgeographic.org/resource/columbian-exchange/',
    sprint: 'Combine a route map and timeline to explain one movement, one consequence, and one unequal effect.',
    problems: [
      ['What two tools together can show Atlantic routes and consequences over time?', 'a map and timeline'],
      ['Name one food that moved from the Americas to Europe.', 'maize'],
      ['Name one harmful biological consequence of contact.', 'smallpox caused population loss'],
      ['Why was the exchange unequal for many Indigenous communities?', 'disease and conquest caused severe harm']
    ],
    qc: [
      { q: 'Which visual best shows the direction of an Atlantic movement?', choices: ['a map', 'a census total alone', 'a recipe', 'a weather thermometer'], a: 'a map' },
      { q: 'Which consequence harmed many Indigenous populations?', choices: ['introduced disease', 'larger food variety only', 'new sailing charts', 'more ocean currents'], a: 'introduced disease' }
    ]
  },
  {
    s: 'social', concept: 'Geography and Diffusion Synthesis', std: 'Ohio Social Studies 7.14',
    video: 'https://education.nationalgeographic.org/resource/cultural-diffusion/',
    sprint: 'Analyze a route network and explain how terrain, transport, and contact spread a cultural practice.',
    problems: [
      ['How can a mountain barrier affect diffusion?', 'it can slow contact'],
      ['What transport network can carry an idea between distant communities?', 'a road or ship network'],
      ['A religion follows merchants along a route. What process is shown?', 'cultural diffusion'],
      ['Why do connected cities often change more quickly than isolated villages?', 'they receive more contact and information']
    ],
    qc: [
      { q: 'Which condition most accelerates cultural diffusion?', choices: ['frequent contact', 'complete isolation', 'impassable terrain', 'closed routes'], a: 'frequent contact' },
      { q: 'A mountain range that delays travelers acts as what?', choices: ['a geographic barrier', 'a marketplace', 'a currency', 'a civic institution'], a: 'a geographic barrier' }
    ]
  },
  {
    s: 'social', concept: 'Grade 7 Social Studies Synthesis', std: 'Ohio Social Studies 7.21',
    video: 'https://education.nationalgeographic.org/resource/geography/',
    sprint: 'Write a short synthesis connecting geography, government, trade, and cultural change with four specific examples.',
    problems: [
      ['How did trade routes help empires grow?', 'they connected markets and spread resources'],
      ['What four forces can interact in imperial growth?', 'cities, trade, cultural exchange, and government power'],
      ['A river city gains wealth, adopts outside ideas, and expands authority. What does this show?', 'geography, economics, culture, and government interact'],
      ['Which evidence pair best shows change over time?', 'a map and a dated primary source']
    ],
    qc: [
      { q: 'Which combination best explains the growth of an empire?', choices: ['trade, cities, culture, and government', 'weather alone', 'one isolated village', 'a single household custom'], a: 'trade, cities, culture, and government' },
      { q: 'A dated source paired with a route map can reveal what?', choices: ['historical change and connections', 'only daily temperature', 'the weight of a coin', 'a person’s height'], a: 'historical change and connections' }
    ]
  }
];

// Local contract checks: keep this hand-authored artifact complete and answerable.
(() => {
  if (ANNUAL_G7_SOCIAL.length !== 28) throw new Error('Grade 7 social scope must contain 28 lessons');
  const normalize = value => String(value).toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  for (const lesson of ANNUAL_G7_SOCIAL) {
    if (lesson.problems.length !== 4 || lesson.qc.length !== 2) throw new Error('Each lesson needs 4 problems and 2 checks');
    for (const [question, answer] of lesson.problems) {
      const a = normalize(answer);
      if (a.length > 4 && normalize(question).includes(a)) throw new Error(`Answer leaked into problem: ${question}`);
    }
    for (const check of lesson.qc) {
      if (check.choices.length !== 4 || new Set(check.choices.map(normalize)).size !== 4 || !check.choices.includes(check.a)) {
        throw new Error(`Invalid choices in ${lesson.concept}`);
      }
    }
  }
})();