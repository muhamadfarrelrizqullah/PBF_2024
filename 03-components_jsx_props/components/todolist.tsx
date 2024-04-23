// const person = {
//     name: 'Gregorio Y. Zara',
//     theme: {
//       backgroundColor: 'black',
//       color: 'pink'
//     },
//     img: "https://i.imgur.com/d0eD64Ps.jpeg"
//   };

//   export default function TodoList() {
//     return (
//       <div style={person.theme}>
//         <h1>{person.name}'s Todos</h1>
//         <img
//           className="avatar"
//           src={person.img}
//           alt="Gregorio Y. Zara"
//         />
//         <ul>
//           <li>Improve the videophone</li>
//           <li>Prepare aeronautics lectures</li>
//           <li>Work on the alcohol-fuelled engine</li>
//         </ul>
//       </div>
//     );
//   }


  const baseUrl = 'https://i.imgur.com/';
  const person = {
    name: 'Gregorio Y. Zara',
    imageId: 'd0eD64P',
    imageSize: 's',
    theme: {
      backgroundColor: 'black',
      color: 'pink'
    }
  };
  
  export default function TodoList() {
    return (
      <div style={person.theme}>
        <h1>{person.name}'s Todos</h1>
        <img
          className="avatar"
          src={baseUrl+person.imageId+person.imageSize+".jpeg"}
          alt={person.name}
        />
        <ul>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
      </div>
    );
  }