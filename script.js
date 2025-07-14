/*****************************************************************
 * Malla interactiva + bloc de notas general + calculadora notas *
 *****************************************************************/

/* ---------- Lista completa de cursos ---------- */
const courses = [
  { id: "p-matematicos", name: "Principios matemáticos", sem: 1, pre: [], open: ["biofisica", "estadisticas"] },
  { id: "biologia-celular", name: "Biología celular", sem: 1, pre: [], open: [] },
  { id: "quimica-general", name: "Química general", sem: 1, pre: [], open: ["quimica-organica"] },
  { id: "intro-tec-medica", name: "Introducción a la tecnología médica", sem: 1, pre: [], open: [] },
  { id: "taller-comunicativas", name: "Taller de competencias comunicativas", sem: 1, pre: [], open: [] },
  { id: "taller-aprendizaje", name: "Taller competencias para el aprendizaje", sem: 1, pre: [], open: [] },
  { id: "taller-desarrollo-personal-i", name: "Taller desarrollo personal I", sem: 1, pre: [], open: [] },

  { id: "biofisica", name: "Biofísica", sem: 2, pre: ["p-matematicos"], open: ["fisica-oftalmica"] },
  { id: "proc-enfermeria-primeros-auxilios", name: "Proc. de enfermería y primeros auxilios", sem: 2, pre: [], open: [] },
  { id: "quimica-organica", name: "Química orgánica", sem: 2, pre: ["quimica-general"], open: ["fundamentos-bioquimica"] },
  { id: "anatomia", name: "Anatomía", sem: 2, pre: [], open: ["fisiologia"] },
  { id: "histologia", name: "Histología", sem: 2, pre: [], open: ["inmunologia-basica"] },
  { id: "taller-desarrollo-personal-ii", name: "Taller desarrollo personal II", sem: 2, pre: [], open: [] },
  { id: "cultura-valores", name: "Cultura y valores", sem: 2, pre: [], open: [] },

  { id: "estadisticas", name: "Estadísticas para la ciencia de la salud", sem: 3, pre: ["p-matematicos"], open: ["fundamentos-salud-publica"] },
  { id: "inmunologia-basica", name: "Inmunología básica", sem: 3, pre: ["histologia"], open: ["morfofisiologia-sist-visual"] },
  { id: "fundamentos-bioquimica", name: "Fundamentos en bioquímica", sem: 3, pre: ["quimica-organica"], open: [] },
  { id: "fisiologia", name: "Fisiología", sem: 3, pre: ["anatomia"], open: ["fisiopatologia"] },
  { id: "bioseguridad", name: "Bioseguridad", sem: 3, pre: [], open: [] },
  { id: "persona-sentido", name: "Persona y sentido", sem: 3, pre: [], open: [] },
  { id: "ingles-basico-i", name: "Inglés básico I", sem: 3, pre: [], open: ["ingles-basico-ii"] },

  { id: "fundamentos-salud-publica", name: "Fundamentos en salud pública", sem: 4, pre: ["estadisticas"], open: [] },
  { id: "etica-salud", name: "Ética en salud", sem: 4, pre: [], open: [] },
  { id: "morfofisiologia-sist-visual", name: "Morfofisiología del sistema visual", sem: 4, pre: ["inmunologia-basica"], open: ["morfofisiopatologia-sist-visual", "vision-binocular", "oftalmologia-general", "oftalmofarmacologia"] },
  { id: "fisiopatologia", name: "Fisiopatología", sem: 4, pre: ["fisiologia"], open: ["morfofisiopatologia-sist-visual", "vision-binocular", "oftalmologia-general", "oftalmofarmacologia"] },
  { id: "fisica-oftalmica", name: "Física oftálmica", sem: 4, pre: ["biofisica"], open: ["morfofisiopatologia-sist-visual", "vision-binocular", "oftalmologia-general", "oftalmofarmacologia"] },
  { id: "atencion-primaria-oftalmologica", name: "Atención primaria oftalmológica", sem: 4, pre: [], open: [] },
  { id: "ingles-basico-ii", name: "Inglés básico II", sem: 4, pre: ["ingles-basico-i"], open: [] },

  { id: "oftalmologia-general", name: "Oftalmología general", sem: 5, pre: ["morfofisiopatologia-sist-visual", "vision-binocular", "oftalmofarmacologia"], open: ["estudio-campo-visual", "estrabismo-ortoptica", "optometria-clinica-basica", "ecobiometria-ocular"] },
  { id: "morfofisiopatologia-sist-visual", name: "Morfofisiopatología del sistema visual", sem: 5, pre: ["morfofisiologia-sist-visual", "fisiopatologia", "fisica-oftalmica"], open: ["estudio-campo-visual", "estrabismo-ortoptica", "optometria-clinica-basica"] },
  { id: "vision-binocular", name: "Visión binocular", sem: 5, pre: ["morfofisiologia-sist-visual", "fisiopatologia", "fisica-oftalmica"], open: ["estudio-campo-visual", "estrabismo-ortoptica", "optometria-clinica-basica"] },
  { id: "oftalmofarmacologia", name: "Oftalmofarmacología", sem: 5, pre: ["morfofisiopatologia-sist-visual", "fisiopatologia", "fisica-oftalmica"], open: ["optometria-clinica-basica"] },
  { id: "gestion-salud", name: "Gestión en salud", sem: 5, pre: [], open: [] },

  { id: "estudio-campo-visual", name: "Estudio del campo visual", sem: 6, pre: ["oftalmologia-general", "morfofisiopatologia-sist-visual", "vision-binocular"], open: ["imagenologia-ocular"] },
  { id: "estrabismo-ortoptica", name: "Estrabismo y ortóptica", sem: 6, pre: ["oftalmologia-general", "morfofisiopatologia-sist-visual", "vision-binocular"], open: ["neuroftalmologia"] },
  { id: "optometria-clinica-basica", name: "Optometría clínica básica", sem: 6, pre: ["oftalmologia-general", "morfofisiopatologia-sist-visual", "vision-binocular", "oftalmofarmacologia"], open: ["optometria-clinica-avanzada"] },
  { id: "electivo-i", name: "Electivo I", sem: 6, pre: [], open: ["electivo-ii"] },

  { id: "neuroftalmologia", name: "Neuroftalmología", sem: 7, pre: ["estrabismo-ortoptica"], open: [] },
  { id: "imagenologia-ocular", name: "Imagenología ocular", sem: 7, pre: ["estudio-campo-visual"], open: ["retina-clinica"] },
  { id: "ecobiometria-ocular", name: "Ecobiometría ocular", sem: 7, pre: ["oftalmologia-general"], open: ["metodologia-investigacion", "apoyo-cirugia-refractiva"] },
  { id: "optometria-clinica-avanzada", name: "Optometría clínica avanzada", sem: 7, pre: ["optometria-clinica-basica"], open: [] },

  { id: "metodologia-investigacion", name: "Metodología de la investigación", sem: 8, pre: ["ecobiometria-ocular"], open: ["seminario-investigacion"] },
  { id: "retina-clinica", name: "Retina clínica", sem: 8, pre: ["imagenologia-ocular"], open: ["seminario-investigacion"] },
  { id: "apoyo-cirugia-refractiva", name: "Apoyo en cirugía refractiva", sem: 8, pre: ["ecobiometria-ocular"], open: ["seminario-investigacion"] },
  { id: "electivo-ii", name: "Electivo II", sem: 8, pre: ["electivo-i"], open: [] },

  { id: "seminario-investigacion", name: "Seminario de investigación", sem: 9, pre: ["metodologia-investigacion", "retina-clinica", "apoyo-cirugia-refractiva"], open: [] },
  { id: "clinica-oftalmica", name: "Clínica oftálmica", sem: 9, pre: [], open: [] },
  { id: "electivo-iii", name: "Electivo III", sem: 9, pre: ["electivo-ii"], open: [] },

  { id: "internado-profesional-i", name: "Internado profesional I", sem: 10, pre: ["seminario-investigacion"], open: [] },
  { id: "internado-profesional-ii", name: "Internado profesional II", sem: 10, pre: ["internado-profesional-i"], open: [] },
  { id: "internado-profesional-iii", name: "Internado profesional III", sem: 10, pre: ["internado-profesional-ii"], open: [] },
  { id: "internado-profesional-iv", name: "Internado profesional IV", sem: 10, pre: ["internado-profesional-iii"], open: [] },
  { id: "actividad-titulacion", name: "Actividad de titulación", sem: 10, pre: ["internado-profesional-iv"], open: [] },
];

/* ---------- Estado ---------- */
const done = new Set();
const notes = {}; // notas guardadas por ramo: { id: { pres: n, exam: n, final: n, status: 'aprobado|eximido|reprobado' } }

const palette = [
  "#c5b2f2", "#bda4f0", "#b496ee", "#ac87ec", "#a37ae9",
  "#9b6ce7", "#925ee5", "#8a50e5", "#8a50e2", "#8143e0"
];

/* ---------- Renderizado ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const mesh = document.getElementById("mesh");

  // Crear secciones semestres y botones cursos
  [...new Set(courses.map(c => c.sem))]
    .sort((a,b) => a-b)
    .forEach(sem => {
      const sec = document.createElement("section");
      sec.className = "semester";
      sec.innerHTML = `<h2>Semestre ${sem}</h2>`;

      courses.filter(c => c.sem === sem).forEach((c, i) => {
        const btn = document.createElement("button");
        btn.className = "course disabled";
        btn.dataset.id = c.id;
        btn.textContent = c.name;
        btn.style.setProperty("--border-color", palette[(i + sem) % palette.length]);
        c.el = btn;
        sec.appendChild(btn);
      });
      mesh.appendChild(sec);
    });

  // Primer desbloqueo: cursos sin prereq disponibles
  updateUnlock();

  // Eventos
  mesh.addEventListener("click", onCourseClick);
  mesh.addEventListener("dblclick", onCourseDoubleClick);

  // Notas modal handlers
  setupNotesModal();

  // Bloc notas general
  setupGeneralNotes();
});

/* ---------- Funciones ---------- */

function updateUnlock() {
  // Actualiza estado: habilita los cursos desbloqueados
  courses.forEach(c => {
    if (done.has(c.id)) {
      c.el.classList.add("completed");
      c.el.classList.remove("disabled", "unlocked");
    } else if (c.pre.every(pid => done.has(pid))) {
      // Desbloqueado y no completado
      c.el.classList.add("unlocked");
      c.el.classList.remove("disabled", "completed");
    } else {
      // No desbloqueado
      c.el.classList.add("disabled");
      c.el.classList.remove("completed", "unlocked");
    }
  });
}

function onCourseClick(e) {
  const btn = e.target.closest(".course");
  if (!btn || btn.classList.contains("disabled")) return;

  const id = btn.dataset.id;

  if (done.has(id)) {
    done.delete(id);
  } else {
    done.add(id);
  }
  updateUnlock();
}

function onCourseDoubleClick(e) {
  const btn = e.target.closest(".course");
  if (!btn || btn.classList.contains("disabled")) return;
  openGradeModal(btn.dataset.id);
}

/* ---------- Modal notas por ramo ---------- */
const gradeModalHTML = `
<div id="gradeModal" class="modal">
  <div class="modal-content">
    <span id="closeGrade" class="close">&times;</span>
    <h3 id="gradeTitle"></h3>
    <label>Nota presentación (70%): <input type="number" id="inputPres" min="1" max="7" step="0.1"></label><br><br>
    <label>Nota examen (30%): <input type="number" id="inputExam" min="1" max="7" step="0.1"></label><br><br>
    <div id="gradeResult" style="font-weight:bold;"></div><br>
    <button id="saveGrade">Guardar Nota</button>
  </div>
</div>
`;
document.body.insertAdjacentHTML('beforeend', gradeModalHTML);

const gradeModal = document.getElementById("gradeModal");
const gradeTitle = document.getElementById("gradeTitle");
const inputPres = document.getElementById("inputPres");
const inputExam = document.getElementById("inputExam");
const gradeResult = document.getElementById("gradeResult");
const saveGradeBtn = document.getElementById("saveGrade");
const closeGradeBtn = document.getElementById("closeGrade");

let currentCourseId = null;

function setupNotesModal() {
  closeGradeBtn.onclick = () => {
    gradeModal.style.display = "none";
    clearGradeModal();
  };
  saveGradeBtn.onclick = saveGrades;

  inputPres.addEventListener("input", calcFinalGrade);
  inputExam.addEventListener("input", calcFinalGrade);

  window.onclick = function(event) {
    if (event.target === gradeModal) {
      gradeModal.style.display = "none";
      clearGradeModal();
    }
  }
}

function openGradeModal(id) {
  currentCourseId = id;
  gradeTitle.textContent = `Notas: ${getCourseById(id).name}`;
  const saved = notes[id];
  inputPres.value = saved ? saved.pres : "";
  inputExam.value = saved ? saved.exam : "";
  gradeResult.textContent = saved ? formatResult(saved.final, saved.status) : "";
  gradeModal.style.display = "flex";
}

function clearGradeModal() {
  inputPres.value = "";
  inputExam.value = "";
  gradeResult.textContent = "";
  currentCourseId = null;
}

function calcFinalGrade() {
  const pres = parseFloat(inputPres.value);
  const exam = parseFloat(inputExam.value);
  if (isNaN(pres) || isNaN(exam)) {
    gradeResult.textContent = "";
    return;
  }
  const final = (pres * 0.7) + (exam * 0.3);
  let status = "";
  if (final >= 5.5) status = "Eximido ✅";
  else if (final >= 4.0) status = "Aprobado ✔️";
  else status = "Reprobado ❌";
  gradeResult.textContent = formatResult(final, status);
}

function formatResult(final, status) {
  return `Nota final: ${final.toFixed(2)} — ${status}`;
}

function saveGrades() {
  const pres = parseFloat(inputPres.value);
  const exam = parseFloat(inputExam.value);
  if (isNaN(pres) || isNaN(exam)) {
    alert("Ingresa notas válidas (1.0 a 7.0)");
    return;
  }
  const final = (pres * 0.7) + (exam * 0.3);
  let status = "";
  if (final >= 5.5) status = "eximido";
  else if (final >= 4.0) status = "aprobado";
  else status = "reprobado";
  notes[currentCourseId] = { pres, exam, final, status };

  // Si aprobó o eximió, marcar como aprobado en malla:
  if (status === "aprobado" || status === "eximido") {
    done.add(currentCourseId);
  } else {
    done.delete(currentCourseId);
  }
  updateUnlock();
  gradeModal.style.display = "none";
  clearGradeModal();
}

/* ---------- Bloc de notas general ---------- */
const notesModalHTML = `
<div id="notesModal" class="modal">
  <div class="modal-content">
    <span id="closeNotes" class="close">&times;</span>
    <h3>Bloc de Notas General</h3>
    <
