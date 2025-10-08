import {Weight, Answer, Exam} from './exams.js';

//alunos
const aluno1:Answer = new Answer('Dick Grayson', ['a', 'b', 'c', 'd', 'd']); //nota: 8
const aluno2:Answer = new Answer('Jason Todd', ['a', 'b', 'c', 'd', 'd']) //nota: 8
const aluno3:Answer = new Answer('Tim Drake', ['a', 'b', 'c', 'd', 'e']); //nota: 10
const aluno4:Answer = new Answer('Stephanie Brown', ['a', 'b', 'c', 'a', 'a']); //nota: 6
const aluno5:Answer = new Answer('Damian Wayne', ['a', 'a', 'a', 'a', 'a']) //nota: 2

//prova
const peso:Weight = new Weight([2, 2, 2, 2, 2]);
const gabarito:Answer = new Answer('gabarito', ['a', 'b', 'c', 'd', 'e']);
const exam:Exam = new Exam(peso, gabarito);

exam.add(aluno1);
exam.add(aluno2);
exam.add(aluno3);
exam.add(aluno4);
exam.add(aluno5);

//testes
console.log('-=-=- alunos -=-=-')
console.log('nome: Dick Grayson - respostas: a, b, c, d, d');
console.log('nome: Jason Todd - respostas: a, b, c, d, d');
console.log('nome: Tim Drake - respostas: a, b, c, d, e');
console.log('nome: Stephanie Brown - respostas: a, b, c, a, a');
console.log('nome: Damian Wayne - respostas: a, a, a, a, a');

console.log('\n-=-=- estatísticas da prova -=-=-');
console.log('média: ', exam.avg());
console.log('3 menores notas: ',exam.min(3));
console.log('3 maiores notas: ',exam.max(3));
console.log('notas menores que 7: ',exam.lt(7));
console.log('notas maiores que 7: ',exam.gt(7))