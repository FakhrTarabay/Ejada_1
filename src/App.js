import './App.css';
import Header from './components/header/header';
import Tile from './components/tile/tile';
import call from './components/svg/call.svg'
import meeting from './components/svg/meeting.svg'
import people from './components/svg/people.svg'
import num from './components/svg/num.svg'
import Info from './components/info/info';
import Footer from './components/footer/footer';


function App() {
  return (
    <>
      <Header src = {people}/>
      <Tile 
        cond = {true}
        src = {call}
        text={"Save time and eleminate data entry for you or your team."}
        smallerText={"Too many sales teams still waste hours every week on low-value tasks like logging calls. Why not let your tech do more of the lifting and help your reps focus on persuading prospects instead?"}
      />
      <Tile
        cond = {false}
        src = {meeting} 
        text={"Get more meeting in less time and Connect to your agenda"}
        smallerText={"Too many sales teams still waste hours every week on low-value tasks like logging calls. Why not let your tech do more of the lifting and help your reps focus on persuading prospects instead?"}
      />
      <Tile
        cond = {true}
        src = {num} 
        text={"Gain perspective on sales progress Reporting & Analysis"}
        smallerText={"Aircalling's analytics help sales managers make more data-driven decisions. You can track individual productivity and numbers of meetings."}
      />
      <Info/>
      <Tile
        cond={true}
        src = {people}
        text = {"Try the world's simplest way to handle aircalling"}
        tCond = {true}
      />
      <Footer/>
    </>
  );
}

export default App;
