import React from 'react';
import Flex from "../../themes/Flex";
import Button from "../atoms/Button";

const FilterMenu = () => {
    return <Flex justify="center">
            <Button>All</Button>
            <Button>Active</Button>
            <Button>Done</Button>
    </Flex>
};

export default FilterMenu;