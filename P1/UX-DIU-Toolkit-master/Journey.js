/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.1 26/Feb/2020            */
/*******************************************/
    
/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		$scope.Grupo_ID ="DIU3.ALH";
        $scope.Curso ="2020/21";
        $scope.Github_ID ="https://github.com/jmillangalvez/DIU21";
        
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Manuel",
                Photo: "men.jpg",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Busca un buen plan para disfrutar de una tarde de tapas y miradores en Granada con unos amigos de fuera",
                touch1: "agenda",
                feel1: "4",
                con1: "Cuadrar su horario del trabajo con el viaje de sus amigos",
                ima1: "cartoon-phoningangry.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Busca en internet un tour de bares cerca de un mirador",
                touch2: "Ordenador",
                feel2: "2",
                con2: "No hay muchas opciones y casi todas requiren un guía pagado",
                ima2: "cartoon-PCangry.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Decide buscar en una zona específica con buenas vistas a la Alhambra",
                touch3: "móvil (Google Maps)",
                feel3: "3",
                con3: "Está preocupado porque no haya muchos bares en esa zona",
                ima3: "cartoon-looking.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Se da cuenta de que la mayoría de tours son nocturnos",
                touch4: "movil (Whatsapp)",
                feel4: "5",
                con4: "Le conmenta la idea a sus amigos y a estos les parece bien",
                ima4: "cartoon-PChappy.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Encuentra un tour que le convence con las caracteríscas anteriores",
                touch5: "Ordenador",
                feel5: "3",
                con5: "No es gratis pero el precio no es muy elevado",
                ima5: "cartoon-PChard.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Reserva el tour y espera que a sus amigos les guste",
                touch6: "Ordenador",
                feel6: "4",
                con6: "Uno de los bares del tour no tiene muy buenas vistas a la Alhambra",
                ima6: "cartoon-resting.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Jessica ",
                Photo: "woman.jpg",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere viajar 15 dias a Granada para ver sus monumentos más importantes y practicar el idoma",
                touch1: "Agenda e Internet",
                feel1: "4",
                con1: "Le interesa una fecha en la los vuelos estén más baratos",
                ima1: "cartoon-PCtyping.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Decide ir la segunda quincena de Mayo ya el clima es bueno",
                touch2: "Ordenador",
                feel2: "3",
                con2: "Los vuelos son caros luego tendrá que abaratar costes en el alojamiento y las visitas",
                ima2: "cartoon-PChard.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Buscando por internet encuentra varias páginas de tours gratis",
                touch3: "Móvil",
                feel3: "4",
                con3: "No está segura de si van a tener buena calidad",
                ima3: "cartoon-phone-sitting.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Encuentra varios tours por los principales monumentos",
                touch4: "Móvil",
                feel4: "3",
                con4: "La información no está en Japones, por lo que tiene que buscar en ingles o en español",
                ima4: "cartoon-reading.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Se decide por un tour en concreto en FreeTour.com",
                touch5: "Ordenador",
                feel5: "3",
                con5: "No sabe esactamente cual es el idioma ya que al estar la página en ingles no lo entendió perfectamente",
                ima5: "cartoon-why.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Realiza la reserva del tour anterior en la fecha indicada",
                touch6: "Ordenador (reserva OK)",
                feel6: "2",
                con6: "En el página de confirmación se da cuenta de que el tour es mitad en ingles y mitad en español por lo que no sabe si se enterará bien",
                ima6: "cartoon-PCangry.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



