import 'react'
import { Story, RenderFunction } from '@storybook/react'
declare module 'react' {
  type StoryRegister = <T extends Story>(story: T) => T
  type StoryRender = RenderFunction
}
