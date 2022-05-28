import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'

import FilterListIcon from '@mui/icons-material/FilterList'
import SearchInput from '@components/Form/SearchInput'
import { Switch } from '@components/Form'
import '@assets/css/components/SearchBar.css'

interface Props {
  isSwitchEnabled?: boolean | null
}
const SearchBar: React.FC<Props> = ({ isSwitchEnabled }) => {
  const [isSearchEnabled, setSearchEnabled] = useState(false)

  const handleClose = () => {
    setSearchEnabled(false)
  }

  const handleSearch = () => {
    setSearchEnabled(true)
  }

  return (
    <div className="search-bar">
      {isSwitchEnabled && !isSearchEnabled ? (
        <Switch label="staked tokens" />
      ) : (
        <div></div>
      )}
      <div className="search-filter-section">
        {isSearchEnabled ? (
          <SearchInput
            type="text"
            placeholder="Please enter the search words."
            className="buy-search in-menu-search"
            onChange={() => {
              return
            }}
            onClose={handleClose}
          />
        ) : (
          <SearchIcon className="icon-color" onClick={handleSearch} />
        )}
        <FilterListIcon />
      </div>
    </div>
  )
}

export default SearchBar
