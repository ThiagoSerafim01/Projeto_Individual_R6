CREATE DATABASE rainbowsix;
USE rainbowsix;
	
CREATE TABLE
    Organizacao (
        idOrganizacao INT PRIMARY KEY AUTO_INCREMENT,
        nomeOrganizacao  VARCHAR(45) NOT NULL,
		regiao VARCHAR(20) NOT NULL,
        logradouro VARCHAR(80) NOT NULL,
        cep CHAR(8) NOT NULL,
        bairro VARCHAR(45),
        complemento VARCHAR(45)
    );

CREATE TABLE
    Perfil (
        idPerfil INT PRIMARY KEY AUTO_INCREMENT,
        username VARCHAR(45) NOT NULL,
        senha varchar(45)  NULL,
        nome VARCHAR(60) NOT NULL,
        email VARCHAR(50) NOT NULL,
        telefone VARCHAR(11),
        funcao VARCHAR(45), CONSTRAINT chkFuncao CHECK (funcao in('Capitão','Suporte', 'Intermediario', 'Loker')),
        fkOrg INT,
        FOREIGN KEY (fkOrg) REFERENCES organizacao (idOrganizacao)
    );
    
    select * from perfil;
    
    CREATE TABLE 
        tentativa(
        idTentativa INT PRIMARY KEY AUTO_INCREMENT,
		acertos INT,
        total INT, 
        fkPerfil INT,
        FOREIGN KEY (fkPerfil) REFERENCES perfil (idPerfil)
        );
        
	
        