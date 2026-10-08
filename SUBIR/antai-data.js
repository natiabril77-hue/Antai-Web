// ANTAI — fuente única de conocimiento.
// Estructura pensada para reutilizarse en web, bot, PWA y contenidos.
// NO incluye cantidades, concentraciones, partes vegetales ni dosis:
// esos datos los define y valida el profesional responsable.

export const PLANTS = {
  ginseng: {
    propiedades: ['Vitalidad','Energía cotidiana','Rendimiento'],
    imagen: 'assets/planta-ginseng.png',
    corta: 'Raíz de tradición milenaria, vinculada a la vitalidad cotidiana.',
    nombre: 'Ginseng', botanico: 'Panax ginseng',
    breve: 'Una raíz de tradición milenaria, asociada al acompañamiento de la vitalidad cotidiana.',
    porque: 'Se incorpora por su tradición de uso vinculada a la vitalidad y al acompañamiento del organismo en momentos de actividad.',
    aporta: 'Es el componente principal de Impulso y aporta el carácter de la fórmula.',
    tradicion: 'Larga tradición de uso en Asia oriental, vinculada a la vitalidad y al acompañamiento del rendimiento cotidiano.',
    sensorial: 'Terroso · profundo',
    formulas: ['Impulso']
  },
  guarana: {
    propiedades: ['Activación','Energía','Estado de alerta'],
    imagen: 'assets/planta-guarana.png',
    corta: 'Semilla amazónica de perfil naturalmente estimulante.',
    nombre: 'Guaraná', botanico: 'Paullinia cupana',
    breve: 'Una semilla amazónica de perfil naturalmente estimulante.',
    porque: 'Aporta un perfil naturalmente estimulante, asociado al momento de activación.',
    aporta: 'Complementa la fórmula con su contenido natural de cafeína.',
    tradicion: 'Uso tradicional en la cuenca amazónica como planta de energía y sociabilidad.',
    sensorial: 'Intenso · ligeramente amargo',
    formulas: ['Impulso'],
    nota: 'Contiene cafeína de origen natural.'
  },
  jengibre: {
    propiedades: ['Calidez','Vitalidad','Bienestar digestivo'],
    imagen: 'assets/planta-jengibre.png',
    corta: 'Rizoma cálido y especiado, presente en cocinas de todo el mundo.',
    nombre: 'Jengibre', botanico: 'Zingiber officinale',
    breve: 'Un rizoma de carácter cálido y especiado, presente en cocinas y tradiciones de todo el mundo.',
    porque: 'Aporta una dimensión sensorial que acompaña el carácter de Impulso y completa la experiencia de la fórmula.',
    aporta: 'Completa la fórmula con su perfil cálido y especiado.',
    tradicion: 'Presente desde hace siglos en la tradición culinaria y herbal de Asia, India y América.',
    sensorial: 'Cálido · especiado · picante',
    formulas: ['Impulso']
  },
  ginkgo: {
    propiedades: ['Concentración','Memoria','Claridad mental'],
    imagen: 'assets/planta-ginkgo.png',
    corta: 'Hoja de una de las especies de árbol más antiguas que se conservan.',
    nombre: 'Ginkgo', botanico: 'Ginkgo biloba',
    breve: 'Una de las especies de árbol más antiguas que se conservan, de hoja característica.',
    porque: 'Se incorpora por su tradición de uso vinculada a la vitalidad mental y al acompañamiento de la atención.',
    aporta: 'Es el componente principal de Focus y define la identidad de la fórmula.',
    tradicion: 'Tradición de uso vinculada al acompañamiento de la función cognitiva y la vitalidad mental.',
    sensorial: 'Herbal · seco',
    formulas: ['Focus']
  },
  romero: {
    propiedades: ['Claridad','Frescura','Estímulo'],
    imagen: 'assets/planta-romero.png',
    corta: 'Arbusto mediterráneo de aroma inconfundible.',
    nombre: 'Romero', botanico: 'Salvia rosmarinus',
    breve: 'Un arbusto mediterráneo de aroma inconfundible.',
    porque: 'Se elige por su perfil aromático, que suma frescura y carácter al conjunto.',
    aporta: 'Aporta a la fórmula su nota herbal y aromática.',
    tradicion: 'Planta mediterránea de uso culinario y herbal muy extendido.',
    sensorial: 'Herbal · aromático · fresco',
    formulas: ['Focus']
  },
  melisa: {
    propiedades: ['Calma','Equilibrio','Serenidad'],
    imagen: 'assets/planta-melisa.png',
    corta: 'Planta fresca y suave, con una característica nota alimonada.',
    nombre: 'Melisa', botanico: 'Melissa officinalis',
    breve: 'Una planta de perfil fresco y suave, con una característica nota alimonada.',
    porque: 'Se incorpora para hacer la experiencia de la fórmula más amable, con su nota fresca y alimonada.',
    aporta: 'Equilibra la composición de Focus y suaviza los perfiles más intensos.',
    tradicion: 'Uso tradicional europeo asociado a momentos de calma y bienestar.',
    sensorial: 'Fresco · suave · alimonado',
    formulas: ['Focus', 'Calma']
  },
  alcachofa: {
    propiedades: ['Liviandad','Bienestar digestivo'],
    imagen: 'assets/planta-alcachofa.png',
    corta: 'Planta de huerta cuyas hojas tienen una larga tradición herbal.',
    nombre: 'Alcachofa', botanico: 'Cynara scolymus',
    breve: 'Una planta de huerta cuyas hojas tienen una larga tradición herbal.',
    porque: 'Se incorpora por su tradición de uso vinculada al bienestar cotidiano y a la sensación de equilibrio.',
    aporta: 'Es el componente principal de Reset y aporta el carácter herbal y profundo de la fórmula.',
    tradicion: 'Tradición de uso mediterránea vinculada al bienestar digestivo.',
    sensorial: 'Herbal · amargo · profundo',
    formulas: ['Reset']
  },
  'diente-de-leon': {
    propiedades: ['Liviandad','Bienestar digestivo'],
    imagen: 'assets/planta-diente-de-leon.png',
    corta: 'Planta común y resistente, presente en casi todo el mundo.',
    nombre: 'Diente de león', botanico: 'Taraxacum officinale',
    breve: 'Una planta común y resistente, presente en prácticamente todo el mundo.',
    porque: 'Acompaña a la alcachofa dentro de la misma familia de tradición herbal, sumando continuidad al conjunto.',
    aporta: 'Complementa la fórmula y refuerza la identidad de Reset.',
    tradicion: 'Tradición herbal europea asociada al equilibrio y al bienestar digestivo.',
    sensorial: 'Amargo · verde',
    formulas: ['Reset']
  },
  hinojo: {
    propiedades: ['Confort','Liviandad','Bienestar digestivo'],
    imagen: 'assets/planta-hinojo.png',
    corta: 'Planta aromática de nota anisada, muy presente en el Mediterráneo.',
    nombre: 'Hinojo', botanico: 'Foeniculum vulgare',
    breve: 'Una planta aromática de nota anisada, muy presente en la cocina mediterránea.',
    porque: 'Se elige para redondear un perfil más amargo con una nota aromática amable.',
    aporta: 'Completa la fórmula con su carácter aromático y ligeramente anisado.',
    tradicion: 'Uso culinario y herbal extendido en el Mediterráneo.',
    sensorial: 'Aromático · anisado · dulce',
    formulas: ['Reset']
  },
  manzanilla: {
    propiedades: ['Pausa','Relajación','Confort'],
    imagen: 'assets/planta-manzanilla.png',
    corta: 'Flor pequeña y familiar, asociada al ritual de la pausa.',
    nombre: 'Manzanilla', botanico: 'Matricaria chamomilla',
    breve: 'Una flor pequeña y familiar, quizás la más asociada al ritual de la pausa.',
    porque: 'Porque su perfil suave es parte de la memoria colectiva de los momentos de calma.',
    aporta: 'Complementa a Calma con su carácter suave y reconocible.',
    tradicion: 'Tradición de uso muy extendida, asociada a momentos de calma y bienestar.',
    sensorial: 'Floral · dulce · suave',
    formulas: ['Calma']
  },
  lavanda: {
    propiedades: ['Relajación','Serenidad','Bajar el ritmo'],
    imagen: 'assets/planta-lavanda.png',
    corta: 'Flor de aroma envolvente, ligada al final del día.',
    nombre: 'Lavanda', botanico: 'Lavandula angustifolia',
    breve: 'Una flor de aroma envolvente, ligada al final del día.',
    porque: 'Porque completa la experiencia sensorial de la fórmula más envolvente de la línea.',
    aporta: 'Da a Calma su carácter floral y aromático.',
    tradicion: 'Tradición aromática y herbal mediterránea.',
    sensorial: 'Floral · aromático · envolvente',
    formulas: ['Calma']
  }
};

export const FORMULAS = [
  {
    slug: 'impulso',
    roles: {
      ginseng: { aporta:'Es el componente principal de Impulso y aporta el carácter de la fórmula.', porque:'Se incorpora por su tradición de uso vinculada a la vitalidad y al acompañamiento del organismo en momentos de actividad.' },
      guarana: { aporta:'Complementa la fórmula con su contenido natural de cafeína.', porque:'Aporta un perfil naturalmente estimulante, asociado al momento de activación.' },
      jengibre: { aporta:'Completa la fórmula con su perfil cálido y especiado.', porque:'Aporta una dimensión sensorial que acompaña el carácter de Impulso y completa la experiencia.' }
    }, nombre: 'Impulso',
    momento: 'El comienzo del día',
    corta: 'Para empezar el día y encontrar tu ritmo.',
    larga: 'Ese momento en el que querés activar tu ritmo, sentir vitalidad y estar presente para lo que viene.',
    concepto: 'Activar',
    detras: 'Impulso combina tres plantas elegidas por el papel que cada una cumple dentro de la fórmula.',
    sensorial: 'Cálido · especiado · intenso',
    plantas: ['ginseng', 'guarana', 'jengibre'],
    tiendaUrl: '', estado: 'proximamente'
  },
  {
    slug: 'focus',
    roles: {
      ginkgo: { aporta:'Es el componente principal de Focus y define la identidad de la fórmula.', porque:'Se incorpora por su tradición de uso vinculada a la vitalidad mental y al acompañamiento de la atención.' },
      romero: { aporta:'Aporta a la fórmula su nota herbal y aromática.', porque:'Se elige por su perfil aromático, que suma frescura y carácter al conjunto.' },
      melisa: { imagen:'assets/planta-melisa-focus.png', aporta:'Equilibra la composición y suaviza los perfiles más intensos.', porque:'Se incorpora para hacer la experiencia más amable, con su nota fresca y alimonada.' }
    }, nombre: 'Focus',
    momento: 'Claridad y presencia',
    corta: 'Para encontrar claridad y permanecer presente.',
    larga: 'Cuando necesitás concentrarte, ordenar tu atención y estar presente en lo que estás haciendo.',
    concepto: 'Claridad y presencia',
    detras: 'Focus combina tres plantas elegidas por el papel que cada una cumple dentro de la fórmula.',
    sensorial: 'Herbal · fresco · ligeramente alimonado',
    plantas: ['ginkgo', 'romero', 'melisa'],
    tiendaUrl: '', estado: 'proximamente'
  },
  {
    slug: 'reset',
    roles: {
      alcachofa: { aporta:'Es el componente principal de Reset y aporta el carácter herbal y profundo de la fórmula.', porque:'Se incorpora por su tradición de uso vinculada al bienestar cotidiano y a la sensación de equilibrio.' },
      'diente-de-leon': { aporta:'Complementa la fórmula y refuerza la identidad de Reset.', porque:'Acompaña a la alcachofa dentro de la misma familia de tradición herbal, sumando continuidad al conjunto.' },
      hinojo: { aporta:'Completa la fórmula con su carácter aromático y ligeramente anisado.', porque:'Se elige para redondear un perfil más amargo con una nota aromática amable.' }
    }, nombre: 'Reset',
    momento: 'Volver al equilibrio',
    corta: 'Para esos momentos en los que buscás volver a sentirte en equilibrio.',
    larga: 'Ese momento en el que sentís que necesitás volver a tu equilibrio.',
    concepto: 'Volver al equilibrio',
    detras: 'Reset combina tres plantas elegidas por el papel que cada una cumple dentro de la fórmula.',
    sensorial: 'Herbal · profundo · aromático · ligeramente anisado',
    plantas: ['alcachofa', 'diente-de-leon', 'hinojo'],
    tiendaUrl: '', estado: 'proximamente'
  },
  {
    slug: 'calma',
    roles: {
      melisa: { aporta:'Es el componente principal de Calma y aporta su carácter fresco y suave.', porque:'Se incorpora por su tradición de uso asociada a los momentos de tranquilidad al cerrar el día.' },
      manzanilla: { aporta:'Complementa la fórmula con un perfil suave y reconocible.', porque:'Forma parte de la memoria compartida del momento de bajar el ritmo.' },
      lavanda: { aporta:'Completa la fórmula con su carácter floral y envolvente.', porque:'Se elige para cerrar la experiencia sensorial más suave de la línea.' }
    }, nombre: 'Calma',
    momento: 'Bajar el ritmo',
    corta: 'Para bajar el ritmo cuando el día termina.',
    larga: 'Cuando tu cuerpo pide una pausa pero tu mente todavía sigue corriendo.',
    concepto: 'Volver al presente',
    detras: 'Calma combina tres plantas elegidas por el papel que cada una cumple dentro de la fórmula.',
    sensorial: 'Floral · suave · envolvente',
    plantas: ['melisa', 'manzanilla', 'lavanda'],
    tiendaUrl: '', estado: 'proximamente'
  }
];

// Bloque "Elegir también es conocer" — placeholders editables.
// NO completar con registros, habilitaciones ni claims sin documentación validada.
export const CONOCER = {
  titulo: 'Elegir también es conocer',
  intro: [
    'En ANTAI creemos que conocer lo que elegimos también forma parte del bienestar.',
    'Por eso, nuestras fórmulas son desarrolladas y evaluadas con criterio profesional, y cada una se trabaja teniendo en cuenta su composición, cantidades, modo de uso y rotulado, de acuerdo con la normativa vigente.',
    'La información que encontrás en esta web complementa la información oficial disponible en el envase. Los datos de carácter sanitario y regulatorio se incorporan una vez que han sido revisados y validados según corresponda.'
  ],
  panel: 'Información de la fórmula',
  campos: [
    { k: 'Composición', corto: 'Composición', d: 'Detalle de los componentes que forman parte de la fórmula.', pendiente: true },
    { k: 'Modo de uso', corto: 'Modo de uso', d: 'Cantidad y forma de uso indicadas para el producto.', pendiente: true },
    { k: 'Información sanitaria y regulatoria', corto: 'Información sanitaria', d: 'Información respaldada por la documentación y las validaciones correspondientes.', pendiente: true }
  ],
  importante: 'La información de esta página no reemplaza la información oficial del envase ni la consulta con un profesional de la salud cuando corresponda.',
  cierre: 'En ANTAI, conocer también es una forma de elegir.',
  pendienteLabel: 'A completar con la documentación validada'
};

export const LEGAL = {
  validacion: 'Las fórmulas Antai son desarrolladas y evaluadas con criterio profesional antes de su comercialización. La composición definitiva, las cantidades, el modo de uso y el rotulado cuentan con la validación y autorización sanitaria que corresponda.',
  envase: 'La información oficial de cada fórmula está disponible en su envase. La web no la reemplaza: la complementa y la hace más fácil de comprender.',
  responsable: 'Ante cualquier duda, y especialmente durante el embarazo, la lactancia o si tomás medicación, consultá con un profesional de la salud.'
};

export const CONTACTO = {
  email: 'natalia@antai.com.ar',
  email2: 'martin@antai.com.ar',
  instagram: 'https://instagram.com/',
  whatsapp: 'https://wa.me/',
  tienda: 'https://tienda.antai.com.ar'
};
