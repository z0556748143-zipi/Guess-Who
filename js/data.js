
export const peopleToGuess = [
    {id: Date.now(),name:"avrham",image:"../img/avreimi.png",isMale:true,hasGlass:false,hasHat:false,
        hasBeard:false,  hasPacifier:false
    },
    {id: Date.now()+1,name:"baruch baby",image:"../img/baruch.png",isMale:true,hasGlass:false,hasHat:false,
        hasBeard:false,  hasPacifier:true
    },
    {id: Date.now()+2,name:"chagit shalom",image:"../img/chagit shalom.png",isMale:false,hasGlass:false,
    hasHat:true,   hasBeard:false,  hasPacifier:false
    },
    {id: Date.now()+3,name:"Motty Katzh",image:"../img/Designer (1).png",isMale:true,hasGlass:false,
    hasHat:false,  hasBeard:false,  hasPacifier:false
    },    

];

let num= Math.floor(Math.random() * peopleToGuess.length);
export const personToGuess=peopleToGuess[num];



export const questions = [
    { id: 1, text: "Is it a man? 👨", property: "isMan" },
    { id: 2, text: "Is it a baby? 👶", property: "isBaby" },
    { id: 3, text: "Does he have freckles? ✨", property: "hasFreckles" },
    { id: 4, text: "Is there a hat on the head? 🎩", property: "hasHat" },
    { id: 5, text: "Is he holding something? 🎁", property: "isHoldingSomething" },
    { id: 6, text: "Is there a hair decoration? 🎀", property: "hasHairDecoration" },
    { id: 7, text: "Is he bearded? 🧔", property: "isBearded" },
    { id: 8, text: "Is the hair curly? 👨‍🦱", property: "isCurlyHair" },
    { id: 9, text: "Does he wear glasses? 👓", property: "hasGlasses" }
];