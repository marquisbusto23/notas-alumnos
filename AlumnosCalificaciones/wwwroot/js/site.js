var vm = new Vue({
    el: "#app",
    data: {
        contador1: 0,
        contador2: 0,
        contador3: 0,
        contador4: 0,
        contador5: 0,
        contador6: 0,
        contador7: 0,
        contador8: 0,
        contador9: 0,
        contador10: 0,

       calificacion: {
            nombre: '',
            nota: 0,
            
        },
        
        Calificaciones: [],

             
    },
    
    

    methods: {
        agregarcalificacion: function () {


            this.calificacion.nota = parseInt(this.calificacion.nota);

            switch (this.calificacion.nota) {
                case 1:
                    this.contador1 = this.contador1 + 1;
                    break;         
            
                case 2:
                    this.contador2 = this.contador2 + 1;
                    break;
           
                case 3:
                    this.contador3 = this.contador3 + 1;
            
                case 4:
                    this.contador4 = this.contador4 + 1;
                    break;
           
                case 5:
                    this.contador5 = this.contador5 + 1;
                    break;
            
                case 6:
                    this.contador6 = this.contador6 + 1;
                    break;
            
                case 7:
                    this.contador7 = this.contador7 + 1;
                    break;
            
                case 8:
                    this.contador8 = this.contador8 + 1;
                    break;
            
                case 9:
                    this.contador9 = this.contador9 + 1;
                    break;
            
                case 10:
                    this.contador10 = this.contador10 + 1;
                    break;
            };



            this.Calificaciones.push(this.calificacion);

            this.calificacion = {
                nombre: '',
                nota: 0,
                
            };
        },
        OrdenarListas: function (lista) {
            lista = lista.sort(function (a, b) {
                if (a.nombre > b.nombre) {
                    return 1;
                }
                if (a.nombre < b.nombre) {
                    return -1;
                }

                return 0;
            });

            return lista;
        }
                      
    },

    
})

