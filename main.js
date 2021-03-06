/**
 * @author	"David Coffield"
 * @contact	"coffield@my.erau.edu"
 */

/* 
 * Define a dictionary with commonly-used parts of speech and syllable counts.
 */
var dictionary = {
	// 100 most commonly-used nouns
	nouns:["time","year","people","way","day","man","thing","woman","life","child","world","school","state","family","student","group","country","problem","hand","part","place","case","week","company","system","program","question","work","government","number","night","point","home","water","room","mother","area","money","story","fact","month","lot","right","study","book","eye","job","word","business","issue","side","kind","head","house","service","friend","father","power","hour","game","line","end","member","law","car","city","community","name","president","team","minute","idea","kid","body","information","back","parent","face","others","level","office","door","health","person","art","war","history","party","result","change","morning","reason","research","girl","guy","moment","air","teacher","force","education"],
	nounSyllableCounts:[1,1,2,1,1,1,1,2,1,1,1,1,1,3,2,1,2,2,1,1,1,1,1,3,2,2,2,1,3,2,1,1,1,2,1,2,3,2,2,1,1,1,1,2,1,1,1,1,2,2,1,1,1,1,2,1,2,2,1,1,1,1,2,1,1,2,4,1,3,1,2,3,1,2,4,1,2,1,2,2,2,1,1,2,1,1,3,2,2,1,2,2,2,1,1,2,1,2,1,4],
	nounCount:100,
	// 25 most commonly-used pronouns
	pronouns:["it","I","you","he","they","we","she","who","them","me","him","one","her","us","something","nothing","anything","himself","everything","someone","themselves","everyone","itself","anyone","myself"],
	pronounSyllableCounts:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,3,2,3,2,2,3,2,3,2],
	pronounCount:25,
	// 100 most commonly-used verbs
	verbs:["be","have","do","say","go","can","get","would","make","know","will","think","take","see","come","could","want","look","use","find","give","tell","work","may","should","call","try","ask","need","feel","become","leave","put","mean","keep","let","begin","seem","help","talk","turn","start","might","show","hear","play","run","move","like","live","believe","hold","bring","happen","must","write","provide","sit","stand","lose","pay","meet","include","continue","set","learn","change","lead","understand","watch","follow","stop","create","speak","read","allow","add","spend","grow","open","walk","win","offer","remember","love","consider","appear","buy","wait","serve","die","send","expect","build","stay","fall","cut","reach","kill","remain"],
	verbSyllableCounts:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,2,1,1,2,1,1,1,1,1,2,3,1,1,1,1,3,1,2,1,2,1,1,2,1,1,1,2,1,1,2,3,1,3,2,1,1,1,1,1,2,1,1,1,1,1,1,2],
	verbCount:100,
	// 100 most commonly-used adjectives
	adjectives:["other","new","good","high","old","great","big","American","small","large","national","young","different","black","long","little","important","political","bad","white","real","best","right","social","only","public","sure","low","early","able","human","local","late","hard","major","better","economic","strong","possible","whole","free","military","true","federal","international","full","special","easy","clear","recent","certain","personal","open","red","difficult","available","likely","short","single","medical","current","wrong","private","past","foreign","fine","common","poor","natural","significant","similar","hot","dead","central","happy","serious","ready","simple","left","physical","general","environmental","financial","blue","democratic","dark","various","entire","close","legal","religious","cold","final","main","green","nice","huge","popular","traditional","cultural"],
	adjectiveSyllableCounts:[2,1,1,1,1,1,1,4,1,1,3,1,3,1,1,2,3,4,1,1,1,1,1,2,2,2,1,1,2,2,2,2,1,1,2,2,4,1,3,1,1,4,1,3,5,1,2,2,1,2,2,3,2,1,3,4,2,1,2,3,2,1,2,1,2,1,2,1,3,4,3,1,1,2,2,3,2,2,1,3,3,5,3,1,4,1,3,2,1,2,3,1,2,1,1,1,1,3,4,3],
	adjectiveCount:100,
	// 100 most commonly-used adverbs
	adverbs:["up","so","out","just","now","how","then","more","also","here","well","only","very","even","back","there","down","still","in","as","to","when","never","really","most","on","why","about","over","again","where","right","off","always","today","all","far","long","away","yet","often","ever","however","almost","later","much","once","least","ago","together","around","already","enough","both","maybe","actually","probably","home","of course","perhaps","little","else","sometimes","finally","less","better","early","especially","either","quite","simply","nearly","soon","certainly","quickly","no","recently","before","usually","thus","exactly","hard","particularly","pretty","forward","ok","clearly","indeed","rather","that","tonight","close","suddenly","best","instead","ahead","fast","alone","eventually","directly"],
	adverbSyllableCounts:[1,1,1,1,1,1,1,1,1,2,1,1,1,2,2,1,1,1,1,1,1,1,1,2,3,1,1,1,2,2,2,1,1,1,2,2,1,1,1,2,1,2,1,3,2,2,1,1,1,2,3,2,3,2,1,2,4,3,1,2,2,2,1,2,3,1,2,2,4,2,1,2,2,1,3,2,1,3,2,4,1,3,1,5,2,2,1,2,2,2,1,2,1,3,1,2,2,1,2,5,3],
	adverbCount:100,
	// 50 most commonly-used prepositions
	prepositions:["with","at","from","into","during","including","until","against","among","throughout","despite","towards","upon","concerning","of","to","in","for","on","by","about","like","through","over","before","between","after","since","without","under","within","along","following","across","behind","beyond","plus","except","but","up","out","around","down","off","above","near"],
	prepositionSyllableCounts:[1,1,1,2,2,3,2,2,2,2,2,2,2,3,1,1,1,1,1,1,2,1,1,2,2,2,2,1,2,2,2,2,3,2,2,2,1,2,1,1,1,2,1,1,2,1],
	prepositionCount:50,
	// 25 most commonly-used conjunctions
	conjunctions:["and","that","but","or","as","if","when","than","because","while","where","after","so","though","since","until","whether","before","although","nor","like","once","unless","now","except"],
	conjunctionSyllableCounts:[1,1,1,1,1,1,1,1,2,1,1,2,1,1,1,2,2,2,2,1,1,1,2,1,2],
	conjunctionCount:25,
	// 10 most commonly-used interjections
	interjections:["yes","oh","yeah","no","hey","hi","hello","hmm","ah","wow"],
	interjunctionSyllableCounts:[1,1,1,1,1,1,2,1,1,1],
	interjectionCount:10
};

var lineStructureOptions = [
	"Noun, Verb, Adverb",
	"Interjection, Pronoun, Verb",
	"Preposition, Noun, Pronoun, Verb"
];

/*
 * Haikus are poems with a 5-7-5 structure.
 */
function Haiku() {
	firstLineSyllables = 5,
	secondLineSyllables = 7,
	thirdLineSyllables = 5,
	
	firstLine = "",
	secondLine = "",
	thirdLine = ""
};

/* 
 * Define a function to return a given string with the first letter capitalized.
 */
function firstLetterCapitalized(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/* 
 * Define a function to return a random integer given a minimum and maximum.
 */
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * parseInt(max)) + parseInt(min);
}

function getRandomLine(numSyllables) {
	var line = "";
	var syllablesUsed = 0;
	var lineIncomplete = true;
	
	var noun = getRandomWord("Noun");
	var pronoun = getRandomWord("Pronoun");
	var verb = getRandomWord("Verb");
	var adjective = getRandomWord("Adjective");
	var adverb = getRandomWord("Adverb");
	var preposition = getRandomWord("Preposition");
	var conjunction = getRandomWord("Conjunction");
	var interjection = getRandomWord("Interjection");
	
	switch (getRandomLineStructure()) {
		case "Noun, Verb, Adverb":
			while (syllablesUsed != numSyllables && lineIncomplete) {
				line = "";
				syllablesUsed = 0;
				lineIncomplete = true;
				line = firstLetterCapitalized(noun.value) + "&nbsp;";
				syllablesUsed += noun.syllableCount;
				line = line + verb.value + "&nbsp;";
				syllablesUsed += verb.syllableCount;
				line = line + adverb.value;
				syllablesUsed += adverb.syllableCount;
				lineIncomplete = false;
			}
		case "Interjection, Pronoun, Verb":
			while (syllablesUsed != numSyllables && lineIncomplete) {
				line = "";
				syllablesUsed = 0;
				lineIncomplete = true;
				if (getRandomNumber(0,1) == 0) {
					line = firstLetterCapitalized(interjection.value) + "!" + "&nbsp;";
				}
				else {
					line = firstLetterCapitalized(interjection.value) + "," + "&nbsp;";
				}
				syllablesUsed += interjection.syllableCount;
				line = line + pronoun.value + "&nbsp;";
				syllablesUsed += pronoun.syllableCount;
				line = line + verb.value;
				syllablesUsed += verb.syllableCount;
				lineIncomplete = false;
			}
		case "Preposition, Noun, Pronoun, Verb":
			while (syllablesUsed != numSyllables && lineIncomplete) {
				line = "";
				syllablesUsed = 0;
				lineIncomplete = true;
				line = firstLetterCapitalized(preposition.value) + "&nbsp;";
				syllablesUsed += preposition.syllableCount;
				line = line + pronoun.value + "&nbsp;";
				syllablesUsed += pronoun.syllableCount;
				line = line + verb.value;
				syllablesUsed += verb.syllableCount;
				lineIncomplete = false;
			}
	}
	return line;
}

function getRandomLineStructure() {
	return lineStructureOptions[(getRandomNumber(0,lineStructureOptions.length-1))];
}

function getRandomWord(wordType) {
	var word = {};
	switch (wordType) {
		case "Noun":
			wordIndex = getRandomNumber(0,dictionary.nounCount-1);
			word = {
				value:dictionary.nouns[wordIndex],
				syllableCount:dictionary.nounSyllableCounts[wordIndex]
			};
		case "Pronoun":
			wordIndex = getRandomNumber(0,dictionary.pronounCount-1);
			word = {
				value:dictionary.pronouns[wordIndex],
				syllableCount:dictionary.pronounSyllableCounts[wordIndex]
			};
		case "Verb":
			wordIndex = getRandomNumber(0,dictionary.verbCount-1);
			word = {
				value:dictionary.verbs[wordIndex],
				syllableCount:dictionary.verbSyllableCounts[wordIndex]
			};
		case "Adjective":
			wordIndex = getRandomNumber(0,dictionary.adjectiveCount-1);
			word = {
				value:dictionary.adjectives[wordIndex],
				syllableCount:dictionary.adjectiveSyllableCounts[wordIndex]
			};
		case "Adverb":
			wordIndex = getRandomNumber(0,dictionary.adverbCount-1);
			word = {
				value:dictionary.adverbs[wordIndex],
				syllableCount:dictionary.adverbSyllableCounts[wordIndex]
			};
		case "Preposition":
			wordIndex = getRandomNumber(0,dictionary.prepositionCount-1);
			word = {
				value:dictionary.prepositions[wordIndex],
				syllableCount:dictionary.prepositionSyllableCounts[wordIndex]
			};
		case "Conjunction":
			wordIndex = getRandomNumber(0,dictionary.conjunctionCount-1);
			word = {
				value:dictionary.conjunctions[wordIndex],
				syllableCount:dictionary.conjunctionSyllableCounts[wordIndex]
			};
		case "Interjection":
			wordIndex = getRandomNumber(0,dictionary.interjectionCount-1);
			word = {
				value:dictionary.interjections[wordIndex],
				syllableCount:dictionary.interjectionSyllableCounts[wordIndex]
			};
	}
	return word;
}

function getRandomHaiku() {
	var haiku = new Haiku();
	haiku.firstLine = getRandomLine(haiku.firstLineSyllables);
	haiku.secondLine = getRandomLine(haiku.secondLineSyllables);
	haiku.thirdLine = getRandomLine(haiku.thirdLineSyllables);
	return haiku;
}

$(function() {
	console.log(getRandomHaiku());
});