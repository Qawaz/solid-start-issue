import solid from 'solid-start/vite'
// @ts-expect-error no typing
import nodeStart from 'solid-start-node'
import { defineConfig } from 'vite'

export default defineConfig(() => {
  return {
    plugins: [solid({ adapter: nodeStart(), ssr : true })],
  }
})
