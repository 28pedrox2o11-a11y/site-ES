function abrirRegiao(titulo, descricao, municipios) {
  document.getElementById("tituloRegiao").innerText = titulo;
  document.getElementById("descricaoRegiao").innerText = descricao;

  document.getElementById("municipiosRegiao").innerHTML = municipios
    .map(m => `<a href="${m.link}">${m.nome}</a>`)
    .join("");

  document.getElementById("caixaRegiao").style.display = "flex";
}

function fecharCaixa() {
  document.getElementById("caixaRegiao").style.display = "none";
}