import { useProgramRecords } from '@/hooks/useProgramRecords.ts'

export function ProgramRecords(props: { programId: string }) {
  const { records: myRecords } = useProgramRecords(props.programId)

  return <div className="text-slate-400">
    Records from program <strong className="text-white">{props.programId}</strong>:
    <pre style={
      {
        textAlign: 'left',
      }
    }><code className="text-slate-400">{JSON.stringify(myRecords.map(({ data }) => data), null, 2)}</code></pre>
  </div>
}