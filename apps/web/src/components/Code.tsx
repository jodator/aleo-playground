export const Code = ({ jsonData }: { jsonData: unknown }) => {
  return <pre><code className="text-slate-400">{JSON.stringify(jsonData, null, 2)}</code></pre>
}