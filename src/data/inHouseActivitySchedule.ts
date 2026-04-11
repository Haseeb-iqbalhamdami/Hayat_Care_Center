/**
 * In-house activity samples by week (Mon–Fri), transcribed from Hayat program sheets.
 * Week 3 Wednesday was partial on the source sheet; entries follow the same program style.
 */

export const scheduleDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] as const;
export type ScheduleDay = (typeof scheduleDays)[number];

export type DayBlock = {
  day: ScheduleDay;
  /** Ordered list — shown top-to-bottom in each day column */
  activities: string[];
};

export type ActivityWeek = {
  id: number;
  title: string;
  subtitle: string;
  days: DayBlock[];
};

export const inHouseActivityWeeks: ActivityWeek[] = [
  {
    id: 1,
    title: "Week 1",
    subtitle: "Morning, midday & afternoon rhythm",
    days: [
      {
        day: "Monday",
        activities: [
          "Morning — Gentle stretching & breathing (therapeutic)",
          "Midday — Trivia & memory games (cognitive)",
          "Afternoon — Bingo social (social / recreational)",
        ],
      },
      {
        day: "Tuesday",
        activities: [
          "Morning — Chair yoga (therapeutic)",
          "Midday — Arts & crafts: painting (creative)",
          "Afternoon — Music & sing-along (social)",
        ],
      },
      {
        day: "Wednesday",
        activities: [
          "Morning — Walking club / indoor movement (physical)",
          "Midday — Cooking activity: simple snacks (life skills)",
          "Afternoon — Movie & discussion (social)",
        ],
      },
      {
        day: "Thursday",
        activities: [
          "Morning — Meditation & relaxation (therapeutic)",
          "Midday — Puzzle time (cognitive)",
          "Afternoon — Group storytelling (social / creative)",
        ],
      },
      {
        day: "Friday",
        activities: [
          "Morning — Dance fitness (recreational)",
          "Midday — Gardening (therapeutic)",
          "Afternoon — Game hour (cards / board games)",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Week 2",
    subtitle: "Movement, crafts & social highlights",
    days: [
      {
        day: "Monday",
        activities: ["Stretch & mobility", "Brain teasers", "Group discussion: favorite memories"],
      },
      {
        day: "Tuesday",
        activities: ["Chair exercises", "Craft: seasonal decorations", "Karaoke party"],
      },
      {
        day: "Wednesday",
        activities: ["Walking club", "Nutrition education", "Movie matinee"],
      },
      {
        day: "Thursday",
        activities: ["Guided relaxation", "Word games", "Social hour with snacks"],
      },
      {
        day: "Friday",
        activities: ["Balloon volleyball", "Gardening / plant care", "Friday social & music"],
      },
    ],
  },
  {
    id: 3,
    title: "Week 3",
    subtitle: "Strength, crafts & music",
    days: [
      {
        day: "Monday",
        activities: ["Yoga & balance", "Trivia challenge", "Bingo"],
      },
      {
        day: "Tuesday",
        activities: [
          "Strength exercises (light weights)",
          "Craft: DIY cards",
          "Music therapy",
        ],
      },
      {
        day: "Wednesday",
        activities: [
          "Walking club",
          "Creative workshop",
          "Movie & popcorn",
        ],
      },
      {
        day: "Thursday",
        activities: ["Relaxation techniques", "Puzzle challenge", "Group storytelling"],
      },
      {
        day: "Friday",
        activities: [
          "Fun fitness games",
          "Gardening",
          "Monthly celebration party",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Week 4",
    subtitle: "Talent show, life skills & sensory fun",
    days: [
      {
        day: "Monday",
        activities: ["Stretching", "Memory matching games", "Social mixer"],
      },
      {
        day: "Tuesday",
        activities: ["Chair yoga", "Painting / coloring", "Talent show"],
      },
      {
        day: "Wednesday",
        activities: [
          "Walking club",
          "Life skills (budgeting, organizing)",
          "Movie & popcorn",
        ],
      },
      {
        day: "Thursday",
        activities: [
          "Relaxation techniques",
          "Walking / movement",
          "Cooking activity",
          "Documentary & discussion",
        ],
      },
      {
        day: "Friday",
        activities: [
          "Meditation",
          "Crossword & sudoku",
          "Group sharing circle",
          "Dance party",
          "Sensory activities (aromatherapy, textures)",
          "Game hour",
        ],
      },
    ],
  },
];

export const inHouseSchedulePrinciples = [
  {
    title: "Adaptability",
    body: "Seated and standing options for physical activities whenever helpful.",
  },
  {
    title: "Consistency",
    body: "A predictable routine so everyone knows what to expect each week.",
  },
] as const;
