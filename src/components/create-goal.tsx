import { zodResolver } from '@hookform/resolvers/zod'
import { useQueryClient } from '@tanstack/react-query'
import { X } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { createGoal } from '../http/create-goal'
import { Button } from './ui/button'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from './ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'
import {
  RadioGroup,
  RadioGroupIndicator,
  RadioGroupItem,
} from './ui/radio-group'

const createGoalForm = z.object({
  title: z.string().min(1, 'Informe a atividade que deseja realizar'),
  desiredWeeklyFrequency: z.coerce.number().min(1).max(7),
})

type CreateGoalForm = z.infer<typeof createGoalForm>

type CreateGoalProps = {
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function CreateGoal({ setDialogOpen }: CreateGoalProps) {
  const queryClient = useQueryClient()

  const { register, control, handleSubmit, formState, reset } =
    useForm<CreateGoalForm>({
      resolver: zodResolver(createGoalForm),
    })

  async function handleCreateGoal(data: CreateGoalForm) {
    await createGoal(data)

    queryClient.invalidateQueries({ queryKey: ['summary'] })
    queryClient.invalidateQueries({ queryKey: ['pending-goals'] })

    reset()
    setDialogOpen(false)
  }

  return (
    <DialogContent>
      <div className="h-full flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <DialogTitle>Cadastrar meta</DialogTitle>
            <DialogClose>
              <X className="size-5 text-zinc-600" />
            </DialogClose>
          </div>

          <DialogDescription>
            Adicione atividades que{' '}
            <span className="underline">te fazem bem</span> e que você quer
            continuar praticando toda semana.
          </DialogDescription>
        </div>

        <form
          onSubmit={handleSubmit(handleCreateGoal)}
          className="flex flex-1 flex-col justify-between"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Label htmlFor="title">Qual a atividade?</Label>
              <Input
                id="title"
                autoFocus
                placeholder="Praticar exercícios, meditar, etc..."
                {...register('title')}
              />

              {formState.errors.title && (
                <p className="text-sm text-red-400">
                  {formState.errors.title.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="desiredWeeklyFrequency">
                Quantas vezes na semana?
              </Label>
              <Controller
                control={control}
                name="desiredWeeklyFrequency"
                defaultValue={1}
                render={({ field }) => (
                  <RadioGroup
                    value={String(field.value)}
                    onValueChange={field.onChange}
                  >
                    <RadioGroupItem value="1">
                      <RadioGroupIndicator />
                      <span className="text-sm font-medium leading-none text-zinc-300">
                        1x na semana
                      </span>
                      <span className="text-lg leading-none">🥱</span>
                    </RadioGroupItem>

                    <RadioGroupItem value="2">
                      <RadioGroupIndicator />
                      <span className="text-sm font-medium leading-none text-zinc-300">
                        2x na semana
                      </span>
                      <span className="text-lg leading-none">🙂</span>
                    </RadioGroupItem>

                    <RadioGroupItem value="3">
                      <RadioGroupIndicator />
                      <span className="text-sm font-medium leading-none text-zinc-300">
                        3x na semana
                      </span>
                      <span className="text-lg leading-none">😎</span>
                    </RadioGroupItem>

                    <RadioGroupItem value="4">
                      <RadioGroupIndicator />
                      <span className="text-sm font-medium leading-none text-zinc-300">
                        4x na semana
                      </span>
                      <span className="text-lg leading-none">😜</span>
                    </RadioGroupItem>

                    <RadioGroupItem value="5">
                      <RadioGroupIndicator />
                      <span className="text-sm font-medium leading-none text-zinc-300">
                        5x na semana
                      </span>
                      <span className="text-lg leading-none">🤨</span>
                    </RadioGroupItem>

                    <RadioGroupItem value="6">
                      <RadioGroupIndicator />
                      <span className="text-sm font-medium leading-none text-zinc-300">
                        6x na semana
                      </span>
                      <span className="text-lg leading-none">🤯</span>
                    </RadioGroupItem>

                    <RadioGroupItem value="7">
                      <RadioGroupIndicator />
                      <span className="text-sm font-medium leading-none text-zinc-300">
                        Todos dias da semana
                      </span>
                      <span className="text-lg leading-none">🔥</span>
                    </RadioGroupItem>
                  </RadioGroup>
                )}
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <DialogClose asChild>
              <Button type="button" variant="secondary" className="flex-1">
                Fechar
              </Button>
            </DialogClose>
            <Button className="flex-1">Salvar</Button>
          </div>
        </form>
      </div>
    </DialogContent>
  )
}
