import { useProgramRecords } from '@/hooks/useProgramRecords.ts'
import { Code } from '@/components/Code.tsx'

export function ProgramRecords(props: { programId: string }) {
  const { records: myRecords } = useProgramRecords(props.programId)

  return <div className="text-slate-400">
    Records from program <strong className="text-white">{props.programId}</strong>:

    <Code jsonData={myRecords.map(({ data }) => data)} />
  </div>
}

