'use client'

import React from 'react'

interface SdInputProps {
  label: string
  name: string
  onInput: (name: string, value: string) => void
}

const SdInput: React.FC<SdInputProps> = ({ label, name, onInput }) => {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    onInput(name, value)
  }

  return (
    <div className="mb-4">
      <label className="block mb-1 font-medium">{label}</label>
      <input
        type="text"
        name={name}
        onChange={handleInput}
        className="w-full border border-gray-500 px-3 py-2 rounded"
        placeholder={`Enter ${label?.toLowerCase()}`}
      />
    </div>
  )
}

export default SdInput
