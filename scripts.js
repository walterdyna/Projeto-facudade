document.getElementById('agendaForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;
    
    var contato = {
      nome: nome,
      email: email,
      telefone: telefone
    };
    
    adicionarContato(contato);
    limparFormulario();
  });
  
  function adicionarContato(contato) {
    var contatosDiv = document.getElementById('contatos');
    
    var contatoDiv = document.createElement('div');
    contatoDiv.className = 'contato';
    
    var nomeSpan = document.createElement('span');
    nomeSpan.textContent = 'Nome: ' + contato.nome;
    
    var emailSpan = document.createElement('span');
    emailSpan.textContent = 'Email: ' + contato.email;
    
    var telefoneSpan = document.createElement('span');
    telefoneSpan.textContent = 'Telefone: ' + contato.telefone;
    
    contatoDiv.appendChild(nomeSpan);
    contatoDiv.appendChild(emailSpan);
    contatoDiv.appendChild(telefoneSpan);
    
    contatosDiv.appendChild(contatoDiv);
  }
  
  function limparFormulario() {
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('telefone').value = '';
  }
  