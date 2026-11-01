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
    titulo: "Líder Supremo 1",
    cargo: "Fundador da República",
    nomeacao: "Golpe fundador",
    foto: "assets/autoridades/william.jpg",
    bio: "Idealizador e primeiro Líder Supremo. Foi quem deu início ao golpe que derrubou a antiga ordem do grupo e estabeleceu a República atual."
  },
  {
    nome: "Administrador Supremo 2",
    titulo: "Autoridade administrativa",
    cargo: "a definir",
    nomeacao: "Assembleia Permanente",
    foto: "",
    bio: ""
  },
  {
    nome: "Administrador Supremo 3",
    titulo: "Autoridade administrativa",
    cargo: "a definir",
    nomeacao: "Assembleia Permanente",
    foto: "",
    bio: ""
  },
  {
    nome: "Administrador Supremo 4",
    titulo: "Autoridade administrativa",
    cargo: "a definir",
    nomeacao: "Assembleia Permanente",
    foto: "",
    bio: ""
  },
  {
    nome: "Administrador Supremo 5",
    titulo: "Autoridade administrativa",
    cargo: "a definir",
    nomeacao: "Assembleia Permanente",
    foto: "",
    bio: ""
  },
  {
    nome: "Administrador Supremo 6",
    titulo: "Autoridade administrativa",
    cargo: "a definir",
    nomeacao: "Assembleia Permanente",
    foto: "",
    bio: ""
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
