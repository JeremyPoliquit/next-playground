"use client"
import React, { useState } from 'react'

type formData = {
    username: string,
    password: string
}
const useForm = ({initialize}: {initialize: formData}) => {
    const [formData, setFormData] = useState(initialize);

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(`Form Submitted: \nUsername: ${formData.username} \nPassword: ${formData.password}`)
    }

    return { formData, handleChange, handleSubmit };
}

export default useForm