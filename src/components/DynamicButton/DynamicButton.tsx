import { Button, CSS, Loading } from '@nextui-org/react'

type Item = {
    text: string,
    onPress?: () => void,
    disabled?: boolean,
}

type Props = {
        items: Item[]
        index: number
        bordered?: boolean
        rounded?: boolean
        loading?: boolean
        css?: CSS
    }

export const DynamicButton = ({
  items,
  index,
  bordered = true,
  rounded = true,
  loading = false,
  css
}: Props) => {
  const cssProps = css || { width: '100%', color: '$white', borderColor: '$kondorPrimary' }
  const disabled = items[index]?.disabled || loading
  const onPress = items[index]?.onPress || (() => {})
  return (
    <Button
      onPress={onPress}
      bordered={bordered}
      rounded={rounded}
      disabled={disabled}
      css={cssProps}
    >
      {loading ? <Loading /> : null}
      {items[index].text}
    </Button>
  )
}