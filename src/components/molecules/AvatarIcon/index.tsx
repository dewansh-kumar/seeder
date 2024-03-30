import { Stack, styled } from '@mui/material'
import Icon from '../../../../public/assests/icons/DropDown.svg'
import Avtar from '../../atoms/Avtar'
import Icons from '../../atoms/Icons/index'

interface AvtarProps {
  src?: string
  alt?: string
  width?: string
  height?: string
}

const AvatarStack = styled(Stack)({
  flexDirection: 'row',
  alignItems: 'center',
  gap: '2px',
})

const AvtarIcon = ({ height, width, alt = 'My Pic', ...props }: AvtarProps) => {
  return (
    <AvatarStack>
      <Avtar src={props.src} alt={alt} />
      <Icons src={Icon} alt="drop-down-icon" />
    </AvatarStack>
  )
}
AvtarIcon.defaultProps = {
  height: '34px',
  width: '34px',
}
export default AvtarIcon
