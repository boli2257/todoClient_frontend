import React, { useState } from 'react'
import { FormGroup, Button, Input, Form, Label } from 'reactstrap'

export const NewToDo = ({handleAdd}) => {
    const [task, setTask] = useState("")

const handleSubmit = ()=>{
      handleAdd(task)
      setTask("")
}

  return (
    <div>
      <Form style={{display:"flex", gap:"5px", justifyContent:"center", alignItems:"center"}}>
  <FormGroup>
    <Label>
    </Label>
    <Input
    placeholder="New Item"
    type="text"
    value={task}
    onChange={(e)=>setTask(e.target.value)}
    />
    </FormGroup>
    <FormGroup style={{marginTop:"25px"}}>
      <Button onClick={handleSubmit} disabled={!task}>Add</Button>
    </FormGroup>
    <FormGroup style={{marginTop:"25px"}}>
      
    </FormGroup>
    </Form>
    </div>
  )
}
