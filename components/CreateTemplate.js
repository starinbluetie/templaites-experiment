
import React, { useState } from 'react';

function CreateTemplate() {
  const [templateTitle, setTemplateTitle] = useState('');
  const [promptList, setPromptList] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // ...existing code...
  };

  return (
    <section>
      <h2>Creación de Plantillas</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={templateTitle}
          onChange={(e) => setTemplateTitle(e.target.value)}
          placeholder="Titulo del template"
          required
        />
        <textarea
          value={promptList}
          onChange={(e) => setPromptList(e.target.value)}
          className="prompt-list"
          placeholder="Lista de Prompts"
          required
        />
        <input
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="Etiquetas/Categorías"
          required
        />
        <button type="submit">Guardar</button>
      </form>
    </section>
  );
}

export default CreateTemplate;