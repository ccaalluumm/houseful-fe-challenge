import { Listings } from "./components/Containers/Listings";
import { Nav } from "./components/Navbar";

const App = () => {
  return (
    <>
      <Nav />
      <main>
        <Listings />
      </main>
    </>
  );
};

export default App;
