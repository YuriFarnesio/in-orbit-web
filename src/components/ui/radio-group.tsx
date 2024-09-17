import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { CheckCircle2, Circle } from 'lucide-react'

export function RadioGroup(props: RadioGroupPrimitive.RadioGroupProps) {
  return (
    <RadioGroupPrimitive.RadioGroup
      {...props}
      className="flex flex-col gap-2"
    />
  )
}

export function RadioGroupItem(props: RadioGroupPrimitive.RadioGroupItemProps) {
  return (
    <RadioGroupPrimitive.RadioGroupItem
      {...props}
      className="group flex items-center justify-between bg-black data-[state=checked]:bg-pink-500/5 border border-zinc-900 data-[state=checked]:border-pink-500 hover:border-zinc-800 focus-visible:border-pink-500 ring-pink-500/10 focus-visible:ring-4 outline-none rounded-lg py-2.5 px-4 transition-all"
    />
  )
}

export function RadioGroupIndicator() {
  return (
    <>
      <Circle className="size-4 group-data-[state=checked]:hidden text-zinc-600" />
      <CheckCircle2 className="size-4 hidden group-data-[state=checked]:inline text-pink-500" />
    </>
  )
}
