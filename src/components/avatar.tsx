interface AvatarProps {
  src: string
  hasBorder?: boolean
}

export function Avatar({ src, hasBorder = true }: AvatarProps) {
  return (
    <img 
      className={`${hasBorder ? 'border-gray-900 border-4 outline outline-2 outline-green-500' : ''} box-content w-12 rounded aspect-square object-cover object-top`}
      src={src}
    />
  )
}