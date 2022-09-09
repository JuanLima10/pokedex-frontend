import { ReactEventHandler } from 'react';
import { SearchProps } from '../../types/Input';

import SearchIcon from '../../assets/Search-icon'
import Style from './styles.module.scss'

export function SearchInput({ placeholder, onChange }: SearchProps) {
    return (
        <div className={Style.search}>
            <div className={Style.icon}>
                <SearchIcon />
            </div>
            <input
                type="text"
                placeholder={ placeholder }
                onChange={ onChange }
            />
        </div>
    )
}