function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {

      let allRows = document.querySelectorAll('tbody tr');
      for (const row of allRows) {
         row.classList.remove('select');
      }

      let searchText = document.querySelector('#searchField').value;

      let allTds = document.querySelectorAll('tbody td');

      for (const td of allTds) {
         if (td.textContent.toLowerCase().indexOf(searchText.toLocaleLowerCase()) !== -1 &&
             searchText !== '') {
            if (td.parentElement !== null) {
               td.parentElement.classList.add('select');
            }
         }
      }
   }
}