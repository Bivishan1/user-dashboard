'use client';
// components/ToastMessage.tsx
import React, { useEffect, useState } from 'react'
import { X } from 'lucide-react'

export interface ToastMessageProps {
  message: string
  description: string
  onClose?: () => void
  duration?: number // optional custom timeout
}

export const ToastMessage: React.FC<ToastMessageProps> = ({
  message,
  description,
  onClose,
  duration = 3000, // default 10 seconds
}) => {
  const [visible, setVisible] = useState(true)

  // Auto-dismiss after duration
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
      onClose?.()
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  // Don't render if not visible
  if (!visible) return null

  return (
    <div
      className="max-w-xs relative bg-white border border-gray-200 rounded-xl shadow-lg"
      role="alert"
      tabIndex={-1}
      aria-labelledby="toast-label"
    >
      <div className="flex p-4">

        <div className="ms-4 me-5">
          <h3 id="toast-label" className="text-gray-800 font-medium text-sm">
           {message}
          </h3>
          <div className="mt-1 text-sm text-gray-600">{description}</div>
          <div className="mt-3">
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            setVisible(false)
            onClose?.()
          }}
          className="absolute top-3 end-3 inline-flex justify-center items-center size-5 rounded-lg text-gray-800 opacity-50 hover:opacity-100 focus:outline-none"
          aria-label="Close"
        >
          <span className="sr-only">Close</span>
          <X className="size-4" />
        </button>
      </div>
    </div>
  )
}
