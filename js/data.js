
export const peopleToGuess = [
    {id: Date.now(),name:"yankale",image:"../img/image (1).png",isMale:true,hasGlass:false,hasHat:false,
        hasBeard:true,  hasPacifier:true
    },
    {id: Date.now()+1,name:"yair lev",image:"../img/image (2).png",isMale:true,hasGlass:false,hasHat:false,
        hasBeard:false,  hasPacifier:false
    },
    {id: Date.now()+2,name:"Chaim ben Chaim",image:"../img/image (3).png",isMale:true,hasGlass:false,
    hasHat:true,   hasBeard:true,  hasPacifier:false
    },
    {id: Date.now()+2,name:"Moishi Lando",image:"../img/image (4).png",isMale:true,hasGlass:false,
    hasHat:false,   hasBeard:false,  hasPacifier:true
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
    { id: 9, text: "Does he wear glasses? 👓", property: "hasGlasses" },

    // השאלות החדשות - שימי לב לתוספת של type ו-colorCode
    { id: 10, property: "isBlackHair", type: "color", colorCode: "black" },
    { id: 11, property: "isBrownHair", type: "color", colorCode: "#4b2c20" },
    { id: 12, property: "isGinger", type: "color", colorCode: "#ff9900" },
    { id: 13, property: "isBlonde", type: "color", colorCode: "#faf0be" },
    { id: 14, property: "isWhiteHair", type: "color", colorCode: "white" }
];