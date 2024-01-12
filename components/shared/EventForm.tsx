"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import Dropdown from "./Dropdown"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { eventFormSchema } from "@/lib/validator"
import * as z from "zod"
import { eventDefaultValues } from "@/constants"


const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
  })

  

type EventFromProps={
    userId: string,
    type: "Create" | "Update"
}


const EventForm=({userId, type}: EventFromProps) => {
    
const initialValues = eventDefaultValues

    const form = useForm<z.infer<typeof eventFormSchema>>({
        resolver: zodResolver(eventFormSchema),
        defaultValues: initialValues
          
        
      })
     
      // 2. Define a submit handler.
      function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }

      

      

  return (
    <Form {...form}>
       {/* /uncomment these line which are comment */}
    <form /*onSubmit={form.handleSubmit(onSubmit)}*/ className="flex flex-col gap-5">
    <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input placeholder="Event title" {...field} className="input-field" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="categoryId"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  {/* /uncomment these line which are comment */}
                  <Dropdown /*onChangeHandler={field.onChange} value={field.value} *//>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      <Button type="submit">Submit</Button>
    </form>
  </Form>
  )
}

export default EventForm