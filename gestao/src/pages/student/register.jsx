import React, { useState } from 'react';
import axios from 'axios';
import './register.css';

const StudentRegistration = () => {
  const [servico, setServico] = useState({
    cpf:'',
    rgAluno:'',
    nis:'',
    numeroCertidao:'',
    serieAno:'',
    nomeAluno:'',
    alunoStatus:'',
    naturnalidadeEstado:'',
    nacionalidade:'',
    tipoSanguinio:'',
    genero:'',
    nomePai:'',
    nomeMae:'',
    emailResposavel:'',
    cpfPai:'',
    cpfMae:'',
    rgPai:'',
    rgMae:'',
    endereco:'',
    dataNascimento:''
  });
  const [servicos, setServicos]=useState({});

  const seriesOptions = [
    { name: 'Maternal', series: 'maternal' },
    { name: 'Jardim I', series: 'jardim1' },
    { name: 'Jardim II', series: 'jardim2' },
    { name: '1° Ano', series: 'ano1' },
    { name: '2° Ano', series: 'ano2' },
    { name: '3° Ano', series: 'ano3' },
    { name: '4° Ano', series: 'ano4' },
    { name: '5° Ano', series: 'ano5' },
    { name: '6° Ano', series: 'ano6' },
    { name: '7° Ano', series: 'ano7' },
    { name: '8° Ano', series: 'ano8' },
    { name: '9° Ano', series: 'ano9' }
  ];

 /* const isValidRG = (rg) => {
    if (!/^\d{9}$/.test(rg)) {
      return false;
    }

    return true;
  };

  const isValidCPF = (cpf) => {
    if (!/^\d{11}$/.test(cpf)) {
      return false;
    }

    if (/^(\d)\1{10}$/.test(cpf)) {
      return false;
    }

    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let remainder = sum % 11;
    if (remainder === 0 || remainder === 1) {
      remainder = 0;
    } else {
      remainder = 11 - remainder;
    }
    if (parseInt(cpf.charAt(9)) !== remainder) {
      return false;
    }

    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
    remainder = sum % 11;
    if (remainder === 0 || remainder === 1) {
      remainder = 0;
    } else {
      remainder = 11 - remainder;
    }
    if (parseInt(cpf.charAt(10)) !== remainder) {
      return false;
    }

    return true;
  };

  const isValidNIS = (nis) => {
    if (!/^\d{11}$/.test(nis)) {
      return false;
    }

    return true;
  };

  /*const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({
      ...student,
      [name]: value
    });
  };*/

  /*const handleSubmit = async (e) => {
    e.preventDefault();
  
    const requiredFields = ['Nome', 'Genero', 'Serie', 'NumeroCertidaoNascimento', 'DataNascimento', 'Naturalidade', 'Nacionalidade', 'RG', 'CPF', 'NIS', 'TipoSanguineo', 'NomePai', 'NomeMae', 'EmailResponsavel', 'CPFPai', 'CPFmae', 'RGPai', 'RGMae', 'Endereco'];
    const missingFields = requiredFields.filter(field => !student[field]);
  
    if (missingFields.length > 0) {
      console.error('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
  
    if (!isValidRG(student.RG)) {
      console.error('RG inválido. Por favor, insira um RG válido.');
      return;
    }
  
    if (!isValidCPF(student.CPF)) {
      console.error('CPF inválido. Por favor, insira um CPF válido.');
      return;
    }
  
    if (!isValidNIS(student.NIS)) {
      console.error('NIS inválido. Por favor, insira um NIS válido.');
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:8080/api/alunos/', student);
      console.log('Estudante registrado com sucesso:', response.data);
    } catch (error) {
      console.error('Houve um erro ao registrar o estudante!', error);
    }
  };*/
  function handleChange(event){
    setServico({...servico,[event.target.name]:event.target.value})
  }

  function handleSubmit(event){
    event.preventDefault();
    axios.post('http://localhost:8080/api/alunos/', servico).then(result=>{
      console.log(result)
      alert("Aluno cadastrado com sucesso!");
      window.location.reload();
    })
  }
  
  return (
    <div className="containr">
      <form onSubmit={handleSubmit}>
        <h2>Registro de Aluno</h2>
        <div className="student-form">
          <label>Nome:</label>
          <input type="text" name="nomeAluno" value={servico.nomeAluno} onChange={handleChange} required />
        </div>
        <div className="student-form">
          <label>Gênero:</label>
          <select name="genero" value={servico.genero} onChange={handleChange} required>
            <option value="">Selecione</option>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
            <option value="Outro">Outro</option>
          </select>
        </div>
        <div className="student-form">
          <label>Série/Ano:</label>
          <select name="serieAno" value={servico.serieAno} onChange={handleChange} required>
            <option value="">Selecione</option>
            {seriesOptions.map(option => (
              <option key={option.series} value={option.series}>{option.name}</option>
            ))}
          </select>
        </div>
        <div className="student-form">
          <label>Naturalidade/Estado:</label>
          <select name="naturnalidadeEstado" value={servico.naturnalidadeEstado} onChange={handleChange} required>
            <option value="">Selecione</option>
            <option value="Agrestina">Agrestina</option>
            <option value="Outro">Outro</option>
          </select>
        </div>
        <div className="student-form">
          <label>Nacionalidade:</label>
          <select name="nacionalidade" value={servico.nacionalidade} onChange={handleChange} required>
            <option value="">Selecione</option>
            <option value="Brasil">Brasil</option>
            <option value="Outro">Outro</option>
          </select>
        </div>
        <div className="student-form">
          <label>NIS:</label>
          <input type="text" name="nis" value={servico.nis} onChange={handleChange} required />
        </div>
        <div className="student-form">
          <label>RG:</label>
          <input type="text" name="rgAluno" value={servico.rgAluno} onChange={handleChange} required />
        </div>
        <div className="student-form">
          <label>Endereço:</label>
          <input type="text" name="endereco" value={servico.endereco} onChange={handleChange} required />
        </div>
        <div className="student-form">
          <label>CPF:</label>
          <input type="text" name="cpf" value={servico.cpf} onChange={handleChange} required />
        </div>
        <div className="student-form">
          <label>Tipo Sanguíneo:</label>
          <select name="tipoSanguinio" value={servico.tipoSanguinio} onChange={handleChange} required>
            <option value="">Selecione</option>
            <option value="A+">A+</option>
            <option value="B+">B+</option>
            <option value="AB+">AB+</option>
            <option value="O+">O+</option>
            <option value="A-">A-</option>
            <option value="B-">B-</option>
            <option value="AB-">AB-</option>
            <option value="O-">O-</option>
            {/* Adicione outras opções conforme necessário */}
          </select>
        </div>
        <div className="parent-form">
          <label>Nome do Pai:</label>
          <input type="text" name="nomePai" value={servico.nomePai} onChange={handleChange} required />
        </div>
        <div className="parent-form">
          <label>Nome da Mãe:</label>
          <input type="text" name="nomeMae" value={servico.nomeMae} onChange={handleChange} required />
        </div>
        <div className="parent-form">
          <label>Email do Responsável:</label>
          <input type="email" name="emailResposavel" value={servico.emailResposavel} onChange={handleChange} required />
        </div>
        <div className="parent-form">
          <label>CPF do Pai:</label>
          <input type="text" name="cpfPai" value={servico.cpfPai} onChange={handleChange} required />
        </div>
        <div className="parent-form">
          <label>CPF da Mãe:</label>
          <input type="text" name="cpfMae" value={servico.cpfMae} onChange={handleChange} required />
        </div>
        <div className="parent-form">
          <label>RG do Pai:</label>
          <input type="text" name="rgPai" value={servico.rgPai} onChange={handleChange} required />
        </div>
        <div className="parent-form">
          <label>RG da Mãe:</label>
          <input type="text" name="rgMae" value={servico.rgMae} onChange={handleChange} required />
        </div>
        <input type="submit" value="Cadastrar"></input>
      </form>
    </div>
  );
};

export default StudentRegistration;
