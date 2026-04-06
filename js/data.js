
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