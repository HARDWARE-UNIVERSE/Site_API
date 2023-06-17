create database hardwareUniverse;
use hardwareUniverse;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar (45),
email varchar (45),
senha varchar (45));

create table Quiz(
idQuiz int primary key auto_increment,
nome varchar (45),
dtCriacao datetime default current_timestamp);


insert into Quiz values 
(null, 'Quanto você conhece Hardware', now()),
(null, 'Game Memory Hardware', now());

create table resultado(
fkUsuario int,
fkQuiz int,
idResultado int auto_increment,
acertos int,
erros int,
dtResultado datetime default current_timestamp,
constraint fkUsuario foreign key (fkUsuario) references usuario (idUsuario),
constraint fkQuiz foreign key (fkQuiz) references quiz (idQuiz),
constraint pkComposta primary key (idResultado, fkUsuario, fkQuiz));



        select sum(acertos) as acertos, sum(erros) as erros
        from resultado where fkQuiz = 1
        and fkUsuario = ${idUsuario}
        order by idResultado desc;