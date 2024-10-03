
    const form = document.getElementById('myForm');
    const infoBox = document.getElementById('infoBox');
    const info = document.getElementById('info');
    const closeBtn = document.getElementById('closeBtn');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const nombre = document.getElementById('nombre').value;
        const apellidos = document.getElementById('apellidos').value;
        const edad = parseInt(document.getElementById('edad').value);
        if (nombre == "" || apellidos == "" ||  edad <= 0 || isNaN(edad)) {
            alert("Por favor, ingrese datos válidos.");
            return;
        }
        info.innerHTML = `<strong>Nombre:</strong> ${nombre} <br> <strong>Apellidos:</strong> ${apellidos} <br> <strong>Edad:</strong> ${edad}`;
        infoBox.style.display = "block";
        form.reset();
        document.getElementById('nombre').focus();
    }); 
    closeBtn.addEventListener('click', function () {
        infoBox.style.display = "none";
        form.reset();
        document.getElementById('nombre').focus();
    });
