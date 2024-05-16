const schoolsData = {
  OREGON: {
    schoolId: "UO",
    logoImage: "Components/Images/uOregon.png",
    name: "OREGON",
    conferenceRecord: { wins: 7, losses: 2 },
    overallRecord: { wins: 10, losses: 4 },
    lastGame: { result: "L", score: "32-47", opponent: "OKLA" },
  },
  WASHINGTON_STATE: {
    schoolId: "WSU",
    logoImage: "Components/Images/wsu.png",
    name: "WASHINGTON STATE",
    conferenceRecord: { wins: 6, losses: 3 },
    overallRecord: { wins: 7, losses: 6 },
    lastGame: { result: "L", score: "21-24", opponent: "CMU" },
  },
  OREGON_STATE: {
    schoolId: "OSU",
    logoImage: "Components/Images/osu.png",
    name: "OREGON STATE",
    conferenceRecord: { wins: 5, losses: 4 },
    overallRecord: { wins: 7, losses: 6 },
    lastGame: { result: "L", score: "13-24", opponent: "USU" },
  },
  CALIFORNIA: {
    schoolId: "CAL",
    logoImage: "Components/Images/cal.png",
    name: "CALIFORNIA",
    conferenceRecord: { wins: 4, losses: 5 },
    overallRecord: { wins: 5, losses: 7 },
    lastGame: { result: "W", score: "24-14", opponent: "USC" },
  },
  WASHINGTON: {
    schoolId: "UW",
    logoImage: "Components/Images/uw.png",
    name: "WASHINGTON",
    conferenceRecord: { wins: 3, losses: 6 },
    overallRecord: { wins: 4, losses: 8 },
    lastGame: { result: "L", score: "13-40", opponent: "WSU" },
  },
  STANFORD: {
    schoolId: "SU",
    logoImage: "Components/Images/stanford.png",
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
      <td><img src="${team.logoImage}" alt="${team.name} logo"></td>
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
