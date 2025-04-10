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
        img: 'https://i.pinimg.com/474x/70/5c/7d/705c7d076a80c8c9a693cb36e8560b42.jpg',
      },
      {
        id: 2,
        name: 'Scavenger',
        price: 10,
        strength: 5,
        agility: 5,
        img: 'https://i.pinimg.com/474x/b7/e5/0f/b7e50f845325860785f07149ba29dcb3.jpg',
      },
      {
        id: 3,
        name: 'Shadow',
        price: 18,
        strength: 7,
        agility: 8,
        img: 'https://i.pinimg.com/736x/63/14/9d/63149d4c8de40ee9e02942d45156db24.jpg',
      },
      {
        id: 4,
        name: 'Tracker',
        price: 14,
        strength: 7,
        agility: 6,
        img: 'https://i.pinimg.com/474x/50/00/c1/5000c13c610cd3f0786c9085a0bf1500.jpg',
      },
      {
        id: 5,
        name: 'Sharpshooter',
        price: 20,
        strength: 6,
        agility: 8,
        img: 'https://i.pinimg.com/474x/b6/72/26/b67226a90f51b93a854b063d94591e91.jpg',
      },
      {
        id: 6,
        name: 'Medic',
        price: 15,
        strength: 5,
        agility: 7,
        img: 'https://i0.wp.com/suddenlycat.com/wp-content/uploads/2019/02/Doctor-Cat-Costume-03.png?fit=500%2C638&ssl=1',
      },
      {
        id: 7,
        name: 'Engineer',
        price: 16,
        strength: 6,
        agility: 5,
        img: 'https://64.media.tumblr.com/315613893ef7286bda618355b7a443d0/706bea16232a4664-20/s1280x1920/34da33d7b17f61761ef24279a7d2b64d22677661.jpg',
      },
      {
        id: 8,
        name: 'Brawler',
        price: 11,
        strength: 8,
        agility: 3,
        img: 'https://i.pinimg.com/474x/9c/9b/a1/9c9ba1abeb2dc30c4495d86b63ee9c95.jpg',
      },
      {
        id: 9,
        name: 'Infiltrator',
        price: 17,
        strength: 5,
        agility: 9,
        img: 'https://i.pinimg.com/474x/d5/af/b4/d5afb4cfbfb02b3e4ef47c87772111c8.jpg',
      },
      {
        id: 10,
        name: 'Leader',
        price: 22,
        strength: 7,
        agility: 6,
        img: 'https://i.pinimg.com/736x/a4/66/05/a466055348a2f863516652d5f444c262.jpg',
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
