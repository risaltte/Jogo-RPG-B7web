import { useEffect } from "react";
import * as C from "./App.styles";
import { Character } from "./components/Characters";
import { useCharacter } from "./hooks/useCharacter";

const App = () => {
  const char = useCharacter();

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
  }, []);

  const handleKeyDown = (event: KeyboardEvent) => {
    switch (event.code) {
      case 'KeyA':
      case 'ArrowLeft':
        char.moveLeft();
        break;
      case 'KeyW':
      case 'ArrowUp':
        char.moveUp();
        break;
      case 'KeyS':
      case 'ArrowDown':
        char.moveDown();
        break;
      case 'KeyD':
      case 'ArrowRight':
        char.moveRight();
        break;
    }
  }

  return (
    <C.Container>
      <C.Map>
        <Character x={char.x} y={char.y} side={char.side}/>
      </C.Map>
    </C.Container>
  );
}

export default App;
