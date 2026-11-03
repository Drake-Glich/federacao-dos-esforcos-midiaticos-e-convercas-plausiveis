// ============================================================
//  LISTA DE AUTORIDADES
//  Para editar: mude só o texto entre aspas. Não apague vírgulas,
//  chaves { } nem colchetes [ ].
//
//  foto: caminho da imagem, ex: "assets/autoridades/william.jpg"
//        deixe "" (vazio) enquanto a pessoa não mandou a foto.
//  bio:  texto curto. Deixe "" se não quiser bio.
// ============================================================
const autoridades = [
  {
    nome: "William",
    titulo: "Líder Supremo",
    cargo: "Fundador da República",
    nomeacao: "fundador e atual presidente",
    foto: "assets/autoridades/william.jpg",
    bio: "Idealizador e primeiro Líder Supremo. Foi quem deu início ao golpe que derrubou a antiga ordem e estabeleceu a República atual."
  },
  {
    nome: "Rafael (Drake)",
    titulo: "Autoridade administrativa",
    cargo: "ministro do supremo tribunal federal",
    nomeacao: "Assembleia Permanente",
    foto: "assets/autoridades/rafael.jpg",
    bio: "parente de sangue do fundador, devido a isso possui beneficios exclusivos"
  },
  {
    nome: "Administrador Supremo 3",
    titulo: "Autoridade administrativa",
    cargo: "Advogado-Geral da União (AGU)",
    nomeacao: "Assembleia Permanente",
    foto: "",
    bio: "Responsável por defender as besteiras que o grupo fala e emitir pareceres jurídicos quando as conversas plausíveis passarem do ponto."
  },
  {
    nome: "Administrador Supremo 4",
    titulo: "Autoridade administrativa",
    cargo: "Procurador-Geral da República (PGR)",
    nomeacao: "Assembleia Permanente",
    foto: "",
    bio: "chefe do Ministério Público da União (MPU) e o procurador-geral perante o Supremo Tribunal Federal. É a autoridade máxima responsável por instaurar investigações, propor ações penais públicas e zelar pelo cumprimento da Constituição."
  },
  {
    nome: "Administrador Supremo 5",
    titulo: "Autoridade administrativa",
    cargo: "Presidente do Superior Tribunal de Justiça (STJ)",
    nomeacao: "Assembleia Permanente",
    foto: "",
    bio: "Chefe da corte responsável por uniformizar a interpretação das leis federais"
  },
  {
    nome: "Administrador Supremo 6",
    titulo: "Autoridade administrativa",
    cargo: "Chefe do Estado-Maior Conjunto das Forças Armadas (EMCFA)",
    nomeacao: "Assembleia Permanente",
    foto: "",
    bio: "Chefe do Estado-Maior Conjunto das Forças Armadas (EMCFA)"
  }
];

// ---- daqui para baixo não precisa mexer ----
(function () {
  var alvo = document.getElementById("lista-autoridades");
  if (!alvo) return;
  alvo.innerHTML = autoridades.map(function (a) {
    var retrato = a.foto
      ? '<div class="portrait" style="position:relative;overflow:hidden;padding:0"><img src="' + a.foto + '" alt="Retrato de ' + a.nome + '" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center 22%"></div>'
      : '<div class="portrait">♙</div>';
    return '<article class="person">' + retrato +
      '<h3>' + a.nome + '</h3>' +
      '<p>' + a.titulo + '</p>' +
      '<p><b>Cargo:</b> ' + a.cargo + '</p>' +
      '<p><b>Nomeação:</b> ' + a.nomeacao + '</p>' +
      (a.bio ? '<p>' + a.bio + '</p>' : '') +
      '</article>';
  }).join("");
})();
