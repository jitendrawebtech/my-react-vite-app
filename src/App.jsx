import Routing from './2_React_Router'
// import './App.css'

/*
import FormTrans from './42_useTransition_Hook'
import Guests from './43_Pure_component'
import Members from './44_Derived_State'
import Players from './45_Lifting_State_Up'
import UpdatingObject from './46_Updating_Objects_State'
import Academy from './47_Updating_Array'
import UserData from './48_useActionState'
import SubjectApi from './52_Context_api'
import Subject from './52_Context_api'
import ToggleData from './Toggle'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import College from './26_Array-Nested-Looping';
import ClockColor from './25_Props-Task';
import Teams from './25_Reuse-Component';
import CounterBtn from './30_Life_Cycle_Method';
import Kids from './40_Pass_Function_in_Component_Props.jsx';
import UserForm from './38_useRef-Hook.jsx';
import From from './39_uncontrolled_component.jsx';
import InputForRef from './40_Forward_Ref.jsx';
import StateForm from './41_useFormStatus.jsx';
import Img1 from './img'
import List1 from './listing'
import alertFun from './functions'
import Myfruit, { Counter } from './stateHooks'
import Toggle from './Hide-Show-Toggle'
import MultiCondition from './Multi-Conditions'
import User, { FriendGroup2, FriendGroup3, FriendGroup4, StudName } from './Props' 
import Member, { Person } from './Pass-jsx_default-props'
import { GetIputValue, InpVals } from './20_Get_Input_Field_Value'
import { Skills } from './22_Handle-Checkbox'
import Gender, { City } from './23_Handle-Radio-select'
import Table from './24_Loop-with-Map' */












/* function fruit(name) {
  alert(`Fruit 1 ${name}`);
} */

function App() {

  // const [count, setCount] = useState(0)
  /* function fruit(name) {
    alert(`Fruit 2 ${name}`);
  } */

  /*   const userObj = {
      name: "Ramesh Soni",
      age: 30,
      gmail: "Jitudev@gmail.com"
    }
  
    const frndName = ["Sandeep", "Suraj", "Bharat", "Bhual", "Alok"]; */

  // #40 Pass Function in Component as Props
  /*   function kid(name) {
      alert(name);
    };
  
    function fatherName() {
      console.log("Randheer Soni");
    } */
  // #40 Pass Function in Component as Props

  return (
    <>
      {/* #2 React Router */}
      <Routing />


      {/* #52 Context API Reactjs */}
      {/* <SubjectApi /> */}

      {/* #53 - Custom Hooks */}
      {/* <ToggleData /> */}

      {/* 48 useActionState Hook */}
      {/* <UserData /> */}

      {/* #47 Updating Array in State */}
      {/* <Academy />
      <hr /> */}

      {/* #46 Updating Objects in State */}
      {/* <UpdatingObject />

      <hr /> */}

      {/* #45 Lifting State Up in React js */}
      {/* <Players />
      <hr /> */}

      {/* #44 Derived State */}
      {/* <Members />
      <hr /> */}

      {/* #43 Pure components */}
      {/* <Guests />
      <hr /> */}


      {/* #42 useTransition Hook */}
      {/* <FormTrans />
      <hr /> */}

      {/* #41 useFormStatus Hook in React js */}
      {/* <StateForm />
      <hr /> */}

      {/* #40 Forward Ref */}
      {/* <InputForRef />
      <hr /> */}

      {/* #39 uncontrolled component */}
      {/* <From />
      <hr /> */}

      {/* #38 useRef Hook */}
      {/* <UserForm />

      <hr /> */}

      {/* #40 Pass Function in Component as Props */}
      {/* Here onclick passed as a props not as a event or fun, dont be confused */}
      {/* <Kids kid={kid} name={"Aarav"} onClick={fatherName} />
      <Kids kid={kid} name={"Priyansh"} onClick={fatherName} />
      <Kids kid={kid} name={"Ganesh"} onClick={fatherName} />
      <hr /> */}

      {/* #30 Use Effect Hook for Life Cycle Methods in React */}
      {/* <CounterBtn />

      <hr /> */}

      {/* #26 Array Nested Looping with component */}
      {/* <College />

      <hr /> */}
      {/* <ClockColor /> */}
      {/* #25 Reuse Component in loop */}
      {/* <Teams /> */}

      {/* #24 Loop in JSX with Map Function */}
      {/* <Table /> */}


      {/* #23 Handle Radio Button and Dropdown */}
      {/* <Gender />
      <City />
      <hr /> */}


      {/* #22: Handle Checkbox in React */}
      {/* <Skills /> */}

      {/* #20 Get Input Field Value | On change event */}
      {/* <GetIputValue />
      <InpVals /> 
      <hr />*/}

      {/* #19 Pass JSX with Props | Default props */}
      {/* <Member mem="Manoj" />
      <Member mem="Jagdish" />
      <Member /> */}

      {/* <Person col='green'>
        <h3>Person Name : Himesh</h3>
      </Person>
      <Person col='orange'>
        <h3>Person Name : Himesh</h3>
      </Person>
      <Person col='yellow'>
        <h3>Person Name : Himesh</h3>
      </Person>

      <hr /> */}

      {/* <h1>Props Passing Learning</h1>
      <User uName="Jitendra Soni" uAge={30} uEmail={"Jitudev@gmail.com"} />

      <br />
      <h2>---Props Passing with Objects (User 2)---</h2>
      <FriendGroup2 userInfo={userObj} />

      <br />
      <h2>--- Props Passing with Arrays (User 3) ---</h2>
      <FriendGroup3 frndNames={frndName} />

      <br />
      <h2>--- OR Passing One by One ---</h2>
      <FriendGroup4 frndName={frndName[0]} />
      <FriendGroup4 frndName={frndName[1]} />
      <FriendGroup4 frndName={frndName[2]} />
      <FriendGroup4 frndName={frndName[3]} />
      <FriendGroup4 frndName={frndName[4]} />
      <br />


      <h2>--- Props On Click ---</h2>
      <StudName />

      <hr /> */}

      {/* <h1>Hide Show Toggle Data</h1>
      <Toggle />

      <hr />

      <h1>Multi Conditions</h1>
      <MultiCondition /> */}
      {/* <h1>Here is my Fruit</h1>
      <Myfruit />
      <Counter /> */}
      {/* <button onClick={() => fruit("Apple")}>Apple</button>

       <h1>Anil Shahoo Todos</h1>
      <Img1 />
      <List1 />
      <button onClick={alertFun}>Alert Event</button>
       <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React Amazing. Its very Amazing.</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
