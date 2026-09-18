/* THE PLAN. Edit this file to change your programme.
   Each exercise: name, rx (the prescription, 'N sets x A-B reps'),
   rest, fr (image frame ids - leave alone or set to null), cue, swaps.
   After editing, bump CACHE in sw.js so installed phones fetch it. */
window.PROGRAM = [
 {
  "id": "day-a",
  "n": 1,
  "color": "blue",
  "kicker": "Day 1 — Monday",
  "title": "Chest lead",
  "sub": "Chest · back · biceps · triceps · quads",
  "note": "Your heaviest pressing day. Bench goes first while you are completely fresh, because the weight you put on that bar is the single best predictor of whether your chest grows over the next few months.",
  "ex": [
   {
    "key": "day-a|barbell-bench-press",
    "name": "Barbell bench press",
    "rx": "4 sets × 5–8 reps",
    "sets": 4,
    "target": "5–8",
    "restTxt": "rest 2–3 min",
    "rest": 180,
    "fr": [
     "x0",
     "x1"
    ],
    "map": "--btriceps:#C3372A;--fchest:#C3372A;--ffrontdeltoids:#C3372A;--ftriceps:#C3372A",
    "muscles": "Chest · triceps · front delts",
    "cue": "Shoulder blades squeezed back and down into the bench, feet flat and pushing into the floor. Bar touches just below the nipples, elbows about 45° from your body — not flared straight out. Two lighter ramp-up sets first; they don't count as working sets.",
    "swaps": [
     {
      "name": "Dumbbell bench press",
      "why": "",
      "fr": [
       "x6",
       "x7"
      ]
     },
     {
      "name": "Chest press machine",
      "why": "",
      "fr": [
       "x8",
       "x9"
      ]
     },
     {
      "name": "Smith machine bench",
      "why": "",
      "fr": [
       "x10",
       "x11"
      ]
     }
    ],
    "kind": "lift"
   },
   {
    "key": "day-a|wide-grip-lat-pulldown",
    "name": "Wide-grip lat pulldown",
    "rx": "3 sets × 8–12 reps",
    "sets": 3,
    "target": "8–12",
    "restTxt": "rest 2 min",
    "rest": 120,
    "fr": [
     "x18",
     "x19"
    ],
    "map": "--bupperback:#C3372A;--fbiceps:#E8A79B",
    "muscles": "Lats · upper back · biceps",
    "cue": "Grip a little wider than your shoulders. Drive your elbows down toward your back pockets instead of pulling with your hands. Bar to the top of your chest, then control it all the way up until the lats stretch.",
    "swaps": [
     {
      "name": "Pull-up",
      "why": "",
      "fr": [
       "x12",
       "x13"
      ]
     },
     {
      "name": "Close-grip pulldown",
      "why": "",
      "fr": [
       "x14",
       "x15"
      ]
     },
     {
      "name": "V-bar pulldown",
      "why": "",
      "fr": [
       "x16",
       "x17"
      ]
     }
    ],
    "kind": "lift"
   },
   {
    "key": "day-a|leg-press",
    "name": "Leg press",
    "rx": "3 sets × 10–12 reps",
    "sets": 3,
    "target": "10–12",
    "restTxt": "rest 2 min",
    "rest": 120,
    "fr": [
     "x26",
     "x27"
    ],
    "map": "--bgluteal:#C3372A;--bhamstring:#E8A79B;--fquadriceps:#C3372A",
    "muscles": "Quads · glutes",
    "cue": "Feet in the middle of the platform, about shoulder width. Lower until your knees are near your chest but stop before your lower back peels off the pad. One solid quad movement today, that's all legs need here.",
    "swaps": [
     {
      "name": "Hack squat machine",
      "why": "",
      "fr": [
       "x20",
       "x21"
      ]
     },
     {
      "name": "Goblet / dumbbell squat",
      "why": "",
      "fr": [
       "x22",
       "x23"
      ]
     },
     {
      "name": "Leg extension",
      "why": "",
      "fr": [
       "x24",
       "x25"
      ]
     }
    ],
    "kind": "lift"
   },
   {
    "key": "day-a|incline-dumbbell-press",
    "name": "Incline dumbbell press",
    "rx": "3 sets × 8–12 reps",
    "sets": 3,
    "target": "8–12",
    "restTxt": "rest 2 min",
    "rest": 120,
    "fr": [
     "x34",
     "x35"
    ],
    "map": "--btriceps:#E8A79B;--fchest:#C3372A;--ffrontdeltoids:#C3372A;--ftriceps:#E8A79B",
    "muscles": "Upper chest · front delts · triceps",
    "cue": "Bench at around 30°, no steeper — past that it turns into a shoulder press. Lower until you feel a real stretch across the upper chest. This is the area that makes a chest look full in a t-shirt.",
    "swaps": [
     {
      "name": "Incline barbell press",
      "why": "",
      "fr": [
       "x28",
       "x29"
      ]
     },
     {
      "name": "Smith incline press",
      "why": "",
      "fr": [
       "x30",
       "x31"
      ]
     },
     {
      "name": "Incline cable fly",
      "why": "",
      "fr": [
       "x32",
       "x33"
      ]
     }
    ],
    "kind": "lift"
   },
   {
    "key": "day-a|dumbbell-lateral-raise",
    "name": "Dumbbell lateral raise",
    "rx": "3 sets × 12–20 reps",
    "sets": 3,
    "target": "12–20",
    "restTxt": "rest 60–75 s",
    "rest": 75,
    "fr": [
     "x42",
     "x43"
    ],
    "map": "--bbackdeltoids:#C3372A;--ffrontdeltoids:#C3372A",
    "muscles": "Side delts",
    "cue": "Lighter than you think. Lead with the elbows, raise to shoulder height, lower over 3 seconds. Side delts are the cheapest width you can buy at your bodyweight — they make your shoulders look broad long before your chest does.",
    "swaps": [
     {
      "name": "Seated lateral raise",
      "why": "",
      "fr": [
       "x36",
       "x37"
      ]
     },
     {
      "name": "Cable lateral raise",
      "why": "",
      "fr": [
       "x38",
       "x39"
      ]
     },
     {
      "name": "Band lateral raise",
      "why": "",
      "fr": [
       "x40",
       "x41"
      ]
     }
    ],
    "kind": "lift"
   },
   {
    "key": "day-a|incline-dumbbell-curl",
    "name": "Incline dumbbell curl",
    "rx": "3 sets × 8–12 reps",
    "sets": 3,
    "target": "8–12",
    "restTxt": "rest 75 s",
    "rest": 75,
    "fr": [
     "x50",
     "x51"
    ],
    "map": "--bforearm:#E8A79B;--fbiceps:#C3372A;--fforearm:#E8A79B",
    "muscles": "Biceps",
    "cue": "Lie back on a 45–60° bench and let your arms hang straight down behind your torso. That stretched start is exactly why this builds more biceps than a standing curl. No swinging — if you need momentum, go lighter.",
    "swaps": [
     {
      "name": "Standing dumbbell curl",
      "why": "",
      "fr": [
       "x44",
       "x45"
      ]
     },
     {
      "name": "Cable curl",
      "why": "",
      "fr": [
       "x46",
       "x47"
      ]
     },
     {
      "name": "Biceps curl machine",
      "why": "",
      "fr": [
       "x48",
       "x49"
      ]
     }
    ],
    "kind": "lift"
   },
   {
    "key": "day-a|one-arm-dumbbell-triceps-extension",
    "name": "One-arm dumbbell triceps extension",
    "rx": "3 sets × 10–12 reps",
    "sets": 3,
    "target": "10–12",
    "restTxt": "rest 60–75 s",
    "rest": 75,
    "fr": [
     "x58",
     "x59"
    ],
    "map": "--btriceps:#C3372A;--ftriceps:#C3372A",
    "muscles": "Triceps, long head",
    "cue": "One dumbbell, straight overhead, lower it behind your head until you feel the back of the arm stretch. Your elbow points at the ceiling and stays there — only the forearm moves. Overhead is what loads the long head, and the long head is the mass of your arm seen from the side.",
    "swaps": [
     {
      "name": "Overhead rope extension",
      "why": "",
      "fr": [
       "x52",
       "x53"
      ]
     },
     {
      "name": "Skull crusher",
      "why": "",
      "fr": [
       "x54",
       "x55"
      ]
     },
     {
      "name": "Triceps machine",
      "why": "",
      "fr": [
       "x56",
       "x57"
      ]
     }
    ],
    "kind": "lift"
   },
   {
    "key": "day-a|abs-hanging-knee-leg-raise",
    "name": "Hanging knee / leg raise",
    "rx": "3 sets × 10–15 reps",
    "sets": 3,
    "target": "10–15",
    "restTxt": "rest 60 s",
    "rest": 60,
    "fr": null,
    "map": "",
    "muscles": "Abs",
    "cue": "",
    "swaps": [],
    "kind": "core"
   },
   {
    "key": "day-a|abs-cable-crunch",
    "name": "Cable crunch",
    "rx": "3 sets × 12–15 reps",
    "sets": 3,
    "target": "12–15",
    "restTxt": "rest 60 s",
    "rest": 60,
    "fr": null,
    "map": "",
    "muscles": "Abs",
    "cue": "",
    "swaps": [],
    "kind": "core"
   }
  ]
 },
 {
  "id": "day-b",
  "n": 2,
  "color": "amber",
  "kicker": "Day 2 — Wednesday",
  "title": "Back and legs lead",
  "sub": "Back · legs · shoulders · chest · arms",
  "note": "The hardest of the three. Heavy squatting and rowing are what make the rest of your body catch up to your arms — and they raise your appetite, which matters when your job is to gain weight.",
  "ex": [
   {
    "key": "day-b|smith-machine-squat",
    "name": "Smith machine squat",
    "rx": "4 sets × 6–10 reps",
    "sets": 4,
    "target": "6–10",
    "restTxt": "rest 3 min",
    "rest": 180,
    "fr": [
     "x2",
     "x3"
    ],
    "map": "--bgluteal:#C3372A;--bhamstring:#E8A79B;--blowerback:#E8A79B;--fquadriceps:#C3372A",
    "muscles": "Quads · glutes",
    "cue": "Yes — this is the one you described, and it is a perfectly good place to start. The bar runs on rails so it only travels up and down, and on most Smith machines the bar is counterbalanced to roughly 7–15 kg instead of 20, so the plates on it are not comparable to a free bar. Set your feet slightly forward of the bar, sit down between your hips, go as deep as you can without your lower back rounding.",
    "swaps": [
     {
      "name": "Hack squat machine",
      "why": "",
      "fr": [
       "x20",
       "x21"
      ]
     },
     {
      "name": "Free barbell squat",
      "why": "",
      "fr": [
       "x64",
       "x65"
      ]
     },
     {
      "name": "Leg press",
      "why": "",
      "fr": [
       "x26",
       "x27"
      ]
     },
     {
      "name": "Goblet squat",
      "why": "",
      "fr": [
       "x66",
       "x67"
      ]
     }
    ],
    "kind": "lift"
   },
   {
    "key": "day-b|chest-supported-t-bar-row",
    "name": "Chest-supported T-bar row",
    "rx": "4 sets × 8–10 reps",
    "sets": 4,
    "target": "8–10",
    "restTxt": "rest 2 min",
    "rest": 120,
    "fr": [
     "x74",
     "x75"
    ],
    "map": "--bbackdeltoids:#E8A79B;--bupperback:#C3372A;--fbiceps:#E8A79B",
    "muscles": "Mid back · lats · biceps",
    "cue": "Chest flat on the pad so your lower back does nothing. Let the weight pull your shoulder blades forward at the bottom, then drive your elbows back and squeeze for a beat. Because you are braced, you can take these genuinely close to failure — that is the whole advantage over a bent-over row.",
    "swaps": [
     {
      "name": "Chest-supported machine row",
      "why": "",
      "fr": [
       "x68",
       "x69"
      ]
     },
     {
      "name": "Dumbbell row",
      "why": "",
      "fr": [
       "x70",
       "x71"
      ]
     },
     {
      "name": "Bent-over barbell row",
      "why": "",
      "fr": [
       "x72",
       "x73"
      ]
     }
    ],
    "kind": "lift"
   },
   {
    "key": "day-b|seated-dumbbell-shoulder-press",
    "name": "Seated dumbbell shoulder press",
    "rx": "3 sets × 6–10 reps",
    "sets": 3,
    "target": "6–10",
    "restTxt": "rest 2 min",
    "rest": 120,
    "fr": [
     "x82",
     "x83"
    ],
    "map": "--bbackdeltoids:#C3372A;--btriceps:#E8A79B;--ffrontdeltoids:#C3372A;--ftriceps:#E8A79B",
    "muscles": "Front and side delts · triceps",
    "cue": "Press slightly in front of your ears, never behind your head. Stop just short of lockout so the delts keep the tension. Back flat against the bench — no arching it into an incline press.",
    "swaps": [
     {
      "name": "Barbell overhead press",
      "why": "",
      "fr": [
       "x76",
       "x77"
      ]
     },
     {
      "name": "Shoulder press machine",
      "why": "",
      "fr": [
       "x78",
       "x79"
      ]
     },
     {
      "name": "Smith overhead press",
      "why": "",
      "fr": [
       "x80",
       "x81"
      ]
     }
    ],
    "kind": "lift"
   },
   {
    "key": "day-b|pec-deck-machine-fly",
    "name": "Pec deck / machine fly",
    "rx": "3 sets × 12–15 reps",
    "sets": 3,
    "target": "12–15",
    "restTxt": "rest 75 s",
    "rest": 75,
    "fr": [
     "x88",
     "x89"
    ],
    "map": "--fchest:#C3372A;--ffrontdeltoids:#E8A79B",
    "muscles": "Chest",
    "cue": "Your second chest session of the week and it is deliberately light. Slow and controlled with a big stretch at the open position. Flies give the chest a stretch that pressing never does, and stretch under load is a strong growth signal.",
    "swaps": [
     {
      "name": "Cable fly",
      "why": "",
      "fr": [
       "x84",
       "x85"
      ]
     },
     {
      "name": "Dumbbell fly",
      "why": "",
      "fr": [
       "x86",
       "x87"
      ]
     },
     {
      "name": "Low-to-high cable fly",
      "why": "",
      "fr": [
       "x32",
       "x33"
      ]
     }
    ],
    "kind": "lift"
   },
   {
    "key": "day-b|lying-leg-curl",
    "name": "Lying leg curl",
    "rx": "3 sets × 10–12 reps",
    "sets": 3,
    "target": "10–12",
    "restTxt": "rest 90 s",
    "rest": 90,
    "fr": [
     "x96",
     "x97"
    ],
    "map": "--bcalves:#E8A79B;--bgluteal:#E8A79B;--bhamstring:#C3372A;--bleftsoleus:#E8A79B;--brightsoleus:#E8A79B;--fcalves:#E8A79B",
    "muscles": "Hamstrings",
    "cue": "Squats barely work the hamstrings, so they need their own movement. Three seconds on the way back down — the lowering half is where hamstrings grow. One thing to know: with the Romanian deadlift gone, this plan has no hip hinge left in it, so if you want your glutes and lower back covered, the back extension below is the swap to make here.",
    "swaps": [
     {
      "name": "Back extension",
      "why": "",
      "fr": [
       "x90",
       "x91"
      ]
     },
     {
      "name": "Seated leg curl",
      "why": "",
      "fr": [
       "x92",
       "x93"
      ]
     },
     {
      "name": "Hip thrust",
      "why": "",
      "fr": [
       "x94",
       "x95"
      ]
     }
    ],
    "kind": "lift"
   },
   {
    "key": "day-b|hammer-curl",
    "name": "Hammer curl",
    "rx": "3 sets × 8–12 reps",
    "sets": 3,
    "target": "8–12",
    "restTxt": "rest 75 s",
    "rest": 75,
    "fr": [
     "x104",
     "x105"
    ],
    "map": "--bforearm:#C3372A;--fbiceps:#C3372A;--fforearm:#C3372A",
    "muscles": "Biceps · brachialis · forearms",
    "cue": "Neutral grip, thumbs up. This hits the brachialis, the muscle sitting underneath the biceps — it pushes the biceps up and makes your arm look wider from the front. It builds forearms too.",
    "swaps": [
     {
      "name": "Rope hammer curl",
      "why": "",
      "fr": [
       "x98",
       "x99"
      ]
     },
     {
      "name": "Cross-body hammer curl",
      "why": "",
      "fr": [
       "x100",
       "x101"
      ]
     },
     {
      "name": "EZ-bar curl",
      "why": "",
      "fr": [
       "x102",
       "x103"
      ]
     }
    ],
    "kind": "lift"
   },
   {
    "key": "day-b|rope-triceps-pushdown",
    "name": "Rope triceps pushdown",
    "rx": "3 sets × 10–15 reps",
    "sets": 3,
    "target": "10–15",
    "restTxt": "rest 60–75 s",
    "rest": 75,
    "fr": [
     "x112",
     "x113"
    ],
    "map": "--btriceps:#C3372A;--ftriceps:#C3372A",
    "muscles": "Triceps",
    "cue": "Elbows pinned to your ribs. Spread the rope apart at the bottom and hold the lockout for a beat. Control the way up instead of letting the stack yank your arms.",
    "swaps": [
     {
      "name": "V-bar pushdown",
      "why": "",
      "fr": [
       "x106",
       "x107"
      ]
     },
     {
      "name": "Dip machine",
      "why": "",
      "fr": [
       "x108",
       "x109"
      ]
     },
     {
      "name": "Bench dip",
      "why": "",
      "fr": [
       "x110",
       "x111"
      ]
     }
    ],
    "kind": "lift"
   },
   {
    "key": "day-b|reverse-pec-deck",
    "name": "Reverse pec deck",
    "rx": "3 sets × 15–20 reps",
    "sets": 3,
    "target": "15–20",
    "restTxt": "rest 60 s",
    "rest": 60,
    "fr": [
     "x120",
     "x121"
    ],
    "map": "--bbackdeltoids:#C3372A;--btrapezius:#E8A79B;--bupperback:#C3372A;--fneck:#E8A79B",
    "muscles": "Rear delts · upper back",
    "cue": "Insurance. You press three times a week now, and this keeps the back of your shoulders strong enough to balance that out. Set the handles at chest height, lead with the elbows, don't shrug. Light weight, high reps, never skip it.",
    "swaps": [
     {
      "name": "Face pull",
      "why": "",
      "fr": [
       "x114",
       "x115"
      ]
     },
     {
      "name": "Bent-over dumbbell reverse fly",
      "why": "",
      "fr": [
       "x116",
       "x117"
      ]
     },
     {
      "name": "Cable rear delt fly",
      "why": "",
      "fr": [
       "x118",
       "x119"
      ]
     }
    ],
    "kind": "lift"
   },
   {
    "key": "day-b|abs-plank",
    "name": "Plank",
    "rx": "3 sets × 40–60 s",
    "sets": 3,
    "target": "40–60",
    "restTxt": "rest 60 s",
    "rest": 60,
    "fr": null,
    "map": "",
    "muscles": "Abs",
    "cue": "",
    "swaps": [],
    "kind": "secs"
   },
   {
    "key": "day-b|abs-reverse-crunch",
    "name": "Reverse crunch",
    "rx": "3 sets × 12–15 reps",
    "sets": 3,
    "target": "12–15",
    "restTxt": "rest 60 s",
    "rest": 60,
    "fr": null,
    "map": "",
    "muscles": "Abs",
    "cue": "",
    "swaps": [],
    "kind": "core"
   }
  ]
 },
 {
  "id": "day-c",
  "n": 3,
  "color": "red",
  "kicker": "Day 3 — Friday",
  "title": "Arms lead",
  "sub": "Arms · chest · back · hamstrings · calves",
  "note": "The day built around what you actually care about. Chest gets a third angle, then arms get real volume while you still have energy for them instead of getting the scraps at the end.",
  "ex": [
   {
    "key": "day-c|incline-barbell-bench-press",
    "name": "Incline barbell bench press",
    "rx": "4 sets × 6–10 reps",
    "sets": 4,
    "target": "6–10",
    "restTxt": "rest 2–3 min",
    "rest": 180,
    "fr": [
     "x28",
     "x29"
    ],
    "map": "--btriceps:#E8A79B;--fchest:#C3372A;--ffrontdeltoids:#C3372A;--ftriceps:#E8A79B",
    "muscles": "Upper chest · front delts · triceps",
    "cue": "Third chest session this week, third angle. Bench at about 30°, bar touches high on the chest just below the collarbones. Slightly higher reps than Monday because you are already carrying fatigue.",
    "swaps": [
     {
      "name": "Incline dumbbell press",
      "why": "",
      "fr": [
       "x34",
       "x35"
      ]
     },
     {
      "name": "Smith incline press",
      "why": "",
      "fr": [
       "x30",
       "x31"
      ]
     },
     {
      "name": "Chest press machine",
      "why": "",
      "fr": [
       "x8",
       "x9"
      ]
     }
    ],
    "kind": "lift"
   },
   {
    "key": "day-c|close-grip-bench-press",
    "name": "Close-grip bench press",
    "rx": "3 sets × 8–10 reps",
    "sets": 3,
    "target": "8–10",
    "restTxt": "rest 2 min",
    "rest": 120,
    "fr": [
     "x130",
     "x131"
    ],
    "map": "--btriceps:#C3372A;--fchest:#E8A79B;--ffrontdeltoids:#E8A79B;--ftriceps:#C3372A",
    "muscles": "Triceps · chest · front delts",
    "cue": "Hands about shoulder-width, elbows tucked tight to your sides. The heaviest triceps movement that exists, and triceps are roughly two thirds of your arm — for arm size this matters more than any curl.",
    "swaps": [
     {
      "name": "Triceps dip",
      "why": "",
      "fr": [
       "x126",
       "x127"
      ]
     },
     {
      "name": "Smith close-grip press",
      "why": "",
      "fr": [
       "x128",
       "x129"
      ]
     },
     {
      "name": "Assisted dip machine",
      "why": "",
      "fr": [
       "x108",
       "x109"
      ]
     }
    ],
    "kind": "lift"
   },
   {
    "key": "day-c|barbell-curl",
    "name": "Barbell curl",
    "rx": "4 sets × 8–10 reps",
    "sets": 4,
    "target": "8–10",
    "restTxt": "rest 90 s",
    "rest": 90,
    "fr": [
     "x4",
     "x5"
    ],
    "map": "--bforearm:#E8A79B;--fbiceps:#C3372A;--fforearm:#E8A79B",
    "muscles": "Biceps",
    "cue": "Elbows glued to your sides, no leaning back to heave it up. Two full seconds lowering. Four sets because this is your priority — treat it as seriously as you treat the bench.",
    "swaps": [
     {
      "name": "EZ-bar curl",
      "why": "",
      "fr": [
       "x102",
       "x103"
      ]
     },
     {
      "name": "Dumbbell curl",
      "why": "",
      "fr": [
       "x44",
       "x45"
      ]
     },
     {
      "name": "Cable curl",
      "why": "",
      "fr": [
       "x46",
       "x47"
      ]
     }
    ],
    "kind": "lift"
   },
   {
    "key": "day-c|seated-cable-row",
    "name": "Seated cable row",
    "rx": "3 sets × 10–12 reps",
    "sets": 3,
    "target": "10–12",
    "restTxt": "rest 2 min",
    "rest": 120,
    "fr": [
     "x136",
     "x137"
    ],
    "map": "--bbackdeltoids:#E8A79B;--bupperback:#C3372A;--fbiceps:#E8A79B",
    "muscles": "Mid back · lats · biceps",
    "cue": "Chest tall, no rocking backwards. Let the weight pull your shoulder blades forward at the front of each rep, then pull the handle into your stomach and pause a second.",
    "swaps": [
     {
      "name": "One-arm dumbbell row",
      "why": "",
      "fr": [
       "x132",
       "x133"
      ]
     },
     {
      "name": "Machine row",
      "why": "",
      "fr": [
       "x68",
       "x69"
      ]
     },
     {
      "name": "Inverted row",
      "why": "",
      "fr": [
       "x134",
       "x135"
      ]
     }
    ],
    "kind": "lift"
   },
   {
    "key": "day-c|seated-leg-curl",
    "name": "Seated leg curl",
    "rx": "3 sets × 10–12 reps",
    "sets": 3,
    "target": "10–12",
    "restTxt": "rest 90 s",
    "rest": 90,
    "fr": [
     "x92",
     "x93"
    ],
    "map": "--bcalves:#E8A79B;--bhamstring:#C3372A;--bleftsoleus:#E8A79B;--brightsoleus:#E8A79B;--fcalves:#E8A79B",
    "muscles": "Hamstrings",
    "cue": "Hips bent in the seat put the hamstrings on stretch before the rep even starts, which is why the seated version slightly beats the lying one. Three seconds lowering, no bouncing out of the bottom.",
    "swaps": [
     {
      "name": "Lying leg curl",
      "why": "",
      "fr": [
       "x96",
       "x97"
      ]
     },
     {
      "name": "Romanian deadlift",
      "why": "",
      "fr": [
       "x138",
       "x139"
      ]
     },
     {
      "name": "Back extension",
      "why": "",
      "fr": [
       "x90",
       "x91"
      ]
     }
    ],
    "kind": "lift"
   },
   {
    "key": "day-c|preacher-curl",
    "name": "Preacher curl",
    "rx": "3 sets × 10–12 reps",
    "sets": 3,
    "target": "10–12",
    "restTxt": "rest 75 s",
    "rest": 75,
    "fr": [
     "x146",
     "x147"
    ],
    "map": "--bforearm:#E8A79B;--fbiceps:#C3372A;--fforearm:#E8A79B",
    "muscles": "Biceps, lower part",
    "cue": "Armpits pressed into the top of the pad so your elbows cannot drift. Do not bounce out of the bottom — the stretched position is where biceps tears happen if you get careless, and where the growth happens if you don't.",
    "swaps": [
     {
      "name": "Dumbbell preacher curl",
      "why": "",
      "fr": [
       "x140",
       "x141"
      ]
     },
     {
      "name": "Preacher curl machine",
      "why": "",
      "fr": [
       "x142",
       "x143"
      ]
     },
     {
      "name": "Concentration curl",
      "why": "",
      "fr": [
       "x144",
       "x145"
      ]
     }
    ],
    "kind": "lift"
   },
   {
    "key": "day-c|dumbbell-lateral-raise",
    "name": "Dumbbell lateral raise",
    "rx": "3 sets × 12–20 reps",
    "sets": 3,
    "target": "12–20",
    "restTxt": "rest 60 s",
    "rest": 60,
    "fr": [
     "x42",
     "x43"
    ],
    "map": "--bbackdeltoids:#C3372A;--ffrontdeltoids:#C3372A",
    "muscles": "Side delts",
    "cue": "Second side-delt session of the week, deliberately at the end when you are tired. Twice a week on a small movement like this is not too much — side delts recover fast and respond well to frequency. Go light, raise to shoulder height, lower slowly.",
    "swaps": [
     {
      "name": "Seated lateral raise",
      "why": "",
      "fr": [
       "x36",
       "x37"
      ]
     },
     {
      "name": "Upright row",
      "why": "",
      "fr": [
       "x148",
       "x149"
      ]
     },
     {
      "name": "Front raise",
      "why": "",
      "fr": [
       "x150",
       "x151"
      ]
     }
    ],
    "kind": "lift"
   },
   {
    "key": "day-c|standing-calf-raise",
    "name": "Standing calf raise",
    "rx": "3 sets × 10–15 reps",
    "sets": 3,
    "target": "10–15",
    "restTxt": "rest 60 s",
    "rest": 60,
    "fr": [
     "x158",
     "x159"
    ],
    "map": "--bcalves:#C3372A;--bleftsoleus:#C3372A;--brightsoleus:#C3372A;--fcalves:#C3372A",
    "muscles": "Calves",
    "cue": "Full stretch at the bottom, one-second squeeze at the top, no bouncing. Calves need the pause more than they need weight.",
    "swaps": [
     {
      "name": "Calf press on leg press",
      "why": "",
      "fr": [
       "x152",
       "x153"
      ]
     },
     {
      "name": "Dumbbell calf raise",
      "why": "",
      "fr": [
       "x154",
       "x155"
      ]
     },
     {
      "name": "Seated calf raise",
      "why": "",
      "fr": [
       "x156",
       "x157"
      ]
     }
    ],
    "kind": "lift"
   },
   {
    "key": "day-c|abs-decline-crunch",
    "name": "Decline crunch",
    "rx": "3 sets × 12–15 reps",
    "sets": 3,
    "target": "12–15",
    "restTxt": "rest 60 s",
    "rest": 60,
    "fr": null,
    "map": "",
    "muscles": "Abs",
    "cue": "",
    "swaps": [],
    "kind": "core"
   },
   {
    "key": "day-c|abs-lying-leg-raise",
    "name": "Lying leg raise",
    "rx": "3 sets × 12–15 reps",
    "sets": 3,
    "target": "12–15",
    "restTxt": "rest 60 s",
    "rest": 60,
    "fr": null,
    "map": "",
    "muscles": "Abs",
    "cue": "",
    "swaps": [],
    "kind": "core"
   }
  ]
 }
];
