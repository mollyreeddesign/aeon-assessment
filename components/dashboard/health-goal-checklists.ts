import {
  improveMetabolismDailyGoalsHeading,
  improveMetabolismDailyTasks,
} from "@/components/dashboard/health-goals-data";

export type HealthGoalChecklistId =
  | "blood-pressure"
  | "brain-health"
  | "metabolism";

export const HEALTH_GOAL_CHECKLISTS: Record<
  HealthGoalChecklistId,
  { heading: string; items: string[] }
> = {
  "blood-pressure": {
    heading: "Lower Blood Pressure Daily Goals",
    items: [
      "Stay under ~2,300 mg sodium",
      "Aim for 30+ minutes of moderate activity",
      "Track daily blood pressure readings after meals",
    ],
  },
  "brain-health": {
    heading: "Improve Brain Health Daily Goals",
    items: [
      "Sleep 7–8 hours",
      "Eat omega-3 rich food",
      "Learn or practice something new (language, music, skills)",
    ],
  },
  metabolism: {
    heading: improveMetabolismDailyGoalsHeading,
    items: [...improveMetabolismDailyTasks],
  },
};
