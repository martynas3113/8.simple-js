
// Jeigu kas menesi zmogus uzdirba 5000 , kiek jis uzdirbs per metus?

const alga = 5000;
const menesiai = 12;
let pajamos = 0;

for (let i = 1; i <= menesiai; i++) {
    pajamos = alga*i
    console.log(`${i} menesis) ${pajamos} pinigu`);
    
}

console.log(`${pajamos} per metus`);




// Parasyti skaicius nuo 8 iki 4

// const skaicius = 8;
// for (let i = 8; i>=4; i--) {
//     console.log(i);
// }


// isvardinti ciferblato skaicius nuo duotos valandos iki galo

const duota = 2;
const maxValandu = 12;
for (let val = duota; val <= maxValandu; val++) {
    console.log(val + ' valanda');
    
}




// Duotas miestu sarasa . Isvardinti kiekviena aplankyta mista

const miestai = ['vilnius','kaunas','klaipeda','panevezys','kazlu ruda']

for (let i = 0; i  < miestai.length;  i++) {
    console.log(`Aplankiau: ${miestai[i]}`);
    
}