interface ApiStatusProps {
  status: "online" | "offline" | "checking";
}

function ApiStatus({ status }: ApiStatusProps) {
  return (
    <div
      className="fixed bottom-4 right-4 flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-lg border"
      title={`API Status: ${status === "online" ? "Online" : status === "offline" ? "Offline" : "Verificando..."}`}
    >
      <div
        className={`w-3 h-3 rounded-full ${
          status === "online"
            ? "bg-green-500 animate-pulse"
            : status === "offline"
              ? "bg-red-500"
              : "bg-yellow-500 animate-pulse"
        }`}
      />
      <span className="text-sm font-medium text-gray-700">
        {status === "online"
          ? "Online"
          : status === "offline"
            ? "Offline"
            : "Verificando"}
      </span>
    </div>
  );
}

export { ApiStatus };
