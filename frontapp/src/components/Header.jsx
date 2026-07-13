import reactImg from '../assets/react-core.png'
const choice = ['Fundamentals', 'Crucial', 'Core']

function uniqueNo (max) {
  return Math.floor(Math.random() * (max + 1));
}

export const Header = () => {
  return (
    <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {choice[uniqueNo(2)]} React concepts you will need for almost any app you are
          going to build!
        </p>
    </header>
  )
}
