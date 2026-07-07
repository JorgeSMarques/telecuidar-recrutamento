migrate((app) => {
  const col = app.findCollectionByNameOrId("candidates");
  
  if (!col.fields.getByName('curriculo')) {
    col.fields.add(new FileField({ 
      name: "curriculo", 
      maxSelect: 1, 
      maxSize: 5242880, 
      mimeTypes: ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"] 
    }));
  }
  
  if (!col.fields.getByName('textoCurriculo')) {
    col.fields.add(new TextField({ 
      name: "textoCurriculo" 
    }));
  }
  
  app.save(col);
}, (app) => {
  const col = app.findCollectionByNameOrId("candidates");
  col.fields.removeByName("curriculo");
  col.fields.removeByName("textoCurriculo");
  app.save(col);
});
