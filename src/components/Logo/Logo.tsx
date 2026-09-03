import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  const loading = loadingFromProps || 'eager'
  const priority = priorityFromProps || 'high'

  return (
    /* eslint-disable @next/next/no-img-element */
    <img
      alt="NeuronCx"
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      style={{ filter: 'none' }}
      className={clsx('w-auto h-[34px]', className)}
      src="/ncx-logo.png"
    />
  )
}
