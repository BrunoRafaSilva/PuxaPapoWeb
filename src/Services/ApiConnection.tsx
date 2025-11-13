interface IApiConnection {
  interest: string[];
  period: string;
  tone: string;
}

async function ApiConnection(data: IApiConnection) {
  try {
    const bodyContent = JSON.stringify({
      Interesses: data.interest,
      periodo: data.period,
      tom: data.tone,
    });

    const requestOptions: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: bodyContent,
    };

    const response = await fetch(
      "http://localhost:5182/api/chat/chatRequest",
      requestOptions
    );

    if (!response.ok) {
      throw new Error(`Erro na API: ${response.status}`);
    }

    const result = await response.json();
    console.log("Resultado da API:", result);
    return result.response;
  } catch (error) {
    console.error("Erro na ApiConnection:", error);
    throw error;
  }
}

export { ApiConnection };

export type { IApiConnection };
