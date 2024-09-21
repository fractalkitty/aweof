// Arrays of words
const starters = [
	"the", "a", "the universe's", "nature's", "the tree's", "the rock's", "the water's",
	"the forest's", "a forest's", "the meadow's", "the sky's", "the river's", "the mountain's", 
	"the hill's", "a hill's", "the cloud's", "a cloud's", "the star's", "a star's", 
	"the sun's", "the moon's", "the planet's", "the galaxy's", "the nebula's", 
	"the cosmos'", "the universe's", "a tree's", "the oak's", "the pine's", 
	"a willow's", "the maple's", "a birch's", "the fern's", "the moss's", 
	"a mushroom's", "the grass's", "the vine's", "a leaf's", "the flower's", 
	"the wildflower's", "a sunflower's", "the tulip's", "the lily's", "the orchid's", 
	"the fern's", "a shrub's", "the bush's", "the root's", "the bark's", 
	"a branch's", "the seed's", "a sprout's", "the bud's", "a sapling's", 
	"the soil's", "a garden's", "the field's", "a meadow's", "the prairie’s", 
	"the horizon's", "a rainstorm's", "the wind's", "a breeze's", "the gust's", 
	"the raindrop's", "the rainbow's", "a sunrise's", "the sunset's", "the twilight's", 
	"the dusk's", "the dawn's", "a starlight's", "the milky way's", "a meteor's", 
	"the comet's", "a constellation's", "the eclipse's", "the full moon's", "the crescent's", 
	"a starry night's", "the aurora's", "the atmosphere's", "the canyon's", 
	"the cliff's", "a valley's", "the riverbank's", "the pond's", "a lake's", 
	"the waterfall's", "the spring's", "the stream's", "a current's", "the tide's", 
	"the beach's", "a shoreline's", "the dune's", "the desert's", "a savanna's", 
	"the steppe's", "the wetland's", "the swamp's", "the marsh's", "a lagoon's", 
	"the horizon's", "a hillside's", "the forest floor's", "a grove's", "the orchard's"
];

const subjects =  [
	"teacher", "friend", "scientist", "leaf", "warbler", "ear", "mind", "being", 
	"essence", "core", "love", "mouth", "light", "seed", "sprout", "branch", 
	"tree", "fern", "moss", "vine", "flower", "blossom", "petal", "root", 
	"trunk", "bark", "branch","sapling", "twig", "forest", "meadow", "grove", "orchard", 
	"hill", "mountain", "valley", "river", "stream", "pond", "lake", "waterfall", 
	"cloud", "rain", "breeze", "wind", "gust", "storm", "sky", "sun", "moon", 
	"star", "comet", "meteor", "planet", "galaxy", "nebula", "cosmos", 
	"universe", "horizon", "rainbow", "sunrise", "sunset", "dawn", "dusk", 
	"twilight", "shadow", "ray", "beam", "reflection", "mirror", "image", 
	"perspective", "vision", "dream", "thought", "idea", "word", "voice", 
	"sound", "silence", "whisper", "song", "note", "melody", "rhythm", 
	"heartbeat", "pulse", "breath", "sigh", "wind", "rain", "mist", "fog", 
	"wave", "tide", "current", "shore", "beach", "cliff", "dune", "desert", 
	"oasis", "prairie", "steppe", "swamp", "marsh", "bog", "fen", "lagoon", 
	"reef", "island", "peninsula", "cove", "bay", "fjord", "canyon", "gorge", 
	"cliff", "peak", "summit", "ridge", "plateau", "plain", "savanna", 
	"grassland", "field", "garden", "wildflower", "rose", "tulip", "lily", 
	"orchid", "daisy", "sunflower", "herb", "shrub", "bush", "cedar", 
	"pine", "oak", "birch", "maple", "willow", "sequoia", "redwood", 
	"cactus", "aloe", "yucca", "palm", "agave", "sand", "rock", "stone", 
	"pebble", "boulder", "earth", "soil", "clay", "dust", "ash", "lava", 
	"volcano", "rift", "crater", "glacier", "iceberg", "snowflake", "frost", 
	"ice", "dew", "raindrop", "puddle", "flood", "torrent", "whirlwind", 
	"cyclone", "hurricane", "lightning", "thunder", "flash", "glow", 
	"flame", "spark", "ember", "fire", "blaze", "heat", "warmth", "cold", 
	"freeze", "chill", "breeze", "whisper", "hum", "chirp", "warbler", 
	"raven", "sparrow", "swallow", "eagle", "hawk", "owl", "robin", 
	"bluebird", "kingfisher", "heron", "crane", "stork", "pigeon", "dove", 
	"crow", "parrot", "nest", "hummingbird", "expanse", "feather", "wing","presence", "moment", "void", "wholeness", "infinity", "balance", "equilibrium", 
	"cycle", "rhythm", "flow", "stillness", "tranquility", "harmony", "unity", 
	"breath", "pulse", "heartbeat", "whisper", "echo", "silence", "vibration", 
	"energy", "space", "time", "dimension", "realm", "awareness", "consciousness", 
	"wisdom", "clarity", "understanding", "patience", "acceptance", "truth", 
	"faith", "mindfulness", "meditation", "thought", "awakeness", "serenity", 
	"reflection", "intention", "vision", "focus", "contemplation", "bliss", 
	"transformation", "creation", "emptiness", "lightness", "gravity", "weight", 
	"shadow", "illumination", "beam", "spark", "ray", "glow", "firelight", 
	"starlight", "moonbeam", "sunbeam", "refraction", "momentum", "force", 
	"gravity", "friction", "attraction", "motion", "drift", "orbit", 
	"ascension", "descent", "elevation", "expanse", "extension", "depth", 
	"width", "height", "direction", "path", "journey", "adventure", "quest", 
	"pilgrimage", "circle", "spiral", "arc", "curve", "loop", "turn", 
	"corner", "edge", "surface", "line", "horizon", "boundary", "border", 
	"threshold", "crossing", "connection", "bridge", "gate", "doorway", "passage", 
	"key", "portal", "opening", "entrance", "exit", "reflection"
];

const verbs =  [
	"eats", "runs", "jumps", "explains", "discovers", "falls", "becomes", 
	"flows", "rests", "breathes", "drifts", "listens", "whispers", 
	"grows", "shines", "reflects", "illuminates", "awakens", "surrenders", 
	"unfolds", "reveals", "connects", "embraces", "nourishes", "opens", 
	"guides", "blooms", "softens", "settles", "grounds", "centers", 
	"aligns", "blossoms", "rests", "holds", "blends", "balances", 
	"harmonizes", "absorbs", "echoes", "resonates", "vibrates", 
	"pulses", "unites", "transforms", "invites", "deepens", "remembers", 
	"forgets", "creates", "dissolves", "radiates", "reflects", "invites", 
	"releases", "lifts", "expands", "contracts", "drinks", "fades", 
	"persists", "resides", "hovers", "pauses", "touches", "waits", 
	"reaches", "grounds", "listens", "wonders", "chants", "sings", 
	"rests", "flows", "whispers", "guides", "inhales", "exhales", 
	"circles", "echoes", "embraces", "caresses", "wanders", "settles", 
	"rests", "melts", "connects", "surrounds", "descends", "ascends", 
	"lingers", "revolves", "rises", "falls", "quietens", "reflects", 
	"floats", "seeks", "blossoms", "quiets", "touches", "holds", 
	"mirrors", "accepts", "stirs", "changes into","morphs into","dances with", "ponders","knows of", "used to be", "channels", "bows to", "flys with", "focuses on"
];

const objects = [
	"the breath", "the wind", "the wave", "a stone", "a leaf", "a branch", "a flower", "a blossom", 
	"a seed", "a sprout", "a cloud", "the rain", "the sunlight", "the moonlight", "a star", 
	"a comet", "a nebula", "a galaxy", "the river", "a stream", "the mountain", "a valley", 
	"the horizon", "the forest", "a tree", "the bark", "a root", "a petal", "a fern", "the moss", 
	"a vine", "a mushroom", "the meadow", "a grove", "the sand", "the desert", "a pebble", 
	"a stone", "a rock", "the earth", "the soil", "the dew", "the frost", "the snow", "the ice", 
	"the glacier", "a waterfall", "a pool", "a pond", "the lake", "the shore", "the beach", 
	"a dune", "a field", "the grass", "the prairie", "a rainbow", "the sunrise", "the sunset", 
	"the dawn", "the dusk", "the twilight", "a shadow", "the light", "a beam", "a ray", "a mirror", 
	"the reflection", "a flame", "an ember", "the fire", "a spark", "the glow", "the dust", 
	"the starry sky", "the moon", "a planet", "an orbit", "the tide", "a current", "the ocean", 
	"the sea", "a whisper", "an echo", "a song", "a melody", "the silence", "the stillness", 
	"a heartbeat", "the pulse", "the rhythm", "the breath", "a whirlwind", "a breeze", "a gust", 
	"the mist", "the fog", "the haze", "a drift", "a path", "a journey", "a cycle", "a circle", 
	"the wholeness", "the emptiness", "the void", "the infinity"
];

const adverbs = [
	"quickly", "silently", "carefully", "excitedly", "gracefully",
	"peacefully", "gently", "calmly", "softly", "quietly", 
	"smoothly", "steadily", "patiently", "slowly", "effortlessly", 
	"thoughtfully", "mindfully", "harmoniously", "delicately", "intentionally", 
	"serenely", "naturally", "easily", "lightly", "subtly", 
	"genuinely", "purely", "deeply", "openly", "freely", 
	"contentedly", "intuitively", "calmly", "silently", "brightly", 
	"gently", "wholeheartedly", "tranquilly", "vibrantly", "fluidly", 
	"gratefully", "smoothly", "unhurriedly", "patiently", "inwardly", 
	"outwardly", "evenly", "softly", "perfectly", "reverently", 
	"elegantly", "blissfully", "humbly", "tenderly", "unselfishly", 
	"authentically", "clearly", "genuinely", "warmly", "simply", 
	"effortlessly", "tactfully", "kindly", "happily", "lovingly", 
	"thoughtfully", "introspectively", "reflectively", "truthfully", "acceptingly", 
	"impartially", "non-judgmentally", "unfoldingly", "surrenderedly", "presently", 
	"openly", "transparently", "balancedly", "subconsciously", "unwaveringly", 
	"anchoredly", "centeredly", "interconnectedly", "completely", "still", 
	"boldly", "faithfully", "gatheringly", "lightheartedly", "honestly", 
	"fluidly", "endlessly", "eternally", "wholly", "quietly", 
	"hushedly", "smoothly", "magically", "brightly", "glowingly", 
	"vibrationally", "eternally", "cyclically", "inclusively"
];

const phrases =  [
	"every morning", "in the evening", "before eyes are closed", "with each breath", 
	"with every step", "as the sun rises", "under the moonlight", "with the wind", 
	"in the quiet forest", "under the stars", "by the river", "through the trees", 
	"at dawn", "in the twilight", "in the morning light", "with the setting sun", 
	"with the breeze", "under the open sky", "in the stillness", "beneath the clouds", 
	"by the water", "in the valley", "on the horizon", "under the pine trees", 
	"with the rain", "with the tides", "in the mountain air", "with the falling leaves", 
	"in the clear night", "under the sun", "through the mist", "in the soft rain", 
	"as the stars appear", "with the morning dew", "in the open field", "at the water's edge", 
	"in the quiet of night", "with the first light", "by the sea", "through the meadow", 
	"in the soft light", "as the day fades", "in the gentle wind", "with the evening light", 
	"at sunset", "in the cool breeze", "in the starlight", "by the quiet stream", 
	"under the bright sky", "through the quiet path", "with the soft glow", 
	"by the mountain stream", "under the morning sun", "in the falling rain", 
	"with the morning breeze", "with the twilight glow", "in the calm of dawn", 
	"beneath the evening sky", "in the autumn air", "with the rising sun", "in the calm", 
	"under the quiet sky", "in the golden light", "as the sun sets", "with the first breath", 
	"with every sunrise", "with every sunset", "as the moon rises", "under the fading light", 
	"in the quiet morning", "with the stars above", "with the fading light", "at dawn's first light", 
	"in the early morning", "through the open air", "as the leaves fall", "with the turning tides", 
	"by the quiet shore", "under the evening sky", "with each step", "as the day begins", 
	"with the first rays", "as the sky darkens", "with the last light", "under the quiet moon", 
	"in the early light", "by the ocean's edge", "with every breath", "in the cool air", 
	"as the world sleeps", "with the stars shining", "in the peaceful night", "in the forest's silence", 
	"as the wind whispers", "with the calm night", "as the stars shine", "in the night's quiet", 
	"through the still air", "under the gentle sky", "in the soft dusk", "as the dawn breaks", 
	"by the flowing water", "with the soft wind"
];


// Function to start updating sentence parts at different intervals
// function startUpdating() {
// 	initializeSentence();
// 
// 	// Set intervals for each part
// 	setInterval(() => updatePart('starter', starters), 25500); // Every 5 seconds
// 	setInterval(() => updatePart('subject', subjects), 15000); // Every 7 seconds
// 	setInterval(() => updatePart('verb', verbs), 30000); // Every 6 seconds
// 	setInterval(() => updatePart('object', objects), 18000); // Every 8 seconds
// 	setInterval(() => updatePart('adverb', adverbs), 39000); // Every 9 seconds
// 	setInterval(() => updatePart('phrase', phrases), 46000); // Every 10 seconds
// }
// Function to get a random word from an array
function getRandomWord(array) {
	return array[Math.floor(Math.random() * array.length)];
}

// Function to update a sentence part with fade effect
function updatePart(elementId, wordArray) {
	const element = document.getElementById(elementId);

	// Start fade-out
	element.classList.add('fade-out');

	// Wait for the fade-out to complete before updating the word
	setTimeout(() => {
		// Update the word content
		element.textContent = getRandomWord(wordArray);

		// Remove fade-out class to fade back in
		element.classList.remove('fade-out');
	}, 10); // Matches the CSS transition duration
}

// Add event listeners for both click and Enter key events
function addEventListeners() {
	const elements = document.querySelectorAll('#sentenceOutput span');

	elements.forEach(element => {
		const elementId = element.id;
		let wordArray;

		// Assign the correct word array to each element based on its id
		switch (elementId) {
			case 'starter':
				wordArray = starters;
				break;
			case 'subject':
				wordArray = subjects;
				break;
			case 'verb':
				wordArray = verbs;
				break;
			case 'object':
				wordArray = objects;
				break;
			case 'adverb':
				wordArray = adverbs;
				break;
			case 'phrase':
				wordArray = phrases;
				break;
		}

		// Click event to change the word
		element.addEventListener('click', () => updatePart(elementId, wordArray));

		// Keydown event to change the word when "Enter" is pressed
		element.addEventListener('keydown', (e) => {
			if (e.key === 'Enter') {
				updatePart(elementId, wordArray);
			}
		});
	});
}

// Initialize the event listeners after the page loads
window.onload = function() {
	addEventListeners();
};