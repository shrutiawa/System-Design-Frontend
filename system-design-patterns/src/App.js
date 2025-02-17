
import { LargeAuthorListItem } from './components/authors/LargeListItems';
import { SmallAuthorListItem } from './components/authors/SmallListItems';
import { RegularList } from './components/Lists/Regular';
import { authors } from "./data/author"
import { books } from "./data/books"
import { SplitScreen } from './components/split-screen';
import { Layout } from './Layout';
import { SmallBookListItem } from './components/books/SmallListItems';
import { LargeBookListItem } from './components/books/LargeListItems';
import { NumberedList } from './components/Lists/Numbered';
import { Modal } from './components/Modal';
// const LeftSideComponent = ({ title }) => {
//   return (
//     <h2 style={{ backgroundColor: "crimson" }}>I am {title}</h2>
//   )
// }
// const RightSideComponent = ({ title }) => {
//   return (
//     <h2 style={{ backgroundColor: "burlywood" }}>I am {title}</h2>
//   )
// }
function App() {
  return (
    // <SplitScreen leftWidth={1} rightWidth={3}>
    //   <LeftSideComponent title={"lefttt"} />
    //   <RightSideComponent title={"righttt"} />
    // </SplitScreen>
    <>
   
      {/* <RegularList
        items={authors}
        sourceName={"author"}
        ItemComponent={SmallAuthorListItem}
      /> */}
      <Layout>
      <Modal>
          <LargeBookListItem book={books[0]} />
        </Modal>
        <NumberedList
        items={authors}
        sourceName={"author"}
        ItemComponent={LargeAuthorListItem}
      />
        <RegularList
        items={authors}
        sourceName={"author"}
        ItemComponent={SmallAuthorListItem}
      />
        <RegularList
        items={books}
        sourceName={"book"}
        ItemComponent={SmallBookListItem}
      />
        <NumberedList
        items={books}
        sourceName={"book"}
        ItemComponent={LargeBookListItem}
      />
       
      </Layout>

    </>
  );
}

export default App;
