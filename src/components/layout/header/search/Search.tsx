import { FC, useState } from 'react'
import styles from './Search.module.scss'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { IoIosSearch } from 'react-icons/io'

const Search: FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  return (
    <div className={styles['search-wrapper']}>
      <InputGroup className={styles.search}>
        <Input
          type='search'
          variant='flushed'
          placeholder='Search'
          onChange={e => setSearchTerm(e.target.value)}
          value={searchTerm}
          className={styles['remove-clear-btn']}
        />
        <InputRightElement>
          <button>
            <IoIosSearch />
          </button>
        </InputRightElement>
      </InputGroup>
    </div>
  )
}

export default Search
