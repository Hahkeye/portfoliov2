import './App.css';
import Work from './components/Work';
import Footer from './components/Footer';
import { useState } from 'react';
import { Pane, Tablist, Tab} from 'evergreen-ui';
import About from './components/About';

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const tabs = ["About","Work"];
  return (
    <div className="App">
      <Pane>
        <Tablist className='head' padding="1rem" fontSize="22px">
                <h1> Web Developer Portfolio </h1>
                {
                  tabs.map((tab,index)=>(
                    <Tab fontSize="18px"key={tab} id={tab} onSelect={()=>setSelectedIndex(index)} isSelected={index === selectedIndex} aria-controls={`panel-${tab}`}>
                      {tab}
                    </Tab>
                  ))
                }
          </Tablist>
          <Pane padding={16} background="tint1" flex="1">
        {tabs.map((tab, index) => (
          <Pane
            aria-labelledby={tab}
            aria-hidden={index !== selectedIndex}
            display={index === selectedIndex ? 'block' : 'none'}
            key={tab}
            role="tabpanel"
          >
            {index===0 && <About/>}
            {index===1 && <Work/>}
          </Pane>
        ))}
      </Pane>

      </Pane>
        
      <Footer/>
    </div>
  );
}

export default App;
