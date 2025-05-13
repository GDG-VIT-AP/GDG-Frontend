import { teamNames } from "../details";

export function transformTeamData(data) {
  const departmentMap = teamNames

  const teamNameMap = teamNames
  const teams = {};
  data.forEach(member => {
    const department = departmentMap[member.departmentID];
    const teamLabel = teamNameMap[member.departmentID];

    if (!department || !member.currentMember) return;

    const memberObj = {
      name: member.name,
      role: member.departmentRole,
      img: member.profPic || "avatar", 
      team: teamLabel,
      linkedin: member.snsLink1
    };

    if (!teams[department]) teams[department] = [];

    teams[department].push(memberObj);
  });

  Object.keys(teams).forEach(team => {
    const sorted = teams[team].sort((a, b) => {
      const getPriority = role =>
        role.toLowerCase().includes("lead") ? 0 :
        role.toLowerCase().includes("co-lead") ? 1 : 2;

      return getPriority(a.role) - getPriority(b.role);
    });

    teams[team] = sorted.slice(0, 4); // keep top 4
  });

  return teams;
}