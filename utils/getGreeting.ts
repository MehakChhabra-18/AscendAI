export function getGreeting() {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) {
    return {
      title: "Good Morning ☀️",
      coach: "Let's build momentum early today.",
    };
  }

  if (hour >= 12 && hour < 17) {
    return {
      title: "Good Afternoon 🌤️",
      coach: "Let's keep today's progress going.",
    };
  }

  if (hour >= 17 && hour < 21) {
    return {
      title: "Good Evening 🌇",
      coach: "Finish one important task before the day ends.",
    };
  }

  return {
    title: "Good Night 🌙",
    coach: "You're doing great. Plan tomorrow's goals before signing off.",
  };
}