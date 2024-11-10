document.getElementById('save').onclick = () => {
    const characterData = {
        //Información básica
        name: document.getElementById('character-name').value,
        class: document.getElementById('character-class').value,
        level: document.getElementById('character-level').value,
        race: document.getElementById('character-race').value,
        background: document.getElementById('character-background').value,

        //Atributos
        strength: document.getElementById('strength').value,
        dexterity: document.getElementById('dexterity').value,
        constitution: document.getElementById('constitution').value,
        intelligence: document.getElementById('intelligence').value,
        wisdom: document.getElementById('wisdom').value,
        charisma: document.getElementById('charisma').value,

        //Habilidades
        stunts: document.getElementById('stunts').value,
        athleticism: document.getElementById('athleticism').value,
        arcaneKnowledge: document.getElementById('arcaneKnowledge').value,
        deceit: document.getElementById('deceit').value,
        history: document.getElementById('history').value,
        interpretation: document.getElementById('interpretation').value,
        intimidation: document.getElementById('intimidation').value,
        sleightOfHand: document.getElementById('sleightOfHand').value,
        medicine: document.getElementById('medicine').value,
        nature: document.getElementById('nature').value,
        perception: document.getElementById('perception').value,
        insight: document.getElementById('insight').value,
        persuasion: document.getElementById('persuasion').value,
        religon: document.getElementById('religon').value,
        stealth: document.getElementById('stealth').value,
        survival: document.getElementById('survival').value,
        dealingWithAnimals: document.getElementById('dealingWithAnimals').value,
    }

    localStorage.setItem('character', JSON.stringify(characterData));
    alert('Personaje Guardado');
};

document.getElementById('load').onclick = () => {
    const characterData = JSON.parse(localStorage.getItem('character'));

    if (characterData) {
        //Información básica
        document.getElementById('character-name').value = characterData.name;
        document.getElementById('character-class').value = characterData.class;
        document.getElementById('character-level').value = characterData.level;
        document.getElementById('character-race').value = characterData.race;
        document.getElementById('character-background').value = characterData.background;

        //Atributos
        document.getElementById('strength').value = characterData.strength;
        document.getElementById('dexterity').value = characterData.dexterity;
        document.getElementById('constitution').value = characterData.constitution;
        document.getElementById('intelligence').value = characterData.intelligence;
        document.getElementById('wisdom').value = characterData.wisdom;
        document.getElementById('charisma').value = characterData.charisma;

        //Habilidades
        document.getElementById('stunts').value = characterData.stunts;
        document.getElementById('athleticism').value = characterData.athleticism;
        document.getElementById('arcaneKnowledge').value = characterData.arcaneKnowledge;
        document.getElementById('deceit').value = characterData.deceit;
        document.getElementById('history').value = characterData.history;
        document.getElementById('interpretation').value = characterData.interpretation;
        document.getElementById('intimidation').value = characterData.intimidation;
        document.getElementById('research').value = characterData.research;
        document.getElementById('sleightOfHand').value = characterData.sleightOfHand;
        document.getElementById('medicine').value = characterData.medicine;
        document.getElementById('nature').value = characterData.nature;
        document.getElementById('perception').value = characterData.perception;
        document.getElementById('insight').value = characterData.insight;
        document.getElementById('persuasion').value = characterData.persuasion;
        document.getElementById('religon').value = characterData.religon;
        document.getElementById('stealth').value = characterData.stealth;
        document.getElementById('survival').value = characterData.survival;
        document.getElementById('dealingWithAnimals').value = characterData.dealingWithAnimals;


    }else{
        alert('No se encontró ningún personaje guardado')
    }
} 