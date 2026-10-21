import { Balcony, Plan, Room, Wall } from "./parts";

const HATCH = "hatch-3";

export default function FloorPlan3Bed() {
  return (
    <Plan label="Floor plan, three bedroom corner, type C" hatchId={HATCH}>
      <Balcony x={340} y={10} w={40} h={260} hatchId={HATCH} />
      <Balcony x={30} y={10} w={310} h={20} hatchId={HATCH} />
      <Room x={30} y={30} w={190} h={140} name="Living / dining" area="48 sqm" />
      <Room x={220} y={30} w={120} h={80} name="Kitchen" />
      <Room x={220} y={110} w={120} h={90} name="Bedroom 1" area="16 sqm" />
      <Room x={30} y={170} w={100} h={90} name="Bedroom 2" />
      <Room x={130} y={170} w={90} h={90} name="Bedroom 3" />
      <Room x={220} y={200} w={60} h={60} name="Bath" />
      <Room x={280} y={200} w={60} h={60} name="Ensuite" />
      <Wall d="M30 30 H340 V260 H30 Z" />
    </Plan>
  );
}
