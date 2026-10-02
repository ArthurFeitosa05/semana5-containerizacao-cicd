export default async function Home() {
  let data = {
    status: "erro",
    items: [],
  };

  try {
    const response = await fetch("http://backend:8000/api/health/", {
      cache: "no-store",
    });

    data = await response.json();
  } catch (error) {
    console.error("Erro ao acessar backend:", error);
  }

  return (
    <main>
      <h1>Semana 5 - Containerização e CI/CD</h1>

      <h2>Status: {data.status}</h2>

      <ul>
        {data.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </main>
  );
}