import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { TeamContainer } from "../../styles/team.css";

export const Team = ({ id, name }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <TeamContainer
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      {name}
    </TeamContainer>
  );
};