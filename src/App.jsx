import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept";
import { CORE_CONCEPTS as core } from "./data";
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";

function App() {


  const [selectedTopic, setSelectedTopic] = useState("Please select a topic");

  function HandleSelect(selectedButton){
    setSelectedTopic(selectedButton);
    console.log(selectedButton)
  }

  const listOfElements = [1, 2, 3, 4, 5];

  console.log("app is rendered!!")

  const listElements = listOfElements.map((item) => (
    <li key={item.toString()}>
      {item}
    </li>
  ));

  console.log(listElements)
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...core[0]} />
            <CoreConcept {...core[1]} />
            <CoreConcept {...core[2]} />
            <CoreConcept {...core[3]} />
          </ul>

        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => HandleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => HandleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => HandleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => HandleSelect('state')}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
