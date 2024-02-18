//get al dropdowns from the document
const dropdowns = document.querySelectorAll('.dropdown');

//loop through all dropdowns elements
dropdowns.forEach(dropdown => {
    //get inner elements from each dropdown
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    //add a click event to the select element
    select.addEventListener('click', () => {
        //add the clicked select styles to the select element
        select.classList.toggle('select-clicked');
        //add the rotate styles to the caret element
        caret.classList.toggle('caret-rotate');
        //add the open styles to the menu element
        menu.classList.toggle('menu-open');
    });

    //loop through all option elements
    options.forEach(option => {
        option.addEventListener('click', () => {
            //change selected inner text to clicked option inner text
            selected.innerText = option.innerText;
            //add the clicked select styles to the select element
            select.classList.remove('select-clicked');
            //add the rotate styles to the caret element
            caret.classList.remove('caret-rotate');
            //add the open styles to the menu element
            menu.classList.remove('menu-open');
            //remove active class from all option elements
            options.forEach(opt => {
                opt.classList.remove('active');
            });
            //add active class to clicked option element
            option.classList.add('active');
            // get the file path from the data-file attribute
                const pdfFile = option.dataset.file;

                // open a new window to download the PDF
                window.open(pdfFile, '_blank');
        });
    });
});


// Obtén el enlace principal y las opciones del documento
const downloadCVLink = document.getElementById('download-cv');
const cvOptions = document.getElementById('cv-options').querySelectorAll('a');

// Añade un evento de clic al enlace principal
downloadCVLink.addEventListener('click', (event) => {
    // Previene el comportamiento predeterminado del enlace
    event.preventDefault();

    // Abre o cierra las opciones al hacer clic en el enlace principal
    cvOptions.forEach(option => {
        option.classList.toggle('hidden');
    });
});

// Recorre todas las opciones y añade eventos de clic a cada una
cvOptions.forEach(option => {
    option.addEventListener('click', (event) => {
        // Previene el comportamiento predeterminado del enlace
        event.preventDefault();

        // Cambia el texto del enlace principal al hacer clic en una opción
        downloadCVLink.querySelector('.text-center').innerText = option.innerText;

        // Oculta las opciones después de hacer clic en una opción
        cvOptions.forEach(opt => {
            opt.classList.add('hidden');
        });

        // Obtiene la ruta del archivo desde el atributo data-file
        const pdfFile = option.dataset.file;

        // Abre el PDF en una nueva ventana
        window.location.href = pdfFile;
    });
});
