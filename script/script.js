const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

console.log(teamMembers);

//seleziono l'elemento dell'output
const label = document.querySelector(".container-label")

//creo variabile vuota
let items = "";
//ciclo for per scorrere l'array
for (let i = 0; i < teamMembers.length; i++) {
  let memmbroIesimo = teamMembers[i];
  //estrapolo i valori delle proprietà
  const {name, role, email, img} = memmbroIesimo;

  // console.log(name, role, email, img);
  
  //utilizzo il template literal per creare il template e copio il codice html
  items += `
  <div class="container-label">

    <!-- contenitori immagini -->
    <div class="container-img">
      <img src="img/male1.png" alt="">
    </div>
            
    <!-- contenitori testo -->
    <div class="container-text">
      <h3>MARCO BIANCHI</h3>
      <div class="title">Designer</div>
        <div class="email">marcobianchi@hotmail.it</div>
      </div>

  </div>

  `

  console.log(items);
  
}





// stampo risultato in pagina