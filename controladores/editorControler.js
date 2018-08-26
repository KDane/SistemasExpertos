var controler={};


$("#slc-lenguaje").change(function(){
    lenguaje();
});


function lenguaje(){
     editor.session.setMode("ace/mode/" +$("#slc-lenguaje").val());
};
   var e = ace.edit("Editor");
   e.setTheme("ace/theme/tomorrow_night");
   e.getSession().setTabSize(2);

module.exports=editorControler;