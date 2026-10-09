/* THE PLAN. Edit this file to change your programme.
   Each exercise: name, rx (the prescription, 'N sets x A-B reps'),
   rest, fr (image frame ids - leave alone or set to null), cue, swaps.
   After editing, bump CACHE in sw.js so installed phones fetch it.

   BACK-SAFE VERSION (Oct 2026) - Th11-12 disc herniation.
   No axial loading (squats, standing barbell work), no loaded spinal
   bending (rows without a chest pad, deadlifts), no crunches.
   Exercises that did not change keep their key, so logged history still shows. */
window.PROGRAM = [
 {
  "id": "day-a",
  "n": 1,
  "color": "blue",
  "kicker": "Day 1 — Monday",
  "title": "Chest lead",
  "sub": "Chest · back · biceps · triceps · quads",
  "note": "Back-safe version (Th11–12 disc). Start only once your physio or spine doctor clears you. Weeks 1–2: use about 50–60% of your old weights and leave 2–3 reps in the tank on every set. Every lift here has your back on a pad or a seat. Stop and call your doctor if you get numbness in the groin or saddle area, bladder or bowel changes, or weakness in your legs.",
  "ex": [
   {
    "key": "day-a|chest-press-machine",
    "kind": "lift",
    "map": "--btriceps:#C3372A;--fchest:#C3372A;--ffrontdeltoids:#C3372A;--ftriceps:#C3372A",
    "swaps": [
     {
      "name": "Smith machine bench",
      "why": "Set the safeties just above your chest. Back stays flat, no leg drive.",
      "fr": [
       "x10",
       "x11"
      ]
     },
     {
      "name": "Dumbbell bench press",
      "why": "Only if someone hands you the dumbbells. Kicking them up from your knees is the risky part.",
      "fr": [
       "x6",
       "x7"
      ]
     }
    ],
    "name": "Chest press machine",
    "rx": "4 sets × 8–10 reps",
    "sets": 4,
    "target": "8–10",
    "restTxt": "rest 2 min",
    "rest": 120,
    "fr": [
     "x8",
     "x9"
    ],
    "muscles": "Chest · triceps · front delts",
    "cue": "Replaces the barbell bench for now: no unracking a heavy bar and no arching. Set the seat so the handles line up with mid-chest. Back flat against the pad and feet flat on the floor. If you have to arch away from the pad to finish a rep, the weight is too heavy."
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
    "cue": "Thigh pad snug and torso almost upright, with only a small lean back. Drive your elbows down toward your back pockets and bring the bar to the top of your chest, then control it up. Don't rock your body to move the weight.",
    "swaps": [
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
    "rx": "3 sets × 12–15 reps",
    "sets": 3,
    "target": "12–15",
    "restTxt": "rest 2 min",
    "rest": 120,
    "fr": [
     "x26",
     "x27"
    ],
    "map": "--bgluteal:#C3372A;--bhamstring:#E8A79B;--fquadriceps:#C3372A",
    "muscles": "Quads · glutes",
    "cue": "Ask your physio before doing this one. Feet a bit higher on the platform, shoulder-width apart. Stop each rep BEFORE your hips start to curl up off the seat, even if that is only knees at about 90°. Lighter weight, more reps. If your physio says no, do the leg extension instead.",
    "swaps": [
     {
      "name": "Leg extension",
      "why": "Zero load on your spine. Use this if the leg press is off the table.",
      "fr": [
       "x24",
       "x25"
      ]
     }
    ],
    "kind": "lift"
   },
   {
    "key": "day-a|smith-incline-press",
    "kind": "lift",
    "map": "--btriceps:#E8A79B;--fchest:#C3372A;--ffrontdeltoids:#C3372A;--ftriceps:#E8A79B",
    "swaps": [
     {
      "name": "Chest press machine",
      "why": "",
      "fr": [
       "x8",
       "x9"
      ]
     },
     {
      "name": "Incline cable fly",
      "why": "Lying on an incline bench, light.",
      "fr": [
       "x32",
       "x33"
      ]
     }
    ],
    "name": "Smith incline press",
    "rx": "3 sets × 8–12 reps",
    "sets": 3,
    "target": "8–12",
    "restTxt": "rest 2 min",
    "rest": 120,
    "fr": [
     "x30",
     "x31"
    ],
    "muscles": "Upper chest · front delts · triceps",
    "cue": "Replaces incline dumbbells, so you don't have to swing heavy dumbbells up into position. Bench at about 30°, safeties set, back stays on the bench the whole set."
   },
   {
    "key": "day-a|dumbbell-lateral-raise",
    "name": "Seated dumbbell lateral raise",
    "rx": "3 sets × 12–20 reps",
    "sets": 3,
    "target": "12–20",
    "restTxt": "rest 60–75 s",
    "rest": 75,
    "fr": [
     "x36",
     "x37"
    ],
    "map": "--bbackdeltoids:#C3372A;--ffrontdeltoids:#C3372A",
    "muscles": "Side delts",
    "cue": "Now seated, so you can't swing the weight up with your back. Light dumbbells, lead with the elbows, raise to shoulder height, lower over 3 seconds. Pick the dumbbells up with bent knees and a straight back.",
    "swaps": [
     {
      "name": "Cable lateral raise",
      "why": "Stand tall, light weight.",
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
    "cue": "Kept because the bench supports your back. Lie back on a 45–60° bench and let your arms hang behind your torso. The risky part is getting the dumbbells: bend your knees with a straight back, then sit down holding them. No swinging.",
    "swaps": [
     {
      "name": "Biceps curl machine",
      "why": "",
      "fr": [
       "x48",
       "x49"
      ]
     },
     {
      "name": "Cable curl",
      "why": "Light, stand tall, no leaning back.",
      "fr": [
       "x46",
       "x47"
      ]
     }
    ],
    "kind": "lift"
   },
   {
    "key": "day-a|skull-crusher",
    "kind": "lift",
    "map": "--btriceps:#C3372A;--ftriceps:#C3372A",
    "swaps": [
     {
      "name": "Triceps machine",
      "why": "",
      "fr": [
       "x56",
       "x57"
      ]
     },
     {
      "name": "V-bar pushdown",
      "why": "",
      "fr": [
       "x106",
       "x107"
      ]
     }
    ],
    "name": "Skull crusher (lying EZ-bar extension)",
    "rx": "3 sets × 10–12 reps",
    "sets": 3,
    "target": "10–12",
    "restTxt": "rest 60–75 s",
    "rest": 75,
    "fr": [
     "x54",
     "x55"
    ],
    "muscles": "Triceps, long head",
    "cue": "Replaces the overhead one-arm extension. Lying on a flat bench, lower the bar to just behind your head. That still stretches the long head, and the bench holds your spine. Reaching overhead while standing or sitting upright tends to arch the lower back."
   },
   {
    "key": "day-a|abs-dead-bug",
    "name": "Dead bug",
    "rx": "3 sets × 8–10 reps",
    "sets": 3,
    "target": "8–10",
    "restTxt": "rest 45–60 s",
    "rest": 60,
    "fr": null,
    "map": "",
    "muscles": "Core",
    "cue": "Reps per side. Lie on your back with arms up and knees bent at 90°. Press your lower back into the floor and keep it there while you slowly reach the opposite arm and leg out. Replaces hanging raises.",
    "swaps": [],
    "kind": "core"
   },
   {
    "key": "day-a|abs-side-plank",
    "name": "Side plank",
    "rx": "3 sets × 20–30 s",
    "sets": 3,
    "target": "20–30",
    "restTxt": "rest 45–60 s",
    "rest": 60,
    "fr": null,
    "map": "",
    "muscles": "Core",
    "cue": "Seconds per side. Start from your knees and move to your feet when it gets easy. Body in a straight line, hips up. Replaces cable crunches.",
    "swaps": [],
    "kind": "secs"
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
  "note": "This day changed the most. The Smith squat is gone, because a bar on your shoulders compresses the spine right where your disc is. Back work is fully chest-supported now, and legs get trained with machines that load the legs without the spine. Expect slower leg gains for a while. That's a fair trade.",
  "ex": [
   {
    "key": "day-b|chest-supported-t-bar-row",
    "name": "Chest-supported T-bar row",
    "rx": "4 sets × 10–12 reps",
    "sets": 4,
    "target": "10–12",
    "restTxt": "rest 2 min",
    "rest": 120,
    "fr": [
     "x74",
     "x75"
    ],
    "map": "--bbackdeltoids:#E8A79B;--bupperback:#C3372A;--fbiceps:#E8A79B",
    "muscles": "Mid back · lats · biceps",
    "cue": "Kept because your chest stays on the pad and your lower back does nothing. Two things to watch: load the plates with bent knees and a straight back, and climb on and off carefully. If getting on the machine bothers your back, use the machine row instead.",
    "swaps": [
     {
      "name": "Chest-supported machine row",
      "why": "Easiest to get in and out of.",
      "fr": [
       "x68",
       "x69"
      ]
     },
     {
      "name": "Close-grip pulldown",
      "why": "",
      "fr": [
       "x14",
       "x15"
      ]
     }
    ],
    "kind": "lift"
   },
   {
    "key": "day-b|leg-extension",
    "kind": "lift",
    "map": "--fquadriceps:#C3372A",
    "swaps": [
     {
      "name": "Leg press",
      "why": "Only once your physio is fine with it, and only to the depth where your hips stay on the seat.",
      "fr": [
       "x26",
       "x27"
      ]
     }
    ],
    "name": "Leg extension",
    "rx": "4 sets × 12–15 reps",
    "sets": 4,
    "target": "12–15",
    "restTxt": "rest 90 s",
    "rest": 90,
    "fr": [
     "x24",
     "x25"
    ],
    "muscles": "Quads",
    "cue": "Replaces the Smith squat for now. Back against the pad, hold the handles, one-second squeeze at the top, slow on the way down. No spinal load at all."
   },
   {
    "key": "day-b|shoulder-press-machine",
    "kind": "lift",
    "map": "--bbackdeltoids:#C3372A;--btriceps:#E8A79B;--ffrontdeltoids:#C3372A;--ftriceps:#E8A79B",
    "swaps": [
     {
      "name": "Seated lateral raise",
      "why": "Use this if overhead pressing irritates your back.",
      "fr": [
       "x36",
       "x37"
      ]
     }
    ],
    "name": "Shoulder press machine",
    "rx": "3 sets × 10–12 reps",
    "sets": 3,
    "target": "10–12",
    "restTxt": "rest 2 min",
    "rest": 120,
    "fr": [
     "x78",
     "x79"
    ],
    "muscles": "Front and side delts · triceps",
    "cue": "Replaces seated dumbbell presses: no swinging dumbbells up to your shoulders. Back fully against the upright pad. If your lower back arches away from the pad, the weight is too heavy. If any overhead pressing bothers your back, skip it and do lateral raises instead."
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
      "why": "Light, staggered stance, torso still.",
      "fr": [
       "x84",
       "x85"
      ]
     }
    ],
    "kind": "lift"
   },
   {
    "key": "day-b|seated-leg-curl",
    "kind": "lift",
    "map": "--bcalves:#E8A79B;--bhamstring:#C3372A;--bleftsoleus:#E8A79B;--brightsoleus:#E8A79B;--fcalves:#E8A79B",
    "swaps": [
     {
      "name": "Glute bridge",
      "why": "Bodyweight on the floor. Lift only until hips and thighs make a line, then stop.",
      "fr": null
     }
    ],
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
    "muscles": "Hamstrings",
    "cue": "Replaces the lying leg curl. Lying face-down tends to arch your lower back as you curl; the seated version doesn't. Three seconds lowering. Back extensions and hip thrusts are off the list for now."
   },
   {
    "key": "day-b|hammer-curl",
    "name": "Seated hammer curl",
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
    "cue": "Now seated, with your back against an upright bench, so your spine isn't holding the weight while you stand. Neutral grip, thumbs up. This hits the brachialis, which pushes the biceps up and makes your arm look wider from the front.",
    "swaps": [
     {
      "name": "Rope hammer curl",
      "why": "Light, stand tall, no swinging.",
      "fr": [
       "x98",
       "x99"
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
    "cue": "Stand tall with a soft knee bend, elbows pinned to your ribs. Don't lean over the stack to push more weight. Spread the rope apart at the bottom and control the way up.",
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
      "why": "The seated machine version, not free dips.",
      "fr": [
       "x108",
       "x109"
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
      "why": "Light, staggered stance, torso still.",
      "fr": [
       "x114",
       "x115"
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
    "rx": "3 sets × 20–40 s",
    "sets": 3,
    "target": "20–40",
    "restTxt": "rest 60 s",
    "rest": 60,
    "fr": null,
    "map": "",
    "muscles": "Abs",
    "cue": "Forearms down, glutes squeezed, body in a straight line. Don't let your hips sag. Start at 20 seconds and build up.",
    "swaps": [],
    "kind": "secs"
   },
   {
    "key": "day-b|abs-bird-dog",
    "name": "Bird dog",
    "rx": "3 sets × 8 reps",
    "sets": 3,
    "target": "8",
    "restTxt": "rest 45–60 s",
    "rest": 60,
    "fr": null,
    "map": "",
    "muscles": "Core",
    "cue": "Reps per side. On hands and knees, reach the opposite arm and leg out, hold 3 seconds, and keep your hips level, as if a glass of water were on your lower back. Replaces reverse crunches.",
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
  "note": "Still the day built around your arms. Standing barbell work moves to Smith, machine and preacher versions, so your biceps and triceps get the same work and your spine gets far less. If your back feels worse the morning after a session, repeat those weights next time instead of adding more.",
  "ex": [
   {
    "key": "day-c|smith-machine-bench",
    "kind": "lift",
    "map": "--btriceps:#C3372A;--fchest:#C3372A;--ffrontdeltoids:#C3372A;--ftriceps:#C3372A",
    "swaps": [
     {
      "name": "Chest press machine",
      "why": "",
      "fr": [
       "x8",
       "x9"
      ]
     },
     {
      "name": "Smith incline press",
      "why": "",
      "fr": [
       "x30",
       "x31"
      ]
     }
    ],
    "name": "Smith machine bench",
    "rx": "4 sets × 8–10 reps",
    "sets": 4,
    "target": "8–10",
    "restTxt": "rest 2 min",
    "rest": 120,
    "fr": [
     "x10",
     "x11"
    ],
    "muscles": "Chest · triceps · front delts",
    "cue": "Replaces the incline barbell bench. Flat this time, because Monday covers the incline. Safeties set just above your chest, back on the bench, and don't drive off the floor with your legs."
   },
   {
    "key": "day-c|smith-close-grip-press",
    "kind": "lift",
    "map": "--btriceps:#C3372A;--fchest:#E8A79B;--ffrontdeltoids:#E8A79B;--ftriceps:#C3372A",
    "swaps": [
     {
      "name": "Assisted dip machine",
      "why": "Kneeling on the pad keeps you steady. No free dips for now.",
      "fr": [
       "x108",
       "x109"
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
    "name": "Smith close-grip press",
    "rx": "3 sets × 8–10 reps",
    "sets": 3,
    "target": "8–10",
    "restTxt": "rest 2 min",
    "rest": 120,
    "fr": [
     "x128",
     "x129"
    ],
    "muscles": "Triceps · chest · front delts",
    "cue": "Same movement as before, on the Smith machine with safeties set, so you never have to wrestle a heavy bar back into the rack. Hands at shoulder width, elbows tucked."
   },
   {
    "key": "day-c|biceps-curl-machine",
    "kind": "lift",
    "map": "--bforearm:#E8A79B;--fbiceps:#C3372A;--fforearm:#E8A79B",
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
      "name": "Cable curl",
      "why": "Light, stand tall, no leaning back.",
      "fr": [
       "x46",
       "x47"
      ]
     }
    ],
    "name": "Biceps curl machine",
    "rx": "4 sets × 8–10 reps",
    "sets": 4,
    "target": "8–10",
    "restTxt": "rest 90 s",
    "rest": 90,
    "fr": [
     "x48",
     "x49"
    ],
    "muscles": "Biceps",
    "cue": "Replaces the standing barbell curl. The urge to lean back and heave a heavy barbell up is exactly what loads your spine. Here you're seated with your arms on a pad, so all of the effort goes into the biceps. Still four sets: arms are your priority."
   },
   {
    "key": "day-c|chest-supported-machine-row",
    "kind": "lift",
    "map": "--bbackdeltoids:#E8A79B;--bupperback:#C3372A;--fbiceps:#E8A79B",
    "swaps": [
     {
      "name": "Close-grip pulldown",
      "why": "",
      "fr": [
       "x14",
       "x15"
      ]
     }
    ],
    "name": "Chest-supported machine row",
    "rx": "3 sets × 10–12 reps",
    "sets": 3,
    "target": "10–12",
    "restTxt": "rest 90 s",
    "rest": 90,
    "fr": [
     "x68",
     "x69"
    ],
    "muscles": "Mid back · lats · biceps",
    "cue": "Replaces the seated cable row. On a cable row your lower back has to hold your torso still; here the chest pad does that job. Chest stays on the pad for the whole set, squeeze for a beat at the back."
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
      "name": "Glute bridge",
      "why": "Bodyweight on the floor. Lift only until hips and thighs make a line, then stop.",
      "fr": null
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
     }
    ],
    "kind": "lift"
   },
   {
    "key": "day-c|dumbbell-lateral-raise",
    "name": "Seated dumbbell lateral raise",
    "rx": "3 sets × 12–20 reps",
    "sets": 3,
    "target": "12–20",
    "restTxt": "rest 60 s",
    "rest": 60,
    "fr": [
     "x36",
     "x37"
    ],
    "map": "--bbackdeltoids:#C3372A;--ffrontdeltoids:#C3372A",
    "muscles": "Side delts",
    "cue": "Seated, so the back stays out of it. Second side-delt session of the week. Go light, raise to shoulder height, lower slowly.",
    "swaps": [
     {
      "name": "Cable lateral raise",
      "why": "Stand tall, light weight.",
      "fr": [
       "x38",
       "x39"
      ]
     }
    ],
    "kind": "lift"
   },
   {
    "key": "day-c|seated-calf-raise",
    "kind": "lift",
    "map": "--bcalves:#C3372A;--bleftsoleus:#C3372A;--brightsoleus:#C3372A;--fcalves:#C3372A",
    "swaps": [
     {
      "name": "Calf press on leg press",
      "why": "Only if the leg press is cleared for you.",
      "fr": [
       "x152",
       "x153"
      ]
     }
    ],
    "name": "Seated calf raise",
    "rx": "3 sets × 12–15 reps",
    "sets": 3,
    "target": "12–15",
    "restTxt": "rest 60 s",
    "rest": 60,
    "fr": [
     "x156",
     "x157"
    ],
    "muscles": "Calves",
    "cue": "Replaces the standing calf raise, whose shoulder pads push the weight straight down through your spine. The seated machine loads your knees instead. Full stretch at the bottom, one-second squeeze at the top."
   },
   {
    "key": "day-c|abs-pallof-press",
    "name": "Pallof press",
    "rx": "3 sets × 10 reps",
    "sets": 3,
    "target": "10",
    "restTxt": "rest 45–60 s",
    "rest": 60,
    "fr": null,
    "map": "",
    "muscles": "Core",
    "cue": "Reps per side. Stand side-on to a cable at chest height, press the handle straight out and hold 2 seconds without letting it twist you. Trains the core to keep your spine still. Replaces decline crunches.",
    "swaps": [],
    "kind": "core"
   },
   {
    "key": "day-c|abs-dead-bug",
    "name": "Dead bug",
    "rx": "3 sets × 8–10 reps",
    "sets": 3,
    "target": "8–10",
    "restTxt": "rest 45–60 s",
    "rest": 60,
    "fr": null,
    "map": "",
    "muscles": "Core",
    "cue": "Reps per side. Lower back pressed into the floor the whole time. Replaces lying leg raises, which tend to pull the lower back into an arch.",
    "swaps": [],
    "kind": "core"
   }
  ]
 }
];
