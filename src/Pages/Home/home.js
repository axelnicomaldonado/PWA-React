import './styles.css';
import Title from '../../Components/Title/Title.js';
import AddItem from '../../Components/AddItem/AddItem.js';
import Items from '../../Components/Items/Items.js'

function Home() {
    return (
      <div className="Home">
        <header className="Home-header">
          <Title/>
          <AddItem/>
          <Items/>
        </header>
      </div>
    );
  }
  
  export default Home;