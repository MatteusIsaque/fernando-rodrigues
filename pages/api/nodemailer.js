
var nodemailer = require('nodemailer');

export default function receber(req, res){

const {Nome, Numero, Email, Mensagem} = req.body

var transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  auth: {
    user: `${process.env.USERMAIL}`,
    pass: `${process.env.PASSMAIL}`,

  },
});

var mailOptions = {
  from: `formularioisaquesestudios@gmail.com`,
  to: 'contato@fernandorodrigues.com.br',
  subject: 'Email recebido pela campanha',
  text:
   `
  Olá esse email chegou do site:
  Nome: ${Nome}
  Número: ${Numero}
  Mensagem: ${Mensagem}
  Email: ${Email}

  Caso algum campo esteja com valor undefined é porque o cliente escolheu não passar essa informação.
  Os Campos nome e numero são obrigatorios.


  Por favor, não responda essa mensagem, caso queira falar por email com o cliente, envio um novo email.
  `
};

transporter.sendMail(mailOptions); 


}