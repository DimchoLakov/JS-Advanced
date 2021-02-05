function search() {
   let searchText = document.querySelector('#searchText').value;
   let towns = document.querySelectorAll('#towns li');

   let matchesFound = 0;
   for (const town of towns) {
      if (town.textContent.toLowerCase().indexOf(searchText.toLowerCase()) !== -1) {
         town.style.textDecoration = 'underline';
         town.style.fontWeight = 'bold';
         matchesFound++;
      }
   }

   if (matchesFound !== 0) {
      document.querySelector('#result').textContent = matchesFound.toString() + ' matches found';
   }
}
