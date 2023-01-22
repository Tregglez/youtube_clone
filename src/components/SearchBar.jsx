import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'

const SearchBar = () => {
  return (
    // Paper is mui component that is essentially a div that is floating.
    <Paper
      component='form'
      onSubmit={() => { }}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 }
      }}
    >
      {/* Making the search function with values. */}
      <input
        className='search-bar'
        placeholder='Search...'
        value=''
        onChange={() => {}}
      />
      {/* Search Button */}
      <IconButton
        type='submit'
        sx={{
          p: '10px',
          color: 'red'
        }}>
        <Search />
      </IconButton>
      </Paper>
  )
}

export default SearchBar
