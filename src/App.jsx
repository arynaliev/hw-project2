import "./App.css";
import { ImageCard } from "./components/imageCard/ImageCard";

function App() {
  return (
    <div className="App">
      <ImageCard />
    </div>
  );
}

export default App;

// 1. create a new react project
// 2. cleanup
// 3. Import 3 images
// 4. Create a imageCard component
// 5. It should take src, alt props
// 6. Show all the images.
// 7. Create a custom Button, that takes onClickHadler prop, and when clicked shows what day it is. (ex. Monday );
// 8. Second button should show The Months name
// 9. Third one should tell the season.
