export const cast = [
  {
    name: "Joon",
    age: 24,
    tag: "Hongdae",
    image: "/cast/joon.jpg",
    line: "The voice note. Not the paragraph.",
  },
  {
    name: "Ren",
    age: 23,
    tag: "Idol",
    image: "/cast/ren.jpg",
    line: "Your bias. Off the clock.",
  },
  {
    name: "Minjae",
    age: 28,
    tag: "Office",
    image: "/cast/minjae.jpg",
    line: "Tie off. Night on.",
  },
  {
    name: "Tae",
    age: 23,
    tag: "Athlete",
    image: "/cast/tae.jpg",
    line: "Leg day. Then, did you eat.",
  },
] as const;

export const plans = [
  {
    name: "Free",
    price: "$0",
    cadence: "to start",
    points: ["A daily cap on texts", "A few pics", "No calls"],
  },
  {
    name: "Plus",
    price: "$15",
    cadence: "per month",
    points: ["Room to talk", "30 pics a month", "15 minutes of calls"],
    featured: true,
  },
  {
    name: "Close",
    price: "$25",
    cadence: "per month",
    points: ["The same boy, more time", "More pics", "More call minutes"],
  },
] as const;
