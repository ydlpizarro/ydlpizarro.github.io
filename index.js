fetch("https://ydlpizarro.github.io/index.html").then(response => response.text())
.then(structuredDataText => {
  const script = document.createElement('script');
  script.setAttribute('type', 'application/ld+json');
  script.textContent = `{"@context":"http://schema.org","@type":"JobPosting","datePosted":"2021-11-03","description":"<h2>Descrição: </h2><p>Irá atuar com divulgação de vagas, triagem, agendamento de entrevistas. Contato telefônico com Candidatos / Gestor das Vagas que serão trabalhadas. Conhecimento no pacote Office. Procuramos um profissional que tenha facilidade com tecnologia, comunicativo e disposto a aprender e crescer.</p>","employmentType":"FULL_TIME","hiringOrganization":{"@type":"Organization","name":"Reachr Soluções Inovadoras em RH","sameAs":"https://www.reachr.com.br/#/vaga/reachr/analista-de-rh/11078/sao-paulo/sp","logo":"http://reachrprod.blob.core.windows.net/uploads/pjlogo/5ea0a8d1-bd20-4825-9871-e3a992e1f749.gif"},"jobLocation":{"@type":"Place","address":{"@type":"PostalAddress","addressLocality":"São Paulo","addressRegion":"SP","addressCountry":"Brasil"}},"title":"Analista de RH","validThrough":"2021-09-07"}`;
  document.body.appendChild(script);
});