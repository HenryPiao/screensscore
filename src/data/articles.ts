export interface Article {
  slug: string
  title: string
  movieTitle: string
  tmdbId: number
  mediaType: 'movie' | 'tv'
  rating: number
  verdict: string
  verdictColor: 'green' | 'yellow' | 'red'
  excerpt: string
  content: string
  publishedAt: string
  tags: string[]
}

export const articles: Article[] = [
  {
    slug: 'deadpool-and-wolverine-2024-review',
    title: 'Deadpool & Wolverine Review: Ryan Reynolds and Hugh Jackman Deliver the Ultimate Fan Service',
    movieTitle: 'Deadpool & Wolverine',
    tmdbId: 533535,
    mediaType: 'movie',
    rating: 8,
    verdict: 'Worth Watching',
    verdictColor: 'green',
    excerpt: "Ryan Reynolds and Hugh Jackman's long-awaited team-up is exactly what Marvel needed — chaotic, irreverent, and surprisingly emotional.",
    publishedAt: '2024-08-01',
    tags: ['Marvel', 'Action', 'Comedy', 'Superhero', '2024'],
    content: `
<p class="lead">After years of anticipation, <strong>Deadpool & Wolverine</strong> finally arrives as the MCU's first R-rated entry — and it absolutely doesn't disappoint. Director Shawn Levy orchestrates a film that works both as a love letter to Fox's X-Men era and a genuine crowd-pleaser for casual moviegoers.</p>

<h2>The Chemistry That Carries Everything</h2>
<p>Ryan Reynolds' Wade Wilson is at his most unhinged, breaking the fourth wall with gleeful abandon while delivering surprisingly heartfelt moments about legacy and identity. Hugh Jackman's return as Logan — or rather a variant of him — carries real emotional weight, especially for audiences who watched the original X-Men trilogy unfold over two decades.</p>
<p>The film's greatest strength is the chemistry between its leads. Reynolds and Jackman have a magnetic dynamic that alternates between genuine animosity and reluctant brotherhood. Their banter never feels forced, and when the film slows down to let them actually talk, it earns every emotional beat it reaches for.</p>

<h2>Action That Earns Its R Rating</h2>
<p>Visually, the movie is a spectacle. The action sequences are inventive and brutal — this is a Deadpool movie after all — with Wolverine's claws finally getting the R-rated showcase they've always deserved. The TVA setting from the Loki series provides a creative sandbox that the film exploits to brilliant effect, culminating in a third act stuffed with cameos that will send longtime Marvel fans into complete overdrive.</p>
<p>The fight choreography is a step up from previous Deadpool films. There's a clarity to the action that many MCU films lack, and the practical effects blend seamlessly with the CGI in ways that feel refreshingly tactile.</p>

<h2>Where It Falls Short</h2>
<p>Where the film stumbles is in its villain. Emma Corrin's Cassandra Nova is visually striking but frustratingly underwritten, serving more as a plot mechanism than a genuine threat. The story also leans so heavily on nostalgia that viewers unfamiliar with Fox's Marvel history may occasionally feel left out of the joke.</p>
<p>The pacing in the middle act drags slightly as the film takes time to establish the multiverse mechanics, and some of the emotional beats feel rushed in service of getting to the next set piece.</p>

<h2>The Verdict</h2>
<p>But these are minor complaints in the context of what Deadpool & Wolverine achieves. It succeeds because it understands what audiences want from these characters and delivers it without apology. It's the rare superhero film that's genuinely fun from start to finish — irreverent enough to satisfy longtime fans while accessible enough to win over newcomers.</p>
<p>Most importantly, it proves that the R-rated superhero film still has a place in modern Hollywood. Here's hoping Marvel takes note.</p>

<h2>Pros & Cons</h2>
<ul>
  <li>✅ Reynolds and Jackman's chemistry is electric throughout</li>
  <li>✅ R-rated action is brutal and creatively staged</li>
  <li>✅ Surprisingly emotional for a comedy-action film</li>
  <li>✅ Fan service that actually earns its place in the story</li>
  <li>❌ Villain is underdeveloped and lacks real menace</li>
  <li>❌ Heavy nostalgia may alienate casual viewers</li>
  <li>❌ Middle act pacing issues</li>
</ul>
    `,
  },
  {
    slug: 'dune-part-two-2024-review',
    title: 'Dune: Part Two Review — Denis Villeneuve Completes His Desert Masterpiece',
    movieTitle: 'Dune: Part Two',
    tmdbId: 693134,
    mediaType: 'movie',
    rating: 9,
    verdict: 'Must Watch',
    verdictColor: 'green',
    excerpt: "Denis Villeneuve's conclusion to Frank Herbert's epic is a cinematic achievement that demands to be seen on the biggest screen possible.",
    publishedAt: '2024-03-15',
    tags: ['Sci-Fi', 'Epic', 'Denis Villeneuve', '2024'],
    content: `
<p class="lead">Denis Villeneuve has done the impossible: he's made a sequel that surpasses the original. <strong>Dune: Part Two</strong> is not just a great science fiction film — it's one of the most ambitious and fully realized epics in modern cinema.</p>

<h2>A Vision Fully Realized</h2>
<p>Where Part One was necessarily a film of setup and establishment, Part Two is pure momentum. Paul Atreides' transformation from refugee nobleman to messianic figurehead unfolds with a tragic inevitability that Frank Herbert's source novel demands, and Villeneuve navigates this complex arc with remarkable confidence.</p>
<p>Timothée Chalamet delivers his finest performance to date, conveying Paul's internal conflict — his awareness of the myth he's becoming versus his desire for vengeance — with extraordinary subtlety. Zendaya, given far more screen time than in Part One, is a revelation as Chani, serving as the story's moral compass and the audience's most grounded point of view.</p>

<h2>Technical Mastery</h2>
<p>Cinematographer Greig Fraser's work here is nothing short of extraordinary. The Harkonnen sequences, shot in black-and-white infrared, create an alienness that immediately distinguishes them from the golden-hued Arrakis scenes. The gladiatorial arena sequence alone is worth the price of admission — a visceral, almost abstract study in violence and spectacle.</p>
<p>Hans Zimmer's score escalates brilliantly, incorporating new vocal elements that feel primal and unsettling in exactly the right ways. The sound design throughout is immersive in a way that genuinely rewards a cinema experience with proper audio.</p>

<h2>The Darker Turn</h2>
<p>Villeneuve doesn't shy away from Herbert's uncomfortable thesis: that messianic figures are dangerous, that religious fervor can be weaponized, and that our hero's victory may be the story's real tragedy. The film's final act is deliberately disturbing, and some audiences expecting a clean triumphant ending will be unsettled — appropriately so.</p>
<p>Austin Butler's Feyd-Rautha is genuinely menacing, a counterpoint to Paul that highlights how similar the two characters are beneath their different circumstances. Florence Pugh is excellent in her limited role, laying groundwork for what would presumably be a third film.</p>

<h2>The Verdict</h2>
<p>Dune: Part Two demands to be seen in the largest possible format. It's the kind of film that justifies the theatrical experience — grand, immersive, intellectually challenging, and viscerally thrilling. Villeneuve has delivered one of the decade's great epics.</p>

<h2>Pros & Cons</h2>
<ul>
  <li>✅ Visual and audio experience is peerless</li>
  <li>✅ Chalamet and Zendaya both give career-best performances</li>
  <li>✅ Committed to the source material's uncomfortable themes</li>
  <li>✅ Austin Butler's Feyd-Rautha is a memorable villain</li>
  <li>❌ Requires familiarity with Part One</li>
  <li>❌ Some supporting characters get less development than they deserve</li>
</ul>
    `,
  },
  {
    slug: 'inside-out-2-2024-review',
    title: 'Inside Out 2 Review: Pixar Tackles Anxiety — and Mostly Gets It Right',
    movieTitle: 'Inside Out 2',
    tmdbId: 1022789,
    mediaType: 'movie',
    rating: 8,
    verdict: 'Worth Watching',
    verdictColor: 'green',
    excerpt: "Pixar's most anticipated sequel in years doesn't quite reach the heights of the original but delivers an emotionally resonant story about adolescence and identity.",
    publishedAt: '2024-06-20',
    tags: ['Pixar', 'Animation', 'Family', '2024'],
    content: `
<p class="lead">Nine years after the original changed how we talk about emotions, <strong>Inside Out 2</strong> arrives with an impossible task: topping one of Pixar's most beloved films. It doesn't quite manage it, but what it achieves is still remarkable — a thoughtful, visually inventive exploration of adolescence that earns its emotional climax.</p>

<h2>New Emotions, New Complications</h2>
<p>Riley is now 13, on the cusp of high school, and the sudden arrival of puberty brings with it a new wave of emotions to headquarters. Anxiety, voiced with perfect nervous energy by Maya Hawke, is the film's standout creation — a well-meaning but destructive force who genuinely believes she's protecting Riley from future pain.</p>
<p>The film's central insight — that anxiety isn't malicious but catastrophically counterproductive — resonates with unusual depth for a family film. Parents watching will recognize their own patterns; teenagers will see themselves reflected with uncomfortable accuracy.</p>

<h2>The Familiar Crew</h2>
<p>Amy Poehler's Joy remains the emotional anchor, and her arc in this film is a worthy continuation of the original's exploration of why sadness matters. The original emotions are somewhat sidelined in the film's middle section, but the third act brings them back in ways that feel earned rather than obligatory.</p>
<p>Visually, Pixar continues to push boundaries. The imagination landscapes are inventively designed, and a sequence involving Riley's "stream of consciousness" is genuinely dazzling in its creativity.</p>

<h2>Where It Stumbles</h2>
<p>The film's weakness is its structure. The middle act is somewhat repetitive — Anxiety overplanning, Joy and the team trying to intervene — and some of the new emotions beyond Anxiety (Ennui, Envy, Embarrassment) feel underutilized. The hockey camp setting, while necessary, doesn't have the same imaginative richness as the original's emotional headquarters.</p>

<h2>The Verdict</h2>
<p>Inside Out 2 is exactly the kind of sequel Pixar needed to make — one that expands the original's world thoughtfully rather than simply retreading it. It won't replace the original in your heart, but it will make you think about your own anxiety in ways that linger long after the credits roll.</p>

<h2>Pros & Cons</h2>
<ul>
  <li>✅ Anxiety is a brilliantly conceived character</li>
  <li>✅ Emotionally honest portrayal of adolescence</li>
  <li>✅ Beautiful animation throughout</li>
  <li>✅ Third act emotional payoff is genuinely moving</li>
  <li>❌ Middle act is repetitive</li>
  <li>❌ New emotions beyond Anxiety are underused</li>
  <li>❌ Doesn't reach the original's conceptual heights</li>
</ul>
    `,
  },
  {
    slug: 'the-wild-robot-2024-review',
    title: 'The Wild Robot Review: DreamWorks\' Most Beautiful Film in Decades',
    movieTitle: 'The Wild Robot',
    tmdbId: 1184918,
    mediaType: 'movie',
    rating: 9,
    verdict: 'Must Watch',
    verdictColor: 'green',
    excerpt: "A breathtaking animated film about survival, motherhood, and belonging. The Wild Robot is DreamWorks at its absolute best.",
    publishedAt: '2024-09-27',
    tags: ['Animation', 'DreamWorks', 'Family', '2024'],
    content: `
<p class="lead"><strong>The Wild Robot</strong> is the kind of film that reminds you why animated movies matter. Based on Peter Brown's beloved novel, Chris Sanders' adaptation is a breathtaking work of visual art that packs more genuine emotion into its 102 minutes than most live-action dramas manage in twice the runtime.</p>

<h2>A Story About Learning to Belong</h2>
<p>ROZZUM unit 7134 — Roz — washes ashore on a wild island after a shipwreck, and with no programmed mission to fulfill, must adapt to survive. When she accidentally becomes mother to an orphaned gosling named Brightbill, the film becomes something unexpectedly profound: a meditation on parenthood, identity, and what it means to be truly alive.</p>
<p>Lupita Nyong'o voices Roz with extraordinary delicacy, conveying the robot's gradual emotional awakening through subtle vocal shifts that track her transformation from machine to mother. Pedro Pascal brings warmth and humor to Fink the fox, who evolves from antagonist to unlikely ally with real character development.</p>

<h2>Visual Poetry</h2>
<p>The animation style — impressionistic, painterly, reminiscent of classic studio-era backgrounds — is unlike anything DreamWorks has produced before. Each season is rendered with different color palettes and textures, and the island feels genuinely alive in ways that digital animation rarely achieves.</p>
<p>The film's climactic sequence is a masterpiece of tension and beauty, interweaving action with emotional resolution in ways that will leave audiences of all ages silently weeping.</p>

<h2>For Every Age</h2>
<p>The Wild Robot works on multiple levels simultaneously. Children will be captivated by the adventure and humor; adults will find deeper resonances about sacrifice, adaptation, and the forms that love can take. It's the rare family film that doesn't condescend to either audience.</p>

<h2>The Verdict</h2>
<p>See it on the biggest screen available. The Wild Robot is DreamWorks' best film since How to Train Your Dragon — a genuine animated masterpiece that deserves to be mentioned alongside Pixar's finest work.</p>

<h2>Pros & Cons</h2>
<ul>
  <li>✅ Stunning painterly animation style</li>
  <li>✅ Lupita Nyong'o gives a career-highlight vocal performance</li>
  <li>✅ Genuinely emotional without being manipulative</li>
  <li>✅ Works beautifully for both children and adults</li>
  <li>❌ Pacing slightly slow in the first act</li>
  <li>❌ Some supporting island animals are thinly sketched</li>
</ul>
    `,
  },
  {
    slug: 'alien-romulus-2024-review',
    title: 'Alien: Romulus Review — A Terrifying Return to the Franchise\'s Horror Roots',
    movieTitle: 'Alien: Romulus',
    tmdbId: 945961,
    mediaType: 'movie',
    rating: 75,
    verdict: 'Worth Watching',
    verdictColor: 'green',
    excerpt: "Fede Álvarez strips the Alien franchise back to its claustrophobic horror origins with impressive results, even if the story plays it safe.",
    publishedAt: '2024-08-16',
    tags: ['Horror', 'Sci-Fi', 'Alien', '2024'],
    content: `
<p class="lead">After the philosophical ambitions of Prometheus and Alien: Covenant, <strong>Alien: Romulus</strong> strips the franchise back to its terrifying essentials — a group of young people trapped in a dark place with something that wants to kill them. Director Fede Álvarez (Evil Dead, Don't Breathe) knows exactly what he's doing, and the result is the most purely scary Alien film since the 1979 original.</p>

<h2>Back to Basics</h2>
<p>Set between the events of Alien and Aliens, Romulus follows a group of colonial workers who board an abandoned Weyland-Yutani research station hoping to salvage sleep chambers for a better life. What they find, of course, is a nightmare.</p>
<p>Cailee Spaeny leads with vulnerability and growing determination, and her rapport with David Jonsson's android Andy provides the film with its emotional core. The young cast is uniformly strong, avoiding the "stupid decisions in horror films" trap by making choices that feel genuinely reasonable given what their characters know.</p>

<h2>Technical Mastery</h2>
<p>Álvarez and cinematographer Galo Olivares construct the station as a genuinely frightening environment. The zero-gravity sequence midway through the film is a standout — inventively staged, viscerally unpleasant, and unlike anything the franchise has attempted before.</p>
<p>The Xenomorph has rarely looked better. Practical effects are used extensively and effectively, and the creature's screen time is wisely rationed so that each appearance retains maximum impact.</p>

<h2>Playing It (Too) Safe</h2>
<p>Where the film disappoints is in its narrative ambition. Beyond the technical craft, Romulus doesn't have much new to say about the franchise's themes. The story hits familiar beats with competence rather than revelation, and a late-film development involving a legacy character will divide audiences sharply.</p>

<h2>The Verdict</h2>
<p>For fans who felt the franchise had lost its way, Alien: Romulus is a welcome course correction. It's a confident, skillfully crafted horror film that delivers genuine scares. Just don't expect it to expand your understanding of what the franchise can be.</p>

<h2>Pros & Cons</h2>
<ul>
  <li>✅ Best pure horror in the franchise since the original</li>
  <li>✅ Impressive practical effects work</li>
  <li>✅ Strong lead performance from Cailee Spaeny</li>
  <li>✅ Zero-gravity sequence is a franchise highlight</li>
  <li>❌ Narratively thin — prioritizes atmosphere over story</li>
  <li>❌ Controversial legacy character decision</li>
  <li>❌ Doesn't expand the franchise's thematic horizons</li>
</ul>
    `,
  },
  {
    slug: 'wicked-2024-review',
    title: 'Wicked Review: Ariana Grande and Cynthia Erivo Make Magic',
    movieTitle: 'Wicked',
    tmdbId: 402431,
    mediaType: 'movie',
    rating: 85,
    verdict: 'Worth Watching',
    verdictColor: 'green',
    excerpt: "Jon M. Chu's adaptation of the beloved Broadway musical is a visually extravagant, emotionally rich experience anchored by two extraordinary performances.",
    publishedAt: '2024-11-22',
    tags: ['Musical', 'Fantasy', '2024'],
    content: `
<p class="lead">Adapting one of Broadway's most beloved musicals for the screen is a high-wire act, and Jon M. Chu — who proved his musical credentials with Crazy Rich Asians and In the Heights — mostly pulls it off with style. <strong>Wicked</strong> is a visually extravagant, emotionally generous film that will satisfy devotees and win new converts alike.</p>

<h2>Two Performances That Justify Everything</h2>
<p>The film rises and falls on Cynthia Erivo and Ariana Grande, and both deliver. Erivo's Elphaba is a revelation — fierce, vulnerable, and possessed of a vocal power that makes "Defying Gravity" feel genuinely earned rather than inevitable. Grande, to the pleasant surprise of many skeptics, matches her scene for scene as Glinda, finding real depth beneath the character's dizzy exterior.</p>
<p>Their chemistry is the film's beating heart. The friendship that develops between two women who seem to have nothing in common is rendered with warmth and specificity, making the tragedy of their eventual estrangement feel genuinely devastating.</p>

<h2>Oz Reimagined</h2>
<p>Production designer Nathan Crowley constructs an Oz that feels both familiar and freshly imagined — grand in scale, detailed in texture, and coherent as a world. Chu stages the musical numbers with infectious energy, particularly "Popular" and the show-stopping first act finale.</p>

<h2>The Part One Problem</h2>
<p>The film's most significant weakness is structural: this is only the first half of the story. The narrative stops rather than concludes, leaving audiences with what feels like an extended setup for Part Two. For audiences unfamiliar with the stage show, this may feel frustrating. Those who know the story can calibrate their expectations accordingly.</p>

<h2>The Verdict</h2>
<p>Wicked is a film that deserves to be seen with the largest, most enthusiastic audience possible. Its pleasures are communal — it's made for the theatrical experience. Just be prepared to wait for the conclusion.</p>

<h2>Pros & Cons</h2>
<ul>
  <li>✅ Erivo and Grande are both exceptional</li>
  <li>✅ Visually inventive and consistently gorgeous</li>
  <li>✅ Musical numbers are energetically staged</li>
  <li>✅ The friendship at the center feels genuinely real</li>
  <li>❌ Ends abruptly as Part One of two</li>
  <li>❌ Runtime is demanding at 160 minutes</li>
</ul>
    `,
  },
  {
    slug: 'gladiator-2-2024-review',
    title: 'Gladiator II Review: Ridley Scott Returns to the Colosseum With Mixed Results',
    movieTitle: 'Gladiator II',
    tmdbId: 558449,
    mediaType: 'movie',
    rating: 7,
    verdict: 'Worth Watching',
    verdictColor: 'yellow',
    excerpt: "Paul Mescal carries Ridley Scott's belated sequel with conviction, but the film never escapes the shadow of its legendary predecessor.",
    publishedAt: '2024-11-22',
    tags: ['Action', 'Historical', 'Ridley Scott', '2024'],
    content: `
<p class="lead">Twenty-four years after Maximus entered the arena, Ridley Scott returns to ancient Rome with <strong>Gladiator II</strong> — a film of spectacular action and frustrating narrative inconsistency that will satisfy audiences hungry for spectacle while leaving admirers of the original somewhat conflicted.</p>

<h2>Paul Mescal Holds the Line</h2>
<p>Much rested on whether Paul Mescal could carry the weight of a franchise-starter, and the answer is a qualified yes. His Lucius brings genuine conviction to a character who exists somewhat in the shadow of Russell Crowe's iconic Maximus. The physical transformation is convincing, and Mescal brings emotional authenticity to scenes that lesser actors would have turned into empty posturing.</p>
<p>The film's other significant asset is Denzel Washington, who plays the scheming Macrinus with gleeful villainy. Washington is clearly having enormous fun, and his scenes crackle with an energy that the rest of the film sometimes lacks.</p>

<h2>Rome, Spectacularly Imagined</h2>
<p>Technically, the film is Ridley Scott working at his most assured. The Colosseum sequences are inventively staged, escalating in ambition with each successive fight. A sequence involving sharks in a flooded arena is delirious in the best way, prioritizing spectacle over plausibility in a manner entirely appropriate to the genre.</p>

<h2>The Story's Weaknesses</h2>
<p>Where Gladiator II struggles is in its screenplay. The political machinations that drive the plot are muddled, and the twin emperors — while entertainingly unhinged — lack the imposing menace of Joaquin Phoenix's Commodus. The emotional stakes never quite reach the heights of the original because the personal losses at the story's core don't carry the same weight.</p>

<h2>The Verdict</h2>
<p>As pure entertainment, Gladiator II delivers. As a worthy successor to one of cinema's great action epics, it falls somewhat short. See it for the spectacle, Mescal's performance, and Washington's scene-stealing work. Just manage your expectations accordingly.</p>

<h2>Pros & Cons</h2>
<ul>
  <li>✅ Paul Mescal is a compelling lead</li>
  <li>✅ Denzel Washington steals every scene</li>
  <li>✅ Arena sequences are spectacular</li>
  <li>✅ Ridley Scott's visual craft remains formidable</li>
  <li>❌ Screenplay is muddled and overly complicated</li>
  <li>❌ Never escapes the original's shadow</li>
  <li>❌ Villains lack the original's menace</li>
</ul>
    `,
  },
  {
    slug: 'shogun-2024-review',
    title: 'Shōgun Review: The Best TV Show of 2024 Is a Masterclass in Epic Storytelling',
    movieTitle: 'Shōgun',
    tmdbId: 81329,
    mediaType: 'tv',
    rating: 95,
    verdict: 'Must Watch',
    verdictColor: 'green',
    excerpt: "FX's reimagining of James Clavell's novel is a rare television event — a prestige epic that earns every comparison to Game of Thrones at its peak.",
    publishedAt: '2024-04-23',
    tags: ['Drama', 'Historical', 'TV Series', '2024', 'FX'],
    content: `
<p class="lead">Once in a generation, a television series arrives that redefines what the medium can achieve. <strong>Shōgun</strong> is that series for 2024 — an epic, immersive, morally complex drama that stands as the finest achievement in prestige television since the peak years of Game of Thrones.</p>

<h2>A World Fully Realized</h2>
<p>Set in feudal Japan at the turn of the 17th century, the series follows English sailor John Blackthorn (Cosmo Jarvis) as he becomes entangled in the power struggle between the ambitious Lord Toranaga (Hiroyuki Sanada) and his enemies among the Council of Regents. Where previous adaptations centered the Western outsider's perspective, this Shōgun wisely reframes the story: Toranaga is the protagonist, and Blackthorn — while compelling — is ultimately a piece on a larger board.</p>
<p>Hiroyuki Sanada, who also produces, delivers a performance of extraordinary subtlety and power. Toranaga is inscrutable but never opaque — we gradually come to understand his methods without ever fully predicting them. It's one of the great performances in recent television history.</p>

<h2>Anna Sawai and the Art of Translation</h2>
<p>Anna Sawai as Toda Mariko is the series' secret weapon — a character of enormous interior complexity who serves as the literal and figurative translator between the show's two worlds. Her arc across the ten episodes is the most emotionally devastating in the series, culminating in a penultimate episode that is among the finest hours of television in years.</p>

<h2>Craft at Every Level</h2>
<p>The production design, costumes, and location photography create a Japan of stunning authenticity and beauty. The battle sequences are limited but devastating when they arrive. Most impressively, the series is predominantly in Japanese — a choice that immediately signals its commitment to telling this story on its own terms.</p>

<h2>The Verdict</h2>
<p>Shōgun is essential viewing — a landmark achievement that deserves every award and every viewer it can find. If you watch one television series this year, make it this one.</p>

<h2>Pros & Cons</h2>
<ul>
  <li>✅ Hiroyuki Sanada gives a legendary performance</li>
  <li>✅ Anna Sawai is extraordinary as Toda Mariko</li>
  <li>✅ Uncommonly intelligent writing for prestige television</li>
  <li>✅ Stunning production values throughout</li>
  <li>✅ Fully commits to its Japanese perspective</li>
  <li>❌ Dense political plotting requires full attention</li>
  <li>❌ Slow build in early episodes may test patience</li>
</ul>
    `,
  },
  {
    slug: 'baby-reindeer-2024-review',
    title: 'Baby Reindeer Review: Netflix\'s Most Unsettling and Essential Watch of the Year',
    movieTitle: 'Baby Reindeer',
    tmdbId: 233749,
    mediaType: 'tv',
    rating: 9,
    verdict: 'Must Watch',
    verdictColor: 'green',
    excerpt: "Richard Gadd's semi-autobiographical series about stalking and trauma is one of the bravest, most uncomfortable things on television. It demands to be seen.",
    publishedAt: '2024-05-10',
    tags: ['Drama', 'Thriller', 'Netflix', 'TV Series', '2024'],
    content: `
<p class="lead">There is no comfortable way to watch <strong>Baby Reindeer</strong>. Richard Gadd's semi-autobiographical account of being stalked — and of the complicated truths that lie beneath any simple victim narrative — is one of the most bracing pieces of television in years. It is not easy viewing. It is absolutely essential.</p>

<h2>A Story That Refuses Easy Categories</h2>
<p>Gadd writes and stars as Donny Dunn, a struggling comedian who makes a small act of kindness toward a woman named Martha (Jessica Gunning) and finds himself ensnared in a years-long stalking campaign. But Baby Reindeer isn't a straightforward thriller about a stalker — it's an excavation of trauma, complicity, and the stories we tell ourselves about our own victimhood.</p>
<p>The series is as interested in Donny's own moral compromises as it is in Martha's obsession. His prior abuse at the hands of a prominent TV writer, which he has buried and rationalized, haunts every episode — complicating the audience's sympathies and forcing a reckoning with why victims sometimes behave in ways that seem counter to their own interests.</p>

<h2>Two Extraordinary Performances</h2>
<p>Gadd is revelatory in a role that requires him to be simultaneously sympathetic and frustrating, funny and heartbreaking. But Jessica Gunning as Martha may give the year's most complex performance — making a stalker genuinely pitiable without ever minimizing the damage she causes. It's a tightrope walked with extraordinary care.</p>

<h2>The Courage of Its Convictions</h2>
<p>What separates Baby Reindeer from lesser trauma narratives is its refusal to offer resolution or reassurance. The ending is deliberately incomplete, true to the messiness of real experience. Some viewers will find this frustrating; most will recognize it as the only honest choice available.</p>

<h2>The Verdict</h2>
<p>Baby Reindeer is a series that will stay with you long after it ends. Be prepared for it to be uncomfortable. Be prepared for it to be brilliant.</p>

<h2>Pros & Cons</h2>
<ul>
  <li>✅ One of the bravest pieces of autobiographical storytelling on television</li>
  <li>✅ Both Gadd and Gunning give extraordinary performances</li>
  <li>✅ Refuses to simplify its moral complexity</li>
  <li>✅ Short runtime — seven episodes — is perfectly calibrated</li>
  <li>❌ Deeply uncomfortable subject matter (stalking, sexual abuse)</li>
  <li>❌ Deliberately unresolved ending divides viewers</li>
</ul>
    `,
  },
  {
    slug: 'twisters-2024-review',
    title: 'Twisters Review: A Crowd-Pleasing Disaster Film That Knows Exactly What It Is',
    movieTitle: 'Twisters',
    tmdbId: 718821,
    mediaType: 'movie',
    rating: 7,
    verdict: 'Worth Watching',
    verdictColor: 'green',
    excerpt: "Lee Isaac Chung's soft sequel to the 1996 classic is unpretentious summer entertainment — big, loud, and tremendously fun when it works.",
    publishedAt: '2024-07-19',
    tags: ['Action', 'Disaster', 'Summer Blockbuster', '2024'],
    content: `
<p class="lead">There is something refreshing about a summer blockbuster that knows exactly what it is and commits to it without apology. <strong>Twisters</strong> is not trying to be the next Oppenheimer. It is trying to put impressive tornadoes on screen and give audiences a good time. On those terms, it mostly succeeds.</p>

<h2>Daisy Edgar-Jones Anchors the Storm</h2>
<p>Daisy Edgar-Jones brings unexpected depth to meteorologist Kate Cooper, a scientist haunted by a past tragedy who is drawn back into tornado chasing by the promise of new technology that could save lives. Her internal conflict — between scientific obsession and self-protective withdrawal — gives the film more emotional grounding than its premise strictly requires.</p>
<p>Glen Powell, playing a social-media-famous tornado chaser named Tyler Owens, is pure charisma. His easy physicality and comic timing provide essential counterpoint to the film's more earnest moments, and his chemistry with Edgar-Jones is strong enough to elevate what might otherwise have been a rote romance subplot.</p>

<h2>The Tornadoes</h2>
<p>The practical and visual effects work is consistently impressive. Director Lee Isaac Chung — somewhat surprisingly, given his background in intimate drama with Minari — stages the set pieces with confidence and scale. The film's centerpiece sequence, involving a massive tornado descending on a rodeo arena, is genuinely spectacular cinema.</p>
<p>The film is shot with clarity that makes the action geography comprehensible even during its most chaotic moments — a virtue not to be underestimated in contemporary blockbuster filmmaking.</p>

<h2>Genre Pleasures, Genre Limitations</h2>
<p>Twisters has the weaknesses inherent to its genre. The screenplay relies on familiar types and situations; the villain is underdrawn; certain plot developments are telegraphed well in advance. But the film moves quickly enough that these issues rarely become distracting.</p>

<h2>The Verdict</h2>
<p>Twisters is exactly the kind of unpretentious summer entertainment that cinemas were built for. Go for the spectacle, stay for Edgar-Jones and Powell's chemistry, leave satisfied.</p>

<h2>Pros & Cons</h2>
<ul>
  <li>✅ Edgar-Jones and Powell have genuine chemistry</li>
  <li>✅ Spectacular tornado sequences</li>
  <li>✅ Moves quickly and never overstays its welcome</li>
  <li>✅ Better character work than the genre usually delivers</li>
  <li>❌ Screenplay relies on familiar genre tropes</li>
  <li>❌ Supporting characters are thinly drawn</li>
  <li>❌ Nothing here will surprise you</li>
</ul>
    `,
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}

export function getAllSlugs(): string[] {
  return articles.map((a) => a.slug)
}
