/* 
User Stories:

-> You should define an object constant named projectStatus with the three keys: PENDING, SUCCESS, and FAILURE. Each status should be assigned an object with a description key with the value Pending Execution, Executed Successfully, and Execution Failed, respectively.

-> You should define a class named ProjectIdea with a constructor that takes title and description as parameters. Initialize the title and description properties with the provided parameters. The class should also have a property named status that is set to the value projectStatus.PENDING by default.

-> You should define a method named updateProjectStatus inside the ProjectIdea class. This method should accept a newStatus parameter and update the status property to the given value.

-> You should define a ProjectIdeaBoard class with a constructor that accepts a title and initializes an empty array named ideas to hold instances of the ProjectIdea class.

-> You should define a method named pin inside the ProjectIdeaBoard class that accepts an instance of the ProjectIdea class and pushes the given instance to the ideas array.

-> You should define a method named unpin inside the ProjectIdeaBoard class. This method should accept an instance of the ProjectIdea class and removes it from the ideas array.

-> You should define a method named count that returns the number of project ideas in the given ProjectIdeaBoard array.

-> You should define a method named formatToString that returns the name of the projects ideas, their description and status in the format:
<ProjectIdeaBoard title> has <ProjectIdeaBoard count> idea(s)
<ProjectIdea title> (<ProjectIdea status description>) - <ProjectIdea description>
<ProjectIdea title> (<ProjectIdea status description>) - <ProjectIdea description>
.
.
.
*/

const projectStatus = {
  PENDING: { description: "Pending Execution" },
  SUCCESS: { description: "Executed Successfully" },
  FAILURE: { description: "Execution Failed" },
};

class ProjectIdea {
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }
  status = projectStatus.PENDING;
  updateProjectStatus(newStatus) {
    this.status = newStatus;
    console.log(this.status);
  }
}

class ProjectIdeaBoard {
  constructor(title) {
    this.title = title;
    this.ideas = [];
  }

  pin(idea) {
    this.ideas.push(idea);
  }

  unpin(idea) {
    // remove from array
    const idx = this.ideas.indexOf(idea);
    if (idx > -1) {
      this.ideas.splice(idx, 1);
    }
  }

  count() {
    return this.ideas.length;
  }

  formatToString() {
    let lines = [];

    lines.push(`${this.title} has ${this.count()} idea(s)`);

    for (let i = 0; i < this.ideas.length; i++) {
      const idea = this.ideas[i];
      lines.push(
        `${idea.title} (${idea.status.description}) - ${idea.description}`,
      );
    }

    return lines.join("\n") + "\n";
  }
}

const ans1 = new ProjectIdea(
  "Smart Window Locks",
  "An automation project allowing users to lock, unlock windows automatically based on weather conditions.",
);

// console.log(ans1)

const ans2 = new ProjectIdea(
  "Fitness Tracker App",
  "An app that tracks user workouts, diet, and sleep patterns.",
);

ans2.updateProjectStatus(projectStatus.SUCCESS);
// console.log(ans2);

const ans3 = new ProjectIdea(
  "Breakfast Chef Robot",
  "A robot that can follow a given list of instructions and prepare breakfast for the user and let them know through their phone.",
);

ans3.updateProjectStatus(projectStatus.FAILURE);
// console.log(ans3)

const ans4 = new ProjectIdea(
  "Online Used Video Games Store",
  "An online platform where users can buy second hand physical copies of video games from other users.",
);

ans4.updateProjectStatus(projectStatus.SUCCESS);

const result = new ProjectIdeaBoard("Empty Board");

console.log(result.formatToString());
// output 0

result.pin(ans1);
result.pin(ans2);
result.pin(ans3);
result.pin(ans4);

console.log(result.formatToString());
// output 4
result.unpin(ans3);

console.log(result.formatToString());
// output 3

console.log("      ---- New Idea Board ----      ");

const newIdea = new ProjectIdea(
  "Smart Home System",
  "An integrated system to control lighting, temperature, and security devices remotely.",
);

const newBoard = new ProjectIdeaBoard("Tech Projects Board");

newBoard.pin(newIdea);
console.log(newBoard.formatToString());
