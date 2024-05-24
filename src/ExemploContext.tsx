import { createContext, useContext, useState } from 'react';

const CyclesContext = createContext({} as any);

function NewCycleForm() {
  let { activeCycle, setActiveCycle } = useContext(CyclesContext);

  return (
    <>
      <h1>NewCycleForm {activeCycle}</h1>

      <button
        onClick={() => {
          setActiveCycle(state => state + 1);
        }}
      >
        Aumentar
      </button>
    </>
  );
}

function Countdown() {
  const { activeCycle } = useContext(CyclesContext);

  return (
    <>
      <h1>Countdown {activeCycle}</h1>
    </>
  );
}

export function Home() {
  const [activeCycle, setActiveCycle] = useState(0);

  return (
    <CyclesContext.Provider value={{ activeCycle, setActiveCycle }}>
      <h1>Home</h1>

      <div>
        <NewCycleForm />
        <Countdown />
      </div>
    </CyclesContext.Provider>
  );
}
