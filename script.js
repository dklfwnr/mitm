const semesters = {
  "I SEMESTRE": [
    { name: "Principios matematicos", unlocks: ["Biofisica", "Estadisticas para la ciencia de la salud"] },
    { name: "Biologia celular", unlocks: [] },
    { name: "Quimica general", unlocks: ["Quimica organica"] },
    { name: "Introduccion a la tecnologia medica", unlocks: [] },
    { name: "Taller de competencias comunicativas", unlocks: [] },
    { name: "Taller de competencias para el aprendisaje", unlocks: [] },
    { name: "Taller de desarrollo personal I", unlocks: [] }
  ],
  "II SEMESTRE": [
    { name: "Biofisica", unlocks: ["Fisica oftalmica"] },
    { name: "Proc de enfermeria y primeros auxilios", unlocks: [] },
    { name: "Quimica organica", unlocks: ["Fundamentos en bioquimica"] },
    { name: "Anatomia", unlocks: ["Fisiologia"] },
    { name: "Histologia", unlocks: ["Inmunologia basica"] },
    { name: "Taller de desarrollo personal II", unlocks: [] },
    { name: "Cultura y valores", unlocks: [] }
  ],
  "III SEMESTRE": [
    { name: "Estadisticas para la ciencia de la salud", unlocks: ["Fundamentos en salud publica"] },
    { name: "Inmunologia basica", unlocks: ["Morfofisiologia del sistema visual"] },
    { name: "Fundamentos en bioquimica", unlocks: [] },
    { name: "Fisiologia", unlocks: ["Fisiopatologia"] },
    { name: "Bioseguridad", unlocks: [] },
    { name: "Persona y sentido", unlocks: [] },
    { name: "Ingles basico I", unlocks: ["Ingles basico II"] }
  ],
  "IV SEMESTRE": [
    { name: "Fundamentos en salud publica", unlocks: [] },
    { name: "Etica en salud", unlocks: [] },
    { name: "Morfofisiologia del sistema visual", unlocks: ["Morfofisiopatologia del sistema visual", "Vision binocular", "Oftalmologia general", "Oftalmofarmacologia"] },
    { name: "Fisiopatologia", unlocks: ["Morfofisiopatologia del sistema visual", "Vision binocular", "Oftalmologia general", "Oftalmofarmacologia"] },
    { name: "Fisica oftalmica", unlocks: ["Morfofisiopatologia del sistema visual", "Vision binocular", "Oftalmologia general", "Oftalmofarmacologia"] },
    { name: "Atencion primaria oftalmologica", unlocks: [] },
    { name: "Ingles basico II", unlocks: [] }
  ],
  "V SEMESTRE": [
    { name: "Oftalmologia general", unlocks: ["Estudio del campo visual", "Estrabismo y ortoptica", "Optometria clinica basica", "Ecobiometria ocular"] },
    { name: "Morfofisiopatologia del sistema visual", unlocks: ["Estudio del campo visual", "Estrabismo y ortoptica", "Optometria clinica basica"] },
    { name: "Vision binocular", unlocks: ["Estudio del campo visual", "Estrabismo y ortoptica", "Optometria clinica basica"] },
    { name: "Oftalmofarmacologia", unlocks: ["Optometria clinica basica"] },
    { name: "Gestion en salud", unlocks: [] }
  ],
  "VI SEMESTRE": [
    { name: "Estudio del campo visual", unlocks: ["Imagenologia Ocular"] },
    { name: "Estrabismo y ortoptica", unlocks: ["Neuroftalmologia"] },
    { name: "Optometria clinica basica", unlocks: ["Optometria clinica avanzada"] },
    { name: "ELECTIVO I", unlocks: ["ELECTIVO II"] }
  ],
  "VII SEMESTRE": [
    { name: "Neuroftalmologia", unlocks: [] },
    { name: "Imagenologia Ocular", unlocks: ["Retina clínica"] },
    { name: "Ecobiometria ocular", unlocks: ["Metodologia de la investigacion", "Apoyo en cirugia refractiva"] },
    { name: "Optometria clinica avanzada", unlocks: [] }
  ],
  "VIII SEMESTRE": [
    { name: "Metodologia de la investigacion", unlocks: ["SEMINARIO DE INVESTIGACIÓN"] },
    { name: "Retina clínica", unlocks: ["SEMINARIO DE INVESTIGACIÓN"] },
    { name: "Apoyo en cirugia refractiva", unlocks: ["SEMINARIO DE INVESTIGACIÓN"] },
    { name: "ELECTIVO II", unlocks: [] }
  ],
  "IX SEMESTRE": [
    { name: "SEMINARIO DE INVESTIGACIÓN", unlocks: [] },
    { name: "CLINICA OFTALMICA", unlocks: [] },
    { name: "ELECTIVO III", unlocks: [] }
  ],
  "X SEMESTRE": [
    { name: "INTERNADO PROFESIONAL I", unlocks: [] },
    { name: "INTERNADO PROFESIONAL II", unlocks: [] },
    { name: "INTERNADO PROFESIONAL III", unlocks: [] },
    { name: "INTERNADO PROFESIONAL IV", unlocks: [] }
  ],
  "TITULACIÓN": [
    { name: "ACTIVIDAD DE TITULACIÓN", unlocks: [] }
  ]
};

const completed = new Set();

function renderMesh() {
  const mesh = document.getElementById("mesh");
  mesh.innerHTML = "";

  Object.entries(semesters).forEach(([semester, courses]) => {
    const col = document.createElement("div");
    col.className = "semester";
    col.innerHTML = `<h2>${semester}</h2>`;
    courses.forEach(course => {
      const btn = document.createElement("div");
      btn.className = "course";
      btn.textContent = course.name;
      btn.dataset.name = course.name;

      btn.addEventListener("click", () => toggleCourse(course.name));

      col.appendChild(btn);
    });
    mesh.appendChild(col);
  });

  updateState();
}

function toggleCourse(name) {
  const isDone = completed.has(name);
  if (isDone) {
    completed.delete(name);
  } else {
    completed.add(name);
    openGradeModal(name);
  }
  updateState();
}

function updateState() {
  document.querySelectorAll(".course").forEach(el => {
    const name = el.dataset.name;
    el.classList.remove("completed", "unlocked");
    if (completed.has(name)) {
      el.classList.add("completed");
    } else {
      for (const [sem, courses] of Object.entries(semesters)) {
        for (const course of courses) {
          if (completed.has(course.name) && course.unlocks.includes(name)) {
            el.classList.add("unlocked");
          }
        }
      }
    }
  });
}

// Bloc de notas
document.getElementById("openNotes").onclick = () => {
  document.getElementById("notesModal").style.display = "flex";
};
document.getElementById("closeNotes").onclick = () => {
  document.getElementById("notesModal").style.display = "none";
};

// Modal de cálculo de nota
function openGradeModal(name) {
  const modal = document.getElementById("gradeModal");
  document.getElementById("gradeTitle").textContent = `Notas para ${name}`;
  document.getElementById("inputPres").value = "";
  document.getElementById("inputExam").value = "";
  document.getElementById("gradeResult").textContent = "";
  modal.style.display = "flex";

  document.getElementById("saveGrade").onclick = () => {
    const pres = parseFloat(document.getElementById("inputPres").value);
    const exam = parseFloat(document.getElementById("inputExam").value);
    if (!isNaN(pres) && !isNaN(exam)) {
      const final = (pres * 0.7 + exam * 0.3).toFixed(2);
      let msg = `Nota final: ${final}`;
      if (final >= 5.5) msg += " ✅ Eximido";
      else if (final >= 4.0) msg += " ⚠️ Aprobado";
      else msg += " ❌ Reprobado";
      document.getElementById("gradeResult").textContent = msg;
    }
  };

  document.getElementById("closeGrade").onclick = () => {
    modal.style.display = "none";
  };
}

renderMesh();
