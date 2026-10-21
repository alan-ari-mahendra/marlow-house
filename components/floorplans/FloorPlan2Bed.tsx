import { Balcony, Plan, Room, Wall } from "./parts";

const HATCH = "hatch-2";

export default function FloorPlan2Bed() {
  return (
    <Plan label="Floor plan, two bedroom, type B" hatchId={HATCH}>
      <Balcony x={30} y={10} w={200} h={30} hatchId={HATCH} />
      <Room x={30} y={40} w={200} h={130} name="Living / dining" area="42 sqm" />
      <Room x={230} y={40} w={140} h={80} name="Kitchen" />
      <Room x={230} y={120} w={140} h={90} name="Bedroom 1" area="15 sqm" />
      <Room x={30} y={170} w={110} h={90} name="Bedroom 2" area="11 sqm" />
      <Room x={140} y={170} w={50} h={90} name="Bath" />
      <Room x={190} y={170} w={40} h={90} name="Ldry" />
      <Room x={230} y={210} w={80} h={50} name="Ensuite" />
      <Room x={310} y={210} w={60} h={50} name="WIR" />
      <Wall d="M30 40 H370 V260 H30 Z" />
    </Plan>
  );
}
