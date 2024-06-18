const BuscarClientes = async () => {
    try {
      const response = await fetch(`http://localhost:32831/cliente/clientes`);
    
      return response.json();
    } catch (error) {
      throw new Error('Erro ao buscar clientes. Por favor, tente novamente mais tarde.');
    }
  };
  
  export default BuscarClientes;