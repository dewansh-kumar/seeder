import { Box, Stack, styled } from '@mui/material'
import theme from '../../../themes'
import Text from '../../atoms/Typography'
import Icons from '../../atoms/Icons'

const LeftNavElemntBox = styled(Box)(({ active }: { active?: string }) => ({
  backgroundColor:
    active === 'ok'
      ? theme.palette.background.backgroundElevation1
      : theme.palette.background.backgroundElevation0,
  padding: '16px',
  borderRadius: '12px',
  cursor: 'pointer',
}))

interface SidebarElementPropType {
  active?: boolean
  title: string
  icon: string
  name: string
  onClick?: () => void
}

const SidebarElement = ({
  active,
  title,
  icon,
  name,
  onClick,
}: SidebarElementPropType) => {
  return (
    <LeftNavElemntBox onClick={onClick} active={active ? 'ok' : ''} id={name}>
      <Stack direction="row" gap={1} alignItems="center">
        <Icons src={icon} alt={name} />
        <Text
          sx={{
            color: active
              ? theme.palette.primary.primaryTextLowEmp
              : theme.palette.primary.primaryTextHighEmp,
          }}
          textBody={title}
          variant="body2"
        />
      </Stack>
    </LeftNavElemntBox>
  )
}
SidebarElement.defaultProps = {
  active: false,
}

export default SidebarElement
