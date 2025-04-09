import "./App.css";
import { useState } from "react";

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState(
    [
      {
        id: 1,
        name: 'Survivor',
        price: 12,
        strength: 6,
        agility: 4,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
      },
      {
        id: 2,
        name: 'Scavenger',
        price: 10,
        strength: 5,
        agility: 5,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
      },
      {
        id: 3,
        name: 'Shadow',
        price: 18,
        strength: 7,
        agility: 8,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
      },
      {
        id: 4,
        name: 'Tracker',
        price: 14,
        strength: 7,
        agility: 6,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
      },
      {
        id: 5,
        name: 'Sharpshooter',
        price: 20,
        strength: 6,
        agility: 8,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
      },
      {
        id: 6,
        name: 'Medic',
        price: 15,
        strength: 5,
        agility: 7,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
      },
      {
        id: 7,
        name: 'Engineer',
        price: 16,
        strength: 6,
        agility: 5,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
      },
      {
        id: 8,
        name: 'Brawler',
        price: 11,
        strength: 8,
        agility: 3,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
      },
      {
        id: 9,
        name: 'Infiltrator',
        price: 17,
        strength: 5,
        agility: 9,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
      },
      {
        id: 10,
        name: 'Leader',
        price: 22,
        strength: 7,
        agility: 6,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
      },
    ]
    
  );

  const handleAddFighter = (fighter) => {
    // check if afford
    if (fighter.zombieFighter.price > money){
      return console.log("Not enough money.");
    } else {
      setMoney(money - fighter.zombieFighter.price);
    }
    setTeam([...team, fighter.zombieFighter]);
    const clonedFighters = [...zombieFighters];
    const index = zombieFighters.indexOf(fighter.zombieFighter);
    clonedFighters.splice(index, 1);
    setZombieFighters(clonedFighters);
    }

    let totalStrength = 0;
    team.forEach( (fighter) => {
      totalStrength += fighter.strength;
    })

    let totalAgility = 0;
    team.forEach( (fighter) => {
      totalAgility += fighter.agility;
    })

    const handleRemoveFighter = (fighter) => {
      const index = team.indexOf(fighter.fighter);
      team.splice(index, 1);
      setTeam(team);
      setZombieFighters([...zombieFighters, fighter.fighter]);
      setMoney(money + fighter.fighter.price);
    }

  return (
    <>
    <h1>Zombie Fighters</h1>
    <h2>Money: {money}</h2>
    <h2>Team Strength: {totalStrength}</h2>
    <h2>Team Agility: {totalAgility}</h2>
    <h2>Team</h2>
    <ul>{team.length === 0 ? "Pick Some team members" : team.map( (fighter) => {
      return <li key={fighter.id}>
      <img src={fighter.img} />
      <h3>{fighter.name}</h3>
      <p>Price: {fighter.price}</p>
      <p>Strength: {fighter.strength}</p>
      <p>Agility: {fighter.agility}</p>
      <button onClick={() => handleRemoveFighter({fighter})}>Remove</button>
      </li>
    })}</ul>
    <h2>Fighters</h2>
    <ul>
    {zombieFighters.map( (zombieFighter) => {
        return <li key={zombieFighter.id}>
          <img src={zombieFighter.img} />
          <h3>{zombieFighter.name}</h3>
          <p>Price: {zombieFighter.price}</p>
          <p>Strength: {zombieFighter.strength}</p>
          <p>Agility: {zombieFighter.agility}</p>
          <button onClick={() => handleAddFighter({zombieFighter})}>Add</button>
          </li>
    })}
    </ul>
    </>
  );
}

export default App
