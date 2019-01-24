use knowtech;

for (var i=1; i < 10000; i++) 
{
db.alumno.insert(
	{
idAlumno: i ,
Nombre: "Pepe" ,
Apellidos: "Pepino" ,
Dni: "X1112223"
	}
				)
};
