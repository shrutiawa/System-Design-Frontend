
import {Modal} from "./components/LayoutComponent/Modal"
// import {SplitScreen} from "./components/LayoutComponent/SplitScreen"
import {LargeBookListItem} from "./components/LayoutComponent/books/LargeListItems"
import {SmallBookListItem} from "./components/LayoutComponent/books/SmallListItems"
import {LargeAuthorListItem} from "./components/LayoutComponent/authors/LargeListItems"
import {SmallAuthorListItem} from "./components/LayoutComponent/authors/SmallListItems"
import{RegularList} from "./components/LayoutComponent/Lists/Regular"
import{NumberedList} from "./components/LayoutComponent/Lists/Numbered"
import {Layout} from "./Layout"
import { authors } from "./data/author"
import { books } from "./data/books"
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
