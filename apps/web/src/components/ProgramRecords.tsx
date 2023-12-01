import { useProgramRecords } from '../hooks/useProgramRecords.ts'

export function ProgramRecords(props: { programId: string }) {
  const myRecords = useProgramRecords(props.programId)

  return <div>
    Records from program <strong>{props.programId}</strong>:
    <pre style={
      {
        textAlign: 'left',
      }
    }><code>{JSON.stringify(myRecords.map(({ data }) => data), null, 2)}</code></pre>
  </div>
}