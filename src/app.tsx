import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { CreateGoal } from './components/create-goal'
import { EmptyGoals } from './components/empty-goals'
import { Summary } from './components/summary'
import { Dialog } from './components/ui/dialog'
import { getSummary } from './http/get-summary'

export function App() {
  const [dialogOpen, setDialogOpen] = useState(false)

  const { data } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
    staleTime: 1000 * 60, // 60 seconds
  })

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      {data?.total && data.total > 0 ? <Summary /> : <EmptyGoals />}

      <CreateGoal setDialogOpen={setDialogOpen} />
    </Dialog>
  )
}
