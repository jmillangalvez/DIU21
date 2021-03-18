/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit v1.0 2019    */                        
/*          ver 1.1 26/Feb/2020            */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
        $scope.Grupo_ID ="DIU3.ALH";
        $scope.Curso ="2020/21";
        $scope.Github_ID ="https://github.com/MizugorouZ/DIU21";
        
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Manuel Paredes Heredia",
				Photo: "men.jpg",
				Quote: "Nada es imposible",
				Age: 27,
				Occupation: "Encargado del mantenimiento de una fábrica",
				Family: "Soltero",
				Location: "Granada (Otura)",
				Character: "Le gusta pasar el tiempo con sus amigos",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 3 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 2 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 5 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 4 }
				], 
				Goals: ["Conocer a nuevas personas con gustos similares a los suyos", "Sueña con trabajar para una escudería de Formula 1", "Encontrar una pareja con la que formar una familia"],
				Frustrations: ["Pierde los nervios fácilmente cuando las cosas no salen como él quería", "Tiene el dinero para vivir bien, pero no para viajar todo lo que le gustaría", "Vive en un pueblo pequeño y se siente limitado"],
				Bio: "Es de Otura y estudió Ingenería Mecánica en la universidad en Madrid. Volvío a su pueblo y actualmente trabaja en la fábrica de cervezas Alhambra como encargado del grupo de mantenimiento de las máquinas. Es muy aficionadado a las carreras de automovilismo y le gustaría trabajar en algo relacionado con ello. ",
				Tech: [
					{ Name: "TIC/Internet", Value: 2 },
					{ Name: "Movil", Value: 4 },
					{ Name: "RRSS", Value: 4 },
					{ Name: "Software", Value: 1 }
					
				], 
                Contextos: "Busca un buen plan para disfrutar de una tarde en Granada con unos amigos de fuera que conoció en la universidad mientras estudiaba en Madrid",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 2 },
					{ Name: "Online & Social Media", Value: 5 },
					{ Name: "Recomendaciones & sugerencias", Value: 5 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 4 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Jessica Yamada",
				Photo: "woman.jpg",
				Quote: "Conocer lugares y culturas nuevas te hace disfrutar de la vida de otra manera",
				Age: 23,
				Occupation: "Profesora de Japones",
				Family: "Soltera. Sus padres son japoneses de clase media/alta",
				Location: "Yokohama",
				Character: "Amable, alegre y con mucha energía",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrovertido	/activo ", Value: 5 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 3 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 2 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 4 }
				], 
				Goals: ["Aprender idiomas, sobre todo Francés, Español y Alemán.", "Hacer amigos en todas las partes del mundo.", "Conseguir trabajo como profesora fuera de Japón.", "Hacer un viaje por el mundo con su familia."],
				Frustrations: ["Que la posibilidad de viajar se haya limitado por la pandemia.", "No tener un nivel de inglés muy alto para comunicarse sin problemas.", "No poder viajar todo lo que le gustaría debido a su sueldo.", "Que la mayoría de aplicaciones de viajes no estén en japones."],
				Bio: "Nació en Yokohama en 1997. Desde pequeña ha demostrado un gran interes por los idiomas, sobretodo el japones y el inglés. Actualmente estudia filología japonesa, lo cual convina con clases extraescolares de ingles. Además, estudia por su cuenta un poco de Francés, Alemán y Español. Le encanta viajar y conocer gente de otros paises y culturas. Cuando viaja le gusta tener libertad y visitar los diferentes lugares con tranquilidad. Suele quedarse bastante tiempo en los lugares a los que viaja; como mínimo 2 semanas.",
				Tech: [
					{ Name: "TIC/Internet", Value: 4 },
					{ Name: "Mobile", Value: 4 },
					{ Name: "RRSS", Value: 5 },
					{ Name: "Software", Value: 2 }
					
				], 
                Contextos:   "Lleva tiempo queriendo ir a España para conocer la cultura y practicar un poco el idioma." ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 2 },
					{ Name: "Online & Social Media", Value: 5 },
					{ Name: "Recomendaciones & sugerencias", Value: 3 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 4 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])

	/**Nació en Yokohama en 1997. Desde pequeña ha demostrado un gran interes
	 * por los idiomas, sobretodo el japones y el inglés. Actualmente estudia
	 * filología japonesa, lo cual convina con clases extraescolares de ingles.
	 * Además, estudia por su cuenta un poco de Francés, Alemán y Español. Le encanta
	 * viajar y conocer gente de otros paises y culturas. Cuando viaja le gusta tener
	 * libertad y visitar los diferentes lugares con tranquilidad. Suele quedarse
	 * bastante tiempo en los lugares a los que viaja; como mínimo 2 semanas.
	 */