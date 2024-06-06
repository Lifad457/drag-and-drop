import { useState } from "react"
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  closestCorners,
} from "@dnd-kit/core"
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable"

import { Column } from "../components/Column/Column"
import { Input } from "../components/Input/Input"

import { AppContainer } from "../styles/app.css"

export default function App() {
  const [team, setTeam] = useState([
    { id: 1, name: "Nicolas" },
    { id: 2, name: "Corentin" },
    { id: 3, name: "Julia" },
  ])

  function addTeamMember(name) {
    setTeam(prevTeam => [...prevTeam, { id: prevTeam.length + 1, name }])
  }

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  const getTeamPos = (id) => team.findIndex(team => team.id === id)

  const handleDragEnd = (event) => {
    const { active, over } = event

    if (active.id === over.id) return

    setTeam(team => {
      const originalPos = getTeamPos(active.id)
      const newPos = getTeamPos(over.id)

      return arrayMove(team, originalPos, newPos)
    })
  }

  return (
    <AppContainer>
      <h1>La Team</h1>
      <Input onSubmit={addTeamMember} />
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragEnd={handleDragEnd}
      >
        <Column id="toDo" team={team} />
      </DndContext>
    </AppContainer>
  )
}