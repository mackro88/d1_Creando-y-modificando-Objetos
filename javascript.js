"use strict";

/*
* Constructor de Centro Médico 
*/
function MedicalCenter(name, pacient) {
  this.name = name;
  this.pacients = pacient || [];
}
/*
* Constructor de Pacientes 
*/
function Pacient(name, age, rut, diagnosis) {
  var _name = name;
  var _age = age;
  var _rut = rut;
  var _diagnosis = diagnosis;

  Object.defineProperty(this, "name", {
    enumerable: true,
    get: function get() {
      return _name;
    },
    set: function set(newName) {
      _name = newName;
    }
  });

  Object.defineProperty(this, "age", {
    enumerable: true,
    get: function get() {
      return _age;
    },
    set: function set(newAge) {
      _age = newAge;
    }
  });

  Object.defineProperty(this, "rut", {
    enumerable: true,
    get: function get() {
      return _rut;
    },
    set: function set(newRut) {
      _rut = newRut;
    }
  });

  Object.defineProperty(this, "diagnosis", {
    enumerable: true,
    get: function get() {
      return _diagnosis;
    },
    set: function set(newDiagnosis) {
      _diagnosis = newDiagnosis;
    }
  });
}
/*
* Ejemplo Centros Médicos
*/
var mcv = new MedicalCenter("C.M. Valparaíso");
var mcs = new MedicalCenter("C.M. Santiago");
/*
* Ejemplo Pacientes 
*/
var p1 = new Pacient("Karina", 31, "17894095-3", "estrés");
var p2 = new Pacient("Katherina", 29, "17834595-3", "zoo");
var p3 = new Pacient("Silvio", 62, "7830095-3", "diabetes");
var p4 = new Pacient("Laura", 61, "7854295-3", "tiroides");
var p5 = new Pacient("Angelo", 53, "21894095-3", "tdha");
var p6 = new Pacient("Claudio", 53, "16894095-3", "estrés");
var p7 = new Pacient("Sonia", 55, "15434095-3", "sop");
var p8 = new Pacient("Sebastián", 13, "22894095-3", "ansiedad");
var p9 = new Pacient("Fernanda", 30, "17895595-3", "estrés");
/*
* Agregar pacientes a Centro médico 
*/
MedicalCenter.prototype.addPacient = function (pacient) {
  this.pacients.push(pacient);
};
/*
* Ejemplo de agregar pacientes a Centro médico 
*/
mcv.addPacient(p2);
mcv.addPacient(p3);
mcv.addPacient(p4);
mcv.addPacient(p5);
mcv.addPacient(p6);
mcv.addPacient(p7);
mcv.addPacient(p8);
mcs.addPacient(p1);
mcs.addPacient(p9);
/*
* Ver pacientes por Centro Médico
*/
MedicalCenter.prototype.showPacient = function () {
  this.pacients.forEach(function (pacient) {
    console.log("Nombre: " + pacient.name + " | Edad: " + pacient.age + " | Rut: " + pacient.rut + " | Diagnóstico: " + pacient.diagnosis);
  });
};
mcv.showPacient(); // Pacientes de C.M. Valparaíso
mcs.showPacient(); // Pacientes de C.M. Santiago
/*
* Buscar paciente y mostrar sus datos
*/
MedicalCenter.prototype.findPacient = function (find) {
  var finded = "";
  this.pacients.forEach(function (pacient) {
    if (pacient.name == find) {
      finded = pacient;
    }
  });
  if (finded != "") {
    console.log("Paciente encontrado = Nombre: " + finded.name + " | Edad: " + finded.age + " | Rut: " + finded.rut + " | Diagnóstico: " + finded.diagnosis);
  } else {
    console.log("No se han encontrado coincidencias para " + find + ".");
  }
};
mcs.findPacient("Fernanda"); // Ejemplo de Buscar paciente de C.M. Santiago
mcv.findPacient("Angelo"); // Ejemplo de Buscar paciente de C.M. Valparaíso