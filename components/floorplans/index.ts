import type { ComponentType } from "react";
import type { BedFilter } from "@/lib/data";
import FloorPlan1Bed from "./FloorPlan1Bed";
import FloorPlan2Bed from "./FloorPlan2Bed";
import FloorPlan3Bed from "./FloorPlan3Bed";
import FloorPlanPenthouse from "./FloorPlanPenthouse";

export { FloorPlan1Bed, FloorPlan2Bed, FloorPlan3Bed, FloorPlanPenthouse };

export const floorPlans: Record<BedFilter, ComponentType> = {
  "1": FloorPlan1Bed,
  "2": FloorPlan2Bed,
  "3": FloorPlan3Bed,
  ph: FloorPlanPenthouse,
};
