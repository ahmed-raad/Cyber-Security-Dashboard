import React, { useEffect } from "react";
import Plot from "react-plotly.js";

import "./Map.css";

const Map = () => {
  return (
    <div id="map-container">
      <h2>
        Countries rankings based on their commitment to cybersecurity at the
        global level
      </h2>
      <a href="#sec3">
        <Plot
          data={[
            {
              type: "choropleth",
              locationmode: "country names",
              z: [
                1, 2, 2, 3, 4, 4, 4, 5, 5, 5, 6, 7, 8, 9, 10, 11, 12, 13, 13,
                14, 15, 16, 17, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
                29, 30, 31, 32, 33, 33, 34, 35, 37, 38, 39, 40, 41, 42, 43, 44,
                45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
                61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76,
                77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92,
                93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106,
                107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119,
                120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132,
                133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145,
                146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158,
                159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171,
                172, 173, 174, 175, 176, 177, 178, 179, 179, 179, 180, 181, 182,
                182, 182,
              ],
              locations: [
                "usa",
                "united kingdom",
                "saudi arabia",
                "estonia",
                "korea",
                "singapore",
                "spain",
                "russia",
                "uae",
                "malaysia",
                "lithuania",
                "japan",
                "canada",
                "france",
                "india",
                "turkey",
                "australia",
                "luxembourg",
                "germany",
                "portugal",
                "latvia",
                "netherlands",
                "norway",
                "mauritius",
                "brazil",
                "belgium",
                "italy",
                "oman",
                "finland",
                "egypt",
                "indonesia",
                "vietnam",
                "sweden",
                "qatar",
                "greece",
                "austria",
                "poland",
                "kazakhstan",
                "greenland",
                "china",
                "croatia",
                "slovakia",
                "hungary",
                "tanzania",
                "north macedonia",
                "serbia",
                "azerbaijan",
                "cyprus",
                "switzerland",
                "ghana",
                "thailand",
                "tunisia",
                "ireland",
                "nigeria",
                "new zealand",
                "malta",
                "marocco",
                "kenya",
                "mexico",
                "bangladesh",
                "iran",
                "georgia",
                "benin",
                "rwanda",
                "iceland",
                "south africa",
                "bahrain",
                "philippines",
                "romania",
                "moldova",
                "uruguay",
                "kuwait",
                "dominican",
                "slovenia",
                "czech ",
                "monaco",
                "uzbekistan",
                "jordan",
                "uganda",
                "zambia",
                "chile",
                "cote divoire",
                "costa rica",
                "bulgaria",
                "ukraine",
                "pakistan",
                "albania",
                "colombia",
                "cuba",
                "sri lanka",
                "paraguay",
                "brunei darussalam",
                "peru",
                "monatengro",
                "botswana",
                "belarus",
                "armenia",
                "argentina",
                "kyrgyzstan",
                "cameroon",
                "nepal",
                "chad",
                "burkina faso",
                "malawi",
                "zimbabwe",
                "myanmar",
                "senegal",
                "liechtenstein",
                "sudan",
                "panama",
                "algeria",
                "togo",
                "jamaica",
                "gambia",
                "suriname",
                "lebanon",
                "bosnia and herzegovina",
                "samoa",
                "fiji",
                "libya",
                "guyana",
                "ethiopia",
                "venezuela",
                "andorra",
                "papua new guinea",
                "ecuador",
                "mangolia",
                "sierra leone",
                "palestine",
                "mozambique",
                "madagascar",
                "trinidad and tobago",
                "syria",
                "nauru",
                "tonga",
                "iraq",
                "guinea",
                "lao P.D.R",
                "cambodia",
                "mauritania",
                "bhutan",
                "eswatini",
                "cabo verde",
                "somalia",
                "tajikstan",
                "barbados",
                "bolivia",
                "sao tome and principe",
                "antigua and barbuda",
                "congo",
                "turkmenistan",
                "kiribati",
                "san marino",
                "bahamas",
                "el salvador",
                "seychelles",
                "guatemala",
                "angola",
                "vanuatu",
                "saint kitts and nevis",
                "saint vincent and the grenadines",
                "namibia",
                "niger",
                "gabon",
                "saint lucia",
                "belize",
                "mali",
                "guinea-bissau",
                "liberia",
                "grenada",
                "lesotho",
                "nicargua",
                "solomon islands",
                "haiti",
                "tuvalu",
                "south sudan",
                "democratic republic of the congo",
                "afghanistan",
                "marshall islands",
                "timor-leste",
                "dominica",
                "comoros",
                "central african republic",
                "maldives",
                "honduras",
                "djibouti",
                "burundi",
                "eritrea",
                "equatorial guinea",
                "north korea",
                "micronesia",
                "vatican",
                "yemen",
              ],

              text: [
                "usa",
                "united kingdom",
                "saudi arabia",
                "estonia",
                "korea",
                "singapore",
                "spain",
                "russia",
                "uae",
                "malaysia",
                "lithuania",
                "japan",
                "canada",
                "france",
                "india",
                "turkey",
                "australia",
                "luxembourg",
                "germany",
                "portugal",
                "latvia",
                "netherlands",
                "norway",
                "mauritius",
                "brazil",
                "belgium",
                "italy",
                "oman",
                "finland",
                "egypt",
                "indonesia",
                "vietnam",
                "sweden",
                "qatar",
                "greece",
                "austria",
                "poland",
                "kazakhstan",
                "greenland",
                "china",
                "croatia",
                "slovakia",
                "hungary",
                "tanzania",
                "north macedonia",
                "serbia",
                "azerbaijan",
                "cyprus",
                "switzerland",
                "ghana",
                "thailand",
                "tunisia",
                "ireland",
                "nigeria",
                "new zealand",
                "malta",
                "marocco",
                "kenya",
                "mexico",
                "bangladesh",
                "iran",
                "georgia",
                "benin",
                "rwanda",
                "iceland",
                "south africa",
                "bahrain",
                "philippines",
                "romania",
                "moldova",
                "uruguay",
                "kuwait",
                "dominican",
                "slovenia",
                "czech ",
                "monaco",
                "uzbekistan",
                "jordan",
                "uganda",
                "zambia",
                "chile",
                "cote divoire",
                "costa rica",
                "bulgaria",
                "ukraine",
                "pakistan",
                "albania",
                "colombia",
                "cuba",
                "sri lanka",
                "paraguay",
                "brunei darussalam",
                "peru",
                "monatengro",
                "botswana",
                "belarus",
                "armenia",
                "argentina",
                "kyrgyzstan",
                "cameroon",
                "nepal",
                "chad",
                "burkina faso",
                "malawi",
                "zimbabwe",
                "myanmar",
                "senegal",
                "liechtenstein",
                "sudan",
                "panama",
                "algeria",
                "togo",
                "jamaica",
                "gambia",
                "suriname",
                "lebanon",
                "bosnia and herzegovina",
                "samoa",
                "fiji",
                "libya",
                "guyana",
                "ethiopia",
                "venezuela",
                "andorra",
                "papua new guinea",
                "ecuador",
                "mangolia",
                "sierra leone",
                "palestine",
                "mozambique",
                "madagascar",
                "trinidad and tobago",
                "syria",
                "nauru",
                "tonga",
                "iraq",
                "guinea",
                "lao P.D.R",
                "cambodia",
                "mauritania",
                "bhutan",
                "eswatini",
                "cabo verde",
                "somalia",
                "tajikstan",
                "barbados",
                "bolivia",
                "sao tome and principe",
                "antigua and barbuda",
                "congo",
                "turkmenistan",
                "kiribati",
                "san marino",
                "bahamas",
                "el salvador",
                "seychelles",
                "guatemala",
                "angola",
                "vanuatu",
                "saint kitts and nevis",
                "saint vincent and the grenadines",
                "namibia",
                "niger",
                "gabon",
                "saint lucia",
                "belize",
                "mali",
                "guinea-bissau",
                "liberia",
                "grenada",
                "lesotho",
                "nicargua",
                "solomon islands",
                "haiti",
                "tuvalu",
                "south sudan",
                "democratic republic of the congo",
                "afghanistan",
                "marshall islands",
                "timor-leste",
                "dominica",
                "comoros",
                "central african republic",
                "maldives",
                "honduras",
                "djibouti",
                "burundi",
                "eritrea",
                "equatorial guinea",
                "north korea",
                "micronesia",
                "vatican",
                "yemen",
              ],
              mode: "world",
              colorscale: [
                ["0.0", "rgb(165,0,38)"],
                ["0.111111111111", "rgb(215,48,39)"],
                ["0.222222222222", "rgb(244,109,67)"],
                ["0.333333333333", "rgb(253,174,97)"],
                ["0.444444444444", "rgb(254,224,144)"],
                ["0.555555555556", "rgb(224,243,248)"],
                ["0.666666666667", "rgb(171,217,233)"],
                ["0.777777777778", "rgb(116,173,209)"],
                ["0.888888888889", "rgb(69,117,180)"],
                ["1.0", "rgb(49,54,149)"],
              ],
            },
          ]}
          layout={{
            width: 1600,
            height: 700,
            geo: { scope: "world" },
          }}
        />
      </a>
    </div>
  );
};
export default Map;
