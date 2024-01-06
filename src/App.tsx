import { FilterList } from './components/FilterList'
import './App.css'

function App() {
  const list = ['apple', 'banana', 'orange', 'pear', 'grape', 'pineapple']
  return (
    <>
      <h1>Prototyping Playground</h1>
      <h2>Filterable List</h2>
      <p>
        the list is contained in the `as` prop and the items are passed as
        a function child... This allows us to use any container and render each
        item however is needed.
      </p>
      <p>
        In this example, we use a vanilla unordered list and render each item,
        but we could just as easily use dl with dd elements, or a nav with anchors,
        form with checkboxes, or a plain old, brain-dead boring div.
      </p>

      <FilterList
        as="ul"
        items={list}
        className="list"
      >
        {(item) => <li key={item}>{item}</li>}
      </FilterList>
    </>
  )
}

export default App
