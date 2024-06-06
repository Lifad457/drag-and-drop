import {
    SortableContext,
    verticalListSortingStrategy,
  } from "@dnd-kit/sortable";
  
import { Team } from "../Team/Team";
  
import { ColumnContainer } from "../../styles/column.css";
  
  export const Column = ({ team }) => {
    return (
      <ColumnContainer>
        <SortableContext items={team} strategy={verticalListSortingStrategy}>
          {team.map((team) => (
            <Team key={team.id} id={team.id} name={team.name} />
          ))}
        </SortableContext>
      </ColumnContainer>
    );
  };