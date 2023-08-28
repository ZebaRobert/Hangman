/* Variables used throughout the game loop */
var player = {};
const maxWrongGuess = 5;
let wrongGuess = 0;
let usedLetters = [];
let correctGuess = [];
var mWordArray = null;
let win = 0;
let lose = 0;
let gameCount = 0;
let gameCountCopy = 0;
const wordArray = [
  "after",
  "again",
  "agree",
  "ahead",
  "aisle",
  "alien",
  "alive",
  "alone",
  "among",
  "anger",
  "apple",
  "argue",
  "arrow",
  "asset",
  "atlas",
  "audio",
  "avoid",
  "bacon",
  "badge",
  "baker",
  "bamboo",
  "beach",
  "beard",
  "beast",
  "began",
  "beige",
  "being",
  "below",
  "bench",
  "birth",
  "black",
  "blade",
  "blame",
  "blank",
  "bleach",
  "blend",
  "blessed",
  "block",
  "blood",
  "blouse",
  "boast",
  "bonus",
  "booth",
  "bored",
  "brain",
  "brass",
  "brave",
  "bread",
  "bride",
  "brief",
  "bring",
  "bronze",
  "broom",
  "brown",
  "brush",
  "built",
  "bully",
  "bunch",
  "bunny",
  "burst",
  "cabin",
  "cable",
  "cake",
  "camel",
  "candy",
  "canoe",
  "canvas",
  "canyon",
  "carbon",
  "carve",
  "catch",
  "cause",
  "cedar",
  "chair",
  "charm",
  "chase",
  "check",
  "cheese",
  "chest",
  "chick",
  "chief",
  "chili",
  "chime",
  "china",
  "cider",
  "cigar",
  "circus",
  "citrus",
  "civil",
  "claim",
  "clamp",
  "clean",
  "clear",
  "clerk",
  "click",
  "climb",
  "clip",
  "clock",
  "close",
  "cloth",
  "cloud",
  "clown",
  "coach",
  "coast",
  "cocoa",
  "coffee",
  "coin",
  "color",
  "comb",
  "comic",
  "common",
  "cool",
  "copper",
  "coral",
  "corner",
  "cost",
  "cotton",
  "couch",
  "cough",
  "count",
  "cover",
  "crack",
  "craft",
  "crash",
  "crate",
  "crawl",
  "crazy",
  "cream",
  "creek",
  "crew",
  "cricket",
  "crime",
  "crisp",
  "crop",
  "cross",
  "crowd",
  "crown",
  "crush",
  "cry",
  "crystal",
  "cube",
  "cup",
  "curve",
  "cute",
  "cycle",
  "dad",
  "dance",
  "danger",
  "dare",
  "dark",
  "dash",
  "date",
  "dawn",
  "dead",
  "deal",
  "death",
  "debate",
  "debt",
  "decay",
  "deck",
  "decor",
  "deep",
  "deer",
  "delay",
  "denim",
  "dense",
  "dent",
  "deny",
  "depth",
  "desert",
  "desk",
  "detail",
  "devil",
  "dial",
  "diamond",
  "diary",
  "dice",
  "diesel",
  "diet",
  "dig",
  "dilemma",
  "dine",
  "dinner",
  "dirt",
  "disco",
  "dish",
  "ditch",
  "diver",
  "divide",
  "dizzy",
  "doctor",
  "dodge",
  "doll",
  "dolphin",
  "dome",
  "donkey",
  "door",
  "dot",
  "double",
  "dove",
  "down",
  "dozen",
  "draft",
  "dragon",
  "drama",
  "draw",
  "dream",
  "dress",
  "drift",
  "drill",
  "drink",
  "drip",
  "drive",
  "drop",
  "drown",
  "drum",
  "dry",
  "duck",
  "dude",
  "due",
  "dull",
  "dummy",
  "dust",
  "duty",
  "dwarf",
  "eagle",
  "ear",
  "early",
  "earth",
  "ease",
  "east",
  "easy",
  "echo",
  "edge",
  "ego",
  "elbow",
  "elder",
  "elite",
  "else",
  "email",
  "emerge",
  "empty",
  "end",
  "energy",
  "enjoy",
  "enough",
  "enter",
  "entry",
  "envy",
  "epic",
  "equal",
  "erase",
  "error",
  "escape",
  "essay",
  "estate",
  "even",
  "event",
  "evil",
  "exact",
  "example",
  "exit",
  "expand",
  "expert",
  "explore",
  "express",
  "extend",
  "extra",
  "eye",
  "fabric",
  "face",
  "fade",
  "faint",
  "faith",
  "fake",
  "fame",
  "family",
  "fan",
  "fancy",
  "fantasy",
  "farm",
  "fashion",
  "fast",
  "fatal",
  "father",
  "fatigue",
  "faucet",
  "fault",
  "favor",
  "feather",
  "feature",
  "federal",
  "fee",
  "feed",
  "feel",
  "fellow",
  "female",
  "fence",
  "festival",
  "fever",
  "few",
  "fiber",
  "fiction",
  "field",
  "fierce",
  "fight",
  "figure",
  "file",
  "film",
  "filter",
  "final",
  "find",
  "fine",
  "finger",
  "finish",
  "fire",
  "firm",
  "first",
  "fish",
  "fit",
  "five",
  "fix",
  "flag",
  "flame",
  "flap",
  "flash",
  "flat",
  "flavor",
  "flee",
  "fleet",
  "flesh",
  "flight",
  "flip",
  "float",
  "flock",
  "floor",
  "flourish",
  "flow",
  "flower",
  "fluid",
  "flush",
  "fly",
  "foam",
  "focus",
  "fog",
  "foil",
  "fold",
  "follow",
  "fond",
  "food",
  "fool",
  "foot",
  "force",
  "forest",
  "forget",
  "fork",
  "formal",
  "fortune",
  "forum",
  "fossil",
  "foster",
  "foul",
  "fox",
  "fragment",
  "frame",
  "frantic",
  "free",
  "fresh",
  "friend",
  "fringe",
  "frog",
  "front",
  "frost",
  "fruit",
  "fuel",
  "fulfill",
  "full",
  "fun",
  "funny",
  "furious",
  "future",
  "gain",
  "galaxy",
  "game",
  "gap",
  "garage",
  "garden",
  "garlic",
  "gas",
  "gate",
  "gather",
  "gear",
  "gender",
  "general",
  "genius",
  "gentle",
  "genuine",
  "gesture",
  "ghost",
  "giant",
  "gift",
  "ginger",
  "girl",
  "give",
  "glad",
  "glance",
  "glare",
  "glass",
  "glide",
  "global",
  "glory",
  "glove",
  "glow",
  "glue",
  "goat",
  "goddess",
  "gold",
  "good",
  "gorgeous",
  "gospel",
  "gossip",
  "govern",
  "gown",
  "grab",
  "grace",
  "grade",
  "grain",
  "grand",
  "grape",
  "grass",
  "grave",
  "great",
  "green",
  "greet",
  "grid",
  "grief",
  "grill",
  "grip",
  "groove",
  "gross",
  "ground",
  "group",
  "grow",
  "grunt",
  "guard",
  "guess",
  "guest",
  "guide",
  "guilt",
  "guitar",
  "gun",
  "guru",
  "habit",
  "hack",
  "hair",
  "half",
  "hammer",
  "hand",
  "handsome",
  "happy",
  "harbor",
  "hard",
  "harmony",
  "harvest",
  "hat",
  "hatch",
  "hate",
  "have",
  "hawk",
  "hazard",
  "head",
  "health",
  "heart",
  "heat",
  "heavy",
  "hedge",
  "height",
  "hell",
  "hello",
  "help",
  "hen",
  "here",
  "hero",
  "hidden",
  "high",
  "hike",
  "hill",
  "hint",
  "hip",
  "hire",
  "history",
  "hit",
  "hive",
  "hobby",
  "hold",
  "holiday",
  "hollow",
  "holy",
  "home",
  "honey",
  "honor",
  "hope",
  "horn",
  "horror",
  "horse",
  "hospital",
  "host",
  "hotel",
  "hour",
  "hover",
  "hub",
  "huge",
  "human",
  "humor",
  "hundred",
  "hungry",
  "hunt",
  "hurdle",
  "hurry",
  "hurt",
  "husband",
  "hybrid",
  "ice",
  "icon",
  "idea",
  "identify",
  "idle",
  "ignore",
  "ill",
  "illegal",
  "image",
  "immense",
  "immune",
  "impact",
  "import",
  "improve",
  "impulse",
  "inch",
  "include",
  "income",
  "increase",
  "index",
  "indicate",
  "individual",
  "indoor",
  "industry",
  "infant",
  "inform",
  "inherit",
  "initial",
  "inject",
  "injury",
  "innocent",
  "input",
  "inquiry",
  "insane",
  "insect",
  "inside",
  "inspire",
  "instant",
  "intact",
  "intense",
  "interest",
  "into",
  "invest",
  "invite",
  "involve",
  "iron",
  "island",
  "isolate",
  "issue",
  "item",
  "ivory",
  "jacket",
  "jail",
  "jam",
  "jazz",
  "jealous",
  "jeans",
  "jelly",
  "jet",
  "jewel",
  "job",
  "join",
  "joke",
  "journey",
  "joy",
  "judge",
  "juice",
  "jump",
  "jungle",
  "junior",
  "junk",
  "jury",
  "just",
  "justice",
  "keen",
  "keep",
  "kettle",
  "key",
  "kick",
  "kid",
  "kidney",
  "kill",
  "kind",
  "king",
  "kiss",
  "kit",
  "kitchen",
  "kite",
  "kitten",
  "knit",
  "knock",
  "know",
  "label",
  "labor",
  "ladder",
  "lady",
  "lake",
  "lamb",
  "lamp",
  "language",
  "large",
  "last",
  "late",
  "laugh",
  "launch",
  "law",
  "lawn",
  "lawsuit",
  "lawyer",
  "layer",
  "lazy",
  "lead",
  "leaf",
  "leak",
  "learn",
  "lease",
  "leave",
  "lecture",
  "left",
  "leg",
  "legal",
  "lemon",
  "lend",
  "length",
  "lens",
  "leopard",
  "lesson",
  "let",
  "letter",
  "level",
  "liar",
  "liberty",
  "library",
  "license",
  "life",
  "lift",
  "light",
  "like",
  "limb",
  "limit",
  "link",
  "lion",
  "liquid",
  "list",
  "listen",
  "little",
  "live",
  "lizard",
  "load",
  "loan",
  "lobby",
  "lobster",
  "local",
  "lock",
  "logic",
  "lonely",
  "long",
  "look",
  "loop",
  "loose",
  "lord",
  "loud",
  "love",
  "loyal",
  "luck",
  "luggage",
  "lumber",
  "lunch",
  "luxury",
  "lyric",
  "machine",
  "mad",
  "magic",
  "magnet",
  "maid",
  "mail",
  "main",
  "major",
  "make",
  "mammal",
  "man",
  "manage",
  "mandate",
  "mango",
  "mansion",
  "manual",
  "map",
  "marble",
  "march",
  "margin",
  "marine",
  "market",
  "marry",
  "mask",
  "mass",
  "master",
  "match",
  "material",
  "math",
  "matrix",
  "matter",
  "maximum",
  "maze",
  "meadow",
  "mean",
  "measure",
  "meat",
  "mechanic",
  "medal",
  "media",
  "melody",
  "melt",
  "member",
  "memory",
  "mention",
  "menu",
  "mercy",
  "merge",
  "merit",
  "merry",
  "mesh",
  "message",
  "metal",
  "method",
  "middle",
  "midnight",
  "might",
  "mild",
  "milk",
  "million",
  "mimic",
  "mind",
  "mineral",
  "minimum",
  "minor",
  "minute",
  "miracle",
  "mirror",
  "misery",
  "miss",
  "mistake",
  "mix",
  "mixed",
  "mobile",
  "model",
  "modify",
  "mom",
  "moment",
  "monitor",
  "monkey",
  "monster",
  "month",
  "moon",
  "moral",
  "morning",
  "mosquito",
  "mother",
  "motion",
  "motor",
  "mountain",
  "mouse",
  "move",
  "movie",
  "much",
  "muffin",
  "mule",
  "multiply",
  "muscle",
  "museum",
  "mushroom",
  "music",
  "must",
  "mutant",
  "mystery",
  "myth",
  "nail",
  "name",
  "nap",
  "napkin",
  "narrow",
  "nasty",
  "nation",
  "nature",
  "near",
  "neck",
  "need",
  "negative",
  "neglect",
  "neither",
  "nephew",
  "nerve",
  "nest",
  "net",
  "network",
  "neutral",
  "never",
  "new",
  "news",
  "next",
  "nice",
  "night",
  "noble",
  "noise",
  "none",
  "noodle",
  "normal",
  "north",
  "nose",
  "notable",
  "note",
  "nothing",
  "notice",
  "novel",
  "now",
  "nuclear",
  "number",
  "nurse",
  "nut",
  "oak",
  "obey",
  "object",
  "oblige",
  "obscure",
  "observe",
  "obtain",
  "obvious",
  "ocean",
  "octopus",
  "odor",
  "off",
  "offer",
  "office",
  "often",
  "oil",
  "okay",
  "old",
  "olive",
  "olympic",
  "omit",
  "once",
  "one",
  "onion",
  "online",
  "only",
  "open",
  "opera",
  "opinion",
  "oppose",
  "option",
  "orange",
  "orbit",
  "orchard",
  "order",
  "ordinary",
  "organ",
  "orient",
  "original",
  "orphan",
  "ostrich",
  "other",
  "outdoor",
  "outer",
  "output",
  "outside",
  "oval",
  "oven",
  "over",
  "own",
  "owner",
  "oxygen",
  "oyster",
  "ozone",
  "pact",
  "paddle",
  "page",
  "pair",
  "palace",
  "palm",
  "panda",
  "panel",
  "panic",
  "panther",
  "paper",
  "parade",
  "parent",
  "park",
  "parrot",
  "party",
  "pass",
  "patch",
  "path",
  "patient",
  "patrol",
  "pattern",
  "pause",
  "pave",
  "payment",
  "peace",
  "peanut",
  "pear",
  "peasant",
  "pelican",
  "pen",
  "penalty",
  "pencil",
  "people",
  "pepper",
  "perfect",
  "permit",
  "person",
  "pet",
  "phone",
  "photo",
  "phrase",
  "physical",
  "piano",
  "picnic",
  "picture",
  "piece",
  "pig",
  "pigeon",
  "pill",
  "pilot",
  "pink",
  "pioneer",
  "pipe",
  "pistol",
  "pitch",
  "pizza",
  "place",
  "planet",
  "plastic",
  "plate",
  "play",
  "pleasant",
  "pledge",
  "plot",
  "plow",
  "plunge",
  "poem",
  "poet",
  "point",
  "polar",
  "pole",
  "police",
  "pond",
  "pony",
  "pool",
  "popular",
  "portion",
  "position",
  "possible",
  "post",
  "potato",
  "potential",
  "pouch",
  "pound",
  "powder",
  "power",
  "practice",
  "praise",
  "predict",
  "prefer",
  "prepare",
  "present",
  "pretty",
  "prevent",
  "price",
  "pride",
  "primary",
  "print",
  "priority",
  "prison",
  "private",
  "prize",
  "problem",
  "process",
  "produce",
  "profit",
  "program",
  "project",
  "promote",
  "proof",
  "property",
  "prosper",
  "protect",
  "proud",
  "provide",
  "public",
  "pudding",
  "pull",
  "pulp",
  "pulse",
  "pumpkin",
  "punch",
  "pupil",
  "puppy",
  "purchase",
  "purity",
  "purpose",
  "purse",
  "push",
  "put",
  "puzzle",
  "pyramid",
  "quality",
  "quantum",
  "quarter",
  "question",
  "quick",
  "quit",
  "quiz",
  "quote",
  "rabbit",
  "race",
  "rack",
  "radar",
  "radio",
  "rail",
  "rain",
  "raise",
  "rally",
  "ramp",
  "ranch",
  "random",
  "range",
  "rapid",
  "rare",
  "rate",
  "rather",
  "raven",
  "raw",
  "razor",
  "ready",
  "real",
  "reason",
  "rebel",
  "rebuild",
  "recall",
  "receive",
  "recipe",
  "record",
  "recycle",
  "reduce",
  "reflect",
  "reform",
  "refuse",
  "region",
  "regret",
  "regular",
  "reject",
  "relax",
  "release",
  "relief",
  "rely",
  "remain",
  "remember",
  "remind",
  "remove",
  "render",
  "renew",
  "rent",
  "reopen",
  "repair",
  "repeat",
  "replace",
  "report",
  "require",
  "rescue",
  "resemble",
  "resist",
  "resource",
  "response",
  "result",
  "retire",
  "retreat",
  "return",
  "reunion",
  "reveal",
  "review",
  "reward",
  "rhythm",
  "rib",
  "ribbon",
  "rice",
  "rich",
  "ride",
  "ridge",
  "rifle",
  "right",
  "rigid",
  "ring",
  "riot",
  "ripple",
  "risk",
  "ritual",
  "rival",
  "river",
  "road",
  "roast",
  "robot",
  "robust",
  "rock",
  "rocket",
  "romance",
  "roof",
  "rookie",
  "room",
  "rose",
  "rotate",
  "rough",
  "round",
  "route",
  "royal",
  "rubber",
  "rude",
  "rug",
  "rule",
  "run",
  "runway",
  "rural",
  "sad",
  "saddle",
  "sadness",
  "safe",
  "sail",
  "salad",
  "salmon",
  "salon",
  "salt",
  "salute",
  "same",
  "sample",
  "sand",
  "satisfy",
  "satoshi",
  "sauce",
  "sausage",
  "save",
  "say",
  "scale",
  "scan",
  "scare",
  "scatter",
  "scene",
  "scheme",
  "school",
  "science",
  "scissors",
  "scooter",
  "scope",
  "score",
  "scramble",
  "scream",
  "screen",
  "script",
  "scrub",
  "sea",
  "search",
  "season",
  "seat",
  "second",
  "secret",
  "section",
  "security",
  "seed",
  "seek",
  "segment",
  "select",
  "sell",
  "seminar",
  "senior",
  "sense",
  "sentence",
  "series",
  "service",
  "session",
  "settle",
  "setup",
  "seven",
  "shadow",
  "shaft",
  "shallow",
  "shame",
  "share",
  "shed",
  "shell",
  "sheriff",
  "shield",
  "shift",
  "shine",
  "ship",
  "shiver",
  "shock",
  "shoe",
  "shoot",
  "shop",
  "short",
  "shoulder",
  "shove",
  "shrimp",
  "shrug",
  "shuffle",
  "shy",
  "sibling",
  "sick",
  "side",
  "siege",
  "sight",
  "sign",
  "silent",
  "silk",
  "silly",
  "silver",
  "similar",
  "simple",
  "since",
  "sing",
  "siren",
  "sister",
  "sit",
  "six",
  "size",
  "skate",
  "sketch",
  "ski",
  "skill",
  "skin",
  "skirt",
  "skull",
  "slab",
  "slam",
  "sleep",
  "slender",
  "slice",
  "slide",
  "slight",
  "slim",
  "slogan",
  "slot",
  "slow",
  "slush",
  "small",
  "smart",
  "smile",
  "smoke",
  "smooth",
  "snack",
  "snake",
  "snap",
  "sniff",
  "snow",
  "soap",
  "soccer",
  "social",
  "sock",
  "soda",
  "soft",
  "solar",
  "soldier",
  "solid",
  "solution",
  "solve",
  "someone",
  "song",
  "soon",
  "sorry",
  "sort",
  "soul",
  "sound",
  "soup",
  "source",
  "south",
  "space",
  "spare",
  "spatial",
  "spawn",
  "speak",
  "special",
  "speed",
  "spell",
  "spend",
  "sphere",
  "spice",
  "spider",
  "spike",
  "spin",
  "spirit",
  "split",
  "spoil",
  "sponsor",
  "spoon",
  "sport",
  "spot",
  "spray",
  "spread",
  "spring",
  "spy",
  "square",
  "squeeze",
  "squirrel",
  "stable",
  "stadium",
  "staff",
  "stage",
  "stairs",
  "stamp",
  "stand",
  "start",
  "state",
  "stay",
  "steak",
  "steel",
  "stem",
  "step",
  "stereo",
  "stick",
  "still",
  "sting",
  "stock",
  "stomach",
  "stone",
  "stool",
  "story",
  "stove",
  "strategy",
  "street",
  "strike",
  "strong",
  "struggle",
  "student",
  "stuff",
  "stumble",
  "style",
  "subject",
  "submit",
  "subway",
  "success",
  "such",
  "sudden",
  "suffer",
  "sugar",
  "suggest",
  "suit",
  "summer",
  "sun",
  "sunny",
  "sunset",
  "super",
  "supply",
  "supreme",
  "sure",
  "surface",
  "surge",
  "surprise",
  "surround",
  "survey",
  "suspect",
  "sustain",
  "swallow",
  "swamp",
  "swap",
  "swarm",
  "swear",
  "sweet",
  "swift",
  "swim",
  "swing",
  "switch",
  "sword",
  "symbol",
  "symptom",
  "syrup",
  "system",
  "table",
  "tackle",
  "tag",
  "tail",
  "talent",
  "talk",
  "tank",
  "tape",
  "target",
  "task",
  "taste",
  "tattoo",
  "taxi",
  "teach",
  "team",
  "tell",
  "ten",
  "tenant",
  "tennis",
  "tent",
  "term",
  "test",
  "text",
  "thank",
  "that",
  "theme",
  "then",
  "theory",
  "there",
  "they",
  "thing",
  "this",
  "thought",
  "three",
  "thrive",
  "throw",
  "thumb",
  "thunder",
  "ticket",
  "tide",
  "tiger",
  "tilt",
  "timber",
  "time",
  "tiny",
  "tip",
  "tired",
  "tissue",
  "title",
  "toast",
  "tobacco",
  "today",
  "toddler",
  "toe",
  "together",
  "toilet",
  "token",
  "tomato",
  "tomorrow",
  "tone",
  "tongue",
  "tonight",
  "tool",
  "tooth",
  "top",
  "topic",
  "topple",
  "torch",
  "tornado",
  "tortoise",
  "toss",
  "total",
  "tourist",
  "toward",
  "tower",
  "town",
  "toy",
  "track",
  "trade",
  "traffic",
  "tragic",
  "train",
  "transfer",
  "trap",
  "trash",
  "travel",
  "tray",
  "treat",
  "tree",
  "trend",
  "trial",
  "tribe",
  "trick",
  "trigger",
  "trim",
  "trip",
  "trophy",
  "trouble",
  "truck",
  "true",
  "truly",
  "trumpet",
  "trust",
  "truth",
  "try",
  "tube",
  "tuition",
  "tumble",
  "tuna",
  "tunnel",
  "turkey",
  "turn",
  "turtle",
  "twelve",
  "twenty",
  "twice",
  "twin",
  "twist",
  "two",
  "type",
  "typical",
  "ugly",
  "umbrella",
  "unable",
  "unaware",
  "uncle",
  "uncover",
  "under",
  "undo",
  "unfair",
  "unfold",
  "unhappy",
  "uniform",
  "unique",
  "unit",
  "universe",
  "unknown",
  "unlock",
  "until",
  "unusual",
  "unveil",
  "update",
  "upgrade",
  "uphold",
  "upon",
  "upper",
  "upset",
  "urban",
  "urge",
  "usage",
  "use",
  "used",
  "useful",
  "useless",
  "usual",
  "utility",
  "vacant",
  "vacuum",
  "vague",
  "valid",
  "valley",
  "valve",
  "van",
  "vanish",
  "vapor",
  "various",
  "vast",
  "vault",
  "vehicle",
  "velvet",
  "vendor",
  "venture",
  "venue",
  "verb",
  "verify",
  "version",
  "very",
  "vessel",
  "veteran",
  "viable",
  "vibrant",
  "vicious",
  "victory",
  "video",
  "view",
  "village",
  "vintage",
  "violin",
  "virtual",
  "virus",
  "visa",
  "visit",
  "visual",
  "vital",
  "vivid",
  "vocal",
  "voice",
  "void",
  "volcano",
  "volume",
  "vote",
  "voyage",
  "wage",
  "wagon",
  "wait",
  "walk",
  "wall",
  "walnut",
  "want",
  "warfare",
  "warm",
  "warrior",
  "wash",
  "wasp",
  "waste",
  "water",
  "wave",
  "way",
  "wealth",
  "weapon",
  "wear",
  "weasel",
  "weather",
  "web",
  "wedding",
  "weekend",
  "weird",
  "welcome",
  "west",
  "wet",
  "whale",
  "what",
  "wheat",
  "wheel",
  "when",
  "where",
  "whip",
  "whisper",
  "wide",
  "width",
  "wife",
  "wild",
  "will",
  "win",
  "window",
  "wine",
  "wing",
  "wink",
  "winner",
  "winter",
  "wire",
  "wisdom",
  "wise",
  "wish",
  "witness",
  "wolf",
  "woman",
  "wonder",
  "wood",
  "wool",
  "word",
  "work",
  "world",
  "worry",
  "worth",
  "wrap",
  "wreck",
  "wrestle",
  "wrist",
  "write",
  "wrong",
  "yard",
  "year",
  "yellow",
  "you",
  "young",
  "youth",
  "zebra",
  "zero",
  "zone",
  "zoo",
];

/* Event listener for creating player object and starting the game loop */
window.addEventListener("DOMContentLoaded", function () {
  let playerForm = document.getElementById("playerSettings");
  playerForm.addEventListener("submit", function (event) {
    event.preventDefault();
    player = {
      /**
       * Gets radio buttons with class diffSelection and
       * checks which difficulty setting has been chosen
       * @returns value of the chosen difficulty
       */
      getDifficulty: function () {
        let radioGrupe = document.getElementsByClassName("diffSelection");
        for (let i = 0; i < radioGrupe.length; i++) {
          if (radioGrupe[i].checked) {
            return radioGrupe[i].value;
          }
        }
      },
      name: document.getElementById("name").value,
      difficulty: null,
      consGames: document.getElementById("wordCount").value,
    };
    player.difficulty = player.getDifficulty();
    mWordArray = generateWord();
    gameCount = player.consGames;
    gameCountCopy = player.consGames;
    drawKeyboard();
    updateUI(player);
    displaySection();
  });
  return player;
});

let playAgain = document.getElementsByClassName("play")[1];
let changeSettings = document.getElementById("cSettings");
let virtualKeyboard = document.getElementsByClassName("keys");
let diffDisplay = document.getElementById("diffDisplay");
let h1Element = document.querySelector("#postgameM h1");
let pElement = document.querySelector("#postgameM p");
const userName = document.getElementById("name");
const consecutiveGames = document.getElementById("wordCount");
let resultCount = document.getElementsByClassName("guessCount");

userName.addEventListener("input", function (event) {
  this.value = this.value.replace(/[^a-zA-Z]/g, "");
});

consecutiveGames.addEventListener("input", function (event) {
  this.value = this.value.replace(/[^0-9]/g, "");
});

playAgain.addEventListener("click", function (event) {
  removeKeyboard();
  removeMysteryWord();
  generateWord();
  displaySection();
});
changeSettings.addEventListener("click", function (event) {
  removeKeyboard();
  displaySection();
});

/**
 * applies events liseners to virtual keyboard keys
 */
function addEventListeners() {
  for (let i = 0; i < virtualKeyboard.length; i++) {
    virtualKeyboard[i].addEventListener("click", checkAnswer);
  }
}

/**
 * removes previosly applied event listeners for virtual keyboard
 */
function removeEventListeners() {
  for (let i = 0; i < virtualKeyboard.length; i++) {
    virtualKeyboard[i].removeEventListener("click", checkAnswer);
  }
}

/**
 * Determines which section is currently visible and switches to the next
 */
function displaySection() {
  let sections = document.getElementsByTagName("section");

  for (let i = 0; i < sections.length; i++) {
    if (sections[i].className === "") {
      var currentSec = sections[i];
      break;
    }
  }

  switch (currentSec.id) {
    case "welcomeSec":
      currentSec.setAttribute("class", "hidden");
      sections[1].setAttribute("class", "");
      break;
    case "gameSec":
      currentSec.setAttribute("class", "hidden");
      sections[2].setAttribute("class", "");
      break;
    case "postgameSec":
      if (playAgain == event.target) {
        drawKeyboard();
        currentSec.setAttribute("class", "hidden");
        sections[1].setAttribute("class", "");
      } else if (changeSettings == event.target) {
        currentSec.setAttribute("class", "hidden");
        sections[0].setAttribute("class", "");
      } else {
        console.log("Somethings wrong");
      }
      break;
    default:
      alert("Something went wrong");
      break;
  }
}
/**
 * Generate a random word using math.random() and an array of words
 * if the word meets criteria for the player difficulty call drawMysteryWord()
 * @returns random array of a random word from word array
 */
function generateWord() {
  let easyWords = [];
  let mediumWords = [];
  let hardWords = [];
  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i].length <= 5) {
      easyWords.push(wordArray[i]);
    } else if (wordArray[i].length <= 7 && wordArray[i].length >= 5) {
      mediumWords.push(wordArray[i]);
    } else {
      hardWords.push(wordArray[i]);
    }
  }
  let playerDiff = player.difficulty;
  let randomNumber;
  let randomWord;
    switch (playerDiff) {
      case "easy":
        removeMysteryWord();
        randomNumber = Math.floor(Math.random() * easyWords.length);
        randomWord = easyWords[randomNumber];
        randomWord = randomWord.toUpperCase();
        mWordArray = randomWord.split("");
        drawMysteryWord(mWordArray);
        return mWordArray;
        break;
      case "medium":
        removeMysteryWord();
        randomNumber = Math.floor(Math.random() * mediumWords.length);
        randomWord = mediumWords[randomNumber];
        randomWord = randomWord.toUpperCase();
        mWordArray = randomWord.split("");
        drawMysteryWord(mWordArray);
        return mWordArray;
        break;
      case "hard":
        removeMysteryWord();
        randomNumber = Math.floor(Math.random() * hardWords.length);
        randomWord = hardWords[randomNumber];
        randomWord = randomWord.toUpperCase();
        mWordArray = randomWord.split("");
        drawMysteryWord(mWordArray);
        return mWordArray;
        break;
      case "random":
        removeMysteryWord();
        randomNumber = Math.floor(Math.random() * wordArray.length);
        randomWord = wordArray[randomNumber];
        randomWord = randomWord.toUpperCase();
        mWordArray = randomWord.split("");
        drawMysteryWord(mWordArray);
        return mWordArray;
        break;
    }
}
/**
 * Takes letters from arrays and creates buttons that represent keyboard keys
 */
function drawKeyboard() {
  removeEventListeners();
  let vKeyboard = document.getElementsByClassName("keysRow");
  let firstRow = ["Q", "W", "E", "R", "T", "Z", "U", "I", "O", "P"];
  let secundRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  let thirdRow = ["Y", "X", "C", "V", "B", "N", "M"];
  for (let i = 0; i < firstRow.length; i++) {
    let letterBox = document.createElement("span");
    letterBox.setAttribute("class", "keys");
    letterBox.textContent = firstRow[i];
    vKeyboard[0].appendChild(letterBox);
  }
  for (let i = 0; i < secundRow.length; i++) {
    let letterBox = document.createElement("span");
    letterBox.setAttribute("class", "keys");
    letterBox.textContent = secundRow[i];
    vKeyboard[1].appendChild(letterBox);
  }
  for (let i = 0; i < thirdRow.length; i++) {
    let letterBox = document.createElement("span");
    letterBox.setAttribute("class", "keys");
    letterBox.textContent = thirdRow[i];
    vKeyboard[2].appendChild(letterBox);
  }
  addEventListeners();
}

/**
 * Draws empty boxes in the mystery word div according to the number of letter in the random word
 */
function drawMysteryWord(mWordArray) {
  updateUI(player);
  let wordDiv = document.getElementById("mysteryWord");
  for (let i = 0; i < mWordArray.length; i++) {
    let letterBox = document.createElement("span");
    letterBox.textContent = "";
    letterBox.setAttribute("class", "letterBox");
    letterBox.setAttribute("id", `${i}`);
    wordDiv.appendChild(letterBox);
  }
}

/**
 * removes previosly drawn boxes for last mystery word
 */
function removeMysteryWord() {
  let wordDiv = document.getElementById("mysteryWord");
  wordDiv.innerHTML = "";
}
/**
 * Removes previosly drawn keyboard when user want to play again
 */
function removeKeyboard() {
  let row = document.getElementsByClassName("keysRow");
  for (let i = 0; i < row.length; ++i) {
    row[i].innerHTML = "";
  }
}
/**
 * Updates users game interface accordingly to his/hers settings
 *
 */
function updateUI(playerObj) {
  switch (playerObj.difficulty) {
    case "easy":
      diffDisplay.style.color = "green";
      diffDisplay.textContent = "Easy";
      break;
    case "medium":
      diffDisplay.style.color = "yellow";
      diffDisplay.textContent = "Medium";
      break;
    case "hard":
      diffDisplay.style.color = "red";
      diffDisplay.textContent = "Hard";
      break;
    case "random":
      if (mWordArray.length <= 5) {
        diffDisplay.style.color = "green";
        diffDisplay.textContent = "Easy";
      } else if (mWordArray.length <= 7 && mWordArray.length > 5) {
        diffDisplay.style.color = "yellow";
        diffDisplay.textContent = "Medium";
      } else {
        diffDisplay.style.color = "red";
        diffDisplay.textContent = "Hard";
      }
      break;
  }
}

/**
 * Checks if users guess is correct and fills corresponding letter box if the guess is correct
 */
function checkAnswer(event) {
  updatePyramide();
  let answer = this.textContent;
  this.style.backgroundColor = "#ede2d7";
  this.style.color = "#2e2e2e";
  answer = answer.toUpperCase();

  for (let i = 0; i < usedLetters.length; i++) {
    if (answer === usedLetters[i]) {
      alert("You have already tried this letter. Please choose another one.");
      return;
    }
  }

  let correct = false;

  for (let i = 0; i < mWordArray.length; i++) {
    if (answer === mWordArray[i]) {
      let letterBox = document.getElementById(`${i}`);
      letterBox.textContent = answer;
      correctGuess.push(answer);
      correct = true;
    }
  }

  if (!correct) {
    usedLetters.push(answer);
    wrongGuess++;
  }
  winLoseConditions();
  return;
}
/**
 * Updates post game messages appropriately
 */
function postGameResults(winCon) {
  if (winCon === true) {
    h1Element.textContent = `Congratulations ${player.name}!!You won!`;
    pElement.textContent =
      "Would you like to play another round and continue your winning streak?";
    displaySection();
  } else if (winCon === "even") {
    h1Element.textContent = "It's a tie!!";
    pElement.textContent = `Not bad ${player.name}, but I know you can do better. Give it another go!`;
    displaySection();
  } else {
    h1Element.textContent = "You Lost!";
    pElement.textContent = `Sorry ${player.name}, I am sure you will do better next time! Try again!`;
    displaySection();
  }
}
/**
 * Determines whether or not a player has won and transitions to post game section
 */
function winLoseConditions() {
  updatePyramide();
  switch (true) {
    case gameCount > 0:
      if (wrongGuess === maxWrongGuess) {
        for (let i = 0; i < virtualKeyboard.length; i++) {
          virtualKeyboard[i].style.backgroundColor = "#2e2e2e";
          virtualKeyboard[i].style.color = "#ede2d7";
        }
        gameCount--;
        lose++;
        resultCount[1].innerHTML = lose.toString();
        resultCount[3].innerHTML = lose.toString();
        wrongGuess = 0;
        usedLetters = [];
        correctGuess = [];
        mWordArray = generateWord();
      } else if (correctGuess.length === mWordArray.length) {
        let letterBox = document.getElementsByClassName("letterBox");
        for (let i = 0; i < letterBox.length; i++) {
          letterBox[i].style.backgroundColor = "#ede2d7";
          letterBox[i].style.color = "#2e2e2e";
        }
        for (let i = 0; i < virtualKeyboard.length; i++) {
          virtualKeyboard[i].style.backgroundColor = "#2e2e2e";
          virtualKeyboard[i].style.color = "#ede2d7";
        }
        win++;
        resultCount[0].innerHTML = win.toString();
        resultCount[2].innerHTML = win.toString();
        gameCount--;
        wrongGuess = 0;
        usedLetters = [];
        correctGuess = [];
        setTimeout(function () {
          mWordArray = generateWord();
        }, 500);
      }
      break;
    case gameCount === 0:
      if (wrongGuess === maxWrongGuess) {
        lose++;
        resultCount[1].innerHTML = lose.toString();
        resultCount[3].innerHTML = lose.toString();
      } else if (correctGuess.length === mWordArray.length) {
        win++;
        resultCount[0].innerHTML = win.toString();
        resultCount[2].innerHTML = win.toString();
      }
      wrongGuess = 0;
      usedLetters = [];
      correctGuess = [];
      gameCount = gameCountCopy;
      let winCon = true;
      if (win > lose) {
        postGameResults(winCon);
      } else if (win === lose) {
        winCon = "even";
        postGameResults(winCon);
      } else {
        winCon = false;
        postGameResults(winCon);
      }
      win = 0;
      lose = 0;
      updatePyramide();
      break;
    default:
      console.log("something went wrong");
      break;
  }
}
/**
 * Updates class attributes for div elements
 */
function updatePyramide() {
  let blocks = document.getElementsByClassName("pyramide");
  let image = document.getElementsByClassName("coyotImg")
  switch (wrongGuess) {
    case 0:
      for (let i = 0; i < blocks.length; i++) {
        blocks[i].classList.add("hidden");
        for (let i = 0; i < blocks.length; i++) {
          image[i].style.opacity = 1;
        }
      }
      break;
    case 1:
      blocks[0].classList.remove("hidden");
      break;
    case 2:
      blocks[1].classList.remove("hidden");
      image[0].style.opacity = 0;
      break;
    case 3:
      blocks[2].classList.remove("hidden");
      image[1].style.opacity = 0;
      break;
    case 4:
      blocks[3].classList.remove("hidden");
      image[2].style.opacity = 0;
      break;
    case 5:
      blocks[4].classList.remove("hidden");
      image[3].style.opacity = 0;
      setTimeout(function (){
        for (let i = 0; i < blocks.length; i++) {
          blocks[i].classList.add("hidden");
        }
      },500)
      break;
    default:
      console.log("something went wrong");
      break;
  }
}
