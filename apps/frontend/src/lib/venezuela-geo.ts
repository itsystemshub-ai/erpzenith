export interface GeoData {
  [region: string]: {
    [estado: string]: string[]
  }
}

export const venezuelaGeo: GeoData = {
  'REGIÓN LOS ANDES': {
    'BARINAS': ['Alberto Arvelo Torrealba','Andrés Eloy Blanco','Antonio José de Sucre','Arismendi','Barinas','Bolívar','Cruz Paredes','Ezequiel Zamora','Obispos','Pedraza','Rojas','Sosa'],
    'MÉRIDA': ['Alberto Adriani','Andrés Bello','Antonio Pinto Salinas','Aricagua','Arzobispo Chacón','Campo Elías','Caracciolo Parra Olmedo','Cardenal Quintero','Guaraque','Julio César Salas','Justo Briceño','Libertador','Miranda','Obispo Ramos de Lora','Padre Noguera','Pueblo Llano','Rangel','Rivas Dávila','Santos Marquina','Sucre','Tovar','Tulio Febres Cordero','Zea'],
    'TRUJILLO': ['Andrés Bello','Boconó','Bolívar','Candelaria','Carache','Escuque','José Felipe Márquez Cañizales','José Vicente Campo Elías','La Ceiba','Miranda','Monte Carmelo','Motatán','Pampán','Pampanito','Rafael Rangel','San Rafael de Carvajal','Sucre','Trujillo','Urdaneta','Valera'],
    'TÁCHIRA': ['Andrés Bello','Antonio Rómulo Costa','Ayacucho','Bolívar','Cárdenas','Córdoba','Fernández Feo','Francisco de Miranda','García de Hevia','Guásimos','Independencia','Jáuregui','José María Vargas','Junín','Libertad','Libertador','Lobatera','Michelena','Panamericano','Pedro María Ureña','Rafael Urdaneta','Samuel Darío Maldonado','San Cristóbal','San Judas Tadeo','Seboruco','Simón Rodríguez','Sucre','Torbes','Uribante'],
  },
  'REGIÓN CAPITAL': {
    'DISTRITO CAPITAL': ['Libertador'],
    'LA GUAIRA': ['Vargas'],
    'MIRANDA': ['Acevedo','Andrés Bello','Baruta','Brión','Buroz','Carrizal','Chacao','Cristóbal Rojas','El Hatillo','Guaicaipuro','Independencia','Lander','Los Salias','Páez','Paz Castillo','Pedro Gual','Plaza','Simón Bolívar','Sucre','Urdaneta','Zamora'],
  },
  'REGIÓN CENTRAL': {
    'ARAGUA': ['Bolívar','Camatagua','Francisco Linares Alcántara','Girardot','José Ángel Lamas','José Félix Ribas','José Rafael Revenga','Libertador','Mario Briceño Iragorry','Ocumare de la Costa de Oro','San Casimiro','San Sebastián','Santiago Mariño','Santos Michelena','Sucre','Tovar','Urdaneta','Zamora'],
    'CARABOBO': ['Bejuma','Carlos Arvelo','Diego Ibarra','Guacara','Juan José Mora','Libertador','Los Guayos','Miranda','Montalbán','Naguanagua','Puerto Cabello','San Diego','San Joaquín','Valencia'],
    'COJEDES': ['Anzoátegui','Falcón','Girardot','Lima Blanco','Pao de San Juan Bautista','Ricaurte','Rómulo Gallegos','San Carlos','Tinaco'],
  },
  'REGIÓN GUAYANA': {
    'BOLÍVAR': ['Caroní','Cedeño','El Callao','Gran Sabana','Heres','Padre Pedro Chien','Piar','Raúl Leoni','Roscio','Sifontes','Sucre'],
    'AMAZONAS': ['Alto Orinoco','Atabapo','Atures','Autana','Manapiare','Maroa','Río Negro'],
    'DELTA AMACURO': ['Antonio Díaz','Casacoima','Pedernales','Tucupita'],
    'GUAYANA ESEQUIBA': [],
  },
  'REGIÓN INSULAR': {
    'NUEVA ESPARTA': ['Antolín del Campo','Arismendi','Díaz','García','Gómez','Maneiro','Marcano','Mariño','Macanao','Tubores','Villalba'],
    'DEPENDENCIAS FEDERALES': [],
  },
  'REGIÓN LOS ANDES / LOS LLANOS': {
    'APURE': ['Achaguas','Biruaca','Muñoz','Páez','Pedro Camejo','Rómulo Gallegos','San Fernando'],
  },
  'REGIÓN LOS LLANOS': {
    'GUÁRICO': ['Camaguán','Chaguaramas','El Socorro','Francisco de Miranda','José Félix Ribas','José Tadeo Monagas','Juan Germán Roscio','Julián Mellado','Las Mercedes','Leonardo Infante','Ortiz','Pedro Zaraza','San Gerónimo de Guayabal','San José de Guaribe','Santa María de Ipire'],
  },
  'REGIÓN NOR-ORIENTAL': {
    'ANZOÁTEGUI': ['Anaco','Aragua','Diego Bautista Urbaneja','Fernando de Peñalver','Francisco del Carmen Carvajal','Francisco de Miranda','Guanta','Independencia','José Gregorio Monagas','Juan Antonio Sotillo','Juan Manuel Cajigal','Libertad','Manuel Ezequiel Bruzual','Pedro María Freites','Píritu','San José de Guanipa','San Juan de Capistrano','Santa Ana','Simón Bolívar','Simón Rodríguez','Sir Arthur McGregor'],
    'MONAGAS': ['Acosta','Aguasay','Bolívar','Caripe','Cedeño','Ezequiel Zamora','Libertador','Maturín','Piar','Punceres','Santa Bárbara','Sotillo','Uracoa'],
    'SUCRE': ['Andrés Eloy Blanco','Andrés Mata','Arismendi','Benítez','Bermúdez','Bolívar','Cajigal','Cruz Salmerón Acosta','Libertador','Mariño','Mejía','Montes','Ribero','Sucre','Valdez'],
  },
  'REGIÓN CENTRO-OCCIDENTAL': {
    'FALCÓN': ['Acosta','Bolívar','Buchivacoa','Cacique Manaure','Carirubana','Colina','Dabajuro','Democracia','Falcón','Federación','Jacura','Los Taques','Mauroa','Miranda','Monseñor Iturriza','Palmasola','Petit','Píritu','San Francisco','Silva','Sucre','Tocopero','Unión','Urumaco','Zamora'],
    'LARA': ['Andrés Eloy Blanco','Crespo','Iribarren','Jiménez','Morán','Palavecino','Simón Planas','Torres','Urdaneta'],
    'PORTUGUESA': ['Agua Blanca','Araure','Esteller','Guanare','Guanarito','Monseñor José Vicente de Unda','Ospino','Páez','Papelón','San Genaro de Boconoito','San Rafael de Onoto','Santa Rosalía','Sucre','Turén'],
    'YARACUY': ['Arístides Bastidas','Bolívar','Bruzual','Cocorote','Independencia','José Antonio Páez','La Trinidad','Manuel Monge','Nirgua','Peña','San Felipe','Sucre','Urachiche','Veroes'],
  },
  'REGIÓN ZULIANA': {
    'ZULIA': ['Almirante Padilla','Baralt','Cabimas','Catatumbo','Colón','Francisco Javier Pulgar','Jesús Enrique Lossada','Jesús María Semprún','La Cañada de Urdaneta','Lagunillas','Machiques de Perijá','Mara','Maracaibo','Miranda','Páez','Rosario de Perijá','San Francisco','Santa Rita','Simón Bolívar','Sucre','Valmore Rodríguez'],
  },
}

export const regiones = Object.keys(venezuelaGeo)

export const getEstados = (region: string): string[] =>
  region ? Object.keys(venezuelaGeo[region] ?? {}) : []

export const getMunicipios = (region: string, estado: string): string[] =>
  region && estado ? (venezuelaGeo[region]?.[estado] ?? []) : []
