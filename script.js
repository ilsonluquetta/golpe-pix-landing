// Coloque aqui o número e a mensagem
// Formato do número: DDI + DDD + número (somente dígitos)
// Ex: 5511999999999
const WHATS_NUMBER = "5513978090963";

const MSG = encodeURIComponent(
  "Olá! Preciso de ajuda URGENTE.\n\n" +
  "✅ Tipo de caso: Golpe do Pix / Golpe online / Fraude bancária\n" +
  "📅 Data e horário do ocorrido: \n" +
  "🏦 Banco/Instituição: \n" +
  "💰 Valor envolvido: \n" +
  "📌 O que aconteceu (resumo): \n" +
  "📎 Tenho comprovantes/prints/extrato: (sim/não)\n\n" +
  "Pode me orientar agora, por favor?"
);

function buildWhatsLink() {
  return `https://wa.me/${WHATS_NUMBER}?text=${MSG}`;
}

function setLinks() {
  const link = buildWhatsLink();
  const ids = ["heroCta", "finalCta", "floatWhats", "topCta"];
  ids.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.href = link;
  });
}

setLinks();
