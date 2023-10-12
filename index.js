var mapa = L.map("contenedor-del-mapa").setView([3.4516467,-76.5319854], 11)
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png?", {}).addTo(mapa)

var marcador = L.marker([3.3758083,-76.5333726]).addTo(mapa)
marcador.bindPopup("Univalle")