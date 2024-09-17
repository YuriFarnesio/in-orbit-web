export async function deleteGoalCompletion(goalCompletionId: string) {
  await fetch(`http://localhost:3333/completions/${goalCompletionId}`, {
    method: 'DELETE',
  })
}
