const firstReply = prompt("Olá, qual área de dev você gostaria de seguir? Responda Front-end ou Back-end");

replySpec = ""

if (firstReply === "Front-end" || firstReply === "frontend") {
    replySpec = prompt("Você gosta da integração com o usuário então. E prefere aprender Vue ou React?");
}    
else if (firstReply === "Back-end" || firstReply === "backend") {
    replySpec = prompt("Você gosta do que está por trás da cortina então. E prefere aprender C# ou Java?");
}
else { 
    prompt("Você inseriu uma resposta inválida. Recarregue a página para começar novamente.");
}

const replyCareer = prompt(`${replySpec} é uma ótima escolha! E se você quer ser um especialista digite 1. Para fullstack digita 2`);
if (replyCareer === "1") {
    alert(`Ser um especialista em uma linguagem é muito importante para muitas carreiras. Continue estudando ${replySpec} para se especializar em ${firstReply}`);
}
else if (replyCareer === "2") {
    alert(`Chegou a hora de começar a aprender outras linguagens além de ${replySpec} se você quer se tornar Fullstack!`);
}
else { 
    prompt("Você inseriu uma resposta inválida. Recarregue a página para começar novamente.");
} 

const techList = [];
let replyTech = prompt("E tem alguma tecnologia que você queira aprender? Responda uma por vez. Se não tiver ou quando acabar de listar, responda 'não' ");

while (replyTech !== "não") {
    techList.push(` ${replyTech}`);
    replyTech = prompt("Mais alguma tecnologia? Qual?");
    }
alert(`Pronto, aqui está sua lista de estudos: ${techList}`);