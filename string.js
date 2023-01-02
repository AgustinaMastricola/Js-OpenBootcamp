/* Crea un archivo JS que contenga las siguientes líneas
- Una cadena de texto con tu Nombre
- Otra cadena de texto con tu Apellido
- Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
- Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
- Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
- Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
- Una variable que contenga la primera letra del Nombre
- Otra variable que contenga la última letra del Apellido
- Una cadena de texto que elimine los espacios de la variable "estudiante"
- Una variable booleana que diga si el Nombre está contenido en la variable "estudiante" */

let firstname = "Agustina";
let lastname = "Mastricola";
let student = firstname + " " + lastname;
let studentMayus = student.toUpperCase();
let studentMinus = student.toLowerCase();
let countStudent = student.length;
let firstLetterName = firstname.charAt(0);
let lastLetterLastname = lastname.substring(lastname.length - 1);
let withoutSpaces = student.trim();
let isName = student.includes(firstname);

console.log(student, studentMayus, studentMinus, countStudent, firstLetterName, lastLetterLastname, isName);

