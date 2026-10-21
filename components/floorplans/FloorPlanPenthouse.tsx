import { Balcony, Plan, Room, Wall } from "./parts";

const HATCH = "hatch-ph";

export default function FloorPlanPenthouse() {
  return (
    <Plan label="Floor plan, penthouse, type P" hatchId={HATCH}>
      <Balcony x={20} y={5} w={350} h={25} hatchId={HATCH} />
      <Room x={20} y={30} w={230} h={150} name="Living / dining" area="64 sqm" />
      <Room x={250} y={30} w={120} h={90} name="Kitchen" />
      <Room x={250} y={120} w={120} h={60} name="Study" />
      <Room x={20} y={180} w={120} h={90} name="Main bedroom" area="20 sqm" />
      <Room x={140} y={180} w={80} h={90} name="Bedroom 2" />
      <Room x={220} y={180} w={70} h={90} name="Bedroom 3" />
      <Room x={290} y={180} w={40} h={90} name="Bath" />
      <Room x={330} y={180} w={40} h={90} name="Ens." />
      <Wall d="M20 30 H370 V270 H20 Z" />
    </Plan>
  );
}
