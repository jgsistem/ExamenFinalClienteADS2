#studentClient
studentClient v0.0.1
Alumno: 
 - Gustavo Jonathan Osorio Tello
 
 ADSExamenFinal
Endpoints:
Estudiantes de Doctorado
https://my-jg17examenfinal-reflective-okapi.cfapps.io/api/Student/GetAllStudent/{typeStudent}
https://my-jg17examenfinal-reflective-okapi.cfapps.io/api/Student/GetAllStudent/3

Estudiantes de Maestría
https://my-jg17examenfinal-reflective-okapi.cfapps.io/api/Student/GetAllStudent/{typeStudent}
https://my-jg17examenfinal-reflective-okapi.cfapps.io/api/Student/GetAllStudent/2

Estudiantes de Pregrado
https://my-jg17examenfinal-reflective-okapi.cfapps.io/api/Student/GetAllStudent/{typeStudent}
https://my-jg17examenfinal-reflective-okapi.cfapps.io/api/Student/GetAllStudent/1

Todos los estudiantes
https://my-jg17examenfinal-reflective-okapi.cfapps.io/api/Student/GetAllStudent

Calcular el monto de la beca por código de estudiante
Pregrado, Maestria y Doctorado:

Se manejan directamente en una Tabla: tipoalumno, donde existen los 3 tipos de modalidades de la Universidad.
Y en la tabla Alumno, cada vez que se matricule un alumno se registra tipo de modalidad que desea. Siendo transparente el cálculo.


