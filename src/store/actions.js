/* http://localhost:49014
    https://intranet.valuout.com/CloverServices/CloverServices/
*/

import Vue from 'vue'

export default {


  init: function ({
    state,
    commit,
    dispatch
  }) {},

  

  GetEmployeesBySuperviser: function ({
    state,
    commit,
    dispatch
  },values) {
    try {  
 
      Vue.http.get("http://localhost:49014/api/evaluation/GetEmployeesBySuperviser", {
        params: {
          number: values.number //27045
        },
        headers: {
          Authorization: state.token
        },
        progress(e) {
          if (e.lengthComputable) {            
             var time = Math.round(e.loaded / e.total ) * 100;               
             if(time == 100){    
             commit('s_Loading',{value:time,show:false});   
             }
          }
        }, 
      }).then(response => {          
          commit('set_SubordinateByUser',{List:response.body.EmployeesBySuperviser, gridby :values.code });                 
          commit('set_headers',values.headers);        
          commit('sw_uimainEvaluacion', 'employeetoevaluate');

      },
      response =>{              
        commit('s_Loading',{value:0,show:false});              
        dispatch('set_showMessage',{message:response.body == "" ? "Problemas con la conexión a internet" :  response.body.MessageDetail, show:true,title:'Error',showregresar:false,colorThema:'red'});
        dispatch("gsw_ui", "login");
      });
    } catch (e) {          
      dispatch('set_showMessage', {message:e.message,show:true,title:'Error',showregresar:false,colorThema:'red'});
     
    }
  },


  GuardarInfoEvalUsuario: function ({
    state,
    commit,
    dispatch
  }) {

    try {
    
      Vue.http.post("http://localhost:49014/api/evaluation/UpdatateEvaluation", 
      state.loginUser.empleadoaEvaluar.saveUpdateUser,
      {        
        headers: {
          Authorization: state.token
        },
      },
      {
        emulateJSON: true
      }).then(response => {        
        dispatch('set_showMessage',{message:response.body,title:'Información',colorThema:'blue',showregresar:false,show:true});
      },
      response =>{              
        commit('s_Loading',{value:0,show:false});              
        dispatch('set_showMessage',{message:response.body == "" ? "Problemas con la conexión a internet" :  response.body.MessageDetail, show:true,title:'Error',showregresar:false,colorThema:'red'});
        dispatch("gsw_ui", "login");
      });
    } catch (e) {      
      dispatch('set_showMessage', {message:e.message,show:true,title:'Error',showregresar:false,colorThema:'red'});
    }
  },

}