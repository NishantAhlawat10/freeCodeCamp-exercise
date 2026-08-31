const footballTeam = {
  team: "Argentina",
  year: 1986,
  headCoach: "Carlos Bilardo",
  players: [
    {
      name: "Sergio Almiron",
      position: "forward",
      isCaptain: false,
    },
    {
      name: "Ricardo Bochini",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Sergio Batista",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Claudio Borghi",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Jose Luis Brown",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Daniel Passarella",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Jorge Burruchaga",
      position: "forward",
      isCaptain: false,
    },
    {
      name: "Nestor Clausen",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Jose Luis Cuciuffo",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Diego Maradona",
      position: "midfielder",
      isCaptain: true,
    },
    {
      name: "Jorge Valdano",
      position: "forward",
      isCaptain: false,
    },
    {
      name: "Hector Enrique",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Oscar Garre",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Ricardo Giusti",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Luis Islas",
      position: "goalkeeper",
      isCaptain: false,
    },
    {
      name: "Julio Olarticoecha",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Pedro Pasculli",
      position: "forward",
      isCaptain: false,
    },
    {
      name: "Nery Pumpido",
      position: "goalkeeper",
      isCaptain: false,
    },
    {
      name: "Oscar Ruggeri",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Carlos Tapia",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Marcelo Trobbiani",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Hector Zelada",
      position: "goalkeeper",
      isCaptain: false,
    },
  ],
};

const teamName = document.getElementById("team");

const yearFormed = document.getElementById("year");

const headCoach = document.getElementById("head-coach");

teamName.innerText = footballTeam["team"];
yearFormed.innerText = footballTeam["year"];
headCoach.innerText = footballTeam["headCoach"];

const selectContainer = document.getElementById("players");

const showPlayers = document.getElementById("player-cards");

function playerCards(playerPosition) {
  const playersCard =
    playerPosition === "all"
      ? footballTeam["players"]
      : footballTeam["players"].filter(
          ({ position }) => position === playerPosition,
        );

  return playersCard
    .map(({ name, position, isCaptain }) => {
      return `
      <div class ="player-card">
        <h2>${isCaptain ? "(Captain) " : ""}${name}</h2>
        <p>Position: ${position}</p>
      </div>
    `;
    })
    .join("");
}

showPlayers.innerHTML = playerCards("all");

selectContainer.addEventListener("change", () => {
  showPlayers.innerHTML = playerCards(selectContainer.value);
});
