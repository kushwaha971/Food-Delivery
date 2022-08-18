import React from 'react'
import SelectItem from './SelectItem'
import StuOfferTextField from './StuOfferTextField'

function FormControal(props) {
    const { control, ...rest } = props
  
    switch (control) {
        case 'input':
          return <StuOfferTextField {...rest} />
        case 'select':
          return <SelectItem {...rest}/>
        default:
          return null
      }
  
} 

export default FormControal