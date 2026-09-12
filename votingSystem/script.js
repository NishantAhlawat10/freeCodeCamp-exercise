/*
User Stories:

You should initialize a poll variable to a new Map object.
You should have a function addOption that accepts a parameter option.

In the addOption function:
If the option does not already exist in the poll, it should be added to the poll with an empty Set as its value to track voters. You should also return the message Option "<option>" added to the poll.

If the option already exists, it should return the message Option "<option>" already exists.
If you try to add an empty option, the function should return the message Option cannot be empty.


You should have a function vote that accepts two parameters, option (the option to vote for) and voterId (a unique ID for the voter).

In the vote function:
If the option does not exist in the poll, the function should return the message Option "<option>" does not exist.

If the option exists, the function should check if the voterId has already voted for this option.

If the voter has already voted, the function should return the message Voter <voterId> has already voted for "<option>".

If the voter has not voted, voterId should be added to the Set of voters for this option. The function should return the message Voter <voterId> voted for "<option>".

You should have at least three options in your poll.
Your poll should have at least three votes.

You should have a function displayResults that returns the poll results in the following format:
Poll Results:
OptionA: N votes
OptionB: N votes
OptionC: N votes
*/

const poll = new Map();

const addOption = (option) => {
  if (!option) {
    return "Option cannot be empty.";
  }
  if (!poll.has(option)) {
    poll.set(option, new Set());
    return `Option "${option}" added to the poll.`;
  }

  return `Option "${option}" already exists.`;
};

const vote = (option, voterId) => {
  if (!poll.has(option)) {
    return `Option "${option}" does not exist.`;
  }

  // check if voter has already voted
  if (poll.has(option)) {
    if (poll.get(option).has(voterId)) {
      return `Voter ${voterId} has already voted for "${option}".`;
    } else {
      poll.get(option).add(voterId);
    }
  }

  return `Voter ${voterId} voted for "${option}".`;
};

const displayResults = () => {
  let result = `Poll Results:\n`;

  for (const [option, voters] of poll) {
    result += `${option}: ${voters.size} votes\n`;
  }
  return result.trim();
};

// cases for addOption
console.log(addOption("Egypt"));
console.log(addOption(""));
console.log(addOption("Turkey"));
console.log(addOption("Turkey"));
console.log(addOption("Malaysia"));
console.log(addOption("Spain"));

console.log(poll);
// map has four countries

console.log("\n\n");

// cases for Vote
console.log(vote("Malaysia", "traveller1"));
console.log(vote("Algeria", "traveller1"));
console.log(vote("Malaysia", "traveller1"));
console.log(vote("Egypt", "traveller1"));
console.log(vote("Turkey", "traveller1"));
console.log(vote("Turkey", "traveller2"));
console.log(vote("Turkey", "traveller3"));
console.log(vote("Turkey", "traveller3"));
console.log(vote("Turkey", "traveller4"));

// displaying result
console.log(displayResults());
