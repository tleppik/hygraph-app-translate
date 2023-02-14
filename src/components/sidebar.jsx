import {  Wrapper } from "@graphcms/app-sdk-react";
import { Button, Flex } from "@hygraph/baukasten";

function SidebarElement() {
    return (
        <Flex>
            <Button flex="1" onClick={() => alert("Hello!")}>
                Click Me
            </Button>
        </Flex>
    );
}

export default function Sidebar() {
    return (
        <Wrapper>
            <SidebarElement />
        </Wrapper>
    );
}
