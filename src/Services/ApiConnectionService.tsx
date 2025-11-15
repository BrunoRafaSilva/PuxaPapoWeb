interface IApiConnection {
  interest: string[];
  period: string;
  tone: string;
  language: string;
}

class ApiConnectionService {
  private baseUrl: string;

  constructor(baseUrl: string = "https://puxa-papo-api-azd7avc5fpfyc6fp.brazilsouth-01.azurewebsites.net/api") {
    this.baseUrl = baseUrl;
  }

  private async request<T>(endpoint: string, options: RequestInit): Promise<T> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, options);

      if (!response.ok) {
        throw new Error(`Erro na API: ${response.status}`);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error(`Erro na requisição para ${endpoint}:`, error);
      throw error;
    }
  }

  async generatePrompt(data: IApiConnection): Promise<string> {
    const bodyContent = JSON.stringify({
      interest: data.interest,
      period: data.period,
      tone: data.tone,
      language: data.language,
    });

    const requestOptions: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: bodyContent,
    };

    const result = await this.request<{ response: { iaResponse: string } }>(
      "/chat/tips-deep-seek",
      requestOptions
    );

    console.log("Resultado da API:", result);
    return result.response.iaResponse;
  }

  async checkHealth(): Promise<boolean> {
    try {
      const requestOptions: RequestInit = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };

      await this.request("/wake-up/are-you-there", requestOptions);
      return true;
    } catch {
      return false;
    }
  }
}

const apiConnectionService = new ApiConnectionService();

export { apiConnectionService as ApiConnection };
export type { IApiConnection };
