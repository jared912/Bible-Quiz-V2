const gameData = {
    "1": {
        "text": "You’re about to set out on a long journey with your companions. Before you leave, you pack one last thing for the road. What do you prioritize?",
        "image": "smaller_images/snackies.png",
        "choices": {
            "Practical supplies (water, bread, and a plan)": [2, ["Tomato", "Potato"]],
            "A small gift to share with strangers": [2, ["Green Bean", "Pumpkin"]],
            "A written reminder of your purpose": [2, ["Broccoli", "Napa Cabbage"]],
            "A bold choice that says, “We’ll be fine”": [2, ["Jalapeno", "Bok Choy"]]
        }
    },
    "2": {
        "text": "At the edge of the road, you must choose your first route. Where do you lead the group?",
        "image": "smaller_images/where_to.png",
        "choices": {
            "Along the shoreline (the breeze feels safe)": [3, ["Onion", "Green Bean", "Bok Choy"]],
            "To a quiet place of scrolls and learning": [4, ["Broccoli", "Tomato", "Leek", "Carrot"]],
            "To a friend’s house to regroup and plan": [5, ["Pumpkin", "Potato", "Napa Cabbage"]],
            "Up into the hills to get perspective": [6, ["Garlic", "Jalapeno"]]
        }
    },
    "3": {
        "text": "You arrive by the water. The crowd is loud, the day is bright, and your companions look to you. What do you do first?",
        "image": "smaller_images/at_beach.png",
        "choices": {
            "Gather everyone and set a clear direction": [41, ["Garlic"]],
            "Make sure everyone is fed and included": [41, ["Green Bean", "Bok Choy", "Pumpkin"]],
            "Observe carefully and look for what others miss": [41, ["Leek", "Carrot"]],
            "Find a quiet moment to reflect and think": [41, ["Broccoli", "Tomato"]]
        }
    },
    "41": {
        "text": "For a moment, everything feels peaceful. Then you notice something: the mood of your group is shifting. What thought rises first in your mind?",
        "image": "smaller_images/having_beach_fun.png",
        "choices": {
            "“I’m grateful—let’s keep everyone steady.”": [7, ["Garlic", "Napa Cabbage"]],
            "“This is a chance to bring people together.”": [7, ["Green Bean", "Bok Choy", "Pumpkin", "Tomato"]],
            "“Something feels off—let’s stay alert.”": [7, ["Leek", "Carrot"]],
            "“We should be ready for unexpected danger.”": [7, ["Broccoli", "Onion"]]
        }
    },
    "7": {
        "text": "Suddenly, everything changes. A shadow falls, the world turns dark, and you’re swept away before you can react…",
        "image": "smaller_images/beach_disaster.png",
        "choices": {
            "Continue": [8, []]
        }
    },
    "8": {
        "text": "You regain your senses in a cramped storage room. Footsteps pass outside. You need to move—fast. What’s your first move?",
        "image": "smaller_images/in_pantry.png",
        "choices": {
            "Act immediately and force an exit": [9, ["Jalapeno"]],
            "Move carefully and plan each step": [9, ["Tomato", "Potato"]],
            "Listen to the one person with a strong instinct": [19, ["Carrot"]]
        }
    },
    "9": {
        "text": "The window won’t open. Your group looks at you. What do you choose?",
        "image": "smaller_images/window_locked.png",
        "choices": {
            "Take an alternate route you can’t fully see yet": [19, ["Napa Cabbage", "Tomato", "Potato"]],
            "Work the problem patiently until it gives": [48, ["Carrot", "Broccoli", "Onion"]],
            "Make noise and break through—consequences later": [55, ["Jalapeno", "Green Bean"]]
        }
    },
    "48": {
        "text": "It works—the window finally gives. You’re out… but not safe yet. What now?",
        "image": "smaller_images/window_jump.png",
        "choices": {
            "Jump without hesitation": [49, ["Jalapeno", "Garlic", "Broccoli"]],
            "Check for a safe landing first": [49, ["Leek", "Tomato", "Napa Cabbage"]],
            "Ask someone else to go first": [49, ["Potato"]]
        }
    },
    "55": {
        "text": "You force your way out with a loud crash. You’re free—but you’ve drawn attention. How do you respond?",
        "image": "smaller_images/breaking_window.png",
        "choices": {
            "Stay calm and think clearly": [49, ["Tomato"]],
            "Move fast and lead everyone out": [49, ["Broccoli", "Garlic"]],
            "Keep spirits up—don’t let fear win": [49, ["Pumpkin", "Green Bean", "Bok Choy"]]
        }
    },
    "49": {
        "text": "A strange doorway opens—and reality shifts. You’re somewhere you don’t understand. Your group needs a way forward. What’s your approach?",
        "image": "smaller_images/corn_space.png",
        "choices": {
            "Try the obvious control first and see what happens": [10, ["Bok Choy"]],
            "Test carefully and gather information as you go": [10, ["Onion", "Green Bean"]]
        }
    },
    "10": {
        "text": "Your choice launches you into motion. You can’t control everything, but you can choose how you respond.",
        "image": "smaller_images/space_travel.png",
        "choices": {
            "Stay calm and trust there’s a purpose": [43, ["Napa Cabbage"]],
            "Worry quietly, but keep going anyway": [43, ["Potato", "Broccoli"]],
            "Look for patterns and clues to guide you": [43, ["Leek"]]
        }
    },
    "43": {
        "text": "“Where are we?” someone asks. Your group is waiting for you to decide the next step.",
        "image": "smaller_images/space_confusion.png",
        "choices": {
            "Act fast—try something and see what opens": [11, ["Jalapeno", "Onion"]],
            "Search for guidance and understand the situation": [39, ["Leek", "Tomato", "Broccoli"]],
            "Gather the group and give a steady plan": [39, ["Garlic"]]
        }
    },
    "11": {
        "text": "In the chaos, a strange light appears. Your companions look to you, startled.",
        "image": "smaller_images/glowing_space_orb.png",
        "choices": {
            "Stay gentle and calm the fear": [42, ["Potato", "Napa Cabbage"]],
            "Protect the group and seek cover": [42, ["Onion"]],
            "Step forward with confidence": [42, ["Bok Choy"]]
        }
    },
    "42": {
        "text": "A messenger appears—unexpected help. You have a moment to respond before you’re moved again.",
        "image": "smaller_images/glowing_popcorn.png",
        "choices": {
            "Accept help quietly": [12, ["Potato"]],
            "Celebrate with your friends": [12, ["Pumpkin", "Green Bean", "Jalapeno"]],
            "Ask how you can make things right": [12, ["Onion", "Carrot"]]
        }
    },
    "39": {
        "text": "You find guidance and make a plan. Now you must choose how to act on it.",
        "image": "smaller_images/spaceplan.png",
        "choices": {
            "Act boldly—time matters": [40, ["Jalapeno", "Green Bean", "Broccoli"]],
            "Double-check details before committing": [40, ["Broccoli", "Carrot"]],
            "Let someone else take the risky step": [40, ["Potato"]],
            "Invite everyone to commit together": [40, ["Napa Cabbage", "Green Bean"]]
        }
    },
    "40": {
        "text": "Right before the moment of action, someone panics. The whole group hesitates. How do you respond?",
        "image": "smaller_images/pull_lever.png",
        "choices": {
            "Own the fear out loud so others feel less alone": [44, ["Pumpkin", "Green Bean", "Carrot"]],
            "Re-explain the plan and steady everyone": [44, ["Onion", "Broccoli"]],
            "Step back and let another lead this moment": [44, ["Potato", "Tomato"]],
            "Comfort them first, then move forward": [44, ["Green Bean", "Napa Cabbage"]]
        }
    },
    "44": {
        "text": "At last, you reach a safe place. The crisis is over—but you are changed by it. What do you do first?",
        "image": "smaller_images/backhome.png",
        "choices": {
            "Celebrate loudly and let joy spill out": [13, ["Bok Choy", "Jalapeno"]],
            "Find a quiet place to recover": [13, ["Potato"]],
            "Gather people and tell the story": [13, ["Garlic"]],
            "Care for yourself first—your body is tired": [13, ["Pumpkin"]]
        }
    },
    "12": {
        "text": "The moment passes, and you find yourself safe again. Your group waits for your next move.",
        "image": "smaller_images/backhome.png",
        "choices": {
            "Replay what happened and hunt for meaning": [13, ["Bok Choy", "Leek"]],
            "Feel everything—relief and tears included": [13, ["Napa Cabbage"]],
            "Celebrate together and debrief out loud": [13, ["Tomato", "Jalapeno", "Carrot", "Broccoli"]],
            "Take a quiet breath and recover": [13, ["Pumpkin", "Leek"]]
        }
    },
    "4": {
        "text": "You enter a quiet room of scrolls and stories. What draws you in first?",
        "image": "smaller_images/which_book.png",
        "choices": {
            "A story of loyalty and kindness": [15, ["Napa Cabbage", "Pumpkin"]],
            "A long, thoughtful work that rewards patience": [15, ["Broccoli"]],
            "A mystery you can’t leave unsolved": [15, ["Leek", "Carrot"]],
            "Practical wisdom for daily life": [15, ["Onion"]]
        }
    },
    "15": {
        "text": "A few gatherings are happening nearby. Which do you join?",
        "image": "smaller_images/bookstore_activities.png",
        "choices": {
            "A discussion where everyone shares and listens": [16, ["Green Bean", "Pumpkin"]],
            "A challenge that rewards courage and curiosity": [16, ["Jalapeno", "Leek"]],
            "A storytelling circle where words shape hearts": [16, ["Onion", "Bok Choy", "Carrot"]]
        }
    },
    "16": {
        "text": "As you step back outside, the world shifts—like a storm you didn’t see coming. Your group is swept into chaos.",
        "image": "smaller_images/vortex.png",
        "choices": {
            "Accept the moment and keep your head": [17, ["Potato", "Green Bean", "Tomato"]],
            "Freeze with worry and hope it passes": [17, ["Napa Cabbage"]],
            "Hold people together—literally and emotionally": [17, ["Broccoli", "Onion", "Carrot"]],
            "Lean into the unknown with courage": [17, ["Jalapeno", "Pumpkin"]]
        }
    },
    "17": {
        "text": "The storm stops. It’s cold. Quiet. You’re in a sealed place and you need a way out.",
        "image": "smaller_images/in_fridge.png",
        "choices": {
            "Continue": [50, []]
        }
    },
    "50": {
        "text": "Time matters. How do you try to get free?",
        "image": "smaller_images/in_fridge.png",
        "choices": {
            "Wait, watch, and move at the right moment": [18, ["Broccoli", "Pumpkin"]],
            "Rally everyone and push together": [18, ["Jalapeno", "Bok Choy"]],
            "Look for the mechanism and outsmart it": [18, ["Onion", "Leek"]],
            "Follow the group and stay steady": [18, ["Potato"]]
        }
    },
    "18": {
        "text": "You’re out—but still not safe. How do you escape the building?",
        "image": "smaller_images/out_fridge.png",
        "choices": {
            "Take the boldest route available": [19, ["Jalapeno"]],
            "Move quietly and avoid attention": [19, ["Tomato", "Leek"]],
            "Take a risky shortcut": [9, ["Onion", "Bok Choy"]]
        }
    },
    "19": {
        "text": "The doorway leads to unfamiliar territory. Your group needs direction. What do you do first?",
        "image": "smaller_images/cheeseland.png",
        "choices": {
            "Take care of immediate needs before anything else": [20, ["Onion", "Green Bean"]],
            "Scout ahead and understand the terrain": [20, ["Leek", "Broccoli"]],
            "Ask the group and build unity": [20, ["Napa Cabbage", "Green Bean", "Pumpkin"]]
        }
    },
    "20": {
        "text": "A local leader confronts you. The wrong answer could make things worse. What do you say?",
        "image": "smaller_images/mad_gouda.png",
        "choices": {
            "Speak boldly and try to win them over": [21, ["Onion", "Potato", "Jalapeno", "Green Bean"]],
            "Apologize quickly and ask for a peaceful path forward": [21, ["Pumpkin", "Leek"]]
        }
    },
    "21": {
        "text": "You’re brought before someone powerful. You need their help. How do you present yourself?",
        "image": "smaller_images/cheese_castle.png",
        "choices": {
            "Approach with humility and calm respect": [22, ["Napa Cabbage", "Pumpkin"]],
            "Be direct and ask clearly for what you need": [22, ["Jalapeno", "Potato"]],
            "Use words and humor to disarm the room": [22, ["Bok Choy", "Onion", "Broccoli"]]
        }
    },
    "22": {
        "text": "You can’t read the reaction in the room. Do you change course or push through?",
        "image": "smaller_images/performance.png",
        "choices": {
            "Push through with confidence": [51, ["Bok Choy", "Garlic", "Carrot"]],
            "Pause and reassess carefully": [51, ["Tomato", "Leek"]],
            "Stay steady and keep your peace": [51, ["Napa Cabbage", "Broccoli"]]
        }
    },
    "51": {
        "text": "The leader considers you and asks a simple question: “What do you miss the most about home?”",
        "image": "smaller_images/happy_king.png",
        "choices": {
            "Peace, fresh air, and quiet": [23, ["Jalapeno", "Potato", "Napa Cabbage"]],
            "People—relationships and community": [23, ["Leek", "Green Bean", "Carrot"]],
            "Family warmth and care": [23, ["Pumpkin"]],
            "Purpose—learning and growing": [23, ["Bok Choy", "Broccoli"]]
        }
    },
    "23": {
        "text": "Help is offered. On the way back, you can choose one final stop. What do you pick?",
        "image": "smaller_images/boat.png",
        "choices": {
            "A place to think and plan for what’s next": [24, ["Tomato", "Onion", "Leek"]],
            "A place to rest, heal, and gather people": [25, ["Potato", "Napa Cabbage", "Green Bean", "Pumpkin", "Carrot"]],
            "A place to explore the unknown": [26, ["Jalapeno", "Onion", "Broccoli"]]
        }
    },
    "24": {
        "text": "You arrive at your stop. What do you do there?",
        "image": "smaller_images/mushroom.png",
        "choices": {
            "Make a plan and prepare wisely": [27, ["Tomato", "Carrot"]],
            "Gather courage and take initiative": [27, ["Bok Choy", "Carrot"]],
            "Do something kind for your companions": [27, ["Napa Cabbage", "Green Bean"]],
            "Stay focused on the mission—home matters": [27, ["Potato", "Garlic"]]
        }
    },
    "25": {
        "text": "You arrive at your stop. How do you use this time?",
        "image": "smaller_images/dandelion.png",
        "choices": {
            "Strengthen friendships and encourage the group": [27, ["Green Bean", "Carrot", "Bok Choy"]],
            "Offer hospitality and care to others": [27, ["Napa Cabbage", "Onion", "Pumpkin"]],
            "Check details and make sure the plan holds": [27, ["Tomato", "Garlic", "Leek"]]
        }
    },
    "26": {
        "text": "You arrive at your stop. What do you do?",
        "image": "smaller_images/forgetmenot.png",
        "choices": {
            "Explore and lead into the unknown": [27, ["Garlic", "Leek"]],
            "Care for the group and keep spirits steady": [27, ["Napa Cabbage", "Green Bean"]],
            "Stay practical—get back to the goal": [27, ["Tomato", "Potato"]],
            "Encourage courage and joy in others": [27, ["Jalapeno", "Pumpkin", "Carrot", "Carrot"]]
        }
    },
    "27": {
        "text": "You return home. What do you do first?",
        "image": "smaller_images/backhome.png",
        "choices": {
            "Celebrate with bold joy": [13, ["Jalapeno"]],
            "Rest and recover quietly": [13, ["Pumpkin"]],
            "Gather the community and tell the story": [13, ["Napa Cabbage", "Green Bean"]],
            "Serve and encourage your closest friends": [13, ["Pumpkin", "Garlic", "Carrot"]]
        }
    },
    "13": {
        "text": "Last question. After everything, what’s your next step the following morning?",
        "image": "smaller_images/another_day.png",
        "choices": {
            "Seek wisdom and quietly prepare": [0, ["Napa Cabbage", "Potato", "Carrot"]],
            "Return to your responsibilities with focus": [0, ["Tomato", "Leek"]],
            "Serve others and strengthen the community": [0, ["Pumpkin", "Green Bean", "Garlic"]],
            "Step out again with courage": [0, ["Jalapeno", "Bok Choy"]]
        }
    },
    "5": {
        "text": "You arrive at a friend’s home. This is a safe moment to plan. How do you spend it?",
        "image": "smaller_images/at_apartment.png",
        "choices": {
            "Encourage someone and build them up": [28, ["Carrot", "Pumpkin"]],
            "Keep things light and help people relax": [28, ["Bok Choy", "Potato"]],
            "Talk strategy and prepare for what’s next": [28, ["Tomato", "Garlic"]],
            "Listen closely—relationships matter": [28, ["Napa Cabbage"]]
        }
    },
    "28": {
        "text": "Someone steps away and you hear a sudden cry out. Your group freezes. How do you react?",
        "image": "smaller_images/apartment.png",
        "choices": {
            "React big—let everyone know this is serious": [45, ["Bok Choy", "Carrot"]],
            "Call out and move toward the sound": [45, ["Green Bean", "Garlic"]],
            "Worry quietly and look for the safest next step": [45, ["Tomato", "Pumpkin", "Onion"]]
        }
    },
    "45": {
        "text": "There’s no response. You need to decide how to move.",
        "image": "smaller_images/no_response.png",
        "choices": {
            "Lead from the front": [29, ["Broccoli", "Garlic"]],
            "Stay close to the group and keep unity": [29, ["Napa Cabbage", "Green Bean"]],
            "Hang back and avoid risk": [29, ["Tomato", "Pumpkin", "Carrot"]]
        }
    },
    "29": {
        "text": "You reach the room. Something is wrong. Where do you look first?",
        "image": "smaller_images/room.png",
        "choices": {
            "Step back and think first": [30, ["Tomato"]],
            "Look for small clues and details": [30, ["Leek"]],
            "Check the most suspicious place immediately": [30, ["Broccoli"]],
            "Call for help and protect others": [30, ["Carrot", "Garlic"]]
        }
    },
    "30": {
        "text": "Before you can act, darkness falls again and you’re swept away.",
        "image": "smaller_images/beach_disaster.png",
        "choices": {
            "Fight to protect others": [46, ["Onion"]],
            "Call out and lead through fear": [46, ["Garlic"]],
            "Feel the weight of it—and keep going": [46, ["Tomato", "Pumpkin"]],
            "Freeze and hope it ends": [46, ["Potato"]]
        }
    },
    "46": {
        "text": "Light returns. You’re trapped and pressed in tight space. How do you get free?",
        "image": "smaller_images/grocery_bag.png",
        "choices": {
            "Work together with force": [31, ["Garlic", "Onion"]],
            "Look for a small weakness and exploit it": [31, ["Green Bean"]],
            "Use bold effort to break through": [31, ["Broccoli", "Jalapeno"]]
        }
    },
    "31": {
        "text": "You’re free for a moment, but danger is close. What do you do?",
        "image": "smaller_images/grocery_bag_out.png",
        "choices": {
            "Freeze and hope it passes": [32, ["Pumpkin", "Potato", "Napa Cabbage"]],
            "Use bold distraction to create space": [32, ["Jalapeno", "Bok Choy"]],
            "Move fast and lead others to safety": [32, ["Garlic", "Carrot", "Broccoli"]]
        }
    },
    "32": {
        "text": "You find a temporary hiding place. What’s your next move?",
        "image": "smaller_images/hiding.png",
        "choices": {
            "Take the route that requires planning and patience": [49, ["Carrot", "Broccoli", "Tomato"]],
            "Sprint for the exit and trust your instincts": [49, ["Jalapeno", "Onion"]]
        }
    },
    "6": {
        "text": "You head into the hills. At the base of the climb, your group pauses. What do you do?",
        "image": "smaller_images/base_evergetable.png",
        "choices": {
            "Survey the path and plan wisely": [33, ["Tomato", "Broccoli"]],
            "Encourage everyone and strengthen courage": [33, ["Bok Choy", "Green Bean", "Garlic"]],
            "Take in the view and remember your purpose": [33, ["Carrot"]]
        }
    },
    "33": {
        "text": "Night falls. Do you rest or keep going?",
        "image": "smaller_images/nightfalls.png",
        "choices": {
            "Seek shelter and regroup": [34, ["Leek", "Pumpkin", "Tomato"]],
            "Press on with determination": [36, ["Bok Choy", "Garlic"]]
        }
    },
    "34": {
        "text": "In the shelter, your group must decide how to endure the night. What do you lead with?",
        "image": "smaller_images/cave.png",
        "choices": {
            "Gather resources and prepare": [37, ["Carrot", "Tomato"]],
            "Organize the group and keep them steady": [37, ["Garlic"]],
            "Tell stories that build courage and unity": [37, ["Green Bean"]],
            "Think ahead and map the next steps": [37, ["Broccoli"]]
        }
    },
    "36": {
        "text": "You keep climbing, but the group needs a pause. What do you choose?",
        "image": "smaller_images/evergetable_climb.png",
        "choices": {
            "Pause and breathe—peace matters": [37, ["Napa Cabbage"]],
            "Push forward—momentum matters": [37, ["Jalapeno"]],
            "Feed and care for the group": [37, ["Green Bean"]],
            "Check in with each person": [37, ["Broccoli", "Napa Cabbage", "Garlic"]]
        }
    },
    "37": {
        "text": "After a long climb, you reach the summit. For a moment, you see everything clearly. Then the world shifts again…",
        "image": "smaller_images/vortex.png",
        "choices": {
            "Continue": [38, []]
        }
    },
    "38": {
        "text": "You land in unfamiliar territory again. Your group needs direction—fast. What do you do?",
        "image": "smaller_images/cheeseland.png",
        "choices": {
            "Scout and explore quickly": [20, ["Leek", "Jalapeno"]],
            "Head toward the nearest settlement": [20, ["Onion", "Napa Cabbage", "Carrot"]],
            "Ask the group and build agreement": [20, ["Broccoli", "Green Bean", "Napa Cabbage"]],
            "Lead decisively and keep everyone moving": [20, ["Garlic"]]
        }
    }


};

// --- Bible character results (v1 text-only cards) ---
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

const characterCard = {
    Moses: {
        subtitle: "Leader and deliverer",
        description: "You step forward when people need direction. You value justice, perseverance, and guiding others through hard seasons."
    },
    David: {
        subtitle: "Bold heart and honest worship",
        description: "You’re courageous and expressive. You take action, but you also feel deeply—and you learn through both victories and mistakes."
    },
    Esther: {
        subtitle: "Courage in the right moment",
        description: "You’re brave when it matters most. You notice what’s at stake, and you’re willing to speak up to protect others."
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
        description: "You keep going even after setbacks. You’re practical, patient, and able to turn hardship into something meaningful."
    },
    Peter: {
        subtitle: "Loyal and outspoken",
        description: "You’re passionate and committed. You may act quickly, but your heart is in the right place—and you grow through the journey."
    },
    Paul: {
        subtitle: "Driven and persuasive",
        description: "You’re focused and mission-minded. You value truth, clarity, and helping others see the bigger picture."
    },
    MaryMotherOfJesus: {
        subtitle: "Faithful and humble",
        description: "You trust deeply. You carry hope quietly, stay grounded, and bring peace to people around you."
    },
    MaryMagdalene: {
        subtitle: "Devoted and courageous witness",
        description: "You stay close through hard moments. You’re brave, loyal, and willing to be the first to speak truth when others hesitate."
    },
    Martha: {
        subtitle: "Practical and hospitable",
        description: "You take care of what needs doing. You serve, organize, and protect the people you love—even when you’re stressed."
    }
};

// Map the original scoring tags to Bible character IDs.
// (This lets us keep the existing branching + scoring lists while changing the final results to 11 characters.)
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
    "Bok Choy": "David" // merged into David to keep 11 result buckets
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
            button.onclick = () => changeState(nextState, info[1]); //each time you change state you update the personalities dictionary
            choicesContainer.appendChild(button);
        }
    };
}


function changeState(newState, selectedPersonalities) { 
    // console.log(personalities); 
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

    text.innerHTML = `
      <div class="result-card">
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
        const shareMessage = `I got “${displayName}” in the Bible Character quiz. Try it: https://jared912.github.io/Bible-Quiz/`;
        navigator.clipboard.writeText(shareMessage).then(() => {
            alert('Copied!');
        }).catch(() => {
            alert('Could not copy automatically. You can manually share: https://jared912.github.io/Bible-Quiz/');
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
