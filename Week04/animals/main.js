import { animals } from "./animals.js";
import { sortByNameAscending, sortByNameDescending } from './sortHelpers.js';

function output(results) { 
  results.forEach(function(item){ 
      //console.log(item.species); 
      let article = document.createElement('article'); 
      let petName = document.createElement('h2'); 
      let species = document.createElement('h3'); 
      petName.textContent = item.name; 
      species.textContent = item.species; 

      article.appendChild(petName); 
      article.appendChild(species); 

      document.querySelector('#pets').appendChild(article); 

  });   
}; 
function sortBy() { 
  document.querySelector('#pets').innerHTML = ""; 
  let sort = document.querySelector("#sortBy").value;  
  if(sort == 'petNameAscending') { 
      output( animals.sort(sortByNameAscending) ); 
  } else if (sort == 'petNameDescending') { 
      output( animals.sort(sortByNameDescending) ); 
  } else { 
      alert('Pick ASC or DESC'); 
  } 
} 
document.querySelector("#sortBy").addEventListener('change', sortBy); 