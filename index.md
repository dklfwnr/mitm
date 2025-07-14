<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Malla Interactiva – Tecnología Médica</title>
  <link rel="stylesheet" href="styles.css" />
  <link href="https://fonts.googleapis.com/css2?family=Segoe+UI:wght@400;600&display=swap" rel="stylesheet" />
</head>
<body>
  <h1>Malla Interactiva – Tecnología Médica</h1>

  <!-- Botón flotante bloc de notas general -->
  <button id="openNotes" class="notes-btn">📝</button>

  <!-- Contenedor malla -->
  <div id="mesh"></div>

  <!-- Modal bloc de notas general -->
  <div id="notesModal" class="modal">
    <div class="modal-content">
      <span id="closeNotes" class="close">&times;</span>
      <h2>Bloc de notas</h2>
      <textarea id="notesArea" placeholder="Escribe tus notas aquí…"></textarea>
      <button id="saveNotes">Guardar</button>
    </div>
  </div>

  <!-- Modal calculadora de notas por ramo -->
  <div id="gradeModal" class="modal">
    <div class="modal-content">
      <span id="closeGrade" class="close">&times;</span>
      <h2 id="gradeTitle">Notas</h2>

      <label>Nota de presentación (70 %)</label>
      <input type="number" step="0.1" min="1" max="7" id="inputPres" />

      <label>Nota de examen (30 %)</label>
      <input type="number" step="0.1" min="1" max="7" id="inputExam" />

      <p id="gradeResult"></p>
      <button id="saveGrade">Guardar</button>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
