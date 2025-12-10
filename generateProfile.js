// Create a function called generateProfile that:
// 1. Takes a name, age, and species as parameters
// 2. Uses conditionals to determine if they're an adult or puppy/child
//    (Dogs: adult if > 24 months, humans: adult if > 18 years)
// 3. Returns a formatted string with their profile

// Example outputs:
// generateProfile("Hero", 11, "dog")
// → "Hero is a 11-month-old puppy! Still growing strong! 🐕"

// generateProfile("Aiah", 17, "dog")
// → "Aiah is a 17-month-old adult dog! Fully grown! 🐕"

// generateProfile("Joy", 25, "human")
// → "Joy is a 25-year-old adult! Living life! 💙"

// BONUS CHALLENGES (pick one or do all!):
// 1. Add validation - what if someone enters a negative age?
// 2. Use the + operator trick to convert string inputs to numbers
// 3. Add a switch statement for different species responses
// 4. Use template literals to make the strings prettier

function generateProfile(name, age, species) {
  // VALIDATION FIRST - check for bad inputs before doing anything
  if (age < 0) {
    return `Hey! Age cannot be negative! Please enter a valid age.`;
  }

  // Now handle the logic
  if (species === "dog") {
    if (age <= 24) {
      return `${name} is a ${age}-month-old puppy! Still growing strong! 🐕`;
    } else {
      return `${name} is a ${age}-month-old adult dog! Fully grown! 🐕`;
    }
  } else if (species === "human") {
    if (age <= 18) {
      return `${name} is a ${age}-year-old young human! Growing up! 💙`;
    } else {
      return `${name} is a ${age}-year-old adult! Living life! 💙`;
    }
  } else {
    // Handle unknown species
    return `Sorry, Unknown species "${species}". Please use "dog" or "human".`;
  }
}
