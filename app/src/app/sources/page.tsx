type Source = {
  name: string;
  type: string;
  status: string;
};

const sources: Source[] = [
  { name: "FDA Drug Labels", type: "Regulatory", status: "Active" },
  { name: "ClinicalTrials.gov", type: "Clinical", status: "Active" },
  { name: "PubMed", type: "Literature", status: "Pending" },
];

export default function SourcesPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "2rem",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <h1 style={{ marginBottom: "1rem" }}>Sources</h1>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          maxWidth: "720px",
        }}
      >
        <thead>
          <tr>
            <th style={{ textAlign: "left", borderBottom: "1px solid #ddd", padding: "0.5rem" }}>
              Source Name
            </th>
            <th style={{ textAlign: "left", borderBottom: "1px solid #ddd", padding: "0.5rem" }}>
              Source Type
            </th>
            <th style={{ textAlign: "left", borderBottom: "1px solid #ddd", padding: "0.5rem" }}>
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {sources.map((source) => (
            <tr key={source.name}>
              <td style={{ borderBottom: "1px solid #f0f0f0", padding: "0.5rem" }}>{source.name}</td>
              <td style={{ borderBottom: "1px solid #f0f0f0", padding: "0.5rem" }}>{source.type}</td>
              <td style={{ borderBottom: "1px solid #f0f0f0", padding: "0.5rem" }}>{source.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
