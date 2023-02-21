// Bouton Jouer //
var button_play = document.querySelector('#button_play');
var french_map = document.querySelector('#french_map');
french_map.hidden = true;
var FR_GES = document.querySelector('#FR-GES');
var FR_NAQ = document.querySelector('#FR-NAQ');
var FR_ARA = document.querySelector('#FR-ARA');
var FR_BFC = document.querySelector('#FR-BFC');
var FR_BRE = document.querySelector('#FR-BRE');
var FR_CVL = document.querySelector('#FR-CVL');
var FR_COR = document.querySelector('#FR-COR');
var FR_OCC = document.querySelector('#FR-OCC');
var FR_HDF = document.querySelector('#FR-HDF');
var FR_NOR = document.querySelector('#FR-NOR');
var FR_PDL = document.querySelector('#FR-PDL');
var FR_PAC = document.querySelector('#FR-PAC');
var FR_IDF = document.querySelector('#FR-IDF');


// Tableau des régions //
region_table = [FR_GES.getAttribute('title'), FR_NAQ.getAttribute('title'), FR_ARA.getAttribute('title'), FR_BFC.getAttribute('title'), FR_BRE.getAttribute('title'), FR_CVL.getAttribute('title'), FR_COR.getAttribute('title'), FR_OCC.getAttribute('title'), FR_HDF.getAttribute('title'), FR_NOR.getAttribute('title'), FR_PDL.getAttribute('title'), FR_PAC.getAttribute('title'), FR_IDF.getAttribute('title')];

button_play.addEventListener('click', event =>{
    french_map.hidden = false;

    // Formule Région Aléatoire //
    var random_region = region_table[Math.floor(Math.random() * region_table.length)];
    
    // Question //
   
    region.innerHTML = '<p>Où se trouve la région ' + random_region + ' ?</p>';
})

// Informations sur les régions //
var information = document.querySelector('#information');

// Clics sur les Régions//
FR_GES.addEventListener('click', event =>{
    information.innerHTML = '<p>Région Grand Est<br><br>Population 5 562 651 habitants<br>Densité 97 habitants/km²</p>';
    
})

FR_NAQ.addEventListener('click', event =>{
    information.innerHTML = '<p>Région Nouvelle Aquitaine<br><br>Population	6 033 952 habitants<br>Densité	72 habitants/km²</p>';
})

FR_ARA.addEventListener('click', event =>{
    information.innerHTML = '<p>Région Auvergne Rhône Alpes<br><br>Population 8 078 652 habitants<br>Densité 116 habitants/km²</p>';
})

FR_BFC.addEventListener('click', event =>{
    information.innerHTML = '<p>Région Bourgogne Franche Comté<br><br>Population 2 801 695 habitants<br>Densité 59 habitants/km²</p>';
})

FR_BRE.addEventListener('click', event =>{
    information.innerHTML = '<p>Région Bretagne<br><br>Population 4 829 968 habitants<br>Densité 142 habitants/km²</p>';
})

FR_CVL.addEventListener('click', event =>{
    information.innerHTML = '<p>Région Centre Val de Loire<br><br>Population 2 574 863 habitants<br>Densité 66 habitants/km²</p>';
})

FR_COR.addEventListener('click', event =>{
    information.innerHTML = '<p>Région Corse<br><br>Population 343 701 habitants<br>Densité 39 habitants/km²</p>';
})

FR_IDF.addEventListener('click', event =>{
    information.innerHTML = '<p>Région Île de France<br><br>Population 12 271 794 habitants<br>Densité 1 022 habitants/km²</p>';
})

FR_OCC.addEventListener('click', event =>{
    information.innerHTML = '<p>Région Occitanie<br><br>Population 5 973 969 habitants<br>Densité 82 habitants/km²</p>';
})

FR_HDF.addEventListener('click', event =>{
    information.innerHTML = '<p>Région Hauts de France<br><br>Population 5 997 734 habitants<br>Densité 189 habitants/km²</p>';
})

FR_NOR.addEventListener('click', event =>{
    information.innerHTML = '<p>Région Normandie<br><br>Population 3 325 522 habitants<br>Densité 111 habitants/km²</p>';
})

FR_PDL.addEventListener('click', event =>{
    information.innerHTML = '<p>Pays de la Loire<br><br>Population 3 832 120 habitants<br>Densité 119 habitants/km²</p>';
})

FR_PAC.addEventListener('click', event =>{
    information.innerHTML = '<p>Provence Alpes Côte d\'Azur<br><br>Population 5 098 666 habitants<br>Densité 162 habitants/km²</p>';
})