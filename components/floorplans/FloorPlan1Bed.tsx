import { Balcony, Plan, Room, Wall } from "./parts";

const HATCH = "hatch-1";

export default function FloorPlan1Bed() {
  return (
    <Plan label="Floor plan, one bedroom, type A" hatchId={HATCH}>
      <Balcony x={40} y={250} w={180} h={30} hatchId={HATCH} />
      <Room x={40} y={50} w={180} h={150} name="Living / dining" area="34 sqm" />
      <Room x={220} y={50} w={140} h={90} name="Kitchen" />
      <Room x={220} y={140} w={140} h={110} name="Bedroom" area="13 sqm" />
      <Room x={40} y={200} w={90} h={50} name="Bath" />
      <Room x={130} y={200} w={90} h={50} name="Study" />
      <Wall d="M40 50 H360 V250 H40 Z" />
    </Plan>
  );
}
