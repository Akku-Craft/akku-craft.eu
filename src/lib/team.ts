import teamData from "@/data/team.json";

export type TeamMember = {
  priority: number;
  name: string;
  key: string;
  github?: string;
  useFallback: boolean;
  role: string;
  displayOnLandingPage: boolean;
};

const allMembers = (teamData as TeamMember[]).sort(
  (a, b) => a.priority - b.priority,
);

export function getTeamMembers(): TeamMember[] {
  return allMembers;
}

export function getLandingPageMembers(): TeamMember[] {
  return allMembers.filter((m) => m.displayOnLandingPage);
}
