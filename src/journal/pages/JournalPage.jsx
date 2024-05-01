import { AddOutlined, MailOutline } from "@mui/icons-material"
import { JournalLayout } from "../layout/JournalLayout"
import { NothingSelectedView } from "../views/NothingSelectedView"
import { NoteView } from "../views/NoteView"
import { IconButton } from "@mui/material"

export const JournalPage = () => {
  return (
    <JournalLayout>

      {/* <Typography>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis dolorum pariatur, quia molestias vero temporibus minus ad adipisci blanditiis. Magnam necessitatibus laudantium molestiae doloremque deserunt accusantium optio autem eos aliquid?
      </Typography> */}
      {/* <NothingSelectedView /> */}
      <NoteView />

      <IconButton
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>


    </JournalLayout>
  )
}
