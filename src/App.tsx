import { CardContainer } from "./components/card-container/card-container";
import { CardDescription } from "./components/card-description/card-description";
import { CardImage } from "./components/card-image/card-image";
import { CardLinkList } from "./components/card-link-list/card-link-list";
import { CardTitles } from "./components/card-titles/card-titles";

function App() {
  return (
    <CardContainer>
      <CardImage />
      <CardTitles />
      <CardDescription />
      <CardLinkList />
    </CardContainer>
  );
}

export default App;
