import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'

import { fetchFromAPI } from '../utils/fetchFromAPI'

import { Sidebar, Videos } from './'

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`);
  }, [selectedCategory]);

  return (
  // this stack has styling on line 6 which allows sidebar to be responsive
  <Stack sx={{ flexDirection: { sx: 'colum', md: 'row' } }}>
    <Box sx={{
      height: { sx: 'auto', md: '92vh' },
      borderRight: '1px solid #3d3d3d',
      px: { sx: 0, md: 2 }
    }}>
      {/* Rendered Sidebar */}
      <Sidebar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <Typography className='copyright' variant='body2' sx={{mt: 1.5, color:'#fff'}}>
        copyright 2022 Link Together
      </Typography>
    </Box>

    {/* Main Part - Including Title of current video and video section in the feed */}
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
      <Typography variant="h4"
        fontWeight='bold' mb={2} sx={{ color: 'white' }}>
        {selectedCategory} <span style={{ color: '#F31503' }}>videos</span>
      </Typography>

      <Videos videos={[]} />
    </Box>
  </Stack>
  )
}

export default Feed