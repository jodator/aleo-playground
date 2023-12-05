import { useProgramRecords } from '@/hooks/useProgramRecords.ts'
import { Code } from '@/components/Code.tsx'

interface Props {
  programId: string
}

export function ProgramRecords({ programId }: Props) {
  const { records: myRecords } = useProgramRecords(programId)

  return <div className="text-slate-400">
    Records from program <strong className="text-white">{programId}</strong>:

    <Code jsonData={myRecords.map(({ data }) => data)} />
  </div>
}

