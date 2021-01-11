import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

export default function GenderDropdown({ genderSelected }) {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                Please select gender
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onSelect={() => genderSelected("male")} >Man</Dropdown.Item>
                <Dropdown.Item onSelect={() => genderSelected("female")} >Woman</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}