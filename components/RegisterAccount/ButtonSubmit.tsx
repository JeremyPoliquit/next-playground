import React from 'react'

const ButtonSubmit = ({ label }: { label: string}) => {
  return (
    <button type='submit' className='btn btn-success w-full text-white'>{label}</button>
  )
}

export default ButtonSubmit