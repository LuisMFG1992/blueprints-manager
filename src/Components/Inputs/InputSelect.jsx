import React from "react";

const baseDeDdatos = [
  { id: "041", subestacion: "041 -  Libertador", secciones: 2, acoples: 1 },
  { id: "044", subestacion: "044 - P. Nuevo", secciones: 2, acoples: 1 },
  { id: "046", subestacion: "046 -  Colegiales", secciones: 4, acoples: 2 },
  { id: "047", subestacion: "047 -  Agronomía", secciones: 4, acoples: 2 },
  { id: "050", subestacion: "050 -  V. López", secciones: 2, acoples: 1 },
  { id: "051", subestacion: "051 - Matheu", secciones: 4, acoples: 2 },
  { id: "052", subestacion: "052 -  Aniversario", secciones: 4, acoples: 2 },
  { id: "053", subestacion: "053 - Victoria", secciones: 4, acoples: 2 },
  { id: "054", subestacion: "054 -  Migueletes", secciones: 4, acoples: 2 },
  { id: "055", subestacion: "055 - Munro", secciones: 4, acoples: 2 },
  { id: "056", subestacion: "056 -  Boulogne", secciones: 2, acoples: 1 },
  { id: "057", subestacion: "057 -  Edison", secciones: 4, acoples: 2 },
  { id: "058", subestacion: "058 -  Talar", secciones: 4, acoples: 2 },
  { id: "059", subestacion: "059 - Benavídez", secciones: 4, acoples: 2 },
  { id: "061", subestacion: "061 -  Castelar", secciones: 4, acoples: 2 },
  { id: "062", subestacion: "062 - Merlo", secciones: 4, acoples: 2 },
  { id: "063", subestacion: "063 - Casanova", secciones: 4, acoples: 2 },
  { id: "064", subestacion: "064 - Luzuriaga", secciones: 4, acoples: 2 },
  { id: "065", subestacion: "065 - Matanza", secciones: 2, acoples: 1 },
  { id: "066", subestacion: "066 - R. Mejía", secciones: 4, acoples: 2 },
  { id: "067", subestacion: "067 -  Morón", secciones: 4, acoples: 2 },
  { id: "068", subestacion: "068 - Malaver", secciones: 4, acoples: 2 },
  { id: "069", subestacion: "069 - Caseros", secciones: 2, acoples: 1 },
  { id: "110", subestacion: "110 - Coghlan", secciones: 2, acoples: 1 },
  { id: "111", subestacion: "111 - Güemes", secciones: 4, acoples: 2 },
  { id: "114", subestacion: "114 - Vidal", secciones: 4, acoples: 2 },
  { id: "129", subestacion: "129 - Aguas", secciones: 3, acoples: 1 },
  { id: "133", subestacion: "133 -  Austria", secciones: 4, acoples: 2 },
  { id: "136", subestacion: "136 - Urquiza", secciones: 4, acoples: 2 },
  { id: "137", subestacion: "137 -  Saavedra", secciones: 4, acoples: 2 },
  { id: "151", subestacion: "151 -  Ford", secciones: 4, acoples: 2 },
  { id: "152", subestacion: "152 -  San Isidro", secciones: 2, acoples: 1 },
  { id: "153", subestacion: "153 - Tigre", secciones: 2, acoples: 1 },
  { id: "154", subestacion: "154 -  Maschwitz", secciones: 4, acoples: 2 },
  { id: "155", subestacion: "155 -  V. Adelina", secciones: 2, acoples: 1 },
  { id: "156", subestacion: "156 - Nordelta", secciones: 2, acoples: 1 },
  { id: "157", subestacion: "157 - Bancalari", secciones: 2, acoples: 1 },
  { id: "158", subestacion: "158 - Pilar", secciones: 2, acoples: 1 },
  { id: "159", subestacion: "159 -  Nogués", secciones: 4, acoples: 2 },
  { id: "160", subestacion: "160 - Rodríguez", secciones: 0, acoples: 0 },
  { id: "161", subestacion: "161 - Sevel", secciones: 0, acoples: 0 },
  { id: "162", subestacion: "162 -  Tapiales", secciones: 4, acoples: 2 },
  { id: "163", subestacion: "163 - La Reja", secciones: 2, acoples: 1 },
  { id: "164", subestacion: "164 - S. Justo", secciones: 4, acoples: 2 },
  { id: "165", subestacion: "165 - San Miguel", secciones: 2, acoples: 1 },
  { id: "166", subestacion: "166 -  Hurlingham", secciones: 2, acoples: 1 },
  { id: "167", subestacion: "167 -  Ciudadela", secciones: 4, acoples: 2 },
  { id: "168", subestacion: "168 -   G. Catán", secciones: 4, acoples: 2 },
  { id: "169", subestacion: "169 - Malvinas", secciones: 7, acoples: 4 },
  { id: "221", subestacion: "221 -  N. Puerto", secciones: 0, acoples: 0 },
  { id: "235", subestacion: "235 - Newbery", secciones: 2, acoples: 1 },
  { id: "237", subestacion: "237 -  Melo", secciones: 4, acoples: 2 },
  { id: "250", subestacion: "250 -   M. Benz", secciones: 2, acoples: 1 },
  { id: "251", subestacion: "251 - Del Viso", secciones: 2, acoples: 1 },
  { id: "252", subestacion: "252 - Tortuguitas", secciones: 4, acoples: 2 },
  { id: "253", subestacion: "253 - El Cazador", secciones: 2, acoples: 1 },
  { id: "254", subestacion: "254 - J. C. Paz", secciones: 4, acoples: 2 },
  { id: "255", subestacion: "255 -  Corralon", secciones: 2, acoples: 1 },
  { id: "256", subestacion: "256 - Catonas", secciones: 4, acoples: 2 },
  { id: "257", subestacion: "257 -  Manzone", secciones: 2, acoples: 1 },
  { id: "258", subestacion: "258 -  P. del Rey", secciones: 4, acoples: 2 },
  { id: "260", subestacion: "260 - Derqui", secciones: 4, acoples: 2 },
  { id: "261", subestacion: "261 -  Pontevedra", secciones: 2, acoples: 1 },
  { id: "262", subestacion: "262 - Rotonda", secciones: 4, acoples: 2 },
  { id: "264", subestacion: "264 -  Ituzaingó", secciones: 2, acoples: 1 },
  { id: "265", subestacion: "265 - Muñíz", secciones: 2, acoples: 1 },
  { id: "266", subestacion: "266 -  Suárez", secciones: 4, acoples: 2 },
  { id: "268", subestacion: "268 -   Sta. Rosa", secciones: 0, acoples: 0 },
  { id: "269", subestacion: "269 - Las Heras", secciones: 2, acoples: 1 },
  { id: "272", subestacion: "272 - Altos", secciones: 2, acoples: 1 },
  { id: "351", subestacion: "351 - S. Fernando", secciones: 2, acoples: 1 },
  { id: "352", subestacion: "352 -  Tecnópolis", secciones: 2, acoples: 1 },
  { id: "353", subestacion: "353 - El Pino", secciones: 4, acoples: 2 },
  { id: "357", subestacion: "357 -  Parque", secciones: 2, acoples: 1 },
  { id: "363", subestacion: "363 - M. Paz", secciones: 4, acoples: 2 },
  { id: "365", subestacion: "365 - Pantanosa", secciones: 2, acoples: 1 },
  { id: "366", subestacion: "366 - S. Alberto", secciones: 2, acoples: 1 },
  { id: "369", subestacion: "369 - Zappalorto", secciones: 0, acoples: 0 },
  { id: "CD0", subestacion: "CD004 - Escobar", secciones: 3, acoples: 1 },
];

const InputSelect = () => {
  return (
    <select className="select select-bordered w-full max-w-xs">
      <option disabled selected>
        Subestaciones
      </option>
      {baseDeDdatos.map((element) => (
        <option>{element.subestacion}</option>
      ))}
    </select>
  );
};

export default InputSelect;
