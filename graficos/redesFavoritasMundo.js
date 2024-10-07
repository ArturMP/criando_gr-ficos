import { getCSS } from "./common.js";

async function redesFavoritasMundo() {
  const url =
    "https://raw.githubusercontent.com/guilhermeonrails/api/main/redes-favoritas.json";
  const res = await fetch(url);
  const dados = await res.json();
  const redes = Object.keys(dados);
  const valores = Object.values(dados);

  // Criar o gráfico de pizza
  const data = [
    {
      values: valores,
      labels: redes,
      type: "pie",
      textinfo: "label+percent",
    },
  ];

  // Configurar o layout do gráfico

  const layout = {
    plot_bgcolor: getCSS("--bg-color"),
    paper_bgcolor: getCSS("--bg-color"),
    title: {
      text: "Redes sociais que os usuários mais gostam",
      x: 0,
      font: {
        color: getCSS("--primary-color"),
        family: getCSS("--font"),
        size: 30,
      },
    },
    legend: {
      font: {
        color: getCSS("--primary-color"),
        size: 16,
      },
    },
  };

  // Inserir o gráfico na página
  const grafico = document.createElement("div");
  grafico.className = "grafico";
  document.getElementById("graficos-container").appendChild(grafico);
  Plotly.newPlot(grafico, data, layout);
}

redesFavoritasMundo();
