const schoolsData = {
  OREGON: {
    schoolId: "UO",
    logoUrl:
      "https://d7.pac-12.com/sites/default/files/styles/thumbnail/public/logo-oregon-color-2019.png",
    name: "OREGON",
    conferenceRecord: { wins: 7, losses: 2 },
    overallRecord: { wins: 10, losses: 4 },
    lastGame: { result: "L", score: "32-47", opponent: "OKLA" },
  },
  WASHINGTON_STATE: {
    schoolId: "WSU",
    logoUrl:
      "https://d7.pac-12.com/sites/default/files/styles/thumbnail/public/washington-state-logo-color-out_2.png",
    name: "WASHINGTON STATE",
    conferenceRecord: { wins: 6, losses: 3 },
    overallRecord: { wins: 7, losses: 6 },
    lastGame: { result: "L", score: "21-24", opponent: "CMU" },
  },
  OREGON_STATE: {
    schoolId: "OSU",
    logoUrl:
      "https://d7.pac-12.com/sites/default/files/styles/thumbnail/public/logo-oregon-state-color-2019.png",
    name: "OREGON STATE",
    conferenceRecord: { wins: 5, losses: 4 },
    overallRecord: { wins: 7, losses: 6 },
    lastGame: { result: "L", score: "13-24", opponent: "USU" },
  },
  CALIFORNIA: {
    schoolId: "CAL",
    logoUrl:
      "https://d7.pac-12.com/sites/default/files/styles/thumbnail/public/logo-california-color-2019.png",
    name: "CALIFORNIA",
    conferenceRecord: { wins: 4, losses: 5 },
    overallRecord: { wins: 5, losses: 7 },
    lastGame: { result: "W", score: "24-14", opponent: "USC" },
  },
  WASHINGTON: {
    schoolId: "UW",
    logoUrl:
      "https://d7.pac-12.com/sites/default/files/styles/thumbnail/public/logo-washington-color-2019.png",
    name: "WASHINGTON",
    conferenceRecord: { wins: 3, losses: 6 },
    overallRecord: { wins: 4, losses: 8 },
    lastGame: { result: "L", score: "13-40", opponent: "WSU" },
  },
  STANFORD: {
    schoolId: "SU",
    logoUrl:
      "https://d7.pac-12.com/sites/default/files/styles/thumbnail/public/logo-stanford-color-2019.png",
    name: "STANFORD",
    conferenceRecord: { wins: 2, losses: 7 },
    overallRecord: { wins: 3, losses: 9 },
    lastGame: { result: "L", score: "14-45", opponent: "ND" },
  },
};

document.getElementById("loadDataBtn").addEventListener("click", function () {
  const tableBody = document.querySelector("#pac12-table tbody");
  tableBody.innerHTML = "";

  Object.values(schoolsData).forEach(function (team) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><img src="${team.logoUrl}" alt="${team.name} logo"></td>
      <td>${team.name}</td>
      <td>${team.conferenceRecord.wins}-${team.conferenceRecord.losses}</td>
      <td>${team.overallRecord.wins}-${team.overallRecord.losses}</td>
      <td>${team.lastGame.result} ${team.lastGame.score} vs ${team.lastGame.opponent}</td>
    `;
    tableBody.appendChild(row);
  });
});


// Example usage
console.log(schools.OREGON);
console.log(schools.WASHINGTON_STATE);
