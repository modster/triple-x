
import { PropsWithChildren } from 'react'
import { Canvas } from '@react-three/fiber'



export default function Provider({
  children,
  sky = 'dark',
}: PropsWithChildren <{ sky?: 'dark' | 'light' }>) {
  return (
    <>
      <color
        args={[sky ? '#000' : '#fff']}
        attach="background"
      />
      {children}
    </>
  )
}
