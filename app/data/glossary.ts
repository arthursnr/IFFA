export type GlossaryCategory =
  | "Direitos"
  | "Educação"
  | "Saúde"
  | "Acessibilidade"
  | "Inclusão";

export type GlossaryTerm = {
  id: string;
  term: string;
  abbreviation?: string;
  category: GlossaryCategory;
  definition: string;
  simpleExplanation: string;
  relatedTerms: string[];
};

export const glossaryTerms: GlossaryTerm[] = [
  {
    id: "aee",
    term: "Atendimento Educacional Especializado",
    abbreviation: "AEE",
    category: "Educação",
    definition:
      "Serviço educacional que identifica, organiza e oferece recursos pedagógicos e de acessibilidade para apoiar estudantes com deficiência, transtornos do espectro autista e altas habilidades ou superdotação.",
    simpleExplanation:
      "É um atendimento que busca ajudar o estudante a superar barreiras e participar melhor da vida escolar. Ele complementa, e não substitui, a escolarização regular.",
    relatedTerms: ["Inclusão escolar", "Tecnologia assistiva"],
  },
  {
    id: "acessibilidade",
    term: "Acessibilidade",
    category: "Acessibilidade",
    definition:
      "Condição que permite às pessoas acessar, compreender e utilizar espaços, serviços, produtos, informações e tecnologias com segurança e autonomia.",
    simpleExplanation:
      "É garantir que as pessoas consigam utilizar lugares, serviços e informações sem barreiras.",
    relatedTerms: ["Tecnologia assistiva", "Inclusão"],
  },
  {
    id: "bpc",
    term: "Benefício de Prestação Continuada",
    abbreviation: "BPC",
    category: "Direitos",
    definition:
      "Benefício assistencial previsto na Lei Orgânica da Assistência Social que garante um salário mínimo mensal à pessoa com deficiência ou à pessoa idosa com 65 anos ou mais que cumpra os requisitos legais.",
    simpleExplanation:
      "É um benefício assistencial de um salário mínimo para pessoas que atendem aos critérios previstos na legislação. Não é aposentadoria.",
    relatedTerms: ["LOAS", "Pessoa com deficiência"],
  },
  {
    id: "ca",
    term: "Comunicação Aumentativa e Alternativa",
    abbreviation: "CAA",
    category: "Acessibilidade",
    definition:
      "Conjunto de estratégias, recursos e métodos que auxiliam ou substituem a fala na comunicação de pessoas com necessidades complexas de comunicação.",
    simpleExplanation:
      "São recursos que ajudam uma pessoa a se comunicar, como imagens, símbolos, pranchas ou dispositivos.",
    relatedTerms: ["Tecnologia assistiva", "Acessibilidade"],
  },
  {
    id: "capacitismo",
    term: "Capacitismo",
    category: "Inclusão",
    definition:
      "Discriminação, preconceito ou práticas que desvalorizam pessoas com deficiência com base em concepções de capacidade, normalidade ou produtividade.",
    simpleExplanation:
      "É tratar uma pessoa de forma preconceituosa por causa da deficiência, supondo que ela seja incapaz ou inferior.",
    relatedTerms: ["Inclusão", "Pessoa com deficiência"],
  },
  {
    id: "deficiencia",
    term: "Deficiência",
    category: "Inclusão",
    definition:
      "Impedimento de longo prazo de natureza física, mental, intelectual ou sensorial que, em interação com barreiras, pode obstruir a participação plena e efetiva de uma pessoa na sociedade.",
    simpleExplanation:
      "A deficiência não está apenas na condição da pessoa. As barreiras do ambiente e da sociedade também podem dificultar sua participação.",
    relatedTerms: ["Acessibilidade", "Pessoa com deficiência"],
  },
  {
    id: "tea",
    term: "Transtorno do Espectro Autista",
    abbreviation: "TEA",
    category: "Saúde",
    definition:
      "Condição do neurodesenvolvimento caracterizada por diferenças na comunicação e interação social e por padrões de comportamento, interesses ou atividades que podem ser restritos ou repetitivos.",
    simpleExplanation:
      "O autismo envolve diferentes formas de perceber, comunicar, interagir e vivenciar o mundo. Cada pessoa autista é única.",
    relatedTerms: ["Neurodiversidade", "Inclusão"],
  },
  {
    id: "tdah",
    term: "Transtorno do Déficit de Atenção com Hiperatividade",
    abbreviation: "TDAH",
    category: "Saúde",
    definition:
      "Transtorno do neurodesenvolvimento associado a padrões persistentes de desatenção e/ou hiperatividade e impulsividade que podem interferir em diferentes áreas da vida.",
    simpleExplanation:
      "O TDAH pode influenciar a concentração, a organização, o controle de impulsos e a realização de atividades cotidianas.",
    relatedTerms: ["Neurodiversidade"],
  },
  {
    id: "loas",
    term: "Lei Orgânica da Assistência Social",
    abbreviation: "LOAS",
    category: "Direitos",
    definition:
      "Lei nº 8.742/1993, que organiza a assistência social no Brasil e estabelece normas para a proteção social, incluindo a regulamentação do BPC.",
    simpleExplanation:
      "É uma lei que organiza a assistência social no Brasil e estabelece direitos e serviços para pessoas em situações de vulnerabilidade.",
    relatedTerms: ["BPC", "Pessoa com deficiência"],
  },
  {
    id: "neurodiversidade",
    term: "Neurodiversidade",
    category: "Inclusão",
    definition:
      "Conceito que reconhece a diversidade natural das formas de funcionamento neurológico humano, incluindo diferentes formas de pensar, aprender, perceber e interagir.",
    simpleExplanation:
      "Significa reconhecer que existem diferentes maneiras de o cérebro funcionar e que essas diferenças fazem parte da diversidade humana.",
    relatedTerms: ["TEA", "TDAH", "Inclusão"],
  },
  {
    id: "pcd",
    term: "Pessoa com deficiência",
    abbreviation: "PCD",
    category: "Inclusão",
    definition:
      "Pessoa que possui impedimento de longo prazo de natureza física, mental, intelectual ou sensorial que, em interação com barreiras, pode restringir sua participação plena e efetiva na sociedade.",
    simpleExplanation:
      "É a forma de referência que coloca a pessoa antes da deficiência, reconhecendo sua dignidade, identidade e direitos.",
    relatedTerms: ["Acessibilidade", "Capacitismo"],
  },
  {
    id: "inclusao-escolar",
    term: "Inclusão escolar",
    category: "Educação",
    definition:
      "Processo de garantir que estudantes participem do ambiente educacional, com acesso, permanência, aprendizagem e participação, considerando suas necessidades e eliminando barreiras.",
    simpleExplanation:
      "Não é apenas colocar o estudante na escola, mas garantir que ele tenha condições de aprender, participar e ser acolhido.",
    relatedTerms: ["AEE", "Acessibilidade"],
  },
  {
    id: "tecnologia-assistiva",
    term: "Tecnologia assistiva",
    category: "Acessibilidade",
    definition:
      "Conjunto de recursos, produtos, dispositivos, estratégias e serviços que promovem funcionalidade, autonomia, participação e qualidade de vida de pessoas com deficiência.",
    simpleExplanation:
      "São ferramentas ou recursos que ajudam pessoas a realizar atividades com mais autonomia, como leitores de tela, adaptações e dispositivos de comunicação.",
    relatedTerms: ["CAA", "Acessibilidade"],
  },
  {
    id: "cordao",
    term: "Cordão de girassol",
    category: "Inclusão",
    definition:
      "Símbolo utilizado para identificar pessoas com deficiências ocultas, conforme iniciativa de reconhecimento adotada em diversos ambientes e respaldada no Brasil pela Lei nº 14.624/2023.",
    simpleExplanation:
      "O cordão pode indicar que a pessoa possui uma deficiência não aparente e pode precisar de apoio, compreensão ou atendimento diferenciado.",
    relatedTerms: ["Deficiência", "Acessibilidade"],
  },
  {
    id: "dislexia",
    term: "Dislexia",
    category: "Educação",
    definition:
      "Transtorno específico de aprendizagem que afeta principalmente habilidades relacionadas à leitura, como precisão, fluência e decodificação de palavras.",
    simpleExplanation:
      "Pode tornar a leitura e a escrita mais difíceis, mas não significa falta de inteligência ou de capacidade de aprendizagem.",
    relatedTerms: ["Inclusão escolar", "Acessibilidade"],
  },
  {
    id: "braille",
    term: "Braille",
    category: "Acessibilidade",
    definition:
      "Sistema de escrita e leitura tátil formado por combinações de pontos em relevo, utilizado principalmente por pessoas cegas ou com deficiência visual.",
    simpleExplanation:
      "É um sistema de pontos em relevo que permite ler e escrever por meio do tato.",
    relatedTerms: ["Acessibilidade", "Tecnologia assistiva"],
  },
  {
    id: "libras",
    term: "Língua Brasileira de Sinais",
    abbreviation: "Libras",
    category: "Acessibilidade",
    definition:
      "Língua visual-motora utilizada por comunidades surdas brasileiras, reconhecida legalmente como meio de comunicação e expressão pela Lei nº 10.436/2002.",
    simpleExplanation:
      "É uma língua completa, com gramática própria, utilizada por muitas pessoas surdas no Brasil.",
    relatedTerms: ["Acessibilidade", "Inclusão"],
  },
  {
    id: "hipersensibilidade",
    term: "Hipersensibilidade sensorial",
    category: "Saúde",
    definition:
      "Maior sensibilidade ou resposta a estímulos sensoriais, como sons, luzes, texturas, cheiros ou sabores, que pode ocorrer em diferentes pessoas e condições.",
    simpleExplanation:
      "Alguns estímulos que parecem comuns para uma pessoa podem ser intensos, desconfortáveis ou difíceis de tolerar para outra.",
    relatedTerms: ["TEA", "Neurodiversidade"],
  },
  {
    id: "passe-livre",
    term: "Passe Livre",
    category: "Direitos",
    definition:
      "Denominação utilizada para programas que garantem gratuidade ou benefícios no transporte a determinados grupos de pessoas, conforme requisitos e regras de cada programa.",
    simpleExplanation:
      "É um benefício de transporte gratuito, mas os critérios e a abrangência variam conforme o programa e a localidade.",
    relatedTerms: ["Pessoa com deficiência", "Acessibilidade"],
  },
  {
    id: "inclusao",
    term: "Inclusão",
    category: "Inclusão",
    definition:
      "Processo de remover barreiras e promover condições para que todas as pessoas participem plenamente da sociedade, respeitando suas diferenças e necessidades.",
    simpleExplanation:
      "Incluir é garantir que todos possam participar, não apenas permitir que estejam presentes.",
    relatedTerms: ["Acessibilidade", "Capacitismo"],
  },
];