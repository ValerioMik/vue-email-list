/* Attraverso l’apposita API di Boolean
 https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email
e stamparli in pagina all’interno di una lista. (sempre untilizzando Vue)
Bonus:
Far comparire gli indirizzi email solamente quando sono stati tutti generati. */

//imposto la pagina html per ricevere una lista di email
//creo unarrey vuoto dove mettere le email
    //mi creo una constante esterna(self) perche il this puo non funzionarmi all'interno di axios
    //stampo in paggina la prima email
    //se funziona creo un ciclo for per stamparmi 10 email random 
     //alla fine creo una condizione che fino quando le email non sono state stampate tutte e 10 non le vedo


var app =new Vue({
    el:'#app',
    data:{
        emails:[],
    },
    mounted(){
        for(i=0;i<10;i++){
            const self = this;
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function(risposta){
                //faccio un consollog per  tirarmi fuori solo email e vedere se tutto funziona
            console.log(risposta.data.response);
            //mi creo una constante esterna(self) perche il this puo non funzionarmi 
            self.emails.push(risposta.data.response)
            });
        };   
    }
});