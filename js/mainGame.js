const gameData = {
    "1": {
        "text": "A brilliant star appears in the night sky. Something about it feels like an invitation. You're joining a group to follow it. What do you bring?",
        "image": "smaller_images/nightfalls.png",
        "choices": {
            "Bread and water - practical things that keep people alive": [2, ["Potato", "Tomato", "Onion"]],
            "A small gift - something to offer strangers": [2, ["Green Bean", "Pumpkin"]],
            "A journal - to remember what you see": [2, ["Broccoli", "Leek"]],
            "Just yourself - traveling light means traveling free": [2, ["Jalapeno", "Napa Cabbage"]]
        }
    },
    "2": {
        "text": "Your group gathers at dawn. The road splits four ways. A merchant suggests one path, a shepherd another. Which way?",
        "image": "smaller_images/where_to.png",
        "choices": {
            "The valley road - well-traveled and safe": [3, ["Potato", "Onion"]],
            "The hill path - harder, but closer to the star": [4, ["Jalapeno", "Garlic", "Broccoli"]],
            "The river route - slower, but the water guides you": [5, ["Pumpkin", "Napa Cabbage"]],
            "Straight into the wilderness - the star points that way": [6, ["Jalapeno", "Garlic"]]
        }
    },

    // ========== VALLEY PATH ==========
    "3": {
        "text": "The valley road is wide and easy. By midday, you pass a woman sitting alone by a well, face in her hands.",
        "image": "smaller_images/dandelion.png",
        "choices": {
            "Stop and ask if she needs help": [31, ["Green Bean", "Pumpkin"]],
            "Leave food nearby and keep moving": [31, ["Onion", "Potato"]],
            "Keep walking - the group is moving ahead": [31, ["Tomato"]],
            "Tell the group to wait while you sit with her": [31, ["Pumpkin", "Napa Cabbage", "Carrot"]]
        }
    },
    "31": {
        "text": "Her son is sick. She's walked two days to find a healer and has none left to give. Your group is getting restless. 'We should keep moving,' someone mutters.",
        "image": "smaller_images/dandelion.png",
        "choices": {
            "Offer to help her, even if it delays everyone": [7, ["Pumpkin", "Green Bean"]],
            "Give her directions and supplies, then catch up": [7, ["Potato", "Onion"]],
            "Encourage her with words, then continue on": [7, ["Napa Cabbage", "Tomato"]],
            "Ask the group to vote": [7, ["Broccoli", "Green Bean"]]
        }
    },
    "7": {
        "text": "The afternoon sun beats down. Ahead, a village - but the streets are empty. The doors are shut. Something is wrong.",
        "image": "smaller_images/placeholder.png",
        "choices": {
            "Continue": [8, []]
        }
    },
    "8": {
        "text": "An old man emerges. 'Soldiers took everything,' he says. 'We have nothing left.' He pauses. 'Unless... you've come to help?'",
        "image": "smaller_images/placeholder.png",
        "choices": {
            "\"We'll share what we can.\"": [9, ["Green Bean", "Pumpkin"]],
            "\"Tell us what happened.\"": [9, ["Broccoli", "Carrot"]],
            "\"We're just passing through. We'll pray for you.\"": [49, ["Tomato", "Napa Cabbage"]]
        }
    },
    "9": {
        "text": "The villagers haven't eaten in two days. An argument breaks out - one traveler insists you need your food for the road. What do you do?",
        "image": "smaller_images/placeholder.png",
        "choices": {
            "\"We give what we have. Somehow there will be enough.\"": [48, ["Green Bean", "Pumpkin", "Napa Cabbage"]],
            "\"Half for them, half for us.\"": [48, ["Broccoli", "Potato"]],
            "\"We need our supplies. We'll send help later.\"": [55, ["Tomato", "Potato"]]
        }
    },
    "48": {
        "text": "You share your food. An elderly woman presses a small clay lamp into your hand. 'For the dark roads ahead,' she whispers.",
        "image": "smaller_images/placeholder.png",
        "choices": {
            "Accept it gratefully": [49, ["Pumpkin", "Green Bean"]],
            "Try to refuse - they need it more": [49, ["Onion", "Potato"]],
            "Thank her and promise to use it well": [49, ["Broccoli", "Leek"]]
        }
    },
    "55": {
        "text": "Your group leaves with full packs but heavy hearts. 'Did we do the right thing?' someone asks.",
        "image": "smaller_images/placeholder.png",
        "choices": {
            "\"We made the hard choice.\"": [49, ["Tomato", "Potato"]],
            "\"I don't know. But we keep going.\"": [49, ["Broccoli", "Napa Cabbage"]],
            "\"We'll make it right. We'll send help back.\"": [49, ["Green Bean", "Carrot"]]
        }
    },
    "49": {
        "text": "Night falls. Around the fire, people share stories - where they're from, why they're following the star.",
        "image": "smaller_images/nightfalls.png",
        "choices": {
            "Share your own story": [10, ["Green Bean", "Jalapeno"]],
            "Listen more than you speak": [10, ["Leek", "Broccoli"]],
            "Ask others what they hope to find": [10, ["Carrot", "Tomato"]]
        }
    },
    "10": {
        "text": "A child tugs your sleeve. 'What if the star leads nowhere?' she whispers. 'What if we're lost?'",
        "image": "smaller_images/nightfalls.png",
        "choices": {
            "\"God wouldn't lead us this far just to leave us lost.\"": [43, ["Napa Cabbage", "Broccoli"]],
            "\"Even if we don't know where it leads, we have each other.\"": [43, ["Green Bean", "Pumpkin"]],
            "\"Being scared is okay. I am too, sometimes.\"": [43, ["Carrot", "Leek"]],
            "Sit with her quietly until she feels better": [43, ["Pumpkin", "Napa Cabbage"]]
        }
    },
    "43": {
        "text": "You wake to shouting. Torches approaching in the darkness. Soldiers? Bandits? The group looks to you.",
        "image": "smaller_images/nightfalls.png",
        "choices": {
            "\"Everyone hide. Stay quiet.\"": [11, ["Broccoli", "Potato"]],
            "\"Let's approach calmly. Running looks suspicious.\"": [39, ["Jalapeno", "Green Bean", "Garlic"]],
            "\"Protect the children. Everyone else, form a line.\"": [39, ["Garlic", "Onion", "Carrot"]]
        }
    },
    "11": {
        "text": "You crouch in the shadows. The torches stop nearby. 'Travelers!' a voice calls. 'We're shepherds - we saw your fire. Do you need help?'",
        "image": "smaller_images/nightfalls.png",
        "choices": {
            "Step out and greet them": [39, ["Green Bean", "Jalapeno"]],
            "Accept their kindness cautiously": [39, ["Broccoli", "Potato"]],
            "Call back: \"Who's asking?\"": [39, ["Carrot", "Garlic"]]
        }
    },
    "39": {
        "text": "The shepherds share what they know: 'The road ahead is blocked. Soldiers have a checkpoint. You'll need another way.'",
        "image": "smaller_images/placeholder.png",
        "choices": {
            "\"Is there a path around?\"": [40, ["Tomato", "Broccoli"]],
            "\"Could one of you guide us?\"": [40, ["Pumpkin", "Green Bean"]],
            "\"We'll figure it out.\"": [40, ["Jalapeno", "Garlic"]],
            "\"Then we wait.\"": [40, ["Broccoli", "Potato"]]
        }
    },
    "40": {
        "text": "A young shepherd speaks up. 'I know a hidden path. I could show you... but I'd have to leave my flock.'",
        "image": "smaller_images/placeholder.png",
        "choices": {
            "\"Just point us the right direction.\"": [42, ["Tomato", "Potato"]],
            "\"Come with us. Your flock will be fine.\"": [42, ["Jalapeno", "Green Bean"]],
            "\"What if some of us stay to watch your flock?\"": [42, ["Onion", "Carrot"]],
            "\"Stay with what matters to you.\"": [42, ["Pumpkin", "Napa Cabbage"]]
        }
    },
    "42": {
        "text": "The shepherds share bread from their packs. For a moment, strangers feel like family. 'May you find what you're seeking,' one says.",
        "image": "smaller_images/placeholder.png",
        "choices": {
            "\"I hope so too.\"": [44, ["Napa Cabbage", "Pumpkin"]],
            "\"Maybe we already have.\"": [44, ["Leek", "Broccoli"]],
            "\"We'll carry your kindness with us.\"": [44, ["Green Bean", "Carrot"]]
        }
    },
    "44": {
        "text": "Morning. The crisis has passed. The road is clear. Your group gathers, lighter than before but somehow stronger.",
        "image": "smaller_images/another_day.png",
        "choices": {
            "\"Let's move. The star is still there.\"": [12, ["Tomato", "Jalapeno"]],
            "\"Let's take a moment to give thanks.\"": [12, ["Napa Cabbage", "Broccoli"]],
            "\"Does anyone need rest first?\"": [12, ["Onion", "Pumpkin"]]
        }
    },
    "12": {
        "text": "The hills grow taller, the air cooler. You're getting closer. The star seems brighter every night.",
        "image": "smaller_images/evergetable_climb.png",
        "choices": {
            "\"I think we're almost there.\"": [19, ["Jalapeno", "Green Bean"]],
            "\"Stay alert. We don't know what's ahead.\"": [19, ["Broccoli", "Carrot"]],
            "\"Whatever happens, I'm glad I came.\"": [19, ["Pumpkin", "Leek"]]
        }
    },

    // ========== HILLS PATH ==========
    "4": {
        "text": "The shepherd's path winds upward. The going is slow, but the star seems closer here. By afternoon, the trail forks.",
        "image": "smaller_images/base_evergetable.png",
        "choices": {
            "Take the steeper path - harder but faster": [15, ["Jalapeno", "Tomato"]],
            "Take the gentler path - safer for everyone": [15, ["Pumpkin", "Onion"]],
            "Ask the group which way": [15, ["Broccoli", "Green Bean"]]
        }
    },
    "15": {
        "text": "You reach a cave where an old hermit lives. He offers shelter. 'Few come this way,' he says. 'What brings you?'",
        "image": "smaller_images/cave.png",
        "choices": {
            "\"We're following the star. Do you know what it means?\"": [16, ["Leek", "Broccoli"]],
            "\"We're searching for something. We're not sure what.\"": [16, ["Napa Cabbage", "Potato"]],
            "\"Just travelers. Thank you for the shelter.\"": [16, ["Tomato", "Onion"]]
        }
    },
    "16": {
        "text": "The hermit stirs his fire. 'I've watched that star for weeks. Those who follow it... they don't come back the same.'",
        "image": "smaller_images/cave.png",
        "choices": {
            "\"What do you mean?\"": [17, ["Leek", "Carrot"]],
            "\"We should rest.\"": [17, ["Potato", "Onion"]],
            "\"Will you share a story with us?\"": [17, ["Green Bean", "Pumpkin"]]
        }
    },
    "17": {
        "text": "You wake to find the hermit gone - but he's left a gift by the entrance: a walking stick with strange markings.",
        "image": "smaller_images/cave.png",
        "choices": {
            "Continue": [50, []]
        }
    },
    "50": {
        "text": "The trail grows treacherous. One of your companions stumbles - badly twisted ankle. They can't walk.",
        "image": "smaller_images/evergetable_climb.png",
        "choices": {
            "\"We stop. No one gets left behind.\"": [18, ["Pumpkin", "Garlic"]],
            "\"Let's make a splint. We go together, slowly.\"": [18, ["Onion", "Broccoli"]],
            "\"I'll stay with them. The rest go ahead.\"": [18, ["Potato", "Napa Cabbage"]],
            "\"Who can carry them?\"": [18, ["Jalapeno", "Green Bean"]]
        }
    },
    "18": {
        "text": "You reach the summit. The view steals your breath - valleys below, villages glittering, and the star impossibly bright ahead.",
        "image": "smaller_images/evergetable_climb.png",
        "choices": {
            "\"It's beautiful. Worth everything.\"": [19, ["Leek", "Pumpkin"]],
            "\"That's where we're heading. Let's go.\"": [19, ["Jalapeno", "Tomato"]],
            "\"Is everyone alright? Let's rest.\"": [19, ["Onion", "Green Bean"]]
        }
    },

    // ========== RIVER PATH ==========
    "5": {
        "text": "The river path winds through green valleys. Easy walking. By midday, children are playing by the bank, throwing stones.",
        "image": "smaller_images/dandelion.png",
        "choices": {
            "Stop and play with them": [28, ["Green Bean", "Jalapeno"]],
            "Wave and smile as you pass": [28, ["Pumpkin", "Napa Cabbage"]],
            "Ask where their parents are": [28, ["Onion", "Carrot"]],
            "Keep your eyes on the path": [28, ["Tomato", "Broccoli"]]
        }
    },
    "28": {
        "text": "A child runs up. 'Are you following the star? My grandmother says something important is coming.' He looks at you. 'Are you important people?'",
        "image": "smaller_images/dandelion.png",
        "choices": {
            "\"We're just travelers. But maybe that's important too.\"": [45, ["Napa Cabbage", "Broccoli"]],
            "\"We don't know yet.\"": [45, ["Potato", "Leek"]],
            "Laugh. \"What do you think?\"": [45, ["Jalapeno", "Green Bean"]],
            "\"Important things aren't always about important people.\"": [45, ["Pumpkin", "Carrot"]]
        }
    },
    "45": {
        "text": "The children lead you to their village. An ancient grandmother meets you. 'Sit. Eat. Then tell me about this star.'",
        "image": "smaller_images/at_apartment.png",
        "choices": {
            "Sit and share everything": [29, ["Green Bean", "Pumpkin"]],
            "Ask what she thinks first": [29, ["Broccoli", "Carrot"]],
            "Politely decline - you should keep moving": [29, ["Tomato", "Potato"]]
        }
    },
    "29": {
        "text": "The grandmother grips your hand. 'I've lived ninety years. This star feels like a beginning.' She whispers: 'Don't give up.'",
        "image": "smaller_images/at_apartment.png",
        "choices": {
            "Thank her and hold her words close": [30, ["Napa Cabbage", "Pumpkin"]],
            "Ask for her blessing": [30, ["Broccoli", "Leek"]],
            "Promise to return and tell her what you find": [30, ["Green Bean", "Carrot"]]
        }
    },
    "30": {
        "text": "Morning. A young man approaches. 'I want to see what's beyond these hills. Can I come with you?'",
        "image": "smaller_images/another_day.png",
        "choices": {
            "\"Of course. The more the better.\"": [46, ["Green Bean", "Pumpkin"]],
            "\"It won't be easy. Are you sure?\"": [46, ["Tomato", "Broccoli"]],
            "\"Ask your family first. We'll wait.\"": [46, ["Napa Cabbage", "Onion"]],
            "\"We barely know you. Why should we trust you?\"": [46, ["Carrot", "Potato"]]
        }
    },
    "46": {
        "text": "Trouble ahead - the river has flooded the trail. A shaky log bridge offers one way across. The long way around costs half a day.",
        "image": "smaller_images/placeholder.png",
        "choices": {
            "\"We cross. Carefully, one at a time.\"": [56, ["Jalapeno", "Garlic"]],
            "\"We take the long way. Safety first.\"": [56, ["Potato", "Onion"]],
            "\"I'll test it first.\"": [56, ["Jalapeno", "Green Bean"]],
            "\"Can we make this safer?\"": [56, ["Broccoli", "Carrot"]]
        }
    },
    "56": {
        "text": "You make it across - wet, tired, but together. The star hangs low ahead. You're getting close.",
        "image": "smaller_images/placeholder.png",
        "choices": {
            "Press on with new energy": [32, ["Jalapeno", "Tomato"]],
            "Catch your breath": [32, ["Potato", "Broccoli"]],
            "Gather the group for encouragement": [32, ["Garlic", "Green Bean"]]
        }
    },
    "32": {
        "text": "On the plain, you spot another group - also following the star. Better equipped. Moving faster.",
        "image": "smaller_images/placeholder.png",
        "choices": {
            "\"Let's catch them. Strength in numbers.\"": [19, ["Green Bean", "Garlic"]],
            "\"Let them go. We'll arrive when we arrive.\"": [19, ["Pumpkin", "Potato"]],
            "\"Let's try to talk to them.\"": [19, ["Tomato", "Carrot"]]
        }
    },

    // ========== WILDERNESS PATH ==========
    "6": {
        "text": "No paths. No markers. Just open land under endless sky. The star is your only guide. Some are already questioning the choice.",
        "image": "smaller_images/placeholder.png",
        "choices": {
            "\"Trust the journey.\"": [33, ["Napa Cabbage", "Jalapeno"]],
            "\"If anyone wants to turn back, now's the time.\"": [33, ["Broccoli", "Potato"]],
            "\"We take turns navigating. We're in this together.\"": [33, ["Green Bean", "Garlic"]]
        }
    },
    "33": {
        "text": "Third night. An abandoned campsite - cold fire pit, scattered supplies, torn tent. Someone was here before you.",
        "image": "smaller_images/placeholder.png",
        "choices": {
            "Search for clues": [34, ["Leek", "Carrot"]],
            "Gather useful supplies": [36, ["Potato", "Onion"]],
            "Say a prayer for whoever was here": [34, ["Napa Cabbage", "Pumpkin"]],
            "Keep moving - this place feels wrong": [36, ["Tomato", "Jalapeno"]]
        }
    },
    "34": {
        "text": "You find a journal. Last entry: 'The star grows brighter. We're close. But something is following us.' The next page is blank.",
        "image": "smaller_images/placeholder.png",
        "choices": {
            "\"We need to be careful.\"": [37, ["Broccoli", "Carrot"]],
            "\"They made it further. So can we.\"": [37, ["Jalapeno", "Tomato"]],
            "\"Should we try to find them?\"": [37, ["Green Bean", "Pumpkin"]],
            "Keep the journal": [37, ["Leek", "Broccoli"]]
        }
    },
    "36": {
        "text": "The supplies include water and dried meat. As you pack them, a noise in the darkness.",
        "image": "smaller_images/nightfalls.png",
        "choices": {
            "Call out: \"Who's there?\"": [37, ["Green Bean", "Jalapeno"]],
            "Grab something to defend yourself": [37, ["Onion", "Garlic"]],
            "Stay still and listen": [37, ["Broccoli", "Leek"]],
            "Wake the others quietly": [37, ["Potato", "Carrot"]]
        }
    },
    "37": {
        "text": "Just a fox. The wilderness is full of small frights. Morning brings cultivated land - farms, roads, signs of life.",
        "image": "smaller_images/another_day.png",
        "choices": {
            "Continue": [38, []]
        }
    },
    "38": {
        "text": "A farmer waves you over. 'Star-followers! You're the third group this week!' He offers water and shade.",
        "image": "smaller_images/placeholder.png",
        "choices": {
            "Accept gratefully": [19, ["Pumpkin", "Napa Cabbage"]],
            "Ask about the other groups": [19, ["Leek", "Carrot"]],
            "\"Which way did they go?\"": [19, ["Tomato", "Jalapeno"]],
            "Help with his work in exchange": [19, ["Onion", "Potato"]]
        }
    },

    // ========== SHARED FINAL SECTION ==========
    "19": {
        "text": "The final stretch. The star hangs just above a distant ridge. Then you see it: a checkpoint ahead. Soldiers stopping travelers.",
        "image": "smaller_images/placeholder.png",
        "choices": {
            "\"Let me do the talking.\"": [20, ["Garlic", "Jalapeno"]],
            "\"We approach together.\"": [20, ["Green Bean", "Pumpkin"]],
            "\"Is there a way around?\"": [20, ["Broccoli", "Potato"]],
            "\"Stay calm. We have nothing to hide.\"": [20, ["Napa Cabbage", "Tomato"]]
        }
    },
    "20": {
        "text": "A soldier stops you. 'What business here?' He looks tired. 'Strange travelers all week, following some star.' He squints. 'That what you're doing?'",
        "image": "smaller_images/placeholder.png",
        "choices": {
            "\"Yes. We're seeking what it leads to.\"": [21, ["Jalapeno", "Leek"]],
            "\"We're pilgrims. Passing through peacefully.\"": [21, ["Napa Cabbage", "Pumpkin"]],
            "\"Just travelers. Curious about the world.\"": [21, ["Tomato", "Broccoli"]]
        }
    },
    "21": {
        "text": "The soldier nods. 'I've thought about following it myself.' He waves you through. 'If you find what you're looking for - remember those who couldn't come.'",
        "image": "smaller_images/placeholder.png",
        "choices": {
            "\"Come with us. It's not too late.\"": [22, ["Green Bean", "Jalapeno"]],
            "\"We'll remember. Thank you.\"": [22, ["Pumpkin", "Napa Cabbage"]],
            "\"Maybe one day you'll follow your own star.\"": [22, ["Tomato", "Carrot"]]
        }
    },
    "22": {
        "text": "The final ridge. The star blazes directly overhead, brighter than you've ever seen. You reach the top and look down into a small valley. A humble stable. And then you hear it - a baby crying.",
        "image": "smaller_images/nightfalls.png",
        "choices": {
            "Rush forward": [51, ["Jalapeno", "Green Bean"]],
            "Stand and take it in": [51, ["Leek", "Broccoli"]],
            "Look at your companions and smile": [51, ["Pumpkin", "Green Bean"]],
            "Fall to your knees": [51, ["Napa Cabbage", "Onion"]]
        }
    },
    "51": {
        "text": "The stable is warm. Simple. A young mother holds an infant. The star seems to rest directly above. You don't fully understand - but you know you were meant to be here.",
        "image": "smaller_images/placeholder.png",
        "choices": {
            "\"We found it.\"": [23, ["Jalapeno", "Green Bean"]],
            "Stay silent": [23, ["Napa Cabbage", "Broccoli"]],
            "Embrace whoever is beside you": [23, ["Pumpkin", "Green Bean"]],
            "Whisper a prayer": [23, ["Napa Cabbage", "Leek"]]
        }
    },
    "23": {
        "text": "Dawn breaks. Soon you'll decide what's next - stay, return home, or go somewhere new. But first, one question.",
        "image": "smaller_images/another_day.png",
        "choices": {
            "Continue": [24, []]
        }
    },
    "24": {
        "text": "An elder asks: 'What will you carry home from this journey? What changed in you?'",
        "image": "smaller_images/another_day.png",
        "choices": {
            "\"The journey matters as much as the destination.\"": [27, ["Broccoli", "Leek"]],
            "\"I learned to trust others - and myself.\"": [27, ["Pumpkin", "Green Bean"]],
            "\"Courage isn't the absence of fear.\"": [27, ["Jalapeno", "Carrot"]],
            "\"I'm still figuring that out.\"": [27, ["Potato", "Napa Cabbage"]]
        }
    },
    "27": {
        "text": "The sun rises. A new day. Your group prepares to leave. One more moment under the fading star.",
        "image": "smaller_images/another_day.png",
        "choices": {
            "Make a promise about how you'll live differently": [13, ["Tomato", "Broccoli"]],
            "Say goodbye to the star": [13, ["Leek", "Pumpkin"]],
            "Look ahead, ready for what's next": [13, ["Jalapeno", "Garlic"]],
            "Look back, honoring the journey": [13, ["Pumpkin", "Napa Cabbage"]]
        }
    },
    "13": {
        "text": "Home again - or wherever home is now. The star has faded but something remains. What do you do first?",
        "image": "smaller_images/backhome.png",
        "choices": {
            "Find a quiet place to pray and reflect": [0, ["Napa Cabbage", "Broccoli"]],
            "Return to your responsibilities with new purpose": [0, ["Tomato", "Onion"]],
            "Gather your loved ones and share what happened": [0, ["Green Bean", "Garlic"]],
            "Start planning the next journey": [0, ["Jalapeno", "Leek"]]
        }
    }
};

// --- Bible character results ---
const characterIds = [
    "Moses",
    "David",
    "Esther",
    "Ruth",
    "Daniel",
    "Joseph",
    "Peter",
    "Paul",
    "MaryMotherOfJesus",
    "MaryMagdalene",
    "Martha"
];

const characterDisplayName = {
    Moses: "Moses",
    David: "David",
    Esther: "Esther",
    Ruth: "Ruth",
    Daniel: "Daniel",
    Joseph: "Joseph",
    Peter: "Peter",
    Paul: "Paul",
    MaryMotherOfJesus: "Mary (Mother of Jesus)",
    MaryMagdalene: "Mary Magdalene",
    Martha: "Martha"
};

// Character images - add artwork here as images/characters/{CharacterId}.png
const characterImage = {
    Moses: "images/characters/Moses.png",
    David: "images/characters/David.png",
    Esther: "images/characters/Esther.png",
    Ruth: "images/characters/Ruth.png",
    Daniel: "images/characters/Daniel.png",
    Joseph: "images/characters/Joseph.png",
    Peter: "images/characters/Peter.png",
    Paul: "images/characters/Paul.png",
    MaryMotherOfJesus: "images/characters/MaryMotherOfJesus.png",
    MaryMagdalene: "images/characters/MaryMagdalene.png",
    Martha: "images/characters/Martha.png"
};

const characterCard = {
    Moses: {
        subtitle: "Leader and deliverer",
        description: "You step forward when people need direction. You value justice, perseverance, and guiding others through hard seasons."
    },
    David: {
        subtitle: "Bold heart and honest worship",
        description: "You're courageous and expressive. You take action, but you also feel deeply—and you learn through both victories and mistakes."
    },
    Esther: {
        subtitle: "Courage in the right moment",
        description: "You're brave when it matters most. You notice what's at stake, and you're willing to speak up to protect others."
    },
    Ruth: {
        subtitle: "Loyal and steadfast",
        description: "You show up for people. You value faithfulness, kindness, and walking with others one step at a time."
    },
    Daniel: {
        subtitle: "Wise and principled",
        description: "You stay steady under pressure. You look for truth, keep your integrity, and think clearly even when the world is loud."
    },
    Joseph: {
        subtitle: "Resilient and strategic",
        description: "You keep going even after setbacks. You're practical, patient, and able to turn hardship into something meaningful."
    },
    Peter: {
        subtitle: "Loyal and outspoken",
        description: "You're passionate and committed. You may act quickly, but your heart is in the right place—and you grow through the journey."
    },
    Paul: {
        subtitle: "Driven and persuasive",
        description: "You're focused and mission-minded. You value truth, clarity, and helping others see the bigger picture."
    },
    MaryMotherOfJesus: {
        subtitle: "Faithful and humble",
        description: "You trust deeply. You carry hope quietly, stay grounded, and bring peace to people around you."
    },
    MaryMagdalene: {
        subtitle: "Devoted and courageous witness",
        description: "You stay close through hard moments. You're brave, loyal, and willing to be the first to speak truth when others hesitate."
    },
    Martha: {
        subtitle: "Practical and hospitable",
        description: "You take care of what needs doing. You serve, organize, and protect the people you love—even when you're stressed."
    }
};

// Map the scoring tags to Bible character IDs
const scoreTagToCharacter = {
    "Garlic": "Moses",
    "Jalapeno": "David",
    "Carrot": "Esther",
    "Pumpkin": "Ruth",
    "Broccoli": "Daniel",
    "Potato": "Joseph",
    "Green Bean": "Peter",
    "Tomato": "Paul",
    "Napa Cabbage": "MaryMotherOfJesus",
    "Leek": "MaryMagdalene",
    "Onion": "Martha",
    "Bok Choy": "David"
};

const personalities = Object.fromEntries(characterIds.map(id => [id, 0]));

let currentState = 1;

function renderState(state) {
    const storyText = document.getElementById('story-text');
    const storyImage = document.getElementById('story-image');
    const choicesContainer = document.getElementById('choices');

    const img = new Image();
    img.src = gameData[state].image;

    img.onload = () => {
        storyImage.style.display = 'block';
        choicesContainer.style.display = 'flex';
        storyImage.src = img.src;
        storyText.textContent = gameData[state].text;
        choicesContainer.innerHTML = '';

        for (const [choice, info] of Object.entries(gameData[state].choices)) {
            const button = document.createElement('button');
            button.textContent = choice;
            button.className = 'choice-button';
            let nextState = info[0];
            button.onclick = () => changeState(nextState, info[1]);
            choicesContainer.appendChild(button);
        }
    };
    
    img.onerror = () => {
        // If image fails to load, still show the content
        storyImage.style.display = 'none';
        choicesContainer.style.display = 'flex';
        storyText.textContent = gameData[state].text;
        choicesContainer.innerHTML = '';

        for (const [choice, info] of Object.entries(gameData[state].choices)) {
            const button = document.createElement('button');
            button.textContent = choice;
            button.className = 'choice-button';
            let nextState = info[0];
            button.onclick = () => changeState(nextState, info[1]);
            choicesContainer.appendChild(button);
        }
    };
}


function changeState(newState, selectedPersonalities) { 
    selectedPersonalities.forEach(tag => {
        const characterId = scoreTagToCharacter[tag];
        if (!characterId) return;
        personalities[characterId]++;
    });

    currentState = newState;

    if (currentState === 0) {
        revealResult();
    } else {
        renderState(currentState);
    }
}

function revealResult() {
    let maxCount = -1;
    let maxCharacterId = characterIds[0];

    for (const [characterId, count] of Object.entries(personalities)) {
        if (count > maxCount) {
            maxCount = count;
            maxCharacterId = characterId;
        }
    }

    const storyImage = document.getElementById('story-image');
    const text = document.getElementById('story-text');
    const choicesContainer = document.getElementById('choices');

    storyImage.style.display = 'none';
    choicesContainer.style.display = 'none';

    const displayName = characterDisplayName[maxCharacterId] ?? maxCharacterId;
    const meta = characterCard[maxCharacterId] ?? { subtitle: "", description: "" };
    const imagePath = characterImage[maxCharacterId];

    // Build image HTML if artwork exists
    const imgElement = new Image();
    imgElement.src = imagePath;
    imgElement.onload = () => {
        const imgContainer = document.getElementById('result-image');
        if (imgContainer) {
            imgContainer.innerHTML = `<img src="${imagePath}" alt="${displayName}" class="result-character-image">`;
        }
    };

    text.innerHTML = `
      <div class="result-card">
        <div id="result-image" class="result-image-container"></div>
        <div class="result-title">You are: ${displayName}</div>
        <div class="result-subtitle">${meta.subtitle}</div>
        <p class="result-body">${meta.description}</p>
        <div class="result-actions" id="result-actions"></div>
      </div>
    `;

    const actions = document.getElementById('result-actions');

    const shareButton = document.createElement('button');
    shareButton.textContent = 'Copy share link';
    shareButton.className = 'choice-button';
    shareButton.onclick = () => {
        const shareMessage = `I got "${displayName}" in the Bible Character quiz. Try it: https://jared912.github.io/Bible-Quiz-V2/`;
        navigator.clipboard.writeText(shareMessage).then(() => {
            alert('Copied!');
        }).catch(() => {
            alert('Could not copy automatically. You can manually share: https://jared912.github.io/Bible-Quiz-V2/');
        });
    };

    const playAgainButton = document.createElement('button');
    playAgainButton.textContent = 'Play again';
    playAgainButton.className = 'choice-button';
    playAgainButton.onclick = () => resetGame();

    actions.appendChild(shareButton);
    actions.appendChild(playAgainButton);
}

function resetGame() {
    for (const id of characterIds) personalities[id] = 0;
    currentState = 1;
    renderState(currentState);
}


function startGame() {
    document.querySelector('.title').style.display = 'none';
    document.getElementById('homescreen').style.display = 'none';
    document.querySelector('.start-button').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    renderState(currentState);
}

window.onload = () => {
    renderState(currentState);
}
